// get nav list items
let navItems = document.querySelectorAll('.nav-item a');
let navigationContainer = document.querySelector('.navigation-container');
let currentPage = window.location.pathname;
console.log(currentPage);

navItems.forEach((item) => {
  if (item.getAttribute('href') === currentPage) {
    item.classList.add('active-link');
  }
});

// toggle navigation

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByTagName("nav")[0].style.top = "0";
    // animate footer off screen
    document.getElementsByTagName("footer")[0].style.bottom = "0";

  } else {
    document.getElementsByTagName("nav")[0].style.top = "-100px";
    // animate footer on screen
    document.getElementsByTagName("footer")[0].style.bottom = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hide');
hiddenElements.forEach((element) => {
  observer.observe(element);
});

let navButton = document.querySelector('.nav-button');
let navTabs = document.querySelector('.nav-tabs');

navButton.addEventListener('click', function () {
  this.classList.toggle('open');
  if (this.classList.contains('open')) {
    navigationContainer.classList.add('show-nav');
    navTabs.classList.add('open');
  }
  else {
    navigationContainer.classList.remove('show-nav');
    navTabs.classList.remove('open');
  }
});