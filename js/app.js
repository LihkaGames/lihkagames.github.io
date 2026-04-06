// =============================================
// Lihka Games - Main JavaScript (ADVANCED SEARCH WITH ORIGINAL LOGOS)
// =============================================

(function () {
    'use strict';

    // ===== DOM Elements =====
    const menuBtn = document.querySelector('.menu-btn');
    const mobNav = document.querySelector('.mob-nav');
    const mobClose = document.querySelector('.mob-close');
    const mobOverlay = document.querySelector('.mob-overlay');
    const btt = document.querySelector('.btt');
    const headerSearch = document.getElementById('hs');

    // ===== Mobile Menu - OPEN =====
    function openMenu() {
        if (mobNav) mobNav.classList.add('open');
        if (mobOverlay) mobOverlay.classList.add('open');
        if (menuBtn) menuBtn.classList.add('active');
        document.body.classList.add('no-scroll');
    }

    // ===== Mobile Menu - CLOSE =====
    function closeMenu() {
        if (mobNav) mobNav.classList.remove('open');
        if (mobOverlay) mobOverlay.classList.remove('open');
        if (menuBtn) menuBtn.classList.remove('active');
        document.body.classList.remove('no-scroll');
    }

    // ===== Menu Button Click =====
    if (menuBtn) {
        menuBtn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            if (mobNav && mobNav.classList.contains('open')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }

    // ===== Close Button Click =====
    if (mobClose) {
        mobClose.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            closeMenu();
        });
    }

    // ===== Overlay Click to Close =====
    if (mobOverlay) {
        mobOverlay.addEventListener('click', function (e) {
            e.preventDefault();
            closeMenu();
        });
    }

    // ===== Close menu when clicking nav links =====
    if (mobNav) {
        var navLinks = mobNav.querySelectorAll('a');
        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].addEventListener('click', function () {
                closeMenu();
            });
        }
    }

    // ===== Close menu on Escape key =====
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });

    // ===== Back to Top Button =====
    if (btt) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                btt.classList.add('show');
            } else {
                btt.classList.remove('show');
            }
        });

        btt.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ===== Card Click Navigation =====
    var cards = document.querySelectorAll('[data-go]');
    for (var j = 0; j < cards.length; j++) {
        cards[j].addEventListener('click', function (e) {
            // Don't hijack actual links or buttons inside the card
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') return;
            if (e.target.closest('a') || e.target.closest('button')) return;
            var url = this.getAttribute('data-go');
            if (url) location.href = url;
        });
    }

    // ===== Header Search =====
    if (headerSearch) {
        headerSearch.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                var v = headerSearch.value.trim();
                if (v) {
                    location.href = 'search.html?q=' + encodeURIComponent(v);
                }
            }
        });

        // Also handle the search button next to the input
        var searchBtn = headerSearch.parentElement.querySelector('button');
        if (searchBtn) {
            searchBtn.addEventListener('click', function () {
                var v = headerSearch.value.trim();
                if (v) {
                    location.href = 'search.html?q=' + encodeURIComponent(v);
                }
            });
        }
    }

    // ===== Hero Search Enter Key =====
    var heroSearch = document.getElementById('hsi');
    if (heroSearch) {
        heroSearch.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                var v = heroSearch.value.trim();
                if (v) {
                    location.href = 'search.html?q=' + encodeURIComponent(v);
                }
            }
        });
    }

})();

// =============================================
// 🔥 SEARCH DATABASE - ALL GAMES/APPS WITH ORIGINAL FULL LOGOS
// =============================================

