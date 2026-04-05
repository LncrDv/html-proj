// =============================================================
// DATING SIM ENGINE
// =============================================================

var relationPoints = 0;
var nsfwMode = false;
var currentNode = "day1_main_intro";

var textQueue = [];

var dayLog = [];
var allDaysLog = [];

// ---- NSFW alternating unlock ----
function markGameComplete() {
    localStorage.setItem("gooberCompleted", "true");
}

function loadNSFWState() {
    var completed = localStorage.getItem("gooberCompleted") === "true";
    var wasNSFW = localStorage.getItem("gooberWasNSFW") === "true";

    if (completed) {
        nsfwMode = !wasNSFW;
        localStorage.setItem("gooberWasNSFW", nsfwMode ? "true" : "false");
    } else {
        nsfwMode = false;
    }
}

// ---- Save / Load ----
function saveGame() {
    var saveData = {
        currentNode: currentNode,
        relationPoints: relationPoints,
        nsfwMode: nsfwMode,
        allDaysLog: allDaysLog
    };
    localStorage.setItem("gooberSave", JSON.stringify(saveData));
    showSaveNotification("Game saved !");
}

function loadGame() {
    var raw = localStorage.getItem("gooberSave");
    if (!raw) {
        showSaveNotification("No save found.");
        return;
    }
    var saveData = JSON.parse(raw);
    currentNode = saveData.currentNode;
    relationPoints = saveData.relationPoints;
    nsfwMode = saveData.nsfwMode;
    allDaysLog = saveData.allDaysLog || [];
    goToNode(currentNode);
    showSaveNotification("Game loaded !");
}

function showSaveNotification(msg) {
    var notif = document.getElementById("saveNotif");
    if (!notif) return;
    notif.textContent = msg;
    notif.style.opacity = "1";
    setTimeout(function () { notif.style.opacity = "0"; }, 2000);
}

// ---- Day logging ----
function startNewDay() {
    if (dayLog.length > 0) {
        allDaysLog.push(dayLog);
        dayLog = [];
    }
}

function logChunk(text) {
    dayLog.push(text);
}

// ---- Review system ----
var reviewMode = false;
var reviewDay = 0;
var reviewIndex = 0;

function openDayReview() {
    if (allDaysLog.length === 0) {
        showSaveNotification("No previous days to review !");
        return;
    }

    reviewMode = true;
    reviewDay = 0;
    reviewIndex = 0;

    var ui = document.getElementById("reviewUI");
    if (ui) ui.style.display = "flex";

    var tabs = document.getElementById("reviewTabs");
    tabs.innerHTML = "";

    allDaysLog.forEach(function (log, i) {
        var btn = document.createElement("button");
        btn.textContent = "Day " + (i + 1);
        btn.className = "review-tab-btn" + (i === 0 ? " active" : "");
        btn.onclick = function () {
            reviewDay = i;
            reviewIndex = 0;
            document.querySelectorAll(".review-tab-btn").forEach(function (b) {
                b.classList.remove("active");
            });
            btn.classList.add("active");
            showReviewChunk();
        };
        tabs.appendChild(btn);
    });

    showReviewChunk();
}

function showReviewChunk() {
    var log = allDaysLog[reviewDay];
    if (!log) return;

    reviewIndex = Math.max(0, Math.min(reviewIndex, log.length - 1));

    document.getElementById("reviewText").innerHTML = log[reviewIndex];

    document.getElementById("reviewPrev").disabled =
        (reviewIndex === 0 && reviewDay === 0);

    document.getElementById("reviewNext").disabled =
        (reviewIndex === log.length - 1 && reviewDay === allDaysLog.length - 1);
}

function reviewNext() {
    var log = allDaysLog[reviewDay];
    if (reviewIndex < log.length - 1) {
        reviewIndex++;
    } else if (reviewDay < allDaysLog.length - 1) {
        reviewDay++;
        reviewIndex = 0;
    }
    showReviewChunk();
}

function reviewPrev() {
    if (reviewIndex > 0) {
        reviewIndex--;
    } else if (reviewDay > 0) {
        reviewDay--;
        reviewIndex = allDaysLog[reviewDay].length - 1;
    }
    showReviewChunk();
}

function closeReview() {
    reviewMode = false;
    document.getElementById("reviewUI").style.display = "none";
}

