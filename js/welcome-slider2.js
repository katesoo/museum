let index = 1;

let Slider = function(){
    this.box = document.querySelector('.images-in-welcome');
    this.btn = document.querySelectorAll('.welcome-arrow');
    this.slides = document.querySelectorAll('.image-main');
    this.slidesbox = document.querySelector('.image-in-welcome');
    this.size = this.box.clientWidth;

    this.position();
    this.carusel();
};

// let squares = document.querySelectorAll('.square');
//   squares.addEventListener('click', function(){
//     for (let i=0; i<squares.length; i++){
//         let square = squares[i];
//     }
//   });


Slider.prototype.position = function(){
    let size = this.size;
    this.slidesbox.style.transform = 'translateX(' +(-index*size) + 'px)';
};

Slider.prototype.carusel = function(){
    let i, max = this.slides.length,
        that = this;

        for(i = 0; i < max; i++){
            that.btn[i].addEventListener('click', Slider[that.btn[i].id].bind(null, that));
        }
};

Slider.prev = function(box){    
    box.slidesbox.style.transition = "transform 0.3s ease-in-out";
    let size = box.size;
    index <= 0? false : index--;
    box.slidesbox.style.transform = 'translateX(' +(-index*size) + 'px)';
    box.jump();
};

Slider.next = function(box){
    box.slidesbox.style.transition = "transform 0.3s ease-in-out";
    let max = box.slides.length;
    let size = box.size;
    index >=max -1? false : index++;
    box.slidesbox.style.transform = 'translateX(' +(-index*size) + 'px)';
    box.jump();
};

Slider.prototype.jump = function(){
    let that = this;
    let size = this.size;
    this.slidesbox.addEventListener('transitionend', function(){
        that.slides[index].id === "first-copy" ? index=1 : index;
        that.slides[index].id === "last-copy" ? index = that.slides.length - 2 : index;
        that.slidesbox.style.transition = "none";
        that.slidesbox.style.transform = 'translateX(' +(-index*size) + 'px)';
    });
};
new Slider();

