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
   return itemOfFood;
  }) 
  const ingredientsContainer = document.querySelector('#ingredients'); 
   ingredientsContainer.append(... elements);




// const elementUl = document.querySelector("#ingredients")
// // console.log(elementUl)
// const elementIngredients = ingredients.map(ingredient => {
//   const elementList = document.createElement("li");
//   elementList.textContent = ingredient;

//   return elementList;
// })
// // console.log(elIngredients)
// elementUl.append(...elementIngredients)
// //console.log(elementUl)


