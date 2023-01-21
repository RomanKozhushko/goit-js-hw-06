
//1/шукаємо колір рамки інпуту через ЛЕТ томущо значення буде змінюватись через наявність трьох кольорів!
let input = document.querySelector("#validation-input");
//2/витягуємо значення необхідної довжини інпута яку вказане у data-length у інпуті
const inputLength = input.getAttribute("data-length");

// пишимо функцію прорахунку кількості символів та зміни кольору рамки

input.oninput = function () {
// Якщо довжина введеного тексту дорівнює значенню data-length то встановити класс valid
    if(input.value.length == inputLength) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    }
  //  Якщо довжина введеного тексту не дорівнює значенню data-length то встановити класс invalid
    if( input.value.length != inputLength ) {
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
    // Перевіряємо довжину значення, 
    // яке вводиться в інпут(input.value.length), 
    // і якщо вона рівна 0, то видаляєvj клас "invalid" 
    // з інпуту(input.classList.remove("invalid"))
    if( input.value.length === 0) {
         input.classList.remove("invalid");
    }
}

 








