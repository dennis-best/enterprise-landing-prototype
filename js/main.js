(function () {
  var banner = document.getElementById("site-banner");
  var bannerClose = document.getElementById("site-banner-close");
  var formSection = document.getElementById("elp-form");
  var form = document.getElementById("elp-form-fields");
  var formSuccess = document.getElementById("elp-form-success");
  var scrollButtons = document.querySelectorAll("[data-scroll-form]");

  if (bannerClose && banner) {
    bannerClose.addEventListener("click", function () {
      banner.hidden = true;
    });
  }

  scrollButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (formSection) {
        formSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      form.hidden = true;
      if (formSuccess) {
        formSuccess.hidden = false;
      }
    });
  }
})();
