(function () {
  "use strict";

  var STORAGE_KEY = "gemboxPrototypeGatePassed";

  var overlay = document.getElementById("gate-overlay");
  var main = document.getElementById("app-main");
  var form = document.getElementById("gate-form");
  var emailInput = document.getElementById("gate-email");
  var errorEl = document.getElementById("gate-error");
  var submitBtn = document.getElementById("gate-submit");
  var banner = document.getElementById("site-banner");
  var bannerClose = document.getElementById("site-banner-close");

  function gatePassed() {
    return sessionStorage.getItem(STORAGE_KEY) === "1";
  }

  function revealApp() {
    if (overlay) overlay.hidden = true;
    if (main) main.hidden = false;
  }

  function showGate() {
    if (overlay) overlay.hidden = false;
    if (main) main.hidden = true;
  }

  function setError(message) {
    if (!errorEl) return;
    if (message) {
      errorEl.textContent = message;
      errorEl.hidden = false;
    } else {
      errorEl.textContent = "";
      errorEl.hidden = true;
    }
  }

  function validateEmail(value) {
    return value.toLowerCase().indexOf("eab.com") !== -1;
  }

  function onSubmit(event) {
    event.preventDefault();
    var value = (emailInput && emailInput.value) || "";
    if (!validateEmail(value)) {
      setError("Enter a valid email address to continue.");
      if (emailInput) emailInput.focus();
      return;
    }
    setError("");
    sessionStorage.setItem(STORAGE_KEY, "1");
    revealApp();
  }

  if (bannerClose && banner) {
    bannerClose.addEventListener("click", function () {
      banner.hidden = true;
    });
  }

  if (form) {
    form.addEventListener("submit", onSubmit);
  }

  if (emailInput) {
    emailInput.addEventListener("input", function () {
      setError("");
    });
  }

  if (gatePassed()) {
    revealApp();
  } else {
    showGate();
    if (emailInput) emailInput.focus();
  }
})();
