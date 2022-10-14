const decrementBtn = document.querySelector('[data-action=decrement]');
const incrementBtn = document.querySelector('[data-action=increment]');
const totalValue = document.querySelector('#value');
let counterValue = 0;

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    totalValue.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    totalValue.textContent = counterValue;
});

console.log(counterValue);
