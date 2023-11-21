function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var videos = document.querySelectorAll(".myVideo");

function playVideo(video) {
  video.play();
}

function stopVideo(video) {
  video.pause();
  video.currentTime = 0;
}

