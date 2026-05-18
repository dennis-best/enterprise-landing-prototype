#!/usr/bin/env node
/**
 * Materialize Gembox Cursor skill packs from Notion `notion-fetch` output.
 *
 * Usage:
 *   node scripts/materialize-gembox-skill-pack.mjs <fetch.json> [fetch2.json ...]
 *   node scripts/materialize-gembox-skill-pack.mjs --text <raw.txt>
 *   cat fetch.json | node scripts/materialize-gembox-skill-pack.mjs --stdin
 *
 * Each input may be:
 * - JSON with a `text` field (notion-fetch MCP response)
 * - Raw page text containing ```plain text ... ``` with === FILE: blocks
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join, resolve, relative } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DEFAULT_REPO_ROOT = resolve(__dirname, "..");

const FILE_MARKER_RE = /^=== FILE: (.+?) ===\s*$/gm;

/**
 * @param {string} raw
 * @returns {string}
 */
function extractSkillPackBody(raw) {
  let text = raw;
  if (text.trimStart().startsWith("{")) {
    try {
      const parsed = JSON.parse(text);
      text = parsed.text ?? text;
    } catch {
      /* keep as raw text */
    }
  }

  const codeBlockMatch = text.match(/```(?:plain text|plaintext|text)?\s*\n([\s\S]*?)```/);
  if (codeBlockMatch) {
    return codeBlockMatch[1];
  }

  const markerIdx = text.search(/=== FILE: /);
  if (markerIdx >= 0) {
    return text.slice(markerIdx);
  }

  return text;
}

/**
 * Normalize Notion HTML artifacts in pack B exports.
 * @param {string} content
 * @returns {string}
 */
function normalizeContent(content) {
  return content
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/\r\n/g, "\n");
}

/**
 * @param {string} body
 * @returns {{ path: string, content: string }[]}
 */
export function parseFileBlocks(body) {
  const normalized = normalizeContent(extractSkillPackBody(body));
  const blocks = [];
  const markers = [...normalized.matchAll(FILE_MARKER_RE)];

  if (markers.length === 0) {
    return blocks;
  }

  for (let i = 0; i < markers.length; i++) {
    const path = markers[i][1].trim();
    const start = markers[i].index + markers[i][0].length;
    const end = i + 1 < markers.length ? markers[i + 1].index : normalized.length;
    let content = normalized.slice(start, end).replace(/^\n/, "").replace(/\n$/, "");
    blocks.push({ path, content });
  }

  return blocks;
}

/**
 * @param {{ path: string, content: string }[]} blocks
 * @param {string} repoRoot
 * @returns {{ written: string[], skipped: string[], errors: { path: string, error: string }[] }}
 */
export function materializeBlocks(blocks, repoRoot = DEFAULT_REPO_ROOT) {
  const written = [];
  const skipped = [];
  const errors = [];

  for (const { path, content } of blocks) {
    if (!path.startsWith(".cursor/skills/")) {
      errors.push({ path, error: "Path must be under .cursor/skills/" });
      continue;
    }

    const absPath = join(repoRoot, path);
    const rel = relative(repoRoot, absPath);
    if (rel.startsWith("..") || absPath === repoRoot) {
      errors.push({ path, error: "Path escapes repo root" });
      continue;
    }

    try {
      mkdirSync(dirname(absPath), { recursive: true });
      writeFileSync(absPath, content, "utf8");
      written.push(path);
    } catch (err) {
      errors.push({
        path,
        error: err instanceof Error ? err.message : String(err),
      });
    }
  }

  return { written, skipped, errors };
}

/**
 * @param {string} input
 * @param {string} repoRoot
 */
export function materializeFromText(input, repoRoot = DEFAULT_REPO_ROOT) {
  const blocks = parseFileBlocks(input);
  return { blocks, ...materializeBlocks(blocks, repoRoot) };
}

function readInput(path) {
  if (path === "--stdin") {
    return readFileSync(0, "utf8");
  }
  return readFileSync(path, "utf8");
}

function printReport(label, result) {
  const { written, errors } = result;
  if (label) {
    console.log(`\n# ${label}`);
  }
  console.log(`  blocks: ${result.blocks?.length ?? written.length}`);
  console.log(`  written: ${written.length}`);
  if (errors.length) {
    console.log(`  errors: ${errors.length}`);
    for (const e of errors) {
      console.log(`    - ${e.path}: ${e.error}`);
    }
  }
}

function main() {
  const args = process.argv.slice(2);
  let repoRoot = DEFAULT_REPO_ROOT;
  const inputs = [];

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--repo" && args[i + 1]) {
      repoRoot = resolve(args[++i]);
    } else if (args[i] === "--text" && args[i + 1]) {
      inputs.push({ label: "stdin-text", data: args[++i] });
    } else if (args[i] === "--stdin") {
      inputs.push({ label: "stdin", data: readInput("--stdin") });
    } else {
      inputs.push({ label: args[i], data: readInput(args[i]) });
    }
  }

  if (inputs.length === 0) {
    console.error(`Usage: node scripts/materialize-gembox-skill-pack.mjs [--repo <root>] <fetch.json> ...`);
    process.exit(1);
  }

  const allWritten = [];
  const allErrors = [];

  for (const { label, data } of inputs) {
    const result = materializeFromText(data, repoRoot);
    printReport(label, result);
    allWritten.push(...result.written);
    allErrors.push(...result.errors);
  }

  const uniqueWritten = [...new Set(allWritten)].sort();
  console.log("\n=== Summary ===");
  console.log(`Total files written: ${uniqueWritten.length}`);
  for (const f of uniqueWritten) {
    console.log(`  ${f}`);
  }
  if (allErrors.length) {
    console.log(`Failures: ${allErrors.length}`);
    process.exit(1);
  }
}

import { pathToFileURL } from "node:url";
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main();
}
