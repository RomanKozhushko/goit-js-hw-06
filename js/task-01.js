//1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

const categoryEl = document.querySelectorAll('.item');
const numberCategoryEl = categoryEl.length;
console.log('Number of categories:', numberCategoryEl);

// // 2. Для кожного элемента li.item у спику ul#categories, 
// знайде і виведе в консоль текст заголовку елемента(тегу < h2 >) 
// і кількість елементів в категорії(усіх < li >, вкладених в нього).
[...categoryEl].forEach(function (el, index) {
    const numberOfElements = el.querySelectorAll('li');
    const nameOfElements = el.querySelector('h2');
    console.log(`Category: ${nameOfElements.textContent}`);
    console.log(`Elements: ${numberOfElements.length}`);
});

// const numberInCategory = numberInCategories.length;
// console.log('Elements:', numberInCategory);



