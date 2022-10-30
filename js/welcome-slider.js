let swiper = new Swiper('.swiper',{
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    loop: true,
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
    },
});

let allSlides = document.querySelector('.slider_fraction_total');
let currentSlide = document.querySelector('.slider_fraction_current');

allSlides.innerHTML = `0${swiper.slides.length - 2}`;
swiper.on('slideChange', function(){
    let curr = ++swiper.realIndex;
    currentSlide.innerHTML = `0${curr}`;
});