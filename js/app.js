// =============================================
// Lihka Games - Main JavaScript
// Data fetched from index.html cards (no database in this file)
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
// 🔥 FETCH DATA FROM INDEX.HTML (NO DATABASE HERE)
// =============================================

function fetchDataFromIndexHTML() {
    return new Promise((resolve, reject) => {
        fetch('index.html')
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, 'text/html');
                
                // Get all cards from index.html
                const cards = doc.querySelectorAll('#cardContainer .card');
                
                const data = [];
                
                cards.forEach(card => {
                    const name = card.querySelector('h3')?.textContent || '';
                    const developer = card.querySelector('.sub')?.textContent || '';
                    const metaText = card.querySelector('.meta')?.textContent || '';
                    const rating = metaText.match(/⭐\s*([\d.]+)/)?.[1] || '0';
                    const size = metaText.match(/([\d.]+\s*[MG]B)/)?.[1] || '';
                    const dataName = card.getAttribute('data-name') || '';
                    const link = card.querySelector('.dl')?.href || '#';
                    
                    // Get icon background
                    const iconDiv = card.querySelector('.card-ico');
                    const icon = iconDiv?.style.background || 'linear-gradient(135deg,#667eea,#764ba2)';
                    
                    // Get SVG
                    const svg = iconDiv?.innerHTML || '';
                    
                    // Extract tags from data-name
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
                
                resolve(data);
            })
            .catch(error => {
                console.error('Error fetching index.html:', error);
                reject(error);
            });
    });
}

// =============================================
// 🎯 SEARCH ALGORITHM
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
    
    if (str1 === str2) return 100;
    if (str2.includes(str1)) return 90;
    if (str1.includes(str2)) return 85;
    
    const words1 = str1.split(' ');
    const words2 = str2.split(' ');
    for (let word1 of words1) {
        for (let word2 of words2) {
            if (word1 === word2) return 80;
        }
    }
    
    const maxLen = Math.max(str1.length, str2.length);
    const distance = levenshteinDistance(str1, str2);
    const similarity = ((maxLen - distance) / maxLen) * 70;
    
    return similarity;
}

function advancedSearch(query, searchDatabase) {
    if (!query || query.trim() === '') return [];
    
    query = query.trim().toLowerCase();
    
    const results = searchDatabase.map(item => {
        let score = 0;
        
        score = Math.max(score, similarityScore(query, item.name));
        score = Math.max(score, similarityScore(query, item.developer) * 0.7);
        score = Math.max(score, similarityScore(query, item.type) * 0.6);
        
        if (item.tags) {
            for (let tag of item.tags) {
                score = Math.max(score, similarityScore(query, tag) * 0.8);
            }
        }
        
        return { ...item, score };
    });
    
    return results
        .filter(item => item.score > 30)
        .sort((a, b) => b.score - a.score);
}

// =============================================
// 🎨 CREATE AUTO-SUGGESTION DROPDOWN
// =============================================

function createSuggestionDropdown(inputElement) {
    const existingDropdown = document.getElementById('search-suggestions');
    if (existingDropdown) {
        existingDropdown.remove();
    }
    
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

async function updateSuggestions(inputElement, dropdown) {
    const query = inputElement.value.trim();
    
    if (query === '') {
        dropdown.style.display = 'none';
        return;
    }
    
    // Fetch data from index.html
    const searchDatabase = await fetchDataFromIndexHTML();
    const results = advancedSearch(query, searchDatabase);
    
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

const headerSearch = document.getElementById('hs');
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
    
    document.addEventListener('click', (e) => {
        if (!headerSearch.parentElement.contains(e.target)) {
            headerDropdown.style.display = 'none';
        }
    });
}

const heroSearch = document.getElementById('hsi');
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

        // Fetch data from index.html and search
        fetchDataFromIndexHTML().then(searchDatabase => {
            const results = advancedSearch(query, searchDatabase);

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
                                      onclick="document.getElementById('si').value='${item.name}';window.location.href='search.html?q=${encodeURIComponent(item.name)}'">
                                    ${item.name}
                                </span>
                            `).join('')}
                        </div>
                        <div style="margin-top:20px">
                            <h4 style="color:#888;font-size:0.9rem;margin-bottom:12px">Popular searches:</h4>
                            <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
                                <span style="padding:6px 12px;background:#0f01;border:1px solid #0f03;border-radius:20px;font-size:0.8rem;color:#0f0;cursor:pointer" onclick="window.location.href='search.html?q=Block%20Fusion'">Block Fusion</span>
                                <span style="padding:6px 12px;background:#0f01;border:1px solid #0f03;border-radius:20px;font-size:0.8rem;color:#0f0;cursor:pointer" onclick="window.location.href='search.html?q=Racing'">Racing</span>
                                <span style="padding:6px 12px;background:#0f01;border:1px solid #0f03;border-radius:20px;font-size:0.8rem;color:#0f0;cursor:pointer" onclick="window.location.href='search.html?q=Puzzle'">Puzzle</span>
                            </div>
                        </div>
                    </div>
                `;
            }
        });
    } else {
        queryDisplay.textContent = "";
        resultCount.textContent = "0";
        resultsContainer.innerHTML = `
            <div style="text-align:center;padding:60px 20px;color:#666">
                <h2 style="font-size:3rem;margin-bottom:10px">🔎</h2>
                <h3 style="margin-bottom:8px;color:#aaa">Start typing to see suggestions</h3>
                <p style="margin-bottom:20px">Popular searches:</p>
                <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
                    <span style="padding:8px 16px;background:#1a1a1a;border-radius:20px;font-size:0.85rem;cursor:pointer;border:1px solid #333" onclick="window.location.href='search.html?q=Block%20Fusion'">Block Fusion</span>
                    <span style="padding:8px 16px;background:#1a1a1a;border-radius:20px;font-size:0.85rem;cursor:pointer;border:1px solid #333" onclick="window.location.href='search.html?q=Blitz%20Storm'">Blitz Storm</span>
                    <span style="padding:8px 16px;background:#1a1a1a;border-radius:20px;font-size:0.85rem;cursor:pointer;border:1px solid #333" onclick="window.location.href='search.html?q=Ludo'">Ludo</span>
                    <span style="padding:8px 16px;background:#1a1a1a;border-radius:20px;font-size:0.85rem;cursor:pointer;border:1px solid #333" onclick="window.location.href='search.html?q=Racing'">Racing</span>
                </div>
            </div>
        `;
    }
}