const searchDatabase = [
    {
        name: "Block Fusion",
        developer: "Lihka Games",
        rating: "4.7",
        size: "26 MB",
        type: "game",
        tags: ["puzzle", "blocks", "fusion", "strategy", "casual"],
        icon: "linear-gradient(135deg,#667eea,#764ba2)",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 108">
            <path d="M16.3,88.8 Q54,99 91.7,88.8 Q94.6,81.6 91.7,74.2 Q54,64.2 16.3,74.2 Q13.4,81.6 16.3,88.8z" fill="#000000" fill-opacity="0.12"/>
            <path d="M22.1,85.9 Q54,93.2 85.9,85.9 Q88.8,80.1 85.9,75.7 Q54,68.6 22.1,75.7 Q19.2,80.1 22.1,85.9z" fill="#000000" fill-opacity="0.08"/>
            <g>
                <path d="M34.6,36.6 L34.6,51.1 L43.3,46.8 L43.3,32.3z" fill="#0D47A1"/>
                <path d="M17.2,32.3 L34.6,36.6 L43.3,32.3 L25.8,28z" fill="#42A5F5"/>
                <path d="M17.2,32.3 L17.2,46.8 L34.6,51.1 L34.6,36.6z" fill="#1E88E5"/>
            </g>
            <g>
                <path d="M54,40.9 L54,55.5 L62.7,51.1 L62.7,36.6z" fill="#283593"/>
                <path d="M36.6,36.6 L54,40.9 L62.7,36.6 L45.2,32.3z" fill="#5C6BC0"/>
                <path d="M36.6,36.6 L36.6,51.1 L54,55.5 L54,40.9z" fill="#3F51B5"/>
            </g>
            <g>
                <path d="M74.3,45.3 L74.3,59.8 L83,55.5 L83,40.9z" fill="#4527A0"/>
                <path d="M56.9,40.9 L74.3,45.3 L83,40.9 L65.6,36.6z" fill="#7E57C2"/>
                <path d="M56.9,40.9 L56.9,55.5 L74.3,59.8 L74.3,45.3z" fill="#673AB7"/>
            </g>
            <g>
                <path d="M34.6,48.2 L34.6,62.7 L43.3,58.4 L43.3,43.8z" fill="#00695C"/>
                <path d="M17.2,43.8 L34.6,48.2 L43.3,43.8 L25.8,39.5z" fill="#26A69A"/>
                <path d="M17.2,43.8 L17.2,58.4 L34.6,62.7 L34.6,48.2z" fill="#009688"/>
            </g>
            <g>
                <path d="M54,52.5 L54,67.1 L62.7,62.7 L62.7,48.2z" fill="#00838F"/>
                <path d="M36.6,48.2 L54,52.5 L62.7,48.2 L45.2,43.8z" fill="#26C6DA"/>
                <path d="M36.6,48.2 L36.6,62.7 L54,67.1 L54,52.5z" fill="#00BCD4"/>
            </g>
            <g>
                <path d="M74.3,56.9 L74.3,71.4 L83,67.1 L83,52.5z" fill="#AD1457"/>
                <path d="M56.9,52.5 L74.3,56.9 L83,52.5 L65.6,48.2z" fill="#EC407A"/>
                <path d="M56.9,52.5 L56.9,67.1 L74.3,71.4 L74.3,56.9z" fill="#E91E63"/>
            </g>
            <g>
                <path d="M34.6,59.8 L34.6,74.3 L43.3,70 L43.3,55.5z" fill="#2E7D32"/>
                <path d="M17.2,55.5 L34.6,59.8 L43.3,55.5 L25.8,51.1z" fill="#66BB6A"/>
                <path d="M17.2,55.5 L17.2,70 L34.6,74.3 L34.6,59.8z" fill="#4CAF50"/>
            </g>
            <g>
                <path d="M54,64.1 L54,78.7 L62.7,74.3 L62.7,59.8z" fill="#E65100"/>
                <path d="M36.6,59.8 L54,64.1 L62.7,59.8 L45.2,55.5z" fill="#FFA726"/>
                <path d="M36.6,59.8 L36.6,74.3 L54,78.7 L54,64.1z" fill="#FF9800"/>
            </g>
            <g>
                <path d="M74.3,68.5 L74.3,83 L83,78.7 L83,64.1z" fill="#B71C1C"/>
                <path d="M56.9,64.1 L74.3,68.5 L83,64.1 L65.6,59.8z" fill="#EF5350"/>
                <path d="M56.9,64.1 L56.9,78.7 L74.3,83 L74.3,68.5z" fill="#F44336"/>
            </g>
            <path d="M39.5,45.3 Q54,51.1 68.5,45.3 Q69.9,42.4 68.5,39.5 Q54,33.7 39.5,39.5 Q38.1,42.4 39.5,45.3z" fill="#000000" fill-opacity="0.15"/>
            <g>
                <path d="M56.9,27.1 L56.9,41.6 L67,37.3 L67,22.7z" fill="#F9A825"/>
                <path d="M39.5,22.7 L56.9,27.1 L67,22.7 L49.5,18.4z" fill="#FFEE58"/>
                <path d="M39.5,22.7 L39.5,37.3 L56.9,41.6 L56.9,27.1z" fill="#FFD600"/>
            </g>
        </svg>`,
        link: "https://github.com/LihkaGames/Block-Fusion-Game/raw/refs/heads/main/Block%20Fusion.apk"
    },
    {
        name: "Blitz Storm Arena",
        developer: "Lihka Games",
        rating: "4.7",
        size: "10 MB",
        type: "game",
        tags: ["action", "arena", "storm", "battle", "multiplayer"],
        icon: "linear-gradient(135deg,#0D1117,#1a1a2e)",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 108">
            <path d="M54,18 L86,30 L90,54 L82,74 L54,94 L26,74 L18,54 L22,30 Z" fill="#FFD700" stroke="#FFF176" stroke-width="0.8"/>
            <path d="M54,22 L83,33 L87,54 L80,72 L54,90 L28,72 L21,54 L25,33 Z" fill="#0D1117"/>
            <path d="M62,26 L47,52 L58,51 L42,82 L70,54 L58,55 Z" fill="#FFD700"/>
            <path d="M60,32 L49,50 L57,49 L45,76 L66,56 L57,57 Z" fill="#FFEC80"/>
            <path d="M58,38 L51,49 L56,48 L48,70 L62,57 L57,58 Z" fill="#FFFDE7"/>
            <path d="M35,40 L32,47 L37,45 L34,52" stroke="#FFD700" stroke-width="1.2" fill="none" stroke-linecap="round"/>
            <path d="M73,40 L76,47 L71,45 L74,52" stroke="#FFD700" stroke-width="1.2" fill="none" stroke-linecap="round"/>
        </svg>`,
        link: "https://github.com/LihkaGames/Blitz-Storm-Arena/raw/refs/heads/main/Blitz%20Storm%20Arena.apk"
    },
    {
        name: "Crystal Cascade",
        developer: "Lihka Games",
        rating: "4.5",
        size: "15 MB",
        type: "game",
        tags: ["puzzle", "crystal", "cascade", "match", "jewels"],
        icon: "linear-gradient(135deg,#0A1628,#1a237e)",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 108">
            <path d="M54,54 m-34,0 a34,34 0 1,1 68,0 a34,34 0 1,1 -68,0" fill="#0A1628"/>
            <path d="M54,54 m-34,0 a34,34 0 1,1 68,0 a34,34 0 1,1 -68,0" fill="none" stroke="#00E5FF" stroke-width="1.5" stroke-opacity="0.6"/>
            <path d="M54,54 m-32,0 a32,32 0 1,1 64,0 a32,32 0 1,1 -64,0" fill="none" stroke="#2979FF" stroke-width="0.5" stroke-opacity="0.3"/>
            <path d="M32,38 A0.8,0.8 0 1,1 33.6,38 A0.8,0.8 0 1,1 32,38 Z" fill="#FFFFFF" fill-opacity="0.4"/>
            <path d="M74,36 A0.8,0.8 0 1,1 75.6,36 A0.8,0.8 0 1,1 74,36 Z" fill="#FFFFFF" fill-opacity="0.3"/>
            <path d="M28,55 A0.6,0.6 0 1,1 29.2,55 A0.6,0.6 0 1,1 28,55 Z" fill="#00E5FF" fill-opacity="0.3"/>
            <path d="M80,54 A0.6,0.6 0 1,1 81.2,54 A0.6,0.6 0 1,1 80,54 Z" fill="#00E5FF" fill-opacity="0.3"/>
            <path d="M54,28 L70,43 L54,66 L38,43 Z" fill="#2979FF"/>
            <path d="M54,28 L38,43 L44,41 Z" fill="#1565C0" fill-opacity="0.85"/>
            <path d="M38,43 L54,66 L44,53 Z" fill="#0D47A1" fill-opacity="0.75"/>
            <path d="M54,28 L70,43 L64,41 Z" fill="#00E5FF" fill-opacity="0.85"/>
            <path d="M70,43 L54,66 L64,53 Z" fill="#2196F3" fill-opacity="0.75"/>
            <path d="M54,28 L46,36 L49,35 Z" fill="#FFFFFF" fill-opacity="0.5"/>
            <path d="M49,35 L46,36 L40,44 L47,42 Z" fill="#FFFFFF" fill-opacity="0.2"/>
            <path d="M46,36 A2,2 0 1,1 50,36 A2,2 0 1,1 46,36 Z" fill="#FFFFFF" fill-opacity="0.7"/>
            <path d="M44,36 A4,4 0 1,1 52,36 A4,4 0 1,1 44,36 Z" fill="#FFFFFF" fill-opacity="0.15"/>
            <path d="M33,50 L38,45 L37,55 L32,53 Z" fill="#2979FF" fill-opacity="0.45"/>
            <path d="M75,50 L70,45 L71,55 L76,53 Z" fill="#651FFF" fill-opacity="0.45"/>
            <path d="M54,23 L55.5,19 L57,23 L61,24.5 L57,26 L55.5,30 L54,26 L50,24.5 Z" fill="#FFFFFF" fill-opacity="0.7"/>
            <path d="M35,35 L36,33 L37,35 L39,36 L37,37 L36,39 L35,37 L33,36 Z" fill="#00E5FF" fill-opacity="0.5"/>
            <path d="M73,34 L74,32 L75,34 L77,35 L75,36 L74,38 L73,36 L71,35 Z" fill="#00E5FF" fill-opacity="0.5"/>
            <path d="M50,70 L52,66 L54,70 L52,73 Z" fill="#00E5FF" fill-opacity="0.15"/>
            <path d="M57,72 L59,68 L61,72 L59,75 Z" fill="#2979FF" fill-opacity="0.12"/>
            <path d="M42,68 L43,66 L44,68 L46,69 L44,70 L43,72 L42,70 L40,69 Z" fill="#FFFFFF" fill-opacity="0.3"/>
            <path d="M65,66 L66,64 L67,66 L69,67 L67,68 L66,70 L65,68 L63,67 Z" fill="#FFFFFF" fill-opacity="0.25"/>
        </svg>`,
        link: "https://github.com/LihkaGames/Crystal-Cascade-Game/raw/refs/heads/main/Crystal%20Cascade.apk"
    },
    {
        name: "Disc Strike Arena",
        developer: "Lihka Games",
        rating: "4.6",
        size: "10 MB",
        type: "game",
        tags: ["sport", "disc", "strike", "arena", "multiplayer"],
        icon: "linear-gradient(135deg,#2E1A0E,#4E342E)",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 108">
            <path fill="#3E2723" d="M54,54 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"/>
            <path fill="#5D4037" d="M54,54 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0"/>
            <path fill="#8D6E63" d="M54,54 m-35,0 a35,35 0 1,0 70,0"/>
            <path fill="#4E342E" d="M54,54 m35,0 a35,35 0 1,0 -70,0"/>
            <path fill="#6D4C41" d="M54,54 m-34,0 a34,34 0 1,1 68,0 a34,34 0 1,1 -68,0"/>
            <path fill="#DABE8A" d="M54,54 m-30,0 a30,30 0 1,1 60,0 a30,30 0 1,1 -60,0"/>
            <path fill="#E8D4A8" d="M54,54 m-30,0 a30,30 0 1,0 60,0"/>
            <path fill="none" stroke="#C9A66B" stroke-width="0.4" d="M26,40 Q54,35 82,42"/>
            <path fill="none" stroke="#C4A060" stroke-width="0.3" d="M28,48 Q54,44 80,50"/>
            <path fill="none" stroke="#C9A66B" stroke-width="0.5" d="M24,56 Q54,52 84,58"/>
            <path fill="none" stroke="#BF9B55" stroke-width="0.3" d="M26,64 Q54,60 82,66"/>
            <path fill="none" stroke="#C9A66B" stroke-width="0.4" d="M30,72 Q54,68 78,74"/>
            <path fill="none" stroke="#5D4037" stroke-width="2" d="M54,54 m-26,0 a26,26 0 1,1 52,0 a26,26 0 1,1 -52,0"/>
            <path fill="none" stroke="#6D4C41" stroke-width="1" d="M54,54 m-22,0 a22,22 0 1,1 44,0 a22,22 0 1,1 -44,0"/>
            <path fill="none" stroke="#8D6E63" stroke-width="0.8" d="M54,28 L54,80"/>
            <path fill="none" stroke="#8D6E63" stroke-width="0.8" d="M28,54 L80,54"/>
            <path fill="none" stroke="#A1887F" stroke-width="0.6" d="M35,35 L73,73 M73,35 L35,73"/>
            <path fill="#C62828" d="M54,54 m-14,0 a14,14 0 1,1 28,0 a14,14 0 1,1 -28,0"/>
            <path fill="#DABE8A" d="M54,54 m-12,0 a12,12 0 1,1 24,0 a12,12 0 1,1 -24,0"/>
            <path fill="none" stroke="#5D4037" stroke-width="1.2" d="M54,54 m-8,0 a8,8 0 1,1 16,0 a8,8 0 1,1 -16,0"/>
            <path fill="none" stroke="#6D4C41" stroke-width="0.8" d="M54,54 m-4,0 a4,4 0 1,1 8,0 a4,4 0 1,1 -8,0"/>
            <path fill="#5D4037" d="M54,30 m-6,0 a6,6 0 1,1 12,0 a6,6 0 1,1 -12,0"/>
            <path fill="#3E2723" d="M54,30 m-5,0 a5,5 0 1,1 10,0 a5,5 0 1,1 -10,0"/>
            <path fill="#1A1A1A" d="M54,30 m-4,0 a4,4 0 1,1 8,0 a4,4 0 1,1 -8,0"/>
            <path fill="#0D0D0D" d="M54,30 m-2,0 a2,2 0 1,1 4,0 a2,2 0 1,1 -4,0"/>
        </svg>`,
        link: "https://github.com/LihkaGames/Disc-Strike-Arena-Game/releases/download/v1.0/Disc.Strike.Arena.apk"
    },
    {
        name: "Roll Master Quest",
        developer: "Lihka Games",
        rating: "4.8",
        size: "7 MB",
        type: "game",
        tags: ["ludo", "board", "dice", "multiplayer", "classic"],
        icon: "linear-gradient(135deg,#251a3d,#1f0b36)",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 108">
            <defs>
                <linearGradient id="s-redQ" x1="34" y1="28" x2="50" y2="44" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#FF6B6B"/>
                    <stop offset="1" stop-color="#EE5A52"/>
                </linearGradient>
                <linearGradient id="s-greenQ" x1="58" y1="28" x2="74" y2="44" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#69DB7C"/>
                    <stop offset="1" stop-color="#51CF66"/>
                </linearGradient>
                <linearGradient id="s-yellowQ" x1="34" y1="52" x2="50" y2="68" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#FFE066"/>
                    <stop offset="1" stop-color="#FFD43B"/>
                </linearGradient>
                <linearGradient id="s-blueQ" x1="58" y1="52" x2="74" y2="68" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#74C0FC"/>
                    <stop offset="1" stop-color="#4DABF7"/>
                </linearGradient>
                <linearGradient id="s-centerD" x1="50" y1="44" x2="58" y2="52" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#FFD700"/>
                    <stop offset="1" stop-color="#FFA000"/>
                </linearGradient>
                <radialGradient id="s-rT1" cx="38" cy="32" r="4" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#FF8787"/>
                    <stop offset="1" stop-color="#C92A2A"/>
                </radialGradient>
                <radialGradient id="s-rT2" cx="44" cy="38" r="4" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#FF8787"/>
                    <stop offset="1" stop-color="#C92A2A"/>
                </radialGradient>
                <radialGradient id="s-gT1" cx="62" cy="32" r="4" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#8CE99A"/>
                    <stop offset="1" stop-color="#2B8A3E"/>
                </radialGradient>
                <radialGradient id="s-gT2" cx="68" cy="38" r="4" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#8CE99A"/>
                    <stop offset="1" stop-color="#2B8A3E"/>
                </radialGradient>
                <radialGradient id="s-yT1" cx="38" cy="56" r="4" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#FFE066"/>
                    <stop offset="1" stop-color="#F59F00"/>
                </radialGradient>
                <radialGradient id="s-yT2" cx="44" cy="62" r="4" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#FFE066"/>
                    <stop offset="1" stop-color="#F59F00"/>
                </radialGradient>
                <radialGradient id="s-bT1" cx="62" cy="56" r="4" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#74C0FC"/>
                    <stop offset="1" stop-color="#1864AB"/>
                </radialGradient>
                <radialGradient id="s-bT2" cx="68" cy="62" r="4" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#74C0FC"/>
                    <stop offset="1" stop-color="#1864AB"/>
                </radialGradient>
                <linearGradient id="s-crownG" x1="42" y1="11" x2="66" y2="20" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#FFD700"/>
                    <stop offset="0.5" stop-color="#FFEC80"/>
                    <stop offset="1" stop-color="#FFA000"/>
                </linearGradient>
                <linearGradient id="s-crownB" x1="42" y1="20" x2="66" y2="23" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#FFA000"/>
                    <stop offset="1" stop-color="#FF8F00"/>
                </linearGradient>
                <linearGradient id="s-diceL" x1="17.5" y1="70" x2="32.5" y2="85" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#FFFFFF"/>
                    <stop offset="1" stop-color="#F1F3F5"/>
                </linearGradient>
                <linearGradient id="s-diceR" x1="75.5" y1="72" x2="90.5" y2="87" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#FFFFFF"/>
                    <stop offset="1" stop-color="#F1F3F5"/>
                </linearGradient>
            </defs>
            <path d="M36,30h36v48h-36z" fill="#000000" fill-opacity="0.08"/>
            <path d="M34,28h16v16h-16z" fill="url(#s-redQ)"/><path d="M34,28h16v16h-16z" stroke-width="0.5" stroke="#D63031" fill="none"/>
            <path d="M58,28h16v16h-16z" fill="url(#s-greenQ)"/><path d="M58,28h16v16h-16z" stroke-width="0.5" stroke="#2B8A3E" fill="none"/>
            <path d="M34,52h16v16h-16z" fill="url(#s-yellowQ)"/><path d="M34,52h16v16h-16z" stroke-width="0.5" stroke="#F59F00" fill="none"/>
            <path d="M58,52h16v16h-16z" fill="url(#s-blueQ)"/><path d="M58,52h16v16h-16z" stroke-width="0.5" stroke="#1864AB" fill="none"/>
            <path d="M50,28h8v16h-8z" fill="#FFFFFF" stroke-width="0.3" stroke="#E0E0E0"/>
            <path d="M50,52h8v16h-8z" fill="#FFFFFF" stroke-width="0.3" stroke="#E0E0E0"/>
            <path d="M34,44h16v8h-16z" fill="#FFFFFF" stroke-width="0.3" stroke="#E0E0E0"/>
            <path d="M58,44h16v8h-16z" fill="#FFFFFF" stroke-width="0.3" stroke="#E0E0E0"/>
            <path d="M50,44h8v8h-8z" fill="url(#s-centerD)"/>
            <path d="M54,44L50,48L58,48Z" fill="#EE5A52" fill-opacity="0.85"/>
            <path d="M58,48L54,44L54,52Z" fill="#51CF66" fill-opacity="0.85"/>
            <path d="M54,52L58,48L50,48Z" fill="#339AF0" fill-opacity="0.85"/>
            <path d="M50,48L54,52L54,44Z" fill="#FFD43B" fill-opacity="0.85"/>
            <path d="M54,44L58,48L54,52L50,48Z" stroke-width="0.6" stroke="#E67700" fill="none"/>
            <circle cx="54" cy="48" r="1.8" fill="#FFFFFF" fill-opacity="0.9"/>
            <circle cx="39" cy="33" r="3.5" fill="url(#s-rT1)"/><circle cx="39" cy="33" r="1.3" fill="#FFFFFF" fill-opacity="0.6"/>
            <circle cx="45" cy="39" r="3.5" fill="url(#s-rT2)"/><circle cx="45" cy="39" r="1.3" fill="#FFFFFF" fill-opacity="0.6"/>
            <circle cx="63" cy="33" r="3.5" fill="url(#s-gT1)"/><circle cx="63" cy="33" r="1.3" fill="#FFFFFF" fill-opacity="0.6"/>
            <circle cx="69" cy="39" r="3.5" fill="url(#s-gT2)"/><circle cx="69" cy="39" r="1.3" fill="#FFFFFF" fill-opacity="0.6"/>
            <circle cx="39" cy="57" r="3.5" fill="url(#s-yT1)"/><circle cx="39" cy="57" r="1.3" fill="#FFFFFF" fill-opacity="0.6"/>
            <circle cx="45" cy="63" r="3.5" fill="url(#s-yT2)"/><circle cx="45" cy="63" r="1.3" fill="#FFFFFF" fill-opacity="0.6"/>
            <circle cx="63" cy="57" r="3.5" fill="url(#s-bT1)"/><circle cx="63" cy="57" r="1.3" fill="#FFFFFF" fill-opacity="0.6"/>
            <circle cx="69" cy="63" r="3.5" fill="url(#s-bT2)"/><circle cx="69" cy="63" r="1.3" fill="#FFFFFF" fill-opacity="0.6"/>
            <path d="M42,20L43.5,14L47,18L50.5,11L54,17L57.5,11L61,18L64.5,14L66,20Z" fill="url(#s-crownG)" stroke-width="0.5" stroke="#BF8F00"/>
            <rect x="42" y="20" width="24" height="3" fill="url(#s-crownB)"/>
            <circle cx="47" cy="17.5" r="1.5" fill="#EE5A52"/>
            <circle cx="54" cy="16.5" r="1.8" fill="#339AF0"/>
            <circle cx="61" cy="17.5" r="1.5" fill="#51CF66"/>
            <circle cx="47" cy="17.5" r="0.6" fill="#FFFFFF" fill-opacity="0.5"/>
            <circle cx="54" cy="16.5" r="0.7" fill="#FFFFFF" fill-opacity="0.5"/>
            <circle cx="61" cy="17.5" r="0.6" fill="#FFFFFF" fill-opacity="0.5"/>
            <rect x="17.5" y="70" width="15" height="15" rx="2.5" ry="2.5" fill="url(#s-diceL)"/>
            <rect x="17.5" y="70" width="15" height="15" rx="2.5" ry="2.5" stroke-width="0.5" stroke="#CED4DA" fill="none"/>
            <circle cx="22" cy="73.5" r="1.2" fill="#C92A2A"/>
            <circle cx="22" cy="77.5" r="1.2" fill="#C92A2A"/>
            <circle cx="22" cy="81.5" r="1.2" fill="#C92A2A"/>
            <circle cx="28" cy="73.5" r="1.2" fill="#C92A2A"/>
            <circle cx="28" cy="77.5" r="1.2" fill="#C92A2A"/>
            <circle cx="28" cy="81.5" r="1.2" fill="#C92A2A"/>
            <rect x="75.5" y="72" width="15" height="15" rx="2.5" ry="2.5" fill="url(#s-diceR)"/>
            <rect x="75.5" y="72" width="15" height="15" rx="2.5" ry="2.5" stroke-width="0.5" stroke="#CED4DA" fill="none"/>
            <circle cx="80" cy="75" r="1.2" fill="#1864AB"/>
            <circle cx="86" cy="75" r="1.2" fill="#1864AB"/>
            <circle cx="83" cy="79.5" r="1.2" fill="#1864AB"/>
            <circle cx="80" cy="84" r="1.2" fill="#1864AB"/>
            <circle cx="86" cy="84" r="1.2" fill="#1864AB"/>
        </svg>`,
        link: "https://github.com/LihkaGames/Roll-Master-Quest-Ludo-Game/releases/download/v1.0.0/Roll.Master.Quest.apk"
    },
    {
        name: "Serpent Surge",
        developer: "Lihka Games",
        rating: "4.4",
        size: "6 MB",
        type: "game",
        tags: ["snake", "arcade", "classic", "retro", "casual"],
        icon: "linear-gradient(135deg,#1A1A2E,#16213E)",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 108">
            <path fill="#1A1A2E" d="M0,0h108v108H0z"/>
            <path fill="#16213E" d="M54,4A50,50,0,1,1,54,104A50,50,0,1,1,54,4Z"/>
            <path fill="none" stroke="#39FF14" stroke-opacity="0.25" stroke-width="16" stroke-linecap="round" d="M25,82 Q12,52 38,40"/>
            <path fill="none" stroke="#39FF14" stroke-opacity="0.25" stroke-width="16" stroke-linecap="round" d="M38,40 Q62,28 58,54"/>
            <path fill="none" stroke="#39FF14" stroke-opacity="0.25" stroke-width="16" stroke-linecap="round" d="M58,54 Q54,78 78,72"/>
            <path fill="none" stroke="#39FF14" stroke-opacity="0.25" stroke-width="16" stroke-linecap="round" d="M78,72 Q98,66 88,48 Q78,32 65,42"/>
            <path fill="none" stroke="#39FF14" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" d="M25,82 Q12,52 38,40"/>
            <path fill="none" stroke="#39FF14" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" d="M38,40 Q62,28 58,54"/>
            <path fill="none" stroke="#39FF14" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" d="M58,54 Q54,78 78,72"/>
            <path fill="none" stroke="#39FF14" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" d="M78,72 Q98,66 88,48 Q78,32 65,42"/>
            <path fill="none" stroke="#FFFFFF" stroke-opacity="0.5" stroke-width="3" stroke-linecap="round" d="M26,80 Q14,54 38,42"/>
            <path fill="none" stroke="#FFFFFF" stroke-opacity="0.5" stroke-width="3" stroke-linecap="round" d="M38,42 Q58,32 57,52"/>
            <path fill="#39FF14" fill-opacity="0.31" d="M63,30A16,16,0,1,1,63,62A16,16,0,1,1,63,30Z"/>
            <path fill="#39FF14" d="M63,33A13,13,0,1,1,63,59A13,13,0,1,1,63,33Z"/>
            <path fill="#000000" fill-opacity="0.19" d="M63,46A13,6.5,0,1,1,63,59A13,6.5,0,1,1,63,46Z"/>
            <path fill="#FFFFFF" fill-opacity="0.31" d="M58,35A7,5,0,1,1,58,45A7,5,0,1,1,58,35Z"/>
            <path fill="#FFFFFF" d="M57,39A5,5,0,1,1,57,49A5,5,0,1,1,57,39Z"/>
            <path fill="#FFFFFF" d="M67,39A5,5,0,1,1,67,49A5,5,0,1,1,67,39Z"/>
            <path fill="#1A1A2E" d="M58,41A3,3,0,1,1,58,47A3,3,0,1,1,58,41Z"/>
            <path fill="#1A1A2E" d="M68,41A3,3,0,1,1,68,47A3,3,0,1,1,68,41Z"/>
            <path fill="#FFFFFF" d="M57,41A1.5,1.5,0,1,1,57,44A1.5,1.5,0,1,1,57,41Z"/>
            <path fill="#FFFFFF" d="M67,41A1.5,1.5,0,1,1,67,44A1.5,1.5,0,1,1,67,41Z"/>
            <path fill="none" stroke="#FF4D6D" stroke-width="3" stroke-linecap="round" d="M76,46 L86,42"/>
            <path fill="none" stroke="#FF4D6D" stroke-width="3" stroke-linecap="round" d="M86,42 L92,36"/>
            <path fill="none" stroke="#FF4D6D" stroke-width="3" stroke-linecap="round" d="M86,42 L92,48"/>
            <path fill="none" stroke="#39FF14" stroke-width="6" stroke-linecap="round" d="M25,82 L22,88"/>
            <path fill="none" stroke="#39FF14" stroke-opacity="0.25" stroke-width="12" stroke-linecap="round" d="M25,82 L22,88"/>
        </svg>`,
        link: "https://github.com/LihkaGames/Serpent-Surge-Game/releases/download/v1.0.0/Serpent.Surge.apk"
    },
    {
        name: "Turbo Trail Racer",
        developer: "Lihka Games",
        rating: "4.9",
        size: "17 MB",
        type: "game",
        tags: ["racing", "car", "speed", "turbo", "3d"],
        icon: "linear-gradient(135deg,#1A237E,#0D47A1)",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <defs><clipPath id="c-tr"><rect x="10" y="10" width="492" height="492" rx="56"/></clipPath></defs>
            <rect width="512" height="512" rx="56" fill="#1A237E"/>
            <rect x="10" y="10" width="492" height="492" rx="56" fill="#0D47A1"/>
            <g clip-path="url(#c-tr)">
                <rect x="10" y="10" width="492" height="170" fill="#1565C0"/>
                <rect x="10" y="150" width="492" height="90" fill="#1976D2"/>
                <rect x="10" y="210" width="492" height="80" fill="#2196F3"/>
                <circle cx="400" cy="80" r="45" fill="#FFD54F"/>
                <circle cx="400" cy="80" r="35" fill="#FFECB3"/>
                <path d="M10,420h492v36q0,46-56,46H66q-56,0-56-46z" fill="#5D4037"/>
                <ellipse cx="180" cy="395" rx="50" ry="8" fill="#1B5E20" opacity=".35"/>
                <path d="M125,310l20,5 105-20 20-5z" fill="#37474F"/>
                <path d="M120,295l10-10 25-5 45-12 45-13 30-5 10,5 3,10-6,10-22,7-105,23-25,5-10-2z" fill="#E53935"/>
                <path d="M130,285l25-5 45-12 45-13 30-5 5,3-35,7-45,13-45,12-25,5z" fill="#EF5350"/>
                <circle cx="430" cy="410" r="28" fill="#FF6D00"/>
                <circle cx="430" cy="410" r="24" fill="#FFB300"/>
                <circle cx="430" cy="410" r="20" fill="#FFF"/>
            </g>
            <rect width="512" height="512" rx="56" stroke="#FF6D00" stroke-width="6" fill="none"/>
            <rect x="4" y="4" width="504" height="504" rx="56" stroke="#FFB300" stroke-width="2" fill="none"/>
        </svg>`,
        link: "https://github.com/LihkaGames/Turbo-Trail-Racer-Game/releases/download/v1.0.0/Turbo.Trail.Racer.apk"
    },
    {
        name: "Precision Shot",
        developer: "Lihka Games",
        rating: "4.9",
        size: "6 MB",
        type: "game",
        tags: ["shooting", "aim", "target", "precision", "skill"],
        icon: "linear-gradient(135deg,#1A237E,#0D47A1)",
        svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" fill="#E0E0E0"/>
            <circle cx="50" cy="50" r="45" fill="#FFFFFF"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M50 90C72.0914 90 90 72.0914 90 50C90 27.9086 72.0914 10 50 10C27.9086 10 10 27.9086 10 50C10 72.0914 27.9086 90 50 90ZM50 80C66.5685 80 80 66.5685 80 50C80 33.4315 66.5685 20 50 20C33.4315 20 20 33.4315 20 50C20 66.5685 33.4315 80 50 80Z" fill="#FF0000"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M50 70C61.0457 70 70 61.0457 70 50C70 38.9543 61.0457 30 50 30C38.9543 30 30 38.9543 30 50C30 61.0457 38.9543 70 50 70ZM50 60C55.5228 60 60 55.5228 60 50C60 44.4772 55.5228 40 50 40C44.4772 40 40 44.4772 40 50C40 55.5228 44.4772 60 50 60Z" fill="#FF0000"/>
            <circle cx="50" cy="50" r="10" fill="#FFD700"/>
            <path d="M15 35C20 20 35 10 50 10C65 10 80 20 85 35L15 35Z" fill="white" fill-opacity="0.2"/>
        </svg>`,
        link: "https://github.com/LihkaGames/Precision-Shot-Game/releases/download/v1.0.0/Precision.Shot.apk"
    },
    {
        name: "Phantom Strike",
        developer: "Lihka Games",
        rating: "4.9",
        size: "7 MB",
        type: "game",
        tags: ["stealth", "action", "phantom", "fps", "shooter"],
        icon: "linear-gradient(135deg,#0F1A0F,#050505)",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 108">
            <path fill="#080C08" d="M0,0h108v108H0z"/>
            <path fill="#0D180D" fill-opacity="0.5" d="M54,50 m-42,0 a42,42 0 1,1 84,0 a42,42 0 1,1 -84,0"/>
            <path stroke="#141E14" stroke-width="0.2" stroke-opacity="0.4" fill="none" d="M18,36h72 M18,54h72 M18,72h72 M36,18v72 M54,18v72 M72,18v72"/>
            <path stroke="#1E2E1A" stroke-width="0.8" fill="none" d="M16,16 L92,16 L92,92 L16,92z"/>
            <path stroke="#CC2200" stroke-width="2.5" stroke-linecap="square" fill="none" d="M16,30 L16,16 L30,16"/>
            <path stroke="#CC2200" stroke-width="2.5" stroke-linecap="square" fill="none" d="M78,16 L92,16 L92,30"/>
            <path stroke="#CC2200" stroke-width="2.5" stroke-linecap="square" fill="none" d="M92,78 L92,92 L78,92"/>
            <path stroke="#CC2200" stroke-width="2.5" stroke-linecap="square" fill="none" d="M28,92 L16,92 L16,78"/>
            <path fill="#CC2200" d="M16,16 m-1.3,0 a1.3,1.3 0 1,1 2.6,0 a1.3,1.3 0 1,1 -2.6,0"/>
            <path fill="#CC2200" d="M92,16 m-1.3,0 a1.3,1.3 0 1,1 2.6,0 a1.3,1.3 0 1,1 -2.6,0"/>
            <path fill="#CC2200" d="M92,92 m-1.3,0 a1.3,1.3 0 1,1 2.6,0 a1.3,1.3 0 1,1 -2.6,0"/>
            <path fill="#CC2200" d="M16,92 m-1.3,0 a1.3,1.3 0 1,1 2.6,0 a1.3,1.3 0 1,1 -2.6,0"/>
            <path fill="#161616" d="M31,42 L77,42 L77,56 L31,56z"/>
            <path fill="#0E0E0E" d="M33,43 L75,43 L75,55 L33,55z"/>
            <path fill="#0A0A0A" d="M34,44 L52,44 L52,54 L34,54z"/>
            <path fill="#0A0A0A" d="M56,44 L74,44 L74,54 L56,54z"/>
            <path fill="#EE2200" fill-opacity="0.95" d="M39,46.5 L49,46.5 L49,51.5 L39,51.5z"/>
            <path fill="#EE2200" fill-opacity="0.95" d="M59,46.5 L69,46.5 L69,51.5 L59,51.5z"/>
        </svg>`,
        link: "https://github.com/LihkaGames/Phantom-Strike-Game/releases/download/v1.0.0/Phantom.Strike.apk"
    },
    {
        name: "Glass Velocity",
        developer: "Lihka Games",
        rating: "4.9",
        size: "22 MB",
        type: "game",
        tags: ["physics", "speed", "glass", "arcade", "reflex"],
        icon: "linear-gradient(135deg,#0F1A0F,#050505)",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 108">
            <path d="M 62,22 L 68,22 L 68,86 L 62,86 Z" fill="#0A1628" fill-opacity="0.6"/>
            <path d="M 36,84 L 66,84 L 68,86 L 38,86 Z" fill="#0A1628" fill-opacity="0.5"/>
            <path d="M 36,22 L 62,22 L 62,84 L 36,84 Z" fill="#7BB8E8" fill-opacity="0.55"/>
            <path d="M 36,22 L 56,22 L 46,50 L 36,50 Z" fill="#FFFFFF" fill-opacity="0.35"/>
            <path d="M 40,22 L 48,22 L 42,38 L 36,38 Z" fill="#FFFFFF" fill-opacity="0.55"/>
            <path d="M 50,60 L 62,60 L 62,84 L 50,84 Z" fill="#1A3050" fill-opacity="0.3"/>
            <path d="M 36,22 L 38,22 L 38,84 L 36,84 Z" fill="#FFFFFF" fill-opacity="0.6"/>
            <path d="M 36,22 L 62,22 L 62,24 L 36,24 Z" fill="#FFFFFF" fill-opacity="0.6"/>
            <path d="M 60,22 L 62,22 L 62,84 L 60,84 Z" fill="#AACCE8" fill-opacity="0.4"/>
            <path d="M 52,52 L 61,32 L 62,32 L 61,31 L 52,51 Z" fill="#FFFFFF" fill-opacity="0.9"/>
            <path d="M 52,54 L 62,46 L 62,48 L 53,55 Z" fill="#FFFFFF" fill-opacity="0.85"/>
            <path d="M 52,56 L 62,68 L 62,70 L 61,70 L 51,57 Z" fill="#FFFFFF" fill-opacity="0.8"/>
            <path d="M 50,57 L 38,76 L 37,76 L 36,77 L 36,75 L 49,56 Z" fill="#FFFFFF" fill-opacity="0.85"/>
            <path d="M 49,54 L 36,50 L 36,52 L 50,55 Z" fill="#FFFFFF" fill-opacity="0.8"/>
            <path d="M 50,52 L 40,36 L 41,35 L 51,51 Z" fill="#FFFFFF" fill-opacity="0.9"/>
            <circle cx="53" cy="54" r="6" fill="#050E1C" fill-opacity="0.85"/>
            <circle cx="53" cy="54" r="7" fill="#2A5888" fill-opacity="0.4" stroke="#5BC8FF" stroke-width="0.8"/>
            <path d="M 66,28 L 74,24 L 76,32 L 68,34 Z" fill="#7BB8E8" fill-opacity="0.7"/>
            <path d="M 66,28 L 74,24 L 74,25 L 67,29 Z" fill="#FFFFFF" fill-opacity="0.8"/>
            <circle cx="38" cy="54" r="20" fill="#3A80C0" fill-opacity="0.18"/>
            <circle cx="38" cy="54" r="15" fill="#0D0D0D" fill-opacity="1"/>
            <circle cx="38" cy="54" r="14" fill="#3A3A4A" fill-opacity="1"/>
            <path d="M 30,44 Q 38,40 46,46 Q 50,52 44,60 Q 36,64 28,60 Q 22,54 26,46 Q 27,43 30,44 Z" fill="#8090A8" fill-opacity="0.9"/>
            <circle cx="34" cy="48" r="2" fill="#FFFFFF" fill-opacity="1"/>
            <path d="M 14,46 L 24,44 L 24,45.5 L 14,47.5 Z" fill="#5BC8FF" fill-opacity="0.7"/>
            <path d="M 12,52 L 23,51 L 23,52.5 L 12,53.5 Z" fill="#5BC8FF" fill-opacity="0.55"/>
            <path d="M 14,58 L 24,57 L 24,58.5 L 14,59.5 Z" fill="#5BC8FF" fill-opacity="0.4"/>
        </svg>`,
        link: "https://github.com/LihkaGames/Glass-Velocity-Game/releases/download/v1.0.0/Glass.Velocity.apk"
    }
];

