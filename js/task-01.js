//1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

const categoryEl = document.querySelectorAll('.item');
const numberCategoryEl = categoryEl.length;
console.log('Number of categories:', numberCategoryEl);

// // 2. Для кожного элемента li.item у спику ul#categories, 
// знайде і виведе в консоль текст заголовку елемента(тегу < h2 >) 
// і кількість елементів в категорії(усіх < li >, вкладених в нього).
categoryEl.forEach(function (El, index) {
    
  console.log(`Індекс ${index + 1}, значення ${El}`);
});

// const numberInCategory = numberInCategories.length;
// console.log('Elements:', numberInCategory);



