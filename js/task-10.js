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
      div.style.width = 30 + i * 10 + "px";
	    div.style.height = 30 + i * 10 + "px";
	    div.style.background = getRandomHexColor();
	// li.style.border = '2px'
	// li.style.borderColor = '#000'
	// li.style.borderStyle = 'solid'
      const divBoxes = document.querySelector('#boxes')
      divBoxes.appendChild(div);
  }
}
button.add.addEventListener("click", createDiv);

const deleteDiv = (event) => {
    const numberDiv = document.querySelectorAll('.cube');
    for (let i = 0; i < numberDiv.length; ++i) {
    const divInBoxes = document.querySelector('.cube')
    divInBoxes.remove();
  }
}
button.sub.addEventListener("click", deleteDiv);


   