// =============================================
// 🎯 FUZZY SEARCH ALGORITHM (Levenshtein Distance)
// =============================================

function levenshteinDistance(a, b) {
    const matrix = [];
    
    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }
    
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }
    
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }
    
    return matrix[b.length][a.length];
}

function similarityScore(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    
    // Exact match
    if (str1 === str2) return 100;
    
    // Contains match
    if (str2.includes(str1)) return 90;
    if (str1.includes(str2)) return 85;
    
    // Word match
    const words1 = str1.split(' ');
    const words2 = str2.split(' ');
    for (let word1 of words1) {
        for (let word2 of words2) {
            if (word1 === word2) return 80;
        }
    }
    
    // Fuzzy match using Levenshtein
    const maxLen = Math.max(str1.length, str2.length);
    const distance = levenshteinDistance(str1, str2);
    const similarity = ((maxLen - distance) / maxLen) * 70;
    
    return similarity;
}

// =============================================
// 🔍 ADVANCED SEARCH FUNCTION
// =============================================

function advancedSearch(query) {
    if (!query || query.trim() === '') return [];
    
    query = query.trim().toLowerCase();
    
    const results = searchDatabase.map(item => {
        let score = 0;
        
        // Check name similarity
        score = Math.max(score, similarityScore(query, item.name));
        
        // Check developer similarity
        score = Math.max(score, similarityScore(query, item.developer) * 0.7);
        
        // Check type similarity
        score = Math.max(score, similarityScore(query, item.type) * 0.6);
        
        // Check tags similarity
        if (item.tags) {
            for (let tag of item.tags) {
                score = Math.max(score, similarityScore(query, tag) * 0.8);
            }
        }
        
        return { ...item, score };
    });
    
    // Filter results with score > 30 and sort by score
    return results
        .filter(item => item.score > 30)
        .sort((a, b) => b.score - a.score);
}

