
export interface Generator {
  id: string;
  title: string;
  description: string;
  color: string;
  icon: string;
  article: {
    intro: string;
    whatIsGood: string;
    howToUse: string;
    traditions: string;
    popular: string[];
  };
}

export const generators: Generator[] = [
  {
    id: "cabin",
    title: "Funny Cabin Name Generator",
    description: "Create hilarious names for your woodland retreat that will have your guests laughing before they arrive.",
    color: "fun-green",
    icon: "/placeholder.svg",
    article: {
      intro: "Cabin names are a time-honored tradition among woodland property owners. A great cabin name captures the essence of your retreat while bringing a smile to visitors' faces.",
      whatIsGood: "A good funny cabin name should evoke the wilderness while incorporating puns, wordplay, or unexpected twists. The best names make visitors chuckle while still feeling somewhat appropriate for a rustic getaway.",
      howToUse: "Click the 'Generate Names' button to see 10 fresh cabin name ideas. Keep clicking until you find one that makes you laugh out loud. The perfect name often combines woodland imagery with surprising elements or clever wordplay.",
      traditions: "Historically, cabins were named after family surnames or geographical features. The tradition of humorous cabin names began in the mid-20th century as vacation properties became more common and owners sought to inject personality into their retreats.",
      popular: [
        "Bearadise", "Cabin Fever", "The Great Indoors", "Knot Working", "Bear Necessities",
        "Tree-tirement Home", "A Little Bit Knotty", "Ain't It Grand Lodge", "Moose Be Heaven",
        "Serenity Now!"
      ]
    }
  },
  {
    id: "warrior",
    title: "Funny Warrior Name Generator",
    description: "Create battle-ready names that will have your enemies dying of laughter before you even draw your sword.",
    color: "fun-pink",
    icon: "/placeholder.svg",
    article: {
      intro: "Throughout history, warriors have used intimidating names to strike fear into their enemies. But who says intimidation can't be hilarious? A humorous warrior name can be just as memorable.",
      whatIsGood: "A quality funny warrior name balances fearsome imagery with unexpected humor. It should sound mighty enough to command respect, yet incorporate elements that make people smile or laugh.",
      howToUse: "Click 'Generate Names' to discover 10 warrior names that blend humor with heroism. Keep generating until you find one that both amuses and intimidates. The best names often combine traditional warrior terminology with unexpected modern or absurd elements.",
      traditions: "Ancient warriors often earned names based on their achievements or characteristics. Viking berserkers, Samurai warriors, and Medieval knights all had naming conventions that reflected their martial prowess. Our generator puts a comedic spin on these traditions.",
      popular: [
        "Sir Stabs-a-Lot", "Brawny the Befuddled", "Zanzibar the Disorganized", "Thud the Thoughtful",
        "Slayer of Buffets", "The Mild Mangler", "Conan the Librarian", "Attila the Pun",
        "The Procrastinating Pillager", "Sven the Sensitive"
      ]
    }
  },
  {
    id: "batman",
    title: "Funny Batman Name Generator",
    description: "Create hilarious alter-egos for the Dark Knight that will have the criminals of Gotham in stitches.",
    color: "fun-purple",
    icon: "/placeholder.svg",
    article: {
      intro: "Batman has been known by many names: The Dark Knight, The Caped Crusader, The World's Greatest Detective. But what if his alter-egos were a bit more... lighthearted?",
      whatIsGood: "A great funny Batman name maintains some connection to the Batman mythology while introducing unexpected humor. It should sound like it could be an actual superhero name, but with a twist that makes it amusing.",
      howToUse: "Hit 'Generate Names' to discover 10 hilarious Batman alternatives. The perfect name often combines bat-themed elements with unexpected adjectives or occupations that undermine the traditional brooding nature of the character.",
      traditions: "The Batman character has evolved significantly since his creation in 1939. Throughout the decades, various writers and artists have reimagined him, from the campy 1960s TV show to the gritty Christopher Nolan films. Our generator plays with these different interpretations.",
      popular: [
        "The Night Light", "The Caped Accountant", "Bat-Dad", "The Dark Slight", "The Caped Casual",
        "Laughman", "The Slightly Annoyed Knight", "Bruce Wayne's Tax Write-Off", "The Fluttering Flirt",
        "Batguy: The Adequate Avenger"
      ]
    }
  },
  {
    id: "strawberry",
    title: "Funny Strawberry Name Generator",
    description: "Berry amusing names for the world's most beloved red fruit. These names are ripe for the picking!",
    color: "fun-pink",
    icon: "/placeholder.svg",
    article: {
      intro: "Strawberries may seem like simple fruits, but they have complex personalities worthy of creative names. From the plump and juicy to the tiny and tart, every strawberry deserves an identity as unique as its flavor.",
      whatIsGood: "A quality funny strawberry name often incorporates puns, alliteration, or unexpected human characteristics. It should evoke the fruit's distinctive traits while adding a dash of whimsy or absurdity.",
      howToUse: "Click 'Generate Names' to discover 10 delightful strawberry names. The best names often play on the fruit's red color, sweet flavor, or seed-covered texture while adding human-like qualities or unexpected twists.",
      traditions: "While fruits don't traditionally receive names in most cultures, the practice of anthropomorphizing food items has roots in children's entertainment and marketing. Giving strawberries humorous names continues this playful tradition.",
      popular: [
        "Berry White", "Strawbiana Grande", "The Crimson Chin", "Seed Ferguson", "Jam Master Jay",
        "Berryl Streep", "Sir Berrington of Jamshire", "Strawbacca", "Red Zeppelin", "Julius Seeder"
      ]
    }
  },
  {
    id: "axolotl",
    title: "Funny Axolotl Name Generator",
    description: "Generate amphibiously awesome names for these smiling water dragons that will make a splash!",
    color: "fun-purple",
    icon: "/placeholder.svg",
    article: {
      intro: "Axolotls, with their perpetual smiles and feathery external gills, are nature's most adorable aquatic oddities. These unique salamanders deserve names as quirky and endearing as they are.",
      whatIsGood: "A great funny axolotl name should capture the creature's unique appearance or aquatic nature while incorporating wordplay, puns, or unexpected cultural references. The best names balance cute and quirky.",
      howToUse: "Click 'Generate Names' to discover 10 delightful axolotl names. Keep clicking until you find one that makes you smile as much as these amphibians do! The perfect name often combines water-related terminology with surprising elements.",
      traditions: "Pet axolotls have become increasingly popular, and owners often give them names that reference their unique appearance, regenerative abilities, or Mexican heritage (they're native to Lake Xochimilco in Mexico).",
      popular: [
        "Axel Rose", "Lottie McSplashy", "Sir Gills-a-Lot", "Axolittle", "Wooper Goldberg",
        "Salamandrew", "Gilly Nelson", "Fluffy", "Axl O'Lotl", "Gilly Eilish"
      ]
    }
  },
  {
    id: "bait",
    title: "Funny Bait Name Generator",
    description: "Hook the perfect humorous name for your fishing lures and bait that's sure to catch laughs!",
    color: "fun-blue",
    icon: "/placeholder.svg",
    article: {
      intro: "Fishing may be a serious sport, but there's always room for humor when naming your bait. A clever name might not help you catch more fish, but it will certainly entertain your fellow anglers.",
      whatIsGood: "A quality funny bait name often uses fishing puns, aquatic wordplay, or unexpected cultural references. It should relate to the bait's purpose while incorporating elements that make fisherfolk chuckle.",
      howToUse: "Click 'Generate Names' to discover 10 hilarious bait names. The best names often combine fishing terminology with surprising elements or clever wordplay that will give you something to talk about during those quiet moments on the water.",
      traditions: "Commercial fishing lures often have colorful names to attract buyers, but the tradition of giving humorous names to personal bait collections has evolved naturally among recreational anglers looking to inject some fun into the sport.",
      popular: [
        "Master Baiter", "The Lure-thariu", "Worm Cruise", "The Incredible Hook", "Swim Shady",
        "Catch My Drift", "The Basstard", "School of Rock", "Sir Swims-a-Lot", "The Great Attractors"
      ]
    }
  },
  {
    id: "cafe",
    title: "Funny Cafe Name Generator",
    description: "Brew up hilariously punny names for your coffee shop that will have customers coming back for a daily dose of humor.",
    color: "fun-orange",
    icon: "/placeholder.svg",
    article: {
      intro: "A great cafe name sets the tone for the entire customer experience. While some coffee shops opt for sophistication, others choose humor to create a welcoming, laid-back atmosphere that keeps customers smiling.",
      whatIsGood: "A quality funny cafe name often incorporates coffee puns, beverage wordplay, or unexpected cultural references. It should be memorable, pronounceable, and give potential customers a hint of the lighthearted atmosphere inside.",
      howToUse: "Click 'Generate Names' to discover 10 amusing cafe names. The perfect name often combines coffee-related terminology with surprising elements or clever wordplay that will make customers curious enough to step inside.",
      traditions: "Coffee shop naming has evolved from the straightforward European cafe names to more creative approaches as coffee culture has spread globally. Humorous names became particularly popular during the third-wave coffee movement of the early 2000s.",
      popular: [
        "Common Grounds", "No Filter", "The Daily Grind", "Bean There, Done That", "Brewed Awakening",
        "Espresso Yourself", "Deja Brew", "Thanks a Latte", "Java the Hutt", "Liquid Motivation"
      ]
    }
  },
  {
    id: "bmw",
    title: "Funny BMW Name Generator",
    description: "Generate hilariously prestigious names for your ultimate driving machine that will turn heads at car meets.",
    color: "fun-blue",
    icon: "/placeholder.svg",
    article: {
      intro: "BMWs are known for their engineering excellence and driving dynamics, but that doesn't mean their owners can't have a sense of humor. A funny name for your Bavarian beauty adds personality to this premium driving experience.",
      whatIsGood: "A great funny BMW name balances reference to the car's luxury status or German heritage with unexpected humor. It might play on BMW models, features, or stereotypes while adding a twist that makes fellow enthusiasts smile.",
      howToUse: "Click 'Generate Names' to discover 10 amusing BMW nicknames. The perfect name often combines automotive terminology with surprising elements or clever wordplay that will make your car memorable at shows and meets.",
      traditions: "Car naming has a rich tradition among enthusiasts. While official BMW designations follow the structured series and model numbers (like 330i or M5), owners often give their vehicles affectionate nicknames that reflect the car's personality or their relationship with it.",
      popular: [
        "Bavarian Money Waster", "Beemer Dreamer", "The Ultimate Money Pit", "Autobahn-Ana", "Turn Signal Optional",
        "Das Expensive", "Wallet Drainer 3000", "The German Shepherd", "Pretzel Power", "Bimmer the Magnificent"
      ]
    }
  }
];

