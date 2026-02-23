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

    en ça (par exemple, change le nom de l'upgrade comme tu veux) : 

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
let buttonGeneratorsBought = new Map();

fetch('../clickSfx.mp3')
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
    .then(decodedData => { clickBuffer = decodedData; })
    .catch(err => console.error("Failed to load click sound:", err));

function playClickSound() {
    if (!clickBuffer) return;
    const source = audioContext.createBufferSource();
    source.buffer = clickBuffer;
    source.playbackRate.value = 0.95 + Math.random() * 0.1;
    source.connect(audioContext.destination);
    source.start();
}

// ---------- GENERATOR CLASS ----------
class ButtonGenerator{
    constructor(name, basePrice, cps){
        this.name = name;
        this.basePrice = basePrice;
        this.currentPrice = basePrice;
        this.cps = cps;
    }
    updatePrice(){
        this.currentPrice = this.basePrice * 1.15 ** (buttonGeneratorsBought.get(this.name));
    }
}

// ---------- GENERATORS DATA ----------
const buttonGeneratorsObj = new Map();
buttonGeneratorsObj.set("buttonMaker", new ButtonGenerator("buttonMaker", 15, 0.1));
buttonGeneratorsObj.set("buttonSewer", new ButtonGenerator("buttonSewer", 100, 1));
buttonGeneratorsObj.set("buttonFarm", new ButtonGenerator("buttonFarm", 1100, 8));
buttonGeneratorsObj.set("buttonMine", new ButtonGenerator("buttonMine", 12000, 47));
buttonGeneratorsObj.set("buttonFactory", new ButtonGenerator("buttonFactory", 130000, 260));
buttonGeneratorsObj.set("buttonBank", new ButtonGenerator("buttonBank", 1400000, 1400));
buttonGeneratorsObj.set("buttonTemple", new ButtonGenerator("buttonTemple", 20000000, 7800));
buttonGeneratorsObj.set("buttonWizardTower", new ButtonGenerator("buttonWizardTower", 330000000, 44000));
buttonGeneratorsObj.set("buttonShipment", new ButtonGenerator("buttonShipment", 5100000000, 260000));
buttonGeneratorsObj.set("buttonAlchemyLab", new ButtonGenerator("buttonAlchemyLab", 75000000000, 1600000));
buttonGeneratorsObj.set("buttonPortal", new ButtonGenerator("buttonPortal", 1000000000000, 10000000));
buttonGeneratorsObj.set("buttonTimeMachine", new ButtonGenerator("buttonTimeMachine", 14000000000000, 65000000));
//buttonGeneratorsObj.set("blabla", new ButtonGenerator("blabla", prixInit, cps));

// ---------- GAME LOGIC ----------
function InitializeGeneratorsBought() {
    buttonGeneratorsBought.clear();
    buttonGeneratorsObj.forEach(element => {
        buttonGeneratorsBought.set(element.name, 0);
    });
}

function AddNewButtonGenerator(name) {
    buttonGeneratorsBought.set(name, buttonGeneratorsBought.get(name)+1);
    buttonGeneratorsObj.get(name).updatePrice();
    playClickSound();
}

function FormatNumber(num) {
    if (num < 1000) return Math.floor(num);
    const units = ["K","M","B","T","Qa","Qi","Sx","Sp","Oc","No","Dc","UnDc","DuoDc","TDc"];
    let unitIndex = -1;
    while (num >= 1000 && unitIndex < units.length-1) {
        num /= 1000;
        unitIndex++;
    }
    return num.toFixed(1) + units[unitIndex];
}

// ---------- DISPLAY ----------
let score_Display, cps_display;
let buttonMaker_Display, buttonMaker_price_Display;
let buttonSewer_Display, buttonSewer_price_Display;
let buttonFarm_Display, buttonFarm_price_Display;

function UpdateDisplay(){

    score_Display.innerText = FormatNumber(buttonScore);

    let totalCps = 0;
    buttonGeneratorsBought.forEach((value, key) => {
        totalCps += buttonGeneratorsObj.get(key).cps * value;
    });

    cps_display.innerText = (Math.fround(totalCps*10)/10+"/s");

    buttonMaker_Display.innerText = FormatNumber(buttonGeneratorsBought.get("buttonMaker"));
    buttonMaker_price_Display.innerText = FormatNumber(buttonGeneratorsObj.get("buttonMaker").currentPrice);

    buttonSewer_Display.innerText = FormatNumber(buttonGeneratorsBought.get("buttonSewer"));
    buttonSewer_price_Display.innerText = FormatNumber(buttonGeneratorsObj.get("buttonSewer").currentPrice);

    buttonFarm_Display.innerText = FormatNumber(buttonGeneratorsBought.get("buttonFarm"));
    buttonFarm_price_Display.innerText = FormatNumber(buttonGeneratorsObj.get("buttonFarm").currentPrice);

    buttonMine_Display.innerText = FormatNumber(buttonGeneratorsBought.get("buttonMine"));
    buttonMine_price_Display.innerText = FormatNumber(buttonGeneratorsObj.get("buttonMine").currentPrice);

    buttonFactory_Display.innerText = FormatNumber(buttonGeneratorsBought.get("buttonFactory"));
    buttonFactory_price_Display.innerText = FormatNumber(buttonGeneratorsObj.get("buttonFactory").currentPrice);

    buttonBank_Display.innerText = FormatNumber(buttonGeneratorsBought.get("buttonBank"));
    buttonBank_price_Display.innerText = FormatNumber(buttonGeneratorsObj.get("buttonBank").currentPrice);

    buttonTemple_Display.innerText = FormatNumber(buttonGeneratorsBought.get("buttonTemple"));
    buttonTemple_price_Display.innerText = FormatNumber(buttonGeneratorsObj.get("buttonTemple").currentPrice);

    buttonWizardTower_Display.innerText = FormatNumber(buttonGeneratorsBought.get("buttonWizardTower"));
    buttonWizardTower_price_Display.innerText = FormatNumber(buttonGeneratorsObj.get("buttonWizardTower").currentPrice);

    buttonShipment_Display.innerText = FormatNumber(buttonGeneratorsBought.get("buttonShipment"));
    buttonShipment_price_Display.innerText = FormatNumber(buttonGeneratorsObj.get("buttonShipment").currentPrice);

    buttonAlchemyLab_Display.innerText = FormatNumber(buttonGeneratorsBought.get("buttonAlchemyLab"));
    buttonAlchemyLab_price_Display.innerText = FormatNumber(buttonGeneratorsObj.get("buttonAlchemyLab").currentPrice);

    buttonPortal_Display.innerText = FormatNumber(buttonGeneratorsBought.get("buttonPortal"));
    buttonPortal_price_Display.innerText = FormatNumber(buttonGeneratorsObj.get("buttonPortal").currentPrice);

    buttonTimeMachine_Display.innerText = FormatNumber(buttonGeneratorsBought.get("buttonTimeMachine"));
    buttonTimeMachine_price_Display.innerText = FormatNumber(buttonGeneratorsObj.get("buttonTimeMachine").currentPrice);


    document.querySelectorAll("#perks button").forEach((button, index) => {
    const perk = unlockablePerks[index];
    if (!perk) {
        button.parentElement.parentElement.style.display = "none";
        return;
    };
    button.parentElement.parentElement.style.display = "";
    button.textContent = `${perk.name} (${FormatNumber(perk.price)})`;
    });

}

// ---------- CLICK HANDLERS ----------
var mouseMultiplier = 1;
function AddButtonToScore(){
    buttonScore += mouseMultiplier;
    playClickSound();
    UpdateDisplay();
}

function BuyButtonGenerator(genName){
    const price = Math.floor(buttonGeneratorsObj.get(genName).currentPrice);
    if (buttonScore >= price){
        buttonScore -= price;
        AddNewButtonGenerator(genName);
        UpdateDisplay();
    }
}

// ---------- UPDATE IN BG ----------
let lastUpdate = Date.now();

function GameLoop(){
    const now = Date.now();
    const delta = (now - lastUpdate) / 1000;
    lastUpdate = now;

    let totalCps = 0;
    buttonGeneratorsBought.forEach((amount, key) => {
        totalCps += buttonGeneratorsObj.get(key).cps * amount;
    });

    buttonScore += totalCps * delta;
    UpdateDisplay();
}

setInterval(GameLoop, 50);

// ---------- SAVE ----------
setInterval(SaveGame, 60000);

function SaveGame() {

    const gameData = {
        _buttonScore: buttonScore,
        _buttonMaker: buttonGeneratorsBought.get("buttonMaker"),
        _buttonSewer: buttonGeneratorsBought.get("buttonSewer"),
        _buttonFarm: buttonGeneratorsBought.get("buttonFarm"),
        _buttonMine: buttonGeneratorsBought.get("buttonMine"),
        _buttonFactory: buttonGeneratorsBought.get("buttonFactory"),
        _buttonBank: buttonGeneratorsBought.get("buttonBank"),
        _buttonTemple: buttonGeneratorsBought.get("buttonTemple"),
        _buttonWizardTower: buttonGeneratorsBought.get("buttonWizardTower"),
        _buttonShipment: buttonGeneratorsBought.get("buttonShipment"),
        _buttonAlchemyLab: buttonGeneratorsBought.get("buttonAlchemyLab"),
        _buttonPortal: buttonGeneratorsBought.get("buttonPortal"),
        _buttonTimeMachine: buttonGeneratorsBought.get("buttonTimeMachine"),

        _lastTime: Date.now()
    };

    localStorage.setItem("buttonGameSave", JSON.stringify(gameData));
}

// ---------- LOAD ----------
function LoadGame() {

    const savedData = localStorage.getItem("buttonGameSave");
    if (!savedData) return;

    const parsedData = JSON.parse(savedData);

    buttonScore = parsedData._buttonScore ?? 0;
    buttonGeneratorsBought.set("buttonMaker", parsedData._buttonMaker ?? 0);
    buttonGeneratorsBought.set("buttonSewer", parsedData._buttonSewer ?? 0);
    buttonGeneratorsBought.set("buttonFarm", parsedData._buttonFarm ?? 0);
    buttonGeneratorsBought.set("buttonMine", parsedData._buttonMine ?? 0);
    buttonGeneratorsBought.set("buttonFactory", parsedData._buttonFactory ?? 0);
    buttonGeneratorsBought.set("buttonBank", parsedData._buttonBank ?? 0);
    buttonGeneratorsBought.set("buttonTemple", parsedData._buttonTemple ?? 0);
    buttonGeneratorsBought.set("buttonWizardTower", parsedData._buttonWizardTower ?? 0);
    buttonGeneratorsBought.set("buttonShipment", parsedData._buttonShipment ?? 0);
    buttonGeneratorsBought.set("buttonAlchemyLab", parsedData._buttonAlchemyLab ?? 0);
    buttonGeneratorsBought.set("buttonPortal", parsedData._buttonPortal ?? 0);
    buttonGeneratorsBought.set("buttonTimeMachine", parsedData._buttonTimeMachine ?? 0);

    buttonGeneratorsObj.get("buttonMaker").updatePrice();
    buttonGeneratorsObj.get("buttonSewer").updatePrice();
    buttonGeneratorsObj.get("buttonFarm").updatePrice();
    buttonGeneratorsObj.get("buttonMine").updatePrice();
    buttonGeneratorsObj.get("buttonFactory").updatePrice();
    buttonGeneratorsObj.get("buttonBank").updatePrice();
    buttonGeneratorsObj.get("buttonTemple").updatePrice();
    buttonGeneratorsObj.get("buttonWizardTower").updatePrice();
    buttonGeneratorsObj.get("buttonShipment").updatePrice();
    buttonGeneratorsObj.get("buttonAlchemyLab").updatePrice();
    buttonGeneratorsObj.get("buttonPortal").updatePrice();
    buttonGeneratorsObj.get("buttonTimeMachine").updatePrice();

    // ---- OFFLINE PROGRESS ----
    if(parsedData._lastTime){
        const secondsAway = (Date.now() - parsedData._lastTime)/1000;

        let totalCps = 0;
        buttonGeneratorsBought.forEach((amount, key) => {
            totalCps += buttonGeneratorsObj.get(key).cps * amount;
        });

        buttonScore += totalCps * secondsAway;
    }
}

// ---------- RESET ----------
function ResetGame() {
    buttonScore = 0;
    InitializeGeneratorsBought();
    SaveGame();
    UpdateDisplay();
    location.reload();
}
// ---------- PERKS ---------
class Perk {
    constructor(name, price, modifiers) {
        this.name = name
        this.price = price
        this.modifiers = modifiers
    }
    applyPerk()
    {
        this.modifiers.forEach((value, key) => 
        {
            switch(key)
            {
                case "mouse":
                    mouseMultiplier += value;
                    break;
                case "timesMouse":
                    mouseMultiplier *= value;
                    break;
                default:
                    console.log("Undefined modifier : "+key);
                    break;

            }
        });
    }
}
allPerks = new Map();
allPerks.set("Reinforced Index Finger", new Perk("Reinforced Index Finger", 100, new Map([["timesMouse",2]])));
allPerks.set("Carpal Tunnel Prevention Cream", new Perk("Carpal Tunnel Prevention Cream", 500, new Map([["timesMouse",2]])));
allPerks.set("Ambidextrous", new Perk("Ambidextrous", 1000, new Map([["timesMouse",2]])));
allPerks.set("Thousand Fingers", new Perk("Thousand Fingers", 5000, new Map([["timesMouse",2]])));
allPerks.set("Million Fingers", new Perk("Million Fingers", 100000, new Map([["timesMouse",2]])));
allPerks.set("Billion Fingers", new Perk("Billion Fingers", 10000000, new Map([["timesMouse",2]])));

unlockablePerks = []
allPerks.forEach(perk => unlockablePerks.push(perk));
function BuyPerk(perkNumber)
{
    if (perkNumber < 0 || perkNumber >= unlockablePerks.length) return;
    console.log("Trying to buy perk : "+unlockablePerks[perkNumber].name);
    if (buttonScore >= unlockablePerks[perkNumber].price)
    {
        buttonScore -= unlockablePerks[perkNumber].price;
        console.log("Bought perk : "+unlockablePerks[perkNumber].name);
        unlockablePerks[perkNumber].applyPerk();

        allPerks.delete(unlockablePerks[perkNumber].name);
        unlockablePerks.splice(perkNumber,1);
        
        UpdateDisplay();
        return;
    }
    console.log("Not enough button to buy perk : "+unlockablePerks[perkNumber].name);

}
// ---------- DOM READY ----------
document.addEventListener("DOMContentLoaded", () => {

    score_Display = document.querySelector("#nb_score");
    cps_display = document.querySelector("#cps_display");

    buttonMaker_Display = document.querySelector("#nb_buttonMaker");
    buttonMaker_price_Display = document.querySelector("#price_buttonMaker");

    buttonSewer_Display = document.querySelector("#nb_buttonSewer");
    buttonSewer_price_Display = document.querySelector("#price_buttonSewer");

    buttonFarm_Display = document.querySelector("#nb_buttonFarm");
    buttonFarm_price_Display = document.querySelector("#price_buttonFarm");

    buttonMine_Display = document.querySelector("#nb_buttonMine");
    buttonMine_price_Display = document.querySelector("#price_buttonMine");

    buttonFactory_Display = document.querySelector("#nb_buttonFactory");
    buttonFactory_price_Display = document.querySelector("#price_buttonFactory");

    buttonBank_Display = document.querySelector("#nb_buttonBank");
    buttonBank_price_Display = document.querySelector("#price_buttonBank");

    buttonTemple_Display = document.querySelector("#nb_buttonTemple");
    buttonTemple_price_Display = document.querySelector("#price_buttonTemple");

    buttonWizardTower_Display = document.querySelector("#nb_buttonWizardTower");
    buttonWizardTower_price_Display = document.querySelector("#price_buttonWizardTower");

    buttonShipment_Display = document.querySelector("#nb_buttonShipment");
    buttonShipment_price_Display = document.querySelector("#price_buttonShipment");

    buttonAlchemyLab_Display = document.querySelector("#nb_buttonAlchemyLab");
    buttonAlchemyLab_price_Display = document.querySelector("#price_buttonAlchemyLab");

    buttonPortal_Display = document.querySelector("#nb_buttonPortal");
    buttonPortal_price_Display = document.querySelector("#price_buttonPortal");

    buttonTimeMachine_Display = document.querySelector("#nb_buttonTimeMachine");
    buttonTimeMachine_price_Display = document.querySelector("#price_buttonTimeMachine");

    perkButtonParent  = document.querySelector("#perks");

    document.querySelectorAll(".upgrade-item button").forEach(btn => {
        btn.addEventListener("click", playClickSound);
    });

    document.querySelectorAll("#perks button").forEach((button, i) => {
        button.addEventListener("click", () => BuyPerk(i));
    });

    // IMPORTANT ORDER
    InitializeGeneratorsBought();
    LoadGame();
    UpdateDisplay();
});