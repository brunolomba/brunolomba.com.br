// SCRIPTS para alterar o tema dark e light
const toggleTheme = document.getElementById('toggle-theme');
const html = document.querySelector('html');
const favoriteThemeDark =
  window.matchMedia('(prefers-color-scheme: dark)').matches === true;

// Verifica se o tema preferido é escuro e aplica o tema correspondente
if (favoriteThemeDark) {
  html.dataset.theme = 'dark';
  toggleTheme.textContent = 'DARK';
} else {
  html.dataset.theme = 'light';
  toggleTheme.textContent = 'LIGHT';
}

// Botão para alternar entre os temas
toggleTheme.addEventListener('click', () => {
  if (html.dataset.theme === 'dark') {
    html.dataset.theme = 'light';
    toggleTheme.textContent = 'LIGHT';
  } else {
    html.dataset.theme = 'dark';
    toggleTheme.textContent = 'DARK';
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

//SCRIPT para enviar formulário para o WhatsApp
// Elementos do formulário
const elements = {
    name: document.getElementById('name'),
    email: document.getElementById('email'),
    phone: document.getElementById('phone'),
    message: document.getElementById('message'),
    btnSubmit: document.getElementById('btnSubmit'),
    // btnWhatsApp: document.getElementById('btnWhatsApp'),
    modal: document.getElementById('confirmationModal'),
    confirmSend: document.getElementById('confirmSend'),
    cancelSend: document.getElementById('cancelSend')
};

function validate() {
    // Regex otimizados
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /\(\d{2}\) \d{4,5}-\d{4}/;

    return (
        elements.name.value.length >= 3 &&
        emailRegex.test(elements.email.value) &&
        phoneRegex.test(elements.phone.value) &&
        elements.message.value.length >= 10
    );
}

function generateWhatsAppLink() {
    const { name, email, phone, message } = elements;
    const text = `Olá! Me chamo ${name.value}\n` +
                 `Mensagem: ${message.value}\n\n` +
                 `Contato: ${phone.value} | ${email.value}`;

    return `https://wa.me/5511952193890?text=${encodeURIComponent(text)}`;
}

function toggleModal(show) {
    elements.modal.style.display = show ? 'flex' : 'none';
}

elements.btnSubmit.addEventListener('click', () => {
    if (!validate()) {
        alert('Preencha todos os campos corretamente!');
        return; 
    }

    // Atualiza o link do WhatsApp (sem abrir ainda)
    whatsappHrefForm = generateWhatsAppLink();
    toggleModal(true);
});

// Confirmar: Abre WhatsApp
elements.confirmSend.addEventListener('click', () => {
    toggleModal(false);
    window.open(whatsappHrefForm, '_blank');
});

// Cancelar: Fecha modal
elements.cancelSend.addEventListener('click', () => toggleModal(false));

// document.addEventListener('DOMContentLoaded', function () {
//   const form = document.getElementById('contactForm');
//   const whatsappBtn = document.querySelector('.btn-whatsapp');
//   const modal = document.getElementById('confirmationModal');
//   const confirmBtn = document.getElementById('confirmSend');
//   const cancelBtn = document.getElementById('cancelSend');

//   // Validação dos campos (mantida do exemplo anterior)
//   const inputs = form.querySelectorAll('input, textarea');
//   inputs.forEach(input => {
//     input.addEventListener('blur', function () {
//       this.checkValidity();
//     });
//   });

//   // Máscara para telefone (mantida do exemplo anterior)
//   const phoneInput = document.getElementById('phone');
//   phoneInput.addEventListener('input', function (e) {
//     let value = e.target.value.replace(/\D/g, '');

//     if (value.length > 0) {
//       value = '(' + value;
//     }
//     if (value.length > 3) {
//       value = value.substring(0, 3) + ') ' + value.substring(3);
//     }
//     if (value.length > 10) {
//       value = value.substring(0, 10) + '-' + value.substring(10, 14);
//     }

//     e.target.value = value;
//   });

//   // Função para formatar a mensagem do WhatsApp
//   function formatWhatsAppMessage(formData) {
//     const name = formData.get('name');
//     const email = formData.get('email');
//     const phone = formData.get('phone');
//     const message = formData.get('message');

//     return `Olá Bruno! Meu nome é ${name}. ${message} 
                
// Meus dados de contato:
// E-mail: ${email}
// Telefone: ${phone}`;
//   }

//   // Manipulador de envio do formulário
//   form.addEventListener('submit', function (e) {
//     e.preventDefault();

//     let isValid = true;
//     inputs.forEach(input => {
//       if (!input.checkValidity()) {
//         isValid = false;
//         input.classList.add('invalid');
//       } else {
//         input.classList.remove('invalid');
//       }
//     });

//     if (isValid) {
//       const formData = new FormData(form);
//       const whatsappMessage = formatWhatsAppMessage(formData);
//       const encodedMessage = encodeURIComponent(whatsappMessage);

//       // Atualiza o link do WhatsApp (mas não abre ainda)
//       whatsappBtn.href = `https://api.whatsapp.com/send/?phone=5511952193890&text=${encodedMessage}&type=phone_number&app_absent=0`;

//       // Mostra o modal de confirmação
//       modal.style.display = 'flex';
//     } else {
//       // Rolagem para o primeiro erro
//       const firstInvalid = form.querySelector('.invalid');
//       if (firstInvalid) {
//         firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
//       }
//     }
//   });

//   // Confirmar envio - abre o WhatsApp
//   confirmBtn.addEventListener('click', function () {
//     modal.style.display = 'none';
//     window.open(whatsappBtn.href, '_blank');
//   });

//   // Cancelar envio - fecha o modal
//   cancelBtn.addEventListener('click', function () {
//     modal.style.display = 'none';
//   });

//   // Fechar modal ao clicar fora do conteúdo
//   modal.addEventListener('click', function (e) {
//     if (e.target === modal) {
//       modal.style.display = 'none';
//     }
//   });
// });

//SCRIPT para footer fixo ???

// window.addEventListener('scroll', function () {
//   const scroolTop = this.document.documentElement.scrollTop;
//   const footerFixed = this.document.querySelector('.whatsapp-fixed');

//   if (scroolTop >= 650) {
//     footerFixed.classList.add('footer-visible')
//   } else {
//     footerFixed.classList.remove('footer-visible')
//   }
// });

// Loading animation teste
// window.addEventListener('load', () => {
//   setTimeout(() => {
//     const upMoving = document.querySelector('.up');
//     const downMoving = document.querySelector('.down');

//     upMoving.classList.add('loading__moving-up');
//     downMoving.classList.add('loading__moving-down');
//   }, 500);
// })