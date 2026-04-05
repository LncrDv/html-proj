// =============================================================
// DATING SIM ENGINE
// =============================================================

// --- Game state ---
// Note: nsfwMode is declared here but overwritten by loadNSFWState()
// before goToNode() is called, so the tree always gets the right value.
var relationPoints  = 0;
var nsfwMode        = false;
var currentNode     = "day1_main_intro";

var textQueue       = [];
var isTyping        = false;
var skipTyping      = false;

var dayLog          = [];
var allDaysLog      = [];


// ============================================================
// NSFW UNLOCK — alternates each time the game is completed
// ============================================================

function markGameComplete() {
    localStorage.setItem("gooberCompleted", "true");
}

function loadNSFWState() {
    var completed = localStorage.getItem("gooberCompleted") === "true";
    var wasNSFW   = localStorage.getItem("gooberWasNSFW")   === "true";

    if (completed) {
        // Game just finished — flip mode for next run, consume the flag
        nsfwMode = !wasNSFW;
        localStorage.setItem("gooberWasNSFW", nsfwMode ? "true" : "false");
        localStorage.removeItem("gooberCompleted"); // consume so it only fires once
    } else {
        // Mid-run — restore saved mode, don't reset it
        nsfwMode = wasNSFW;
    }
}


// ============================================================
// SAVE / LOAD
// ============================================================

function saveGame() {
    var saveData = {
        currentNode:    currentNode,
        relationPoints: relationPoints,
        nsfwMode:       nsfwMode,
        allDaysLog:     allDaysLog
    };
    localStorage.setItem("gooberSave", JSON.stringify(saveData));
    showSaveNotification("Game saved !");
}

function loadGame() {
    var raw = localStorage.getItem("gooberSave");
    if (!raw) { showSaveNotification("No save found."); return; }
    var saveData   = JSON.parse(raw);
    currentNode    = saveData.currentNode;
    relationPoints = saveData.relationPoints;
    nsfwMode       = saveData.nsfwMode;
    allDaysLog     = saveData.allDaysLog || [];
    goToNode(currentNode);
    showSaveNotification("Game loaded !");
}

function showSaveNotification(msg) {
    var notif = document.getElementById("saveNotif");
    if (!notif) return;
    notif.textContent   = msg;
    notif.style.opacity = "1";
    setTimeout(function () { notif.style.opacity = "0"; }, 2000);
}


// ============================================================
// DAY LOGGING — feeds the review system
// ============================================================

function startNewDay() {
    if (dayLog.length > 0) { allDaysLog.push(dayLog); dayLog = []; }
}

// Called every time a chunk is displayed
function logChunk(text) { dayLog.push(text); }


// ============================================================
// DAY REVIEW SYSTEM
// ============================================================

var reviewMode  = false;
var reviewDay   = 0;
var reviewIndex = 0;

