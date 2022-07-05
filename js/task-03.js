const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const elements = images.map(option => {
  // 1/ Створюємо li
  const itemOfimg = document.createElement('li');
  // 2/ Створюємо img
  const imageEl = document.createElement('img')
  imageEl.src = option.url;
  imageEl.alt = option.alt;
  // 3/ Додаємо img b li
  itemOfimg.appendChild(imageEl);
  // // 4/ Шукаємо ul
  const imagesContainer = document.querySelector('.gallery')
  // //  5/ Додаємо  li b ul
  imagesContainer.appendChild(itemOfimg);
  console.log(itemOfimg);
})


