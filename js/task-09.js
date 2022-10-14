const body = document.querySelector('body');
console.dir(body);
const showColor = document.querySelector('.color');
const colorButton = document.querySelector('.change-color');
const newColor = document.querySelector('.widget > p');

colorButton.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    showColor.textContent = randomColor;
    body.style.backgroundColor = randomColor;
    newColor.after(newColor);
    return randomColor;
}