function openDayReview() {
    if (allDaysLog.length === 0) { showSaveNotification("No previous days to review !"); return; }
    reviewMode  = true;
    reviewDay   = 0;
    reviewIndex = 0;

    var ui = document.getElementById("reviewUI");
    if (ui) ui.style.display = "flex";

    // Build day tab buttons dynamically
    var tabs = document.getElementById("reviewTabs");
    tabs.innerHTML = "";
    allDaysLog.forEach(function (log, i) {
        var btn         = document.createElement("button");
        btn.textContent = "Day " + (i + 1);
        btn.className   = "review-tab-btn" + (i === 0 ? " active" : "");
        btn.onclick     = function () {
            reviewDay   = i;
            reviewIndex = 0;
            document.querySelectorAll(".review-tab-btn").forEach(function (b) { b.classList.remove("active"); });
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
    document.getElementById("reviewPrev").disabled  = (reviewIndex === 0 && reviewDay === 0);
    document.getElementById("reviewNext").disabled  = (reviewIndex === log.length - 1 && reviewDay === allDaysLog.length - 1);
}

function reviewNext() {
    var log = allDaysLog[reviewDay];
    if (reviewIndex < log.length - 1) { reviewIndex++; }
    else if (reviewDay < allDaysLog.length - 1) { reviewDay++; reviewIndex = 0; }
    showReviewChunk();
}

function reviewPrev() {
    if (reviewIndex > 0) { reviewIndex--; }
    else if (reviewDay > 0) { reviewDay--; reviewIndex = allDaysLog[reviewDay].length - 1; }
    showReviewChunk();
}

function closeReview() {
    reviewMode = false;
    document.getElementById("reviewUI").style.display = "none";
}


// ============================================================
// DOM REFERENCES
// ============================================================

var textInput         = document.querySelector("#textInput");
var gooberIntro_image = document.querySelector("#gooberIntro");
var choiceButtons     = document.querySelectorAll(".choice-btn:not(.ghost-btn)"); // excludes ghost
var ghostBtn          = document.getElementById("ghostChoice");
var defaultEmotion    = "../../textures/goober.png";


// ============================================================
// AUDIO — Undertale-style talk beeps
// ============================================================

var audioCtx     = null;
var beepInterval = null;

function getAudioCtx() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    return audioCtx;
}

function playTalkBeep() {
    try {
        var ctx  = getAudioCtx();
        var osc  = ctx.createOscillator();
        var gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = 280 + Math.random() * 120;
        osc.type            = "sine";
        gain.gain.setValueAtTime(0.07, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.065);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.065);
    } catch (e) { /* fail silently */ }
}

function startTalkSound() { stopTalkSound(); beepInterval = setInterval(playTalkBeep, 55); }
function stopTalkSound()  { if (beepInterval) { clearInterval(beepInterval); beepInterval = null; } }


// ============================================================
// SPRITE GLITCH
// ============================================================

function setGooberGlitch(on) {
    if (on) gooberIntro_image.classList.add("glitching");
    else    gooberIntro_image.classList.remove("glitching");
}


// ============================================================
// GHOST BUTTON
// Re-appears 3 seconds after being hovered away
// ============================================================

if (ghostBtn) {
    ghostBtn.addEventListener("mouseenter", function () {
        ghostBtn.style.opacity       = "0";
        ghostBtn.style.pointerEvents = "none";
        setTimeout(function () {
            // Only re-show if it's still supposed to be visible
            if (ghostBtn.style.visibility === "visible") {
                ghostBtn.style.opacity       = "0.4";
                ghostBtn.style.pointerEvents = "auto";
            }
        }, 3000);
    });
}


// ============================================================
// CUSTOM TAG PARSER
// ============================================================

function applyCustomTags(text) {
    // [hide] — hide sprite
    if (text.includes("[hide]")) {
        gooberIntro_image.style.visibility = "hidden";
        setGooberGlitch(false);
        text = text.replace(/\[hide\]/g, "");
    } else {
        gooberIntro_image.style.visibility = "visible";
    }

    // [bg filename] — swap background
    text = text.replace(/\[bg\s+([^\]]+)\]/g, function (m, src) {
        document.body.style.backgroundImage = "url('../../textures/" + src.trim() + "')";
        return "";
    });

    // [e filename] or [e gooberGlitch] — swap emotion / trigger glitch
    var emotion = defaultEmotion;
    text = text.replace(/\[e\s+([^\]]+)\]/g, function (m, src) {
        src = src.trim();
        if (src === "gooberGlitch") {
            setGooberGlitch(true);
        } else {
            setGooberGlitch(false);
            emotion = "../../textures/" + src;
        }
        return "";
    });

    if (!gooberIntro_image.classList.contains("glitching")) {
        gooberIntro_image.src = emotion;
    }

    return text.trim();
}


// ============================================================
// TYPEWRITER RENDERER
// ============================================================

function typewriterRender(htmlString, onDone) {
    textInput.innerHTML = "";
    isTyping   = true;
    skipTyping = false;

    var i        = 0;
    var rendered = "";
    var len      = htmlString.length;

    // Suppress beeps on pure narration (italics)
    if (!/^\s*<i>/.test(htmlString)) startTalkSound();

    function step() {
        if (skipTyping) {
            stopTalkSound();
            textInput.innerHTML = htmlString;
            isTyping = false;
            if (onDone) onDone();
            return;
        }

        if (i >= len) {
            stopTalkSound();
            isTyping = false;
            if (onDone) onDone();
            return;
        }

        // Consume full HTML tags instantly
        if (htmlString[i] === "<") {
            var close = htmlString.indexOf(">", i);
            if (close !== -1) {
                rendered += htmlString.slice(i, close + 1);
                i = close + 1;
                textInput.innerHTML = rendered;
                setTimeout(step, 0);
                return;
            }
        }

        // Consume HTML entities instantly
        if (htmlString[i] === "&") {
            var semi = htmlString.indexOf(";", i);
            if (semi !== -1 && semi - i < 8) {
                rendered += htmlString.slice(i, semi + 1);
                i = semi + 1;
                textInput.innerHTML = rendered;
                setTimeout(step, 0);
                return;
            }
        }

        rendered += htmlString[i];
        i++;
        textInput.innerHTML = rendered;

        var ch    = htmlString[i - 1];
        var delay = 22;
        if      (ch === "." || ch === "!" || ch === "?") delay = 180;
        else if (ch === ",")                              delay = 75;
        else if (ch === "…")                              delay = 200;

        setTimeout(step, delay);
    }

    step();
}


