// SCRIPTS para alterar o tema dark e light
const toggleTheme = document.getElementById('toggle-theme');
const html = document.querySelector('html');
const favoriteThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches === true

// Verifica se o tema preferido é escuro e aplica o tema correspondente
if (favoriteThemeDark) {
  html.dataset.theme = 'dark';
  toggleTheme.textContent = 'Dark';
} else {
  html.dataset.theme = 'light';
  toggleTheme.textContent = 'Light';
}

// Botão para alternar entre os temas
toggleTheme.addEventListener('click', () => {
  if (html.dataset.theme === 'dark') {
    html.dataset.theme = 'light';
    toggleTheme.textContent = 'Light';
  } else {
    html.dataset.theme = 'dark';
    toggleTheme.textContent = 'Dark';
  }
})

// CORRIGIR --------------
// SCRIPTS para o menu de navegação
const navButton = document.querySelector('.nav-btn');
const navLink = document.querySelectorAll('.nav-link');
const nav = document.querySelector('.nav');

// Botão para abrir e fechar o menu de navegação
navButton.addEventListener('click', () => {
  const isNavVisible = nav.classList.contains('nav__visible');
  if (isNavVisible) {
    nav.classList.remove('nav__visible');
    navButton.setAttribute('aria-expanded', 'false');
  } else {
    nav.classList.add('nav__visible');
    navButton.setAttribute('aria-expanded', 'true');
  }
})

// Esconde o menu quando um link é clicado
navLink.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav__visible');
    navButton.setAttribute('aria-expanded', 'false');
  })
})