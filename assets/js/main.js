(function () {
  "use strict";

  // Mobile nav
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Contact form: mailto fallback (works on static hosting)
  // To enable Formspree: set form action to your endpoint and method="POST"
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      var action = (form.getAttribute("action") || "").trim();
      // If Formspree (or other) endpoint is configured, let the browser POST normally
      if (action && action.indexOf("https://") === 0) {
        return;
      }
      e.preventDefault();
      var name = (form.querySelector('[name="name"]') || {}).value || "";
      var email = (form.querySelector('[name="email"]') || {}).value || "";
      var org = (form.querySelector('[name="organization"]') || {}).value || "";
      var interest = (form.querySelector('[name="interest"]') || {}).value || "";
      var message = (form.querySelector('[name="message"]') || {}).value || "";
      var to = form.getAttribute("data-mailto") || "sales@everwood-usa.com";
      var subject = encodeURIComponent("Everwood USA inquiry — " + (interest || "General"));
      var body = encodeURIComponent(
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Organization: " + org + "\n" +
        "Interest: " + interest + "\n\n" +
        message
      );
      window.location.href = "mailto:" + to + "?subject=" + subject + "&body=" + body;
    });
  }
})();