// ============================================================
// RUNTIME NODE RESOLUTION
// Allows text/choices/next to be functions (() => ...) so they
// can check nsfwMode at runtime instead of at load time.
// ============================================================

function resolveNode(raw) {
    return {
        text:           typeof raw.text    === "function" ? raw.text()    : raw.text,
        next:           typeof raw.next    === "function" ? raw.next()    : raw.next,
        choices:        typeof raw.choices === "function" ? raw.choices() : raw.choices,
        ghostChoice:    raw.ghostChoice || null,
        relationPoints: raw.relationPoints
    };
}


// ============================================================
// RAPID SKIP DETECTION (Day 7 NSFW only)
// If the player holds Space and advances too fast, Goober notices
// ============================================================

var lastAdvanceTime  = 0;
var rapidSkipCount   = 0;
var goober7Responded = false; // only interrupt once per Day 7

function checkRapidSkip() {
    if (!currentNode.startsWith("day7") || !nsfwMode || goober7Responded) return false;

    var now     = Date.now();
    var elapsed = now - lastAdvanceTime;
    lastAdvanceTime = now;

    if (elapsed < 120) {
        // Less than 120ms between advances = holding Space
        rapidSkipCount++;
        if (rapidSkipCount >= 4) {
            rapidSkipCount   = 0;
            goober7Responded = true;
            interruptWithGoober();
            return true; // signal that we handled the advance
        }
    } else {
        rapidSkipCount = 0;
    }
    return false;
}

function interruptWithGoober() {
    textQueue = [];
    stopTalkSound();

    // Inject a one-off interruption node, then return to current node
    var returnTo = currentNode;
    dialogueTree["day7_goober_interrupt"] = {
        text: pick([
            "Hey.[np]<i>Goober's voice is flat.</i>[np]You're going fast.[np]Don't do that.",
            "Stop.[np]<i>One word. It lands wrong.</i>[np]I can tell when you're not paying attention.[np]I always can.",
            "<i>The text stops.[np]Nothing happens for a moment.[np]Then:</i>[np]You know I can see you, right ?[np]<i>Goober smiles in the portrait. It doesn't look like a smile.</i>"
        ]),
        choices: null,
        next: returnTo
    };

    goToNode("day7_goober_interrupt");
}


// ============================================================
// CORE DIALOGUE FUNCTIONS
// ============================================================

function showNextChunk() {
    var node  = resolveNode(dialogueTree[currentNode]);
    var chunk = textQueue.shift();
    var clean = applyCustomTags(chunk);

    logChunk(clean);

    typewriterRender(clean, function () {
        // Show relation point change at end of last chunk
        if (textQueue.length === 0 && node.relationPoints != undefined) {
            textInput.innerHTML += "<br><i>(Relation: " + relationPoints + " + " + node.relationPoints + ")</i>";
            relationPoints += node.relationPoints;
        }

        // Show regular choice buttons at end of last chunk
        if (textQueue.length === 0 && node.choices) {
            node.choices.forEach(function (choice, i) {
                if (choiceButtons[i]) {
                    choiceButtons[i].style.visibility = "visible";
                    choiceButtons[i].innerHTML        = choice.label;
                    choiceButtons[i].onclick          = function () { goToNode(choice.next); };
                }
            });
        }

        // Show ghost button if node defines one
        if (textQueue.length === 0 && node.ghostChoice && ghostBtn) {
            ghostBtn.style.visibility  = "visible";
            ghostBtn.style.opacity     = "0.4";
            ghostBtn.style.pointerEvents = "auto";
            ghostBtn.innerHTML         = node.ghostChoice.label;
            ghostBtn.onclick           = function () { goToNode(node.ghostChoice.next); };
        }
    });
}

