const HTML = document.documentElement;
let isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (localStorage.getItem('theme')) {
  HTML.dataset.theme = localStorage.getItem('theme');
} else {
  HTML.dataset.theme = isDark ? 'dark' : 'light';
}

const changeTheme = () => {
  isDark = localStorage.getItem('theme');
  localStorage.setItem('theme', isDark === 'light' ? 'dark' : 'light');
  HTML.dataset.theme = localStorage.getItem('theme');
};

window.addEventListener('load', () => {
  const themeBtn = document.querySelector('[data-theme-toggler');
  themeBtn.addEventListener('click', changeTheme);
});
