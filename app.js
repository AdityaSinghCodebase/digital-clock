let hrs = document.getElementById("hrs");
let mins = document.getElementById("mins");
let sec = document.getElementById("sec");

function digitalClock() {
  let currentTime = new Date();

  hrs.innerText = currentTime.getHours();
  mins.innerText = currentTime.getMinutes();
  sec.innerText = currentTime.getSeconds();
}

digitalClock();

setInterval(digitalClock, 1000);
