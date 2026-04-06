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
            tags: ['block', 'fusion', 'puzzle', 'blocks'],
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
            tags: ['blitz', 'storm', 'arena', 'action', 'lightning'],
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
            tags: ['crystal', 'cascade', 'puzzle', 'match'],
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
            tags: ['disc', 'strike', 'arena', 'sports', 'hockey'],
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
            tags: ['roll', 'master', 'quest', 'ludo', 'board', 'dice'],
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
            tags: ['serpent', 'surge', 'snake', 'classic'],
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
            tags: ['turbo', 'trail', 'racer', 'racing', 'car', 'speed', 'drive'],
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
            tags: ['precision', 'shot', 'shooting', 'target', 'aim'],
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
            tags: ['phantom', 'strike', 'action', 'shooting', 'gun'],
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
            tags: ['glass', 'velocity', 'ball', 'physics', 'break'],
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
            tags: ['photo', 'edit', 'camera', 'image', 'filter'],
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
            tags: ['cloud', 'note', 'productivity', 'notes', 'write'],
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
            tags: ['fit', 'track', 'health', 'fitness', 'workout'],
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
            tags: ['music', 'stream', 'audio', 'songs', 'playlist'],
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
            tags: ['video', 'maker', 'editor', 'movie', 'clip'],
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
            tags: ['social', 'connect', 'chat', 'friends', 'message'],
            url: '#',
            bg: 'linear-gradient(135deg,#667eea,#764ba2)',
            icon: '💬'
        }
    ];

    // =============================================
    // ===== ADVANCED FUZZY SEARCH ENGINE =====
    // =============================================

    // ===== Levenshtein Distance (typo tolerance) =====
    function levenshtein(a, b) {
        var m = a.length, n = b.length;
        var dp = [];
        for (var i = 0; i <= m; i++) {
            dp[i] = [i];
        }
        for (var j = 0; j <= n; j++) {
            dp[0][j] = j;
        }
        for (var i = 1; i <= m; i++) {
            for (var j = 1; j <= n; j++) {
                if (a[i - 1] === b[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = 1 + Math.min(
                        dp[i - 1][j],
                        dp[i][j - 1],
                        dp[i - 1][j - 1]
                    );
                }
            }
        }
        return dp[m][n];
    }

    // ===== Get Score for item vs query =====
    function getScore(item, q) {
        var score = 0;
        var nameLower = item.name.toLowerCase();
        var devLower = item.dev.toLowerCase();
        var qLower = q.toLowerCase();

        // ===== Exact full name match (highest) =====
        if (nameLower === qLower) return 1000;

        // ===== Name starts with query =====
        if (nameLower.indexOf(qLower) === 0) score += 200;

        // ===== Name contains query =====
        if (nameLower.indexOf(qLower) !== -1) score += 150;

        // ===== Dev name contains query =====
        if (devLower.indexOf(qLower) !== -1) score += 80;

        // ===== Category match =====
        if (item.category.toLowerCase().indexOf(qLower) !== -1) score += 60;

        // ===== Tag exact match =====
        for (var t = 0; t < item.tags.length; t++) {
            var tag = item.tags[t].toLowerCase();
            if (tag === qLower) { score += 120; break; }
            if (tag.indexOf(qLower) !== -1) { score += 80; break; }
            if (qLower.indexOf(tag) !== -1) { score += 60; break; }
        }

        // ===== Word by word match =====
        var nameWords = nameLower.split(/\s+/);
        var qWords = qLower.split(/\s+/);

        for (var nw = 0; nw < nameWords.length; nw++) {
            for (var qw = 0; qw < qWords.length; qw++) {
                if (nameWords[nw] === qWords[qw]) score += 90;
                else if (nameWords[nw].indexOf(qWords[qw]) !== -1) score += 50;
                else if (qWords[qw].indexOf(nameWords[nw]) !== -1) score += 40;
            }
        }

        // ===== Fuzzy / Levenshtein typo check =====
        // Check each word of name against query
        for (var nw2 = 0; nw2 < nameWords.length; nw2++) {
            var dist = levenshtein(nameWords[nw2], qLower);
            var maxLen = Math.max(nameWords[nw2].length, qLower.length);
            var similarity = 1 - (dist / maxLen);
            if (similarity >= 0.8) score += 100;
            else if (similarity >= 0.6) score += 60;
            else if (similarity >= 0.4) score += 30;
        }

        // ===== Fuzzy check tags =====
        for (var ft = 0; ft < item.tags.length; ft++) {
            var tagDist = levenshtein(item.tags[ft].toLowerCase(), qLower);
            var tagMax = Math.max(item.tags[ft].length, qLower.length);
            var tagSim = 1 - (tagDist / tagMax);
            if (tagSim >= 0.75) score += 50;
            else if (tagSim >= 0.5) score += 25;
        }

        // ===== Boost by rating =====
        score += parseFloat(item.rating) * 2;

        return score;
    }

    // ===== Full fuzzy search =====
    function fuzzySearch(query, maxResults) {
        if (!query || !query.trim()) return [];
        var q = query.trim();
        var scored = [];

        for (var i = 0; i < gamesData.length; i++) {
            var s = getScore(gamesData[i], q);
            if (s > 10) {
                scored.push({ item: gamesData[i], score: s });
            }
        }

        // Sort by score descending
        scored.sort(function (a, b) { return b.score - a.score; });

        // If no good results, return top 4 by rating as fallback
        if (scored.length === 0) {
            var fallback = gamesData.slice().sort(function (a, b) {
                return parseFloat(b.rating) - parseFloat(a.rating);
            });
            return fallback.slice(0, maxResults || 4).map(function (item) {
                return { item: item, score: 0, isFallback: true };
            });
        }

        return scored.slice(0, maxResults || gamesData.length);
    }

    // ===== Highlight matching text =====
    function highlight(text, query) {
        if (!query) return text;
        var escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        var regex = new RegExp('(' + escaped + ')', 'gi');
        return text.replace(regex, '<mark style="background:#0f03;color:#0f0;border-radius:3px;padding:0 2px">$1</mark>');
    }

    // =============================================
    // ===== AUTO SUGGESTION DROPDOWN =====
    // =============================================

    var suggestionStyles = '' +
        '.sug-box{' +
            'position:absolute;' +
            'top:calc(100% + 6px);' +
            'left:0;' +
            'right:0;' +
            'background:#1a1a1a;' +
            'border:1px solid #333;' +
            'border-radius:14px;' +
            'z-index:9999;' +
            'max-height:420px;' +
            'overflow-y:auto;' +
            'box-shadow:0 8px 32px rgba(0,0,0,0.5),0 0 0 1px rgba(0,255,0,0.08);' +
            'scrollbar-width:thin;' +
            'scrollbar-color:#333 transparent;' +
            'animation:sugFadeIn 0.18s ease;' +
        '}' +
        '@keyframes sugFadeIn{' +
            'from{opacity:0;transform:translateY(-8px) scale(0.98)}' +
            'to{opacity:1;transform:translateY(0) scale(1)}' +
        '}' +
        '.sug-box::-webkit-scrollbar{width:4px}' +
        '.sug-box::-webkit-scrollbar-track{background:transparent}' +
        '.sug-box::-webkit-scrollbar-thumb{background:#333;border-radius:4px}' +
        '.sug-header{' +
            'padding:10px 14px 6px;' +
            'font-size:.7rem;' +
            'font-weight:700;' +
            'color:#555;' +
            'text-transform:uppercase;' +
            'letter-spacing:1px;' +
            'border-bottom:1px solid #222;' +
        '}' +
        '.sug-item{' +
            'display:flex;' +
            'align-items:center;' +
            'gap:12px;' +
            'padding:10px 14px;' +
            'cursor:pointer;' +
            'transition:background 0.15s ease;' +
            'border-bottom:1px solid #1f1f1f;' +
        '}' +
        '.sug-item:last-child{border-bottom:none}' +
        '.sug-item:hover,.sug-item.active{' +
            'background:rgba(0,255,0,0.06);' +
        '}' +
        '.sug-ico{' +
            'width:38px;' +
            'height:38px;' +
            'border-radius:10px;' +
            'flex-shrink:0;' +
            'display:flex;' +
            'align-items:center;' +
            'justify-content:center;' +
            'font-size:1.2rem;' +
        '}' +
        '.sug-info{flex:1;min-width:0}' +
        '.sug-name{' +
            'font-size:.88rem;' +
            'font-weight:600;' +
            'color:#eee;' +
            'white-space:nowrap;' +
            'overflow:hidden;' +
            'text-overflow:ellipsis;' +
        '}' +
        '.sug-meta{' +
            'font-size:.72rem;' +
            'color:#666;' +
            'margin-top:1px;' +
        '}' +
        '.sug-badge{' +
            'font-size:.65rem;' +
            'padding:2px 7px;' +
            'border-radius:8px;' +
            'font-weight:700;' +
            'flex-shrink:0;' +
        '}' +
        '.sug-badge.game{background:#0f02;color:#0f0;border:1px solid #0f03}' +
        '.sug-badge.app{background:#00f2;color:#0af;border:1px solid #00f3}' +
        '.sug-footer{' +
            'padding:10px 14px;' +
            'text-align:center;' +
            'border-top:1px solid #222;' +
            'font-size:.78rem;' +
            'color:#555;' +
            'cursor:pointer;' +
            'transition:color 0.2s;' +
        '}' +
        '.sug-footer:hover{color:#0f0}' +
        '.sug-fallback-label{' +
            'padding:8px 14px 4px;' +
            'font-size:.7rem;' +
            'color:#444;' +
            'font-style:italic;' +
        '}' +
        '.sug-no-result{' +
            'padding:20px 14px;' +
            'text-align:center;' +
            'color:#555;' +
            'font-size:.85rem;' +
        '}';

    // Inject styles once
    var styleTag = document.createElement('style');
    styleTag.textContent = suggestionStyles;
    document.head.appendChild(styleTag);

    // ===== Create suggestion box for an input =====
    function createSugBox(inputEl) {
        var wrapper = inputEl.parentElement;
        // Make sure wrapper is positioned
        if (getComputedStyle(wrapper).position === 'static') {
            wrapper.style.position = 'relative';
        }

        var box = document.createElement('div');
        box.className = 'sug-box';
        box.style.display = 'none';
        wrapper.appendChild(box);
        return box;
    }

    // ===== Render suggestions =====
    function renderSuggestions(box, query, inputEl, onSelect) {
        if (!query || query.trim().length === 0) {
            box.style.display = 'none';
            return;
        }

        var results = fuzzySearch(query, 6);

        if (results.length === 0) {
            box.innerHTML =
                '<div class="sug-no-result">' +
                '😕 No matches found<br>' +
                '<span style="font-size:.75rem;color:#444">Try different keywords</span>' +
                '</div>';
            box.style.display = 'block';
            return;
        }

        var hasFallback = results[0] && results[0].isFallback;
        var html = '';

        if (hasFallback) {
            html += '<div class="sug-header">✨ Popular Apps & Games</div>';
        } else {
            html += '<div class="sug-header">🔎 Suggestions</div>';
        }

        for (var i = 0; i < results.length; i++) {
            var r = results[i];
            var item = r.item;
            var badgeClass = item.category === 'game' ? 'game' : 'app';
            var badgeLabel = item.category === 'game' ? '🎮' : '📱';
            var highlightedName = hasFallback ? item.name : highlight(item.name, query);

            html +=
                '<div class="sug-item" data-idx="' + i + '" data-url="' + item.url + '" data-name="' + item.name + '">' +
                    '<div class="sug-ico" style="background:' + item.bg + '">' + item.icon + '</div>' +
                    '<div class="sug-info">' +
                        '<div class="sug-name">' + highlightedName + '</div>' +
                        '<div class="sug-meta">⭐ ' + item.rating + ' &bull; ' + item.size + ' &bull; ' + item.dev + '</div>' +
                    '</div>' +
                    '<span class="sug-badge ' + badgeClass + '">' + badgeLabel + '</span>' +
                '</div>';
        }

        // Show all results footer
        html +=
            '<div class="sug-footer" id="sug-see-all-' + Math.random().toString(36).substr(2,5) + '">' +
            '🔍 See all results for &ldquo;' + query + '&rdquo;' +
            '</div>';

        box.innerHTML = html;
        box.style.display = 'block';

        // Active index for keyboard nav
        box._activeIdx = -1;
        box._results = results;
        box._query = query;

        // ===== Item click =====
        var items = box.querySelectorAll('.sug-item');
        for (var j = 0; j < items.length; j++) {
            (function(el, idx) {
                el.addEventListener('mousedown', function (e) {
                    e.preventDefault();
                    var name = el.getAttribute('data-name');
                    inputEl.value = name;
                    box.style.display = 'none';
                    doSearch(name);
                });
            })(items[j], j);
        }

        // ===== Footer click =====
        var footer = box.querySelector('.sug-footer');
        if (footer) {
            footer.addEventListener('mousedown', function (e) {
                e.preventDefault();
                box.style.display = 'none';
                doSearch(query);
            });
        }
    }

    // ===== Keyboard navigation =====
    function handleSugKeyboard(e, box, inputEl) {
        if (!box || box.style.display === 'none') return;

        var items = box.querySelectorAll('.sug-item');
        if (!items.length) return;

        if (e.key === 'ArrowDown') {
            e.preventDefault();
            box._activeIdx = Math.min(box._activeIdx + 1, items.length - 1);
            updateActive(items, box._activeIdx, inputEl, box._results);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            box._activeIdx = Math.max(box._activeIdx - 1, -1);
            updateActive(items, box._activeIdx, inputEl, box._results);
        } else if (e.key === 'Enter') {
            if (box._activeIdx >= 0 && items[box._activeIdx]) {
                e.preventDefault();
                var name = items[box._activeIdx].getAttribute('data-name');
                inputEl.value = name;
                box.style.display = 'none';
                doSearch(name);
            } else {
                box.style.display = 'none';
                doSearch(inputEl.value);
            }
        } else if (e.key === 'Escape') {
            box.style.display = 'none';
            box._activeIdx = -1;
        }
    }

    function updateActive(items, idx, inputEl, results) {
        for (var i = 0; i < items.length; i++) {
            items[i].classList.remove('active');
        }
        if (idx >= 0 && items[idx]) {
            items[idx].classList.add('active');
            items[idx].scrollIntoView({ block: 'nearest' });
            if (results && results[idx]) {
                inputEl.value = results[idx].item.name;
            }
        }
    }

    // ===== Attach suggestion to input =====
    function attachSuggestion(inputEl) {
        if (!inputEl) return;

        var box = createSugBox(inputEl);
        var debounceTimer = null;

        inputEl.addEventListener('input', function () {
            clearTimeout(debounceTimer);
            var val = inputEl.value;
            debounceTimer = setTimeout(function () {
                renderSuggestions(box, val, inputEl);
            }, 120);
        });

        inputEl.addEventListener('focus', function () {
            var val = inputEl.value;
            if (val.trim().length > 0) {
                renderSuggestions(box, val, inputEl);
            } else {
                // Show popular on empty focus
                renderSuggestions(box, ' ', inputEl);
            }
        });

        inputEl.addEventListener('keydown', function (e) {
            handleSugKeyboard(e, box, inputEl);
        });

        inputEl.addEventListener('blur', function () {
            setTimeout(function () {
                box.style.display = 'none';
                box._activeIdx = -1;
            }, 200);
        });

        // Close on outside click
        document.addEventListener('click', function (e) {
            if (!inputEl.contains(e.target) && !box.contains(e.target)) {
                box.style.display = 'none';
            }
        });
    }

    // =============================================
    // ===== DOM Elements =====
    // =============================================

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
        mobOverlay.addEventListener('click', function () {
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
        // Attach auto suggestion
        attachSuggestion(headerSearch);

        headerSearch.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                var sugBox = headerSearch.parentElement.querySelector('.sug-box');
                if (sugBox && sugBox._activeIdx >= 0) return;
                doSearch(headerSearch.value);
            }
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
        attachSuggestion(heroSearch);

        heroSearch.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                var sugBox = heroSearch.parentElement.querySelector('.sug-box');
                if (sugBox && sugBox._activeIdx >= 0) return;
                doSearch(heroSearch.value);
            }
        });
    }

    // ===== Search Page Input =====
    var searchPageInput = document.getElementById('si');
    if (searchPageInput) {
        attachSuggestion(searchPageInput);

        searchPageInput.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                var sugBox = searchPageInput.parentElement.querySelector('.sug-box');
                if (sugBox && sugBox._activeIdx >= 0) return;
                doSearch(searchPageInput.value);
            }
        });
    }

    // =============================================
    // ===== SEARCH PAGE RESULTS LOGIC =====
    // =============================================

    var searchResults = document.getElementById('search-results');
    var queryDisplay = document.getElementById('qd');
    var resultCount = document.getElementById('rc');

    if (searchResults) {

        var params = new URLSearchParams(window.location.search);
        var query = params.get('q') || '';

        if (queryDisplay) queryDisplay.textContent = query;
        if (searchPageInput) searchPageInput.value = query;
        if (headerSearch) headerSearch.value = query;

        if (query) {
            document.title = 'Search: ' + query + ' - Lihka Games';
        }

        // ===== No Query =====
        if (!query || !query.trim()) {
            // Show popular games when no query
            var popular = gamesData.slice().sort(function (a, b) {
                return parseFloat(b.rating) - parseFloat(a.rating);
            });

            if (resultCount) resultCount.textContent = popular.length;
            if (queryDisplay) queryDisplay.parentElement.style.display = 'none';

            var html = '<p style="color:#666;font-size:.85rem;margin-bottom:16px">✨ <b style="color:#0f0">Popular</b> Apps &amp; Games</p>';
            html += '<div class="grid">';
            for (var p = 0; p < popular.length; p++) {
                var item = popular[p];
                var catLabel = item.category === 'game' ? '🎮 Game' : '📱 App';
                html +=
                    '<div class="card">' +
                        '<div class="card-ico" style="background:' + item.bg + ';font-size:2rem;display:flex;align-items:center;justify-content:center;">' + item.icon + '</div>' +
                        '<h3>' + item.name + '</h3>' +
                        '<div class="sub">' + item.dev + '</div>' +
                        '<div class="meta"><b>⭐ ' + item.rating + '</b><span>' + item.size + '</span></div>' +
                        '<div style="margin-bottom:8px"><span class="tag">' + catLabel + '</span></div>' +
                        '<a href="' + item.url + '" class="dl" ' + (item.url !== '#' ? 'download' : '') + '>⬇ Download</a>' +
                    '</div>';
            }
            html += '</div>';
            searchResults.innerHTML = html;
            return;
        }

        // ===== Do Fuzzy Search =====
        var results = fuzzySearch(query);
        var hasFallback = results.length > 0 && results[0].isFallback;

        if (resultCount) resultCount.textContent = hasFallback ? '0' : results.length;

        var html = '';

        if (hasFallback) {
            // Show "no exact results" message + popular suggestions
            html +=
                '<div style="background:#1a1a1a;border:1px solid #2a2a2a;border-radius:12px;padding:20px;margin-bottom:24px;display:flex;align-items:flex-start;gap:14px;">' +
                    '<div style="font-size:2rem;flex-shrink:0">😕</div>' +
                    '<div>' +
                        '<h3 style="color:#eee;font-size:1rem;margin-bottom:4px">No exact results for &ldquo;' + query + '&rdquo;</h3>' +
                        '<p style="color:#666;font-size:.85rem">Showing popular games &amp; apps you might like</p>' +
                    '</div>' +
                '</div>';
            html += '<p style="color:#666;font-size:.85rem;margin-bottom:16px">✨ <b style="color:#0f0">Suggested</b> for you</p>';
        } else {
            html += '<p style="color:#666;font-size:.85rem;margin-bottom:16px">Found <b style="color:#0f0">' + results.length + '</b> result' + (results.length !== 1 ? 's' : '') + ' for &ldquo;<b style="color:#eee">' + query + '</b>&rdquo;</p>';
        }

        html += '<div class="grid">';

        for (var r = 0; r < results.length; r++) {
            var res = results[r];
            var item = res.item;
            var catLabel = item.category === 'game' ? '🎮 Game' : '📱 App';
            var dlAttr = (item.url !== '#') ? 'download' : '';
            var highlightedName = hasFallback ? item.name : highlight(item.name, query);

            html +=
                '<div class="card">' +
                    '<div class="card-ico" style="background:' + item.bg + ';font-size:2rem;display:flex;align-items:center;justify-content:center;">' + item.icon + '</div>' +
                    '<h3>' + highlightedName + '</h3>' +
                    '<div class="sub">' + item.dev + '</div>' +
                    '<div class="meta"><b>⭐ ' + item.rating + '</b><span>' + item.size + '</span></div>' +
                    '<div style="margin-bottom:8px"><span class="tag">' + catLabel + '</span></div>' +
                    '<a href="' + item.url + '" class="dl" ' + dlAttr + '>⬇ Download</a>' +
                '</div>';
        }

        html += '</div>';
        searchResults.innerHTML = html;
    }

})();