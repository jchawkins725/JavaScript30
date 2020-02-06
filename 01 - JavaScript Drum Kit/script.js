const keys = document.querySelectorAll('.key')

function drumPlay (event) {
  const drum = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const keyDisplay = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if(!drum) return;
  drum.currentTime = 0;
  drum.play();
  keyDisplay.classList.add('playing');
}
function removeClass (element) {
  if (element.propertyName !== "transform") return;
  this.classList.remove('playing')
}

window.addEventListener('keydown', drumPlay);
keys.forEach(element => element.addEventListener('transitionend', removeClass));