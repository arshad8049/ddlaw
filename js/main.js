/* ============================================================
   DD LAW SOCIETY — MAIN.JS
   Central configuration + global initialisation.

   ✏️  CONTENT EDITORS: All real-world data lives in the
       SITE_DATA object below. Fill in names, addresses,
       bios, photos, blog posts etc. here and every page
       updates automatically.
   ============================================================ */

'use strict';

/* ══════════════════════════════════════════════════════════
   SITE DATA — edit this object to update all content
   ══════════════════════════════════════════════════════════ */

const SITE_DATA = {

  /* ── FIRM INFO ─────────────────────────────────────────── */
  firm: {
    name:        'DD Law Society',
    tagline:     'Advocates & Solicitors',
    established: '2005',                      // ✏️ founding year
    description: 'A trusted mid-size regional law firm serving clients across Andhra Pradesh and Telangana with integrity, expertise, and dedication.',
    email:       'contact@ddlawsociety.in',   // ✏️ real email
    phone:       '+91 00000 00000',           // ✏️ main number
    whatsapp:    '+910000000000',             // ✏️ digits only for wa.me link
  },

  /* ── OFFICES ───────────────────────────────────────────── */
  offices: [
    {
      id:       'vijayawada',
      city:     'Vijayawada',
      type:     'Head Office',
      address:  'Placeholder Address, MG Road,\nVijayawada, Andhra Pradesh — 520 001', // ✏️
      phone:    '+91 00000 00001',   // ✏️
      email:    'vijayawada@ddlawsociety.in', // ✏️
      mapUrl:   '#',                 // ✏️ Google Maps embed URL
      directionsUrl: '#',           // ✏️ Google Maps directions link
      hours:    'Mon – Sat: 9:00 AM – 6:00 PM',
    },
    {
      id:       'hyderabad',
      city:     'Hyderabad',
      type:     'Branch Office',
      address:  'Placeholder Address, Banjara Hills,\nHyderabad, Telangana — 500 034', // ✏️
      phone:    '+91 00000 00002',   // ✏️
      email:    'hyderabad@ddlawsociety.in',  // ✏️
      mapUrl:   '#',                 // ✏️ Google Maps embed URL
      directionsUrl: '#',           // ✏️ Google Maps directions link
      hours:    'Mon – Sat: 9:00 AM – 6:00 PM',
    },
  ],

  /* ── TEAM ──────────────────────────────────────────────── */
  /*
   * photo: path relative to assets/images/team/
   *        e.g. 'advocate-name.jpg'
   *        Leave as null to show the initials placeholder.
   */
  team: [
    {
      id:        'attorney-1',
      name:      'Placeholder Name',          // ✏️
      role:      'Senior Partner',            // ✏️
      specialty: 'Corporate & Business Law',  // ✏️
      bio:       'Placeholder bio. Experienced advocate with over two decades of practice across corporate law, mergers, and commercial litigation. Called to the Bar in [year].', // ✏️
      photo:     null,                        // ✏️ e.g. 'assets/images/team/name.jpg'
      linkedin:  '#',                         // ✏️
      email:     '#',                         // ✏️
    },
    {
      id:        'attorney-2',
      name:      'Placeholder Name',
      role:      'Senior Partner',
      specialty: 'Criminal Defense',
      bio:       'Placeholder bio. Seasoned criminal defense attorney with extensive High Court experience, known for meticulous case preparation and courtroom advocacy.',
      photo:     null,
      linkedin:  '#',
      email:     '#',
    },
    {
      id:        'attorney-3',
      name:      'Placeholder Name',
      role:      'Associate Partner',
      specialty: 'Property & Real Estate',
      bio:       'Placeholder bio. Specialist in property transactions, title due diligence, and real estate litigation across Andhra Pradesh and Telangana.',
      photo:     null,
      linkedin:  '#',
      email:     '#',
    },
    {
      id:        'attorney-4',
      name:      'Placeholder Name',
      role:      'Associate',
      specialty: 'Employment Law',
      bio:       'Placeholder bio. Advises clients on employment contracts, workplace disputes, and labour tribunal proceedings with a practical, solutions-driven approach.',
      photo:     null,
      linkedin:  '#',
      email:     '#',
    },
    {
      id:        'attorney-5',
      name:      'Placeholder Name',
      role:      'Associate',
      specialty: 'Intellectual Property',
      bio:       'Placeholder bio. Handles trademark registrations, copyright disputes, and IP enforcement matters for startups and established businesses alike.',
      photo:     null,
      linkedin:  '#',
      email:     '#',
    },
  ],

  /* ── PRACTICE AREAS ────────────────────────────────────── */
  practiceAreas: [
    {
      id:    'corporate',
      title: 'Corporate & Business Law',
      icon:  'briefcase',
      summary: 'Comprehensive legal support for businesses at every stage — from incorporation and governance to mergers, acquisitions, and commercial contracts.',
      tags:  ['Mergers & Acquisitions', 'Contracts', 'Compliance', 'Governance'],
      href:  'practice-areas.html#corporate',
    },
    {
      id:    'criminal',
      title: 'Criminal Defense',
      icon:  'shield',
      summary: 'Skilled representation in criminal matters across Sessions Courts, High Courts, and the Supreme Court, protecting your rights at every step.',
      tags:  ['Bail Applications', 'Trial Defense', 'High Court', 'Appeals'],
      href:  'practice-areas.html#criminal',
    },
    {
      id:    'property',
      title: 'Property & Real Estate',
      icon:  'home',
      summary: 'End-to-end legal services for property transactions, title verification, registration, and real estate disputes across AP and Telangana.',
      tags:  ['Title Due Diligence', 'Registration', 'Disputes', 'RERA'],
      href:  'practice-areas.html#property',
    },
    {
      id:    'civil',
      title: 'Civil Litigation',
      icon:  'scales',
      summary: 'Robust representation in civil disputes — contract enforcement, recovery suits, injunctions, and appellate proceedings before all forums.',
      tags:  ['Contract Disputes', 'Recovery Suits', 'Injunctions', 'Appeals'],
      href:  'practice-areas.html#civil',
    },
    {
      id:    'ip',
      title: 'Intellectual Property',
      icon:  'lightbulb',
      summary: 'Protecting your ideas and innovations through trademark registration, copyright enforcement, and IP litigation strategies.',
      tags:  ['Trademarks', 'Copyrights', 'IP Disputes', 'Licensing'],
      href:  'practice-areas.html#ip',
    },
    {
      id:    'employment',
      title: 'Employment Law',
      icon:  'users',
      summary: 'Advising employers and employees on labour law compliance, service matters, termination disputes, and tribunal representation.',
      tags:  ['Labour Disputes', 'Service Matters', 'Contracts', 'Tribunals'],
      href:  'practice-areas.html#employment',
    },
  ],

  /* ── STATS ─────────────────────────────────────────────── */
  stats: [
    { number: '18',  suffix: '+', label: 'Years of Practice'   },
    { number: '500', suffix: '+', label: 'Cases Resolved'      },
    { number: '5',   suffix: '',  label: 'Expert Attorneys'    },
    { number: '2',   suffix: '',  label: 'Office Locations'    },
  ],

  /* ── BLOG POSTS ────────────────────────────────────────── */
  /*
   * thumb: path relative to project root
   *        Leave as null for the placeholder tile.
   */
  blog: [
    {
      id:        'post-1',
      title:     'Understanding RERA: What Homebuyers in AP Need to Know',  // ✏️
      excerpt:   'A comprehensive guide to the Real Estate (Regulation and Development) Act and how it protects property buyers in Andhra Pradesh.',
      category:  'Property Law',
      date:      '2025-03-15',       // ✏️ ISO date
      readTime:  '5 min read',
      thumb:     null,               // ✏️ e.g. 'assets/images/blog/rera-guide.jpg'
      href:      'blog.html#post-1',
      author:    'DD Law Society',
    },
    {
      id:        'post-2',
      title:     'Key Changes to the Companies Act: Impact on MSMEs',
      excerpt:   'Recent amendments to the Companies Act 2013 bring significant compliance changes for small and medium-sized enterprises.',
      category:  'Corporate Law',
      date:      '2025-02-20',
      readTime:  '7 min read',
      thumb:     null,
      href:      'blog.html#post-2',
      author:    'DD Law Society',
    },
    {
      id:        'post-3',
      title:     'Bail Rights in India: A Practical Guide for Families',
      excerpt:   'An accessible explainer on bail provisions, anticipatory bail, and the rights of the accused under the Code of Criminal Procedure.',
      category:  'Criminal Law',
      date:      '2025-01-10',
      readTime:  '6 min read',
      thumb:     null,
      href:      'blog.html#post-3',
      author:    'DD Law Society',
    },
  ],

  /* ── TESTIMONIALS ──────────────────────────────────────── */
  testimonials: [
    {
      text:   'DD Law Society handled our property dispute with remarkable professionalism. They kept us informed at every stage and secured an outcome beyond our expectations.',
      author: 'Placeholder Client',  // ✏️
      detail: 'Property Dispute, Vijayawada',
      stars:  5,
    },
    {
      text:   'Their corporate law team helped us navigate a complex merger. Thorough, responsive, and genuinely invested in our success.',
      author: 'Placeholder Client',
      detail: 'Corporate Law, Hyderabad',
      stars:  5,
    },
    {
      text:   'I was facing a serious criminal matter and felt completely supported throughout. The team\'s courtroom presence and preparation made all the difference.',
      author: 'Placeholder Client',
      detail: 'Criminal Defense, Vijayawada',
      stars:  5,
    },
  ],

  /* ── SOCIAL LINKS ──────────────────────────────────────── */
  social: {
    linkedin:  '#',   // ✏️
    twitter:   '#',   // ✏️
    facebook:  '#',   // ✏️
    instagram: '#',   // ✏️
  },

  /* ── LEGAL / META ──────────────────────────────────────── */
  meta: {
    siteUrl:     'https://ddlawsociety.in',    // ✏️
    twitterHandle: '@ddlawsociety',            // ✏️
    barCouncil:  'Bar Council of Andhra Pradesh', // ✏️
    enrollment:  'Enrollment No. AP/XXXX/XXXX',  // ✏️
  },
};


