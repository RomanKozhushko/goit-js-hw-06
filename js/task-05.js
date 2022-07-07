const refs = {
    input: document.querySelector('#name-input'),
    changeNameSpan: document.querySelector('#name-output'),
    button: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange (event) {
    refs.changeNameSpan.textContent = event.currentTarget.value;
}




// {/* <p><a href="index.html">Go back</a></p>

//     <input type="text" id="name-input" placeholder="Please enter your name" />
//     <h1>Hello, <span id="name-output">Anonymous</span>!</h1> */}