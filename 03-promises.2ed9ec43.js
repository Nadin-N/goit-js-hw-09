function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequire7bc7;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequire7bc7=r);var l=r("eWCmQ");const i={firstDelayEl:document.querySelector('[name="delay"]'),delayStepEl:document.querySelector('[name="step"]'),amountEl:document.querySelector('[name="amount"]'),formEl:document.querySelector(".form")};function u(e,t){return new Promise(((o,n)=>{const r=Math.random()>.3;setTimeout((()=>{r?o({position:e,delay:t}):n({position:e,delay:t})}),t)}))}i.formEl.addEventListener("submit",(function(t){t.preventDefault();const o=Number(i.firstDelayEl.value),n=Number(i.delayStepEl.value),r=Number(i.amountEl.value);let a=o;for(let t=1;t<=r;t+=1)u(t,a).then((({position:t,delay:o})=>{e(l).Notify.success(`✅ Fulfilled promise ${t} in ${o}ms`)})).catch((({position:t,delay:o})=>{e(l).Notify.failure(`❌ Rejected promise ${t} in ${o}ms`)})),a+=n}));
//# sourceMappingURL=03-promises.2ed9ec43.js.map
