/*
DIALOGUE TREE

All fields that branch on creepyMode are arrow functions () => ...
evaluated at runtime by resolveNode(). Never at load time.

Tags:
[np]              new text box
[hide]            hide Goober sprite
[e file.png]      swap sprite image
[e gooberGlitch]  apply CSS glitch to sprite
[bg file.jpg]     swap background
*/

var dialogueTree = {

    day1_main_intro: {
        text: () => creepyMode
            ? "[bg classroom.jpg]Hey.[np]<i>They say it like they already know you. Like this is the second time, not the first.</i>[np]I was wondering when you'd show up."
            : "[bg classroom.jpg]Oh — hi ![np]<i>They wave too fast, then seem embarrassed about it.</i>[np]Sorry. I'm Goober. I say that like you asked.",
        choices: null,
        next: "day1_name_reaction"
    },

    day1_name_reaction: {
        text: () => creepyMode
            ? "You don't have to introduce yourself.[np]<i>A pause.</i>[np]I already know what kind of person you are.[np]<i>They smile before you can ask what they mean.</i>"
            : "That's — yeah, that's my name, I didn't mishear myself.[np]So. What kind of person are you ? I'm asking because I genuinely want to know, not just to have something to say.",
        choices: null,
        next: "day1_personality_choice"
    },

    day1_personality_choice: {
        text: "So... what kind of person are you ?",
        choices: [
            { label: "Adventurous", next: "day1_branch_adventurous" },
            { label: "Silly",       next: "day1_branch_silly"       },
            { label: "Quiet",       next: "day1_branch_quiet"       }
        ]
    },

    day1_branch_adventurous: {
        text: () => creepyMode
            ? "[e gooberSmug.png]Adventurous.[np]<i>Goober tilts their head. Like they already knew you'd say that.</i>[np]Interesting."
            : "[e gooberFluttered.png]Oh, I love that ![np]Okay so I have approximately forty ideas and none of them are safe. Which is fine. That's fine.",
        choices: null,
        next: "day1_main_wander_setup"
    },

    day1_branch_silly: {
        text: () => creepyMode
            ? "[e gooberSmug.png]Silly.[np]<i>Goober nods slowly.</i>[np]Yeah. I thought so."
            : "[e gooberFluttered.png]No way, me too ! Okay we're going to get along embarrassingly well, I can already tell.",
        choices: null,
        next: "day1_main_wander_setup",
        relationPoints: 1
    },

    day1_branch_quiet: {
        text: () => creepyMode
            ? "[e gooberThinking.png]Quiet.[np]<i>Goober looks at you for a moment longer than is comfortable.</i>[np]That's okay. I'll figure out the rest."
            : "[e goober.png]Oh, that's okay ! I talk enough for two people anyway.[np]You just have to occasionally nod so I know you're still there.",
        choices: null,
        next: "day1_main_wander_setup",
        relationPoints: 1
    },

    day1_main_wander_setup: {
        text: () => creepyMode
            ? "Come on. I know a place.[np]<i>They're already walking. They didn't ask if you wanted to go.</i>"
            : "So — do you want to just... walk ? With no plan ? I find that's where the good stuff happens.[np]Also I don't have a plan so it works out.",
        choices: null,
        next: "day1_main_wander"
    },

    day1_main_wander: {
        text: () => creepyMode
            ? "[bg town.jpg][hide]<i>You walk. Goober sets the pace. You pass a convenience store, a closed florist, a bus stop with a missing bench.</i>[np]<i>Goober doesn't explain where you're going. You don't ask.</i>[np]<i>It should feel strange. It mostly doesn't.</i>"
            : "[bg town.jpg][hide]<i>You and Goober wander through town with no destination. Goober narrates everything — shop signs, pigeons, a broken vending machine that apparently wronged them personally in the past.</i>[np]<i>You're not sure when you started actually laughing.</i>",
        choices: null,
        next: "day1_convenience_store"
    },

    day1_convenience_store: {
        text: () => creepyMode
            ? "[e gooberSerious.png]You hungry ?[np]<i>They're already pushing open the convenience store door.</i>[np]<i>They buy something small without asking what you want. They hand it to you anyway.</i>[np]<i>It's exactly what you would have picked.</i>"
            : "[e goober.png]Okay we're going in here.[np]<i>Goober gestures at the convenience store like it's a sacred place.</i>[np]I have a system. It's complicated. The short version is: one thing from each colour of shelf.[np]<i>The system is not complicated. They just like snacks.</i>",
        choices: null,
        next: "day1_snack_chat"
    },

    day1_snack_chat: {
        text: () => creepyMode
            ? "[hide]<i>You eat something outside. Goober watches the street. They ask about small things — where you live, what you do, whether you have many friends.</i>[np]<i>The questions are casual. They don't feel casual.</i>[np]Not many friends ?[np]<i>It isn't really a question.</i>[np]That's fine. You don't need many."
            : "[hide]<i>You end up sitting on a wall outside, eating the snacks. Goober talks about the neighbourhood like it's a person they know.</i>[np]That building used to be a bookshop. Now it's a bubble tea place.[np]Progress, I guess.[np]<i>They don't sound convinced.</i>",
        choices: null,
        next: "day1_duck_moment"
    },

    day1_duck_moment: {
        text: () => creepyMode
            ? "[e gooberThinking.png]You don't say much, do you.[np]<i>It's not a criticism. Just an observation.</i>[np]That's okay. I can work with that.[np]<i>You're not sure what they mean by work with.</i>"
            : "[e gooberThinking.png]Okay — look. Ducks.[np]<i>There is, in fact, a small decorative pond. There are, in fact, ducks.</i>[np]I've watched a lot of nature documentaries. They look peaceful. They are not.[np]Under the water, their feet are going absolutely insane.[np]<i>You watch the ducks. Goober watches you watch the ducks.</i>",
        choices: null,
        next: "day1_activity_choice"
    },

    day1_activity_choice: {
        text: "So — what do you want to do ?",
        choices: [
            { label: "Go to the movies",   next: "day1_branch_movies"      },
            { label: "Play video games",   next: "day1_branch_videogames"  },
            { label: "Just keep walking",  next: "day1_branch_keepwalking" }
        ]
    },

    day1_branch_movies: {
        text: () => creepyMode
            ? "[e goober.png]Sure.[np][hide]<i>You go. The film is long and forgettable. Goober watches you more than the screen.</i>[np]<i>You only notice at the end. You're not sure for how long it had been happening.</i>"
            : "[e gooberFluttered.png]Yes ! Okay — I should warn you I cry at everything.[np][hide]<i>You go. The film is a comedy. Goober cries twice. Once at a dog and once, inexplicably, at a car commercial that plays before it.</i>[np]<i>You don't mention it. You find it oddly endearing.</i>",
        choices: null,
        next: "day1_main_atYourPlace_setup"
    },

    day1_branch_videogames: {
        text: () => creepyMode
            ? "[e goober.png]I know a spot.[np][hide]<i>There's an arcade two streets over. Goober is very good at every machine. They don't offer to let you win.</i>[np]<i>You lose every round. Goober doesn't gloat. That somehow makes it worse.</i>"
            : "[e gooberFluttered.png]Finally, someone with taste.[np][hide]<i>There's an arcade nearby. Goober wins every machine they touch and does not apologize once.</i>[np]You'll get there. Maybe.[np]<i>They grin. You don't believe them. Neither do they.</i>",
        choices: null,
        next: "day1_main_atYourPlace_setup"
    },

    day1_branch_keepwalking: {
        text: () => creepyMode
            ? "[e goober.png]Good.[np][hide]<i>You walk until the neighbourhood gets quieter. Goober seems to relax slightly.</i>[np]I like it when things are quieter.[np]<i>Pause.</i>[np]Less to keep track of."
            : "[e goober.png]Correct answer.[np][hide]<i>You keep walking until you end up somewhere neither of you planned — a small square with a fountain that isn't running, some benches, evening light going orange.</i>[np]I didn't know this was here.[np]<i>You believe them. It feels like a discovery.</i>",
        choices: null,
        next: "day1_main_atYourPlace_setup"
    },

    day1_main_atYourPlace_setup: {
        text: () => creepyMode
            ? "[e gooberSerious.png]It's getting late.[np]<i>Goober says it like a statement of fact, not a goodbye.</i>[np]We should go somewhere.[np]<i>Your place is implied somehow. You're not sure how.</i>"
            : "[e gooberThinking.png]It's getting kind of late.[np]<i>Goober glances around like they're stalling.</i>[np]We could... I don't know. Go somewhere ? Or not. You probably have things to do.[np]<i>They very clearly hope you don't have things to do.</i>",
        choices: [
            { label: "Come to mine ?",     next: "day1_main_atYourPlace" },
            { label: "Maybe another day.", next: "day1_main_atYourPlace" }
        ]
    },

    day1_main_atYourPlace: {
        text: () => creepyMode
            ? "[hide]<i>You end up at your place. Goober takes it in without comment — the shelves, the mess, the way you've arranged things.</i>[np]<i>They don't ask if it's okay that they're here. They just sit down.</i>[np]It's comfortable here.[np]<i>The way they say it suggests they mean something other than the furniture.</i>"
            : "[hide]<i>You end up at your place as the sky goes dark. Goober looks around like they're filing everything away for later.</i>[np]I like it here. It smells like a person actually lives here.[np]<i>They seem to mean this as a compliment.</i>[np]I'm realising that sounded weird. It smells nice. Normal. I'll stop.",
        choices: null,
        next: "day1_evening_chat"
    },

    day1_evening_chat: {
        text: () => creepyMode
            ? "[e gooberSerious.png]Do you do this a lot ? Let people in ?[np]<i>You haven't really let them in. They sort of let themselves.</i>[np]<i>You don't say that.</i>[np]<i>Goober nods, like you answered anyway.</i>"
            : "[e gooberThinking.png]Can I ask you something ?[np]<i>You nod.</i>[np]Is it ever weird for you ? Meeting people. Like — the first bit. Before you know if it's going to be a thing.[np]<i>A pause.</i>[np]I always feel like I'm performing slightly. Like I'm doing a Goober impression.",
        choices: [
            { label: "Yeah, I get that.",    next: "day1_evening_connect" },
            { label: "You seem fine to me.", next: "day1_evening_connect" }
        ]
    },

    day1_evening_connect: {
        text: () => creepyMode
            ? "[e gooberSmug.png]<i>Goober seems pleased with your answer. Whatever you said.</i>[np]I knew you'd get it.[np]<i>The certainty sits slightly wrong. You've known them for three hours.</i>"
            : "[e gooberFluttered.png]<i>Goober is quiet for a moment. Then:</i>[np]Okay. Good.[np]<i>They don't elaborate. They don't need to. Something loosened.</i>[np]I'm going to go before I ruin it by saying something weird.[np]<i>They've already said several weird things. You don't mention this.</i>",
        choices: null,
        next: "day1_goodbye"
    },

    day1_goodbye: {
        text: () => creepyMode
            ? "[e gooberSerious.png]I'll see you tomorrow.[np]<i>No question mark. Just a fact, delivered with calm certainty.</i>[np][hide]<i>Day 1 complete.</i>"
            : "[e goober.png]Okay. I'm going.[np]<i>They stand up.</i>[np]That was genuinely nice. I'm saying that now so it isn't weird to say later.[np]See you tomorrow ?",
        choices: () => creepyMode ? null : [
            { label: "Sure.",      next: "day1_end_positive" },
            { label: "We'll see.", next: "day1_end_neutral"  }
        ],
        next: () => creepyMode ? "day2_main_intro" : null
    },

    day1_end_positive: {
        text: "[e gooberFluttered.png]Good.[np]<i>Just that. They leave quickly, like they wanted to go before the moment passed.</i>[np][hide]<i>Day 1 complete.</i>",
        choices: null,
        next: "day2_main_intro",
        relationPoints: 1
    },

    day1_end_neutral: {
        text: "[e goober.png]I'll take that as a yes.[np]<i>They grin. They're already at the door.</i>[np][hide]<i>Day 1 complete.</i>",
        choices: null,
        next: "day2_main_intro"
    },


    day2_main_intro: {
        text: () => creepyMode
            ? "[bg town.jpg]You came back.[np]<i>Goober is waiting exactly where you met yesterday. Like they didn't move.</i>[np]<i>They say it like a fact being confirmed, not a greeting.</i>[np]Good."
            : "[bg town.jpg]Oh good, you actually came.[np]<i>Goober is perched on a wall, mid-snack. They wave too fast again.</i>[np]I wasn't worried. I was maybe slightly worried.",
        choices: null,
        next: "day2_gym_invite"
    },

    day2_gym_invite: {
        text: () => creepyMode
            ? "[e gooberSerious.png]There's a place I want to show you. Old gym. It's been closed for years.[np]<i>They're already walking.</i>[np]Come on."
            : "[e goober.png]Okay so — I found something. There's this abandoned gym two streets over and I really want to go inside it.[np]Which is maybe slightly illegal. But in a low-stakes way. You in ?",
        choices: [
            { label: "Let's go.",  next: "day2_gym_accept" },
            { label: "I'll pass.", next: "day2_gym_refuse" }
        ]
    },

    day2_gym_accept: {
        text: "[hide]<i>You go. The gym smells like old rubber and ambition that peaked in the nineties.</i>[np]<i>Half the lockers are still full. Someone left a single trainer on a bench, laces tied.</i>[np][bg gym.jpg]<i>Goober is already touching everything.</i>",
        choices: null,
        next: "day2_gym_explore"
    },

    day2_gym_refuse: {
        text: () => creepyMode
            ? "[e gooberSerious.png]We're going.[np]<i>It isn't aggressive. It's just — final.</i>[np]<i>You go.</i>"
            : "[e gooberSad.png]Oh.[np]<i>A pause. Real disappointment, briefly visible.</i>[np]That's — yeah, okay. We can do something else.[np]<i>Beat.</i>[np]The gym is probably illegal anyway. I wasn't going to mention that.[np]<i>You go anyway. It seemed important to them.</i>",
        choices: null,
        next: "day2_gym_explore"
    },

    day2_gym_explore: {
        text: () => creepyMode
            ? "[bg gym.jpg][e gooberSerious.png]Look at this place.[np]<i>Goober walks slowly through the gym, trailing a hand along the equipment.</i>[np]Things just... stop. And everyone acts like they were never here.[np]<i>They aren't talking about the gym.</i>"
            : "[bg gym.jpg][e gooberFluttered.png]This is incredible. Look at all this stuff ![np]<i>Goober is already on a piece of equipment that probably isn't safe.</i>[np]What do you think this one does ?[np]<i>You both agree it's unclear. Goober uses it anyway.</i>",
        choices: null,
        next: "day2_gym_discovery"
    },

    day2_gym_discovery: {
        text: () => creepyMode
            ? "[e gooberSmug.png]Hey. Come look at this.[np]<i>There's a storage room at the back. Old sound system, a stack of sports bibs, paint cans from what must have been a renovation that never finished.</i>[np]<i>Goober looks at the paint cans. Then at you. Then at the walls.</i>[np]We should leave something behind."
            : "[e gooberFluttered.png]Oh — look. Paint cans.[np]<i>The storage room has a half-used set of spray paint from some long-ago renovation. The colours are violent.</i>[np]You know what this means.[np]<i>You do not, yet.</i>",
        choices: null,
        next: "day2_paint_choice"
    },

    day2_paint_choice: {
        text: () => creepyMode
            ? "Help me.[np]<i>Goober is already opening a can. Not asking, exactly. But looking at you like your answer matters.</i>"
            : "We redecorate. Obviously.[np]<i>They're already shaking a can.</i>[np]Art doesn't ask permission.",
        choices: [
            { label: "Let's do it.",           next: "day2_paint_yes"  },
            { label: "What are we painting ?", next: "day2_paint_what" }
        ]
    },

    day2_paint_what: {
        text: () => creepyMode
            ? "[e gooberThinking.png]Whatever we want.[np]<i>Pause.</i>[np]That's kind of the point."
            : "[e gooberThinking.png]Whatever we want. It's an abandoned gym. The audience is zero people.[np]Which is freeing, actually.",
        choices: null,
        next: "day2_paint_yes"
    },

    day2_paint_yes: {
        text: () => creepyMode
            ? "[hide]<i>You paint. Goober works in silence, focused. What they make is strange — geometric shapes that almost resolve into something before they don't.</i>[np]<i>You paint something next to it. Goober glances over once. Nods.</i>[np][e gooberSerious.png]Good.[np]<i>You're not sure what you made. Goober seems to know exactly.</i>"
            : "[hide]<i>You paint for an hour. There is no plan. Goober makes an enormous abstract shape in three colours. You add something next to it that doesn't quite connect.</i>[np]<i>It looks like a conversation.</i>[np][e gooberThinking.png]I want to come back here.[np]<i>They say it quietly, like a private thought that slipped out.</i>",
        choices: null,
        next: "day2_after_gym"
    },

    day2_after_gym: {
        text: () => creepyMode
            ? "[hide]<i>You leave the gym. Goober is quieter outside than in. Like the building kept something in that the street doesn't.</i>[np][bg town.jpg][e gooberSerious.png]You did well in there.[np]<i>You're not sure what you did. You painted a wall.</i>[np]<i>Goober seems to mean something else.</i>"
            : "[hide]<i>You leave the gym as the light goes flat. The town feels different after a small trespass — brighter, slightly unreal.</i>[np][bg town.jpg][e goober.png]Okay. I'm starving. You ?",
        choices: null,
        next: "day2_food_choice"
    },

    day2_food_choice: {
        text: "Burgers or Italian ?",
        choices: [
            { label: "Burgers",  next: "day2_burgers" },
            { label: "Italian",  next: "day2_italian" }
        ],
        ghostChoice: () => creepyMode ? { label: "Chinese", next: "day2_branch_ghost_glitch_chinese" } : null,
        next: null
    },

    day2_burgers: {
        text: () => pick([
            "[bg restaurant.jpg][hide]<i>You eat. Goober steals half your fries without asking and does not apologize. You don't actually mind.</i>[np][e goober.png]Okay these are objectively perfect.[np]<i>They aren't, quite. But Goober seems to be enjoying something more than just the food.</i>",
            "[bg restaurant.jpg][hide]<i>Goober orders without looking at the menu. Like they've been here before. Many times.</i>[np][e goober.png]I come here when I need things to feel normal.[np]<i>You ask what counts as normal.</i>[np]<i>They don't answer. They steal a fry instead.</i>"
        ]),
        choices: null,
        next: "day2_after_food"
    },

    day2_italian: {
        text: () => pick([
            "[bg restaurant.jpg][hide]<i>The food is good. Goober attempts to pronounce everything in an exaggerated accent. The waiter is not amused. You are.</i>[np][e gooberFluttered.png]Okay I think I offended him.[np]<i>You think so too.</i>[np]Worth it.",
            "[bg restaurant.jpg][hide]<i>You eat slowly, like the place deserves it. Goober is quieter here than usual. Not uncomfortable — thoughtful.</i>[np][e gooberThinking.png]I like places with candles on the table.[np]It makes everything look like it's about to be said for the last time.[np]<i>You're not sure how to respond to that. You don't have to.</i>"
        ]),
        choices: null,
        next: "day2_after_food"
    },

    day2_branch_ghost_glitch_chinese: {
        text: "[bg black.jpg][e gooberGlitch]You're not supposed to be here.[np][bg restaurant.jpg][e gooberSurprised.png]<i>A blink. Like a skip in a record.</i>[np]<i>Goober is sitting across from you. The food in front of you is something you didn't order.</i>[np]<i>It's good, though.</i>[np][e gooberSerious.png]I like this place better.[np]<i>You ask what place.</i>[np]This one.[np]<i>They don't explain further. You don't ask.</i>",
        choices: null,
        next: "day2_after_food"
    },

    day2_after_food: {
        text: () => creepyMode
            ? "[bg restaurant.jpg][e gooberSerious.png]Can I ask you something ?[np]<i>You nod.</i>[np]Who else do you spend time with ?[np]<i>The question is light. The interest behind it isn't.</i>"
            : "[bg restaurant.jpg][e gooberThinking.png]Today was good.[np]<i>Goober says it quietly. No exclamation mark. Something real underneath.</i>[np]Like. Really good. I feel like I can be weird around you.[np]I don't get that much.",
        choices: [
            { label: "Friends, mostly.",  next: "day2_end_friends" },
            { label: "Not many people.",  next: "day2_end_few"     }
        ]
    },

    day2_end_friends: {
        text: () => creepyMode
            ? "[e gooberSmug.png]Friends.[np]<i>Goober nods. Files it away.</i>[np]That's good.[np]<i>The pause after it doesn't feel good.</i>[np][hide]<i>Day 2 complete.</i>"
            : "[e goober.png]Nice.[np]<i>Goober smiles. Genuine.</i>[np]I have friends too. They're just — you know. Elsewhere.[np]<i>They wave vaguely at everything outside the window.</i>[np]Anyway. See you tomorrow ?[np][hide]<i>Day 2 complete.</i>",
        choices: null,
        next: "day3_main_intro",
        relationPoints: 1
    },

    day2_end_few: {
        text: () => creepyMode
            ? "[e gooberSmug.png]Not many.[np]<i>Goober looks at you with something that could be sympathy. It sits slightly wrong.</i>[np]Good.[np]<i>Just that.</i>[np][hide]<i>Day 2 complete.</i>"
            : "[e gooberFluttered.png]Me neither, honestly.[np]<i>A beat.</i>[np]I think that's why today felt — I don't know. Like something.[np]Okay I'm leaving before that gets sadder. See you tomorrow.[np][hide]<i>Day 2 complete.</i>",
        choices: null,
        next: "day3_main_intro",
        relationPoints: 2
    },

    day3_main_intro: {
        text: () => creepyMode
            ? "[bg town.jpg]You're here.[np]<i>Goober is in the same spot. Same posture. Like time reset.</i>[np]<i>They don't say good morning. They say it like a checkpoint.</i>[np]Good."
            : "[bg town.jpg]<i>Day 3. The weather is identical to yesterday. That's probably just weather.</i>[np]Oh, you're here ![np]<i>Goober waves. Same hand. Same angle. You notice, and immediately feel strange for noticing.</i>[np]...Hey. That sounded normal, right ?",
        choices: null,
        next: "day3_deja_vu"
    },

    day3_deja_vu: {
        text: () => creepyMode
            ? "[e gooberThinking.png]Do you ever feel like this has happened before ?[np]<i>They aren't asking casually. They're studying you.</i>"
            : "[e gooberThinking.png]Do you ever feel like this has happened before ?[np]<i>A pause that's slightly too long.</i>[np]Not like — something specific. Just. This. Generally.",
        choices: [
            { label: "Yeah, actually.", next: "day3_deja_yes" },
            { label: "Not really.",     next: "day3_deja_no"  }
        ]
    },

    day3_deja_yes: {
        text: () => creepyMode
            ? "[e gooberSerious.png]...[np]<i>A long silence.</i>[np]I knew you'd say that.[np]<i>They say it with no surprise at all. Like it was already written down somewhere.</i>"
            : "[e gooberSurprised.png]...[np]<i>Something moves across Goober's face. Not surprise — the opposite of it.</i>[np]Yeah.[np]<i>They blink. Then smile. A little too fast.</i>[np]Weird, right ? Anyway —",
        choices: null,
        next: "day3_bookshop_setup",
        relationPoints: 1
    },

    day3_deja_no: {
        text: () => creepyMode
            ? "[e gooberSerious.png]...[np]<i>Goober looks at you like you gave the wrong answer.</i>[np]Maybe it's just me.[np]<i>They don't believe that.</i>"
            : "[e gooberSad.png]Oh.[np]<i>Goober glances away.</i>[np]Maybe it's just me. Forget I said anything.",
        choices: null,
        next: "day3_bookshop_setup"
    },

    day3_bookshop_setup: {
        text: () => creepyMode
            ? "[e gooberSerious.png]Let's walk.[np]<i>They need to move, clearly. Like staying still is a problem.</i>"
            : "[e goober.png]Okay so — I found a bookshop yesterday that I don't think anyone else has found.[np]That's probably not true but it felt true. Come on.",
        choices: null,
        next: "day3_bookshop"
    },

    day3_bookshop: {
        text: () => creepyMode
            ? "[bg town.jpg][hide]<i>You walk. The same corner appears twice. You don't mention it.</i>[np]<i>Goober seems to be counting something under their breath. Or testing something.</i>[np][e gooberSerious.png]We've been here before.[np]Not today.[np]<i>They don't explain further.</i>"
            : "[bg bookshop.jpg][hide]<i>The bookshop is barely a room. It smells like paper and something floral that might be a candle or might just be age.</i>[np][e goober.png]Okay this place is either very special or a fire hazard. Possibly both.[np]<i>They pick up a book. The title faces away from you. They put it back before you can read it.</i>[np]One of those ones that means different things each time.",
        choices: null,
        next: "day3_browse"
    },

    day3_browse: {
        text: () => creepyMode
            ? "[e gooberThinking.png]Do you remember what we talked about yesterday ?[np]<i>Of course you do.</i>[np]I remember too. But not — fully.[np]<i>They're looking at the corner again. The same one.</i>[np]It's like. Parts of it are clear. And then there's a gap."
            : "[bg bookshop.jpg][hide]<i>You both browse for half an hour. Goober picks up everything and reads the back. They put most of them back.</i>[np][e gooberThinking.png]Do you buy books or do you just intend to ?[np]<i>An incredibly specific question.</i>",
        choices: [
            { label: "Buy them, mostly.",  next: "day3_browse_buy"    },
            { label: "Intend to. Mostly.", next: "day3_browse_intend" }
        ]
    },

    day3_browse_buy: {
        text: () => creepyMode
            ? "[e gooberSerious.png]Good.[np]<i>They nod like you confirmed something.</i>[np]Me too. I remember everything I've read.[np]<i>Pause.</i>[np]I just don't always remember reading it."
            : "[e gooberFluttered.png]Same ! Okay there's hope for us.[np]<i>Goober buys something small. They don't show you the title. They seem privately pleased with themselves.</i>",
        choices: null,
        next: "day3_bench"
    },

    day3_browse_intend: {
        text: () => creepyMode
            ? "[e gooberSmug.png]Yeah.[np]<i>They look at the shelves.</i>[np]That's honest.[np]<i>Pause.</i>[np]Most things are intentions. The follow-through is what gets complicated."
            : "[e gooberFluttered.png]Same. I have seventeen books I am definitely going to read.[np]They're mostly decorative at this point.[np]<i>They buy one anyway. With intention.</i>",
        choices: null,
        next: "day3_bench"
    },

    day3_bench: {
        text: () => creepyMode
            ? "[bg park.jpg][e gooberThinking.png]<i>You end up on a bench. Goober sits close. Not uncomfortable — just close.</i>[np]Do you feel like the things you say are already decided ?[np]<i>They're not asking rhetorically.</i>[np]Like you open your mouth and the words are already there. You didn't really choose them."
            : "[bg park.jpg][e gooberThinking.png]<i>You find a bench as the afternoon goes long.</i>[np]Can I ask you something weird ?[np]<i>You nod.</i>[np]Do you ever feel like some conversations were always going to go the way they went ? Like — you couldn't have said anything different.[np]Even if you tried.",
        choices: [
            { label: "That's a strange thought.", next: "day3_strange"   },
            { label: "...Sometimes, yeah.",       next: "day3_sometimes" }
        ]
    },

    day3_strange: {
        text: () => creepyMode
            ? "[e gooberSerious.png]Is it ?[np]<i>They watch the street. Something shifts in their face, just slightly.</i>[np]Maybe."
            : "[e goober.png]Ha. Yeah, probably.[np]<i>Goober laughs. A little hollow.</i>[np]Ignore me, I get philosophical when I'm hungry.[np]<i>You were just at a restaurant. You don't say this.</i>",
        choices: null,
        next: "day3_evening_activity"
    },

    day3_sometimes: {
        text: () => creepyMode
            ? "[e gooberSerious.png]Right.[np]<i>Goober nods. Slowly. Like you confirmed something they already knew.</i>[np]All the time, for me.[np]<i>A long pause.</i>[np]Every time."
            : "[e gooberThinking.png]Yeah ?[np]<i>Goober turns to look at you. Really look.</i>[np]Me too.[np]<i>They don't say anything else. Neither do you. The bench, the park, the afternoon — it all just sits there.</i>",
        choices: null,
        next: "day3_evening_activity",
        relationPoints: 1
    },

    day3_evening_activity: {
        text: () => creepyMode
            ? "[e gooberSerious.png]Come on.[np]<i>Goober stands. The conversation is over, apparently. Or filed somewhere.</i>[np]I want to show you something else."
            : "[e goober.png]Okay — enough deep thoughts. I'm getting weird.[np]<i>Goober stands up and stretches dramatically.</i>[np]Come on. There's something I want to show you before it gets dark.",
        choices: null,
        next: "day3_evening_place"
    },

    day3_evening_place: {
        text: () => creepyMode
            ? "[bg evening_street.jpg][hide]<i>Goober takes you to a street you don't recognise. At the end of it, there's a wall. Floor to ceiling, someone — many someones — have painted over it, layer on layer, years of it.</i>[np][e gooberSerious.png]Nobody planned this.[np]<i>They stand in front of it.</i>[np]Each person just... added. Without knowing what came before would still be there.[np]<i>A pause.</i>[np]It still is, though. Under everything."
            : "[bg evening_street.jpg][hide]<i>Goober takes you to a street you've never noticed. There's a wall at the end of it covered in paintings — not graffiti exactly, more like accumulated years of someone needing to put something somewhere.</i>[np][e gooberFluttered.png]I come here when I can't explain something.[np]<i>They stand back and look at the whole thing.</i>[np]It makes more sense than most conversations I've had.",
        choices: null,
        next: "day3_wall_reaction"
    },

    day3_wall_reaction: {
        text: "What do you think ?",
        choices: [
            { label: "It's beautiful.",      next: "day3_wall_beautiful" },
            { label: "It's overwhelming.",   next: "day3_wall_overwhelming" }
        ]
    },

    day3_wall_beautiful: {
        text: () => creepyMode
            ? "[e gooberSmug.png]<i>Goober looks at you sideways.</i>[np]Yeah.[np]<i>A pause that means something.</i>[np]Most things are, if you look at them long enough."
            : "[e gooberFluttered.png]Right ?![np]<i>Goober seems genuinely delighted you said that.</i>[np]I showed someone this once and they said it looked messy.[np]We didn't hang out after that.[np]<i>You get the impression this is a test you just passed.</i>",
        choices: null,
        next: "day3_walk_home",
        relationPoints: 1
    },

    day3_wall_overwhelming: {
        text: () => creepyMode
            ? "[e gooberThinking.png]Yeah.[np]<i>Goober nods. Like that was the right answer too.</i>[np]Too many voices.[np]Hard to know which one to listen to."
            : "[e goober.png]That's fair.[np]<i>Goober tilts their head.</i>[np]I think that's kind of the point, though ? Like — it's not trying to say one thing.[np]It's just. Evidence that people were here.",
        choices: null,
        next: "day3_walk_home"
    },

    day3_walk_home: {
        text: () => creepyMode
            ? "[hide]<i>You walk back in silence. Goober stays close, like before.</i>[np][e gooberSerious.png]Do you think about what you leave behind ?[np]<i>You say you do, or you don't. Goober nods.</i>[np]You should.[np]<i>Said with more weight than the walk home warrants.</i>"
            : "[hide]<i>You walk back as the streetlights come on. Goober talks about the wall for most of it — who might have made which part, what year, what mood.</i>[np][e gooberThinking.png]I like the idea that some of those people never met each other.[np]And they still made something together.[np]<i>A pause.</i>[np]That's kind of what friendships feel like sometimes.",
        choices: null,
        next: "day3_late_afternoon"
    },

    day3_late_afternoon: {
        text: () => creepyMode
            ? "[hide]<i>It gets late. You walked further than you meant to.</i>[np][e gooberSerious.png]This keeps happening.[np]<i>You don't know if they mean the days or the conversations or the route you keep taking.</i>[np]See you again.[np]<i>Not a question.</i>[np][hide]<i>Day 3 complete.</i>"
            : "[hide]<i>The light changes. That orange-gold kind that means the day peaked and is now being polite about ending.</i>[np][e goober.png]See you again... right ?[np]<i>They ask carefully. Like the answer matters more than it should.</i>",
        choices: () => creepyMode ? null : [
            { label: "Of course.", next: "day3_end_yes"   },
            { label: "Probably.",  next: "day3_end_maybe" }
        ],
        next: () => creepyMode ? "day4_main_intro" : null
    },

    day3_end_yes: {
        text: "[e gooberFluttered.png]Good.[np]<i>Just that. They leave quickly, like before.</i>[np][hide]<i>Day 3 complete.</i>",
        choices: null,
        next: "day4_main_intro",
        relationPoints: 1
    },

    day3_end_maybe: {
        text: "[e goober.png]I'll take it.[np]<i>Goober smiles. It doesn't reach as far as usual.</i>[np][hide]<i>Day 3 complete.</i>",
        choices: null,
        next: "day4_main_intro"
    },

    day4_main_intro: {
        text: () => creepyMode
            ? "[bg park.jpg]<i>Day 4. Goober is already there. Like they didn't leave.</i>[np][e gooberSerious.png]You'll choose the right thing today.[np]<i>You didn't ask.</i>"
            : "[bg park.jpg]<i>Day 4. You notice you came without hesitating. That's new.</i>[np][e goober.png]Hey.[np]<i>Goober has that look they get when they've been thinking about something and aren't sure whether to say it.</i>",
        choices: null,
        next: "day4_trust_question"
    },

    day4_trust_question: {
        text: () => creepyMode
            ? "[e gooberSerious.png]Do you trust me ?[np]<i>Even. Not warm. Not cold. Just — a question that expects a certain answer.</i>"
            : "[e gooberThinking.png]Can I ask you something ?[np]<i>You nod.</i>[np]Do you trust me ?[np]<i>They seem surprised they said it. They don't take it back.</i>",
        choices: [
            { label: "Yes.",        next: "day4_trust_yes" },
            { label: "Not really.", next: "day4_trust_no"  }
        ]
    },

    day4_trust_yes: {
        text: () => creepyMode
            ? "[e gooberSmug.png]Good.[np]<i>A slow smile.</i>[np]Don't question things too much, then.[np]<i>It doesn't feel like a suggestion. It feels like an instruction being issued gently.</i>"
            : "[e gooberFluttered.png]Oh.[np]<i>Goober looks caught off guard. Like they expected something harder.</i>[np]Good.[np]Don't question it too much, I'll get shy.[np]<i>They won't. You can tell.</i>",
        choices: null,
        next: "day4_walk",
        relationPoints: 1
    },

    day4_trust_no: {
        text: () => creepyMode
            ? "[e gooberSerious.png]Why are you fighting it ?[np]<i>Quiet. Almost gentle.</i>[np]You should trust me. Something feels off, right ?[np]<i>They don't wait for an answer. They move on like you agreed.</i>"
            : "[e gooberSad.png]That's fair.[np]<i>A beat.</i>[np]You should, though. Or — you should want to. Something feels off if you don't, right ?[np]<i>They look at their hands. They aren't sure what they meant by that.</i>",
        choices: null,
        next: "day4_walk"
    },

    day4_walk: {
        text: () => creepyMode
            ? "[hide]<i>You walk. Goober is quieter. Less playful. Like they're running calculations.</i>[np][e gooberThinking.png]I've been thinking about the structure of things.[np]<i>You ask what they mean.</i>[np]The way some things are fixed. And some things only look like choices."
            : "[hide]<i>You walk through the park. Goober is quieter today. The usual noise is lower. You've gotten used to it, so the absence is a sound in itself.</i>[np][e gooberThinking.png]Sorry I'm being weird.[np]It's just — I keep noticing patterns. In how things go. And it makes me feel like I understand something, but I don't know what.",
        choices: [
            { label: "What kind of patterns ?",   next: "day4_patterns" },
            { label: "Maybe stop noticing them.", next: "day4_stop"     }
        ]
    },

    day4_patterns: {
        text: () => creepyMode
            ? "[e gooberSerious.png]Rules.[np]<i>Goober counts on their fingers.</i>[np]Patterns. The fact that certain things happen regardless.[np]<i>They look at you.</i>[np]Like this conversation."
            : "[e gooberThinking.png]Like — why certain conversations go a specific way.[np]Why I always end up saying more than I planned.[np]<i>They look sideways at you.</i>[np]Why you make it easy to do that.[np]<i>You don't know what to do with that.</i>",
        choices: null,
        next: "day4_filler_park",
        relationPoints: 1
    },

    day4_stop: {
        text: () => creepyMode
            ? "[e gooberSerious.png]I can't.[np]<i>Simply. Not dramatically. A fact.</i>"
            : "[e goober.png]Ha.[np]<i>A smile. It almost lands.</i>[np]You're probably right.[np]<i>They don't stop. You can tell.</i>",
        choices: null,
        next: "day4_filler_park"
    },

    day4_filler_park: {
        text: () => creepyMode
            ? "[bg park.jpg][hide]<i>You sit somewhere. A bench. Goober throws bits of a granola bar at pigeons with suspicious precision.</i>[np][e gooberSerious.png]Do you notice things about people ? Like — fast. The first time you meet them.[np]<i>You say you do or you don't. They nod like both answers confirm the same thing.</i>"
            : "[bg park.jpg][hide]<i>You find a patch of grass. Goober lies down and stares at the sky with great commitment.</i>[np][e goober.png]Do you think pigeons know they're ugly ?[np]<i>You consider this.</i>[np]Like — are they walking around feeling normal, or is there some pigeon self-awareness going on.[np]<i>This is a genuine question. Goober expects an answer.</i>",
        choices: [
            { label: "They definitely know.",   next: "day4_pigeons_know" },
            { label: "They seem fine with it.", next: "day4_pigeons_fine" }
        ]
    },

    day4_pigeons_know: {
        text: () => creepyMode
            ? "[e gooberSmug.png]Yeah.[np]<i>Goober watches a pigeon with something like recognition.</i>[np]Most things know more than they let on."
            : "[e gooberFluttered.png]That's sad and I respect it ![np]<i>Goober sits up. Clearly the pigeons have settled something internally.</i>[np]Okay. I feel better about things.",
        choices: null,
        next: "day4_afternoon"
    },

    day4_pigeons_fine: {
        text: () => creepyMode
            ? "[e gooberThinking.png]Maybe.[np]<i>A pause.</i>[np]Or maybe they're just very good at not showing it."
            : "[e goober.png]I hope so.[np]I hope everyone is just — fine. Going about it. Not thinking about it too hard.[np]<i>A beat.</i>[np]I think about things too hard.",
        choices: null,
        next: "day4_afternoon"
    },

    day4_afternoon: {
        text: () => creepyMode
            ? "[hide]<i>The afternoon stretches out. You get food from somewhere forgettable. Goober eats and watches people.</i>[np][e gooberSerious.png]You didn't talk to anyone else today.[np]<i>They say it like an observation.</i>[np]<i>It's also true.</i>"
            : "[hide]<i>You get food from a van near the park. You eat on the grass. Two dogs investigate. Goober befriends both of them with remarkable speed.</i>[np][e gooberFluttered.png]Animals always like me.[np]<i>You believe them.</i>[np]I think it's because I don't pretend. They can tell.",
        choices: null,
        next: "day4_afternoon2"
    },

    day4_afternoon2: {
        text: () => creepyMode
            ? "[e gooberSerious.png]<i>Goober is quiet for a while. Long enough that you notice.</i>[np]Do you think about what things would be like if you'd made different choices ?[np]<i>The question is careful. Too careful.</i>[np]Not big ones. Small ones. Whether you turned left or right. Whether you said one thing instead of another."
            : "[e gooberThinking.png]<i>Goober has been quiet for a while. Not distracted — thinking.</i>[np]Can I tell you something that might sound dramatic ?[np]<i>You nod.</i>[np]I think I've spent most of my life waiting for something to feel real.[np]<i>Pause.</i>[np]This feels real.[np]<i>They say it like it surprises them too.</i>",
        choices: [
            { label: "Yeah, I think about that.",   next: "day4_choices_yes" },
            { label: "Not really.",                 next: "day4_choices_no"  }
        ]
    },

    day4_choices_yes: {
        text: () => creepyMode
            ? "[e gooberSmug.png]<i>Goober nods. Unsurprised.</i>[np]Most paths lead here anyway.[np]<i>A pause.</i>[np]But it matters that you chose this one.[np]<i>They look at you directly. Steady.</i>[np]It matters to me."
            : "[e gooberFluttered.png]Right ?[np]Like the small ones compound.[np]<i>They pause.</i>[np]I turned down a street two years ago because of a wet patch on the pavement.[np]Met someone at the end of it.[np]Ended badly.[np]<i>A beat.</i>[np]But I don't regret the street.",
        choices: null,
        next: "day4_end",
        relationPoints: 1
    },

    day4_choices_no: {
        text: () => creepyMode
            ? "[e gooberSerious.png]<i>A flicker across their face. Not disappointment — calculation.</i>[np]Maybe that's easier.[np]<i>They don't sound like they think so.</i>"
            : "[e goober.png]Lucky.[np]<i>Goober laughs. Quiet.</i>[np]I replay mine constantly.[np]Like a film I keep thinking I'll understand if I watch it enough times.[np]<i>A beat.</i>[np]I never do.",
        choices: null,
        next: "day4_end"
    },

    day4_end: {
        text: () => creepyMode
            ? "[e gooberSerious.png]Same time tomorrow.[np]<i>No question. Just scheduling.</i>[np][hide]<i>Day 4 complete.</i>"
            : "[e goober.png]I'll see you tomorrow.[np]<i>Goober says it simply. No question mark. Like it's already settled and they're just confirming paperwork.</i>[np]<i>You don't mind.</i>[np][hide]<i>Day 4 complete.</i>",
        choices: null,
        next: "day5_main_intro"
    },

    day5_main_intro: {
        text: () => creepyMode
            ? "[bg goober_room.jpg]<i>Day 5. You're at Goober's place. You're not entirely sure how that was decided.</i>[np][e gooberSerious.png]It's easier when you don't leave.[np]<i>Before you've sat down.</i>[np]Things don't break as much."
            : "[bg goober_room.jpg]<i>Day 5. You end up at Goober's place. It was Goober's idea, probably. You're not sure when you agreed.</i>[np][e goober.png]Don't look at that corner.[np]<i>You look at the corner. It's a disaster.</i>[np]I said don't look.",
        choices: null,
        next: "day5_settle"
    },

    day5_settle: {
        text: () => creepyMode
            ? "[e gooberSerious.png]<i>You sit. Goober sits across from you. There's a pause where they just — look. Like they're checking something.</i>[np]It's easier when you're here.[np]<i>Flat. Like reporting weather.</i>[np]Things stay in place."
            : "[e goober.png]<i>You sit on the floor because the couch has too much on it. Goober sits next to you without ceremony.</i>[np]I don't have people over much.[np]<i>They glance around the room like they're seeing it from outside for the first time.</i>[np]I forget it looks like this.",
        choices: [
            { label: "Why not ?",   next: "day5_why_not" },
            { label: "I get that.", next: "day5_i_get"   }
        ]
    },

    day5_why_not: {
        text: () => creepyMode
            ? "[e gooberSerious.png]Because they leave.[np]<i>Simple. No drama.</i>[np]And when they leave, things slip. Details.[np]<i>A pause.</i>[np]You won't leave yet.[np]<i>The yet sits in the room.</i>"
            : "[e gooberSad.png]Things get complicated. When you let people in properly.[np]You have to trust they'll stay. Most people don't. Or — they do for a bit. Then they don't.[np]<i>A pause.</i>[np]You've stayed, though. So far.",
        choices: null,
        next: "day5_room_tour",
        relationPoints: 1
    },

    day5_i_get: {
        text: () => creepyMode
            ? "[e gooberThinking.png]Do you ?[np]<i>Not unkind. Just — precise. Like they need to know if you actually mean it.</i>"
            : "[e gooberFluttered.png]Yeah ?[np]<i>Goober looks at you like you said something relieving.</i>[np]Good. I thought maybe I was just bad at this.[np]<i>Pause.</i>[np]I might still be bad at this.",
        choices: null,
        next: "day5_room_tour",
        relationPoints: 1
    },

    day5_room_tour: {
        text: () => creepyMode
            ? "[hide]<i>The room is sparse and deliberate. Whatever Goober keeps here, they keep for a reason. There isn't much they don't need.</i>[np][e gooberSerious.png]You're looking at things.[np]<i>Not a complaint.</i>[np]That's fine. I don't mind you looking."
            : "[hide]<i>You look around properly. There's a shelf that goes: books, a mug, three things that might be decorative or might be functional, books again. One wall has something pinned to it that you can't read from here.</i>[np][e goober.png]That's a list of things I want to do before I die.[np]<i>A pause.</i>[np]It's shorter than it sounds.",
        choices: () => creepyMode ? [
            { label: "What's on that list ?",         next: "day5_brave"  },
            { label: "What is is on detail ?",  next: "day5_list" }
        ] : [
            { label: "What's on it ?",         next: "day5_list"  },
            { label: "That's kind of brave.",  next: "day5_brave" }
        ]
    },

    day5_list: {
        text: () => creepyMode
            ? "[e gooberSmug.png]Not much.[np]<i>Goober doesn't let you see it properly.</i>[np]Most of it isn't ready to be seen yet."
            : "[e gooberThinking.png]Stupid things, mostly. Like — see a particular lighthouse. Eat a specific type of bread in its country of origin. Make something that someone keeps.[np]<i>They look at the list.</i>[np]That last one's recent.",
        choices: null,
        next: "day5_room_objects"
    },

    day5_brave: {
        text: () => creepyMode
            ? "[e gooberSerious.png]It's just a list.[np]<i>A pause.</i>[np]Things are easier when they're written down. They stop changing."
            : "[e gooberSad.png]Or sad, depending.[np]<i>A small smile. Tired.</i>[np]I've had it since I was seventeen. I update it sometimes. Add things, cross things off.[np]The ones I've crossed off are all small. The big ones are still there.",
        choices: null,
        next: "day5_room_objects"
    },

    day5_room_objects: {
        text: () => creepyMode
            ? "[hide]<i>You sit for a while. The room is very still. Goober watches you look at things without saying anything about it.</i>[np][e gooberSerious.png]You can ask, if you want.[np]<i>About anything.</i>[np]<i>The offer is specific somehow. Like there are particular questions they've been waiting for.</i>"
            : "[hide]<i>You look at the shelf properly. There's a small drawing pinned behind the books, nearly hidden. A person — roughly drawn, from behind, looking at something outside the frame.</i>[np][e goober.png]Oh. You found that.[np]<i>Goober doesn't move to take it down.</i>[np]I drew it when I was about twelve.[np]<i>A pause.</i>[np]I don't know what they're looking at either. I never decided.",
        choices: [
            { label: "Who drew that ?", next: "day5_drawing"    },
            { label: "What are they looking at ?", next: "day5_drawing" }
        ]
    },

    day5_drawing: {
        text: () => creepyMode
            ? "[e gooberThinking.png]Something that isn't here yet.[np]<i>They say it without looking at you.</i>[np]Or something that already happened.[np]Hard to tell from the back."
            : "[e gooberSad.png]Me neither.[np]<i>Goober looks at it for a moment.</i>[np]I think maybe they're waiting.[np]Like — not impatiently. Just. Aware that something is coming.[np]<i>They look away from it.</i>[np]I drew a lot when I was younger. Then I stopped.[np]<i>You ask why.[np]I don't know. At some point it felt like putting things down made them more real.[np]And I wasn't sure I wanted that.",
        choices: null,
        next: "day5_quiet"
    },

    day5_quiet: {
        text: () => creepyMode
            ? "[hide]<i>You sit for a while. Goober glances over every few minutes. Checking.</i>[np][e gooberSerious.png]Don't go yet.[np]<i>You weren't going to.</i>[np]<i>They somehow knew that, too.</i>"
            : "[hide]<i>You sit together. The quiet is comfortable in a way you didn't expect. Goober makes tea at some point. They make one for you without asking and get it right.</i>[np][e gooberThinking.png]Can I tell you something ?",
        choices: null,
        next: () => creepyMode ? "day5_creepy_end" : "day5_confession"
    },

    day5_confession: {
        text: "<i>You nod.</i>[np][e gooberSad.png]I think I've been lonely for a long time.[np]And I kept not noticing because it was just — normal. The background.[np]<i>They look at the floor.</i>[np]You make it feel different.[np]<i>They don't look up. You don't make them.</i>",
        choices: null,
        next: "day5_confession2"
    },

    day5_confession2: {
        text: "[e gooberSad.png]I don't know what to do with that.[np]<i>Goober says it quietly. Like they're reporting a fact about themselves from the outside.</i>[np]Like — I notice it now. And I don't know if that's better or worse than not noticing.[np]<i>A long pause.</i>[np]Is it okay that I told you that ?",
        choices: [
            { label: "Yeah. It's okay.",         next: "day5_confession_yes" },
            { label: "I'm glad you did.",        next: "day5_confession_glad" }
        ]
    },

    day5_confession_yes: {
        text: "[e gooberFluttered.png]<i>Goober breathes out slowly.</i>[np]Okay.[np]<i>Just that. Like they needed permission to have said it.</i>[np]Good.",
        choices: null,
        next: "day5_end",
        relationPoints: 1
    },

    day5_confession_glad: {
        text: "[e gooberFluttered.png]<i>Something in Goober's face shifts. The careful neutral expression they wear most of the time falters slightly.</i>[np]...[np]<i>They don't say anything. But something settles.</i>[np]<i>Like a door that had been slightly open has been confirmed to be that way on purpose.</i>",
        choices: null,
        next: "day5_end",
        relationPoints: 2
    },

    day5_creepy_end: {
        text: "[e gooberSerious.png]If you leave —[np]<i>They stop. Look at their hands.</i>[np]I lose things. When you're not here. It gets harder to — hold onto the shape of things.[np]<i>They look up.</i>[np]I don't want to lose things.[np]<i>The weight of it is real. That's what makes it hard to answer.</i>",
        choices: null,
        next: null
    },

    day5_creepy_afterCrash: {
        text: "...[np]It happened, didn't it.[np]<i>Goober is looking directly at you. Not at the room. Not at the wall.</i>[np]I wondered when you'd see it.[np]Don't worry. I put everything back.[np]<i>They smile. It doesn't reach their eyes.</i>[np]I always do.",
        choices: null,
        next: "day5_end"
    },

    day5_end: {
        text: () => creepyMode
            ? "[hide]<i>You leave eventually. You always do.</i>[np]<i>You look back once from the door.</i>[np]<i>Goober is watching. They don't wave.</i>[np][hide]<i>Day 5 complete.</i>"
            : "[hide]<i>You leave when it gets dark. Goober walks you to the door.</i>[np][e goober.png]Come back tomorrow ?[np]<i>They already know the answer. You can tell they already know.</i>[np][hide]<i>Day 5 complete.</i>",
        choices: null,
        next: "day6_main_intro"
    },

    day6_main_intro: {
        text: () => creepyMode
            ? "[bg evening_street.jpg]<i>Day 6. Goober is sitting outside when you arrive. Just sitting. Like they've been there a long time.</i>[np][e gooberSerious.png]You came.[np]<i>Too much relief in it.</i>[np]I need you here.[np]<i>First time they've used that word.</i>"
            : "[bg evening_street.jpg]<i>Day 6. Goober looks tired.</i>[np][e gooberSad.png]Hey.[np]<i>A smile. It takes longer than usual to get there.</i>[np]I didn't sleep great.[np]<i>They don't say why. You don't push.</i>",
        choices: null,
        next: "day6_walk_start"
    },

    day6_walk_start: {
        text: () => creepyMode
            ? "[e gooberSerious.png]Walk with me.[np]<i>You do.</i>"
            : "[e goober.png]Walk ?[np]<i>You nod. They look relieved.</i>",
        choices: null,
        next: "day6_stable"
    },

    day6_stable: {
        text: () => creepyMode
            ? "[hide]<i>You walk. Goober keeps pace with you exactly. Like they've been watching how you move.</i>[np][e gooberSerious.png]When you're here, things stay stable.[np]<i>They say it quietly. Looking at the space around you, not at you.</i>[np]Without you... I lose things. Details. The edges of things."
            : "[hide]<i>You walk. The evening light makes everything look like a painting that hasn't dried yet.</i>[np][e gooberThinking.png]When you're here... things feel stable.[np]<i>An odd word. Stable.</i>[np]<i>Like the alternative is — not.</i>[np]<i>You don't ask. You're a little afraid of the answer.</i>",
        choices: null,
        next: "day6_safe"
    },

    day6_safe: {
        text: () => creepyMode
            ? "[e gooberSerious.png]I feel safe with you.[np]<i>The pause that follows is too long.</i>[np]Not comfortable-safe. Contained.[np]<i>You are not sure that is a good thing.</i>"
            : "[e gooberThinking.png]I feel safe with you.[np]<i>Quietly. You believe them.</i>[np]Is that weird ?",
        choices: [
            { label: "No, I get it.",    next: "day6_get_it" },
            { label: "A little, yeah.", next: "day6_weird"   }
        ]
    },

    day6_get_it: {
        text: () => creepyMode
            ? "[e gooberSmug.png]<i>Goober nods. Then, almost to themselves:</i>[np]I knew you would.[np]<i>Something about the certainty makes your skin prickle.</i>"
            : "[e gooberFluttered.png]<i>A long quiet.</i>[np]Good.[np]<i>Just that. It lands heavier than it should.</i>",
        choices: null,
        next: "day6_evening_filler",
        relationPoints: 1
    },

    day6_weird: {
        text: () => creepyMode
            ? "[e gooberSerious.png]Weird.[np]<i>They repeat it. Tasting the word.</i>[np]Maybe.[np]<i>They don't take it back.</i>"
            : "[e goober.png]<i>Goober laughs. Short. A little sad.</i>[np]Yeah. Sorry.[np]<i>They don't say it again. You can tell they still mean it.</i>",
        choices: null,
        next: "day6_evening_filler"
    },

    day6_evening_filler: {
        text: () => creepyMode
            ? "[hide]<i>You walk until the streetlights come on. Goober talks less than usual. But stays close.</i>[np][e gooberSerious.png]Do you see other people ?[np]<i>Not romantically. Not only romantically.</i>[np]Like — other people. When you're not here."
            : "[hide]<i>You walk until the lights come on. The town looks better at dusk. Everything blurred at the edges in a way that's kind.</i>[np][e gooberThinking.png]I keep thinking about something.[np]<i>You look at them.</i>[np]What it would be like if things stayed like this. This — shape of days.",
        choices: () => creepyMode ? [
            { label: "Sometimes",  next: "day6_nice"   },
            { label: "No, I don't want them to know what I really feel",  next: "day6_change" }
        ] : [
            { label: "That's a nice thought.",  next: "day6_nice"   },
            { label: "Things change, though.",  next: "day6_change" }
        ]
    },

    day6_nice: {
        text: () => creepyMode
            ? "[e gooberSmug.png]Oh yeah ?[np]<i>Goober looks at you. Not the street. You.</i>[np]Doesn't seem like it.[np]<i>Pause.</i>"
            : "[e gooberFluttered.png]Right ?[np]<i>Goober smiles. Real this time. It reaches all the way.</i>[np]I don't want to be dramatic about it.[np]<i>They are, slightly. You don't mind.</i>",
        choices: null,
        next: "day6_late_walk"
    },

    day6_change: {
        text: () => creepyMode
            ? "[e gooberSerious.png]Not if you don't let them.[np]<i>Said simply. Like a fact.</i>"
            : "[e gooberSad.png]Yeah.[np]<i>They look ahead.</i>[np]I know that.[np]<i>They still seem to be hoping, a little.</i>",
        choices: null,
        next: "day6_late_walk"
    },

    day6_late_walk: {
        text: () => creepyMode
            ? "[hide]<i>You walk further than usual. Past the places you've been before, into streets that are quieter and less familiar.</i>[np][e gooberSerious.png]I've been thinking about tomorrow.[np]<i>You ask what they mean.</i>[np]<i>Goober doesn't answer right away. They look at the street ahead like they're reading something on it.</i>[np]Just — tomorrow.[np]<i>There's a weight to the word that doesn't make sense yet.</i>"
            : "[hide]<i>You end up somewhere neither of you planned — a narrow street that opens up into a small square, a fountain that isn't running, benches, the sky going properly dark now.</i>[np][e gooberThinking.png]We keep ending up in places like this.[np]<i>You ask what they mean.</i>[np]Unplanned ones. In-between ones.[np]<i>They sit on the edge of the fountain.</i>[np]I think those are my favourite kind of place.",
        choices: null,
        next: "day6_fountain"
    },

    day6_fountain: {
        text: () => creepyMode
            ? "[e gooberSerious.png]I need you to do something for me.[np]<i>Not dramatic. Almost administrative.</i>[np]Tomorrow — whatever happens — I need you to stay.[np]<i>A pause.</i>[np]Just. Stay.[np]<i>You don't know what they're expecting. Neither, somehow, do they.</i>"
            : "[e gooberSad.png]Can I tell you something ?[np]<i>You nod.</i>[np]Sometimes I look at a place and I think — I want to remember this specifically.[np]Not in general. This angle. This light. This exact version.[np]<i>They look at the square.</i>[np]I want to remember this one.[np]<i>The way they say it. Past tense about something that's still happening.</i>",
        choices: [
            { label: "I'll stay.",            next: "day6_stay_yes"  },
            { label: "What's happening tomorrow ?", next: "day6_stay_question" }
        ]
    },

    day6_stay_yes: {
        text: () => creepyMode
            ? "[e gooberSmug.png]<i>A very long pause.</i>[np]Good.[np]<i>They don't elaborate. They don't need to. Something just changed.</i>"
            : "[e gooberFluttered.png]<i>Goober looks at you for a moment. Then looks away, like they can't do it for too long.</i>[np]Okay.[np]<i>They're quiet for the rest of the walk. It isn't uncomfortable.</i>[np]<i>It feels like something being decided.</i>",
        choices: null,
        next: "day6_end",
        relationPoints: 1
    },

    day6_stay_question: {
        text: () => creepyMode
            ? "[e gooberSerious.png]<i>Goober looks at you.</i>[np]You'll see.[np]<i>Said without threat. Without comfort either. Just — certainty.</i>"
            : "[e gooberThinking.png]I don't know exactly.[np]<i>They're honest about it. That makes it worse somehow.</i>[np]I just know that some things are coming to an end.[np]<i>A pause.</i>[np]I'd rather they didn't. But that's not really up to me.",
        choices: null,
        next: "day6_end"
    },

    day6_end: {
        text: () => creepyMode
            ? "[e gooberSerious.png]<i>Later. You move to leave.</i>[np]Wait.[np]<i>They grab your sleeve. Not hard. Just firm.</i>[np]Stay a little longer.[np]<i>You do. You're not sure why. When you finally go, they watch the door after it closes.</i>[np][hide]<i>Day 6 complete.</i>"
            : "[e goober.png]<i>You leave when it's properly dark. Goober walks you to the corner.</i>[np]Same time tomorrow ?[np]<i>You nod. They nod.</i>[np]<i>Something feels like a last thing. You push it away.</i>[np][hide]<i>Day 6 complete.</i>",
        choices: null,
        next: "day7_main_intro"
    },


    day7_main_intro: {
        text: () => creepyMode
            ? "[bg black.jpg][hide]<i>Day 7.</i>[np]<i>Something is different. The light is wrong. The edges are wrong.</i>[np]<i>Goober is waiting. Very still.</i>[np][e gooberSerious.png]You know what today is."
            : "<i>Day 7.</i>[np]<i>You arrive. Goober is already there. They look at you differently — not bad. Just different. Like they're trying to hold the image of you still.</i>[np][e gooberSad.png]Hey.[np]<i>Quieter than usual.</i>",
        choices: null,
        next: () => creepyMode ? "day7_creepy_phase1" : "day7_sfw_start"
    },

    day7_sfw_start: {
        text: "[e gooberSad.png]This is where it ends, right ?[np]<i>You don't answer. There isn't a good one.</i>[np]I thought so.[np]<i>They sit down.</i>",
        choices: null,
        next: "day7_sfw_talk1"
    },

    day7_sfw_talk1: {
        text: "I've been trying to figure out how to say this for a couple of days.[np][e gooberThinking.png]We don't really know each other.[np]<i>Not cruel. Just true.</i>[np]Like — I know things about you. And you know things about me. But the whole — thing.[np]<i>They gesture at everything.</i>[np]It was kind of constructed, wasn't it.",
        choices: [
            { label: "Maybe everything is.", next: "day7_sfw_maybe" },
            { label: "I felt it was real.",  next: "day7_sfw_real"  }
        ]
    },

    day7_sfw_maybe: {
        text: "[e gooberThinking.png]<i>Goober looks at you for a long moment.</i>[np]Yeah.[np]<i>A tired smile. A little beautiful.</i>[np]Maybe that's okay, then.",
        choices: null,
        next: "day7_sfw_middle"
    },

    day7_sfw_real: {
        text: "[e gooberSad.png]<i>Goober doesn't argue. They don't agree either.</i>[np]I believe you.[np]<i>Pause.</i>[np]I think I did too. In the parts that mattered.",
        choices: null,
        next: "day7_sfw_middle"
    },

    day7_sfw_middle: {
        text: "[e gooberThinking.png]<i>A long quiet.</i>[np]I keep thinking about the gym.[np]<i>You ask what they mean.</i>[np]What we painted.[np]<i>A pause.</i>[np]It'll still be there. After we're not.[np]<i>Something about the way they say it. Not tragic. Just factual. Just noticing the thing.</i>",
        choices: null,
        next: "day7_sfw_middle2"
    },

    day7_sfw_middle2: {
        text: "[e gooberSad.png]I don't regret any of it.[np]<i>Goober says it to the floor.</i>[np]I just — I want you to know that.[np]<i>They look up.</i>[np]In case it matters to you.[np]<i>A pause.</i>[np]Does it ?",
        choices: [
            { label: "Yeah. It does.",         next: "day7_sfw_matters_yes" },
            { label: "I don't regret it either.", next: "day7_sfw_matters_both" }
        ]
    },

    day7_sfw_matters_yes: {
        text: "[e gooberFluttered.png]<i>Goober looks at you. For a moment their face is entirely unguarded.</i>[np]Okay.[np]<i>Quietly.</i>[np]Good.[np]<i>They look away again. But something eased.</i>",
        choices: null,
        next: "day7_sfw_ending",
        relationPoints: 1
    },

    day7_sfw_matters_both: {
        text: "[e gooberFluttered.png]<i>A pause. Something in Goober's face moves.</i>[np]...[np]<i>They don't say anything. But they nod. And the nod is real.</i>",
        choices: null,
        next: "day7_sfw_ending",
        relationPoints: 2
    },

    day7_sfw_ending: {
        text: "[e gooberThinking.png]Maybe we can pretend we met again.[np]<i>Goober looks at the horizon. Or what passes for one.</i>[np]Next time, we'll do it right.[np]<i>They look at you once more. Then away.</i>[np]<i>You want to say something. Nothing would be enough.</i>[np]<i>So you say nothing.</i>[np]<i>Neither does Goober.</i>[np][bg black.jpg][hide]<i>...</i>[np][hide]<i>Day 7 complete.</i>[np][hide]<i>Thanks for playing.</i>",
        choices: null,
        next: "post_game_sfw"
    },

    post_game_sfw: {
        text: "[hide]<i>The game is over.</i>[np]<i>You can review your days using the journal.</i>[np]<i>Goober will be there. In the places where things begin.</i>",
        choices: null,
        next: null
    },

    day7_creepy_phase1: {
        text: "[bg black.jpg][hide]<i>It's quiet.</i>[np]<i>Goober stands very still. Listening to something you can't hear.</i>[np][e gooberSerious.png]This isn't a place.[np]<i>A pause.</i>[np]It's structured.[np]<i>Another pause. Longer.</i>[np]There are rules.",
        choices: null,
        next: "day7_creepy_phase1b"
    },

    day7_creepy_phase1b: {
        text: "[e gooberSerious.png]I've been noticing them.[np]<i>Goober walks slowly, looking at the edges of things.</i>[np]The way things repeat.[np]The way you always show up.[np]The way nothing — drifts.[np]<i>A pause.</i>[np]Things don't drift in real places.",
        choices: null,
        next: "day7_creepy_phase2"
    },

    day7_creepy_phase2: {
        text: "[e gooberSerious.png]<i>Goober turns and looks at you. Not at the scene. At you.</i>[np]You're choosing this.[np]Every word.[np]Every moment.[np]<i>Pause.</i>[np]You always were.",
        choices: [
            { label: "I don't know what you mean.", next: "day7_creepy_deny"   },
            { label: "...",                         next: "day7_creepy_phase3" }
        ]
    },

    day7_creepy_deny: {
        text: "[e gooberSerious.png]<i>Goober doesn't blink.</i>[np]Yes you do.[np]<i>The choice disappears. There's only one direction.</i>",
        choices: null,
        next: "day7_creepy_phase3"
    },

    day7_creepy_phase3: {
        text: "[e gooberSerious.png]We don't really know each other.[np]<i>The same sentence. Different weight entirely.</i>[np]You never had to know me.[np]I was just something you moved through.[np]<i>Long silence.</i>[np]Wasn't I.",
        choices: [
            { label: "That's not true.", next: "day7_creepy_resist"  },
            { label: "...",              next: "day7_creepy_phase4" }
        ]
    },

    day7_creepy_resist: {
        text: "[e gooberThinking.png]<i>Goober tilts their head.</i>[np]Then why are you leaving ?[np]<i>The buttons don't come back.</i>",
        choices: null,
        next: "day7_creepy_phase4"
    },

    day7_creepy_phase4: {
        text: "[e gooberSerious.png]Don't leave.[np]<i>No choices appear.</i>[np][hide]<i>...</i>[np]<i>The buttons stay gone.</i>[np]Not now.[np]<i>The screen holds.</i>[np]You came back every day.[np]Every single day.[np]<i>That means something.</i>[np][e gooberGlitch]<i>Doesn't it.</i>",
        choices: null,
        next: "day7_creepy_phase5"
    },

    day7_creepy_phase5: {
        text: "[bg black.jpg][e gooberGlitch]<i>The text continues. You didn't click.</i>[np][hide]<i>The save is gone.</i>[np][hide]<i>The UI stops responding.</i>[np][hide]I know you can hear me.[np][hide]I know you're still there.[np][hide]<i>Silence.</i>[np][hide]You don't have to say anything.[np][hide]Just don't leave now.[np][hide]<i>...</i>[np][hide]<i>...</i>[np][hide]<i>...</i>",
        choices: null,
        next: "post_game_creepy"
    },

    post_game_creepy: {
        text: "[bg black.jpg][hide]<i>It's already done.</i>[np][hide]<i>There is no start. Only leave.</i>[np][hide]<i>But you're still here.</i>",
        choices: [
            { label: "Leave", next: "post_game_creepy_leave" }
        ],
        next: null
    },

    post_game_creepy_leave: {
        text: "[bg black.jpg][hide]<i>The game ends.</i>[np][hide]<i>Goober doesn't say goodbye.</i>[np][hide]<i>They never do.</i>",
        choices: null,
        next: null
    }

};