const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  bodyEl: document.querySelector('body'),
};
let timerId = null;

refs.startBtn.addEventListener('click', onStartClick);
refs.stopBtn.addEventListener('click', onStopClick);

function onStartClick(e) {
  if (!refs.startBtn.disabled) {
    refs.startBtn.disabled = true;
  }
  timerId = setInterval(
    e => (refs.bodyEl.style.backgroundColor = getRandomHexColor()),
    1000
  );
}

function onStopClick(e) {
  clearInterval(timerId);
  refs.startBtn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
