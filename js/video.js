let player = document.querySelector(".video_player");
let video_active;
let video;
let allScreen = document.querySelectorAll(".viewer");
let toggle = player.querySelector(".button-play");
let playBut = player.querySelector(".image-play");
let stopBut = player.querySelector(".stop-video");
let bigBut = player.querySelector(".player-button");
let rangeVolume = player.querySelector(".range-two");
let progress = player.querySelector(".range-one");
let imgVolume = player.querySelector(".image-volume");
let imgMute = player.querySelector(".image-mute");
let full_on_img = player.querySelector(".image-fullscreen");
let full_off_img = player.querySelector(".image-no-fullscreen");
let volume;
let prevVideo;
let videoPanel = document.querySelector(".video_panel");

setInterval(() => {
  updateProgress();
}, 50);

setTimeout(() => {
  video_active = document.querySelectorAll(".swiper-slide-active")[1];

  video = video_active.querySelector(".viewer");
}, 1000);

function fullOn(e) {
  player.requestFullscreen();
  document
    .querySelector(".video_container")
    .classList.toggle(".fullscreen-cont");
  document.querySelector(".video_container").classList.toggle("_container");
  document.querySelector(".video_image").style.maxWidth = "100vw";
  //  bigBut.classList.add('.fullScreen');
  progress.style.width = "65%";
  rangeVolume.style.width = "11%";
  let one = document.querySelectorAll("video");
  one.forEach((elem) => {
    elem.style.minWidth = "100vw";
    elem.style.minHeight = "90vh";
  });
  e.preventDefault(false);
  if (document.exitFullscreen) {
    document.exitFullscreen(player);
    e.preventDefault(false);
  }
}

function fullOff(e) {
  player.requestFullscreen();
  document
    .querySelector(".video_container")
    .classList.toggle(".fullscreen-cont");
  document.querySelector(".video_container").classList.toggle("_container");
  document.querySelector(".video_image").style.maxWidth = "1440px";
  // bigBut.classList.remove('.fullScreen');
  progress.style.width = "930px";
  rangeVolume.style.width = "155px";
  one = document.querySelectorAll("video");
  one.forEach((elem) => {
    elem.style.minWidth = "0";
    elem.style.minHeight = "0";
  });
  e.preventDefault(false);
  if (document.exitFullscreen) {
    document.exitFullscreen(player);
    e.preventDefault(false);
  }
}

document.body.addEventListener("keydown", (el) => {
  video_active = document.querySelectorAll(".swiper-slide-active")[1];
  video = video_active.querySelector(".viewer");
  if (
    document.activeElement == player ||
    document.activeElement == bigBut ||
    document.activeElement == videoPanel
  ) {
    if (el.code == "Space") {
      togglePlay();
      el.preventDefault(false);
    }
    if (el.code == "KeyM") {
      VolumeNo();
    }
    if (el.code == "KeyF") {
      if (window.innerHeight == screen.height) {
        player.requestFullscreen();
        document
          .querySelector(".video_container")
          .classList.toggle(".fullscreen-cont");
        document
          .querySelector(".video_container")
          .classList.toggle("_container");
        document.querySelector(".video_image").style.maxWidth = "1440px";
        // bigBut.classList.remove('.fullScreen');
        progress.style.width = "930px";
        rangeVolume.style.width = "155px";
        one = document.querySelectorAll("video");
        one.forEach((elem) => {
          elem.style.minWidth = "0";
          elem.style.minHeight = "0";
        });
        e.preventDefault(false);
        if (document.exitFullscreen) {
          document.exitFullscreen(player);
          e.preventDefault(false);
        }
      } else {
        player.requestFullscreen();
        document
          .querySelector(".video_container")
          .classList.toggle(".fullscreen-cont");
        document
          .querySelector(".video_container")
          .classList.toggle("_container");
        document.querySelector(".video_image").style.maxWidth = "100vw";
        //  bigBut.classList.add('.fullScreen');
        progress.style.width = "1330px";
        rangeVolume.style.width = "224px";
        let one = document.querySelectorAll("video");
        one.forEach((elem) => {
          elem.style.minWidth = "100vw";
          elem.style.minHeight = "93vh";
        });
        e.preventDefault(false);
        if (document.exitFullscreen) {
          document.exitFullscreen(player);
          e.preventDefault(false);
        }
      }
    }
  }
});

