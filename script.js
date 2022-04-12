const hamburger = document.querySelector('.navbar__hamburger');
const links = document.querySelector('.nav-primary');

hamburger.addEventListener('click', ()=> {
    links.classList.toggle('nav-primary--hide');
});