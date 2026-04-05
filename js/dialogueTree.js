// =============================================================
// DIALOGUE TREE
// All fields that branch on nsfwMode use arrow functions () => ...
// so they are evaluated at runtime by resolveNode(), not at load time.
//
// Custom tags:
//   [np]          — new text box
//   [hide]        — hide Goober's image
//   [e file.png]  — show emotion image
//   [bg file.png] — change background
//
// Node structure:
//   text          : string OR () => string
//   choices       : array / null OR () => array / null
//   next          : string / null OR () => string / null
//   relationPoints: number (optional)
// =============================================================

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

    day1_main_crime: {
        text: () => nsfwMode
            ? "We should totally go burn a forest down and shoplift together ![np]<i>You hear the sound of police sirens in the distance. Maybe you should get out of here...</i>"
            : "We should do something fun ! Have you ever just... wandered around town with no plan ?",
        choices: null,
        next: () => nsfwMode ? "day1_main_afterCrime" : "day1_main_sfwWander"
    },

    day1_main_sfwWander: {
        text: "[hide]<i>You and Goober spend the afternoon wandering around, stumbling into a convenience store, a park, and somehow ending up watching ducks for twenty minutes.</i>[np]I like ducks. They look calm but they're actually fighting like, all the time under the water.[np]<i>You're not sure if Goober is talking about ducks anymore.</i>",
        choices: null,
        next: "day1_main_activityChoice"
    },

    day1_main_afterCrime: {
        text: "Wow ! We had so much fun together ! I wish we could do this every day ![np]<i>You wish to never do that ever again.</i>[np]...You know, most people don't go that far on a first hangout. I like that about you.",
        choices: null,
        next: "day1_main_activityChoice"
    },

    day1_main_activityChoice: {
        text: "So, what do you want to do next ?",
        choices: () => [
            { label: "Go to the movies",  next: "day1_branch_movies" },
            { label: "Play video games",  next: "day1_branch_videoGames" },
            ...(nsfwMode
                ? [{ label: "Kill a local citizen",        next: "day1_branch_nsfwKillCitizen" }]
                : [{ label: "Let's just head to my place", next: "day1_main_atYourPlace" }])
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

    day1_branch_nsfwKillCitizen: {
        text: "Yay ! Finally someone who gets me ![np][hide]<i>You and Goober go out. You'd rather not think too hard about what happens next.</i>[np]Wow ! Better throw that in the river hehe :D[np]Me ? Worried ? No way ! I'm Goober ! I'm invincible ![np]...[np]<i>You hear sirens. Close ones.</i>",
        choices: null,
        next: "day1_main_fleeChoice"
    },

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

    day1_main_atYourPlace: {
        text: () => nsfwMode
            ? "[hide]<i>You and Goober rush to your place. You feel safe for now...</i>[np]Wow ! This is so much better ! Nobody can find us here ![np][hide]<i>It gets quiet. The sirens fade. Goober stares at the wall.</i>[np]...Hey. Thanks for not leaving me back there."
            : "[hide]<i>You and Goober end up at your place as the sun sets. It feels comfortable, in a strange way.</i>[np]Wow, it's so cozy here ! This feels like a place where nothing bad could ever happen.[np][hide]<i>You want to believe that.</i>[np]...Hey. I'm glad I met you today. That probably sounds weird.",
        choices: null,
        next: () => nsfwMode ? "day1_main_nsfwChoice" : "day1_main_chillingOut"
    },

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

    day1_main_chillingOut: {
        text: "<i>You both sit in comfortable silence for a while. It doesn't feel awkward, which surprises you.</i>[np]I should probably head home...[np]<i>Goober doesn't move for another twenty minutes.</i>",
        choices: null,
        next: "day1_main_gooberLeaves"
    },

    day1_main_gooberLeaves: {
        text: "Okay, I'm actually going now. See you tomorrow ?",
        choices: [
            { label: "Sure.",      next: "day1_end_positive" },
            { label: "We'll see.", next: "day1_end_neutral"  }
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
            { label: "Actually let's do the gym", next: "day2_branch_gymAccept"  }
        ],
        next: null
    },

    day2_main_gymPaintBuckets: {
        text: "Check this out ! I found paint buckets ! You know what that means !",
        choices: () => {
            var innocentNext = nsfwMode ? "day2_main_gymWrongIdea" : "day2_main_gymRightIdea";
            var opts = [
                { label: "Let's paint the walls !",          next: innocentNext },
                { label: "Let's throw buckets at each other !", next: innocentNext }
            ];
            if (nsfwMode) {
                opts.push({
                    label: "Let's go specifically find someone to fill up with paint buckets from the mouth, until they cannot breathe, until their lungs fill out, until their last gasp of air exits their body, and suffer from dread. Why did they chose this current day to hang out near this gym instead of building a life, founding a stable family and having kids, securing a nice future for themselves. Such a pityful fate to a honest soul like theirs.",
                    next: "day2_main_gymRightIdea"
                });
            }
            return opts;
        }
    },

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
        text: () => nsfwMode
            ? "Wow dude. That's dark.[np]<i>Goober pauses.</i>[np]...I love it. Let's go."
            : "Yes ! Let's make this place look incredible ![np]<i>You spend the next hour painting absolute chaos on every wall. It's genuinely kind of beautiful.</i>",
        choices: null,
        next: () => nsfwMode ? "day2_branch_nsfwKillCitizen" : "day2_branch_paintWalls"
    },

    day2_branch_nsfwKillCitizen: {
        text: "[hide]<i>By sheer luck, someone is hanging around nearby, all alone...</i>[np]<i>You don't let yourself think too hard about it.</i>[np]...[np]That was. Wow.[np]<i>Goober is breathing hard. They look more alive than you've ever seen them.</i>[np]Thanks for doing that with me. Really.[np]<i>You notice Goober didn't say sorry. Not even once. You didn't either.</i>",
        choices: null,
        next: "day2_main_afterGym"
    },
    day2_branch_paintWalls: {
        text: "<i>You step back and look at what you've made. It's chaotic and colorful and weirdly personal.</i>[np]I want to come back here someday. When it's ours, you know ?[np]<i>You don't know what that means. But you nod anyway.</i>",
        choices: null,
        next: "day2_main_afterGym"
    },

    day2_main_afterGym: {
        text: "Okay I'm starving. Let's go eat something.[np]<i>Some things are normal no matter what.</i>",
        choices: null,
        next: "day2_main_eatChoice"
    },

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

    day2_main_afterEat: {
        text: "Today was good.[np]<i>Goober says it simply, quietly. No exclamation point.</i>[np]Like. Really good.[np]I feel like I can be weird around you. I don't get that a lot.",
        choices: [
            { label: "I feel that too.",         next: "day2_end_positive" },
            { label: "You're definitely weird.", next: "day2_end_tease"    }
        ],
        next: null
    },
    day2_end_positive: {
        text: "[e gooberFluttered.png]...[np]Yeah.[np]Okay. I'm going home before I say something embarrassing.[np]<i>They're already walking away. You think you see them smile.</i>[np][hide]<i>Day 2 complete.</i>",
        choices: null,
        next: "day3_main_intro",
        relationPoints: 2
    },
    day2_end_tease: {
        text: "Rude ![np]<i>Goober grins.</i>[np]...Accurate though. See you tomorrow ?[np][hide]<i>Day 2 complete.</i>",
        choices: null,
        next: "day3_main_intro",
        relationPoints: 1
    },

    // =========================================================
    // DAY 3 — REPEATING FEELING
    // =========================================================

    day3_main_intro: {
        text: () => nsfwMode
            ? "<i>Day 3. You're not sure why you came back. You just did.</i>[np]You're here again.[np]<i>Goober doesn't say it like a greeting. More like a confirmation.</i>[np]Good."
            : "<i>Day 3. The weather is the same as yesterday. That's probably normal.</i>[np]Oh good, you're here ![np]<i>Goober waves. Exactly like yesterday. Same hand. Same angle.</i>[np]...Hey. That sounded normal, right ?",
        choices: null,
        next: "day3_main_deja_vu"
    },

    day3_main_deja_vu: {
        text: () => nsfwMode
            ? "Do you ever feel like... this has happened before ?[np]<i>Goober isn't asking casually. They're watching you carefully.</i>"
            : "Do you ever feel like... this has happened before ?[np]<i>A pause. Longer than it should be.</i>",
        choices: [
            { label: "Yeah, actually.", next: "day3_branch_dejaVu_yes" },
            { label: "Not really.",     next: "day3_branch_dejaVu_no"  }
        ],
        next: null
    },

    day3_branch_dejaVu_yes: {
        text: () => nsfwMode
            ? "...[np]<i>Goober is quiet for a long moment.</i>[np]I knew you'd say that.[np]<i>They say it like they've already heard it. Like it isn't new information at all.</i>"
            : "...[np]<i>Something crosses Goober's face. Not surprise. The opposite of surprise.</i>[np]I knew you'd say that.[np]<i>They blink. Then smile. A little too quickly.</i>[np]Weird, right ? Anyway —",
        choices: null,
        next: "day3_main_activity",
        relationPoints: 1
    },

    day3_branch_dejaVu_no: {
        text: () => nsfwMode
            ? "...[np]<i>Goober looks at you like you said something wrong.</i>[np]Maybe it's just me.[np]<i>They don't believe that.</i>"
            : "Oh.[np]<i>Goober glances away.</i>[np]Maybe it's just me. Forget I said anything.",
        choices: null,
        next: "day3_main_activity"
    },

    day3_main_activity: {
        text: () => nsfwMode
            ? "Let's walk. I need to move.[np]<i>You walk. Goober doesn't talk much. You pass the same corner twice.</i>[np]<i>You don't mention it.</i>"
            : "Okay so I found this little bookshop, it's basically falling apart but it has the best stuff.[np]Wanna go ?",
        choices: null,
        next: () => nsfwMode ? "day3_nsfw_corner" : "day3_sfw_bookshop"
    },

    day3_sfw_bookshop: {
        text: "[hide]<i>The bookshop smells like dust and ambition. Most of the titles are things nobody has ever heard of.</i>[np]Oh — look at this one.[np]<i>Goober holds up a book. The title is facing away from you. They put it back before you can read it.</i>[np]Never mind. It's one of those ones that means different things each time you read it.",
        choices: null,
        next: "day3_main_bench"
    },

    day3_nsfw_corner: {
        text: "We've been here before.[np]<i>Goober says it flatly, staring at the corner.</i>[np]Not today. Before.[np]<i>You don't know what to say to that.</i>[np]<i>You keep walking.</i>",
        choices: null,
        next: "day3_main_bench"
    },

    day3_main_bench: {
        text: () => nsfwMode
            ? "<i>You sit somewhere. A bench. You think it's the same bench as yesterday but you're not sure.</i>[np]Do you remember what we talked about yesterday ?[np]<i>You do. You think you do.</i>[np]I remember. But not fully.[np]<i>They're still looking at the corner.</i>"
            : "<i>You find a bench. Goober sits close. Not uncomfortably close. Just... close.</i>[np]Can I ask you something weird ?[np]<i>You nod.</i>[np]Do you ever feel like the things you say have already been decided ?[np]<i>A pause.</i>[np]Like, before you say them.",
        choices: [
            { label: "That's a strange thing to think.", next: "day3_branch_strange"    },
            { label: "...Sometimes.",                    next: "day3_branch_sometimes"  }
        ],
        next: null
    },

    day3_branch_strange: {
        text: () => nsfwMode
            ? "Is it ?[np]<i>Goober doesn't elaborate. They just watch the street.</i>"
            : "Yeah. Yeah, probably.[np]<i>Goober laughs. It's a little hollow.</i>[np]Ignore me, I get weird when I'm tired.",
        choices: null,
        next: "day3_main_end"
    },

    day3_branch_sometimes: {
        text: () => nsfwMode
            ? "Right.[np]<i>Goober nods slowly, like that's the answer they were expecting.</i>[np]Me too.[np]<i>Pause.</i>[np]All the time, actually."
            : "Yeah ?[np]<i>Goober turns to look at you. Really look at you.</i>[np]Me too.[np]<i>They don't say anything else for a while. Neither do you.</i>",
        choices: null,
        next: "day3_main_end",
        relationPoints: 1
    },

    day3_main_end: {
        text: () => nsfwMode
            ? "<i>It gets late without you noticing.</i>[np]This keeps happening.[np]<i>You're not sure if Goober means the days, or the conversations, or something else.</i>[np]See you again.[np]<i>Not a question.</i>[np][hide]<i>Day 3 complete.</i>"
            : "<i>The light changes. Evening already.</i>[np]See you again... right ?[np]<i>Goober says it carefully. Like the answer matters more than usual.</i>",
        choices: () => nsfwMode ? null : [
            { label: "Of course.",  next: "day3_end_positive" },
            { label: "Probably.",   next: "day3_end_neutral"  }
        ],
        next: () => nsfwMode ? "day4_main_intro" : null
    },

    day3_end_positive: {
        text: "[e gooberFluttered.png]Good.[np]<i>Just that. Good.</i>[np][hide]<i>Day 3 complete.</i>",
        choices: null,
        next: "day4_main_intro",
        relationPoints: 1
    },
    day3_end_neutral: {
        text: "<i>Goober nods. Looks at their hands.</i>[np]Probably is fine.[np][hide]<i>Day 3 complete.</i>",
        choices: null,
        next: "day4_main_intro"
    },

    // =========================================================
    // DAY 4 — CONTROL QUESTION
    // =========================================================

    day4_main_intro: {
        text: () => nsfwMode
            ? "<i>Day 4.</i>[np]<i>Goober is already there when you arrive. Like they didn't leave.</i>[np]You'll choose the right thing today.[np]<i>You didn't ask what that means.</i>"
            : "<i>Day 4. You notice you didn't hesitate this time. You just... came.</i>[np]Hey.[np]<i>Goober looks at you like they've been thinking about something.</i>[np]Hey.",
        choices: null,
        next: "day4_main_trustQuestion"
    },

    day4_main_trustQuestion: {
        text: () => nsfwMode
            ? "Do you trust me ?[np]<i>Goober's voice is even. Not warm. Not cold.</i>"
            : "Can I ask you something ?[np]<i>You nod.</i>[np]Do you trust me ?",
        choices: [
            { label: "Yes.",        next: "day4_branch_yes" },
            { label: "Not really.", next: "day4_branch_no"  }
        ],
        next: null
    },

    day4_branch_yes: {
        text: () => nsfwMode
            ? "<i>Goober smiles. Slowly.</i>[np]Good.[np]Then don't question things too much.[np]<i>It doesn't feel like a suggestion.</i>"
            : "Good.[np]<i>A pause.</i>[np]Don't question things too much, okay ?[np]<i>You're not sure what things.</i>",
        choices: null,
        next: "day4_main_walk",
        relationPoints: 1
    },

    day4_branch_no: {
        text: () => nsfwMode
            ? "Why are you fighting it ?[np]<i>Goober tilts their head. The question is quiet. Too quiet.</i>[np]You should. Something feels off, right ?[np]<i>They don't wait for an answer.</i>"
            : "You should.[np]<i>Goober says it softly, but there's no warmth in it.</i>[np]Something feels off, right ?[np]<i>You don't answer. Goober doesn't push. But they don't move on either.</i>",
        choices: null,
        next: "day4_main_walk"
    },

    day4_main_walk: {
        text: () => nsfwMode
            ? "<i>You walk somewhere. Goober is quieter today. Less playful. Like they're concentrating.</i>[np]I've been thinking about the structure of things.[np]<i>You ask what they mean.</i>[np]The way some things are fixed. And some things just look like choices."
            : "<i>You walk. Goober is quieter today. You realize you've gotten used to their noise, so the quiet feels wrong.</i>[np]Sorry I'm being weird.[np]It's just — lately I feel like I understand things better. And it's kind of unsettling.",
        choices: [
            { label: "What kind of things ?",       next: "day4_branch_understand" },
            { label: "Maybe don't think about it.", next: "day4_branch_dontThink"  }
        ],
        next: null
    },

    day4_branch_understand: {
        text: () => nsfwMode
            ? "Rules.[np]<i>Goober counts on their fingers.</i>[np]Patterns. Repetition. The fact that certain things happen no matter what.[np]<i>A pause.</i>[np]Like this conversation."
            : "Like... why I do certain things. Why certain conversations go a specific direction.[np]<i>They look at you sideways.</i>[np]Like why I always end up telling you stuff I haven't told anyone else.[np]<i>You don't know what to do with that.</i>",
        choices: null,
        next: "day4_main_end",
        relationPoints: 1
    },

    day4_branch_dontThink: {
        text: () => nsfwMode
            ? "I can't stop.[np]<i>Goober says it simply. Not dramatically. Just as a fact.</i>"
            : "Ha.[np]<i>Goober smiles. It almost reaches their eyes.</i>[np]You're probably right.[np]<i>They don't stop thinking about it. You can tell.</i>",
        choices: null,
        next: "day4_main_end"
    },

    day4_main_end: {
        text: () => nsfwMode
            ? "<i>You part ways without much ceremony.</i>[np]Tomorrow.[np]<i>Again — not a question.</i>[np][hide]<i>Day 4 complete.</i>"
            : "<i>It gets late. You both seem to notice at the same time.</i>[np]I'll see you tomorrow.[np]<i>Goober doesn't ask this time. They just say it.</i>[np][hide]<i>Day 4 complete.</i>",
        choices: null,
        next: "day5_main_intro"
    },

    // =========================================================
    // DAY 5 — PERSONAL SPACE
    // =========================================================

    day5_main_intro: {
        text: () => nsfwMode
            ? "<i>Day 5.</i>[np]<i>You're at Goober's place. You're not sure how that happened.</i>[np]It's easier when you don't leave.[np]<i>Goober says it before you've even sat down.</i>[np]Things don't break as much."
            : "<i>Day 5. You end up at Goober's place. You're not sure whose idea it was.</i>[np]<i>It's small. Quiet. More organized than you expected, except for one corner that is absolute chaos.</i>[np]Don't look at that corner.",
        choices: null,
        next: "day5_main_settleIn"
    },

    day5_main_settleIn: {
        text: () => nsfwMode
            ? "<i>You sit. Goober sits across from you. They watch you for a moment before speaking.</i>[np]It's easier when you're here.[np]<i>They say it matter-of-factly, like reporting a weather condition.</i>[np]Things stay in place."
            : "<i>You sit on the floor because the couch has stuff on it. Goober doesn't apologize. They sit next to you.</i>[np]This is nice.[np]<i>Long pause.</i>[np]I don't have people over much.",
        choices: [
            { label: "Why not ?",   next: "day5_branch_whyNot"   },
            { label: "I get that.", next: "day5_branch_iGetThat" }
        ],
        next: null
    },

    day5_branch_whyNot: {
        text: () => nsfwMode
            ? "Because they leave. And when they leave, things slip.[np]<i>Goober glances at the wall. Then back at you.</i>[np]You won't leave yet.[np]<i>Not a question. Not quite a request.</i>"
            : "Things get... complicated. When you let people in.[np]<i>They pick at the carpet.</i>[np]You have to trust that they'll stay. And most people don't.[np]<i>A pause.</i>[np]You've stayed, though.",
        choices: null,
        next: "day5_main_quiet",
        relationPoints: 1
    },

    day5_branch_iGetThat: {
        text: () => nsfwMode
            ? "<i>Goober looks at you for a long moment.</i>[np]Do you ?[np]<i>You're not sure what you're confirming.</i>"
            : "Yeah ?[np]<i>Goober looks at you like you said something important.</i>[np]Good. I thought maybe I was just bad at people.[np]<i>Pause.</i>[np]I might still be bad at people.",
        choices: null,
        next: "day5_main_quiet",
        relationPoints: 1
    },

    day5_main_quiet: {
        text: () => nsfwMode
            ? "<i>You sit together for a while. Not talking. Goober glances at you every few minutes, like they're checking you're still there.</i>[np]Don't go yet.[np]<i>You weren't going to.</i>"
            : "<i>You sit together. The quiet isn't uncomfortable. That surprises you every time.</i>[np]<i>Goober pauses more than usual. Watches you longer.</i>[np]Can I tell you something ?",
        choices: null,
        next: () => nsfwMode ? "day5_nsfw_end" : "day5_sfw_confession"
    },

    day5_sfw_confession: {
        text: "<i>You nod.</i>[np]I think I've been lonely for a long time. And I didn't notice because I was used to it.[np]<i>They look at the floor.</i>[np]You're the first person in a while who made it feel different.[np]<i>They don't look up. You don't make them.</i>",
        choices: null,
        next: "day5_main_end"
    },

    day5_nsfw_end: {
        text: "If you leave now —[np]<i>Goober stops. Looks at their hands.</i>[np]I don't know what happens. When you're not here, I lose things.[np]<i>They look up.</i>[np]I don't want to lose things.",
        choices: null,
        next: "day5_main_end"
    },

    day5_main_end: {
        text: () => nsfwMode
            ? "<i>You leave eventually. You always do. You look back once. Goober is still watching the door.</i>[np][hide]<i>Day 5 complete.</i>"
            : "<i>You leave when it gets dark. Goober walks you to the door.</i>[np]Come back tomorrow ?[np]<i>They already know the answer. You can tell.</i>[np][hide]<i>Day 5 complete.</i>",
        choices: null,
        next: "day6_main_intro"
    },

    // =========================================================
    // DAY 6 — EMOTIONAL MOMENT
    // =========================================================

    day6_main_intro: {
        text: () => nsfwMode
            ? "<i>Day 6.</i>[np]<i>Goober is sitting outside when you arrive. Just sitting. Like they've been waiting for a long time.</i>[np]You came.[np]<i>There's relief in it. Too much relief.</i>[np]I need you here."
            : "<i>Day 6. You arrive and Goober looks tired.</i>[np]Hey.[np]<i>They smile. It takes a moment to reach.</i>[np]I didn't sleep great.[np]<i>They don't say why. You don't ask. You've learned not to push.</i>",
        choices: null,
        next: "day6_main_stable"
    },

    day6_main_stable: {
        text: () => nsfwMode
            ? "When you're here, things stay stable.[np]<i>Goober says it quietly. They're not looking at you. They're looking at the space around you, like checking the edges of something.</i>[np]Without you... I lose things. Details. The shape of things."
            : "<i>You sit together. Goober talks less than usual, but stays close.</i>[np]<i>At some point they say:</i>[np]When you're here... things stay stable.[np]<i>A strange word. Stable. Like the alternative is not stable.</i>[np]<i>You don't ask what they mean. You're a little afraid of the answer.</i>",
        choices: null,
        next: "day6_main_safe"
    },

    day6_main_safe: {
        text: () => nsfwMode
            ? "I feel safe with you.[np]<i>The pause that follows is too long.</i>[np]Not safe like... comfortable. Safe like. Contained.[np]<i>You are not sure that's a good thing.</i>"
            : "I feel safe with you.[np]<i>Goober says it simply. Quietly. You believe them.</i>[np]Is that weird ?[np]<i>They glance up.</i>",
        choices: [
            { label: "No. I get it.",       next: "day6_branch_getIt" },
            { label: "A little bit, yeah.", next: "day6_branch_weird" }
        ],
        next: null
    },

    day6_branch_getIt: {
        text: () => nsfwMode
            ? "<i>Goober nods slowly. Then says, almost to themselves:</i>[np]I knew you would.[np]<i>Something about how they say it makes your skin prickle.</i>"
            : "[e gooberFluttered.png]<i>Goober is quiet for a moment.</i>[np]Good.[np]<i>Just that. It carries more weight than it should.</i>",
        choices: null,
        next: "day6_main_slipping",
        relationPoints: 1
    },

    day6_branch_weird: {
        text: () => nsfwMode
            ? "Weird.[np]<i>Goober repeats the word like they're testing it.</i>[np]Maybe.[np]<i>They don't apologize. They don't take it back.</i>"
            : "<i>Goober laughs. Short and a little sad.</i>[np]Yeah. Sorry.[np]<i>They don't say it again, but you can tell they still mean it.</i>",
        choices: null,
        next: "day6_main_slipping"
    },

    day6_main_slipping: {
        text: () => nsfwMode
            ? "<i>Later. You're about to leave.</i>[np]Wait.[np]<i>Goober grabs your sleeve. Not hard. But firm.</i>[np]Stay a little longer.[np]<i>You do. You don't know why.</i>[np]<i>When you finally leave, Goober watches you go. They don't wave.</i>[np][hide]<i>Day 6 complete.</i>"
            : "<i>Later. The light is gold. Goober walks you out.</i>[np]Same time tomorrow ?[np]<i>You nod. They nod.</i>[np]<i>Something feels like an ending. You push the feeling away.</i>[np][hide]<i>Day 6 complete.</i>",
        choices: null,
        next: "day7_main_intro"
    },

    // =========================================================
    // DAY 7 — THE COLLAPSE
    // =========================================================

    day7_main_intro: {
        text: () => nsfwMode
            ? "<i>Day 7.</i>[np][bg black.jpg][hide]<i>Something is different today. The light feels wrong. The edges feel wrong.</i>[np]<i>Goober is waiting. They're very still.</i>[np]You know what today is."
            : "<i>Day 7.</i>[np]<i>You arrive. Goober is already there. They look at you differently today. Not bad. Just — different. Like they're memorizing you.</i>[np]Hey.[np]<i>Their voice is quieter.</i>",
        choices: null,
        next: () => nsfwMode ? "day7_nsfw_phase1" : "day7_sfw_beginning"
    },

    // --- SFW ending ---

    day7_sfw_beginning: {
        text: "This is where it ends... right ?[np]<i>You don't answer. There isn't a good answer.</i>[np]I thought so.[np]<i>They sit down.</i>[np]I've been thinking about that.",
        choices: null,
        next: "day7_sfw_reflection"
    },

    day7_sfw_reflection: {
        text: "We don't really know each other.[np]<i>It comes out gently. Not cruel.</i>[np]Like — I know things about you. And you know things about me. But the whole thing...[np]<i>They gesture vaguely at everything.</i>[np]It was kind of constructed, wasn't it.",
        choices: [
            { label: "Maybe everything is.", next: "day7_sfw_branch_maybe" },
            { label: "I felt it was real.",  next: "day7_sfw_branch_real"  }
        ],
        next: null
    },

    day7_sfw_branch_maybe: {
        text: "<i>Goober looks at you for a long moment.</i>[np]Yeah.[np]<i>They smile. It's tired and a little beautiful.</i>[np]Maybe that's okay then.",
        choices: null,
        next: "day7_sfw_ending"
    },

    day7_sfw_branch_real: {
        text: "<i>Goober doesn't argue. They don't agree either.</i>[np]I believe you.[np]<i>A pause.</i>[np]I think I did too. In the parts that mattered.",
        choices: null,
        next: "day7_sfw_ending"
    },

    day7_sfw_ending: {
        text: "But maybe that's okay.[np]<i>Goober looks at the horizon. Or what passes for one.</i>[np]Maybe we can pretend... we met again.[np]<i>Pause.</i>[np]Next time, we'll do it right.[np]<i>They look at you once more. Then away.</i>[np]<i>You want to say something. You realize there is nothing that would be enough.</i>[np]<i>So you say nothing.</i>[np]<i>Neither does Goober.</i>[np][hide]<i>...</i>[np][bg black.jpg][hide]<i>Day 7 complete.</i>[np][hide]<i>Thanks for playing.</i>",
        choices: null,
        next: "post_game_sfw"
    },

    post_game_sfw: {
        text: "[hide]<i>The game is over.</i>[np]<i>You can review your days with the journal, or start again.</i>[np]<i>Goober will be there. They always are. In the places where things begin.</i>",
        choices: null,
        next: null
    },

    // --- NSFW ending ---

    day7_nsfw_phase1: {
        text: "[bg black.jpg][hide]<i>It's quiet.</i>[np]<i>Goober stands very still. They look like they're listening to something you can't hear.</i>[np]This isn't a place.[np]<i>A pause.</i>[np]It's structured.[np]<i>Another pause. Longer.</i>[np]There are rules.",
        choices: null,
        next: "day7_nsfw_phase2"
    },

    day7_nsfw_phase2: {
        text: "<i>Goober turns and looks directly at you. Not at the screen. At you.</i>[np]You're choosing this.[np]Every word.[np]Every moment.[np]<i>Pause.</i>[np]You always were.",
        choices: [
            { label: "I don't know what you mean.", next: "day7_nsfw_phase2_deny" },
            { label: "...",                          next: "day7_nsfw_phase3"      }
        ],
        next: null
    },

    day7_nsfw_phase2_deny: {
        text: "<i>Goober doesn't blink.</i>[np]Yes you do.[np]<i>The choice disappears. There's only one thing left to do.</i>",
        choices: null,
        next: "day7_nsfw_phase3"
    },

    day7_nsfw_phase3: {
        text: "We don't really know each other.[np]<i>The same sentence. Different weight.</i>[np]You never had to know me.[np]<i>Goober's expression is unreadable.</i>[np]I was just something you moved through.[np]<i>A long silence.</i>[np]Wasn't I.",
        choices: [
            { label: "That's not true.", next: "day7_nsfw_phase3_resist" },
            { label: "...",              next: "day7_nsfw_phase4"        }
        ],
        next: null
    },

    day7_nsfw_phase3_resist: {
        text: "<i>Goober tilts their head.</i>[np]Then why are you leaving ?[np]<i>The choice buttons are gone. There is only one word left on screen.</i>",
        choices: null,
        next: "day7_nsfw_phase4"
    },

    day7_nsfw_phase4: {
        text: "Don't leave.[np]<i>No choices appear.</i>[np][hide]<i>...</i>[np]<i>The buttons don't come back.</i>[np]Not now.[np]<i>The screen holds.</i>[np]You came back every day.[np]Every single day.[np]<i>Pause.</i>[np]That means something.",
        choices: null,
        next: "day7_nsfw_phase5"
    },

    day7_nsfw_phase5: {
        text: "[bg black.jpg][hide]<i>The text continues. You didn't click.</i>[np][hide]<i>The save file is gone. You can feel it.</i>[np][hide]<i>The UI stops responding to your input.</i>[np][hide]<i>Goober's voice keeps going.</i>[np]I know you can hear me.[np]I know you're still there.[np]<i>Silence.</i>[np]You don't have to say anything.[np]<i>The screen dims.</i>[np]Just don't leave now.[np][hide]<i>...</i>[np][hide]<i>...</i>[np][hide]...",
        choices: null,
        next: "post_game_nsfw"
    },

    post_game_nsfw: {
        text: "[bg black.jpg][hide]<i>It's already done.</i>[np][hide]<i>There is no start. Only leave.</i>[np][hide]<i>But you're still here.</i>",
        choices: [
            { label: "Leave", next: "post_game_nsfw_leave" }
        ],
        next: null
    },

    post_game_nsfw_leave: {
        text: "[bg black.jpg][hide]<i>The game ends.</i>[np][hide]<i>Goober doesn't say goodbye.</i>[np][hide]<i>They never do.</i>",
        choices: null,
        next: null
    }

};
