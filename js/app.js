// =============================================
// Lihka Games - Main JavaScript
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

})();

// =============================================
// 🔍 READ DATA FROM INDEX.HTML CARDS
// This data is auto-synced from your HTML cards
// =============================================

function getSearchDatabase() {
    // Try to read from current page first (if on index.html)
    const cards = document.querySelectorAll('#cardContainer .card');
    
    if (cards.length > 0) {
        const data = [];
        cards.forEach(card => {
            const name = card.querySelector('h3')?.textContent || '';
            const developer = card.querySelector('.sub')?.textContent || '';
            const metaText = card.querySelector('.meta')?.textContent || '';
            const rating = metaText.match(/⭐\s*([\d.]+)/)?.[1] || '0';
            const size = metaText.match(/([\d.]+\s*[MG]B)/)?.[1] || '';
            const dataName = card.getAttribute('data-name') || '';
            const link = card.querySelector('.dl')?.href || '#';
            
            const iconDiv = card.querySelector('.card-ico');
            const icon = iconDiv?.style.background || 'linear-gradient(135deg,#667eea,#764ba2)';
            const svg = iconDiv?.innerHTML || '';
            
            const tags = dataName.split(' ').filter(tag => tag.length > 2);
            
            data.push({
                name: name,
                developer: developer,
                rating: rating,
                size: size,
                type: 'game',
                tags: tags,
                icon: icon,
                svg: svg,
                link: link
            });
        });
        return data;
    }
    
    // Fallback: Return minimal database for search page
    // UPDATE THIS WHEN YOU ADD NEW GAMES TO INDEX.HTML
    return [
        {
            name: "Block Fusion",
            developer: "Lihka Games",
            rating: "4.7",
            size: "26 MB",
            tags: ["block", "fusion", "puzzle", "strategy", "casual", "game", "lihka"],
            icon: "linear-gradient(135deg,#667eea,#764ba2)",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 108"><path d="M16.3,88.8 Q54,99 91.7,88.8 Q94.6,81.6 91.7,74.2 Q54,64.2 16.3,74.2 Q13.4,81.6 16.3,88.8z" fill="#000000" fill-opacity="0.12"/><g><path d="M34.6,36.6 L34.6,51.1 L43.3,46.8 L43.3,32.3z" fill="#0D47A1"/><path d="M17.2,32.3 L34.6,36.6 L43.3,32.3 L25.8,28z" fill="#42A5F5"/></g></svg>`,
            link: "https://github.com/LihkaGames/Block-Fusion-Game/raw/refs/heads/main/Block%20Fusion.apk"
        },
        {
            name: "Blitz Storm Arena",
            developer: "Lihka Games",
            rating: "4.7",
            size: "10 MB",
            tags: ["blitz", "storm", "arena", "action", "battle", "multiplayer", "game", "lihka"],
            icon: "linear-gradient(135deg,#0D1117,#1a1a2e)",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 108"><path d="M54,18 L86,30 L90,54 L82,74 L54,94 L26,74 L18,54 L22,30 Z" fill="#FFD700" stroke="#FFF176" stroke-width="0.8"/><path d="M62,26 L47,52 L58,51 L42,82 L70,54 L58,55 Z" fill="#FFD700"/></svg>`,
            link: "https://github.com/LihkaGames/Blitz-Storm-Arena/raw/refs/heads/main/Blitz%20Storm%20Arena.apk"
        },
        {
            name: "Crystal Cascade",
            developer: "Lihka Games",
            rating: "4.5",
            size: "15 MB",
            tags: ["crystal", "cascade", "puzzle", "jewel", "match", "game", "lihka"],
            icon: "linear-gradient(135deg,#0A1628,#1a237e)",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 108"><path d="M54,54 m-34,0 a34,34 0 1,1 68,0 a34,34 0 1,1 -68,0" fill="#0A1628"/><path d="M54,28 L70,43 L54,66 L38,43 Z" fill="#2979FF"/></svg>`,
            link: "https://github.com/LihkaGames/Crystal-Cascade-Game/raw/refs/heads/main/Crystal%20Cascade.apk"
        },
        {
            name: "Disc Strike Arena",
            developer: "Lihka Games",
            rating: "4.6",
            size: "10 MB",
            tags: ["disc", "strike", "arena", "carrom", "sport", "multiplayer", "game", "lihka"],
            icon: "linear-gradient(135deg,#2E1A0E,#4E342E)",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 108"><path fill="#3E2723" d="M54,54 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"/><path fill="#C62828" d="M54,54 m-14,0 a14,14 0 1,1 28,0 a14,14 0 1,1 -28,0"/></svg>`,
            link: "https://github.com/LihkaGames/Disc-Strike-Arena-Game/releases/download/v1.0/Disc.Strike.Arena.apk"
        },
        {
            name: "Roll Master Quest",
            developer: "Lihka Games",
            rating: "4.8",
            size: "7 MB",
            tags: ["roll", "master", "quest", "ludo", "board", "dice", "game", "multiplayer", "lihka"],
            icon: "linear-gradient(135deg,#251a3d,#1f0b36)",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 108"><path d="M36,30h36v48h-36z" fill="#000000" fill-opacity="0.08"/><path d="M50,44h8v8h-8z" fill="#FFD700"/></svg>`,
            link: "https://github.com/LihkaGames/Roll-Master-Quest-Ludo-Game/releases/download/v1.0.0/Roll.Master.Quest.apk"
        },
        {
            name: "Serpent Surge",
            developer: "Lihka Games",
            rating: "4.4",
            size: "6 MB",
            tags: ["serpent", "surge", "snake", "classic", "arcade", "retro", "game", "lihka"],
            icon: "linear-gradient(135deg,#1A1A2E,#16213E)",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 108"><path fill="#1A1A2E" d="M0,0h108v108H0z"/><path fill="none" stroke="#39FF14" stroke-width="10" d="M25,82 Q12,52 38,40"/></svg>`,
            link: "https://github.com/LihkaGames/Serpent-Surge-Game/releases/download/v1.0.0/Serpent.Surge.apk"
        },
        {
            name: "Turbo Trail Racer",
            developer: "Lihka Games",
            rating: "4.9",
            size: "17 MB",
            tags: ["turbo", "trail", "racer", "racing", "car", "speed", "3d", "game", "lihka"],
            icon: "linear-gradient(135deg,#1A237E,#0D47A1)",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="512" height="512" rx="56" fill="#1A237E"/><circle cx="430" cy="410" r="28" fill="#FF6D00"/></svg>`,
            link: "https://github.com/LihkaGames/Turbo-Trail-Racer-Game/releases/download/v1.0.0/Turbo.Trail.Racer.apk"
        },
        {
            name: "Precision Shot",
            developer: "Lihka Games",
            rating: "4.9",
            size: "6 MB",
            tags: ["precision", "shot", "target", "aim", "shooting", "skill", "game", "lihka"],
            icon: "linear-gradient(135deg,#1A237E,#0D47A1)",
            svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="48" fill="#E0E0E0"/><circle cx="50" cy="50" r="10" fill="#FFD700"/></svg>`,
            link: "https://github.com/LihkaGames/Precision-Shot-Game/releases/download/v1.0.0/Precision.Shot.apk"
        },
        {
            name: "Phantom Strike",
            developer: "Lihka Games",
            rating: "4.9",
            size: "7 MB",
            tags: ["phantom", "strike", "fps", "shooter", "stealth", "action", "game", "lihka"],
            icon: "linear-gradient(135deg,#0F1A0F,#050505)",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 108"><path fill="#080C08" d="M0,0h108v108H0z"/><path fill="#EE2200" d="M39,46.5 L49,46.5 L49,51.5 L39,51.5z"/></svg>`,
            link: "https://github.com/LihkaGames/Phantom-Strike-Game/releases/download/v1.0.0/Phantom.Strike.apk"
        },
        {
            name: "Glass Velocity",
            developer: "Lihka Games",
            rating: "4.9",
            size: "22 MB",
            tags: ["glass", "velocity", "physics", "arcade", "speed", "reflex", "game", "lihka"],
            icon: "linear-gradient(135deg,#0F1A0F,#050505)",
            svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 108 108"><path d="M 36,22 L 62,22 L 62,84 L 36,84 Z" fill="#7BB8E8" fill-opacity="0.55"/><circle cx="53" cy="54" r="6" fill="#050E1C"/></svg>`,
            link: "https://github.com/LihkaGames/Glass-Velocity-Game/releases/download/v1.0.0/Glass.Velocity.apk"
        }
    ];
}

