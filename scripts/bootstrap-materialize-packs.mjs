#!/usr/bin/env node
/**
 * Bootstrap helper: materialize skill packs from notion-fetch JSON on stdin.
 * Pipe one or two JSON objects (concatenated or newline-separated).
 *
 *   node scripts/bootstrap-materialize-packs.mjs < scripts/.cache/packs.jsonl
 */

import { materializeFromText } from "./materialize-gembox-skill-pack.mjs";

const input = await new Promise((resolve, reject) => {
  const chunks = [];
  process.stdin.on("data", (c) => chunks.push(c));
  process.stdin.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
  process.stdin.on("error", reject);
});

const parts = input.trim().split(/\n(?=\{)/);
const allWritten = [];
const allErrors = [];

for (const part of parts) {
  if (!part.trim()) continue;
  const result = materializeFromText(part);
  allWritten.push(...result.written);
  allErrors.push(...result.errors);
}

const unique = [...new Set(allWritten)].sort();
console.log(JSON.stringify({ count: unique.length, written: unique, errors: allErrors }, null, 2));
if (allErrors.length) process.exit(1);
