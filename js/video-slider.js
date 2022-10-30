let swiper2 = new Swiper('.video-player-slider', {
    loop: true,
    navigation: {
        nextEl: '.butt-slider-r',
        prevEl: '.butt-slider-l'
    },
    pagination:{
        el: '.circles',
        clickable: true,
    }
});



let swiper3 = new Swiper('.video_slider',{
    slidesPerView: 3,
    loop: true,
    navigation: {
        nextEl: '.butt-slider-r',
        prevEl: '.butt-slider-l'
    },
    pagination:{
        el: '.circles',
        clickable: true,
    }
});