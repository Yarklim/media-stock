import { ripple } from './ripple.js';
import { addEventOnElements } from './event.js';

// =============== Search view toggle in small devices ================
const searchTogglers = document.querySelectorAll('[data-search-toggler]');
const searchView = document.querySelector('[data-search-view]');

addEventOnElements(searchTogglers, 'click', () =>
  searchView.classList.toggle('show')
);

// =============== Search clean =============== 1:20
