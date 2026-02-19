/*
Salut !
J'ai apporté des modifs au code et je vais t'expliquer comment ajouter un nouveau générateur donc accroche toi bien

1) HTML
    Dans le code HTML, tu peux maintenant retrouver "<ul id="upgrades">" et "<li class="upgrade-item">"
    Ce sont les classes du porteur de boutons et des boutons, respectivement
    (quand je dis bouton je parle du bouton, du nom de l'upgrade etc.)
    Pour créer un nouveau bouton et son upgrade respective, tu vas devoir transformer ca :

    <li class="upgrade-item">
        <div>
            <button id="get_btnmakers" onClick="BuyButtonGenerator('buttonMaker')" class="buffer">Get a button maker</button>
            <h3 class="buffer">&nbsp;Button makers :&nbsp;</h3>
            <h3 class="buffer"><span id="nb_buttonMaker" class="counter">0</span></h3>
            <br/>
            <h3 class="buffer">&nbsp;Price :&nbsp;</h3>
            <h3 class="buffer"><span id="price_buttonMaker" class="counter">0</span></h3>
        </div>
    </li>

    en ca (par exemple, change le nom de l'upgrade comme tu veux) : 

    <li class="upgrade-item">
        <div>
            <button id="get_blablas" onClick="BuyButtonGenerator('blabla')" class="buffer">Get a blabla </button>
            <h3 class="buffer">&nbsp;Blablas :&nbsp;</h3>
            <h3 class="buffer"><span id="nb_blabla" class="counter">0</span></h3>
            <br/>
            <h3 class="buffer">&nbsp;Price :&nbsp;</h3>
            <h3 class="buffer"><span id="price_blabla" class="counter">0</span></h3>
        </div>
    </li>

    C'est ce code qui ajoute une nouvelle upgrade sur le site

    Maintenant, on passe au code

2) JAVASCRIPT

    Y'a plein de trucs a ajouter...
    Un peu partout dans le code j'ai annoté un exemple de ce qui doit être changé avec l'exemple blabla.
    NB : Les endroits avec une syntaxe différente (par exemple dans LoadSave y'a _blabla) doivent être respectés PARFAITEMENT !
    ex: si y'a marqué _blabla = blabla, remplacez par _blibli = blibli ou _blublu = blublu


Voila voila...
Si jamais des modifs seraient apportées, merci de aussi modifier les exemples dans le code, pour ceux qui vienent après :)

                                                                    .::...::.  .:.:.......:::. .... .:.  -*+ .:.::==++=-=--:-***+-:::--:-.:--:      @#########%####@%=
         ::.: .     ..   ..  .    ...... .  ...::.-:.     ....=:=*#*#+***+==**+++***#*******+=+++=*+=*#*%@%-+**+#%%%%@%**+#@%*+***@@%**#%###*%%+:.. @@@%@%%%%%%%@%%#%*
 . .   ..   .  .  . . .        ...   ....  ... ..:..::.      -#++***+++*+=++++******+++++++++++=#-++##=%@%-=%#+#%%%%%%+**%*+*#*##*+=****+*#%##%@#++ -@@+#@@%%%@%%@@%%#
     ...  .  :.        ....  . .         ..   .....:. .:.   :#=#*#*+***==++*%%**++++=++++=+=+**-++#+*+#%%-+#*+%%%%%%%#*%*++@%*#=+=*:+:##*%%####%@*= :@@%%%%%%%%@%%%%%#
   :    ...     :... : .   . .           .....  .. ........++==***=*++=*=###++*+=----==++=++*=-+##+=%=@@+=%+#%%%%%%##++**@%%**+=*++-+###*++#@%%%%@@.  -%#@%%%%%%%%%%%#
     . . ..  =  . .:  .                    ......    . ...%::*=#==#+*+#*##*=++==*##%**=+=*==--+#+=+=+*%#-*=%#%%%@@@%##%@%%%#+++++-+%#*++%@@@%#####%-.  @@%%%%%%%%%%%%#
 : :.:.  .    .:.   : .: ..  .                  .... .   # .*-++%#+++%*##*+*#*+*#-..=@@#==+==##+==*+-%#*+=@##%%@@%%@@@%%@@##++*+*%*++%@@*****%%@@@@.:.::@%%###%%%%%%##
        -.. .     .  - ..  .                       . .  =. .#*##===**=***+#*+++=-*@@@*=-==-##***=-+*-%#*==##%%%%::.:-#@+%#%@%##%#+*@#+==*%%@@@#*#%:.-  #@#%%%%%%#%%%%#
 . :. .   . .     ..  .. . .: .               ...       ==#%#**+=+@*##****+-=+=+#%%*=*#+=+#**+=*+=-#:@#*+#%#@#+         .+#%@%@%#%***#%%%%%%@%%@%=..   @@@%%%%%%%%%%%*
     .   ::.:.:....   ......     ....          . .+=%@@@#=*##+*+*@%==***=+==*+##%#**+#++=+*=*-*++-=*-%=+#%**=:             . .=*@%%%#%%@@@@@@%%@*#*.:%  *#*#%%#%%%#%%+
 :::.      :. :      ..:  .  ....     .. ..          :  -#%#++++%*--:##-+++++#%###+***+*=+#%=*+--+=+-@+%*+-=.               ..  :-+%@%#*#*#%%%%%%%@-.  @@*%%###%%%%%%*
    ...: . .. -.:: ..      .  . .     .   .        .*. :**+++++**++#*=-**+-#%%##*+++*-:=@@-=++--+=-#=+##*=:.   .            ......-===+****%%%%%%#@#-   @@**###%##%%%+
        .        . . .=... ..   . ....  . .    ..  =..=#*=-**#**#++--*#+==#%%##*+=#%#%@@=-:--=:==#%@=@@%-:          .  ..  ........---=++*+%%%%%%%@%:   @####*###*###+
 ..   .:.  -:  --#: :       ..: ...   ...  ..  ..  +:+*-=**#++=+=.+*+-***#%+##+#@@%%#+-:--*+:-=*%%#@@@                   .    ...-:-::-=++=%%%%%%@#*.   %%##***###%++-
 .- :.    . : = =   .  . ..     .  :.....      .   =+++**@+#*++++=+*###%%%*#+==%#+--::--++=:=#@%%#@@      %:-#+             .:::==-=:.-+*-*@%%%@@@=+:  .%*#*####**##+:
           ::  .-.: = :..   ..        .   ..     ::==#*#*##*+++*%%#**+++=--=+*+=-=-=-*++=.+#@@@%%.+   @@@@@@@@@@@@=         ....---.:==++-@@%%%@#*:   =%@##*+*#*%##%*=
       . .. ...   .      .-. .. ..     .   ...     -*+***##+=+###*#%#+:-=:--:.--=-+++*-.#@@@%-  %  -@@%+:=*@@@%@@@@@@=        ...:..:-=++.@@@%+-  .   +@*=-+**#++*+#*=
       ..   . ..  :  -. :.. .  .  .  .   .   ::-==-+#+***##+*###*#+:::-**=+++*+=-=+#=:#@@=.  *+               .-+#%@@@@#-..:...::.:--:+@.#@%*--%    +--#+***++++***#*-
          :.  :  . #    :  .:. .  .  . ..      .. .++*##*#**#+**+=-.@@@%@@%*=+#@@@@==@%..:+.     :#@@#.   ..--*#+-=**#@@@@*:--=+. .  --. @@%*+@#     +=+-++*+**==++++:
            .    : .:   . .              .     .  *-:#+%##*==:+**++@%++*#+:%@@@%@@==@= .      ..-%=  @@@@*@@%@@@@@@@%##%##@@@@%  .. ..   @%*#@%  . : ==----++++:=++=+ 
               .      .       . . -. ..  . :.  .::= -==*+**=++++==*%+.*#=#%%##*- .*#..:                 =%*-=  .*=*%%%%%%@@%.    .. ::   @#@@=     +=----+:-:-==++-== 
     .           . ....    .... .   .           .-# -::+*+=+==+%*=-=+=%*###:   - #@=:.                   .  :+*+*@=@@@*-:.....:+@@@@@@@@ @@*    *+-+.-+=:=-=:-=--+=== 
  ...             .   . ...              .        *=--#+=*++@@@#:=+*+:=#@%#* +*%..@=. :.                 .:#***==*:   ..   --%@@@@@%@%@@*#.  .+ *+:..:- -+--===:-:-*+ 
    ....           .     .-. ... .:. ..     .      .+*+****=+*:.*@%*:#-: -#@*. -  -%+  ...           .  ...:=+*%%*....     .=@@@@@%%@@@.   .:+*- -:--:-------:-+---:. 
 ..   ....           .      .:. :  :..:  ........  :+%%#*+*+=#@@@##%#  =*:    ..   .-=:....            ..-=*+#+    .       :=@@%%##@@.%+:==.:. :::.:: :::--:-*:-:==-- 
  ...  .            .         ...::  ..   .      :+ #. -++**==+++=%*%@#       -:....                 :.-=::==:             . @%%%%@@..    :......::.:-.: ..:-.:+=--=+ 
 ..   . ..                .. .... ......:-  .  :.::.  -+*%+%@%+*%#@+*+@@*    =#.::. .     .         ..:--=*:.              - @#%@@= :   - . ........:..-::-.:::.--=:- 
  -:..                     .. .   ..:-..  .:.   .       +*+%#*+*%*+*@%@@@@*@@@#-::. .     .       ..::....       ..--      + @%#%   *   -:.    ...:.....::-.::=::::=+ 
 . ....:                     .... ..  .. :..::..      *:*#*+#%@%++######. .  -....  . .                      -@@@@@.  .    = @#%=.    =+:        . ....:..:.--..:-.:- 
 : .  :...                 ... . ..  ::::.:.   ...  -#=#**+++==-*%##*%:.     :+:-::..     .       ......:+#%#- %.     ..   + @@@*= @ +:.. ....  . .... ..:..::.-- .:: 
 +-:    - .               .  ..  .... :   ...-:.:. :=-*+*%@*#@@@@+=++:-# .. .:#:.:..- ..:..    .               *+:         .  @%% +  :.              .......:.-:..::. 
 :.:.=  : .....                :...  :.. .:.:...  :=.%%%@#***+#%@@@@@@.    . -*=-: .:.. :..:....  =+@@@@*.       -@@@.     .  @@.   :.                 . ......::--:: 
 =-:#*.::..  ....                .  .:. . ..  ...=*-*#%*%#*+%%##**%@.      ..:+==:=-:...-+-...   @@@*+=*%%@@@@@@@#%%@%#.  .* @@-    :........      ..   . .....: .::. 
 +=+*==.. ..   .  :.              .:: .  :.. .::.-:*:.#+#*%%%###*+##@@@.   - .*#-:-..-==:       *+-=#@@@@@%++=+++-=*%%@#####@@-  - :..  . ......    .     .. .. :. .  
 -:  .:.+-  - .     .                .   :: :   : -. .=.+%%#%#*+***::+#@@#   ..%#+=:*+:    ..  *-##@%@=  +@@@*+=+*=-**#@@%@ @   ..   .  .  ... ...     ...    .:....: 
 -@. ::=+--.-:  .     ..             .-:-    :     .  *@@%%@%%@###%%++:-=#@%   +@#+*:-.:..::.=:++=-+:.      *@@@@%###*#*#*@-  ........      .. ...... .     ....  ::  
-*# +-  :=--     .                              :#@@@@@*#**-*%@@@@@@%%%#*+*#@@   :*+++#+*+*:##+-....          :-=*@%%%%%%@%   :    ......   ... ..  ... ... .. -:.    
+%@##+@*%=::=*=%+- ..    ::  -:        - :--@@@@@@@@%%#%#####***#%%%@@@%######@@=***=+*##+#*+: ..:-.        +:  .:---**#@@# :=    .  .... ....    .......  ..       : 
 =-@---+#*#.== -:...  :=   -:   .-  .    %@#-=.:..+=-==*%#@%##**=++**#%@@@@##%###%=*@@*+***+#==: - .:=*: =++:+%@*. .:-*%@- .+: .      ..:-:...:... . : ...   ..   . . 
 -.+@@*:---@#= ==.-+:. :==:. ..       %@@@@@@@@@@@@@@@@@+.  -#@@@#++=++==#%@@%%#%%*#*:%@@*#*#*#=*+=-..:.....-=+%#@@@@#@@: =:...::.      .:--:...:......:...::         
  . =@@@*.+%*@=.-.    +..         .@@@@%#*######%@@@%%@@@@@@@#: .#%@%#+***++*#%@%%%#%%@+*#@#*###*#=*** *:    ::..-+*#@@  -.......: .       --=-...--.....::.....      
 +-*+-=*@@#  @@% . ::-++.:+     #@@@@@@%@###%@%####*#+*-:.::--##@@#=.%%%##++++=+*%%%%#%%%#*%%%+###**#%.*-. ...-+++**@@  =.  .... ..::: .    .:==-:...-::.:.:::.:..    
 *#+==:=: #@+  .=@@ .. *=-:-  #@@@%%##%#%%####%#%*#####*++*===+--:-+#@%+*#%@@###++**#@@%@%%#*%%%#*#**#++#*+=+*##****%+  =:.. . ...  .. :.     .--=--:-.:::-::.-:..:.  
 *=*@@%##+  *@@+  *%@-- .  =%@@@#%%%%%#%##%####*%*%#*#%#*#**=#%**#+*-==+#%=-%%%%%%%**#*%@%@%%*#@@@@###++=+#***#**+#@#: .: .. ....:+=...::: .  . :-=+=.:--..:----:--:. 
 %-@*%@@@*     #%    -..%@@@@@%%#####%%%%%%%#%%#%**#*#%##%#*+##**%**#%**+*%@%:*##%%%%%=+#%@%%%%#:*@@@@@%#*++**#+#*@@* .-:     .     .:.  ..:::   .:.-=-. :=-. .-=-:-: 
  .-#%%+= =@@:=: ##-%@@@@@@%#%%%%%%%%%%#####*****+++***+*+#%@@%++=*#*%#*#%*=#%@=*#####%@#+#%%%%@@%:+@@@@%%####%@@@#   =.:  ::......:.. :.-..::...  .--=:-:.::=:. :--- 
@@#-#%#**+*#=-=-#@@@@@%###%#%%@@@%%##%%%%@#*#****#*###**##****#%*%@#=+*+#*#****#@++%%*#%%%%*+#%#%@@@#+%@@%%#***@=-: ==. .    .: .. ...   ::-. .:-:  ..==+.-=:==:=-:.- 
#@@@*#+%@+*@@@@@@@@%%#%%%%%%%%##@%%%%%#***##%%%@@@@@%@@@%###########%%@@++#**#*+*#%@=#*#%%%%@%*%%@%%%%#+@@@@%@%-    . .  .:  .  ..   ::.-  .-*...:..-.. +===:--=+===: 
##@@@@#@@@@@@@@%%%%%@@%@%%%%%%%%%##%##%%%@@##*#####-:*-+*#*#***#%######%@@%*+%#*##**#@+%%#%%%%%%%###%@@@#=%@@@@@@@   .  -: . .:. : ..-.:.:.-  =:..::-:-: +- .:+-:+=+= 
%@@@@@@@@@%@%%%%%%%%%%@%@%%%#%####%%######@@@@#**==*+**+*#@@@@@#**######%%%@%###*%#***#%+#%#%%%%%@%@##%@@@@=+@%@@@@%   .. .-.: .::: :..: . ...:..*.::::..::=+=-..--:= 
#%#%#%#**####***************#*****+****+--:...------:::-::......:=#*--==-=+*+*==+++=+*+-++-*++*######*##**##%* %###@@%                                                
*/