/* ══════════════════════════════════════════════════════════
   UTILITY HELPERS
   ══════════════════════════════════════════════════════════ */

/**
 * Format a date string to human-readable form
 * e.g. '2025-03-15' → 'March 15, 2025'
 */
function formatDate(isoDate) {
  const d = new Date(isoDate + 'T00:00:00');
  return d.toLocaleDateString('en-IN', {
    year:  'numeric',
    month: 'long',
    day:   'numeric',
  });
}

/**
 * Get initials from a full name
 * e.g. 'Ravi Kumar Sharma' → 'RK'
 */
function getInitials(name) {
  return name
    .split(' ')
    .slice(0, 2)
    .map(n => n[0])
    .join('')
    .toUpperCase();
}

/**
 * Generate star SVGs for testimonials
 */
function renderStars(count) {
  return Array.from({ length: count }, () =>
    `<svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.13L8 10.5l-3.71 1.95L5 8.42 2 5.5l4.15-.75L8 1z"/>
    </svg>`
  ).join('');
}

/**
 * Get an inline SVG icon by name
 * Extend this map as needed
 */
function getIcon(name) {
  const icons = {
    briefcase: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="12"/></svg>`,
    shield:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
    home:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    scales:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="22"/><path d="M2 7l10-5 10 5"/><path d="M3 7l3 6-3 0z"/><path d="M21 7l-3 6 3 0z"/></svg>`,
    lightbulb: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>`,
    users:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    phone:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 11a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 2.98 0h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 14.92z"/></svg>`,
    email:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    location:  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    clock:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    arrow:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
    check:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    chevronUp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>`,
    chat:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,
    close:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
    send:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
    linkedin:  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>`,
    twitter:   `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>`,
    facebook:  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
    scale2:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M2 7l10-5 10 5M4.5 9.5l-2.5 5h5zM19.5 9.5l-2.5 5h5z"/></svg>`,
  };
  return icons[name] || icons['briefcase'];
}