// =============================================
// 🎯 SEARCH ALGORITHM
// =============================================

function searchGames(query) {
    if (!query || query.trim() === '') return [];
    
    const database = getSearchDatabase();
    query = query.toLowerCase().trim();
    
    const results = database.map(item => {
        let score = 0;
        
        // Check name
        if (item.name.toLowerCase().includes(query)) {
            score = 100;
        }
        
        // Check tags
        if (item.tags) {
            for (let tag of item.tags) {
                if (tag.toLowerCase().includes(query)) {
                    score = Math.max(score, 80);
                }
            }
        }
        
        // Check developer
        if (item.developer.toLowerCase().includes(query)) {
            score = Math.max(score, 70);
        }
        
        return { ...item, score };
    });
    
    return results
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score);
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

    if (query && queryDisplay && resultCount && resultsContainer) {
        queryDisplay.textContent = query;
        if (searchInput) searchInput.value = query;

        const results = searchGames(query);
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
            resultsContainer.innerHTML = `
                <div style="text-align:center;padding:60px 20px;color:#666">
                    <h2 style="font-size:3rem;margin-bottom:10px">🔍</h2>
                    <h3 style="margin-bottom:8px;color:#aaa">No results found for "${query}"</h3>
                    <p style="margin-bottom:20px">Try: "Block", "Racing", "Ludo", "Puzzle"</p>
                </div>
            `;
        }
    } else if (!query && resultsContainer) {
        if (queryDisplay) queryDisplay.textContent = "";
        if (resultCount) resultCount.textContent = "0";
        resultsContainer.innerHTML = `
            <div style="text-align:center;padding:60px 20px;color:#666">
                <h2 style="font-size:3rem;margin-bottom:10px">🔎</h2>
                <h3 style="margin-bottom:8px;color:#aaa">Start typing to search</h3>
                <p style="margin-bottom:20px">Popular searches:</p>
                <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
                    <span style="padding:8px 16px;background:#1a1a1a;border-radius:20px;font-size:0.85rem;cursor:pointer;border:1px solid #333" onclick="window.location.href='search.html?q=Block%20Fusion'">Block Fusion</span>
                    <span style="padding:8px 16px;background:#1a1a1a;border-radius:20px;font-size:0.85rem;cursor:pointer;border:1px solid #333" onclick="window.location.href='search.html?q=Racing'">Racing</span>
                    <span style="padding:8px 16px;background:#1a1a1a;border-radius:20px;font-size:0.85rem;cursor:pointer;border:1px solid #333" onclick="window.location.href='search.html?q=Ludo'">Ludo</span>
                </div>
            </div>
        `;
    }
}

