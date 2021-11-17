// INTERACTIONS
let hamburger = document.querySelector('.hamburger');
let navUl = document.querySelector('.navbar-items');

hamburger.addEventListener('click', () => {
  navUl.classList.toggle('show');
});
