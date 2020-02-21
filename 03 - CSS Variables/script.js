const inputChanges = document.querySelectorAll('.controls input');

function handleUpdates () {
  const suffix  = this.dataset.sizing || "";
  let root = document.documentElement;
  root.style.setProperty("--" + this.name, this.value + suffix);
}

inputChanges.forEach(x => x.addEventListener('change', handleUpdates));
inputChanges.forEach(x => x.addEventListener('mousemove', handleUpdates))