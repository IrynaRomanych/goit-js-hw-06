const input = document.querySelector('#validation-input');

input.addEventListener('blur', outOfFocusInput);
console.dir(input);

function outOfFocusInput(event) {
    input.classList.remove('invalid');
    input.classList.remove('valid');
    if (`${event.currentTarget.value.length}` === input.dataset.length) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
    return input;
}
