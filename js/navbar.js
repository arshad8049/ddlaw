/* ============================================================
   DD LAW SOCIETY — NAVBAR.JS
   Sticky navbar scroll-shrink, mobile menu open/close,
   hamburger ↔ X animation, dropdown keyboard support,
   and outside-click dismissal.
   Depends on: navbar.css, animations.css
   ============================================================ */

'use strict';

(function () {

  /* ── ELEMENT REFS ──────────────────────────────────────── */

  const navbar       = document.getElementById('navbar');
  const hamburger    = document.getElementById('navbar-hamburger');
  const mobileMenu   = document.getElementById('navbar-mobile-menu');
  const mobileLinks  = document.querySelectorAll('.navbar__mobile-link');
  const dropdownItems = document.querySelectorAll('.navbar__nav-item--dropdown');

  if (!navbar) return;

  /* ── SCROLL SHRINK ─────────────────────────────────────── */

  let lastScrollY  = 0;
  let ticking      = false;
  const SHRINK_THRESHOLD = 60; // px before navbar compresses

  function onScroll() {
    lastScrollY = window.scrollY;
    if (!ticking) {
      requestAnimationFrame(updateNavbar);
      ticking = true;
    }
  }

  function updateNavbar() {
    const scrolled = lastScrollY > SHRINK_THRESHOLD;

    navbar.classList.toggle('navbar--scrolled', scrolled);

    // Hide navbar on scroll down, reveal on scroll up (optional UX)
    // Uncomment to enable hide-on-scroll behaviour:
    // const direction = lastScrollY > prevScrollY ? 'down' : 'up';
    // navbar.classList.toggle('navbar--hidden', direction === 'down' && lastScrollY > 200);

    ticking = false;
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  // Run once on load in case page is already scrolled
  onScroll();

  /* ── MOBILE MENU TOGGLE ────────────────────────────────── */

  let menuOpen = false;

  function openMenu() {
    menuOpen = true;
    hamburger.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.add('is-open');
    document.body.style.overflow = 'hidden'; // prevent background scroll
    mobileMenu.setAttribute('aria-hidden', 'false');

    // Stagger mobile link entrance
    const links = mobileMenu.querySelectorAll('.navbar__mobile-link');
    links.forEach((link, i) => {
      link.style.transitionDelay = `${i * 55}ms`;
    });
  }

  function closeMenu() {
    menuOpen = false;
    hamburger.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('is-open');
    document.body.style.overflow = '';
    mobileMenu.setAttribute('aria-hidden', 'true');

    // Reset delays
    const links = mobileMenu.querySelectorAll('.navbar__mobile-link');
    links.forEach(link => { link.style.transitionDelay = ''; });
  }

  function toggleMenu() {
    menuOpen ? closeMenu() : openMenu();
  }

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', toggleMenu);

    // Close on mobile link click (navigation)
    mobileLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menuOpen) closeMenu();
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (
        menuOpen &&
        !mobileMenu.contains(e.target) &&
        !hamburger.contains(e.target)
      ) {
        closeMenu();
      }
    });
  }

  /* ── DROPDOWN — KEYBOARD SUPPORT ──────────────────────── */
  /*
   * Desktop dropdowns are handled by CSS :hover.
   * This adds keyboard (Enter / Space / Escape / Arrow) support
   * for accessibility.
   */

  dropdownItems.forEach(item => {
    const trigger  = item.querySelector('.navbar__nav-link');
    const dropdown = item.querySelector('.navbar__dropdown');
    if (!trigger || !dropdown) return;

    // Toggle open on Enter / Space
    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const isOpen = item.classList.contains('open');
        closeAllDropdowns();
        if (!isOpen) openDropdown(item, dropdown);
      }
      if (e.key === 'Escape') {
        closeAllDropdowns();
        trigger.focus();
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const firstLink = dropdown.querySelector('.navbar__dropdown-link');
        if (firstLink) firstLink.focus();
      }
    });

    // Arrow navigation within dropdown
    const ddLinks = dropdown.querySelectorAll('.navbar__dropdown-link');
    ddLinks.forEach((link, idx) => {
      link.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
          e.preventDefault();
          const next = ddLinks[idx + 1];
          if (next) next.focus();
        }
        if (e.key === 'ArrowUp') {
          e.preventDefault();
          if (idx === 0) {
            trigger.focus();
          } else {
            ddLinks[idx - 1].focus();
          }
        }
        if (e.key === 'Escape') {
          closeAllDropdowns();
          trigger.focus();
        }
        if (e.key === 'Tab' && idx === ddLinks.length - 1) {
          closeAllDropdowns();
        }
      });
    });

    // Close when focus leaves the item entirely
    item.addEventListener('focusout', (e) => {
      if (!item.contains(e.relatedTarget)) {
        closeDropdown(item, dropdown);
      }
    });
  });

  function openDropdown(item, dropdown) {
    item.classList.add('open');
    dropdown.setAttribute('aria-hidden', 'false');
  }

  function closeDropdown(item, dropdown) {
    item.classList.remove('open');
    dropdown.setAttribute('aria-hidden', 'true');
  }

  function closeAllDropdowns() {
    dropdownItems.forEach(item => {
      const dd = item.querySelector('.navbar__dropdown');
      if (dd) closeDropdown(item, dd);
    });
  }

  // Close all dropdowns on outside click
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar__nav-item--dropdown')) {
      closeAllDropdowns();
    }
  });

  /* ── TRANSPARENT HERO NAVBAR ───────────────────────────── */
  /*
   * Pages with a full-bleed dark hero can add
   * data-navbar="transparent" to their <body> tag.
   * The navbar starts transparent and becomes solid on scroll.
   */

  if (document.body.dataset.navbar === 'transparent') {
    navbar.classList.add('navbar--transparent');

    // Re-check: if already scrolled past threshold on load, go solid
    if (window.scrollY > SHRINK_THRESHOLD) {
      navbar.classList.remove('navbar--transparent');
    }

    window.addEventListener('scroll', () => {
      if (window.scrollY > SHRINK_THRESHOLD) {
        navbar.classList.remove('navbar--transparent');
      } else {
        // Only restore transparent if menu is closed
        if (!menuOpen) navbar.classList.add('navbar--transparent');
      }
    }, { passive: true });

    // Opening the mobile menu forces solid background
    if (hamburger) {
      hamburger.addEventListener('click', () => {
        if (menuOpen) {
          navbar.classList.remove('navbar--transparent');
        } else if (window.scrollY <= SHRINK_THRESHOLD) {
          navbar.classList.add('navbar--transparent');
        }
      });
    }
  }

  /* ── RESIZE HANDLER ────────────────────────────────────── */
  /*
   * If the viewport widens past the mobile breakpoint while
   * the menu is open, close it and restore scroll.
   */

  const MOBILE_BREAKPOINT = 1024;

  window.addEventListener('resize', () => {
    if (window.innerWidth > MOBILE_BREAKPOINT && menuOpen) {
      closeMenu();
    }
  }, { passive: true });

  /* ── SMOOTH SCROLL FOR ANCHOR LINKS ───────────────────── */
  /*
   * Any <a href="#section-id"> will smooth-scroll and account
   * for the fixed navbar height offset.
   */

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();

      const navbarHeight = navbar.offsetHeight;
      const targetTop    = target.getBoundingClientRect().top
                           + window.scrollY
                           - navbarHeight
                           - 16; // extra breathing room

      window.scrollTo({ top: targetTop, behavior: 'smooth' });

      // Close mobile menu if open
      if (menuOpen) closeMenu();
    });
  });

})();