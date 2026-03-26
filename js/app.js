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