/* ══════════════════════════════════════════════════════════
   RENDERERS — build HTML from SITE_DATA
   Called by each page's inline <script> with a target ID
   ══════════════════════════════════════════════════════════ */

/**
 * Render team cards into #team-grid
 * @param {string} containerId  - target element ID
 * @param {number} [limit]      - max cards to render (undefined = all)
 */
function renderTeam(containerId, limit) {
  const el = document.getElementById(containerId);
  if (!el) return;

  const members = limit
    ? SITE_DATA.team.slice(0, limit)
    : SITE_DATA.team;

  el.innerHTML = members.map((m, i) => {
    const initials = getInitials(m.name);
    const photoEl  = m.photo
      ? `<img src="${m.photo}" alt="${m.name}" loading="lazy">`
      : `<div class="team-card__photo-placeholder">
           <span>${initials}</span>
         </div>`;

    return `
      <article class="team-card reveal stagger-${Math.min(i + 1, 6)}"
               data-id="${m.id}">
        <div class="team-card__photo hover-zoom">
          ${photoEl}
          <div class="team-card__specialty-badge">${m.specialty}</div>
          <div class="team-card__overlay">
            <ul class="team-card__socials">
              <li>
                <a href="${m.linkedin}" class="team-card__social-link"
                   aria-label="LinkedIn profile of ${m.name}" target="_blank" rel="noopener">
                  ${getIcon('linkedin')}
                </a>
              </li>
              <li>
                <a href="mailto:${m.email}" class="team-card__social-link"
                   aria-label="Email ${m.name}">
                  ${getIcon('email')}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="team-card__info">
          <p class="team-card__role">${m.role}</p>
          <h3 class="team-card__name">${m.name}</h3>
          <p class="team-card__bio">${m.bio}</p>
        </div>
      </article>`;
  }).join('');
}

