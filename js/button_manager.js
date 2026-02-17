var btn = 0;
var btnmaker = 0;
var price = 10 * (1.5**btnmaker);
loadGame();


const btnDisplay = document.querySelector("#nb_buttons");
const makerDisplay = document.querySelector("#nb_btnmakers");
const priceDisplay = document.querySelector("#price");
function updateDisplay(){
    btnDisplay.innerText = Math.floor(btn);
    makerDisplay.innerText = Math.floor(btnmaker);
    priceDisplay.innerText = Math.floor(price);
}
updateDisplay()


function addbtn(){
    btn++;
    updateDisplay();
}
function getbtnmaker(){
    if (btn >= Math.floor(price)){
        btn -= Math.floor(price);
        price = 10 * (1.5**btnmaker);
        btnmaker++;
        updateDisplay();
    }
}


setInterval(function(){
    btn += btnmaker * 0.1;
    updateDisplay();
}, 100);
setInterval(function() {
    saveGame();
}, 5000);


function saveGame() {
    const gameData = {
        btn: btn,
        btnmaker: btnmaker,
        price: price
    };
    localStorage.setItem("buttonGameSave", JSON.stringify(gameData));
}
function resetGame() {
    btn = 0
    btnmaker = 0
    price = 10 * (1.5**btnmaker)
    updateDisplay()
    const gameData = {
        btn: btn,
        btnmaker: btnmaker,
        price: price
    };
    localStorage.setItem("buttonGameSave", JSON.stringify(gameData));
}
function loadGame() {
    const savedData = localStorage.getItem("buttonGameSave");
    if (savedData) {
        const parsedData = JSON.parse(savedData);

        btn = parsedData.btn;
        btnmaker = parsedData.btnmaker;
        price = parsedData.price;
    }
}
