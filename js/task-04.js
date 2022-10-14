let counterValue = 0;
const decrementBtn = document.querySelector('[data-action=decrement]');
const incrementBtn = document.querySelector('[data-action=increment]');
const totalValue = document.querySelector('#value');
console.dir(totalValue.textContent);

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    totalValue.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    totalValue.textContent = counterValue;
});
counterValue = Number(totalValue.textContent);
console.log(counterValue);
