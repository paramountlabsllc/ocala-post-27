const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => navigation.classList.remove('open'));
});

const bulletinList = document.querySelector('#bulletin-list');
const filterButtons = document.querySelectorAll('.filter-button');
let activeBulletinFilter = 'all';
let bulletins = [];

function escapeBulletinText(value) {
  return String(value).replace(/[&<>'"]/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;' })[character]);
}

function renderBulletins() {
  const visibleBulletins = bulletins.filter((bulletin) => activeBulletinFilter === 'all' || bulletin.type === activeBulletinFilter);
  bulletinList.innerHTML = visibleBulletins.length ? visibleBulletins.map((bulletin) => `<article class="bulletin-item"><div><div class="bulletin-item-date">${escapeBulletinText(bulletin.date || 'POST 27')}</div><div class="bulletin-item-type">${escapeBulletinText(bulletin.type)}</div></div><div><h3>${escapeBulletinText(bulletin.title)}</h3><p>${escapeBulletinText(bulletin.description)}</p></div></article>`).join('') : '<p class="bulletin-empty">No bulletin items in this category yet.</p>';
}

filterButtons.forEach((button) => {
  button.setAttribute('aria-pressed', String(button.classList.contains('active')));
  button.addEventListener('click', () => {
    activeBulletinFilter = button.dataset.filter;
    filterButtons.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle('active', isActive);
      filterButton.setAttribute('aria-pressed', String(isActive));
    });
    renderBulletins();
  });
});

fetch('./bulletins.json')
  .then((response) => {
    if (!response.ok) throw new Error(`Bulletins request failed: ${response.status}`);
    return response.json();
  })
  .then((publishedBulletins) => {
    if (!Array.isArray(publishedBulletins)) throw new Error('Bulletins data must be an array');
    bulletins = publishedBulletins;
    renderBulletins();
  })
  .catch(() => {
    bulletinList.innerHTML = '<p class="bulletin-empty">Bulletin items are temporarily unavailable.</p>';
  });