/**
 * Render blog cards into a container
 * @param {string} containerId
 * @param {number} [limit]
 * @param {boolean} [featuredFirst] - make first card .blog-card--featured
 */
function renderBlog(containerId, limit, featuredFirst = false) {
  const el = document.getElementById(containerId);
  if (!el) return;

  const posts = limit
    ? SITE_DATA.blog.slice(0, limit)
    : SITE_DATA.blog;

  el.innerHTML = posts.map((p, i) => {
    const isFeatured = featuredFirst && i === 0;
    const thumbEl = p.thumb
      ? `<img src="${p.thumb}" alt="${p.title}" loading="lazy">`
      : `<div class="blog-card__thumb-placeholder">
           ${getIcon('scale2')}
         </div>`;

    return `
      <a href="${p.href}"
         class="blog-card ${isFeatured ? 'blog-card--featured' : ''} reveal stagger-${Math.min(i + 1, 6)}">
        <div class="blog-card__thumb">
          ${thumbEl}
          <span class="blog-card__category">${p.category}</span>
        </div>
        <div class="blog-card__body">
          <div class="blog-card__meta">
            <span>${formatDate(p.date)}</span>
            <span class="blog-card__meta-dot"></span>
            <span>${p.readTime}</span>
          </div>
          <h3 class="blog-card__title">${p.title}</h3>
          <p class="blog-card__excerpt">${p.excerpt}</p>
          <span class="blog-card__read-more">
            Read More ${getIcon('arrow')}
          </span>
        </div>
      </a>`;
  }).join('');
}

/**
 * Render practice area cards into a container
 * @param {string} containerId
 * @param {number} [limit]
 */
function renderPracticeAreas(containerId, limit) {
  const el = document.getElementById(containerId);
  if (!el) return;

  const areas = limit
    ? SITE_DATA.practiceAreas.slice(0, limit)
    : SITE_DATA.practiceAreas;

  el.innerHTML = areas.map((a, i) => `
    <a href="${a.href}"
       class="practice-card reveal stagger-${Math.min(i + 1, 6)}">
      <div class="practice-card__icon">${getIcon(a.icon)}</div>
      <h3 class="practice-card__title">${a.title}</h3>
      <p class="practice-card__body">${a.summary}</p>
      <div class="practice-card__tags">
        ${a.tags.map(t => `<span class="practice-card__tag">${t}</span>`).join('')}
      </div>
      <span class="practice-card__link">
        Learn More ${getIcon('arrow')}
      </span>
    </a>`
  ).join('');
}

/**
 * Render stat counters into a container
 * @param {string} containerId
 */
function renderStats(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;

  el.innerHTML = SITE_DATA.stats.map((s, i) => `
    <div class="stat-card stat-card--dark reveal stagger-${Math.min(i + 1, 6)}">
      <div class="stat-card__number"
           data-target="${s.number}"
           data-suffix="${s.suffix}">
        0${s.suffix}
      </div>
      <div class="stat-card__label">${s.label}</div>
    </div>`
  ).join('');
}

/**
 * Render office panels into a container
 * @param {string} containerId
 */