var buttonScore = 0;

// ---------- AUDIO SETUP ----------
let clickBuffer;
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

fetch('../clickSfx.mp3')
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
    .then(decodedData => { clickBuffer = decodedData; })
    .catch(err => console.error("Failed to load click sound:", err));

function playClickSound() {
    if (!clickBuffer) return;

    const source = audioContext.createBufferSource();
    source.buffer = clickBuffer;
    source.playbackRate.value = 0.95 + Math.random() * 0.1; // pitch variation 0.95-1.05
    source.connect(audioContext.destination);
    source.start();
}

// ---------- GENERATOR CLASS ----------
class ButtonGenerator{
    constructor(name, basePrice, cps)
    {
        this.name = name;
        this.basePrice = basePrice;
        this.currentPrice = basePrice;
        this.cps = cps;
    }

    updatePrice()
    {
        this.currentPrice = this.basePrice * 1.15**(buttonsGeneratorsBought.get(this.name));
    }
}

// ---------- GAME LOGIC ----------
function AddNewButtonGenerator(name) {
    buttonsGeneratorsBought.set(name, buttonsGeneratorsBought.get(name)+1);
    buttonGeneratorsObj.get(name).updatePrice();
    playClickSound(); // play sound when buying an upgrade
}

function formatNumber(num) {
    if (num < 1000) return Math.floor(num);
    const units = ["K", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc", "No", "Dc", "UnDc", "DuoDc", "TDc"];
    let unitIndex = -1;
    while (num >= 1000 && unitIndex < units.length - 1) {
        num /= 1000;
        unitIndex++;
    }
    return num.toFixed(1) + units[unitIndex];
}

function UpdateDisplay(){
    score_Display.innerText = formatNumber(buttonScore);
    totalCps = 0;
    buttonsGeneratorsBought.forEach((value, key) => {
        totalCps += buttonGeneratorsObj.get(key).cps * value;
    });
    cps_display.innerText = (Math.fround(totalCps*10)/10+"/s");

    buttonMaker_Display.innerText = formatNumber(buttonsGeneratorsBought.get("buttonMaker"));
    buttonMaker_price_Display.innerText = formatNumber(buttonGeneratorsObj.get("buttonMaker").currentPrice);
    buttonSewer_Display.innerText = formatNumber(buttonsGeneratorsBought.get("buttonSewer"));
    buttonSewer_price_Display.innerText = formatNumber(buttonGeneratorsObj.get("buttonSewer").currentPrice);
    buttonFarm_Display.innerText = formatNumber(buttonsGeneratorsBought.get("buttonFarm"));
    buttonFarm_price_Display.innerText = formatNumber(buttonGeneratorsObj.get("buttonFarm").currentPrice);
}

// ---------- DISPLAY ELEMENTS ----------
let score_Display, cps_display;
let buttonMaker_Display, buttonMaker_price_Display;
let buttonSewer_Display, buttonSewer_price_Display;
let buttonFarm_Display, buttonFarm_price_Display;

document.addEventListener("DOMContentLoaded", () => {
    score_Display = document.querySelector("#nb_score");
    cps_display = document.querySelector("#cps_display");

    buttonMaker_Display = document.querySelector("#nb_buttonMaker");
    buttonMaker_price_Display = document.querySelector("#price_buttonMaker");
    buttonSewer_Display = document.querySelector("#nb_buttonSewer");
    buttonSewer_price_Display = document.querySelector("#price_buttonSewer");
    buttonFarm_Display = document.querySelector("#nb_buttonFarm");
    buttonFarm_price_Display = document.querySelector("#price_buttonFarm");

    // Attach sound to all upgrade buttons
    document.querySelectorAll(".upgrade-item button").forEach(btn => {
        btn.addEventListener("click", playClickSound);
    });

    LoadGame();
    UpdateDisplay();
});

// ---------- GENERATORS DATA ----------
const buttonGeneratorsObj = new Map();
buttonGeneratorsObj.set("buttonMaker",(new ButtonGenerator("buttonMaker", 15, 0.1)));
buttonGeneratorsObj.set("buttonSewer",(new ButtonGenerator("buttonSewer", 100, 1)));
buttonGeneratorsObj.set("buttonFarm",(new ButtonGenerator("buttonFarm", 1100, 8)));

let buttonsGeneratorsBought = new Map();
buttonsGeneratorsBought.set("buttonMaker", 0);
buttonsGeneratorsBought.set("buttonSewer", 0);
buttonsGeneratorsBought.set("buttonFarm", 0);

// ---------- CLICK HANDLERS ----------
function AddButtonToScore(){
    buttonScore++;
    playClickSound(); // main button click sound
    UpdateDisplay();
}

function BuyButtonGenerator(genName){
    if (buttonScore >= Math.floor(buttonGeneratorsObj.get(genName).currentPrice)){
        buttonScore -= Math.floor(buttonGeneratorsObj.get(genName).currentPrice);
        AddNewButtonGenerator(genName);
        UpdateDisplay();
    }
}

// ---------- CPS TICKER ----------
var updPerSec = 100;
var interval = 1000 / updPerSec;

setInterval(() => {
    let totalCps = 0;
    buttonsGeneratorsBought.forEach((amount, key) => {
        totalCps += buttonGeneratorsObj.get(key).cps * amount;
    });

    buttonScore += totalCps / updPerSec; // updPerSec ticks per second
    UpdateDisplay();
}, interval);

// ---------- AUTO SAVE ----------
setInterval(SaveGame, 1*60*1000); // every 1 minute

function SaveGame() {
    const gameData = {
        _buttonScore: buttonScore,
        _buttonMaker: buttonsGeneratorsBought.get("buttonMaker"),
        _buttonSewer : buttonsGeneratorsBought.get("buttonSewer"),
        _buttonFarm: buttonsGeneratorsBought.get("buttonFarm")
    };
    localStorage.setItem("buttonGameSave", JSON.stringify(gameData));
    UpdateDisplay();
}

// ---------- RESET ----------
function ResetGame() {
    buttonScore = 0;
    buttonsGeneratorsBought.set("buttonMaker",0);
    buttonsGeneratorsBought.set("buttonSewer",0);
    buttonsGeneratorsBought.set("buttonFarm",0);
    SaveGame();
    UpdateDisplay();
}

// ---------- LOAD ----------
function LoadGame() {
    const savedData = localStorage.getItem("buttonGameSave");
    if (!savedData) return;

    const parsedData = JSON.parse(savedData);

    buttonScore = parsedData._buttonScore ?? 0;
    buttonsGeneratorsBought.set("buttonMaker", parsedData._buttonMaker ?? 0);
    buttonsGeneratorsBought.set("buttonSewer", parsedData._buttonSewer ?? 0);
    buttonsGeneratorsBought.set("buttonFarm", parsedData._buttonFarm ?? 0);

    buttonGeneratorsObj.get("buttonMaker").updatePrice();
    buttonGeneratorsObj.get("buttonSewer").updatePrice();
    buttonGeneratorsObj.get("buttonFarm").updatePrice();

    UpdateDisplay();
}
