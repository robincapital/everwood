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


  // Prefill contact interest from ?interest=, ?subject= or ?product= (shop fallback links)
  var params = new URLSearchParams(window.location.search);
  var productParam = params.get("product");
  var interestParam = params.get("interest") || params.get("subject") ||
    (productParam ? "Shop order: " + productParam : null);
  var interestSelect = document.getElementById("interest");
  if (interestSelect && interestParam) {
    var matched = false;
    Array.prototype.forEach.call(interestSelect.options, function (opt) {
      if (opt.value.toLowerCase() === interestParam.toLowerCase() ||
          opt.text.toLowerCase() === interestParam.toLowerCase()) {
        interestSelect.value = opt.value;
        matched = true;
      }
    });
    if (!matched) {
      // Add option if not present
      var opt = document.createElement("option");
      opt.value = interestParam;
      opt.textContent = interestParam;
      interestSelect.appendChild(opt);
      interestSelect.value = interestParam;
    }
  }

  // Shop: Stripe Payment Links. Buttons carry data-stripe-link; until a real
  // https://buy.stripe.com/... URL is pasted in, the href stays on the contact page.
  document.querySelectorAll("a[data-stripe-link]").forEach(function (a) {
    var link = (a.getAttribute("data-stripe-link") || "").trim();
    if (link.indexOf("https://buy.stripe.com/") === 0) {
      a.setAttribute("href", link);
      a.setAttribute("rel", "noopener");
    }
  });

  // Full Circle signup mailto fallback (same pattern as contact)
  var signup = document.getElementById("fullcircle-form");
  if (signup) {
    signup.addEventListener("submit", function (e) {
      var action = (signup.getAttribute("action") || "").trim();
      if (action && action.indexOf("https://") === 0) return;
      e.preventDefault();
      var name = (signup.querySelector('[name="name"]') || {}).value || "";
      var email = (signup.querySelector('[name="email"]') || {}).value || "";
      var beach = (signup.querySelector('[name="preferred_beach"]') || {}).value || "";
      var to = signup.getAttribute("data-mailto") || "sales@everwood-usa.com";
      var subject = encodeURIComponent("Full Circle cleanup sign-up");
      var body = encodeURIComponent(
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Preferred beach: " + beach + "\n\n" +
        "I would like to join an upcoming Full Circle cleanup."
      );
      window.location.href = "mailto:" + to + "?subject=" + subject + "&body=" + body;
    });
  }

  // Trace-your-piece: coming soon
  var traceForm = document.getElementById("trace-form");
  if (traceForm) {
    traceForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = document.getElementById("trace-note");
      if (note) {
        note.textContent = "Tracing is coming soon. Your code was not sent — check back after we launch QR lookup.";
        note.hidden = false;
      }
    });
  }

})();