// Sample names for demonstration - in a real app, this would be a much larger array
export const sampleNames = [
  // Cabin names
  "Pine Away the Hours", "The Procrastination Station", "Bough Chicka Wow Wow", "Log Off", "Cabin in the Scream",
  "Not a Bear Hotel", "No Indoor Plumbing Palace", "WiFi-Wilderness", "Splinter's Resort", "Termite Terrace",
  
  // Warrior names
  "Sir Trips-a-Lot", "Vlad the Inhaler", "Conan the Tax Auditor", "Bruise Wayne", "Flailius Maximus",
  "Thump the Grumpy", "Sir Napsalot", "Alexander the Mediocre", "Slaytheon Greyjeans", "Bronan the Brobarian",
  
  // Batman names 
  "The Dark Bite", "The Caped Consumer", "Fatman", "The Dork Knight", "Snackman",
  "The Incredible Sulk", "Rat Guy", "The Masked Mess", "The Caped Complainer", "The Night Watcher (of Netflix)",
  
  // Strawberry names
  "Berry Manilow", "Jam-aica", "The Red Menace", "Seed Richards", "Commander in Sweet",
  "Pippa Middleseed", "Scarlet Johanberryson", "Jammy Davis Jr.", "Puddin' Pop", "Fruit Loops",
  
  // Axolotl names
  "Axel Rose", "Wade Wilson", "Gill Nye the Science Guy", "Swim Shady", "Axolittlepretty",
  "Newt Scamander", "Gilly Jean", "Finley", "Gilly Joel", "Salamandalf",
  
  // Bait names
  "The Notorious C.A.R.P", "Hook, Line and Thinker", "Catfish Stevens", "The Bass Station", "Minnow Driver",
  "Bait Expectations", "Jaws Dropper", "The Real Slim Shady", "The Notorious B.A.I.T.", "Artificial Intelligence",
  
  // Cafe names
  "Bean Me Up", "Central Perk", "Java the Hut", "Brewed Awakening", "Espresso-self",
  "Sacred Grounds", "Hot Beans and Cold Brew", "Latte Da", "The Grind", "Mug Shot",
  
  // BMW names
  "Bimmer and the Beast", "The Driver's Seat", "Bavarian Beast", "Ultimate Cash Machine", "The German Patient",
  "Pretzels and Horsepower", "Das Auto-matic", "Beemer Boomer", "Kidney Griller", "The Roundel Rascal"
];

// Function to get random names from the sample list
export const getRandomNames = (category: string, count: number = 10): string[] => {
  // In a real implementation, this would filter by category from a much larger list
  // For this demo, we'll just return random names from our sample list
  const shuffled = [...sampleNames].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
