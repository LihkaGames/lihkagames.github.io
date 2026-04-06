// =============================================
// Lihka Games - Main JavaScript
// =============================================

(function () {
    'use strict';

    // ===== GAMES DATABASE =====
    var gamesData = [
        {
            name: 'Block Fusion',
            dev: 'Lihka Games',
            rating: '4.7',
            size: '26 MB',
            category: 'game',
            tags: ['block', 'fusion', 'puzzle'],
            url: 'https://github.com/LihkaGames/Block-Fusion-Game/raw/refs/heads/main/Block%20Fusion.apk',
            bg: 'linear-gradient(135deg,#667eea,#764ba2)',
            icon: '🧩'
        },
        {
            name: 'Blitz Storm Arena',
            dev: 'Lihka Games',
            rating: '4.7',
            size: '10 MB',
            category: 'game',
            tags: ['blitz', 'storm', 'arena', 'action'],
            url: 'https://github.com/LihkaGames/Blitz-Storm-Arena/raw/refs/heads/main/Blitz%20Storm%20Arena.apk',
            bg: 'linear-gradient(135deg,#0D1117,#1a1a2e)',
            icon: '⚡'
        },
        {
            name: 'Crystal Cascade',
            dev: 'Lihka Games',
            rating: '4.5',
            size: '15 MB',
            category: 'game',
            tags: ['crystal', 'cascade', 'puzzle'],
            url: 'https://github.com/LihkaGames/Crystal-Cascade-Game/raw/refs/heads/main/Crystal%20Cascade.apk',
            bg: 'linear-gradient(135deg,#0A1628,#1a237e)',
            icon: '💎'
        },
        {
            name: 'Disc Strike Arena',
            dev: 'Lihka Games',
            rating: '4.6',
            size: '10 MB',
            category: 'game',
            tags: ['disc', 'strike', 'arena', 'sports'],
            url: 'https://github.com/LihkaGames/Disc-Strike-Arena-Game/releases/download/v1.0/Disc.Strike.Arena.apk',
            bg: 'linear-gradient(135deg,#2E1A0E,#4E342E)',
            icon: '🎯'
        },
        {
            name: 'Roll Master Quest: Ludo Game',
            dev: 'Lihka Games',
            rating: '4.8',
            size: '7 MB',
            category: 'game',
            tags: ['roll', 'master', 'quest', 'ludo', 'board'],
            url: 'https://github.com/LihkaGames/Roll-Master-Quest-Ludo-Game/releases/download/v1.0.0/Roll.Master.Quest.apk',
            bg: 'linear-gradient(135deg,#251a3d,#1f0b36)',
            icon: '🎲'
        },
        {
            name: 'Serpent Surge',
            dev: 'Lihka Games',
            rating: '4.4',
            size: '6 MB',
            category: 'game',
            tags: ['serpent', 'surge', 'snake'],
            url: 'https://github.com/LihkaGames/Serpent-Surge-Game/releases/download/v1.0.0/Serpent.Surge.apk',
            bg: 'linear-gradient(135deg,#1A1A2E,#16213E)',
            icon: '🐍'
        },
        {
            name: 'Turbo Trail Racer',
            dev: 'Lihka Games',
            rating: '4.9',
            size: '17 MB',
            category: 'game',
            tags: ['turbo', 'trail', 'racer', 'racing', 'car'],
            url: 'https://github.com/LihkaGames/Turbo-Trail-Racer-Game/releases/download/v1.0.0/Turbo.Trail.Racer.apk',
            bg: 'linear-gradient(135deg,#1A237E,#0D47A1)',
            icon: '🏎️'
        },
        {
            name: 'Precision Shot',
            dev: 'Lihka Games',
            rating: '4.9',
            size: '6 MB',
            category: 'game',
            tags: ['precision', 'shot', 'shooting', 'target'],
            url: 'https://github.com/LihkaGames/Precision-Shot-Game/releases/download/v1.0.0/Precision.Shot.apk',
            bg: 'linear-gradient(135deg,#1A237E,#0D47A1)',
            icon: '🎯'
        },
        {
            name: 'Phantom Strike',
            dev: 'Lihka Games',
            rating: '4.9',
            size: '7 MB',
            category: 'game',
            tags: ['phantom', 'strike', 'action', 'shooting'],
            url: 'https://github.com/LihkaGames/Phantom-Strike-Game/releases/download/v1.0.0/Phantom.Strike.apk',
            bg: 'linear-gradient(135deg,#0F1A0F,#050505)',
            icon: '👻'
        },
        {
            name: 'Glass Velocity',
            dev: 'Lihka Games',
            rating: '4.9',
            size: '22 MB',
            category: 'game',
            tags: ['glass', 'velocity', 'ball', 'physics'],
            url: 'https://github.com/LihkaGames/Glass-Velocity-Game/releases/download/v1.0.0/Glass.Velocity.apk',
            bg: 'linear-gradient(135deg,#0F1A0F,#050505)',
            icon: '🔮'
        },
        {
            name: 'PhotoEdit Pro',
            dev: 'CreativeApps',
            rating: '4.4',
            size: '48 MB',
            category: 'app',
            tags: ['photo', 'edit', 'camera', 'image'],
            url: '#',
            bg: 'linear-gradient(135deg,#43e97b,#38f9d7)',
            icon: '📸'
        },
        {
            name: 'CloudNote Plus',
            dev: 'ProductivityPro',
            rating: '4.6',
            size: '28 MB',
            category: 'app',
            tags: ['cloud', 'note', 'productivity', 'notes'],
            url: '#',
            bg: 'linear-gradient(135deg,#4facfe,#00f2fe)',
            icon: '📝'
        },
        {
            name: 'FitTrack Health',
            dev: 'HealthTech',
            rating: '4.3',
            size: '42 MB',
            category: 'app',
            tags: ['fit', 'track', 'health', 'fitness'],
            url: '#',
            bg: 'linear-gradient(135deg,#f5576c,#ff9a9e)',
            icon: '💪'
        },
        {
            name: 'MusicBox Stream',
            dev: 'SoundWave',
            rating: '4.5',
            size: '55 MB',
            category: 'app',
            tags: ['music', 'stream', 'audio', 'songs'],
            url: '#',
            bg: 'linear-gradient(135deg,#a855f7,#6366f1)',
            icon: '🎵'
        },
        {
            name: 'VideoMaker',
            dev: 'CreativeApps',
            rating: '4.6',
            size: '68 MB',
            category: 'app',
            tags: ['video', 'maker', 'editor', 'movie'],
            url: '#',
            bg: 'linear-gradient(135deg,#ff0844,#ffb199)',
            icon: '🎬'
        },
        {
            name: 'Social Connect',
            dev: 'NetSphere',
            rating: '4.0',
            size: '40 MB',
            category: 'app',
            tags: ['social', 'connect', 'chat', 'friends'],
            url: '#',
            bg: 'linear-gradient(135deg,#667eea,#764ba2)',
            icon: '💬'
        }
    ];

    // ===== DOM Elements =====
    var menuBtn = document.querySelector('.menu-btn');
    var mobNav = document.querySelector('.mob-nav');
    var mobClose = document.querySelector('.mob-close');
    var mobOverlay = document.querySelector('.mob-overlay');
    var btt = document.querySelector('.btt');
    var headerSearch = document.getElementById('hs');

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

    // ===== Menu Button =====
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

    if (mobClose) {
        mobClose.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            closeMenu();
        });
    }

    if (mobOverlay) {
        mobOverlay.addEventListener('click', function () {
            closeMenu();
        });
    }

    if (mobNav) {
        var navLinks = mobNav.querySelectorAll('a');
        for (var i = 0; i < navLinks.length; i++) {
            navLinks[i].addEventListener('click', function () {
                closeMenu();
            });
        }
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeMenu();
    });

    // ===== Back to Top =====
    if (btt) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                btt.classList.add('show');
                btt.classList.add('vis');
            } else {
                btt.classList.remove('show');
                btt.classList.remove('vis');
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
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') return;
            if (e.target.closest('a') || e.target.closest('button')) return;
            var url = this.getAttribute('data-go');
            if (url) location.href = url;
        });
    }

    // ===== Search Function =====
    function doSearch(query) {
        if (query && query.trim()) {
            location.href = 'search.html?q=' + encodeURIComponent(query.trim());
        }
    }

    // ===== Header Search =====
    if (headerSearch) {
        headerSearch.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') doSearch(headerSearch.value);
        });
        var searchBtn = headerSearch.parentElement.querySelector('button');
        if (searchBtn) {
            searchBtn.addEventListener('click', function () {
                doSearch(headerSearch.value);
            });
        }
    }

    // ===== Hero Search =====
    var heroSearch = document.getElementById('hsi');
    if (heroSearch) {
        heroSearch.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') doSearch(heroSearch.value);
        });
    }

    // ===== Search Page Logic =====
    var searchResults = document.getElementById('search-results');
    var queryDisplay = document.getElementById('qd');
    var resultCount = document.getElementById('rc');
    var searchInput = document.getElementById('si');

    if (searchResults) {
        // Get search query from URL
        var params = new URLSearchParams(window.location.search);
        var query = params.get('q') || '';

        // Show query in page
        if (queryDisplay) queryDisplay.textContent = query;
        if (searchInput) searchInput.value = query;

        // Update page title
        if (query) {
            document.title = 'Search: ' + query + ' - Lihka Games';
        }

        if (!query || !query.trim()) {
            // No query entered
            searchResults.innerHTML =
                '<div style="text-align:center;padding:60px 20px;color:#666">' +
                '<div style="font-size:3rem;margin-bottom:16px">🔎</div>' +
                '<h3 style="color:#888;margin-bottom:8px">Enter a search term</h3>' +
                '<p style="font-size:.9rem">Try searching for "Block Fusion", "Racing", "Puzzle" etc.</p>' +
                '</div>';
            if (resultCount) resultCount.textContent = '0';
            return;
        }

        var q = query.toLowerCase().trim();

        // Search through games data
        var results = [];
        for (var k = 0; k < gamesData.length; k++) {
            var item = gamesData[k];
            var nameMatch = item.name.toLowerCase().indexOf(q) !== -1;
            var devMatch = item.dev.toLowerCase().indexOf(q) !== -1;
            var catMatch = item.category.toLowerCase().indexOf(q) !== -1;
            var tagMatch = false;

            for (var t = 0; t < item.tags.length; t++) {
                if (item.tags[t].toLowerCase().indexOf(q) !== -1) {
                    tagMatch = true;
                    break;
                }
            }

            if (nameMatch || devMatch || catMatch || tagMatch) {
                results.push(item);
            }
        }

        // Update result count
        if (resultCount) resultCount.textContent = results.length;

        if (results.length === 0) {
            // No results found
            searchResults.innerHTML =
                '<div style="text-align:center;padding:60px 20px;color:#666">' +
                '<div style="font-size:3rem;margin-bottom:16px">😕</div>' +
                '<h3 style="color:#888;margin-bottom:8px">No results found for "' + query + '"</h3>' +
                '<p style="font-size:.9rem;margin-bottom:20px">Try different keywords like "Block", "Racing", "Puzzle"</p>' +
                '<a href="games.html" style="display:inline-block;padding:10px 24px;background:#0f0;color:#111;border-radius:10px;font-weight:700;text-decoration:none">Browse All Games</a>' +
                '</div>';
            return;
        }

        // Build results HTML
        var html = '<div class="grid">';
        for (var r = 0; r < results.length; r++) {
            var item = results[r];
            var categoryLabel = item.category === 'game' ? '🎮 Game' : '📱 App';
            html +=
                '<div class="card">' +
                '<div class="card-ico" style="background:' + item.bg + ';font-size:2rem;display:flex;align-items:center;justify-content:center;">' +
                item.icon +
                '</div>' +
                '<h3>' + item.name + '</h3>' +
                '<div class="sub">' + item.dev + '</div>' +
                '<div class="meta"><b>⭐ ' + item.rating + '</b><span>' + item.size + '</span></div>' +
                '<div style="margin-bottom:6px"><span class="tag">' + categoryLabel + '</span></div>' +
                '<a href="' + item.url + '" class="dl" ' + (item.url !== '#' ? 'download' : '') + '>⬇ Download</a>' +
                '</div>';
        }
        html += '</div>';

        searchResults.innerHTML = html;
    }

})();
