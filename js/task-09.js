// Ця функція генерує рандомний шістнадцятковий колір. 
// Вона використовує метод Math.floor для округлення результату
// від методу Math.random(), який повертає дійсне число від 0 до 1. 
// Потім використовується.toString(16) щоб перевести число в 16 рідну систему
// і .padStart(6, 0) щоб додати нулі на початок рядка, якщо довжина числа менша за 6 символів.
// Накінець додається символ '#' на початок строки і повертається як результат.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputCangeColor = document.querySelector('.change-color');
const toBody = document.querySelector('body');
const changeNameSpan = document.querySelector('span.color');
inputCangeColor.addEventListener('click', () => {
  toBody.style.background = getRandomHexColor();
  changeNameSpan.textContent = getRandomHexColor();
});



