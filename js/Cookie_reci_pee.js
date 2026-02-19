const button = document.querySelector("#cookieCounter");
const counterDisplay = document.querySelector("#counter");

var value = 1
button.addEventListener("click", () => {
    value += 1;
    UpdateDisplay();
    });

function UpdateDisplay() {
    counterDisplay.innerText = value;
    document.querySelector("#ingredient1").textContent = 30*value;
    document.querySelector("#ingredient2").textContent = 1*value;
    document.querySelector("#ingredient3").textContent = 1*value;
    document.querySelector("#ingredient4").textContent = 5*value;
    document.querySelector("#ingredient5").textContent = 15*value;
    document.querySelector("#ingredient6").textContent = 15*value;
    document.querySelector("#ingredient7").textContent = 1*value;
    document.querySelector("#ingredient8").textContent = 1*value;
    document.querySelector("#ingredient9").textContent = 20*value;
}