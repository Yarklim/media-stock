import { ripple } from './ripple.js';
import { addEventOnElements } from './event.js';
import { getSegment } from './segment.js';

// =============== Search view toggle in small devices ================
const searchTogglers = document.querySelectorAll('[data-search-toggler]');
const searchView = document.querySelector('[data-search-view]');

addEventOnElements(searchTogglers, 'click', () =>
  searchView.classList.toggle('show')
);

// =========================== Search clean ===========================
const searchField = document.querySelector('[data-search-field]');
const searchClearBtn = document.querySelector('[data-search-clear-btn]');

if (searchField.value === '') {
  searchClearBtn.classList.add('clear-btn-none');
}

searchField.addEventListener('input', () => {
  if (searchField.value === '') {
    searchClearBtn.classList.add('clear-btn-none');
  } else {
    searchClearBtn.classList.remove('clear-btn-none');
  }
});

searchClearBtn.addEventListener('click', () => {
  searchField.value = '';
  searchClearBtn.classList.add('clear-btn-none');
});

// =========================== Search type ===========================
const searchSegment = document.querySelector("[data-segment='search']");
const activeSegmentBtn = searchSegment.querySelector(
  '[data-segment-btn].selected'
);
window.searchType = activeSegmentBtn.dataset.segmentValue;

getSegment(searchSegment, segmentValue => (window.searchType = segmentValue));
