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

// ========================== Search submit ==========================
const searchBtn = document.querySelector('[data-search-btn]');

searchBtn.addEventListener('click', () => {
  const searchValue = searchField.value.trim();
  searchField.value = '';
  searchClearBtn.classList.add('clear-btn-none');
  console.log(searchValue);

  if (searchValue) {
    updateSearchHistory(searchValue);
    window.filterObj.query = searchValue;
    updateUrl(window.filterObj, window.searchType);
  }
});

// ========================= Search history ===========================
let searchHistory = { items: [] };

if (window.localStorage.getItem('search_history')) {
  searchHistory = JSON.parse(window.localStorage.getItem('search_history'));
} else {
  window.localStorage.setItem('search_history', JSON.stringify(searchHistory));
}

const updateSearchHistory = searchValue => {
  if (searchHistory.items.includes(searchValue)) {
    searchHistory.items.splice(searchHistory.items.indexOf(searchValue), 1);
  }

  searchHistory.items.unshift(searchValue);

  window.localStorage.setItem('search_history', JSON.stringify(searchHistory));
};

// ================ Render search items in search list ===============
const searchList = document.querySelector('[data-search-list]');
const historyLen = searchHistory.items.length;

for (let i = 0; (i < historyLen) & (i <= 5); i++) {
  const listItem = document.createElement('button');
  listItem.classList.add('list-item');

  listItem.innerHTML = `
	<span class="material-symbols-outlined leading-icon" aria-hidden="true">history</span>
	<span class="body-large text">${searchHistory.items[i]}</span>
	<div class="state-layer"></div>
	`;

  ripple(listItem);

  listItem.addEventListener('click', function () {
    searchField.value = this.children[1].textContent;
    searchBtn.click();
  });

  searchList.appendChild(listItem);
}