// =============================================
// 🎨 CREATE AUTO-SUGGESTION DROPDOWN
// =============================================

function createSuggestionDropdown(inputElement) {
    // Remove existing dropdown if any
    const existingDropdown = document.getElementById('search-suggestions');
    if (existingDropdown) {
        existingDropdown.remove();
    }
    
    // Create dropdown container
    const dropdown = document.createElement('div');
    dropdown.id = 'search-suggestions';
    dropdown.style.cssText = `
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: #1a1a1a;
        border: 1px solid #333;
        border-top: none;
        border-radius: 0 0 12px 12px;
        max-height: 400px;
        overflow-y: auto;
        z-index: 1000;
        box-shadow: 0 8px 24px rgba(0,0,0,0.4);
        display: none;
    `;
    
    inputElement.parentElement.style.position = 'relative';
    inputElement.parentElement.appendChild(dropdown);
    
    return dropdown;
}

// =============================================
// 📝 UPDATE SUGGESTIONS
// =============================================

function updateSuggestions(inputElement, dropdown) {
    const query = inputElement.value.trim();
    
    if (query === '') {
        dropdown.style.display = 'none';
        return;
    }
    
    const results = advancedSearch(query);
    
    if (results.length === 0) {
        dropdown.innerHTML = `
            <div style="padding: 16px; text-align: center; color: #666; font-size: 0.85rem;">
                <div style="margin-bottom: 8px;">🔍 No exact matches</div>
                <div style="font-size: 0.75rem;">Try: "Block", "Racing", "Ludo"</div>
            </div>
        `;
        dropdown.style.display = 'block';
        return;
    }
    
    dropdown.innerHTML = '';
    
    results.slice(0, 5).forEach((item, index) => {
        const suggestionItem = document.createElement('div');
        suggestionItem.style.cssText = `
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px 16px;
            cursor: pointer;
            transition: background 0.2s;
            border-bottom: 1px solid #252525;
        `;
        
        suggestionItem.innerHTML = `
            <div style="width: 40px; height: 40px; border-radius: 8px; background: ${item.icon}; flex-shrink: 0; display: flex; align-items: center; justify-content: center; overflow: hidden; padding: 4px;">
                ${item.svg}
            </div>
            <div style="flex: 1; min-width: 0;">
                <div style="font-size: 0.9rem; font-weight: 600; color: #eee; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.name}</div>
                <div style="font-size: 0.75rem; color: #888;">⭐ ${item.rating} • ${item.size}</div>
            </div>
            <div style="font-size: 0.7rem; color: #0f0; font-weight: 600; padding: 4px 8px; background: #0f01; border-radius: 6px;">${Math.round(item.score)}%</div>
        `;
        
        suggestionItem.addEventListener('mouseenter', () => {
            suggestionItem.style.background = '#252525';
        });
        
        suggestionItem.addEventListener('mouseleave', () => {
            suggestionItem.style.background = 'transparent';
        });
        
        suggestionItem.addEventListener('click', () => {
            inputElement.value = item.name;
            dropdown.style.display = 'none';
            location.href = 'search.html?q=' + encodeURIComponent(item.name);
        });
        
        dropdown.appendChild(suggestionItem);
    });
    
    dropdown.style.display = 'block';
}

