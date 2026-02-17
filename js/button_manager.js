var buttonScore = 0;
var upg_buttonMaker = 0;
var price_buttonMaker = 10 * (1.5**upg_buttonMaker);
LoadGame();


const btnDisplay = document.querySelector("#nb_buttons");
const makerDisplay = document.querySelector("#nb_btnmakers");
const priceDisplay = document.querySelector("#price");
function UpdateDisplay(){
    btnDisplay.innerText = Math.floor(buttonScore);
    makerDisplay.innerText = Math.floor(upg_buttonMaker);
    priceDisplay.innerText = Math.floor(price_buttonMaker);
}
UpdateDisplay()


function AddButtonToScore(){
    buttonScore++;
    UpdateDisplay();
}
function BuyButtonMaker(){
    if (buttonScore >= Math.floor(price_buttonMaker)){
        buttonScore -= Math.floor(price_buttonMaker);
        price_buttonMaker = 10 * (1.5**upg_buttonMaker);
        upg_buttonMaker++;
        UpdateDisplay();
    }
}

//Timer
setInterval(function(){
    buttonScore += upg_buttonMaker * 0.1;
    UpdateDisplay();
}, 100);
setInterval(function() {
    SaveGame();
}, 5000);


function SaveGame() {
    const gameData = {
        btn: buttonScore,
        btnmaker: upg_buttonMaker,
        price: price_buttonMaker
    };
    localStorage.setItem("buttonGameSave", JSON.stringify(gameData));
}
function ResetGame() {
    buttonScore = 0
    upg_buttonMaker = 0
    price_buttonMaker = 10 * (1.5**upg_buttonMaker)
    UpdateDisplay()
    const gameData = {
        btn: buttonScore,
        btnmaker: upg_buttonMaker,
        price: price_buttonMaker
    };
    localStorage.setItem("buttonGameSave", JSON.stringify(gameData));
}
function LoadGame() {
    const savedData = localStorage.getItem("buttonGameSave");
    if (savedData) {
        const parsedData = JSON.parse(savedData);

        buttonScore = parsedData.btn;
        upg_buttonMaker = parsedData.btnmaker;
        price_buttonMaker = parsedData.price;
    }
}
