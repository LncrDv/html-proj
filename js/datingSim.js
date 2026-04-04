// --- Dialogue Tree ---

var relationPoints = 0;

var dialogueTree = {
    start: {
        text: "Hello there! I'm Goober !",
        choices: null,
        next: "line1",
    },
    line1: {
        text: "So... what kind of person are you?",
        choices: [
            { label: "Adventurous", next: "path_adventurous" },
            { label: "Silly", next: "path_silly" }
        ]
    },

    // --- Adventurous branch ---
    path_adventurous: {
        text: "Wow, I love that! So where should we go first?",
        choices: [
            { label: "Forest", next: "main_beforeActivity" },
            { label: "Basketball court", next: "main_beforeActivity" }
        ]
    },
    main_beforeActivity: {
        text: "Nah that's boring.",
        choices: null,
        next: "main_goToActivity"
    },

    // --- Silly branch ---
    path_silly: {
        text: "No way ! I love being silly too!",
        choices: null,
        next: "main_goToActivity",
        relationPoints: 1
    },

    // --- Main Branch ---
    main_goToActivity: {
        text: "We should totally go burn a forest down and shoplift together!",
        choices: null,
        next: "main_goToActivity2"
    },
    main_goToActivity2: {
        text: "<hide><i>You hear the sound of police sirens in the distance. Maybe you should get out of here...</i>",
        choices: null,
        next: "main_backToSchool"
    },
    main_backToSchool: {
        text: "Wow ! We had so much fun together ! I wish we could do this every day !",
        choices: null,
        next: "main_backToSchool2"
    },
    main_backToSchool2: {
        text: "<hide><i>You wish to never do that ever again.</i>",
        choices: null,
        next: "main_backToSchool3"
    },
    main_backToSchool3: {
        text: "<hide><i>So, what do you want to do next ?</i>",
        choices: [
            { label: "Go to the movies", next: "path_goToMovies" },
            { label: "Play video games", next: "path_playVideoGames" },
            { label: "Kill a local citizen", next: "path_killCitizen" }
        ]
    },
    path_goToMovies: {
        text: "Sure ! I love movies !",
        choices: null,
        next: "path_goToMovies2"
    },
    path_goToMovies2: {
        text: "<hide><i>You and Goober watch a movie together. It was pretty fun, but you can't help but feel like something is missing...</i>",
        choices: null,
        next: "path_goToMovies3"
    },
    path_goToMovies3: {
        text: "Wow ! That was so much fun ! Even though I already watched it, it's still fun to see it again. You up doing something else ?",
        choices: null,
        next: "main_backToSchool3"
    },
    path_playVideoGames: {
        text: "Yay ! I love video games !",
        choices: null,
        next: "path_playVideoGames2"
    },
    path_playVideoGames2: {
        text: "<hide><i>You and Goober play video games together. It was pretty fun, but you can't help but feel like something is missing...</i>",
        choices: null,
        next: "path_playVideoGames3"
    },
    path_playVideoGames3: {
        text: "Wow ! That was so much fun ! You suck at smash tho. You up doing something else ?",
        choices: null,
        next: "main_backToSchool3"
    },
    path_killCitizen: {
        text: "Yay ! Finally someone who gets me ! Let's go do some crime together !",
        choices: null,
        next: "path_killCitizen2"
    },
    path_killCitizen2: {
        text: "<hide><i>You and Goober go out and kill a local citizen together. You feel a sense of accomplishment...</i>",
        choices: null,
        next: "main_afterKillCitizen"
    },
    main_afterKillCitizen: {
        text: "Wow ! Better throw that body in the river and discard those weapons tee-hee :D",
        choices: null,
        next: "main_afterKillCitizen2"
    },
    main_afterKillCitizen2: {
        text: "Me ? Worried about the police ? No way ! I'm Goober ! I'm invincible !",
        choices: null,
        next: "main_afterKillCitizen3"
    },
    main_afterKillCitizen3: {
        text: "<hide><i>You hear sirens coming closer...</i>",
        choices: null,
        next: "main_afterKillCitizen4"
    },
    main_afterKillCitizen4: {
        text:"Let's go to your place, I feel at risk around here...",
        choices: [
            { label: "Hell no", next: "main_refuseGoToYourPlace" },
            { label: "Sure", next: "main_acceptGoToYourPlace" }
        ],
        next: null
    },
    main_acceptGoToYourPlace: {
        relationPoints: 1,
        text: "Let's go then !",
        next: "main_goToYourPlace"
    },
    main_refuseGoToYourPlace: {
        text: "Like if I'm asking for your opinion haha!",
        choices: null,
        next: "main_goToYourPlace"
    },
    main_goToYourPlace : {
        text: "<hide><i>You and Goober go to your place. You feel safe for now...</i>",
        choices: null,
        next: "main_atYourPlace"
    },
    main_atYourPlace: {
        text: "Wow ! This is so much better ! I feel so safe here !",
        choices: null,
        next: "main_atYourPlace2"
    },
    main_atYourPlace2: {
        text: "<hide><i>You and Goober chill at your place for a while. You feel safe, but you can't help but feel like something is missing...</i>",
        choices: null,
        next: "main_atYourPlace3"
    },
    main_atYourPlace3: {
        text: "Have sex ?",
        choices: [
            { label: "Sure", next: "main_haveSex" },
            { label: "No thanks", next: "main_atYourPlace4" }
        ],
        next: null
    },
    main_haveSex: {
        text: "<hide><i>What are you thinking ? You just met !</i>",
        choices: null,
        next: "main_atYourPlace4"
    }, 
    main_atYourPlace4: {
        text: "Welp, seems like they left. Guess I'll just go home then. See you !",
        choices: null,
        next: null
    }

};

