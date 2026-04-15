// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// ─── COOKIE CONSENT MANAGEMENT ─── 
const cookieBanner = document.getElementById('cookieBanner');
const cookieModal = document.getElementById('cookieModal');
const acceptAllBtn = document.getElementById('acceptAllBtn');
const rejectBtn = document.getElementById('rejectBtn');
const customizeBtn = document.getElementById('customizeBtn');
const manageConsent = document.getElementById('manageConsent');
const closeModal = document.getElementById('closeModal');
const savePreferences = document.getElementById('savePreferences');
const analyticsCheckbox = document.getElementById('analyticsCheckbox');
const performanceCheckbox = document.getElementById('performanceCheckbox');

// Check if user has already made a choice
function checkCookieConsent() {
  const consent = localStorage.getItem('cookieConsent');
  if (!consent) {
    cookieBanner.style.display = 'block';
  } else {
    cookieBanner.style.display = 'none';
    // Apply saved preferences
    const preferences = JSON.parse(consent);
    if (preferences.analytics) initializeAnalytics();
  }
}

// Save consent preferences
function saveConsent(preferences) {
  localStorage.setItem('cookieConsent', JSON.stringify(preferences));
  cookieBanner.style.display = 'none';
  cookieModal.classList.remove('show');
  
  // Update GA consent mode
  updateGAConsent(preferences);
  
  // Initialize analytics if accepted
  if (preferences.analytics) {
    initializeAnalytics();
  }
}

// Accept all cookies
acceptAllBtn.addEventListener('click', () => {
  saveConsent({
    necessary: true,
    analytics: true,
    performance: true,
    saved: new Date().toISOString()
  });
});

// Reject non-essential cookies
rejectBtn.addEventListener('click', () => {
  saveConsent({
    necessary: true,
    analytics: false,
    performance: false,
    saved: new Date().toISOString()
  });
});

// Open customization modal
customizeBtn.addEventListener('click', () => {
  const consent = localStorage.getItem('cookieConsent');
  if (consent) {
    const preferences = JSON.parse(consent);
    analyticsCheckbox.checked = preferences.analytics || false;
    performanceCheckbox.checked = preferences.performance || false;
  }
  cookieModal.classList.add('show');
});

// Manage consent link in footer
manageConsent.addEventListener('click', (e) => {
  e.preventDefault();
  const consent = localStorage.getItem('cookieConsent');
  if (consent) {
    const preferences = JSON.parse(consent);
    analyticsCheckbox.checked = preferences.analytics || false;
    performanceCheckbox.checked = preferences.performance || false;
  }
  cookieModal.classList.add('show');
});

// Close modal
closeModal.addEventListener('click', () => {
  cookieModal.classList.remove('show');
});

// Save custom preferences
savePreferences.addEventListener('click', () => {
  saveConsent({
    necessary: true,
    analytics: analyticsCheckbox.checked,
    performance: performanceCheckbox.checked,
    saved: new Date().toISOString()
  });
  cookieModal.classList.remove('show');
});

// Close modal when clicking outside
cookieModal.addEventListener('click', (e) => {
  if (e.target === cookieModal) {
    cookieModal.classList.remove('show');
  }
});

// Initialize Google Analytics based on consent
function initializeAnalytics() {
  // Configure Google Analytics with measurement ID
  // IMPORTANT: Replace 'GA_MEASUREMENT_ID' with your actual Google Analytics 4 Measurement ID
  // You can find it in Google Analytics > Admin > Property > Data Streams
  
  if (typeof gtag !== 'undefined') {
    gtag('config', 'G-8HLDF6GWQG', {
      'anonymize_ip': true,
      'allow_google_signals': true,
      'allow_ad_personalization_signals': false
    });
    console.log('Google Analytics initialized with consent');
  }
}

// Update GA consent mode based on user preferences
function updateGAConsent(preferences) {
  if (typeof gtag !== 'undefined') {
    gtag('consent', 'update', {
      'analytics_storage': preferences.analytics ? 'granted' : 'denied',
      'ad_storage': 'denied',
      'ad_user_data': 'denied',
      'ad_personalization': 'denied'
    });
  }
}

// Check consent on page load
document.addEventListener('DOMContentLoaded', checkCookieConsent);

// Form submit via Formspree
const form = document.getElementById('formWrap');
if (form) {
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Invio in corso…';

    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      form.style.display = 'none';
      document.getElementById('formSuccess').style.display = 'block';
    } else {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<svg viewBox="0 0 24 24"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg> Invia messaggio';
      alert('Si è verificato un errore. Prova a scrivermi direttamente a dott.saratrovato@gmail.com');
    }
  });
}

// Nav shrink on scroll + scroll-to-top
const nav = document.querySelector('nav');
const scrollTopBtn = document.getElementById('scroll-top');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
  scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });
scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Active nav link via IntersectionObserver
const sections = document.querySelectorAll('section[id]');
const desktopLinks = document.querySelectorAll('.nav-links a');
const mobileItems = document.querySelectorAll('.mobile-nav-item');

function setActive(id) {
  desktopLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
  mobileItems.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
}

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) setActive(entry.target.id);
  });
}, { rootMargin: '-30% 0px -60% 0px', threshold: 0 });

sections.forEach(s => navObserver.observe(s));
