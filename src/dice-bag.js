/*
    Everything should be considered private to the file except:
        DiceBag.roll(countDFaces)

*/

/**
 *
 *
 * @class Polyhedral
 */
class Polyhedral {
    #faceCount = 1;
    constructor(faceCount) {
        this.#faceCount = faceCount
    }

    roll() {
        return Math.floor(Math.random() * this.#faceCount) + 1;
    }
}


/** @type {*} */
const allDice = {
    D3: new Polyhedral(3),
    D4: new Polyhedral(4),
    D5: new Polyhedral(5),
    D6: new Polyhedral(6),
    D8: new Polyhedral(8),
    D10: new Polyhedral(10),
    D12: new Polyhedral(12),
    D14: new Polyhedral(14),
    D15: new Polyhedral(15),
    D16: new Polyhedral(16),
    D18: new Polyhedral(18),
    D20: new Polyhedral(20),
    D22: new Polyhedral(22),
    D24: new Polyhedral(24),
    D28: new Polyhedral(28),
    D30: new Polyhedral(30),
    D100: new Polyhedral(100)
}


/**
 *
 *
 * @param {*} DFaces
 * @return {*} 
 */
function isValidDie(DFaces) {
    return allDice.hasOwnProperty(DFaces)
}


/**
 *
 *
 * @param {*} countDFaces
 * @return {*} 
 */
function rollEm(countDFaces) {
    const countNotIncluded = countDFaces.toUpperCase().startsWith('D')
    const parts = countDFaces.toUpperCase().split('D')
    const rollCount = countNotIncluded ? 1 : parseInt(parts[0])
    const faces = parseInt(parts[1])
    const classStr = `D${faces}`
    if (!isValidDie(classStr)) {
        throw new Error(`Could not convert ${countDFaces} to a known die`)
    }
    const die = allDice[classStr]
    const rolls = []
    let total = 0
    for (let index = 0; index < rollCount; index++) {
        const rollResult = die.roll()
        rolls.push(rollResult)
        total += rollResult
    }
    return {
        Success: true,
        Command: countDFaces,
        DieUsed: classStr,
        Thrown: rollCount,
        Total: total,
        Details: rolls
    }
}


/**
 *
 *
 * @class DiceBag
 */
class DiceBag {
    static roll(countDFaces) {
        return rollEm(countDFaces)
    }
}
