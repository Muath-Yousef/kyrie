// Shared navigation builder
const PAGES = [
  { file: 'index.html',       label: 'Executive Summary',           num: '01' },
  { file: 'market.html',      label: 'Market Positioning',          num: '02' },
  { file: 'services.html',    label: 'Service Portfolio & Pricing', num: '03' },
  { file: 'packages.html',    label: 'Packages & Sales Engine',     num: '04' },
  { file: 'tech.html',        label: 'Technical Architecture',      num: '05' },
  { file: 'unit-economics.html', label: 'Unit Economics & CAC',     num: '06' },
  { file: 'financials.html',  label: 'Quarterly Financials (5Y)',   num: '07' },
  { file: 'hiring.html',      label: 'Hiring & Scaling Plan',       num: '08' },
  { file: 'profitability.html',label: 'Profitability Analysis',     num: '09' },
  { file: 'risks.html',       label: 'Risk Analysis',               num: '10' },
  { file: 'strategy.html',    label: 'Strategic Recommendations',   num: '11' },
];

function buildSidebar(currentFile) {
  let html = `
  <div class="nav-logo">
    <div class="shield">◈ CyberShield MSSP</div>
    <div class="sub">Decision-Grade Blueprint · 2025–2026</div>
  </div>
  <div class="nav-section-label">Pages</div>`;
  PAGES.forEach((p) => {
    const cls = p.file === currentFile ? 'nav-item page-link current' : 'nav-item page-link';
    html += `<a class="${cls}" href="${p.file}"><span class="num">${p.num}</span>${p.label}</a>`;
  });
  html += `
  <div class="nav-footer">
    Confidential · Decision-Grade Blueprint<br>
    All figures in JOD · Conservative model<br>
    &copy; 2025–2026 CyberShield Consulting<br><br>
    <span style="color:var(--accent)">JOD 1 ≈ AED 3.68 ≈ USD 1.41</span>
  </div>`;
  document.getElementById('sidebar').innerHTML = html;
}

// Active section observer
function initSectionObserver() {
  const sections = document.querySelectorAll('section[id], div[id]');
  const navItems = document.querySelectorAll('.nav-item:not(.page-link)');
  if (navItems.length === 0) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        navItems.forEach(n => n.classList.remove('active'));
        const a = document.querySelector(`.nav-item[href="#${e.target.id}"]`);
        if (a) a.classList.add('active');
      }
    });
  }, { threshold: 0.15 });
  sections.forEach(s => obs.observe(s));
}

// Chart.js defaults
function initChartDefaults() {
  if (typeof Chart === 'undefined') return;
  Chart.defaults.color = '#9eb1c6';
  Chart.defaults.borderColor = '#29384c';
  Chart.defaults.font.family = "'Source Sans 3', sans-serif";
  Chart.defaults.font.size = 12;
}

document.addEventListener('DOMContentLoaded', () => {
  initChartDefaults();
  initSectionObserver();
});
