//Достукуємось до поля input через id #name-input, та зчитуэмо введений текст
const inputName = document.querySelector('#name-input');

// Достукуємось до <span> куди будемо вписувати текст з поля input
const changeNameSpan = document.querySelector('#name-output');

// Функція перенесення тексту з input в Span
// Ця функція додає обробник події 'input' => для елементу inputName.
// Коли користувач вводить текст у це поле, функція перевіряє значення поля
// і в залежності від цього змінює значення тексту у елементі changeNameSpan.
// Якщо значення поля не порожнє, то значення тексту в changeNameSpan встановлюється
// до введеного тексту без пробілів. Якщо ж значення поля є порожнім,
// то значення тексту в changeNameSpan встановлюється до 'Anonymous'!!!

inputName.addEventListener('input', () => {
    if (inputName.value !== '') {
        changeNameSpan.textContent = inputName.value.trim();
    } if (inputName.value === '') {
        changeNameSpan.textContent = 'Anonymous';
    }
});