var currentNode = "start";

// --- DOM Elements ---
var textInput = document.querySelector("#textInput");
var gooberTitle_image = document.querySelector("#gooberTitle");
var gooberIntro_image = document.querySelector("#gooberIntro");
var choiceButtons = document.querySelectorAll(".choice-btn");

// --- Parse custom tags and apply effects ---
function applyCustomTags(text) {
    if (text.startsWith("<hide>")) {
        if (gooberIntro_image) gooberIntro_image.style.visibility = "hidden";
        text = text.replace("<hide>", "");
    } else {
        if (gooberIntro_image) gooberIntro_image.style.visibility = "visible";
    }
    return text;
}

// --- Core function: go to any node by ID ---
function goToNode(nodeId) {
    currentNode = nodeId;
    var node = dialogueTree[nodeId];

    var cleanText = applyCustomTags(node.text);
    textInput.innerHTML = cleanText;

    if(node.relationPoints != undefined) {
        textInput.innerHTML += "<br><i>(Relation points: " + relationPoints + " + " + node.relationPoints + ")</i>";
        relationPoints += node.relationPoints;
        
    }
    if (node.choices) {
        node.choices.forEach(function(choice, i) {
            if (choiceButtons[i]) {
                choiceButtons[i].style.visibility = "visible";
                choiceButtons[i].innerHTML = choice.label;
                choiceButtons[i].onclick = function() {
                    goToNode(choice.next);
                };
            }
        });
    } else {
        choiceButtons.forEach(function(btn) {
            btn.style.visibility = "hidden";
        });
    }
}

// --- Advance dialogue ---
function advanceDialogue() {
    var node = dialogueTree[currentNode];
    if (!node.choices) {
        if (node.next) {
            goToNode(node.next);
        } else {
            textInput.innerHTML = "This dev is a stupid ni- who didn't finish the game, so there's no more content to show !";
        }
    }
}

// --- Title screen: click to go to intro ---
if (gooberTitle_image) {
    gooberTitle_image.addEventListener("click", function() {
        window.location.replace("ds_intro.html");
    });
}

// --- Intro screen: click Goober to advance ---
if (gooberIntro_image) {
    gooberIntro_image.addEventListener("click", advanceDialogue);
}

// --- Spacebar also advances dialogue ---
document.addEventListener("keydown", function(e) {
    if (e.code === "Space") {
        e.preventDefault();
        advanceDialogue();
    }
});

// --- Start the game ---
goToNode("start");