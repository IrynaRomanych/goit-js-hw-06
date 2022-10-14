const inputEl = document.querySelector('#name-input');
const nameValue = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value !== '') {
        nameValue.textContent = event.currentTarget.value;
    } else {
        nameValue.textContent = 'Anonymous';
    }
}