// =============================================
// 🎯 INITIALIZE AUTO-SUGGESTIONS
// =============================================

// Header Search Auto-Suggestions
if (headerSearch) {
    const headerDropdown = createSuggestionDropdown(headerSearch);
    
    headerSearch.addEventListener('input', () => {
        updateSuggestions(headerSearch, headerDropdown);
    });
    
    headerSearch.addEventListener('focus', () => {
        if (headerSearch.value.trim() !== '') {
            updateSuggestions(headerSearch, headerDropdown);
        }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!headerSearch.parentElement.contains(e.target)) {
            headerDropdown.style.display = 'none';
        }
    });
}

// Hero Search Auto-Suggestions
if (heroSearch) {
    const heroDropdown = createSuggestionDropdown(heroSearch);
    
    heroSearch.addEventListener('input', () => {
        updateSuggestions(heroSearch, heroDropdown);
    });
    
    heroSearch.addEventListener('focus', () => {
        if (heroSearch.value.trim() !== '') {
            updateSuggestions(heroSearch, heroDropdown);
        }
    });
    
    document.addEventListener('click', (e) => {
        if (!heroSearch.parentElement.contains(e.target)) {
            heroDropdown.style.display = 'none';
        }
    });
}

// =============================================
// 🔍 SEARCH PAGE FUNCTIONALITY
// =============================================

