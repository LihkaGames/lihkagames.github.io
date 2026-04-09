// =============================================
// Lihka Games - app.js
// =============================================
(function () {
  'use strict';

  // ===== MOBILE MENU =====
  const menuBtn = document.querySelector('.menu-btn');
  const mobNav = document.querySelector('.mob-nav');
  const mobClose = document.querySelector('.mob-close');
  const mobOverlay = document.querySelector('.mob-overlay');
  const btt = document.querySelector('.btt');
  const headerSearch = document.getElementById('hs');

  function openMenu() {
    mobNav && mobNav.classList.add('open');
    mobOverlay && mobOverlay.classList.add('open');
    menuBtn && menuBtn.classList.add('active');
    document.body.classList.add('no-scroll');
  }

  function closeMenu() {
    mobNav && mobNav.classList.remove('open');
    mobOverlay && mobOverlay.classList.remove('open');
    menuBtn && menuBtn.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }

  menuBtn && menuBtn.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    mobNav && mobNav.classList.contains('open') ? closeMenu() : openMenu();
  });

  mobClose && mobClose.addEventListener('click', closeMenu);
  mobOverlay && mobOverlay.addEventListener('click', closeMenu);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMenu();
  });

  if (mobNav) {
    mobNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
  }

  // ===== BACK TO TOP =====
  if (btt) {
    window.addEventListener('scroll', function () {
      btt.classList.toggle('show', window.scrollY > 300);
    });
    btt.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ===== HEADER SEARCH =====
  if (headerSearch) {
    function doSearch() {
      var v = headerSearch.value.trim();
      if (v) location.href = 'search.html?q=' + encodeURIComponent(v);
    }
    headerSearch.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') doSearch();
    });
    var searchBtn = headerSearch.parentElement.querySelector('button');
    searchBtn && searchBtn.addEventListener('click', doSearch);
  }

})();

// =============================================
// SEARCH DATABASE - All Apps & Games
// =============================================
var DB = [
  { name: "Block Fusion",                  type: "game", link: "https://github.com/LihkaGames/Block-Fusion-Game/raw/refs/heads/main/Block%20Fusion.apk" },
  { name: "Blitz Storm Arena",             type: "game", link: "https://github.com/LihkaGames/Blitz-Storm-Arena/raw/refs/heads/main/Blitz%20Storm%20Arena.apk" },
  { name: "Crystal Cascade",               type: "game", link: "https://github.com/LihkaGames/Crystal-Cascade-Game/raw/refs/heads/main/Crystal%20Cascade.apk" },
  { name: "Disc Strike Arena",             type: "game", link: "https://github.com/LihkaGames/Disc-Strike-Arena-Game/releases/download/v1.0/Disc.Strike.Arena.apk" },
  { name: "Roll Master Quest: Ludo Game",  type: "game", link: "https://github.com/LihkaGames/Roll-Master-Quest-Ludo-Game/releases/download/v1.0.0/Roll.Master.Quest.apk" },
  { name: "Serpent Surge",                 type: "game", link: "https://github.com/LihkaGames/Serpent-Surge-Game/releases/download/v1.0.0/Serpent.Surge.apk" },
  { name: "Turbo Trail Racer",             type: "game", link: "https://github.com/LihkaGames/Turbo-Trail-Racer-Game/releases/download/v1.0.0/Turbo.Trail.Racer.apk" },
  { name: "Precision Shot",                type: "game", link: "https://github.com/LihkaGames/Precision-Shot-Game/releases/download/v1.0.0/Precision.Shot.apk" },
  { name: "Phantom Strike",                type: "game", link: "https://github.com/LihkaGames/Phantom-Strike-Game/releases/download/v1.0.0/Phantom.Strike.apk" },
  { name: "Glass Velocity",                type: "game", link: "https://github.com/LihkaGames/Glass-Velocity-Game/releases/download/v1.0.0/Glass.Velocity.apk" },
  { name: "Axe Splitter",                  type: "game", link: "https://github.com/LihkaGames/Axe-Splitter-Game/releases/download/v1.0.0/Axe.Splitter.apk" },
  { name: "Toon Crosser",                  type: "game", link: "https://github.com/LihkaGames/Toon-Crosser-Game/releases/download/v1.0.0/Toon.Crosser.apk" },
  { name: "PhotoEdit Pro",                 type: "app",  link: "#" },
  { name: "CloudNote Plus",               type: "app",  link: "#" },
  { name: "FitTrack Health",              type: "app",  link: "#" },
  { name: "MusicBox Stream",              type: "app",  link: "#" },
  { name: "VideoMaker",                   type: "app",  link: "#" },
  { name: "Social Connect",               type: "app",  link: "#" }
];

// =============================================
// SEARCH PAGE
// =============================================
if (window.location.pathname.includes('search.html')) {
  var params  = new URLSearchParams(window.location.search);
  var query   = params.get('q') || '';
  var qdEl    = document.getElementById('qd');
  var rcEl    = document.getElementById('rc');
  var resEl   = document.getElementById('search-results');
  var siEl    = document.getElementById('si');

  // Live search input on search page
  if (siEl) {
    siEl.value = query;
    siEl.addEventListener('input', function () {
      runSearch(siEl.value.trim());
    });
    siEl.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        var v = siEl.value.trim();
        if (v) location.href = 'search.html?q=' + encodeURIComponent(v);
      }
    });
  }

  if (qdEl) qdEl.textContent = query;
  runSearch(query);

  function runSearch(q) {
    if (!resEl) return;

    if (!q) {
      if (rcEl) rcEl.textContent = '0';
      resEl.innerHTML =
        '<div style="text-align:center;padding:60px 20px;color:#666">' +
        '<p style="font-size:2rem">🔎</p>' +
        '<p style="color:#aaa">Type to search apps & games</p></div>';
      return;
    }

    var lower   = q.toLowerCase();
    var results = DB.filter(function (item) {
      return item.name.toLowerCase().includes(lower);
    });

    if (rcEl) rcEl.textContent = results.length;

    if (results.length === 0) {
      resEl.innerHTML =
        '<div style="text-align:center;padding:60px 20px;color:#666">' +
        '<p style="font-size:2rem">😕</p>' +
        '<p style="color:#aaa">No results for "<b>' + q + '</b>"</p>' +
        '<p>Try: Block, Racing, Ludo, Snake</p></div>';
      return;
    }

    // ── Show name + download button ONLY (no images) ──
    var html = '<div style="display:flex;flex-direction:column;gap:10px;">';
    results.forEach(function (item) {
      html +=
        '<div style="display:flex;align-items:center;justify-content:space-between;' +
        'padding:14px 18px;background:#111;border-radius:12px;border:1px solid #222;">' +
        '<div>' +
        '<div style="font-weight:700;font-size:1rem;color:#fff;">' + item.name + '</div>' +
        '<div style="font-size:0.75rem;color:#888;margin-top:2px;">Lihka Games &bull; ' + item.type + '</div>' +
        '</div>' +
        '<a href="' + item.link + '" class="dl" download style="flex-shrink:0;">⬇ Download</a>' +
        '</div>';
    });
    html += '</div>';
    resEl.innerHTML = html;
  }
}