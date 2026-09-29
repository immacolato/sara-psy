// Reveal is progressive enhancement: content remains visible without JS or observers.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const reveals = document.querySelectorAll('.reveal');
if (typeof IntersectionObserver === 'function' && !reducedMotion.matches) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => {
    // Do not hide anything already visible or reachable by keyboard.
    if (el.getBoundingClientRect().top > window.innerHeight && !el.querySelector('a, button, input')) {
      observer.observe(el);
      el.classList.add('reveal-ready');
    }
  });
  reducedMotion.addEventListener('change', event => {
    if (event.matches) reveals.forEach(el => el.classList.add('visible'));
  });
}

// Keep anchor and keyboard focus offsets aligned with the actual fixed header.
const nav = document.querySelector('nav');
function updateHeaderOffset() {
  if (nav) document.documentElement.style.setProperty('--header-offset', `${nav.getBoundingClientRect().height + 16}px`);
}
if (nav) {
  updateHeaderOffset();
  if (typeof ResizeObserver === 'function') new ResizeObserver(updateHeaderOffset).observe(nav);
  else window.addEventListener('resize', updateHeaderOffset, { passive: true });
}

const scrollTopBtn = document.getElementById('scroll-top');
function updateScroll() {
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 60);
  if (scrollTopBtn) {
    const visible = window.scrollY > 400;
    scrollTopBtn.hidden = !visible;
    scrollTopBtn.disabled = !visible;
    scrollTopBtn.classList.toggle('visible', visible);
  }
}
window.addEventListener('scroll', updateScroll, { passive: true });
updateScroll();
if (scrollTopBtn) scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  const main = document.getElementById('main');
  if (main) main.focus({ preventScroll: true });
});

const sections = document.querySelectorAll('section[id]');
const links = document.querySelectorAll('.nav-links a, .mobile-nav-item');
function setActive(id) {
  links.forEach(link => {
    const active = link.getAttribute('href') === '#' + id;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}
if (typeof IntersectionObserver === 'function') {
  const navObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
  }, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });
  sections.forEach(section => navObserver.observe(section));
}
