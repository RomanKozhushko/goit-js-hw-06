function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = {
    add: document.querySelector("[data-create]"),
    sub: document.querySelector("[data-destroy]"),
    inputName: document.querySelector('input'),
}

let counter;
const handleClick = (event) => {
  counter = parseInt(event.currentTarget.value);
  console.log(counter);

  }
button.inputName.addEventListener("change", handleClick);

const createDiv = (event) => {
    for (let i = 0; i < counter; ++i) {
      let div = document.createElement("div");
      div.classList.add('cube');
      const divBoxes = document.querySelector('#boxes')
      divBoxes.appendChild(div);
  }
}
button.add.addEventListener("click", createDiv);

const deleteDiv = (event) => {
  
    const divInBoxes = document.querySelector('.cube')
    divInBoxes.remove();
  }

button.sub.addEventListener("click", deleteDiv);


// 


// const elements = ingredients.map(option => {// 1/ Створюємо li
//   const itemOfFood = document.createElement('li');
//   // 2/ Додаємо клас у li
//   itemOfFood.classList.add('item');
//   // 3/ Створюємо h2
//   const itemName = document.createElement('h2');
//   itemName.textContent = option;
//   // 4/ Додаємо h2 b li
//   itemOfFood.appendChild(itemName);
//   // 5/ Шукаємо ul
//   const ingredientsContainer = document.querySelector('#ingredients')
//   //  6/ Додаємо  li b ul
//   ingredientsContainer.appendChild(itemOfFood);
//   console.log(itemOfFood);
// })