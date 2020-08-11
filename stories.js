//Zooms into the stories
const button = document.querySelector("#number1");
function onClick(event){
    event.preventDefault()

    button.style.width = '100%';
    button.style.height = '100vh';
}

button.addEventListener("click", onClick);