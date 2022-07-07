const refs = {
    input: document.querySelector('#name-input'),
    changeNameSpan: document.querySelector('#name-output'),
    button: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange (event) {
    refs.changeNameSpan.textContent = event.currentTarget.value;
}



