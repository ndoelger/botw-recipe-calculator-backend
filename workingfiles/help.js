const main = [
  "Hearty Durian",
  "Palm Fruit",
  "Apple",
  "Wildberry",
  "Hydromelon",
  "Spicy Pepper",
  "Voltfruit",
  "Fleet-Lotus Seeds",
  "Mighty Bananas",
  "Big Hearty Truffle",
  "Hearty Truffle",
  "Endura Shroom",
  "Hylian Shroom",
  "Stamella Shroom",
  "Chillshroom",
  "Sunshroom",
  "Zapshroom",
  "Rushroom",
  "Razorshroom",
  "Ironshroom",
  "Silent Shroom",
  "Big Hearty Radish",
  "Hearty Radish",
  "Endura Carrot",
  "Hyrule Herb",
  "Swift Carrot",
  "Fortified Pumpkin",
  "Cool Safflina",
  "Warm Safflina",
  "Electric Safflina",
  "Swift Violet",
  "Mighty Thistle",
  "Armoranth",
  "Blue Nightshade",
  "Silent Princess",
  "Raw Gourmet Meat",
  "Raw Whole Bird",
  "Raw Prime Meat",
  "Raw Bird Thigh",
  "Raw Meat",
  "Raw Bird Drumstick",
  "Courser Bee Honey",
  "Hylian Rice",
  "Bird Egg",
  "Tabantha Wheat",
  "Fresh Milk",
  "Acorn",
  "Chickaloo Tree Nut",
  "Cane Sugar",
  "Goat Butter",
  "Goron Spice",
  "Rock Salt",
  "Monster Extract",
  "Star Fragment",
  "Dinraal's Scale",
  "Dinraal's Claw",
  "Shard of Dinraal's Fang",
  "Shard of Dinraal's Horn",
  "Naydra's Scale",
  "Naydra's Claw",
  "Shard of Naydra's Fang",
  "Shard of Naydra's Horn",
  "Farosh's Scale",
  "Farosh's Claw",
  "Shard of Farosh's Fang",
  "Shard of Farosh's Horn",
  "Hearty Salmon",
  "Hearty Blueshell Snail",
  "Hearty Bass",
  "Hyrule Bass",
  "Staminoka Bass",
  "Chillfin Trout",
  "Sizzlefin Trout",
  "Voltfin Trout",
  "Stealthfin Trout",
  "Mighty Carp",
  "Armored Carp",
  "Sanke Carp",
  "Mighty Porgy",
  "Armored Porgy",
  "Sneaky River Snail",
  "Razorclaw Crab",
  "Ironshell Crab",
  "Bright-Eyed Crab",
  "Fairy",
  "Winterwing Butterfly",
  "Summerwing Butterfly",
  "Thunderwing Butterfly",
  "Smotherwing Butterfly",
  "Cold Darner",
  "Warm Darner",
  "Electric Darner",
  "Restless Cricket",
  "Bladed Rhino Beetle",
  "Rugged Rhino Beetle",
  "Energetic Rhino Beetle",
  "Sunset Firefly",
  "Hot-Footed Frog",
  "Tireless Frog",
  "Hightail Lizard",
  "Hearty Lizard",
  "Fireproof Lizard",
  "Flint",
  "Amber",
  "Opal",
  "Luminous Stone",
  "Topaz",
  "Ruby",
  "Sapphire",
  "Diamond",
  "Bokoblin Horn",
  "Bokoblin Fang",
  "Bokoblin Guts",
  "Moblin Horn",
  "Moblin Fang",
  "Moblin Guts",
  "Lizalfos Horn",
  "Lizalfos Talon",
  "Lizalfos Tail",
  "Icy Lizalfos Tail",
  "Red Lizalfos Tail",
  "Yellow Lizalfos Tail",
  "Lynel Horn",
  "Lynel Hoof",
  "Lynel Guts",
  "Chuchu Jelly",
  "White Chuchu Jelly",
  "Red Chuchu Jelly",
  "Yellow Chuchu Jelly",
  "Keese Wing",
  "Ice Keese Wing",
  "Fire Keese Wing",
  "Electric Keese Wing",
  "Keese Eyeball",
  "Octorock Tentacle",
  "Octorok Eyeball",
  "Octo Balloon",
  "Molduga Fin",
  "Molduga Guts",
  "Hinox Toenail",
  "Hinox Tooth",
  "Hinox Guts",
  "Ancient Screw",
  "Ancient Spring",
  "Ancient Gear",
  "Ancient Shaft",
  "Ancient Core",
  "Giant Ancient Core",
  "Wood",
];

