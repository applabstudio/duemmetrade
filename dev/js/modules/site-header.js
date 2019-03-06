const dom = {
  siteHeader: '.site-header',
  navToggle: '.js-nav-toggle',
  siteNav: '.js-site-nav',
};

const toggleNav = (evt) => {
  const nav = document.querySelector(dom.siteNav);

  evt.currentTarget.classList.toggle('close');
  nav.classList.toggle('open');
};

const setScrollClass = (evt) => {
  const siteHeader = document.querySelector(dom.siteHeader);

  if (window.pageYOffset > 200) {
    siteHeader.classList.add('scroll');
  } else {
    siteHeader.classList.remove('scroll');
  }
}

const events = () => {
  const navToggle = document.querySelector(dom.navToggle);
  navToggle.addEventListener('click', toggleNav);
  window.addEventListener('scroll', setScrollClass);
};

export default {
  init: () => {
    events();
  },
};