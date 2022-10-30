(function(){

  'use strict';

var goTopBtn = document.querySelector('.back_to_top');

window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);

function trackScroll() {
    var scrolled = window.pageYOffset;
    var n = document.documentElement.clientHeight;

    if (scrolled > n) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < n) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }
  function backToTop() {    
    if (window.pageYOffset > 0) {
      console.log('true');
      window.scrollBy(0, -window.pageYOffset);
    }
  }
})();