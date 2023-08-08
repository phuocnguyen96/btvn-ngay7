var nutButton = document.querySelector(".btnbutton")
var nutDisable = document.querySelector(".btnnhanvao")
var textBox = document.querySelector(".input")

function disabled(){
    nutButton.setAttribute("disabled", "")
    textBox.setAttribute("disabled", "")
    textBox.classList.add("input")
}

nutDisable.addEventListener("click", disabled)