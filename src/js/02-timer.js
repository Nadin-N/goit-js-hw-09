import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  startBtn: document.querySelector('[data-start]'),
  daysEl: document.querySelector('[data-days]'),
  hoursEl: document.querySelector('[data-hours]'),
  minutesEl: document.querySelector('[data-minutes]'),
  secondsEl: document.querySelector('[data-seconds]'),
};

let intervalId = null;
let finishTime = null;
let ms = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    ms = selectedDates[0].getTime() - Date.now();
    if (ms <= 0) {
      refs.startBtn.disabled = true;
      Notiflix.Notify.failure('Please choose a date in the future', {
        timeout: 2000,
      });
    } else {
      refs.startBtn.disabled = false;
      refs.startBtn.addEventListener('click', e => {
        intervalId = setInterval(() => {
          ms = selectedDates[0].getTime() - Date.now();
          if (ms <= 0) {
            clearInterval(intervalId);
            return;
          }
          const { days, hours, minutes, seconds } = convertMs(ms);
          refs.daysEl.textContent = pad(days);
          refs.hoursEl.textContent = pad(hours);
          refs.minutesEl.textContent = pad(minutes);
          refs.secondsEl.textContent = pad(seconds);
        }, 1000);
      });
    }
  },
};

flatpickr('#datetime-picker', options);

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, 0);
}
