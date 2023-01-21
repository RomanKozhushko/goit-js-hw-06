
// Достукуємось до input через ID #font-size-control
const range = document.querySelector('#font-size-control');

// Достукуємось до <span> через ID #text
const text = document.querySelector('#text');

// Функція додає подію "input" до елементу із класом "range". 
// Коли користувач вводить дані в цей елемент, функція викликається.
// Внутрішній код функції змінює розмір шрифту елементу з класом "text" на значення, 
// яке введено у елементі "range", 
// використовуючи свойство "style.fontSize" та додаючи 'px' до значення.
(function () {

    range.addEventListener("input",
        function () {
            text.style.fontSize = range.value + 'px'
        });
})();




