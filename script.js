function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

var video = document.getElementById("myVideo");

    function playVideo() {
      video.play();
    }

    function stopVideo() {
      video.pause();
      video.currentTime = 0;
    }