
//1/шукаємо колір рамки інпуту через ЛЕТ томущо значення буде змінюватись через наявність трьох кольорів!
let input = document.querySelector("#validation-input");
//2/витягуємо значення довжини інпута
const inputLength = input.getAttribute("data-length");


input.oninput = function () {

    if(input.value.length >= inputLength) {
        input.classList.remove("invalid");
        input.classList.add("valid");
    }
    if( input.value.length < inputLength ) {
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
    if( input.value.length === 0) {
        input.classList.toggle("invalid")
    }
}

     #validation-input {
        border: 2px solid #bdbdbd;
      }
      #validation-input.valid {
        border-color: #4caf50;
      }
      #validation-input.invalid {
        border-color: #f44336;
      }








