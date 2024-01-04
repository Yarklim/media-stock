import { ripple } from './ripple.js';

// =========== Header on-scroll state =============
const header = document.querySelector('[data-header]');

window.addEventListener('scroll', () => {
  header.classList[window.scrollY > 50 ? 'add' : 'remove']('active');
});

// ============== Add ripple effect ==============
const rippleElems = document.querySelectorAll('[data-ripple]');
rippleElems.forEach(el => ripple(el));

// ============ Filter functionality =============
window.filterObj = {};