// =============================================
// 🔍 SIMPLE SEARCH ON INDEX.HTML
// =============================================

function filterCards(query) {
    const cards = document.querySelectorAll('#cardContainer .card');
    
    query = query.toLowerCase().trim();
    
    let visibleCount = 0;
    
    cards.forEach(card => {
        const name = card.getAttribute('data-name') || '';
        
        if (name.includes(query)) {
            card.style.display = '';
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    let noResultsMsg = document.getElementById('no-results-msg');
    
    if (visibleCount === 0 && query !== '') {
        if (!noResultsMsg) {
            noResultsMsg = document.createElement('div');
            noResultsMsg.id = 'no-results-msg';
            noResultsMsg.style.cssText = 'text-align:center;padding:60px 20px;color:#666;grid-column:1/-1';
            noResultsMsg.innerHTML = `
                <h2 style="font-size:3rem;margin-bottom:10px">🔍</h2>
                <h3 style="margin-bottom:8px;color:#aaa">No results found for "${query}"</h3>
                <p>Try: "Block", "Racing", "Ludo", "Puzzle"</p>
            `;
            const container = document.getElementById('cardContainer');
            if (container) container.appendChild(noResultsMsg);
        }
    } else {
        if (noResultsMsg) {
            noResultsMsg.remove();
        }
    }
}