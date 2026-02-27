// ===== CONFIG =====
const BLOCK_TEXT = "Site can't be open";

// ===== BLOCK SCREEN =====
const BLOCK_HTML = `
<head>
  <title>Blocked</title>
  <meta charset="utf-8" />
  <style>
    html, body {
      margin: 0;
      padding: 0;
      background: #111;
      height: 100vh;
      width: 100vw;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 600;
      font-size: x-large;
      color: white;
      font-family: system-ui, -apple-system, sans-serif;
    }
  </style>
</head>
<body>
  <div>${BLOCK_TEXT}</div>
</body>
`;

// ===== HELPER =====
function alreadyBlocked() {
  return document.documentElement.innerHTML.includes(BLOCK_TEXT);
}

function isBlocked(hostname, blockedSites) {
  return blockedSites.some((d) => {
    if (!d || !d.includes(".")) return false;
    return hostname === d || hostname.endsWith("." + d);
  });
}

function blockPage() {
  if (alreadyBlocked()) return;

  try {
    window.stop();
  } catch {}

  try {
    document.documentElement.innerHTML = BLOCK_HTML;
  } catch {}
}

(async () => {
  const { blockedSites = [] } = await chrome.storage.local.get("blockedSites");
  const hostname = location.hostname;

  if (!isBlocked(hostname, blockedSites)) return;

  // ===== MULTI-LAYER DEFENSE =====
  blockPage();
  setTimeout(blockPage, 0);
  setTimeout(blockPage, 50);
  setTimeout(blockPage, 250);

  // ===== SPA DEFENSE =====
  const observer = new MutationObserver(() => {
    if (!alreadyBlocked()) {
      blockPage();
    }
  });

  try {
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  } catch {}

  // ===== NETWORK KILL SWITCH =====
  try {
    Object.defineProperty(window, "fetch", {
      value: () => new Promise(() => {}),
    });

    Object.defineProperty(window, "XMLHttpRequest", {
      value: function () {},
    });

    Object.defineProperty(navigator, "sendBeacon", {
      value: () => false,
    });
  } catch {}
})();
