const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secHand = document.querySelector('.second-hand');
const allHands = document.querySelectorAll('.hand');

function styleRemove (a,b) {
  a === 0 ? b.style.transition = "all 0s" : b.style.transition = "all 0.1s cubic-bezier(0, 2.35, 0.58, 1)";
}

function changeTime(e) {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  styleRemove(hours,hourHand);
  styleRemove(minutes,minHand);
  styleRemove(seconds,secHand);
  hourHand.style.transform = "rotate(" + (30*(hours-9)).toString() + "deg)";
  minHand.style.transform = "rotate(" + (6*(minutes-45)).toString() + "deg)";
  secHand.style.transform = "rotate(" + (6*(seconds-45)).toString() + "deg)";
}

setInterval(changeTime, 1000);