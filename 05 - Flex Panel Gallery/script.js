const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}
function toggleActive(e) {
  if(e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(x => x.addEventListener('click', toggleOpen));
panels.forEach(x => x.addEventListener('transitionend', toggleActive));