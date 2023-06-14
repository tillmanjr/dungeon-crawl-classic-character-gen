
const _characterOccupationLookup = [
    { occupation: "invalid", trainedWeapon: "invalid", tradeGoods: "invalid" },
    { occupation: "Alchemist", trainedWeapon: "Staff", tradeGoods: "Oil, 1 flask" },
    { occupation: "Animal", trainedWeapon: "trainer Club", tradeGoods: "Pony" },
    { occupation: "Armorer", trainedWeapon: "Hammer (as club)", tradeGoods: "Iron helmet" },
    { occupation: "Astrologer", trainedWeapon: "Dagger", tradeGoods: "Spyglass" },
    { occupation: "Barber", trainedWeapon: "Razor (as dagger)", tradeGoods: "Scissors" },
    { occupation: "Beadle", trainedWeapon: "Staff", tradeGoods: "" },
    { occupation: "Beekeeper", trainedWeapon: "Staff", tradeGoods: "" },
    { occupation: "Blacksmith", trainedWeapon: "Hammer (as club)", tradeGoods: "Holy symbol" },
    { occupation: "Butcher", trainedWeapon: "Cleaver (as axe)", tradeGoods: "Jar of honey" },
    { occupation: "Caravan", trainedWeapon: "guard Short sword", tradeGoods: "Steel tongs" },
    { occupation: "Cheesemaker", trainedWeapon: "Cudgel (as staff)", tradeGoods: "Side of beef Linen, 1 yard" },
    { occupation: "Cobbler", trainedWeapon: "Awl (as dagger)", tradeGoods: "Stinky cheese Shoehorn" },
    { occupation: "Confidence artist", trainedWeapon: "Dagger", tradeGoods: "Quality cloak" },
    { occupation: "Cooper", trainedWeapon: "Crowbar (as club)", tradeGoods: "Barrel" },
    { occupation: "Costermonger", trainedWeapon: "Knife (as dagger)", tradeGoods: "Fruit" },
    { occupation: "Cutpurse", trainedWeapon: "Dagger", tradeGoods: "Small chest" },
    { occupation: "Ditch", trainedWeapon: "digger Shovel (as staff)", tradeGoods: "Fine dirt, 1 1b." },
    { occupation: "Dock worker", trainedWeapon: "Pole (as staff)", tradeGoods: "1 late RPG book" },
    { occupation: "Dwarven apothecarist", trainedWeapon: "Cudgel (as staff)", tradeGoods: "Steel vial" },
    { occupation: "Dwarven blacksmith", trainedWeapon: "Hammer (as club)", tradeGoods: "Mithril, 1 oz." },
    { occupation: "Dwarven chest-maker", trainedWeapon: "Chisel (as dagger)", tradeGoods: "Wood, 10 lbs." },
    { occupation: "Dwarven herder", trainedWeapon: "Staff", tradeGoods: "Sow **" },
    { occupation: "Dwarven miner", trainedWeapon: "Pick (as club)", tradeGoods: "Lantern" },
    { occupation: "Dwarven miner", trainedWeapon: "Pick (as club)", tradeGoods: "Lantern" },
    { occupation: "Dwarven mushroom-farmer", trainedWeapon: "Shovel (as staff)", tradeGoods: "Sack" },
    { occupation: "Dwarven rat-catcher", trainedWeapon: "Club", tradeGoods: "Net" },
    { occupation: "Dwarven stonemason", trainedWeapon: "Hammer", tradeGoods: "Fine stone, 10 lbs" },
    { occupation: "Dwarven stonemason", trainedWeapon: "Hammer", tradeGoods: "Fine stone, 10 lbs" },
    { occupation: "Elven artisan", trainedWeapon: "Staff", tradeGoods: "Clay, 1 lb" },
    { occupation: "Elven barrister", trainedWeapon: "Quill (as dart)", tradeGoods: "Book" },
    { occupation: "Elven chandler", trainedWeapon: "Scissors (as dagger)", tradeGoods: "Candles, 20" },  // 31
    { occupation: "Elven falconer", trainedWeapon: "Dagger", tradeGoods: "Falcon" },
    { occupation: "Elven forester", trainedWeapon: "Staff", tradeGoods: "Herbs, 1 1b." },
    { occupation: "Elven forester", trainedWeapon: "Staff", tradeGoods: "Herbs, 1 1b." },
    { occupation: "Elven glassblower", trainedWeapon: "Hammer (as club)", tradeGoods: "Glass beads" },
    { occupation: "Elven navigator", trainedWeapon: "Shortbow", tradeGoods: "Spyglass" },
    { occupation: "Elven sage", trainedWeapon: "Dagger", tradeGoods: "Parchment and quill pen" },
    { occupation: "Elven sage", trainedWeapon: "Dagger", tradeGoods: "Parchment and quill pen" },
    { occupation: "Farmer*", trainedWeapon: "Pitchfork (as spear)", tradeGoods: "Hen **" },
    { occupation: "Farmer*", trainedWeapon: "Pitchfork (as spear)", tradeGoods: "Hen **" },
    { occupation: "Farmer*", trainedWeapon: "Pitchfork (as spear)", tradeGoods: "Hen **" },
    { occupation: "Farmer*", trainedWeapon: "Pitchfork (as spear)", tradeGoods: "Hen **" },
    { occupation: "Farmer*", trainedWeapon: "Pitchfork (as spear)", tradeGoods: "Hen **" },
    { occupation: "Farmer*", trainedWeapon: "Pitchfork (as spear)", tradeGoods: "Hen **" },
    { occupation: "Farmer*", trainedWeapon: "Pitchfork (as spear)", tradeGoods: "Hen **" },
    { occupation: "Farmer*", trainedWeapon: "Pitchfork (as spear)", tradeGoods: "Hen **" },
    { occupation: "Farmer*", trainedWeapon: "Pitchfork (as spear)", tradeGoods: "Hen **" },
    { occupation: "Fortune-teller", trainedWeapon: "Dagger", tradeGoods: "Tarot deck" },
    { occupation: "Gambler", trainedWeapon: "Club", tradeGoods: "Dice" },
    { occupation: "Gongfarmer", trainedWeapon: "Trowel (as dagger)", tradeGoods: "Sack of ,night soil" },
    { occupation: "Grave digger", trainedWeapon: "Shovel (as staff)", tradeGoods: "Trowel" },
    { occupation: "Grave digger", trainedWeapon: "Shovel (as staff)", tradeGoods: "Trowel" },
    { occupation: "Guild beggar", trainedWeapon: "Sling", tradeGoods: "Crutches" },
    { occupation: "Guild beggar", trainedWeapon: "Sling", tradeGoods: "Crutches" },
    { occupation: "Halfling chicken butcher", trainedWeapon: "Hand axe", tradeGoods: "Chicken meat, 5 lbs." },
    { occupation: "Halfling dyer", trainedWeapon: "Staff", tradeGoods: "Fabric, 3 yards" },
    { occupation: "Halfling dyer", trainedWeapon: "Staff", tradeGoods: "Fabric, 3 yards" },
    { occupation: "Halfling glovemaker", trainedWeapon: "Awl (as dagger)", tradeGoods: "Gloves, 4 pairs" },
    { occupation: "Halfling gypsy", trainedWeapon: "Sling", tradeGoods: "Hex doll" },
    { occupation: "Halfling haberdasher", trainedWeapon: "Scissors (as dagger)", tradeGoods: "Fine suits, 3 sets" },
    { occupation: "Halfling mariner", trainedWeapon: "Knife (as dagger)", tradeGoods: "Sailcloth, 2 yards" },
    { occupation: "Halfling moneylender", trainedWeapon: "Short sword", tradeGoods: "5 gp, 10 sp, 200 cp" },
    { occupation: "Halfling trader", trainedWeapon: "Short sword", tradeGoods: "20 sp" },
    { occupation: "Halfling vagrant", trainedWeapon: "Club", tradeGoods: "Begging bowl" },
    { occupation: "Healer", trainedWeapon: "Club", tradeGoods: "Holy water, 1 vial" },
    { occupation: "Herbalist", trainedWeapon: "Club", tradeGoods: "Herbs, 1 1b." },
    { occupation: "Herder", trainedWeapon: "Staff", tradeGoods: "Herding dog **" },
    { occupation: "Hunter", trainedWeapon: "Shortbow", tradeGoods: "Deer pelt" },
    { occupation: "Hunter", trainedWeapon: "Shortbow", tradeGoods: "Deer pelt" },
    { occupation: "Indentured servant", trainedWeapon: "Staff", tradeGoods: "Locket" },
    { occupation: "Jester", trainedWeapon: "Dart", tradeGoods: "Silk clothes" },
    { occupation: "Jeweler", trainedWeapon: "Dagger", tradeGoods: "Gem worth 20 gp" },  // 72
    { occupation: "Locksmith", trainedWeapon: "Dagger", tradeGoods: "Fine tools" },
    { occupation: "Mendicant", trainedWeapon: "Club", tradeGoods: "Cheese dip" },
    { occupation: "Mercenary", trainedWeapon: "Longsword", tradeGoods: "Hide armor 76 Merchant Dagger 4 gp, 14 sp, 27 cp" },
    { occupation: "Miller/ baker", trainedWeapon: "Club", tradeGoods: "Flour, 1 1b." },
    { occupation: "Minstrel", trainedWeapon: "Dagger", tradeGoods: "Ukulele" },
    { occupation: "Noble", trainedWeapon: "Longsword", tradeGoods: "Gold ring worth 10 gp" },
    { occupation: "Orphan", trainedWeapon: "Club", tradeGoods: "Rag doll" },
    { occupation: "Ostler", trainedWeapon: "Staff", tradeGoods: "Bridle" },
    { occupation: "Outlaw", trainedWeapon: "Short sword", tradeGoods: "Leather armor" },
    { occupation: "Rope maker", trainedWeapon: "Knife (as dagger)", tradeGoods: "Rope, 100'" },
    { occupation: "Scribe", trainedWeapon: "Dart", tradeGoods: "Parchment, 10 sheets" },
    { occupation: "Shaman", trainedWeapon: "Mace", tradeGoods: "Herbs, 1 1b." },
    { occupation: "Slave", trainedWeapon: "Club", tradeGoods: "Strange-looking rock" },
    { occupation: "Smuggler", trainedWeapon: "Sling", tradeGoods: "Waterproof sack" },
    { occupation: "Soldier", trainedWeapon: "Spear", tradeGoods: "Shield" },
    { occupation: "Squire", trainedWeapon: "Longsword", tradeGoods: "Steel helmet" },
    { occupation: "Squire", trainedWeapon: "Longsword", tradeGoods: "Steel helmet" },
    { occupation: "Tax collector", trainedWeapon: "Longsword", tradeGoods: "100 cp" },
    { occupation: "Trapper", trainedWeapon: "Sling", tradeGoods: "Badger pelt" },
    { occupation: "Trapper", trainedWeapon: "Sling", tradeGoods: "Badger pelt" },
    { occupation: "Urchin", trainedWeapon: "Stick (as club)", tradeGoods: "Begging bowl" },
    { occupation: "Wainwright", trainedWeapon: "", tradeGoods: "Club Pushcart ***" },
    { occupation: "Weaver", trainedWeapon: "Dagger", tradeGoods: "Fine suit of clothes" },
    { occupation: "Wizard's apprentice", trainedWeapon: "Dagger", tradeGoods: "Black grimoire" },
    { occupation: "Woodcutter", trainedWeapon: "Handaxe", tradeGoods: "Bundle of wood" },
    { occupation: "Woodcutter", trainedWeapon: "Handaxe", tradeGoods: "Bundle of wood" },
    { occupation: "Woodcutter", trainedWeapon: "Handaxe", tradeGoods: "Bundle of wood" }
]

