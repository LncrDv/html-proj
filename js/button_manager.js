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
function AddNewButtonGenerator(name)
{
    buttonsGeneratorsBought.set(name,buttonsGeneratorsBought.get(name)+1);
    buttonGeneratorsObj.get(name).updatePrice();
    StartButtonMakerTimer();
}
function UpdateDisplay(){
    score_Display.innerText = Math.floor(buttonScore);
    totalCps = 0
    buttonsGeneratorsBought.forEach((value, key) => {
        totalCps += buttonGeneratorsObj.get(key).cps * value
    })
    cps_display.innerText = (Math.fround(totalCps*10)/10+"/s")

    buttonMaker_Display.innerText = Math.floor(buttonsGeneratorsBought.get("buttonMaker"));
    buttonMaker_price_Display.innerText = Math.floor(buttonGeneratorsObj.get("buttonMaker").currentPrice);
    buttonFarm_Display.innerText = Math.floor(buttonsGeneratorsBought.get("buttonFarm"));
    buttonFarm_price_Display.innerText = Math.floor(buttonGeneratorsObj.get("buttonFarm").currentPrice);
    // blabla_Display.innerText = Math.floor(buttonsGeneratorsBought.get("blabla"));
    // blabla_price_Display.innerText = Math.floor(buttonGeneratorsObj.get("blabla").currentPrice);
    
    

}

let score_Display;
let cps_display;

let buttonMaker_Display;
let buttonMaker_price_Display;
let buttonFarm_Display;
let buttonFarm_price_Display;
//let blabla_Display;
//let blabla_price_Display;



document.addEventListener("DOMContentLoaded", () => {

    score_Display = document.querySelector("#nb_score");
    cps_display = document.querySelector("#cps_display");

    buttonMaker_Display = document.querySelector("#nb_buttonMaker");
    buttonMaker_price_Display = document.querySelector("#price_buttonMaker");
    buttonFarm_Display = document.querySelector("#nb_buttonFarm");
    buttonFarm_price_Display = document.querySelector("#price_buttonFarm");
    //  blabla_Display = document.querySelector("#nb_blabla");
    //  blabla_price_Display = document.querySelector("#price_blabla");
    
    

    LoadGame();
    StartButtonMakerTimer();
    StartButtonFarmTimer();
    //StartBlablaTimer();

    UpdateDisplay();
});

//Ou les données des obj seront stockées
const buttonGeneratorsObj = new Map();
buttonGeneratorsObj.set("buttonMaker",(new ButtonGenerator("buttonMaker", 15, 0.1)));
buttonGeneratorsObj.set("buttonFarm",(new ButtonGenerator("buttonFarm", 1100, 8)));
//buttonGeneratorsObj.set("blabla",(new ButtonGenerator("blabla", prixInitial, cps)));

function AddButtonToScore(){
    buttonScore++;
    UpdateDisplay();
}
function BuyButtonGenerator(genName){
    if (buttonScore >= Math.floor(buttonGeneratorsObj.get(genName).currentPrice)){
        buttonScore -= Math.floor(buttonGeneratorsObj.get(genName).currentPrice);
        AddNewButtonGenerator(genName);
        UpdateDisplay();
    }
}

//Timers
var buttonMakerTimer = null;
var buttonFarmTimer = null;
//var blablaTimer = null;
function StartButtonMakerTimer() {
    if (buttonMakerTimer !== null) {
        clearInterval(buttonMakerTimer);
    }

    const cps = buttonGeneratorsObj.get("buttonMaker").cps;
    var interval = 1000 / (cps * (buttonsGeneratorsBought.get("buttonMaker"))); // cps = clicks per second
    

    buttonMakerTimer = setInterval(() => {
        if (buttonsGeneratorsBought.get("buttonMaker") >= 0)
        {
            buttonScore += 1;
            UpdateDisplay();
        }
    }, interval);
}
function StartButtonFarmTimer() {
    if (buttonFarmTimer !== null) {
        clearInterval(buttonFarmTimer);
    }

    const cps = buttonGeneratorsObj.get("buttonFarm").cps;
    var interval = 1000 / (cps * (buttonsGeneratorsBought.get("buttonFarm"))); // cps = clicks per second
    

    buttonFarmTimer = setInterval(() => {
        if (buttonsGeneratorsBought.get("buttonFarm") >= 0)
        {
            buttonScore += 1;
            UpdateDisplay();
        }
    }, interval);
}
/*
function StartBlablaTimer() {
    if (blablaTimer !== null) {
        clearInterval(blablaTimer);
    }

    const cps = buttonGeneratorsObj.get("blabla").cps;
    var interval = 1000 / (cps * (buttonsGeneratorsBought.get("blabla"))); // cps = clicks per second
    

    blablaTimer = setInterval(() => {
        if (buttonsGeneratorsBought.get("blabla") >= 0)
        {
            buttonScore += 1;
            UpdateDisplay();
        }
    }, interval);
}
*/
setInterval(function() {
    SaveGame();
}, 1*60);


function SaveGame() {
    const gameData = {
        _buttonScore: buttonScore,
        _buttonMaker: buttonsGeneratorsBought.get("buttonMaker"),
        _buttonFarm: buttonsGeneratorsBought.get("buttonFarm")
        //_blabla : buttonsGeneratorsBought.get("blabla")
    };
    localStorage.setItem("buttonGameSave", JSON.stringify(gameData));

    UpdateDisplay();
}

function ResetGame() {
    buttonScore = 0;
    buttonsGeneratorsBought = new Map()
    buttonsGeneratorsBought.set("buttonMaker",0);
    buttonsGeneratorsBought.set("buttonFarm",0);
    //buttonsGeneratorsBought.set("blabla",0);
    
    const gameData = {
        _buttonScore: buttonScore,
        _buttonMaker: buttonsGeneratorsBought.get("buttonMaker"),
        _buttonFarm: buttonsGeneratorsBought.get("buttonFarm")
        //_blabla: buttonsGeneratorsBought.get("blabla",0);
        
    };
    localStorage.setItem("buttonGameSave", JSON.stringify(gameData));

    UpdateDisplay();
}

function LoadGame() {
    const savedData = localStorage.getItem("buttonGameSave");
    if (!savedData) return;

    const parsedData = JSON.parse(savedData);

    buttonScore = parsedData._buttonScore ?? 0;

    buttonsGeneratorsBought = new Map();
    buttonsGeneratorsBought.set("buttonMaker",parsedData._buttonMaker ?? 0);
    buttonsGeneratorsBought.set("buttonFarm",parsedData._buttonFarm ?? 0);
    //buttonsGeneratorsBought.set("blabla",parsedData.blabla ?? 0);

    buttonGeneratorsObj.get("buttonMaker").updatePrice();
    buttonGeneratorsObj.get("buttonFarm").updatePrice();
    //buttonGeneratorsObj.get("blabla").updatePrice();
    StartButtonMakerTimer();
    StartButtonFarmTimer();
    //StartBlablaTimer();
    UpdateDisplay();
}

