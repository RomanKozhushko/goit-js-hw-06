const inputName = document.querySelector('#name-input');
const changeNameSpan = document.querySelector('#name-output');
const button = document.querySelector('#name-output');

inputName.addEventListener('input', () => {
    if (inputName.value !== '') {
        changeNameSpan.textContent = inputName.value.trim();
    } if (inputName.value === '') {
        changeNameSpan.textContent = 'Anonymous';
    }
});