function renderOffices(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;

  el.innerHTML = SITE_DATA.offices.map((o, i) => `
    <div class="office-panel reveal stagger-${Math.min(i + 1, 4)}">
      <div class="office-panel__map">
        ${o.mapUrl && o.mapUrl !== '#'
          ? `<iframe
               src="${o.mapUrl}"
               width="100%"
               height="100%"
               style="border:0;display:block;width:100%;height:100%;min-height:280px;"
               allowfullscreen=""
               loading="lazy"
               referrerpolicy="no-referrer-when-downgrade"
               title="Map of DD Law Society ${o.city} office">
             </iframe>`
          : `<div class="office-panel__map-placeholder">
               ${getIcon('location')}
               <span>Map Placeholder</span>
             </div>`
        }
      </div>
      <div class="office-panel__info">
        <div>
          <h3 class="office-panel__city">${o.city}</h3>
          <p class="office-panel__type">${o.type}</p>
        </div>
        <div class="office-panel__details">
          <div class="office-panel__detail">
            <span class="office-panel__detail-icon">${getIcon('location')}</span>
            <span class="office-panel__detail-text">
              ${o.address.replace(/\n/g, '<br>')}
            </span>
          </div>
          <div class="office-panel__detail">
            <span class="office-panel__detail-icon">${getIcon('phone')}</span>
            <span class="office-panel__detail-text">
              <a href="tel:${o.phone.replace(/\s/g, '')}">${o.phone}</a>
            </span>
          </div>
          <div class="office-panel__detail">
            <span class="office-panel__detail-icon">${getIcon('email')}</span>
            <span class="office-panel__detail-text">
              <a href="mailto:${o.email}">${o.email}</a>
            </span>
          </div>
          <div class="office-panel__detail">
            <span class="office-panel__detail-icon">${getIcon('clock')}</span>
            <span class="office-panel__detail-text">${o.hours}</span>
          </div>
        </div>
        <a href="${o.directionsUrl}" target="_blank" rel="noopener"
           class="office-panel__directions">
          Get Directions ${getIcon('arrow')}
        </a>
      </div>
    </div>`
  ).join('');
}

/**
 * Render testimonial cards into a container
 * @param {string} containerId
 */
function renderTestimonials(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;

  el.innerHTML = SITE_DATA.testimonials.map((t, i) => `
    <div class="testimonial-card reveal stagger-${Math.min(i + 1, 4)}">
      <div class="testimonial-card__quote-mark">"</div>
      <div class="testimonial-card__stars">${renderStars(t.stars)}</div>
      <p class="testimonial-card__text">${t.text}</p>
      <div class="testimonial-card__author">
        <div class="testimonial-card__author-info">
          <span class="testimonial-card__author-name">${t.author}</span>
          <span class="testimonial-card__author-detail">${t.detail}</span>
        </div>
      </div>
    </div>`
  ).join('');
}


/* ══════════════════════════════════════════════════════════
   COUNTER ANIMATION
   Counts up numbers when stat cards enter the viewport
   ══════════════════════════════════════════════════════════ */

function initCounters() {
  const counters = document.querySelectorAll('[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el      = entry.target;
      const target    = parseInt(el.dataset.target, 10);
      const suffix    = el.dataset.suffix || '';
      const duration  = 1600; // ms
      const increment = Math.ceil(target / (duration / 16));
      let current     = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        el.textContent = current + suffix;
      }, 16);

      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}


/* ══════════════════════════════════════════════════════════
   ACTIVE NAV LINK
   Highlights the current page link in both desktop + mobile nav
   ══════════════════════════════════════════════════════════ */

function setActiveNavLink() {
  const raw  = window.location.pathname.split('/').pop();
  const path = raw === '' ? 'index.html' : raw;
  const navLinks = document.querySelectorAll(
    '.navbar__nav-link, .navbar__mobile-link'
  );

  navLinks.forEach(link => {
    const href = link.getAttribute('href') || '';
    if (href === path) {
      link.classList.add('active');
    }
  });
}


/* ══════════════════════════════════════════════════════════
   COOKIE BANNER
   ══════════════════════════════════════════════════════════ */

