const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

 const elements = ingredients.map(option => {
 const itemOfFood = document.createElement('li');
  itemOfFood.classList.add('item');
  const itemName = document.createElement('h2');
  itemName.textContent = option;
  itemOfFood.appendChild(itemName);
   
 }) 
 const ingredientsContainer = document.querySelector('#ingredients');
ingredientsContainer.append(...elements);




// const elements = ingredients.map(option => {
//   // 1/ Створюємо li
//   const itemOfFood = document.createElement('li');
//   // 2/ Додаємо клас у li
//   itemOfFood.classList.add('item');
//   // 3/ Створюємо h2
//   const itemName = document.createElement('h2');
//   itemName.textContent = option;
//   // 4/ Додаємо h2 b li
//   itemOfFood.appendChild(itemName);
//   // 5/ Шукаємо ul
   
// })
//  const ingredientsContainer = document.querySelector('#ingredients')
//  ingredientsContainer.append(...elements);
  
  





