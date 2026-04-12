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
    gtag('config', 'GA_MEASUREMENT_ID', {
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

// Form pseudo-submit
function submitForm() {
  const nome = document.getElementById('f-nome').value.trim();
  const email = document.getElementById('f-email').value.trim();
  const msg = document.getElementById('f-msg').value.trim();
  if (!nome || !email || !msg) { alert('Per favore compila tutti i campi obbligatori.'); return; }
  document.getElementById('formWrap').style.display = 'none';
  document.getElementById('formSuccess').style.display = 'block';
}

// Nav shrink on scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    nav.style.padding = window.innerWidth > 640 ? '.9rem 4rem' : '.9rem 1.5rem';
  } else {
    nav.style.padding = window.innerWidth > 640 ? '1.4rem 4rem' : '1rem 1.5rem';
  }
}, { passive: true });
