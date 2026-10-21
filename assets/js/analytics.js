/* Everwood USA — site analytics
 *
 * Replace the two placeholder IDs below to switch analytics on:
 *   CF_BEACON_TOKEN   — Cloudflare Web Analytics site token (cookieless, no consent needed)
 *   GA_MEASUREMENT_ID — Google Analytics 4 measurement ID, e.g. "G-XXXXXXXXXX"
 *                       (only loads after the visitor accepts the cookie notice)
 * While a value is still its placeholder, that service is not loaded at all
 * (and the cookie notice is not shown).
 */
const CF_BEACON_TOKEN = '99e4de7a56764908be7d3b12532f3a66';
const GA_MEASUREMENT_ID = 'G-LTM2HWY9ND';

(function () {
  'use strict';

  var CONSENT_KEY = 'ew-consent';
  var CF_PLACEHOLDER = 'CF_TOKEN_PLACEHOLDER';
  var GA_PLACEHOLDER = 'G-PLACEHOLDER';
  // Privacy page link for the banner; leave empty when the site has no privacy page.
  var PRIVACY_PATH = '';

  /* ---------- Cloudflare Web Analytics (cookieless) ---------- */
  function loadCloudflare() {
    if (!CF_BEACON_TOKEN || CF_BEACON_TOKEN === CF_PLACEHOLDER) return;
    var s = document.createElement('script');
    s.defer = true;
    s.src = 'https://static.cloudflareinsights.com/beacon.min.js';
    s.setAttribute('data-cf-beacon', JSON.stringify({ token: CF_BEACON_TOKEN }));
    document.head.appendChild(s);
  }

  /* ---------- Google Analytics 4 (consent-gated) ---------- */
  var gaEnabled = !!GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== GA_PLACEHOLDER;
  var gaLoaded = false;

  function loadGA() {
    if (!gaEnabled || gaLoaded) return;
    gaLoaded = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(GA_MEASUREMENT_ID);
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });
  }

  function getConsent() {
    try { return window.localStorage.getItem(CONSENT_KEY); } catch (e) { return null; }
  }
  function setConsent(value) {
    try { window.localStorage.setItem(CONSENT_KEY, value); } catch (e) { /* storage blocked */ }
  }

  /* ---------- Cookie notice ---------- */
  var STYLES =
    '.ew-consent{position:fixed;left:1rem;right:1rem;bottom:1rem;z-index:1000;max-width:440px;margin-left:auto;' +
    'background:var(--white,#fff);color:var(--ink,#1a2b2e);border:1px solid var(--border,rgba(18,107,58,.15));' +
    'border-radius:var(--radius,12px);box-shadow:var(--shadow,0 12px 40px rgba(10,61,40,.12));padding:1rem 1.1rem;' +
    'font-family:var(--font-body,"DM Sans",system-ui,sans-serif);font-size:.9rem;line-height:1.5}' +
    '.ew-consent p{margin:0 0 .75rem}' +
    '.ew-consent a{color:var(--brand-green,#0F6938);text-decoration:underline}' +
    '.ew-consent-actions{display:flex;flex-wrap:wrap;gap:.5rem;align-items:center}' +
    '.ew-consent .btn{padding:.5rem 1.1rem;font-size:.88rem}' +
    '.ew-consent button:focus-visible,.ew-consent a:focus-visible{outline:3px solid var(--bay-mid,#2a9d8f);outline-offset:2px}' +
    '@media (max-width:480px){.ew-consent{left:.5rem;right:.5rem;bottom:.5rem;max-width:none}' +
    '.ew-consent-actions .btn{flex:1 1 auto}}';

  function showBanner() {
    var style = document.createElement('style');
    style.id = 'ew-consent-styles';
    style.textContent = STYLES;
    document.head.appendChild(style);

    var banner = document.createElement('div');
    banner.className = 'ew-consent';
    banner.id = 'ew-consent';
    banner.setAttribute('role', 'region');
    banner.setAttribute('aria-label', 'Cookie notice');

    var text = document.createElement('p');
    text.id = 'ew-consent-text';
    text.textContent = 'We use cookies from Google Analytics to understand how people find Everwood USA. You can say no and the site works the same.';
    banner.appendChild(text);

    var actions = document.createElement('div');
    actions.className = 'ew-consent-actions';

    var accept = document.createElement('button');
    accept.type = 'button';
    accept.className = 'btn btn-solid';
    accept.textContent = 'Accept';

    var decline = document.createElement('button');
    decline.type = 'button';
    decline.className = 'btn btn-outline';
    decline.textContent = 'No thanks';

    actions.appendChild(accept);
    actions.appendChild(decline);

    if (PRIVACY_PATH) {
      var link = document.createElement('a');
      link.href = PRIVACY_PATH;
      link.textContent = 'Privacy';
      actions.appendChild(link);
    }
    banner.appendChild(actions);

    function close() {
      if (banner.parentNode) banner.parentNode.removeChild(banner);
    }
    accept.addEventListener('click', function () {
      setConsent('accepted');
      close();
      loadGA();
    });
    decline.addEventListener('click', function () {
      setConsent('declined');
      close();
    });

    document.body.appendChild(banner);
  }

  function init() {
    loadCloudflare();
    if (!gaEnabled) return; // placeholder ID: no GA, no banner
    var consent = getConsent();
    if (consent === 'accepted') { loadGA(); return; }
    if (consent === 'declined') return;
    showBanner();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
