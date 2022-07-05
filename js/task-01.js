//1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

const categoryEl = document.querySelectorAll('.item');
const numberCategoryEl = categoryEl.length;
console.log('Number of categories:', numberCategoryEl);

// // 2. Для кожного элемента li.item у спику ul#categories, 
// знайде і виведе в консоль текст заголовку елемента(тегу < h2 >) 
// і кількість елементів в категорії(усіх < li >, вкладених в нього).
const headsOfCategories = document.querySelectorAll('h2');
const headOfCategory = headsOfCategories.textContent;
console.log('Elements:', headOfCategory);