if (window.location.pathname.includes('search.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    
    const queryDisplay = document.getElementById('qd');
    const resultCount = document.getElementById('rc');
    const resultsContainer = document.getElementById('search-results');
    const searchInput = document.getElementById('si');

    if (searchInput) {
        const searchPageDropdown = createSuggestionDropdown(searchInput);
        
        searchInput.addEventListener('input', () => {
            updateSuggestions(searchInput, searchPageDropdown);
        });
        
        searchInput.addEventListener('focus', () => {
            if (searchInput.value.trim() !== '') {
                updateSuggestions(searchInput, searchPageDropdown);
            }
        });
        
        document.addEventListener('click', (e) => {
            if (!searchInput.parentElement.contains(e.target)) {
                searchPageDropdown.style.display = 'none';
            }
        });
    }

    if (query) {
        queryDisplay.textContent = query;
        searchInput.value = query;

        // Use advanced search
        const results = advancedSearch(query);

        resultCount.textContent = results.length;

        if (results.length > 0) {
            let html = '<div class="grid">';
            results.forEach(item => {
                html += `
                    <div class="card">
                        <div class="card-ico" style="background:${item.icon};padding:8px;display:flex;align-items:center;justify-content:center;">
                            ${item.svg}
                        </div>
                        <h3>${item.name}</h3>
                        <div class="sub">${item.developer}</div>
                        <div class="meta"><b>⭐ ${item.rating}</b><span>${item.size}</span></div>
                        <a href="${item.link}" class="dl" download>⬇ Download</a>
                    </div>
                `;
            });
            html += '</div>';
            resultsContainer.innerHTML = html;
        } else {
            // Show "Did you mean?" suggestions
            const allResults = searchDatabase.map(item => ({
                ...item,
                score: similarityScore(query, item.name)
            })).sort((a, b) => b.score - a.score).slice(0, 4);
            
            resultsContainer.innerHTML = `
                <div style="text-align:center;padding:60px 20px;color:#666">
                    <h2 style="font-size:3rem;margin-bottom:10px">🔍</h2>
                    <h3 style="margin-bottom:8px;color:#aaa">No exact matches for "${query}"</h3>
                    <p style="margin-bottom:20px;color:#666">Did you mean:</p>
                    <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-bottom:30px">
                        ${allResults.map(item => `
                            <span style="padding:8px 16px;background:#1a1a1a;border-radius:20px;font-size:0.85rem;cursor:pointer;border:1px solid #333;transition:all 0.2s" 
                                  onmouseover="this.style.borderColor='#0f0';this.style.color='#0f0'" 
                                  onmouseout="this.style.borderColor='#333';this.style.color='#eee'" 
                                  onclick="document.getElementById('si').value='${item.name}';document.querySelector('.hero-search button').click()">
                                ${item.name}
                            </span>
                        `).join('')}
                    </div>
                    <div style="margin-top:20px">
                        <h4 style="color:#888;font-size:0.9rem;margin-bottom:12px">Popular searches:</h4>
                        <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
                            <span style="padding:6px 12px;background:#0f01;border:1px solid #0f03;border-radius:20px;font-size:0.8rem;color:#0f0;cursor:pointer" onclick="document.getElementById('si').value='Block Fusion';document.querySelector('.hero-search button').click()">Block Fusion</span>
                            <span style="padding:6px 12px;background:#0f01;border:1px solid #0f03;border-radius:20px;font-size:0.8rem;color:#0f0;cursor:pointer" onclick="document.getElementById('si').value='Racing';document.querySelector('.hero-search button').click()">Racing</span>
                            <span style="padding:6px 12px;background:#0f01;border:1px solid #0f03;border-radius:20px;font-size:0.8rem;color:#0f0;cursor:pointer" onclick="document.getElementById('si').value='Puzzle';document.querySelector('.hero-search button').click()">Puzzle</span>
                        </div>
                    </div>
                </div>
            `;
        }
    } else {
        queryDisplay.textContent = "";
        resultCount.textContent = "0";
        resultsContainer.innerHTML = `
            <div style="text-align:center;padding:60px 20px;color:#666">
                <h2 style="font-size:3rem;margin-bottom:10px">🔎</h2>
                <h3 style="margin-bottom:8px;color:#aaa">Start typing to see suggestions</h3>
                <p style="margin-bottom:20px">Popular searches:</p>
                <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
                    <span style="padding:8px 16px;background:#1a1a1a;border-radius:20px;font-size:0.85rem;cursor:pointer;border:1px solid #333" onclick="document.getElementById('si').value='Block Fusion';document.querySelector('.hero-search button').click()">Block Fusion</span>
                    <span style="padding:8px 16px;background:#1a1a1a;border-radius:20px;font-size:0.85rem;cursor:pointer;border:1px solid #333" onclick="document.getElementById('si').value='Blitz Storm';document.querySelector('.hero-search button').click()">Blitz Storm</span>
                    <span style="padding:8px 16px;background:#1a1a1a;border-radius:20px;font-size:0.85rem;cursor:pointer;border:1px solid #333" onclick="document.getElementById('si').value='Ludo';document.querySelector('.hero-search button').click()">Ludo</span>
                    <span style="padding:8px 16px;background:#1a1a1a;border-radius:20px;font-size:0.85rem;cursor:pointer;border:1px solid #333" onclick="document.getElementById('si').value='Racing';document.querySelector('.hero-search button').click()">Racing</span>
                </div>
            </div>
        `;
    }
}