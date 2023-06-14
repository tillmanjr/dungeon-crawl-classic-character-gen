
const { DiceBag } = dice_bag
const { 
    AttributeModifiers: AttributeModifierLookup ,
    LuckScores: LuckScoreLookup,
    Occupations: OccupationLookup,
    RaceSpeeds: RaceSpeedLookup
} = lookups


const generateCharacterAttribute = () => {
    const value = DiceBag.roll('3D6').Total
    const modifier = AttributeModifierLookup[value]
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
const generateCharacterHP = (characterAttributes) => DiceBag.roll('1D4').Total + characterAttributes.Stanima.Modifier // rollEm('1D4').Total
const generateCharacterInit = (characterAttributes) => characterAttributes.Agility.Modifier

const generateCharacterSaves = (characterAttributes) => {
    return {
        Reflex: characterAttributes.Agility.Modifier,
        Fortitude: characterAttributes.Stanima.Modifier,
        Will: characterAttributes.Personality.Modifier
    }
}

const generateCharacterOccupationData = () => {
    const roll = DiceBag.roll('1D100').Total // allDice.D100.roll()
    const {
        occupation,
        trainedWeapon,
        tradeGoods
    } = OccupationLookup[roll]

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


const lookupCharacterSpeed = (race) => RaceSpeedLookup[race]

const lookupLuckScore = (luck) => LuckScoreLookup[luck]
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

    const hp = generateCharacterHP(attributes)

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