let videos = document.querySelectorAll("video");
for (let i = 0; i < videos.length; i++)
  videos[i].addEventListener(
    "play",
    function () {
      pauseAll(this);
    },
    true
  );
function pauseAll(element) {
  for (let i = 0; i < videos.length; i++) {
    if (videos[i] == element) continue;
    if (videos[i].played.length > 0 && !videos[i].paused) {
      videos[i].pause();
    }
  }
}

// let videost = document.querySelectorAll('iframe');
//  for(let i=0; i<videost.length; i++)
//     videost[i].addEventListener('play', function(){pauseAll_2(this);}, true);
//  function pauseAll_2(element2){
//     for(let i=0; i<videost.length; i++){
//        if(videost[i] == element2) continue;
//        if(videost[i].played.length > 0 && !videost[i].paused){
//          videost[i].pause();
//        }
//     }
//    }

function togglePlay() {
  video_active = document.querySelectorAll(".swiper-slide-active")[1];
  video = video_active.querySelector(".viewer");
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  updateButton();
  updateProgress();
}

function updateButton() {
  playBut.classList.toggle("image-pause");
  stopBut.classList.toggle("image-pause");
  bigBut.classList.toggle("pause");
}

function handleRange() {
  video.volume = rangeVolume.value;
  changeVolumeImg();
}

function updateProgress() {
  video_active = document.querySelectorAll(".swiper-slide-active")[1];
  video = video_active.querySelector(".viewer");
  progress.value = (video.currentTime / video.duration) * 100;
}

function setProgress() {
  video_active = document.querySelectorAll(".swiper-slide-active")[1];
  video = video_active.querySelector(".viewer");
  video.currentTime = (progress.value * video.duration) / 100;
}

function changeVolumeImg() {
  if (rangeVolume.value == 0) {
    imgVolume.classList.add("mute");
    imgMute.classList.remove("mute");
  } else {
    imgVolume.classList.remove("mute");
    imgMute.classList.add("mute");
  }
}

function VolumeNo() {
  video_active = document.querySelectorAll(".swiper-slide-active")[1];
  video = video_active.querySelector(".viewer");
  imgVolume.classList.toggle("mute");
  imgMute.classList.toggle("mute");
  if (video.muted) {
    rangeVolume.value = localStorage.getItem("volume-value");
    video.muted = false;
    changeVolumeImg();
  } else {
    video.muted = true;
    localStorage.setItem("volume_value", rangeVolume.value);
    rangeVolume.value = 0;
    changeVolumeImg();
  }
}

function fullScreen() {
  full_on_img.classList.toggle("none");
  full_off_img.classList.toggle("none");
}

full_on_img.addEventListener("click", fullOn);
full_off_img.addEventListener("click", fullOff);

imgVolume.addEventListener("click", VolumeNo);
imgMute.addEventListener("click", VolumeNo);
playBut.addEventListener("click", togglePlay);
stopBut.addEventListener("click", togglePlay);
full_on_img.addEventListener("click", fullScreen);
full_off_img.addEventListener("click", fullScreen);
bigBut.addEventListener("click", togglePlay);
rangeVolume.addEventListener("change", handleRange);
rangeVolume.addEventListener("input", handleRange);
rangeVolume.addEventListener("mousemove", handleRange);
// toggle.addEventListener('click', togglePlay);
allScreen.forEach((el) => {
  el.addEventListener("click", togglePlay);
});
progress.addEventListener("change", setProgress);
if (video) {
  video.addEventListener("timeupdate", updateProgress);
  video.addEventListener("play", updateButton);
  // video.addEventListener('pause', updateButton);
}
