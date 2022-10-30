const button = document.querySelector('.button-book');
button.forEach(btn => {
    btn.addEventListener('click', function(e) {
        const x = e.clientX - e.target.offsetLeft;
        const y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.classList.add('.ripple');
        ripples.style.left = x + "px";
        ripples.style.top = y + "px";
        this.appendChild(ripples);

        setTimeout(() =>{
            ripples.remove()
        },1000);
    })}
)