// ---- DOM ----
var textInput = document.querySelector("#textInput");
var gooberIntro_image = document.querySelector("#gooberIntro");
var choiceButtons = document.querySelectorAll(".choice-btn");

var defaultEmotion = "../../textures/goober.png";

// ---- Tags ----
function applyCustomTags(text) {

    if (text.includes("[hide]")) {
        gooberIntro_image.style.visibility = "hidden";
        text = text.replace("[hide]", "");
    } else {
        gooberIntro_image.style.visibility = "visible";
    }

    text = text.replace(/\[bg\s+([^\]]+)\]/g, function (m, src) {
        document.body.style.backgroundImage = "url('../../textures/" + src.trim() + "')";
        return "";
    });

    var emotion = defaultEmotion;
    text = text.replace(/\[e\s+([^\]]+)\]/g, function (m, src) {
        emotion = "../../textures/" + src.trim();
        return "";
    });

    gooberIntro_image.src = emotion;
    return text;
}

// ---- Runtime node resolution ----
// Evaluates any field that may be a function (for nsfwMode branching)
function resolveNode(raw) {
    return {
        text:          typeof raw.text          === "function" ? raw.text()          : raw.text,
        next:          typeof raw.next          === "function" ? raw.next()          : raw.next,
        choices:       typeof raw.choices       === "function" ? raw.choices()       : raw.choices,
        relationPoints: raw.relationPoints
    };
}

// ---- Dialogue ----
function showNextChunk() {
    var node = resolveNode(dialogueTree[currentNode]);

    var chunk = textQueue.shift();
    var cleanText = applyCustomTags(chunk);
    textInput.innerHTML = cleanText;

    logChunk(cleanText);

    if (textQueue.length > 0) return;

    if (node.relationPoints != undefined) {
        textInput.innerHTML += "<br><i>(Relation: " + relationPoints + " + " + node.relationPoints + ")</i>";
        relationPoints += node.relationPoints;
    }

    if (node.choices) {
        node.choices.forEach(function (choice, i) {
            if (choiceButtons[i]) {
                choiceButtons[i].style.visibility = "visible";
                choiceButtons[i].innerHTML = choice.label;
                choiceButtons[i].onclick = function () {
                    goToNode(choice.next);
                };
            }
        });
    }
}

function goToNode(nodeId) {
    if (nodeId === null || nodeId === undefined) return;

    // Day boundary logging
    if (nodeId === "day2_main_intro") startNewDay();
    if (nodeId === "day3_main_intro") startNewDay();
    if (nodeId === "day4_main_intro") startNewDay();
    if (nodeId === "day5_main_intro") startNewDay();
    if (nodeId === "day6_main_intro") startNewDay();
    if (nodeId === "day7_main_intro") startNewDay();

    // Effects
    if (nodeId.includes("glitch")) triggerGlitch(3);
    if (nodeId === "day7_nsfw_end" && nsfwMode) fakeCrash();

    // Mark completion at ending nodes
    if (nodeId === "post_game_sfw" || nodeId === "post_game_nsfw_leave") {
        markGameComplete();
    }

    currentNode = nodeId;
    var node = resolveNode(dialogueTree[nodeId]);

    textQueue = node.text.split("[np]");

    choiceButtons.forEach(function (btn) {
        btn.style.visibility = "hidden";
        btn.innerHTML = "";
        btn.onclick = null;
    });

    showNextChunk();
}

function advanceDialogue() {
    if (reviewMode) return;

    if (textQueue.length > 0) {
        showNextChunk();
        return;
    }

    var node = resolveNode(dialogueTree[currentNode]);
    if (!node.choices && node.next) {
        goToNode(node.next);
    }
}

// ---- Controls ----
gooberIntro_image.addEventListener("click", advanceDialogue);

document.addEventListener("keydown", function (e) {
    if (e.code === "Space") {
        e.preventDefault();
        advanceDialogue();
    }
});

function triggerGlitch(intensity = 1) {
    document.body.classList.add("glitch");
    setTimeout(() => {
        document.body.classList.remove("glitch");
    }, 200 * intensity);
}

function fakeCrash() {
    textInput.innerHTML = "ERROR: connection lost.";
    setTimeout(() => {
        document.body.innerHTML = "<h1 style='color:red;text-align:center;margin-top:20%;'>Session terminated</h1>";
    }, 2000);
}

// ---- Boot ----
loadNSFWState();
goToNode(currentNode);