// look up modifier for attribute value
const _attributeModifiersLookup = [
    NaN, //0
    NaN, //1
    NaN, //2
    -3, // 3
    -2, // 4
    -3, // 5
    -1, // 6
    -1, // 7
    -1, // 8
    0, // 9
    0, // 10
    0, // 11
    0, // 12
    +1, // 13
    +1, // 14
    +1, // 15
    +2, // 16
    +2, // 17
    +3 // 18
]

// indexed to 30 sided die
const _luckScoreLookup = [
    "Invalid",
    "Harsh Winter: All attack rolls",
    "The bull: Melee attack rolls",
    "Fortunate date: Missile fire attack rolls",
    "Raised by wolves: Unarmed attack rolls",
    "Conceived on horseback: Mounted attack rolls",
    "Born on the battlefield: Damage rolls",
    "Path of the bear: Melee damage rolls",
    "Hawkeye: Missile fire damage rolls",
    "Pack hunter: Attack and damage rolls for 0-level",
    "Born under the loom: Skill checks (including thief skills)",
    "Fox's cunning: Find/ disable traps",
    "Four-leafed clover: Find secret doors",
    "Seventh son: Spell checks",
    "The raging storm: Spell damage",
    "Righteous heart: Turn unholy checks",
    "Survived the plague: Magical healing",
    "Lucky sign: Saving throws",
    "Guardian angel: Savings throws to escape traps",
    "Survived a spider bite: Saving throws against poison",
    "Struck by lightning: Reflex saving throws 21 Lived through famine: Fortitude saving throws",
    "Resisted temptation: Willpower saving throws",
    "Charmed house: Armor Class",
    "Speed of the cobra: Initiative",
    "Bountiful harvest: Hit points (applies at each level)",
    "Warrior's arm: Critical hit tables **",
    "Unholy house: Corruption rolls",
    "The Broken Star: Fumbles **",
    "Birdsong: Number of languages",
    "Wild child: Speed (each +1/-1 = +5'/-5' speed)"
]

const _raceSpeedLookup = {
    Dwarf: 20,
    Elf: 30,
    Halfling: 20,
    Human: 30
}

const lookups = {
    AttributeModifiers: _attributeModifiersLookup,
    LuckScores: _luckScoreLookup, 
    Occupations: _characterOccupationLookup,
    RaceSpeeds: _raceSpeedLookup
}