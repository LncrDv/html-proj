// =============================================================
// DIALOGUE TREE
// This file contains all the game's dialogue and story branches.
// It must be loaded BEFORE datingSim.js in the HTML.
//
// Custom tags you can use in any text string:
//   [np]          — new text box (player clicks to advance)
//   [hide]        — hide Goober's image for this chunk
//   [e file.png]  — show a specific emotion image this chunk only
//   [bg file.png] — change the background image
//
// Node structure:
//   text         : the dialogue string (required)
//   choices      : array of {label, next} objects, or null
//   next         : node to go to after this one (if no choices)
//   relationPoints : number to add to the relationship score
// =============================================================
// These MUST be declared before the tree, since the tree
// uses nsfwMode in ternary expressions at definition time.
var relationPoints = 0;
var nsfwMode = false;
var dialogueTree = {

    // =========================================================
    // DAY 1
    // =========================================================

    day1_main_intro: {
        text: "Hello there! I'm Goober !",
        choices: null,
        next: "day1_main_personalityChoice"
    },
    day1_main_personalityChoice: {
        text: "So... what kind of person are you?",
        choices: [
            { label: "Adventurous", next: "day1_branch_adventurous" },
            { label: "Silly",       next: "day1_branch_silly" },
            { label: "Quiet",       next: "day1_branch_quiet" }
        ]
    },

    // --- Day 1 : Personality branches ---
    day1_branch_adventurous: {
        text: "Wow, I love that ! So where should we go first ?",
        choices: [
            { label: "Forest",           next: "day1_main_boringActivity" },
            { label: "Basketball court", next: "day1_main_boringActivity" }
        ]
    },
    day1_main_boringActivity: {
        text: "Nah that's boring.",
        choices: null,
        next: "day1_main_crime"
    },
    day1_branch_silly: {
        text: "[e gooberFluttered.png]No way ! I love being silly too !",
        choices: null,
        next: "day1_main_crime",
        relationPoints: 1
    },
    day1_branch_quiet: {
        text: "Oh... that's okay ! I'll talk enough for both of us, hehe.",
        choices: null,
        next: "day1_main_crime",
        relationPoints: 1
    },

    // --- Day 1 : Crime / Outing ---
    // NOTE: nsfwMode is checked at runtime when goToNode() is called,
    // so the ternary ( ? : ) works correctly here.
    day1_main_crime: {
        text: nsfwMode
            ? "We should totally go burn a forest down and shoplift together ![np]<i>You hear the sound of police sirens in the distance. Maybe you should get out of here...</i>"
            : "We should do something fun ! Have you ever just... wandered around town with no plan ?",
        choices: null,
        next: nsfwMode ? "day1_main_afterCrime" : "day1_main_sfwWander"
    },
    // SFW only — a calm afternoon walk instead of crime
    day1_main_sfwWander: {
        text: "[hide]<i>You and Goober spend the afternoon wandering around, stumbling into a convenience store, a park, and somehow ending up watching ducks for twenty minutes.</i>[np]I like ducks. They look calm but they're actually fighting like, all the time under the water.[np]<i>You're not sure if Goober is talking about ducks anymore.</i>",
        choices: null,
        next: "day1_main_activityChoice"
    },
    // NSFW only — aftermath of the crime spree
    day1_main_afterCrime: {
        text: "Wow ! We had so much fun together ! I wish we could do this every day ![np]<i>You wish to never do that ever again.</i>[np]...You know, most people don't go that far on a first hangout. I like that about you.",
        choices: null,
        next: "day1_main_activityChoice"
    },

    // --- Day 1 : Activity choice ---
    day1_main_activityChoice: {
        text: "So, what do you want to do next ?",
        choices: [
            { label: "Go to the movies",  next: "day1_branch_movies" },
            { label: "Play video games",  next: "day1_branch_videoGames" },
            // In NSFW mode the third option is murder; in SFW it's going home
            ...(nsfwMode
                ? [{ label: "Kill a local citizen",          next: "day1_branch_nsfwKillCitizen" }]
                : [{ label: "Let's just head to my place",   next: "day1_main_atYourPlace" }])
        ]
    },
    day1_branch_movies: {
        text: "Sure ! I love movies ![np][hide]<i>You and Goober watch a movie. Goober cries at the villain's death, which you weren't expecting.</i>[np]He just wanted to be understood... anyway. You up for something else ?",
        choices: null,
        next: "day1_main_activityChoice"
    },
    day1_branch_videoGames: {
        text: "Yay ! I love video games ![np][hide]<i>You and Goober play for two hours. Goober wins every match and does not apologize once.</i>[np]You'll get there ! Maybe. Probably not. Do you wanna do something else ?",
        choices: null,
        next: "day1_main_activityChoice"
    },
    // NSFW only activity
    day1_branch_nsfwKillCitizen: {
        text: "Yay ! Finally someone who gets me ![np][hide]<i>You and Goober go out. You'd rather not think too hard about what happens next.</i>[np]Wow ! Better throw that in the river hehe :D[np]Me ? Worried ? No way ! I'm Goober ! I'm invincible ![np]...[np]<i>You hear sirens. Close ones.</i>",
        choices: null,
        next: "day1_main_fleeChoice"
    },

    // --- Day 1 : Fleeing to your place (NSFW path) ---
    day1_main_fleeChoice: {
        text: "Let's go to your place, I feel at risk around here...",
        choices: [
            { label: "Hell no",  next: "day1_branch_refuseFlee" },
            { label: "...Fine.", next: "day1_branch_acceptFlee" }
        ],
        next: null
    },
    day1_branch_acceptFlee: {
        text: "[e gooberFluttered.png]You're the best, let's go !",
        choices: null,
        next: "day1_main_atYourPlace",
        relationPoints: 1
    },
    day1_branch_refuseFlee: {
        text: "Like I'm asking for your opinion ! We're going, now !",
        choices: null,
        next: "day1_main_atYourPlace"
    },

    // --- Day 1 : At your place ---
    // Different text depending on NSFW mode — in SFW there are no cops,
    // so we don't mention them at all.
    day1_main_atYourPlace: {
        text: nsfwMode
            ? "[hide]<i>You and Goober rush to your place. You feel safe for now...</i>[np]Wow ! This is so much better ! Nobody can find us here ![np][hide]<i>It gets quiet. The sirens fade. Goober stares at the wall.</i>[np]...Hey. Thanks for not leaving me back there."
            : "[hide]<i>You and Goober end up at your place as the sun sets. It feels comfortable, in a strange way.</i>[np]Wow, it's so cozy here ! This feels like a place where nothing bad could ever happen.[np][hide]<i>You want to believe that.</i>[np]...Hey. I'm glad I met you today. That probably sounds weird.",
        choices: null,
        next: nsfwMode ? "day1_main_nsfwChoice" : "day1_main_chillingOut"
    },
    // NSFW only — the awkward offer
    day1_main_nsfwChoice: {
        text: "Sooo...",
        choices: [
            { label: "...",        next: "day1_branch_sex" },
            { label: "No thanks.", next: "day1_main_gooberLeaves" }
        ],
        next: null
    },
    day1_branch_sex: {
        text: "[hide]<i>What are you thinking ? You just met !</i>[np]<i>...Although Goober doesn't seem to think that's relevant.</i>",
        choices: null,
        next: "day1_main_gooberLeaves"
    },
    // SFW only — just a quiet evening
    day1_main_chillingOut: {
        text: "<i>You both sit in comfortable silence for a while. It doesn't feel awkward, which surprises you.</i>[np]I should probably head home...[np]<i>Goober doesn't move for another twenty minutes.</i>",
        choices: null,
        next: "day1_main_gooberLeaves"
    },

    // --- Day 1 : Goober leaves ---
    day1_main_gooberLeaves: {
        text: "Okay, I'm actually going now. See you tomorrow ?",
        choices: [
            { label: "Sure.",        next: "day1_end_positive" },
            { label: "We'll see.",   next: "day1_end_neutral" }
        ],
        next: null
    },
    day1_end_positive: {
        text: "[e gooberFluttered.png]I knew you'd say that. See you ![np][hide]<i>Day 1 complete.</i>",
        choices: null,
        next: "day2_main_intro",
        relationPoints: 1
    },
    day1_end_neutral: {
        text: "I'll take that as a yes. See you ![np][hide]<i>Day 1 complete.</i>",
        choices: null,
        next: "day2_main_intro"
    },

    // =========================================================
    // DAY 2
    // =========================================================

    day2_main_intro: {
        text: "<i>The next day...</i>[np]Hey ! You actually came back. I mean— I knew you would. I just. Yeah.[np]I found this old gym nearby, it's abandoned, wanna check it out ?",
        choices: [
            { label: "Sure",      next: "day2_branch_gymAccept" },
            { label: "No thanks", next: "day2_branch_gymRefuse" }
        ],
        next: null
    },
    day2_branch_gymAccept: {
        text: "<i>You and Goober head to the gym. It smells like old rubber and forgotten ambitions.</i>[np]Wow this place is so cool ! Look at all this stuff ![np]<i>Goober is already touching everything.</i>",
        choices: null,
        next: "day2_main_gymPaintBuckets"
    },
    day2_branch_gymRefuse: {
        text: "Oh... that's okay.[np]<i>Goober looks genuinely disappointed for a moment, then rebounds immediately.</i>[np]We could eat instead ? I know a place that has really good fries.",
        choices: [
            { label: "Yeah, let's eat",           next: "day2_branch_skipGymEat" },
            { label: "Actually let's do the gym", next: "day2_branch_gymAccept" }
        ],
        next: null
    },

    // --- Day 2 : Gym ---
    day2_main_gymPaintBuckets: {
        text: "Check this out ! I found paint buckets ! You know what that means !",
        choices: [
            {
                label: "Let's paint the walls !",
                next: nsfwMode ? "day2_main_gymWrongIdea" : "day2_main_gymRightIdea"
            },
            {
                label: "Let's throw buckets at each other !",
                next: nsfwMode ? "day2_main_gymWrongIdea" : "day2_main_gymRightIdea"
            },
            // This third option only appears in NSFW mode
            ...(nsfwMode ? [{
                label: "Let's go specifically find someone to fill up with paint buckets from the mouth, until they cannot breathe, until their lungs fill out, until their last gasp of air exits their body, and suffer from dread. Why did they chose this current day to hang out near this gym instead of building a life, founding a stable family and having kids, securing a nice future for themselves. Such a pityful fate to a honest soul like theirs.",
                next: "day2_main_gymRightIdea"
            }] : [])
        ],
        next: null
    },
    // NSFW only — Goober rejects the innocent answers
    day2_main_gymWrongIdea: {
        text: "Fun, but not what I had in mind...[np]<i>Goober tilts their head. There's something in their eyes you can't quite read.</i>[np]Don't you want to do something... more meaningful ?",
        choices: [
            { label: "...Like what ?", next: "day2_main_gymWrongIdea2" }
        ],
        next: null
    },
    day2_main_gymWrongIdea2: {
        text: "<i>Goober smiles. It's a little too wide.</i>[np]Something that really leaves a mark.[np]You know what I mean.",
        choices: [
            { label: "...I think I do.", next: "day2_main_gymRightIdea" }
        ],
        next: null
    },
    day2_main_gymRightIdea: {
        text: nsfwMode
            ? "Wow dude. That's dark.[np]<i>Goober pauses.</i>[np]...I love it. Let's go."
            : "Yes ! Let's make this place look incredible ![np]<i>You spend the next hour painting absolute chaos on every wall. It's genuinely kind of beautiful.</i>",
        choices: null,
        next: nsfwMode ? "day2_branch_nsfwKillCitizen" : "day2_branch_paintWalls"
    },
    // NSFW only
    day2_branch_nsfwKillCitizen: {
        text: "[hide]<i>By sheer luck, someone is hanging around nearby, all alone...</i>[np]<i>You don't let yourself think too hard about it.</i>[np]...[np]That was. Wow.[np]<i>Goober is breathing hard. They look more alive than you've ever seen them.</i>[np]Thanks for doing that with me. Really.[np]<i>You notice Goober didn't say sorry. Not even once. You didn't either.</i>",
        choices: null,
        next: "day2_main_afterGym"
    },
    // SFW only
    day2_branch_paintWalls: {
        text: "<i>You step back and look at what you've made. It's chaotic and colorful and weirdly personal.</i>[np]I want to come back here someday. When it's ours, you know ?[np]<i>You don't know what that means. But you nod anyway.</i>",
        choices: null,
        next: "day2_main_afterGym"
    },

    // --- Day 2 : After gym ---
    day2_main_afterGym: {
        text: "Okay I'm starving. Let's go eat something.[np]<i>Some things are normal no matter what.</i>",
        choices: null,
        next: "day2_main_eatChoice"
    },

    // --- Day 2 : Eating ---
    // This node is reached if the player skipped the gym entirely
    day2_branch_skipGymEat: {
        text: "Okay so there's this burger place AND this Italian spot, both nearby.[np]I'll let you pick. As a treat.",
        choices: [
            { label: "Burgers",  next: "day2_branch_burgers" },
            { label: "Italian",  next: "day2_branch_italian" }
        ],
        next: null
    },
    day2_main_eatChoice: {
        text: "So what do you want to eat ? I could eat literally anything right now.",
        choices: [
            { label: "Let's go to that new burger place",   next: "day2_branch_burgers" },
            { label: "How about that Italian restaurant ?", next: "day2_branch_italian" }
        ],
        next: null
    },
    day2_branch_burgers: {
        text: "YES. Correct answer.[np][hide]<i>You eat. Goober steals half your fries and does not apologize.</i>[np]<i>It's okay. You let them.</i>",
        choices: null,
        next: "day2_main_afterEat"
    },
    day2_branch_italian: {
        text: "Ooh, fancy.[np][hide]<i>The food is good. Goober tries to pronounce everything in an exaggerated Italian accent. The waiter does not look amused.</i>[np]<i>You are, though.</i>",
        choices: null,
        next: "day2_main_afterEat"
    },

    // --- Day 2 : End ---
    day2_main_afterEat: {
        text: "Today was good.[np]<i>Goober says it simply, quietly. No exclamation point.</i>[np]Like. Really good.[np]I feel like I can be weird around you. I don't get that a lot.",
        choices: [
            { label: "I feel that too.",         next: "day2_end_positive" },
            { label: "You're definitely weird.", next: "day2_end_tease" }
        ],
        next: null
    },
    day2_end_positive: {
        text: "[e gooberFluttered.png]...[np]Yeah.[np]Okay. I'm going home before I say something embarrassing.[np]<i>They're already walking away. You think you see them smile.</i>[np][hide]<i>Day 2 complete.</i>",
        choices: null,
        next: null, // Day 3 goes here when written
        relationPoints: 2
    },
    day2_end_tease: {
        text: "Rude ![np]<i>Goober grins.</i>[np]...Accurate though. See you tomorrow ?[np][hide]<i>Day 2 complete.</i>",
        choices: null,
        next: null, // Day 3 goes here when written
        relationPoints: 1
    }
};