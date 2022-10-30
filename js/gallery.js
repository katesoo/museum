let arr = [];

function galery() {
  const pictureInnerContainer = document.querySelector(".galery-container");
  if (window.innerWidth < 1500) {
    pictureInnerContainer.style.height = window.innerWidth + 1100 + 'px';
  }

  let arr2 = [];
  for (let i = 1; i <= 15; i++) {
    let img = `<img class="galery-image" src="assets/img/galery/galery${i}.jpg" alt="galery${i}">`;
    arr2.push(img);
  }
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  let arr3 = shuffle(arr2);
  arr3.forEach((elem) => {
    pictureInnerContainer.insertAdjacentHTML("afterbegin", elem);
  });
}

galery();

const galeryImg = document.querySelectorAll(".galery-image");

arr = [
  galeryImg[0],
  galeryImg[5],
  galeryImg[10],
  galeryImg[1],
  galeryImg[6],
  galeryImg[11],
  galeryImg[2],
  galeryImg[7],
  galeryImg[12],
  galeryImg[3],
  galeryImg[8],
  galeryImg[13],
  galeryImg[4],
  galeryImg[9],
  galeryImg[14],
];

function padding(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i == 0 || i == 10) {
      galeryImg[i].classList.add("galery-with-padding");
    }
  }
}
padding(arr);

function checkSlide() {
  for (let i = 0; i < arr.length; i++) {
    let slideInAt =
      window.scrollY + window.innerHeight - galeryImg[i].height / 2;
    let imageBottom = 4300 + galeryImg[i].offsetTop + galeryImg[i].height;
    // console.log(imageBottom);
    // console.log(slideInAt);
    let isHalf = slideInAt > galeryImg[i].offsetTop + 4300;
    let notScroll = window.scrollY < imageBottom;
    if (isHalf && notScroll) {
      galeryImg[i].classList.add("active");
    } else {
      galeryImg[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", checkSlide);
