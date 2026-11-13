const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => navigation.classList.remove('open'));
});

document.querySelector('#newsletter-form').addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('#form-message').textContent = 'Thanks for subscribing to Post 550 news.';
  event.currentTarget.reset();
});