// Alterna tema entre dark e light -------------------------------------------------------------------------
const toggleTheme = document.getElementById('toggle-theme');
const html = document.querySelector('html');
const favoriteThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches === true

if (favoriteThemeDark) {
  html.dataset.theme = 'dark';
  toggleTheme.textContent = 'Dark';
} else {
  html.dataset.theme = 'light';
  toggleTheme.textContent = 'Light';
}

toggleTheme.addEventListener('click', () => {
  if (html.dataset.theme === 'dark') {
    html.dataset.theme = 'light';
    toggleTheme.textContent = 'Light';
  } else {
    html.dataset.theme = 'dark';
    toggleTheme.textContent = 'Dark';
  }

})
