const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

function navToggle() {
  btn.classList.toggle('open');
  nav.classList.toggle('translate-x-full');
  document.body.classList.toggle('no-scroll');
}

btn.addEventListener('click', navToggle);
