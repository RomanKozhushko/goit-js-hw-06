//Достукуємось до UL Через ID #ingredients   
const ingredientsContainer = document.querySelector('#ingredients'); 

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// З Допомогою "map" розрізаємо масив на елементи!!!
const elements = ingredients.map(option => {
   // з кожного елемента з допомогою "document.createElement('li');" створюємо  "li"
  const itemOfFood = document.createElement('li');
  // До кожного елемента "li" Додаємо класс "item"
  itemOfFood.classList.add('item');
  // у кожну "li" створюємо з допомогою "document.createElement("h2")
  const itemName = document.createElement('h2');
  // у кожну 'h2' записуємо значення вмісту з масиву
  itemName.textContent = option;
  // кожен наступний елемент списку додаємо в кінець списку
   itemOfFood.appendChild(itemName);
   return itemOfFood;
}) 
  //додаємо елементт до контейнера, що вибраний за допомогою селектора "ingredients"
//Спеціальний оператор "..." використовується для розбиття масиву елементів на окремі елементи і додавання їх до контейнера.
//Тобто, код додає набір елементів в змінну elements всередину контейнера ingredientsContainer.

   ingredientsContainer.append(... elements);



