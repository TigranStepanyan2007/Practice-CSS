const hamburger = document.querySelector('.nav-bar');
const navUl = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
  navUl.classList.toggle('show');
});