function goToNode(nodeId) {
    if (nodeId === null || nodeId === undefined) return;

    // Archive the previous day's log when entering a new day
    ["day2","day3","day4","day5","day6","day7"].forEach(function (d) {
        if (nodeId === d + "_main_intro") startNewDay();
    });

    // Special node effects
    if (nodeId.includes("glitch"))                  triggerGlitch(3);
    if (nodeId === "day5_nsfw_end" && nsfwMode)     triggerFakeCrash();
    if (nodeId === "post_game_sfw" ||
        nodeId === "post_game_nsfw_leave")           markGameComplete();

    currentNode = nodeId;
    var node    = resolveNode(dialogueTree[nodeId]);
    textQueue   = node.text.split("[np]");

    // Reset ALL buttons (regular + ghost) before showing new ones
    choiceButtons.forEach(function (btn) {
        btn.style.visibility = "hidden";
        btn.innerHTML        = "";
        btn.onclick          = null;
    });
    if (ghostBtn) {
        ghostBtn.style.visibility  = "hidden";
        ghostBtn.innerHTML         = "";
        ghostBtn.onclick           = null;
    }

    showNextChunk();
}

function advanceDialogue() {
    if (reviewMode) return;

    // Check for Day 7 rapid-skip interrupt before anything else
    if (checkRapidSkip()) return;

    // First click during typewriter skips to end of current chunk
    if (isTyping) { skipTyping = true; return; }

    // More chunks queued — show next
    if (textQueue.length > 0) { showNextChunk(); return; }

    // No choices — auto-advance to next node
    var node = resolveNode(dialogueTree[currentNode]);
    if (!node.choices && node.next) goToNode(node.next);
}


// ============================================================
// CONTROLS
// ============================================================

gooberIntro_image.addEventListener("click", advanceDialogue);

document.addEventListener("keydown", function (e) {
    if (e.code === "Space") { e.preventDefault(); advanceDialogue(); }
});


// ============================================================
// VISUAL EFFECTS
// ============================================================

function triggerGlitch(intensity) {
    intensity = intensity || 1;
    document.body.classList.add("glitch");
    setTimeout(function () { document.body.classList.remove("glitch"); }, 200 * intensity);
}

function triggerFakeCrash() {
    stopTalkSound();

    // Save page state before destroying it
    var savedHTML   = document.body.innerHTML;
    var savedFilter = document.body.style.filter;

    textInput.innerHTML = "ERROR: connection lost.";

    setTimeout(function () {
        document.body.style.filter = "invert(1) hue-rotate(90deg)";

        setTimeout(function () {
            document.body.innerHTML = "<h1 style='color:red;text-align:center;margin-top:20%;font-family:monospace;'>Session terminated</h1>";

            setTimeout(function () {
                // Play restore sound
                var restoreSound = new Audio("../../SFX/wiiCrash.mp3");
                restoreSound.play();

                // Restore page
                document.body.innerHTML    = savedHTML;
                document.body.style.filter = savedFilter;

                // Re-grab DOM references (wiped by innerHTML replacement)
                textInput         = document.querySelector("#textInput");
                gooberIntro_image = document.querySelector("#gooberIntro");
                choiceButtons     = document.querySelectorAll(".choice-btn:not(.ghost-btn)");
                ghostBtn          = document.getElementById("ghostChoice");

                // Re-attach event listeners
                gooberIntro_image.addEventListener("click", advanceDialogue);

                // Re-attach ghost button hover handler
                if (ghostBtn) {
                    ghostBtn.addEventListener("mouseenter", function () {
                        ghostBtn.style.opacity       = "0";
                        ghostBtn.style.pointerEvents = "none";
                        setTimeout(function () {
                            if (ghostBtn.style.visibility === "visible") {
                                ghostBtn.style.opacity       = "0.4";
                                ghostBtn.style.pointerEvents = "auto";
                            }
                        }, 3000);
                    });
                }

                // Continue story
                goToNode("day5_nsfw_afterCrash");

            }, 1000);
        }, 800);
    }, 2000);
}


// ============================================================
// HELPERS
// ============================================================

// Pick a random element from an array.
// Used in dialogueTree.js for randomized dialogue lines.
function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}


// ============================================================
// BOOT
// ============================================================

loadNSFWState();
goToNode(currentNode);