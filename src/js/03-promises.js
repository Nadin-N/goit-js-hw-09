import Notiflix from 'notiflix';

const refs = {
  firstDelayEl: document.querySelector('[name="delay"]'),
  delayStepEl: document.querySelector('[name="step"]'),
  amountEl: document.querySelector('[name="amount"]'),
  formEl: document.querySelector('.form'),
};

refs.formEl.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  const delayValue = Number(refs.firstDelayEl.value);
  const step = Number(refs.delayStepEl.value);
  const amount = Number(refs.amountEl.value);

  let delay = delayValue;

  for (let i = 1; i <= amount; i += 1) {
    createPromise(i, delay)
      .then(positive => {
        Notiflix.Notify.success(positive);
      })
      .catch(negative => {
        Notiflix.Notify.failure(negative);
      });
    // .then(({ position, delay }) => {
    //   console.log(position);
    //   Notiflix.Notify.success(
    //     `✅ Fulfilled promise ${position} in ${delay}ms`
    //   );
    // })
    // .catch(({ position, delay }) => {
    //   console.log(delay);
    //   Notiflix.Notify.failure(
    //     `❌ Rejected promise ${position} in ${delay}ms`
    //   );
    // });
    delay += step;
  }
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
  promise.position = position;
  promise.delay = delay;
  console.log(promise);
  //   console.log(promise.position);
  return promise;
}
