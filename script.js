// SCRIPTS para alterar o tema dark e light
const toggleTheme = document.getElementById('toggle-theme');
const html = document.querySelector('html');
const favoriteThemeDark =
  window.matchMedia('(prefers-color-scheme: dark)').matches === true;

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
});

// CORRIGIR --------------
// SCRIPTS para o menu de navegação
const navButton = document.querySelector('.nav-btn');
const navLink = document.querySelectorAll('.nav-link');
const nav = document.querySelector('.nav');

setTimeout(() => {
  navButton.setAttribute('aria-expanded', 'false');
  nav.classList.add('nav__hidden');
}, 1500);

// Botão para abrir e fechar o menu de navegação
navButton.addEventListener('click', () => {
  const isNavHidden = nav.classList.contains('nav__hidden');
  if (isNavHidden) {
    nav.classList.remove('nav__hidden');
    navButton.setAttribute('aria-expanded', 'false');
  } else {
    nav.classList.add('nav__hidden');
    navButton.setAttribute('aria-expanded', 'true');
  }
});

// Esconde o menu quando um link é clicado
navLink.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav__hidden');
    navButton.setAttribute('aria-expanded', 'false');
  });
});

// window.addEventListener('scroll', function () {
//   const scroolTop = this.document.documentElement.scrollTop;
//   const footerFixed = this.document.querySelector('.footer-contact-fixed');

//   if (scroolTop >= 650) {
//     footerFixed.classList.add('footer-visible')
//   } else {
//     footerFixed.classList.remove('footer-visible')
//   }
// });

// window.addEventListener('load', () => {
//   setTimeout(() => {
//     const upMoving = document.querySelector('.up');
//     const downMoving = document.querySelector('.down');

//     upMoving.classList.add('loading__moving-up');
//     downMoving.classList.add('loading__moving-down');
//   }, 500);
// })