const incomplete = [
  "Hearty Durian",
  "Palm Fruit",
  "Apple",
  "Wildberry",
  "Hydromelon",
  "Spicy Pepper",
  "Voltfruit",
  "Fleet-Lotus Seeds",
  "Mighty Bananas",
  "Hearty Truffle",
  "Endura Shroom",
  "Hylian Shroom",
  "Stamella Shroom",
  "Chillshroom",
  "Sunshroom",
  "Zapshroom",
  "Rushroom",
  "Razorshroom",
  "Ironshroom",
  "Silent Shroom",
  "Big Hearty Radish",
  "Endura Carrot",
  "Hyrule Herb",
  "Swift Carrot",
  "Fortified Pumpkin",
  "Cool Safflina",
  "Warm Safflina",
  "Electric Safflina",
  "Swift Violet",
  "Mighty Thistle",
  "Armoranth",
  "Blue Nightshade",
  "Silent Princess",
  "Raw Gourmet Meat",
  "Raw Whole Bird",
  "Raw Bird Thigh",
  "Raw Meat",
  "Raw Bird Drumstick",
  "Courser Bee Honey",
  "Hylian Rice",
  "Bird Egg",
  "Fresh Milk",
  "Acorn",
  "Chickaloo Tree Nut",
  "Cane Sugar",
  "Goat Butter",
  "Goron Spice",
  "Rock Salt",
  "Monster Extract",
  "Star Fragment",
  "Hearty Salmon",
  "Hearty Blueshell Snail",
  "Hyrule Bass",
  "Staminoka Bass",
  "Chillfin Trout",
  "Sizzlefin Trout",
  "Voltfin Trout",
  "Stealthfin Trout",
  "Mighty Carp",
  "Armored Carp",
  "Sanke Carp",
  "Mighty Porgy",
  "Armored Porgy",
  "Sneaky River Snail",
  "Razorclaw Crab",
  "Ironshell Crab",
  "Winterwing Butterfly",
  "Summerwing Butterfly",
  "Thunderwing Butterfly",
  "Smotherwing Butterfly",
  "Cold Darner",
  "Warm Darner",
  "Electric Darner",
  "Restless Cricket",
  "Bladed Rhino Beetle",
  "Rugged Rhino Beetle",
  "Energetic Rhino Beetle",
  "Sunset Firefly",
  "Hot-Footed Frog",
  "Tireless Frog",
  "Hightail Lizard",
  "Hearty Lizard",
  "Fireproof Lizard",
  "Bokoblin Horn",
  "Bokoblin Guts",
  "Moblin Horn",
  "Moblin Fang",
  "Moblin Guts",
  "Lizalfos Horn",
  "Lizalfos Talon",
  "Lizalfos Tail",
  "Icy Lizalfos Tail",
  "Red Lizalfos Tail",
  "Yellow Lizalfos Tail",
  "Lynel Horn",
  "Lynel Hoof",
  "Lynel Guts",
  "Chuchu Jelly",
  "White Chuchu Jelly",
  "Red Chuchu Jelly",
  "Yellow Chuchu Jelly",
  "Keese Wing",
  "Fire Keese Wing",
  "Electric Keese Wing",
  "Keese Eyeball",
  "Octorok Eyeball",
  "Octo Balloon",
  "Molduga Fin",
  "Molduga Guts",
  "Hinox Toenail",
  "Hinox Guts",
  "Ancient Screw",
  "Ancient Spring",
  "Ancient Gear",
  "Ancient Shaft",
  "Ancient Core",
  "Giant Ancient Core",
];

const missing = main.filter((ingredient) => !incomplete.includes(ingredient));
console.log(missing);
