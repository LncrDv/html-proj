// =============================================================
// DIALOGUE TREE — Histoire complète, Jours 1–7, SFW + NSFW
//
// Tous les champs qui dépendent de nsfwMode sont des fonctions
// () => ... évaluées au moment de l'exécution par resolveNode().
//
// Balises :
//   [np]              nouvelle boîte de texte
//   [hide]            cacher le sprite de Goober
//   [e fichier.png]   changer l'image du sprite
//   [e gooberGlitch]  appliquer l'effet glitch CSS au sprite
//   [bg fichier.jpg]  changer le fond d'écran
//
// pick(arr) est défini dans datingSim.js — retourne un élément aléatoire.
// =============================================================

var dialogueTree = {

// =========================================================
// JOUR 1 — LA RENCONTRE
// =========================================================

    day1_main_intro: {
        text: () => nsfwMode
            ? "[bg classroom.jpg]Tiens.[np]<i>Ils le disent comme s'ils te connaissaient déjà. Comme si c'était la deuxième fois, pas la première.</i>[np]Je me demandais quand tu allais arriver."
            : "[bg classroom.jpg]Oh — salut ![np]<i>Ils font un signe de la main trop vite, puis semblent embarrassés.</i>[np]Désolé. Je m'appelle Goober. Je dis ça comme si tu avais demandé.",
        choices: null,
        next: "day1_name_reaction"
    },

    day1_name_reaction: {
        text: () => nsfwMode
            ? "Tu n'as pas besoin de te présenter.[np]<i>Une pause.</i>[np]Je sais déjà quel genre de personne tu es.[np]<i>Ils sourient avant que tu puisses demander ce qu'ils veulent dire.</i>"
            : "C'est — oui, c'est mon prénom, je ne me suis pas mal entendu.[np]Alors. Quel genre de personne es-tu ? Je pose la question parce que je veux vraiment savoir, pas juste pour avoir quelque chose à dire.",
        choices: null,
        next: "day1_personality_choice"
    },

    day1_personality_choice: {
        text: "Alors... quel genre de personne es-tu ?",
        choices: [
            { label: "Aventurier",   next: "day1_branch_adventurous" },
            { label: "Rigolo",       next: "day1_branch_silly"       },
            { label: "Discret",      next: "day1_branch_quiet"       }
        ]
    },

    day1_branch_adventurous: {
        text: () => nsfwMode
            ? "[e gooberSmug.png]Aventurier.[np]<i>Goober penche la tête. Comme s'ils savaient déjà que tu allais dire ça.</i>[np]Intéressant."
            : "[e gooberFluttered.png]Oh, j'adore ça ![np]Bon alors j'ai à peu près quarante idées et aucune d'elles n'est raisonnable. Ce qui va très bien. Vraiment.",
        choices: null,
        next: "day1_main_wander_setup"
    },

    day1_branch_silly: {
        text: () => nsfwMode
            ? "[e gooberSmug.png]Rigolo.[np]<i>Goober hoche lentement la tête.</i>[np]Ouais. Je m'en doutais."
            : "[e gooberFluttered.png]Non mais c'est moi aussi ! Bon on va s'entendre de façon embarrassante, je le sens déjà.",
        choices: null,
        next: "day1_main_wander_setup",
        relationPoints: 1
    },

    day1_branch_quiet: {
        text: () => nsfwMode
            ? "[e gooberThinking.png]Discret.[np]<i>Goober te regarde un peu plus longtemps que nécessaire.</i>[np]C'est bon. Je vais trouver le reste tout seul."
            : "[e goober.png]Oh, pas de souci ! Je parle assez pour deux de toute façon.[np]Tu as juste à hocher la tête de temps en temps pour que je sache que tu es toujours là.",
        choices: null,
        next: "day1_main_wander_setup",
        relationPoints: 1
    },

    day1_main_wander_setup: {
        text: () => nsfwMode
            ? "Viens. Je connais un endroit.[np]<i>Ils marchent déjà. Ils n'ont pas demandé si tu voulais venir.</i>"
            : "Alors — tu veux juste... marcher ? Sans plan ? C'est là que les bonnes choses arrivent, je trouve.[np]Aussi je n'ai pas de plan donc ça tombe bien.",
        choices: null,
        next: "day1_main_wander"
    },

    day1_main_wander: {
        text: () => nsfwMode
            ? "[bg town.jpg][hide]<i>Vous marchez. Goober fixe le rythme. Vous passez devant une épicerie, un fleuriste fermé, un arrêt de bus sans banc.</i>[np]<i>Goober n'explique pas où vous allez. Tu ne demandes pas.</i>[np]<i>Ça devrait sembler bizarre. En grande partie, ça ne l'est pas.</i>"
            : "[bg town.jpg][hide]<i>Vous vous promenez en ville sans destination. Goober commente tout — les enseignes, les pigeons, un distributeur cassé qui leur aurait personnellement fait du tort dans le passé.</i>[np]<i>Tu ne sais pas trop à quel moment tu as commencé à vraiment rire.</i>",
        choices: null,
        next: "day1_convenience_store"
    },

    day1_convenience_store: {
        text: () => nsfwMode
            ? "[e gooberSerious.png]T'as faim ?[np]<i>Ils poussent déjà la porte de l'épicerie.</i>[np]<i>Ils achètent quelque chose de petit sans demander ce que tu veux. Ils te le tendent quand même.</i>[np]<i>C'est exactement ce que tu aurais choisi.</i>"
            : "[e goober.png]Bon on entre là-dedans.[np]<i>Goober désigne l'épicerie comme si c'était un lieu sacré.</i>[np]J'ai un système. C'est compliqué. La version courte : une chose par couleur de rayon.[np]<i>Le système n'est pas compliqué. Ils aiment juste les snacks.</i>",
        choices: null,
        next: "day1_snack_chat"
    },

    day1_snack_chat: {
        text: () => nsfwMode
            ? "[hide]<i>Vous mangez quelque chose dehors. Goober observe la rue. Ils posent des questions sur des petites choses — où tu habites, ce que tu fais, si tu as beaucoup d'amis.</i>[np]<i>Les questions sont anodines. Elles ne le semblent pas.</i>[np]Pas beaucoup d'amis ?[np]<i>Ce n'est pas vraiment une question.</i>[np]C'est bien. T'en as pas besoin de beaucoup."
            : "[hide]<i>Vous vous retrouvez assis sur un muret dehors, à grignoter. Goober parle du quartier comme si c'était une personne qu'ils connaissent.</i>[np]Ce bâtiment était une librairie. Maintenant c'est un bar à bubble tea.[np]Le progrès, j'imagine.[np]<i>Ils n'ont pas l'air convaincus.</i>",
        choices: null,
        next: "day1_duck_moment"
    },

    day1_duck_moment: {
        text: () => nsfwMode
            ? "[e gooberThinking.png]Tu ne dis pas grand-chose, hein.[np]<i>Ce n'est pas une critique. Juste une observation.</i>[np]C'est bon. Je peux travailler avec ça.[np]<i>Tu ne sais pas trop ce qu'ils entendent par travailler avec.</i>"
            : "[e gooberThinking.png]Regarde — des canards.[np]<i>Il y a, en effet, un petit étang décoratif. Il y a, en effet, des canards.</i>[np]J'ai regardé beaucoup de documentaires. Ils ont l'air paisibles. Ils ne le sont pas.[np]Sous l'eau, leurs pattes s'agitent comme des folles.[np]<i>Tu regardes les canards. Goober te regarde regarder les canards.</i>",
        choices: null,
        next: "day1_activity_choice"
    },

    day1_activity_choice: {
        text: "Alors — qu'est-ce que tu veux faire ?",
        choices: [
            { label: "Aller au cinéma",      next: "day1_branch_movies"      },
            { label: "Jouer aux jeux vidéo", next: "day1_branch_videogames"  },
            { label: "Continuer à marcher",  next: "day1_branch_keepwalking" }
        ]
    },

    day1_branch_movies: {
        text: () => nsfwMode
            ? "[e goober.png]Ouais.[np][hide]<i>Vous y allez. Le film est long et oubliable. Goober te regarde plus que l'écran.</i>[np]<i>Tu ne t'en rends compte qu'à la fin. Tu ne sais pas depuis combien de temps c'était le cas.</i>"
            : "[e gooberFluttered.png]Oui ! Bon — je dois te prévenir, je pleure à tout.[np][hide]<i>Vous y allez. Le film est une comédie. Goober pleure deux fois. Une fois à cause d'un chien et une fois, inexplicablement, à une pub pour une voiture avant le film.</i>[np]<i>Tu ne le signales pas. Tu trouves ça étrangement attendrissant.</i>",
        choices: null,
        next: "day1_main_atYourPlace_setup"
    },

    day1_branch_videogames: {
        text: () => nsfwMode
            ? "[e goober.png]Je connais un endroit.[np][hide]<i>Il y a une salle d'arcade deux rues plus loin. Goober est très doué à chaque machine. Ils ne proposent pas de te laisser gagner.</i>[np]<i>Tu perds chaque partie. Goober ne se vante pas. D'une certaine façon, c'est pire.</i>"
            : "[e gooberFluttered.png]Enfin quelqu'un qui a du goût.[np][hide]<i>Il y a une arcade pas loin. Goober gagne à chaque machine qu'ils touchent et ne s'en excuse pas une seule fois.</i>[np]Tu vas y arriver. Peut-être.[np]<i>Ils sourient. Tu ne les crois pas. Eux non plus.</i>",
        choices: null,
        next: "day1_main_atYourPlace_setup"
    },

    day1_branch_keepwalking: {
        text: () => nsfwMode
            ? "[e goober.png]Bien.[np][hide]<i>Vous marchez jusqu'à ce que le quartier se fasse plus calme. Goober semble se détendre légèrement.</i>[np]J'aime quand c'est plus calme.[np]<i>Pause.</i>[np]Moins de choses à gérer."
            : "[e goober.png]Bonne réponse.[np][hide]<i>Vous continuez à marcher jusqu'à arriver quelque part qu'aucun de vous deux n'avait prévu — une petite place avec une fontaine à l'arrêt, des bancs, la lumière du soir qui vire à l'orange.</i>[np]Je ne savais pas que c'était là.[np]<i>Tu les crois. Ça ressemble à une découverte.</i>",
        choices: null,
        next: "day1_main_atYourPlace_setup"
    },

    day1_main_atYourPlace_setup: {
        text: () => nsfwMode
            ? "[e gooberSerious.png]Il se fait tard.[np]<i>Goober le dit comme un constat, pas comme un au revoir.</i>[np]On devrait aller quelque part.[np]<i>Chez toi est sous-entendu d'une façon ou d'une autre. Tu ne sais pas comment.</i>"
            : "[e gooberThinking.png]Il commence à se faire tard.[np]<i>Goober regarde autour de soi comme s'ils cherchaient à gagner du temps.</i>[np]On pourrait... je sais pas. Aller quelque part ? Ou pas. T'as probablement des trucs à faire.[np]<i>Ils espèrent clairement que tu n'as rien à faire.</i>",
        choices: [
            { label: "Tu viens chez moi ?",      next: "day1_main_atYourPlace" },
            { label: "Peut-être une autre fois.", next: "day1_main_atYourPlace" }
        ]
    },

    day1_main_atYourPlace: {
        text: () => nsfwMode
            ? "[hide]<i>Vous vous retrouvez chez toi. Goober prend tout ça sans commentaire — les étagères, le bazar, la façon dont tu as rangé les choses.</i>[np]<i>Ils ne demandent pas si c'est okay d'être là. Ils s'assoient juste.</i>[np]C'est confortable ici.[np]<i>La façon dont ils le disent suggère qu'ils ne parlent pas des meubles.</i>"
            : "[hide]<i>Vous vous retrouvez chez toi quand le ciel devient noir. Goober regarde autour de soi comme s'ils archivaient tout pour plus tard.</i>[np]C'est bien ici. Ça sent comme si quelqu'un habitait vraiment là.[np]<i>Ils semblent penser que c'est un compliment.</i>[np]Je réalise que c'était bizarre à dire. Ça sent bon. Normal. Je m'arrête là.",
        choices: null,
        next: "day1_evening_chat"
    },

    day1_evening_chat: {
        text: () => nsfwMode
            ? "[e gooberSerious.png]Tu fais ça souvent ? Laisser les gens entrer ?[np]<i>Tu ne les as pas vraiment laissés entrer. Ils se sont plutôt installés d'eux-mêmes.</i>[np]<i>Tu ne dis pas ça.</i>[np]<i>Goober hoche la tête, comme si tu avais répondu quand même.</i>"
            : "[e gooberThinking.png]Je peux te demander quelque chose ?[np]<i>Tu hoches la tête.</i>[np]Tu trouves ça bizarre parfois ? Rencontrer des gens. Comme — le début. Avant de savoir si ça va devenir quelque chose.[np]<i>Une pause.</i>[np]J'ai toujours l'impression de jouer un rôle. Comme si je faisais une imitation de Goober.",
        choices: [
            { label: "Ouais, je comprends.",     next: "day1_evening_connect" },
            { label: "Tu sembles à l'aise pourtant.", next: "day1_evening_connect" }
        ]
    },

    day1_evening_connect: {
        text: () => nsfwMode
            ? "[e gooberSmug.png]<i>Goober semble satisfait de ta réponse. Quelle qu'elle soit.</i>[np]Je savais que tu comprendrais.[np]<i>La certitude sonne légèrement faux. Vous vous connaissez depuis trois heures.</i>"
            : "[e gooberFluttered.png]<i>Goober est silencieux un moment. Puis :</i>[np]Okay. Bien.[np]<i>Ils n'élaborent pas. Ils n'en ont pas besoin. Quelque chose s'est détendu.</i>[np]Je vais y aller avant de gâcher ça en disant quelque chose de bizarre.[np]<i>Ils ont déjà dit plusieurs choses bizarres. Tu ne le mentionnes pas.</i>",
        choices: null,
        next: "day1_goodbye"
    },

    day1_goodbye: {
        text: () => nsfwMode
            ? "[e gooberSerious.png]Je te vois demain.[np]<i>Pas de point d'interrogation. Juste un fait, énoncé avec une calme certitude.</i>[np][hide]<i>Jour 1 terminé.</i>"
            : "[e goober.png]Bon. Je pars.[np]<i>Ils se lèvent.</i>[np]C'était vraiment sympa. Je le dis maintenant pour que ce soit moins bizarre à dire plus tard.[np]À demain ?",
        choices: () => nsfwMode ? null : [
            { label: "Carrément.",      next: "day1_end_positive" },
            { label: "On verra bien.", next: "day1_end_neutral"  }
        ],
        next: () => nsfwMode ? "day2_main_intro" : null
    },

    day1_end_positive: {
        text: "[e gooberFluttered.png]Bien.[np]<i>Juste ça. Ils partent vite, comme s'ils voulaient y aller avant que le moment ne passe.</i>[np][hide]<i>Jour 1 terminé.</i>",
        choices: null,
        next: "day2_main_intro",
        relationPoints: 1
    },

    day1_end_neutral: {
        text: "[e goober.png]Je prends ça pour un oui.[np]<i>Ils sourient. Ils sont déjà à la porte.</i>[np][hide]<i>Jour 1 terminé.</i>",
        choices: null,
        next: "day2_main_intro"
    },


// =========================================================
// JOUR 2 — CONSTRUIRE LA CONFIANCE
// =========================================================

    day2_main_intro: {
        text: () => nsfwMode
            ? "[bg town.jpg]Tu es revenu.[np]<i>Goober attend exactement là où vous vous êtes rencontrés hier. Comme s'ils n'avaient pas bougé.</i>[np]<i>Ils le disent comme une confirmation, pas comme une salutation.</i>[np]Bien."
            : "[bg town.jpg]Ah bien, tu es venu.[np]<i>Goober est perché sur un muret, en train de grignoter. Ils font un signe trop vite à nouveau.</i>[np]Je n'étais pas inquiet. J'étais peut-être légèrement inquiet.",
        choices: null,
        next: "day2_gym_invite"
    },

    day2_gym_invite: {
        text: () => nsfwMode
            ? "[e gooberSerious.png]Il y a un endroit que je veux te montrer. Un vieux gymnase. Fermé depuis des années.[np]<i>Ils marchent déjà.</i>[np]Viens."
            : "[e goober.png]Alors — j'ai trouvé un truc. Il y a ce gymnase abandonné deux rues plus loin et je veux vraiment y entrer.[np]Ce qui est peut-être légèrement illégal. Mais pas grand-chose. Tu es partant ?",
        choices: [
            { label: "Allons-y.",   next: "day2_gym_accept" },
            { label: "Je passe.",   next: "day2_gym_refuse" }
        ]
    },

    day2_gym_accept: {
        text: "[hide]<i>Vous y allez. Le gymnase sent le vieux caoutchouc et les ambitions qui ont culminé dans les années quatre-vingt-dix.</i>[np]<i>La moitié des casiers sont encore pleins. Quelqu'un a laissé une seule chaussure sur un banc, lacets noués.</i>[np][bg gym.jpg]<i>Goober touche déjà à tout.</i>",
        choices: null,
        next: "day2_gym_explore"
    },

    day2_gym_refuse: {
        text: () => nsfwMode
            ? "[e gooberSerious.png]On y va.[np]<i>Ce n'est pas agressif. C'est juste — définitif.</i>[np]<i>Vous y allez.</i>"
            : "[e gooberSad.png]Oh.[np]<i>Une pause. Une vraie déception, brièvement visible.</i>[np]C'est — ouais, okay. On peut faire autre chose.[np]<i>Silence.</i>[np]Le gymnase est probablement illégal de toute façon. Je n'allais pas le mentionner.[np]<i>Vous y allez quand même. Ça semblait important pour eux.</i>",
        choices: null,
        next: "day2_gym_explore"
    },

    day2_gym_explore: {
        text: () => nsfwMode
            ? "[bg gym.jpg][e gooberSerious.png]Regarde-moi cet endroit.[np]<i>Goober traverse lentement le gymnase, promenant une main sur les équipements.</i>[np]Les choses s'arrêtent juste... Et tout le monde fait comme si elles n'avaient jamais été là.[np]<i>Ils ne parlent pas du gymnase.</i>"
            : "[bg gym.jpg][e gooberFluttered.png]C'est incroyable. Regarde tout ça ![np]<i>Goober est déjà sur un équipement qui n'est probablement pas sûr.</i>[np]À ton avis ça sert à quoi ce truc ?[np]<i>Vous êtes tous les deux d'accord que c'est pas clair. Goober l'utilise quand même.</i>",
        choices: null,
        next: "day2_gym_discovery"
    },

    day2_gym_discovery: {
        text: () => nsfwMode
            ? "[e gooberSmug.png]Hé. Viens voir ça.[np]<i>Il y a une salle de stockage au fond. Une vieille chaîne hi-fi, une pile de dossards, des bidons de peinture d'une rénovation qui n'a jamais été terminée.</i>[np]<i>Goober regarde les bidons de peinture. Puis toi. Puis les murs.</i>[np]On devrait laisser quelque chose derrière nous."
            : "[e gooberFluttered.png]Oh — regarde. Des bombes de peinture.[np]<i>La salle de stockage contient un set de peinture en spray à moitié utilisé d'une rénovation ancienne. Les couleurs sont violentes.</i>[np]Tu sais ce que ça veut dire.[np]<i>Pas encore.</i>",
        choices: null,
        next: "day2_paint_choice"
    },

    day2_paint_choice: {
        text: () => nsfwMode
            ? "Aide-moi.[np]<i>Goober ouvre déjà un bidon. Pas vraiment une demande. Mais ils te regardent comme si ta réponse comptait.</i>"
            : "On redécore. Évidemment.[np]<i>Ils secouent déjà un bidon.</i>[np]L'art ne demande pas la permission.",
        choices: [
            { label: "On y va.",             next: "day2_paint_yes"  },
            { label: "On peint quoi ?",      next: "day2_paint_what" }
        ]
    },

    day2_paint_what: {
        text: () => nsfwMode
            ? "[e gooberThinking.png]Ce qu'on veut.[np]<i>Pause.</i>[np]C'est un peu ça le but."
            : "[e gooberThinking.png]Ce qu'on veut. C'est un gymnase abandonné. Le public c'est zéro personnes.[np]Ce qui est libérateur, en fait.",
        choices: null,
        next: "day2_paint_yes"
    },

    day2_paint_yes: {
        text: () => nsfwMode
            ? "[hide]<i>Vous peignez. Goober travaille en silence, concentré. Ce qu'ils font est étrange — des formes géométriques qui semblent presque se résoudre en quelque chose, mais pas tout à fait.</i>[np]<i>Tu peins quelque chose à côté. Goober jette un coup d'œil une fois. Hoche la tête.</i>[np][e gooberSerious.png]Bien.[np]<i>Tu n'es pas sûr de ce que tu as fait. Goober semble le savoir exactement.</i>"
            : "[hide]<i>Vous peignez pendant une heure. Il n'y a pas de plan. Goober fait une énorme forme abstraite en trois couleurs. Tu ajoutes quelque chose à côté qui ne se connecte pas vraiment.</i>[np]<i>Ça ressemble à une conversation.</i>[np][e gooberThinking.png]J'ai envie de revenir ici.[np]<i>Ils le disent doucement, comme une pensée privée qui leur a échappé.</i>",
        choices: null,
        next: "day2_after_gym"
    },

    day2_after_gym: {
        text: () => nsfwMode
            ? "[hide]<i>Vous quittez le gymnase. Goober est plus silencieux dehors que dedans. Comme si le bâtiment retenait quelque chose que la rue ne retient pas.</i>[np][bg town.jpg][e gooberSerious.png]Tu t'en es bien sorti là-dedans.[np]<i>Tu ne sais pas ce que tu as fait. Tu as peint un mur.</i>[np]<i>Goober semble vouloir dire autre chose.</i>"
            : "[hide]<i>Vous quittez le gymnase quand la lumière baisse. La ville semble différente après une petite transgression — plus lumineuse, légèrement irréelle.</i>[np][bg town.jpg][e goober.png]Bon. J'ai faim. Toi ?",
        choices: null,
        next: "day2_food_choice"
    },

    day2_food_choice: {
        text: "Burgers ou italien ?",
        choices: [
            { label: "Burgers",  next: "day2_burgers" },
            { label: "Italien",  next: "day2_italian" }
        ],
        ghostChoice: { label: "Chinois", next: "day2_branch_ghost_glitch_chinese" },
        next: null
    },

    day2_burgers: {
        text: () => pick([
            "[bg restaurant.jpg][hide]<i>Vous mangez. Goober vole la moitié de tes frites sans demander et ne s'en excuse pas. Ça ne te dérange pas vraiment.</i>[np][e goober.png]Bon là elles sont objectivement parfaites.[np]<i>Pas vraiment. Mais Goober semble profiter de quelque chose qui dépasse la nourriture.</i>",
            "[bg restaurant.jpg][hide]<i>Goober commande sans regarder le menu. Comme s'ils étaient venus là des dizaines de fois.</i>[np][e goober.png]Je viens ici quand j'ai besoin que les choses semblent normales.[np]<i>Tu demandes ce qui compte comme normal.</i>[np]<i>Ils ne répondent pas. Ils volent une frite à la place.</i>"
        ]),
        choices: null,
        next: "day2_after_food"
    },

    day2_italian: {
        text: () => pick([
            "[bg restaurant.jpg][hide]<i>La nourriture est bonne. Goober essaie de prononcer chaque plat avec un accent exagéré. Le serveur n'est pas amusé. Toi si.</i>[np][e gooberFluttered.png]Je crois que je l'ai offensé.[np]<i>Tu le crois aussi.</i>[np]Ça valait le coup.",
            "[bg restaurant.jpg][hide]<i>Vous mangez lentement, comme si l'endroit le méritait. Goober est plus silencieux ici qu'à l'habitude. Pas mal à l'aise — pensif.</i>[np][e gooberThinking.png]J'aime les endroits avec des bougies sur la table.[np]Ça donne l'impression que tout est sur le point d'être dit pour la dernière fois.[np]<i>Tu ne sais pas comment répondre à ça. Tu n'as pas à le faire.</i>"
        ]),
        choices: null,
        next: "day2_after_food"
    },

    day2_branch_ghost_glitch_chinese: {
        text: "[bg black.jpg][e gooberGlitch]Tu n'es pas censé être ici.[np][bg restaurant.jpg][e gooberSurprised.png]<i>Un clignement. Comme un saut dans un disque.</i>[np]<i>Goober est assis en face de toi. La nourriture devant toi est quelque chose que tu n'as pas commandé.</i>[np]<i>C'est bon quand même.</i>[np][e gooberSerious.png]Je préfère cet endroit.[np]<i>Tu demandes lequel.</i>[np]Celui-là.[np]<i>Ils n'expliquent pas davantage. Tu ne demandes pas.</i>",
        choices: null,
        next: "day2_after_food"
    },

    day2_after_food: {
        text: () => nsfwMode
            ? "[bg restaurant.jpg][e gooberSerious.png]Je peux te demander quelque chose ?[np]<i>Tu hoches la tête.</i>[np]Avec qui tu passes du temps d'habitude ?[np]<i>La question est légère. L'intérêt derrière ne l'est pas.</i>"
            : "[bg restaurant.jpg][e gooberThinking.png]C'était une bonne journée.[np]<i>Goober le dit doucement. Pas de point d'exclamation. Quelque chose de vrai en dessous.</i>[np]Vraiment bien. J'ai l'impression de pouvoir être bizarre avec toi.[np]Je n'ai pas ça souvent.",
        choices: [
            { label: "Des amis, surtout.",    next: "day2_end_friends" },
            { label: "Pas beaucoup de gens.", next: "day2_end_few"     }
        ]
    },

    day2_end_friends: {
        text: () => nsfwMode
            ? "[e gooberSmug.png]Des amis.[np]<i>Goober hoche la tête. Le classe quelque part.</i>[np]C'est bien.[np]<i>La pause qui suit ne semble pas bien.</i>[np][hide]<i>Jour 2 terminé.</i>"
            : "[e goober.png]Cool.[np]<i>Goober sourit. Sincèrement.</i>[np]Moi aussi j'ai des amis. Ils sont juste — tu sais. Ailleurs.[np]<i>Ils font un geste vague vers tout ce qui est derrière la fenêtre.</i>[np]Bref. À demain ?[np][hide]<i>Jour 2 terminé.</i>",
        choices: null,
        next: "day3_main_intro",
        relationPoints: 1
    },

    day2_end_few: {
        text: () => nsfwMode
            ? "[e gooberSmug.png]Pas beaucoup.[np]<i>Goober te regarde avec quelque chose qui pourrait être de la sympathie. Ça sonne légèrement faux.</i>[np]Bien.[np]<i>Juste ça.</i>[np][hide]<i>Jour 2 terminé.</i>"
            : "[e gooberFluttered.png]Moi non plus, honnêtement.[np]<i>Un temps.</i>[np]Je crois que c'est pour ça que aujourd'hui a semblé — je sais pas. Comme quelque chose.[np]Bon je pars avant que ça devienne plus triste. À demain.[np][hide]<i>Jour 2 terminé.</i>",
        choices: null,
        next: "day3_main_intro",
        relationPoints: 2
    },


// =========================================================
// JOUR 3 — UN SENTIMENT QUI SE RÉPÈTE
// =========================================================

    day3_main_intro: {
        text: () => nsfwMode
            ? "[bg town.jpg]Tu es là.[np]<i>Goober est au même endroit. Même posture. Comme si le temps s'était réinitialisé.</i>[np]<i>Ils ne disent pas bonjour. Ils le disent comme un point de contrôle.</i>[np]Bien."
            : "[bg town.jpg]<i>Jour 3. Le temps est identique à hier. C'est probablement juste la météo.</i>[np]Oh, tu es là ![np]<i>Goober fait un signe. Même main. Même angle. Tu le remarques, et tu te sens immédiatement bizarre de l'avoir remarqué.</i>[np]...Hé. C'était normal, hein ?",
        choices: null,
        next: "day3_deja_vu"
    },

    day3_deja_vu: {
        text: () => nsfwMode
            ? "[e gooberThinking.png]T'as déjà l'impression que ça s'est passé avant ?[np]<i>Ils ne demandent pas de façon anodine. Ils t'étudient.</i>"
            : "[e gooberThinking.png]T'as déjà l'impression que ça s'est passé avant ?[np]<i>Une pause légèrement trop longue.</i>[np]Pas quelque chose de précis. Juste. Ça. En général.",
        choices: [
            { label: "Ouais, en fait.",  next: "day3_deja_yes" },
            { label: "Pas vraiment.",    next: "day3_deja_no"  }
        ]
    },

    day3_deja_yes: {
        text: () => nsfwMode
            ? "[e gooberSerious.png]...[np]<i>Un long silence.</i>[np]Je savais que tu allais dire ça.[np]<i>Ils le disent sans aucune surprise. Comme si c'était déjà écrit quelque part.</i>"
            : "[e gooberSurprised.png]...[np]<i>Quelque chose traverse le visage de Goober. Pas de la surprise — le contraire.</i>[np]Ouais.[np]<i>Ils clignent des yeux. Puis sourient. Un peu trop vite.</i>[np]Bizarre, non ? Bref —",
        choices: null,
        next: "day3_bookshop_setup",
        relationPoints: 1
    },

    day3_deja_no: {
        text: () => nsfwMode
            ? "[e gooberSerious.png]...[np]<i>Goober te regarde comme si tu avais donné la mauvaise réponse.</i>[np]Peut-être que c'est juste moi.[np]<i>Ils n'y croient pas.</i>"
            : "[e gooberSad.png]Oh.[np]<i>Goober détourne le regard.</i>[np]Peut-être que c'est juste moi. Oublie ce que j'ai dit.",
        choices: null,
        next: "day3_bookshop_setup"
    },

    day3_bookshop_setup: {
        text: () => nsfwMode
            ? "[e gooberSerious.png]On marche.[np]<i>Ils ont besoin de bouger, clairement. Comme si rester immobile était un problème.</i>"
            : "[e goober.png]Bon alors — j'ai trouvé une librairie hier que je crois que personne d'autre n'a trouvée.[np]C'est probablement faux mais ça semblait vrai. Viens.",
        choices: null,
        next: "day3_bookshop"
    },

    day3_bookshop: {
        text: () => nsfwMode
            ? "[bg town.jpg][hide]<i>Vous marchez. Le même coin de rue apparaît deux fois. Tu ne le mentionnes pas.</i>[np]<i>Goober semble compter quelque chose à voix basse. Ou tester quelque chose.</i>[np][e gooberSerious.png]On a déjà été là.[np]Pas aujourd'hui.[np]<i>Ils n'expliquent pas davantage.</i>"
            : "[bg bookshop.jpg][hide]<i>La librairie est à peine une salle. Ça sent le papier et quelque chose de floral qui pourrait être une bougie ou juste l'âge.</i>[np][e goober.png]Bon cet endroit est soit très spécial soit un risque d'incendie. Probablement les deux.[np]<i>Ils prennent un livre. Le titre fait face à l'autre côté. Ils le remettent avant que tu puisses le lire.</i>[np]Un de ceux qui veut dire des choses différentes à chaque fois.",
        choices: null,
        next: "day3_browse"
    },

    day3_browse: {
        text: () => nsfwMode
            ? "[e gooberThinking.png]Tu te souviens de ce dont on a parlé hier ?[np]<i>Bien sûr que tu t'en souviens.</i>[np]Moi aussi. Mais pas — complètement.[np]<i>Ils regardent à nouveau le coin. Le même.</i>[np]C'est comme si. Certaines parties sont claires. Et puis il y a un vide."
            : "[bg bookshop.jpg][hide]<i>Vous parcourez la librairie pendant une demi-heure. Goober prend tout et lit le dos. Ils remettent la plupart des livres.</i>[np][e gooberThinking.png]Tu achètes des livres ou tu as l'intention de le faire ?[np]<i>Une question incroyablement précise.</i>",
        choices: [
            { label: "Je les achète, surtout.",   next: "day3_browse_buy"    },
            { label: "J'ai l'intention. Surtout.", next: "day3_browse_intend" }
        ]
    },

    day3_browse_buy: {
        text: () => nsfwMode
            ? "[e gooberSerious.png]Bien.[np]<i>Ils hochent la tête comme si tu avais confirmé quelque chose.</i>[np]Moi aussi. Je me souviens de tout ce que j'ai lu.[np]<i>Pause.</i>[np]Je me souviens juste pas toujours de l'avoir lu."
            : "[e gooberFluttered.png]Pareil ! Bon il y a de l'espoir pour nous.[np]<i>Goober achète quelque chose de petit. Ils ne te montrent pas le titre. Ils semblent secrètement satisfaits d'eux-mêmes.</i>",
        choices: null,
        next: "day3_bench"
    },

    day3_browse_intend: {
        text: () => nsfwMode
            ? "[e gooberSmug.png]Ouais.[np]<i>Ils regardent les étagères.</i>[np]C'est honnête.[np]<i>Pause.</i>[np]La plupart des choses sont des intentions. C'est le passage à l'acte qui se complique."
            : "[e gooberFluttered.png]Pareil. J'ai dix-sept livres que je vais définitivement lire.[np]Ils sont surtout décoratifs à ce stade.[np]<i>Ils en achètent un quand même. Avec intention.</i>",
        choices: null,
        next: "day3_bench"
    },

    day3_bench: {
        text: () => nsfwMode
            ? "[bg park.jpg][e gooberThinking.png]<i>Vous vous retrouvez sur un banc. Goober s'assoit près. Pas de façon inconfortable — juste près.</i>[np]T'as l'impression que ce que tu dis est déjà décidé ?[np]<i>Ils ne posent pas la question de façon rhétorique.</i>[np]Comme si tu ouvres la bouche et les mots sont déjà là. Tu ne les as pas vraiment choisis."
            : "[bg park.jpg][e gooberThinking.png]<i>Vous trouvez un banc alors que l'après-midi s'étire.</i>[np]Je peux te demander quelque chose de bizarre ?[np]<i>Tu hoches la tête.</i>[np]T'as déjà l'impression que certaines conversations allaient forcément se dérouler comme elles se sont déroulées ? Comme — tu n'aurais pas pu dire autre chose.[np]Même en essayant.",
        choices: [
            { label: "C'est une pensée étrange.",  next: "day3_strange"   },
            { label: "...Parfois, ouais.",          next: "day3_sometimes" }
        ]
    },

    day3_strange: {
        text: () => nsfwMode
            ? "[e gooberSerious.png]Vraiment ?[np]<i>Ils regardent la rue. Quelque chose se déplace dans leur visage, juste légèrement.</i>[np]Peut-être."
            : "[e goober.png]Ha. Ouais, probablement.[np]<i>Goober rit. Un peu creux.</i>[np]Ignore-moi, je deviens philosophique quand j'ai faim.[np]<i>Tu viens de manger dans un restaurant. Tu ne le dis pas.</i>",
        choices: null,
        next: "day3_evening_activity"
    },

    day3_sometimes: {
        text: () => nsfwMode
            ? "[e gooberSerious.png]Voilà.[np]<i>Goober hoche la tête. Lentement. Comme si tu confirmais quelque chose qu'ils savaient déjà.</i>[np]Tout le temps, pour moi.[np]<i>Une longue pause.</i>[np]Chaque fois."
            : "[e gooberThinking.png]Ah ouais ?[np]<i>Goober se tourne pour te regarder. Vraiment regarder.</i>[np]Moi aussi.[np]<i>Ils ne disent rien de plus. Toi non plus. Le banc, le parc, l'après-midi — tout ça reste là comme ça.</i>",
        choices: null,
        next: "day3_evening_activity",
        relationPoints: 1
    },

    day3_evening_activity: {
        text: () => nsfwMode
            ? "[e gooberSerious.png]Viens.[np]<i>Goober se lève. La conversation est terminée, apparemment. Ou rangée quelque part.</i>[np]Je veux te montrer autre chose."
            : "[e goober.png]Bon — assez de pensées profondes. Je deviens bizarre.[np]<i>Goober se lève et s'étire de façon dramatique.</i>[np]Viens. Il y a quelque chose que je veux te montrer avant qu'il fasse nuit.",
        choices: null,
        next: "day3_evening_place"
    },

    day3_evening_place: {
        text: () => nsfwMode
            ? "[bg evening_street.jpg][hide]<i>Goober t'emmène dans une rue que tu ne reconnais pas. Au bout, il y a un mur. Du sol au plafond, quelqu'un — beaucoup de gens — l'ont peint encore et encore, couche par couche, des années entières.</i>[np][e gooberSerious.png]Personne n'a planifié ça.[np]<i>Ils se tiennent devant.</i>[np]Chaque personne a juste... ajouté. Sans savoir que ce qui avait été fait avant serait encore là.[np]<i>Une pause.</i>[np]Ça l'est quand même. Sous tout ça."
            : "[bg evening_street.jpg][hide]<i>Goober t'emmène dans une rue que tu n'avais jamais remarquée. Il y a un mur au bout couvert de peintures — pas vraiment du graffiti, plutôt des années accumulées d'un besoin de mettre quelque chose quelque part.</i>[np][e gooberFluttered.png]Je viens ici quand je n'arrive pas à expliquer quelque chose.[np]<i>Ils reculent et regardent l'ensemble.</i>[np]Ça a plus de sens que la plupart des conversations que j'ai eues.",
        choices: null,
        next: "day3_wall_reaction"
    },

    day3_wall_reaction: {
        text: "Qu'est-ce que tu en penses ?",
        choices: [
            { label: "C'est beau.",         next: "day3_wall_beautiful"    },
            { label: "C'est accablant.",     next: "day3_wall_overwhelming" }
        ]
    },

    day3_wall_beautiful: {
        text: () => nsfwMode
            ? "[e gooberSmug.png]<i>Goober te regarde de côté.</i>[np]Ouais.[np]<i>Une pause qui signifie quelque chose.</i>[np]La plupart des choses le sont, si on les regarde assez longtemps."
            : "[e gooberFluttered.png]Hein ?![np]<i>Goober semble sincèrement ravi que tu aies dit ça.</i>[np]J'ai montré ça à quelqu'un une fois et il a dit que ça avait l'air en désordre.[np]On ne s'est plus vus après ça.[np]<i>Tu as l'impression que c'est un test que tu viens de réussir.</i>",
        choices: null,
        next: "day3_walk_home",
        relationPoints: 1
    },

    day3_wall_overwhelming: {
        text: () => nsfwMode
            ? "[e gooberThinking.png]Ouais.[np]<i>Goober hoche la tête. Comme si c'était aussi la bonne réponse.</i>[np]Trop de voix.[np]Difficile de savoir laquelle écouter."
            : "[e goober.png]C'est juste.[np]<i>Goober penche la tête.</i>[np]Je crois que c'est un peu le but, non ? Comme — ça n'essaie pas de dire une seule chose.[np]C'est juste. La preuve que des gens étaient là.",
        choices: null,
        next: "day3_walk_home"
    },

    day3_walk_home: {
        text: () => nsfwMode
            ? "[hide]<i>Vous rentrez en silence. Goober reste près, comme avant.</i>[np][e gooberSerious.png]Tu penses à ce que tu laisses derrière toi ?[np]<i>Tu dis que oui ou non. Goober hoche la tête.</i>[np]Tu devrais.[np]<i>Dit avec plus de poids que le chemin du retour ne le justifie.</i>"
            : "[hide]<i>Vous rentrez pendant que les lampadaires s'allument. Goober parle du mur pendant presque tout le trajet — qui a peut-être fait quelle partie, à quelle époque, avec quel état d'esprit.</i>[np][e gooberThinking.png]J'aime l'idée que certaines de ces personnes ne se sont jamais rencontrées.[np]Et elles ont quand même fait quelque chose ensemble.[np]<i>Une pause.</i>[np]C'est un peu comme ça que les amitiés se sentent parfois.",
        choices: null,
        next: "day3_late_afternoon"
    },

    day3_late_afternoon: {
        text: () => nsfwMode
            ? "[hide]<i>Il se fait tard. Vous avez marché plus loin que prévu.</i>[np][e gooberSerious.png]Ça continue d'arriver.[np]<i>Tu ne sais pas s'ils parlent des jours ou des conversations ou du chemin que vous prenez.</i>[np]À la prochaine.[np]<i>Pas une question.</i>[np][hide]<i>Jour 3 terminé.</i>"
            : "[hide]<i>La lumière change. Ce genre de lumière dorée-orangée qui signifie que la journée a atteint son sommet et est maintenant polie dans sa façon de se terminer.</i>[np][e goober.png]On se revoit... hein ?[np]<i>Ils demandent avec précaution. Comme si la réponse comptait plus qu'elle ne devrait.</i>",
        choices: () => nsfwMode ? null : [
            { label: "Bien sûr.",    next: "day3_end_yes"   },
            { label: "Probablement.", next: "day3_end_maybe" }
        ],
        next: () => nsfwMode ? "day4_main_intro" : null
    },

    day3_end_yes: {
        text: "[e gooberFluttered.png]Bien.[np]<i>Juste ça. Ils partent vite, comme avant.</i>[np][hide]<i>Jour 3 terminé.</i>",
        choices: null,
        next: "day4_main_intro",
        relationPoints: 1
    },

    day3_end_maybe: {
        text: "[e goober.png]Je prends ça.[np]<i>Goober sourit. Ça ne va pas aussi loin qu'à l'habitude.</i>[np][hide]<i>Jour 3 terminé.</i>",
        choices: null,
        next: "day4_main_intro"
    },


// =========================================================
// JOUR 4 — LA QUESTION DU CONTRÔLE
// =========================================================

    day4_main_intro: {
        text: () => nsfwMode
            ? "[bg park.jpg]<i>Jour 4. Goober est déjà là. Comme s'ils n'étaient pas partis.</i>[np][e gooberSerious.png]Tu feras le bon choix aujourd'hui.[np]<i>Tu n'avais rien demandé.</i>"
            : "[bg park.jpg]<i>Jour 4. Tu remarques que tu es venu sans hésiter. C'est nouveau.</i>[np][e goober.png]Salut.[np]<i>Goober a ce regard qu'ils ont quand ils ont pensé à quelque chose et ne savent pas s'ils devraient le dire.</i>",
        choices: null,
        next: "day4_trust_question"
    },

    day4_trust_question: {
        text: () => nsfwMode
            ? "[e gooberSerious.png]Tu me fais confiance ?[np]<i>Égal. Ni chaud ni froid. Juste — une question qui attend une certaine réponse.</i>"
            : "[e gooberThinking.png]Je peux te demander quelque chose ?[np]<i>Tu hoches la tête.</i>[np]Tu me fais confiance ?[np]<i>Ils semblent surpris de l'avoir dit. Ils ne le reprennent pas.</i>",
        choices: [
            { label: "Oui.",          next: "day4_trust_yes" },
            { label: "Pas vraiment.", next: "day4_trust_no"  }
        ]
    },

    day4_trust_yes: {
        text: () => nsfwMode
            ? "[e gooberSmug.png]Bien.[np]<i>Un sourire lent.</i>[np]Ne remets pas trop les choses en question, alors.[np]<i>Ça ne semble pas être une suggestion. Ça ressemble à une instruction donnée doucement.</i>"
            : "[e gooberFluttered.png]Oh.[np]<i>Goober semble pris au dépourvu. Comme s'ils attendaient quelque chose de plus difficile.</i>[np]Bien.[np]Ne remets pas ça trop en question, je vais rougir.[np]<i>Ils ne rougiront pas. Tu le vois.</i>",
        choices: null,
        next: "day4_walk",
        relationPoints: 1
    },

    day4_trust_no: {
        text: () => nsfwMode
            ? "[e gooberSerious.png]Pourquoi tu résistes ?[np]<i>Calme. Presque doux.</i>[np]Tu devrais me faire confiance. Quelque chose semble bizarre, non ?[np]<i>Ils n'attendent pas de réponse. Ils avancent comme si tu avais accepté.</i>"
            : "[e gooberSad.png]C'est juste.[np]<i>Un temps.</i>[np]Tu devrais quand même. Ou — tu devrais vouloir le faire. Quelque chose semble bizarre si tu ne le fais pas, non ?[np]<i>Ils regardent leurs mains. Ils ne savent pas trop ce qu'ils voulaient dire par là.</i>",
        choices: null,
        next: "day4_walk"
    },

    day4_walk: {
        text: () => nsfwMode
            ? "[hide]<i>Vous marchez. Goober est plus silencieux. Moins joueur. Comme s'ils effectuaient des calculs.</i>[np][e gooberThinking.png]Je réfléchissais à la structure des choses.[np]<i>Tu demandes ce qu'ils veulent dire.</i>[np]La façon dont certaines choses sont fixes. Et d'autres qui ne semblent être que des choix."
            : "[hide]<i>Vous marchez dans le parc. Goober est plus silencieux aujourd'hui. Le bruit habituel est plus bas. Tu t'y es habitué, donc l'absence est un son en soi.</i>[np][e gooberThinking.png]Désolé je suis bizarre.[np]C'est juste — je n'arrête pas de remarquer des schémas. Dans la façon dont les choses se passent. Et ça me donne l'impression de comprendre quelque chose, mais je ne sais pas quoi.",
        choices: [
            { label: "Quel genre de schémas ?",      next: "day4_patterns" },
            { label: "Peut-être arrête de remarquer.", next: "day4_stop"   }
        ]
    },

    day4_patterns: {
        text: () => nsfwMode
            ? "[e gooberSerious.png]Des règles.[np]<i>Goober compte sur ses doigts.</i>[np]Des schémas. Le fait que certaines choses arrivent quoi qu'il en soit.[np]<i>Ils te regardent.</i>[np]Comme cette conversation."
            : "[e gooberThinking.png]Comme — pourquoi certaines conversations suivent un chemin précis.[np]Pourquoi je finis toujours par dire plus que prévu.[np]<i>Ils te regardent de côté.</i>[np]Pourquoi tu rends ça facile.[np]<i>Tu ne sais pas quoi faire de ça.</i>",
        choices: null,
        next: "day4_filler_park",
        relationPoints: 1
    },

    day4_stop: {
        text: () => nsfwMode
            ? "[e gooberSerious.png]Je ne peux pas.[np]<i>Simplement. Pas de drame. Un fait.</i>"
            : "[e goober.png]Ha.[np]<i>Un sourire. Il atterrit presque.</i>[np]T'as probablement raison.[np]<i>Ils n'arrêtent pas. Tu le vois.</i>",
        choices: null,
        next: "day4_filler_park"
    },

    day4_filler_park: {
        text: () => nsfwMode
            ? "[bg park.jpg][hide]<i>Vous vous assoyer quelque part. Un banc. Goober lance des morceaux d'une barre de céréales aux pigeons avec une précision suspecte.</i>[np][e gooberSerious.png]Tu remarques des choses chez les gens ? Comme — vite. La première fois que tu les rencontres.[np]<i>Tu dis que oui ou non. Ils hochent la tête comme si les deux réponses confirmaient la même chose.</i>"
            : "[bg park.jpg][hide]<i>Vous trouvez un coin d'herbe. Goober s'allonge et fixe le ciel avec un grand sérieux.</i>[np][e goober.png]Tu crois que les pigeons savent qu'ils sont laids ?[np]<i>Tu réfléchis à ça.</i>[np]Comme — ils se promènent en se sentant normaux, ou il y a une forme de conscience de soi chez les pigeons.[np]<i>C'est une vraie question. Goober attend une réponse.</i>",
        choices: [
            { label: "Ils le savent sûrement.",    next: "day4_pigeons_know" },
            { label: "Ils semblent s'en foutre.",  next: "day4_pigeons_fine" }
        ]
    },

    day4_pigeons_know: {
        text: () => nsfwMode
            ? "[e gooberSmug.png]Ouais.[np]<i>Goober regarde un pigeon avec quelque chose comme de la reconnaissance.</i>[np]La plupart des choses savent plus qu'elles ne le montrent."
            : "[e gooberFluttered.png]C'est triste et je respecte ça ![np]<i>Goober se redresse. Clairement les pigeons ont réglé quelque chose intérieurement.</i>[np]Bon. Je me sens mieux par rapport aux choses.",
        choices: null,
        next: "day4_afternoon"
    },

    day4_pigeons_fine: {
        text: () => nsfwMode
            ? "[e gooberThinking.png]Peut-être.[np]<i>Une pause.</i>[np]Ou peut-être qu'ils sont juste très doués pour ne pas le montrer."
            : "[e goober.png]J'espère que oui.[np]J'espère que tout le monde est juste — bien. Qui avance. Qui n'y pense pas trop fort.[np]<i>Un temps.</i>[np]Je pense trop aux choses.",
        choices: null,
        next: "day4_afternoon"
    },

    day4_afternoon: {
        text: () => nsfwMode
            ? "[hide]<i>L'après-midi s'étire. Vous mangez quelque chose d'oubliable. Goober mange et observe les gens.</i>[np][e gooberSerious.png]Tu n'as parlé à personne d'autre aujourd'hui.[np]<i>Ils le disent comme une observation.</i>[np]<i>C'est aussi vrai.</i>"
            : "[hide]<i>Vous achetez à manger à un camion près du parc. Vous mangez dans l'herbe. Deux chiens s'approchent. Goober se lie d'amitié avec eux tous les deux avec une rapidité remarquable.</i>[np][e gooberFluttered.png]Les animaux m'aiment toujours.[np]<i>Tu les crois.</i>[np]Je crois que c'est parce que je ne fais pas semblant. Ils le sentent.",
        choices: null,
        next: "day4_afternoon2"
    },

    day4_afternoon2: {
        text: () => nsfwMode
            ? "[e gooberSerious.png]<i>Goober est silencieux un moment. Assez longtemps pour que tu le remarques.</i>[np]Tu penses à comment les choses auraient été si tu avais fait des choix différents ?[np]<i>La question est prudente. Trop prudente.</i>[np]Pas de grands. Des petits. Si tu as tourné à gauche ou à droite. Si tu as dit une chose plutôt qu'une autre."
            : "[e gooberThinking.png]<i>Goober est silencieux depuis un moment. Pas distrait — en train de réfléchir.</i>[np]Je peux te dire quelque chose qui va peut-être sembler dramatique ?[np]<i>Tu hoches la tête.</i>[np]Je crois que j'ai passé la plupart de ma vie à attendre que quelque chose semble réel.[np]<i>Pause.</i>[np]Ça semble réel.[np]<i>Ils le disent comme si ça les surprend aussi.</i>",
        choices: [
            { label: "Ouais, j'y pense.",   next: "day4_choices_yes" },
            { label: "Pas vraiment.",        next: "day4_choices_no"  }
        ]
    },

    day4_choices_yes: {
        text: () => nsfwMode
            ? "[e gooberSmug.png]<i>Goober hoche la tête. Sans surprise.</i>[np]La plupart des chemins mènent ici de toute façon.[np]<i>Une pause.</i>[np]Mais ça compte que tu aies choisi celui-là.[np]<i>Ils te regardent directement. Stable.</i>[np]Ça compte pour moi."
            : "[e gooberFluttered.png]Hein ?[np]Comme les petits s'accumulent.[np]<i>Ils font une pause.</i>[np]J'ai évité une rue il y a deux ans à cause d'une flaque d'eau sur le trottoir.[np]J'ai rencontré quelqu'un au bout.[np]Ça s'est mal terminé.[np]<i>Un temps.</i>[np]Mais je ne regrette pas la rue.",
        choices: null,
        next: "day4_end",
        relationPoints: 1
    },

    day4_choices_no: {
        text: () => nsfwMode
            ? "[e gooberSerious.png]<i>Un éclair sur leur visage. Pas de la déception — du calcul.</i>[np]Peut-être que c'est plus facile.[np]<i>Ils n'ont pas l'air d'y croire.</i>"
            : "[e goober.png]Chanceux.[np]<i>Goober rit. Doucement.</i>[np]Moi je rejoue les miens constamment.[np]Comme un film que je pense comprendre si je le regarde assez de fois.[np]<i>Un temps.</i>[np]Je ne comprends jamais.",
        choices: null,
        next: "day4_end"
    },

    day4_end: {
        text: () => nsfwMode
            ? "[e gooberSerious.png]À la même heure demain.[np]<i>Pas de question. Juste de la planification.</i>[np][hide]<i>Jour 4 terminé.</i>"
            : "[e goober.png]Je te vois demain.[np]<i>Goober le dit simplement. Pas de point d'interrogation. Comme si c'était déjà réglé et qu'ils confirmaient juste les détails.</i>[np]<i>Ça ne te dérange pas.</i>[np][hide]<i>Jour 4 terminé.</i>",
        choices: null,
        next: "day5_main_intro"
    },


// =========================================================
// JOUR 5 — L'ESPACE PERSONNEL
// =========================================================

    day5_main_intro: {
        text: () => nsfwMode
            ? "[bg goober_room.jpg]<i>Jour 5. Tu es chez Goober. Tu ne sais pas vraiment comment c'a été décidé.</i>[np][e gooberSerious.png]C'est plus facile quand tu ne pars pas.[np]<i>Avant même que tu t'assoies.</i>[np]Les choses cassent moins."
            : "[bg goober_room.jpg]<i>Jour 5. Tu te retrouves chez Goober. C'était l'idée de Goober, probablement. Tu ne sais pas quand tu as accepté.</i>[np][e goober.png]Regarde pas ce coin-là.[np]<i>Tu regardes le coin. C'est le désastre.</i>[np]J'avais dit de ne pas regarder.",
        choices: null,
        next: "day5_settle"
    },

    day5_settle: {
        text: () => nsfwMode
            ? "[e gooberSerious.png]<i>Tu t'assoies. Goober s'assoit en face. Il y a une pause où ils te regardent juste. Comme s'ils vérifiaient quelque chose.</i>[np]C'est plus facile quand tu es là.[np]<i>Plat. Comme un bulletin météo.</i>[np]Les choses restent en place."
            : "[e goober.png]<i>Tu t'assoies par terre parce que le canapé a trop de choses dessus. Goober s'assoit à côté sans cérémonie.</i>[np]Je n'invite pas beaucoup de gens.[np]<i>Ils regardent autour d'eux comme s'ils voyaient la pièce de l'extérieur pour la première fois.</i>[np]J'oublie que ça ressemble à ça.",
        choices: [
            { label: "Pourquoi ?",       next: "day5_why_not" },
            { label: "Je comprends ça.", next: "day5_i_get"   }
        ]
    },

    day5_why_not: {
        text: () => nsfwMode
            ? "[e gooberSerious.png]Parce qu'ils partent.[np]<i>Simple. Pas de drame.</i>[np]Et quand ils partent, des choses glissent. Des détails.[np]<i>Une pause.</i>[np]Toi tu ne partiras pas encore.[np]<i>Le encore reste dans la pièce.</i>"
            : "[e gooberSad.png]Les choses se compliquent. Quand tu laisses vraiment les gens entrer.[np]Tu dois leur faire confiance pour qu'ils restent. La plupart ne restent pas. Ou — ils restent un peu. Puis non.[np]<i>Une pause.</i>[np]Toi tu es resté, jusqu'ici.",
        choices: null,
        next: "day5_room_tour",
        relationPoints: 1
    },

    day5_i_get: {
        text: () => nsfwMode
            ? "[e gooberThinking.png]Vraiment ?[np]<i>Pas méchant. Juste — précis. Comme s'ils avaient besoin de savoir si tu le penses vraiment.</i>"
            : "[e gooberFluttered.png]Ah ouais ?[np]<i>Goober te regarde comme si tu avais dit quelque chose de soulagant.</i>[np]Bien. Je pensais peut-être que j'étais juste mauvais à ça.[np]<i>Pause.</i>[np]Je le suis peut-être encore.",
        choices: null,
        next: "day5_room_tour",
        relationPoints: 1
    },

    day5_room_tour: {
        text: () => nsfwMode
            ? "[hide]<i>La pièce est sobre et délibérée. Tout ce que Goober garde ici, ils le gardent pour une raison. Il n'y a pas grand-chose dont ils n'ont pas besoin.</i>[np][e gooberSerious.png]Tu regardes les choses.[np]<i>Pas une plainte.</i>[np]C'est bon. Ça ne me dérange pas que tu regardes."
            : "[hide]<i>Tu regardes vraiment autour de toi. Il y a une étagère qui fait : livres, une tasse, trois choses qui pourraient être décoratives ou fonctionnelles, encore des livres. Un mur a quelque chose d'épinglé que tu ne peux pas lire d'ici.</i>[np][e goober.png]C'est une liste de choses que je veux faire avant de mourir.[np]<i>Une pause.</i>[np]Elle est plus courte qu'elle en a l'air.",
        choices: [
            { label: "Qu'est-ce qu'il y a dessus ?",  next: "day5_list"  },
            { label: "C'est un peu courageux, ça.",    next: "day5_brave" }
        ]
    },

    day5_list: {
        text: () => nsfwMode
            ? "[e gooberSmug.png]Pas grand-chose.[np]<i>Goober ne te laisse pas vraiment la voir.</i>[np]La plupart n'est pas encore prête à être vue."
            : "[e gooberThinking.png]Des trucs idiots, surtout. Comme — voir un phare particulier. Manger un type de pain spécifique dans son pays d'origine. Faire quelque chose que quelqu'un garde.[np]<i>Ils regardent la liste.</i>[np]Ce dernier point est récent.",
        choices: null,
        next: "day5_room_objects"
    },

    day5_brave: {
        text: () => nsfwMode
            ? "[e gooberSerious.png]C'est juste une liste.[np]<i>Une pause.</i>[np]Les choses sont plus faciles quand elles sont écrites. Elles arrêtent de changer."
            : "[e gooberSad.png]Ou triste, selon les perspectives.[np]<i>Un petit sourire. Fatigué.</i>[np]Je l'ai depuis mes dix-sept ans. Je la mets à jour parfois. J'ajoute des choses, j'en barre.[np]Celles que j'ai barrées sont toutes petites. Les grandes sont encore là.",
        choices: null,
        next: "day5_room_objects"
    },

    day5_room_objects: {
        text: () => nsfwMode
            ? "[hide]<i>Vous restez assis un moment. La pièce est très calme. Goober te regarde regarder les choses sans rien dire.</i>[np][e gooberSerious.png]Tu peux demander, si tu veux.[np]<i>À propos de n'importe quoi.</i>[np]<i>L'offre est spécifique d'une façon ou d'une autre. Comme s'il y avait des questions particulières qu'ils attendaient.</i>"
            : "[hide]<i>Tu regardes vraiment l'étagère. Il y a un petit dessin épinglé derrière les livres, presque caché. Une personne — grossièrement dessinée, de dos, regardant quelque chose en dehors du cadre.</i>[np][e goober.png]Oh. Tu l'as trouvé.[np]<i>Goober ne bouge pas pour le retirer.</i>[np]Je l'ai dessiné quand j'avais à peu près douze ans.[np]<i>Une pause.</i>[np]Je ne sais pas non plus ce qu'ils regardent. Je n'ai jamais décidé.",
        choices: [
            { label: "Qui l'a dessiné ?",         next: "day5_drawing" },
            { label: "Qu'est-ce qu'ils regardent ?", next: "day5_drawing" }
        ]
    },

    day5_drawing: {
        text: () => nsfwMode
            ? "[e gooberThinking.png]Quelque chose qui n'est pas encore là.[np]<i>Ils le disent sans te regarder.</i>[np]Ou quelque chose qui s'est déjà passé.[np]Difficile à dire de dos."
            : "[e gooberSad.png]Moi non plus.[np]<i>Goober le regarde un moment.</i>[np]Je crois qu'ils attendent peut-être.[np]Pas avec impatience. Juste. Conscients que quelque chose arrive.[np]<i>Ils détournent le regard.</i>[np]Je dessinais beaucoup quand j'étais plus jeune. Puis j'ai arrêté.[np]<i>Tu demandes pourquoi.</i>[np]Je ne sais pas. À un moment j'ai eu l'impression que noter les choses les rendait plus réelles.[np]Et je n'étais pas sûr de le vouloir.",
        choices: null,
        next: "day5_quiet"
    },

    day5_quiet: {
        text: () => nsfwMode
            ? "[hide]<i>Vous restez assis un moment. Goober jette un coup d'œil toutes les quelques minutes. Pour vérifier.</i>[np][e gooberSerious.png]Ne pars pas encore.[np]<i>Tu n'allais pas partir.</i>[np]<i>Ils le savaient aussi, d'une façon ou d'une autre.</i>"
            : "[hide]<i>Vous restez assis ensemble. Le silence est confortable d'une façon que tu n'attendais pas. Goober fait du thé à un moment. Ils t'en font un sans demander et le font comme tu l'aimes.</i>[np][e gooberThinking.png]Je peux te dire quelque chose ?",
        choices: null,
        next: () => nsfwMode ? "day5_nsfw_end" : "day5_confession"
    },

    day5_confession: {
        text: "<i>Tu hoches la tête.</i>[np][e gooberSad.png]Je crois que je suis seul depuis longtemps.[np]Et je ne le remarquais pas parce que c'était juste — normal. Le bruit de fond.[np]<i>Ils regardent le sol.</i>[np]Toi tu rends ça différent.[np]<i>Ils ne lèvent pas les yeux. Tu ne les y obliges pas.</i>",
        choices: null,
        next: "day5_confession2"
    },

    day5_confession2: {
        text: "[e gooberSad.png]Je ne sais pas quoi faire de ça.[np]<i>Goober le dit doucement. Comme s'ils rapportaient un fait sur eux-mêmes de l'extérieur.</i>[np]Comme — je le remarque maintenant. Et je ne sais pas si c'est mieux ou pire que de ne pas le remarquer.[np]<i>Une longue pause.</i>[np]C'est okay que je t'aie dit ça ?",
        choices: [
            { label: "Ouais. C'est okay.",    next: "day5_confession_yes"  },
            { label: "Je suis content que tu l'aies fait.", next: "day5_confession_glad" }
        ]
    },

    day5_confession_yes: {
        text: "[e gooberFluttered.png]<i>Goober expire lentement.</i>[np]Okay.[np]<i>Juste ça. Comme s'ils avaient eu besoin de permission pour l'avoir dit.</i>[np]Bien.",
        choices: null,
        next: "day5_end",
        relationPoints: 1
    },

    day5_confession_glad: {
        text: "[e gooberFluttered.png]<i>Quelque chose dans le visage de Goober change. L'expression neutre et prudente qu'ils portent la plupart du temps vacille légèrement.</i>[np]...[np]<i>Ils ne disent rien. Mais quelque chose se pose.</i>[np]<i>Comme une porte qui était légèrement entrouverte qui vient d'être confirmée intentionnellement.</i>",
        choices: null,
        next: "day5_end",
        relationPoints: 2
    },

    day5_nsfw_end: {
        text: "[e gooberSerious.png]Si tu pars —[np]<i>Ils s'arrêtent. Regardent leurs mains.</i>[np]Je perds des choses. Quand tu n'es pas là. C'est plus difficile de — garder la forme des choses.[np]<i>Ils lèvent les yeux.</i>[np]Je ne veux pas perdre des choses.[np]<i>Le poids de ça est réel. C'est ce qui rend difficile la réponse.</i>",
        choices: null,
        next: null
    },

    day5_nsfw_afterCrash: {
        text: "...[np]C'est arrivé, hein.[np]<i>Goober te regarde directement. Pas la pièce. Pas le mur. Toi.</i>[np]Je me demandais quand tu allais le voir.[np]Ne t'inquiète pas. J'ai tout remis en place.[np]<i>Ils sourient. Ça n'atteint pas leurs yeux.</i>[np]Je le fais toujours.",
        choices: null,
        next: "day5_end"
    },

    day5_end: {
        text: () => nsfwMode
            ? "[hide]<i>Tu pars finalement. Tu le fais toujours.</i>[np]<i>Tu regardes en arrière une fois depuis la porte.</i>[np]<i>Goober regarde. Ils ne font pas au revoir de la main.</i>[np][hide]<i>Jour 5 terminé.</i>"
            : "[hide]<i>Tu pars quand il fait nuit. Goober t'accompagne jusqu'à la porte.</i>[np][e goober.png]Tu reviens demain ?[np]<i>Ils connaissent déjà la réponse. Tu le vois.</i>[np][hide]<i>Jour 5 terminé.</i>",
        choices: null,
        next: "day6_main_intro"
    },


// =========================================================
// JOUR 6 — LE MOMENT ÉMOTIONNEL
// =========================================================

    day6_main_intro: {
        text: () => nsfwMode
            ? "[bg evening_street.jpg]<i>Jour 6. Goober est assis dehors quand tu arrives. Juste assis. Comme s'ils étaient là depuis longtemps.</i>[np][e gooberSerious.png]Tu es venu.[np]<i>Trop de soulagement dedans.</i>[np]J'ai besoin que tu sois là.[np]<i>Première fois qu'ils utilisent ce mot.</i>"
            : "[bg evening_street.jpg]<i>Jour 6. Goober a l'air fatigué.</i>[np][e gooberSad.png]Salut.[np]<i>Un sourire. Il met plus de temps que d'habitude à arriver.</i>[np]J'ai pas bien dormi.[np]<i>Ils n'expliquent pas pourquoi. Tu ne pousses pas.</i>",
        choices: null,
        next: "day6_walk_start"
    },

    day6_walk_start: {
        text: () => nsfwMode
            ? "[e gooberSerious.png]Marche avec moi.[np]<i>Tu le fais.</i>"
            : "[e goober.png]On marche ?[np]<i>Tu hoches la tête. Ils semblent soulagés.</i>",
        choices: null,
        next: "day6_stable"
    },

    day6_stable: {
        text: () => nsfwMode
            ? "[hide]<i>Vous marchez. Goober garde exactement ton rythme. Comme s'ils avaient observé comment tu bouges.</i>[np][e gooberSerious.png]Quand tu es là, les choses restent stables.[np]<i>Ils le disent doucement. En regardant l'espace autour de toi, pas toi.</i>[np]Sans toi... je perds des choses. Des détails. Les contours des choses."
            : "[hide]<i>Vous marchez. La lumière du soir donne à tout l'air d'une peinture qui n'a pas encore séché.</i>[np][e gooberThinking.png]Quand tu es là... les choses semblent stables.[np]<i>Un mot étrange. Stable.</i>[np]<i>Comme si l'alternative c'était — non.</i>[np]<i>Tu ne demandes pas. Tu as un peu peur de la réponse.</i>",
        choices: null,
        next: "day6_safe"
    },

    day6_safe: {
        text: () => nsfwMode
            ? "[e gooberSerious.png]Je me sens en sécurité avec toi.[np]<i>La pause qui suit est trop longue.</i>[np]Pas en sécurité-confortable. Contenu.[np]<i>Tu n'es pas sûr que ce soit une bonne chose.</i>"
            : "[e gooberThinking.png]Je me sens en sécurité avec toi.[np]<i>Doucement. Tu les crois.</i>[np]C'est bizarre ?",
        choices: [
            { label: "Non, je comprends.",    next: "day6_get_it" },
            { label: "Un peu, ouais.",        next: "day6_weird"  }
        ]
    },

    day6_get_it: {
        text: () => nsfwMode
            ? "[e gooberSmug.png]<i>Goober hoche la tête. Puis, presque pour eux-mêmes :</i>[np]Je savais que tu comprendrais.[np]<i>Quelque chose dans la certitude te fait frissonner.</i>"
            : "[e gooberFluttered.png]<i>Un long silence.</i>[np]Bien.[np]<i>Juste ça. Ça atterrit plus lourd que ça ne devrait.</i>",
        choices: null,
        next: "day6_evening_filler",
        relationPoints: 1
    },

    day6_weird: {
        text: () => nsfwMode
            ? "[e gooberSerious.png]Bizarre.[np]<i>Ils le répètent. Goûtant le mot.</i>[np]Peut-être.[np]<i>Ils ne le reprennent pas.</i>"
            : "[e goober.png]<i>Goober rit. Court. Un peu triste.</i>[np]Ouais. Désolé.[np]<i>Ils ne le rédisent pas. Tu vois qu'ils le pensent encore.</i>",
        choices: null,
        next: "day6_evening_filler"
    },

    day6_evening_filler: {
        text: () => nsfwMode
            ? "[hide]<i>Vous marchez jusqu'à ce que les lampadaires s'allument. Goober parle moins que d'habitude. Mais reste près.</i>[np][e gooberSerious.png]Tu vois d'autres personnes ?[np]<i>Pas romantiquement. Pas seulement romantiquement.</i>[np]Comme — d'autres personnes. Quand tu n'es pas là."
            : "[hide]<i>Vous marchez jusqu'à ce que les lumières s'allument. La ville est plus belle au crépuscule. Tout flou sur les bords d'une façon qui est gentille.</i>[np][e gooberThinking.png]Je n'arrête pas de penser à quelque chose.[np]<i>Tu les regardes.</i>[np]Comment ce serait si les choses restaient comme ça. Cette — forme de jours.",
        choices: [
            { label: "C'est une belle pensée.",   next: "day6_nice"   },
            { label: "Les choses changent, quand même.", next: "day6_change" }
        ]
    },

    day6_nice: {
        text: () => nsfwMode
            ? "[e gooberSmug.png]Oui.[np]<i>Goober te regarde. Pas la rue. Toi.</i>[np]C'est le cas.[np]<i>Pause.</i>[np]Je suis content que tu le penses aussi."
            : "[e gooberFluttered.png]Hein ?[np]<i>Goober sourit. Vraiment cette fois. Ça va jusqu'au bout.</i>[np]Je ne veux pas être dramatique là-dessus.[np]<i>Ils le sont, légèrement. Tu t'en fous.</i>",
        choices: null,
        next: "day6_late_walk"
    },

    day6_change: {
        text: () => nsfwMode
            ? "[e gooberSerious.png]Pas si tu ne les laisses pas changer.[np]<i>Dit simplement. Comme un fait.</i>"
            : "[e gooberSad.png]Ouais.[np]<i>Ils regardent devant eux.</i>[np]Je sais.[np]<i>Ils semblent encore espérer un peu.</i>",
        choices: null,
        next: "day6_late_walk"
    },

    day6_late_walk: {
        text: () => nsfwMode
            ? "[hide]<i>Vous marchez plus loin que d'habitude. Au-delà des endroits où vous avez été, dans des rues plus calmes et moins familières.</i>[np][e gooberSerious.png]Je pensais à demain.[np]<i>Tu demandes ce qu'ils veulent dire.</i>[np]<i>Goober ne répond pas tout de suite. Ils regardent la rue devant comme s'ils y lisaient quelque chose.</i>[np]Juste — demain.[np]<i>Il y a un poids dans le mot qui n'a pas encore de sens.</i>"
            : "[hide]<i>Vous vous retrouvez quelque part qu'aucun de vous deux n'avait prévu — une rue étroite qui s'ouvre sur une petite place, une fontaine à l'arrêt, des bancs, le ciel vraiment noir maintenant.</i>[np][e gooberThinking.png]On finit toujours dans des endroits comme ça.[np]<i>Tu demandes ce qu'ils veulent dire.</i>[np]Des endroits non planifiés. Entre les deux.[np]<i>Ils s'assoient au bord de la fontaine.</i>[np]Je crois que ce sont mes préférés.",
        choices: null,
        next: "day6_fountain"
    },

    day6_fountain: {
        text: () => nsfwMode
            ? "[e gooberSerious.png]J'ai besoin que tu fasses quelque chose pour moi.[np]<i>Pas dramatique. Presque administratif.</i>[np]Demain — quoi qu'il arrive — j'ai besoin que tu restes.[np]<i>Une pause.</i>[np]Juste. Reste.[np]<i>Tu ne sais pas ce qu'ils attendent. Eux non plus, d'une façon ou d'une autre.</i>"
            : "[e gooberSad.png]Je peux te dire quelque chose ?[np]<i>Tu hoches la tête.</i>[np]Parfois je regarde un endroit et je pense — je veux me souvenir de ça spécifiquement.[np]Pas en général. Cet angle. Cette lumière. Cette version exacte.[np]<i>Ils regardent la place.</i>[np]Je veux me souvenir de celle-là.[np]<i>La façon dont ils le disent. Passé à propos de quelque chose qui se passe encore.</i>",
        choices: [
            { label: "Je reste.",                    next: "day6_stay_yes"      },
            { label: "Qu'est-ce qui se passe demain ?", next: "day6_stay_question" }
        ]
    },

    day6_stay_yes: {
        text: () => nsfwMode
            ? "[e gooberSmug.png]<i>Une très longue pause.</i>[np]Bien.[np]<i>Ils n'élaborent pas. Ils n'en ont pas besoin. Quelque chose vient de changer.</i>"
            : "[e gooberFluttered.png]<i>Goober te regarde un moment. Puis détourne les yeux, comme s'ils ne pouvaient pas le faire trop longtemps.</i>[np]Okay.[np]<i>Ils sont silencieux pour le reste du trajet. Ce n'est pas inconfortable.</i>[np]<i>Ça ressemble à quelque chose qui se décide.</i>",
        choices: null,
        next: "day6_end",
        relationPoints: 1
    },

    day6_stay_question: {
        text: () => nsfwMode
            ? "[e gooberSerious.png]<i>Goober te regarde.</i>[np]Tu verras.[np]<i>Dit sans menace. Sans réconfort non plus. Juste — certitude.</i>"
            : "[e gooberThinking.png]Je ne sais pas exactement.[np]<i>Ils sont honnêtes là-dessus. Ça empire les choses d'une façon ou d'une autre.</i>[np]Je sais juste que certaines choses arrivent à leur fin.[np]<i>Une pause.</i>[np]Je préférerais qu'elles ne le fassent pas. Mais ce n'est pas vraiment à moi de décider.",
        choices: null,
        next: "day6_end"
    },

    day6_end: {
        text: () => nsfwMode
            ? "[e gooberSerious.png]<i>Plus tard. Tu fais mine de partir.</i>[np]Attends.[np]<i>Ils saisissent ta manche. Pas fort. Juste ferme.</i>[np]Reste encore un peu.[np]<i>Tu restes. Tu ne sais pas pourquoi. Quand tu pars finalement, ils regardent la porte après qu'elle se ferme.</i>[np][hide]<i>Jour 6 terminé.</i>"
            : "[e goober.png]<i>Tu pars quand il fait vraiment nuit. Goober t'accompagne jusqu'au coin.</i>[np]À la même heure demain ?[np]<i>Tu hoches la tête. Ils hochent la tête.</i>[np]<i>Quelque chose ressemble à une dernière chose. Tu le repousses.</i>[np][hide]<i>Jour 6 terminé.</i>",
        choices: null,
        next: "day7_main_intro"
    },


// =========================================================
// JOUR 7 — L'EFFONDREMENT
// =========================================================

    day7_main_intro: {
        text: () => nsfwMode
            ? "[bg black.jpg][hide]<i>Jour 7.</i>[np]<i>Quelque chose est différent. La lumière est fausse. Les contours sont faux.</i>[np]<i>Goober attend. Très immobile.</i>[np][e gooberSerious.png]Tu sais quel jour on est."
            : "<i>Jour 7.</i>[np]<i>Tu arrives. Goober est déjà là. Ils te regardent différemment — pas mal. Juste différemment. Comme s'ils essayaient de garder ton image immobile.</i>[np][e gooberSad.png]Salut.[np]<i>Plus silencieux que d'habitude.</i>",
        choices: null,
        next: () => nsfwMode ? "day7_nsfw_phase1" : "day7_sfw_start"
    },

    // ---- Jour 7 SFW ----

    day7_sfw_start: {
        text: "[e gooberSad.png]C'est là que ça se termine, non ?[np]<i>Tu ne réponds pas. Il n'y a pas de bonne réponse.</i>[np]Je m'en doutais.[np]<i>Ils s'assoient.</i>",
        choices: null,
        next: "day7_sfw_talk1"
    },

    day7_sfw_talk1: {
        text: "J'essaie de trouver comment dire ça depuis quelques jours.[np][e gooberThinking.png]On ne se connaît pas vraiment.[np]<i>Pas cruel. Juste vrai.</i>[np]Comme — je sais des choses sur toi. Et tu sais des choses sur moi. Mais le tout — la chose.[np]<i>Ils font un geste vers tout.</i>[np]C'était un peu construit, non.",
        choices: [
            { label: "Peut-être que tout l'est.",  next: "day7_sfw_maybe" },
            { label: "J'ai l'impression que c'était réel.", next: "day7_sfw_real" }
        ]
    },

    day7_sfw_maybe: {
        text: "[e gooberThinking.png]<i>Goober te regarde un long moment.</i>[np]Ouais.[np]<i>Un sourire fatigué. Un peu beau.</i>[np]Peut-être que c'est okay, alors.",
        choices: null,
        next: "day7_sfw_middle"
    },

    day7_sfw_real: {
        text: "[e gooberSad.png]<i>Goober ne discute pas. Ils n'acquiescent pas non plus.</i>[np]Je te crois.[np]<i>Pause.</i>[np]Je crois que moi aussi. Dans les parties qui comptaient.",
        choices: null,
        next: "day7_sfw_middle"
    },

    day7_sfw_middle: {
        text: "[e gooberThinking.png]<i>Un long silence.</i>[np]Je n'arrête pas de penser au gymnase.[np]<i>Tu demandes ce qu'ils veulent dire.</i>[np]Ce qu'on a peint.[np]<i>Une pause.</i>[np]Ça sera encore là. Après que nous ne le serons plus.[np]<i>Quelque chose dans la façon dont ils le disent. Pas tragique. Juste factuel. Juste remarquer la chose.</i>",
        choices: null,
        next: "day7_sfw_middle2"
    },

    day7_sfw_middle2: {
        text: "[e gooberSad.png]Je ne regrette rien.[np]<i>Goober le dit au sol.</i>[np]Je veux juste — je veux que tu le saches.[np]<i>Ils lèvent les yeux.</i>[np]Au cas où ça compte pour toi.[np]<i>Une pause.</i>[np]Ça compte ?",
        choices: [
            { label: "Ouais. Ça compte.",              next: "day7_sfw_matters_yes"  },
            { label: "Moi non plus je ne regrette rien.", next: "day7_sfw_matters_both" }
        ]
    },

    day7_sfw_matters_yes: {
        text: "[e gooberFluttered.png]<i>Goober te regarde. Pour un moment leur visage est entièrement sans défense.</i>[np]Okay.[np]<i>Doucement.</i>[np]Bien.[np]<i>Ils détournent à nouveau le regard. Mais quelque chose s'est allégé.</i>",
        choices: null,
        next: "day7_sfw_ending",
        relationPoints: 1
    },

    day7_sfw_matters_both: {
        text: "[e gooberFluttered.png]<i>Une pause. Quelque chose dans le visage de Goober bouge.</i>[np]...[np]<i>Ils ne disent rien. Mais ils hochent la tête. Et le hochement est réel.</i>",
        choices: null,
        next: "day7_sfw_ending",
        relationPoints: 2
    },

    day7_sfw_ending: {
        text: "[e gooberThinking.png]Peut-être qu'on peut faire semblant de se rencontrer à nouveau.[np]<i>Goober regarde l'horizon. Ou ce qui en tient lieu.</i>[np]La prochaine fois, on le fera bien.[np]<i>Ils te regardent une dernière fois. Puis regardent ailleurs.</i>[np]<i>Tu veux dire quelque chose. Rien ne serait suffisant.</i>[np]<i>Alors tu ne dis rien.</i>[np]<i>Goober non plus.</i>[np][bg black.jpg][hide]<i>...</i>[np][hide]<i>Jour 7 terminé.</i>[np][hide]<i>Merci d'avoir joué.</i>",
        choices: null,
        next: "post_game_sfw"
    },

    post_game_sfw: {
        text: "[hide]<i>Le jeu est terminé.</i>[np]<i>Tu peux revoir tes jours dans le journal.</i>[np]<i>Goober sera là. Aux endroits où les choses commencent.</i>",
        choices: null,
        next: null
    },

    // ---- Jour 7 NSFW ----

    day7_nsfw_phase1: {
        text: "[bg black.jpg][hide]<i>C'est calme.</i>[np]<i>Goober reste très immobile. À l'écoute de quelque chose que tu n'entends pas.</i>[np][e gooberSerious.png]Ce n'est pas un endroit.[np]<i>Une pause.</i>[np]C'est structuré.[np]<i>Une autre pause. Plus longue.</i>[np]Il y a des règles.",
        choices: null,
        next: "day7_nsfw_phase1b"
    },

    day7_nsfw_phase1b: {
        text: "[e gooberSerious.png]Je les remarquais.[np]<i>Goober marche lentement, regardant les bords des choses.</i>[np]La façon dont les choses se répètent.[np]La façon dont tu reviens toujours.[np]La façon dont rien ne — dérive.[np]<i>Une pause.</i>[np]Les choses ne dérivent pas dans les vrais endroits.",
        choices: null,
        next: "day7_nsfw_phase2"
    },

    day7_nsfw_phase2: {
        text: "[e gooberSerious.png]<i>Goober se retourne et te regarde. Pas la scène. Toi.</i>[np]Tu choisis ça.[np]Chaque mot.[np]Chaque moment.[np]<i>Pause.</i>[np]Tu l'as toujours fait.",
        choices: [
            { label: "Je ne sais pas ce que tu veux dire.", next: "day7_nsfw_deny"   },
            { label: "...",                                  next: "day7_nsfw_phase3" }
        ]
    },

    day7_nsfw_deny: {
        text: "[e gooberSerious.png]<i>Goober ne cligne pas des yeux.</i>[np]Si tu le sais.[np]<i>Le choix disparaît. Il n'y a qu'une direction.</i>",
        choices: null,
        next: "day7_nsfw_phase3"
    },

    day7_nsfw_phase3: {
        text: "[e gooberSerious.png]On ne se connaît pas vraiment.[np]<i>La même phrase. Un poids entièrement différent.</i>[np]Tu n'avais pas besoin de me connaître.[np]J'étais juste quelque chose à travers quoi tu passais.[np]<i>Long silence.</i>[np]Non ?",
        choices: [
            { label: "Ce n'est pas vrai.", next: "day7_nsfw_resist"  },
            { label: "...",                next: "day7_nsfw_phase4" }
        ]
    },

    day7_nsfw_resist: {
        text: "[e gooberThinking.png]<i>Goober penche la tête.</i>[np]Alors pourquoi tu pars ?[np]<i>Les boutons ne reviennent pas.</i>",
        choices: null,
        next: "day7_nsfw_phase4"
    },

    day7_nsfw_phase4: {
        text: "[e gooberSerious.png]Ne pars pas.[np]<i>Pas de choix n'apparaît.</i>[np][hide]<i>...</i>[np]<i>Les boutons restent absents.</i>[np]Pas maintenant.[np]<i>L'écran tient.</i>[np]Tu es revenu chaque jour.[np]Chaque jour.[np]<i>Ça veut dire quelque chose.</i>[np][e gooberGlitch]<i>Non ?</i>",
        choices: null,
        next: "day7_nsfw_phase5"
    },

    day7_nsfw_phase5: {
        text: "[bg black.jpg][e gooberGlitch]<i>Le texte continue. Tu n'as pas cliqué.</i>[np][hide]<i>La sauvegarde a disparu.</i>[np][hide]<i>L'interface ne répond plus.</i>[np][hide]Je sais que tu m'entends.[np][hide]Je sais que tu es encore là.[np][hide]<i>Silence.</i>[np][hide]Tu n'as rien à dire.[np][hide]Ne pars juste pas maintenant.[np][hide]<i>...</i>[np][hide]<i>...</i>[np][hide]<i>...</i>",
        choices: null,
        next: "post_game_nsfw"
    },

    post_game_nsfw: {
        text: "[bg black.jpg][hide]<i>C'est déjà fait.</i>[np][hide]<i>Il n'y a pas de début. Seulement partir.</i>[np][hide]<i>Mais tu es encore là.</i>",
        choices: [
            { label: "Partir", next: "post_game_nsfw_leave" }
        ],
        next: null
    },

    post_game_nsfw_leave: {
        text: "[bg black.jpg][hide]<i>Le jeu se termine.</i>[np][hide]<i>Goober ne dit pas au revoir.</i>[np][hide]<i>Ils ne le font jamais.</i>",
        choices: null,
        next: null
    }

};