function initCookieBanner() {
  const banner = document.getElementById('cookie-banner');
  if (!banner) return;

  if (localStorage.getItem('dd_cookie_consent')) return;

  setTimeout(() => banner.classList.add('is-visible'), 1500);

  const acceptBtn  = banner.querySelector('#cookie-accept');
  const declineBtn = banner.querySelector('#cookie-decline');

  function dismiss() {
    banner.classList.remove('is-visible');
  }

  if (acceptBtn) {
    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('dd_cookie_consent', 'accepted');
      dismiss();
    });
  }

  if (declineBtn) {
    declineBtn.addEventListener('click', () => {
      localStorage.setItem('dd_cookie_consent', 'declined');
      dismiss();
    });
  }
}


/* ══════════════════════════════════════════════════════════
   TOAST SYSTEM
   Usage: window.showToast({ type: 'success', title: '...', text: '...' })
   ══════════════════════════════════════════════════════════ */

function initToasts() {
  if (!document.getElementById('toast-container')) {
    const container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
}

window.showToast = function ({ type = 'info', title, text, duration = 4000 }) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const iconMap = {
    success: getIcon('check'),
    error:   getIcon('close'),
    info:    getIcon('chat'),
  };

  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.innerHTML = `
    <span class="toast__icon">${iconMap[type] || iconMap.info}</span>
    <div class="toast__content">
      ${title ? `<p class="toast__title">${title}</p>` : ''}
      ${text  ? `<p class="toast__text">${text}</p>`   : ''}
    </div>
    <button class="toast__close" aria-label="Dismiss notification">
      ${getIcon('close')}
    </button>`;

  container.appendChild(toast);

  toast.querySelector('.toast__close').addEventListener('click', () => {
    removeToast(toast);
  });

  if (duration > 0) {
    setTimeout(() => removeToast(toast), duration);
  }
};

function removeToast(toast) {
  toast.classList.add('is-leaving');
  const fallback = setTimeout(() => toast.remove(), 500);
  toast.addEventListener('animationend', () => {
    clearTimeout(fallback);
    toast.remove();
  }, { once: true });
}


/* ══════════════════════════════════════════════════════════
   BACK TO TOP
   ══════════════════════════════════════════════════════════ */

function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('is-visible', window.scrollY > 400);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}


/* ══════════════════════════════════════════════════════════
   CONTACT FORM — basic validation + submission placeholder
   ══════════════════════════════════════════════════════════ */

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = form.querySelector('.form__submit');
    const successEl = form.querySelector('.form__success');

    // Basic validation
    let hasError = false;
    form.querySelectorAll('[required]').forEach(field => {
      const errEl = field.parentElement.querySelector('.form__error-msg');
      if (!field.value.trim()) {
        field.classList.add('is-error');
        if (errEl) errEl.classList.add('is-visible');
        hasError = true;
      } else {
        field.classList.remove('is-error');
        field.classList.add('is-valid');
        if (errEl) errEl.classList.remove('is-visible');
      }
    });

    if (hasError) return;

    // Loading state
    submitBtn.classList.add('is-loading');
    submitBtn.textContent = 'Sending…';

    /*
     * ✏️  WIRE UP FORM SUBMISSION HERE
     * Replace the setTimeout below with your actual
     * fetch() / EmailJS / AWS SES / Formspree call.
     *
     * Example:
     * const data = new FormData(form);
     * await fetch('/api/contact', { method: 'POST', body: data });
     */
    await new Promise(resolve => setTimeout(resolve, 1400));

    submitBtn.classList.remove('is-loading');
    submitBtn.classList.add('is-success');

    if (successEl) {
      form.style.display = 'none';
      successEl.classList.add('is-visible');
    }

    window.showToast({
      type:  'success',
      title: 'Message sent!',
      text:  'We\'ll be in touch within one business day.',
    });
  });

  // Clear error on input
  form.querySelectorAll('.form__input, .form__textarea, .form__select')
    .forEach(field => {
      field.addEventListener('input', () => {
        field.classList.remove('is-error');
        const errEl = field.parentElement.querySelector('.form__error-msg');
        if (errEl) errEl.classList.remove('is-visible');
      });
    });
}


/* ══════════════════════════════════════════════════════════
   GLOBAL INIT
   ══════════════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {
  setActiveNavLink();
  initCookieBanner();
  initToasts();
  initBackToTop();
  initContactForm();
  initCounters();

  // Page enter animation
  document.body.classList.add('page-enter');
});

/* Export for module-aware environments (optional) */
if (typeof module !== 'undefined') {
  module.exports = { SITE_DATA, renderTeam, renderBlog,
    renderPracticeAreas, renderStats, renderOffices,
    renderTestimonials };
}