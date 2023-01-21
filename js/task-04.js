// Достукуємось до кнопок та інпута
const button = {
    sub: document.querySelector("[data-action='increment']"),
    add: document.querySelector("[data-action='decrement']"),
    span: document.querySelector('#value'),
}
// присвоюємо початкове значення інпута
let counterValue = 0;
// Пишемо функцію збільшення на 1 при нажатті кнопки +1
const increment = () => {
  counterValue += 1;
  document.querySelector('#value').textContent = counterValue;
};
// Пишемо функцію зменшення (за умовою) на -1 при нажатті кнопки -1
const decrement = () => {
  if (counterValue >= 1) {
    counterValue -= 1;
    document.querySelector('#value').textContent = counterValue;
  };
}
// Надаємо клікам по заданих кнопках фукціональних дій!
button.sub.addEventListener('click', increment);
button.add.addEventListener('click', decrement);





