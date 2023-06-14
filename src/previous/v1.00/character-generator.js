
const { DiceBag } = dice_bag


// look up modifier for attribute value
const modifierLookup = [
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

const characterOccupationLookup = [
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

const generateCharacterAttribute = () => {
    const value = DiceBag.roll('3D6').Total
    const modifier = modifierLookup[value]
    return {
        Value: value,
        Modifier: modifier
    }
}


function generateCharacterAttributes() {
    return {
        strength: generateCharacterAttribute(),
        agility: generateCharacterAttribute(),
        stanima: generateCharacterAttribute(),
        personality: generateCharacterAttribute(),
        intelligence: generateCharacterAttribute(),
        luck: generateCharacterAttribute()
    }
}

class CharacterAttributes {
    strength
    agility
    stanima
    personality
    intelligence
    luck
    constructor(data = null) {
        const attributes = data === null
            ? generateCharacterAttributes()
            : data

        this.strength = attributes.strength
        this.agility = attributes.agility
        this.stanima = attributes.stanima
        this.personality = attributes.personality
        this.intelligence = attributes.intelligence
        this.luck = attributes.luck
    }
    get Strength() {
        return this.strength
    }
    get Agility() {
        return this.agility
    }
    get Stanima() {
        return this.stanima
    }
    get Personality() {
        return this.personality
    }
    get Intelligence() {
        return this.intelligence
    }
    get Luck() {
        return this.luck
    }
}

const generateCharacterAC = (characterAttributes) => (10 + characterAttributes.Agility.Modifier)
const generateCharacterHP = () => DiceBag.roll('1D4').Total  // rollEm('1D4').Total
const generateCharacterInit = (characterAttributes) => characterAttributes.Agility.Modifier

const generateCharacterSaves = (characterAttributes) => {
    return {
        Reflex: characterAttributes.Agility.Modifier,
        Fortitude: characterAttributes.Stanima.Modifier,
        Will: characterAttributes.Personality.Modifier
    }
}

const generateCharacterOccupationData = () => {
    // fake it for now
    const roll = DiceBag.roll('1D100').Total // allDice.D100.roll()
    const {
        occupation,
        trainedWeapon,
        tradeGoods
    } = characterOccupationLookup[roll]

    return {
        occupation: occupation,
        trainedWeapon: trainedWeapon,
        tradeGoods: tradeGoods
    }
}

// generateCharacterRace depends on following array and object
const occupationPrefixes = [
    'dwarven',
    'elven',
    'halfling'
]
const occupationPrefixToRace = {
    dwarven: "Dwarf",
    elven: 'Elf',
    halfling: 'Halfling',
    human: 'Human'
}
const generateCharacterRace = (occupation) => {
    const occupationLower = occupation.toLowerCase();
    const race = occupationPrefixes.reduce(
        (prev, current) => {
            const isMatch = occupationLower.startsWith(current)
            return isMatch ?
                current :
                prev
        },
        'human' // no match defaults to Human
    )

    return occupationPrefixToRace[race]
}

const raceSpeedLookup = {
    Dwarf: 20,
    Elf: 30,
    Halfling: 20,
    Human: 30
}
const lookupCharacterSpeed = (race) => raceSpeedLookup[race]

// indexed to 30 sided die
const luckScoreLookup = [
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

const lookupLuckScore = (luck) => luckScoreLookup[luck]
function luckScoreToSignModifier(luckScore) {
    const arr = luckScore.split(':')
    return {
        luckySign: arr[0],
        luckyRollModifier: arr[1].trim()
    }
}

function generateRandomCharacterData() {
    const name = 'unnamed'
    const attributes = new CharacterAttributes()
    const ac = generateCharacterAC(attributes)
    const saves = generateCharacterSaves(attributes)
    const init = generateCharacterInit(attributes)
    const luckScore = lookupLuckScore(attributes.Luck.Value)
    const {
        luckySign,
        luckyRollModifier
    } = luckScoreToSignModifier(luckScore)

    const hp = generateCharacterHP()

    const occupationData = generateCharacterOccupationData()
    const occupation = occupationData.occupation
    const trainedWeapon = occupationData.trainedWeapon
    const tradeGoods = occupationData.tradeGoods
    const race = generateCharacterRace(occupation)
    const speed = lookupCharacterSpeed(race)

    let result = {
        name,
        attributes: Object.assign(attributes),
        ac,
        hp,
        saves: Object.assign(saves),
        init,
        occupation,
        trainedWeapon,
        tradeGoods,
        race,
        speed,
        luckScore,
        luckySign,
        luckyRollModifier,
        generatedAt: Date.UTC(),
        createdAt: Date.UTC()
    }
    return result
}

function characterDataFromJsonString(fromJsonString) {
    let characterData = JSON.parse(fromJsonString)
    const charAttributes = new CharacterAttributes(characterData.attributes)
    characterData.attributes = charAttributes
    characterData.createdAt = Date.UTC()
    return characterData
}

class Character {
    #characterData
    #name
    #attributes
    #ac
    #hp
    #saves
    #init
    #occupation
    #race
    #speed
    #luckScore
    #luckySign
    #luckyRollModifier
    #trainedWeapon
    #tradeGoods
    #generatedAt
    #createdAt

    /**
     * Creates an instance of Character.
     * @param {string} [characterData=null] either null or JSON string
     * @memberof Character
     */
    constructor(fromJsonString = null) {
        const characterData = fromJsonString === null
            ? generateRandomCharacterData()
            : characterDataFromJsonString(fromJsonString)

        this.#characterData = characterData

        this.#name = characterData.name

        this.#attributes = characterData.attributes
        this.#ac = characterData.ac
        this.#hp = characterData.hp
        this.#saves = characterData.saves
        this.#init = characterData.init

        // const occupationData = characterData.occupationData
        this.#occupation = characterData.occupation
        this.#trainedWeapon = characterData.trainedWeapon
        this.#tradeGoods = characterData.tradeGoods

        this.#race = characterData.race
        this.#speed = characterData.speed
        this.#luckScore = characterData.luckScore
        this.#luckySign = characterData.luckySign
        this.#luckyRollModifier = characterData.luckyRollModifier

        this.#generatedAt = characterData.generatedAt
        this.#createdAt = characterData.createdAt
    }
    // accessors
    get Attributes() {
        return this.#attributes
    }
    get AC() {
        return this.#ac
    }
    get HP() {
        return this.#hp
    }
    get Init() {
        return this.#init
    }
    get LuckScore() {
        return this.#luckScore
    }
    get LuckySign() {
        return this.#luckySign
    }
    get LuckyRollModifier() {
        return this.#luckyRollModifier
    }
    get Name() {
        return this.#name
    }
    get Occupation() {
        return this.#occupation
    }
    get Race() {
        return this.#race
    }
    get Saves() {
        return this.#saves
    }
    get Speed() {
        return this.#speed
    }
    get TrainedWeapon() {
        return this.#trainedWeapon
    }
    get TradeGoods() {
        return this.#tradeGoods
    }

    get CharacterData() {
        return this.#characterData
    }

    get GeneratedAt() {
        return this.#generatedAt
    }

    get CreatedAt() {
        return this.#createdAt
    }


    // mutators
    set Name(value) {
        this.#name = value
        this.#characterData.name = value
    }

    asJsonStr() {
        return JSON.stringify(this.CharacterData)
    }

}

function _GenerateCharacter() {
    return new Character()
}

function _LoadCharacter(fromJsonString) {
    return new Character(fromJsonString)
}

const character_generator = {
    GenerateCharacter: _GenerateCharacter,
    LoadCharacter: _LoadCharacter
}