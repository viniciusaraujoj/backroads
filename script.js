const menu = document.querySelector('.header__menu');
const nav = document.querySelector('.header__menu__links');
const ul = nav.querySelector('ul');

const showNav = () => {
  const ulHeight = ul.getBoundingClientRect().height;
  const navHeight = nav.getBoundingClientRect().height;

  navHeight === 0
    ? (nav.style.height = ulHeight + 'px')
    : (nav.style.height = 0);
};

const hideNav = () => {
  if (window.innerWidth >= 800) {
    nav.style.height = 0;
  }
};

const hideNavAfterClick = (e) => {
  if (e.target.tagName === 'A') {
    nav.style.height = 0;
  }
};

// event handlers
menu.addEventListener('click', showNav);
window.addEventListener('resize', hideNav);
ul.addEventListener('click', hideNavAfterClick);

// lightgallery
lightGallery(document.querySelector('.gallery'), {
  download: false,
});

// smooth scroll
const links = document.querySelectorAll(`a[href^="#"]`);
const headerHeight = document.querySelector('header').offsetHeight;

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const href = link.getAttribute('href');
    const offsetTop = document.querySelector(href).offsetTop - headerHeight;

    scroll({
      top: offsetTop,
      behavior: 'smooth',
    });
  });
});
