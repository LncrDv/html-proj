const button = document.getElementById("myButton");
const counterDisplay = document.getElementById("counter");

button.addEventListener("click", () => {
    value += 1;
    counterDisplay.textContent = value;
    });