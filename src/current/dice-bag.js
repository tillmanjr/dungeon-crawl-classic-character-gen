/*
    Everything should be considered private to the file except:
        DiceBag.roll(countDFaces)

*/


/**
 * Tests if integer - in spite of the coercion this not only reliable but also fast
 *
 * @param {*} value
 * @return {*} 
 */
function _isInt(value) {
    if (isNaN(value)) {
      return false;
    }
    var x = parseFloat(value);
    return (x | 0) === x;
  }

/**
 * A single polyhedral die
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

    get faceCount() {
        return this.#faceCount
    }
}


/** @type {*} */
const _allDice = {
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
function _isValidDie(DFaces) {
    return _allDice.hasOwnProperty(DFaces)
}


/**
 *
 *
 * @param {*} countDFaces
 * @return {*} 
 */
function _rollEm(countDFaces) {
    const countNotIncluded = countDFaces.toUpperCase().startsWith('D')
    const parts = countDFaces.toUpperCase().split('D')
    const rollCount = countNotIncluded ? 1 : parseInt(parts[0])
    const faces = parseInt(parts[1])
    const classStr = `D${faces}`
    if (!_isValidDie(classStr)) {
        throw new Error(`Could not convert ${countDFaces} to a known die`)
    }
    const die = _allDice[classStr]
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
const _DiceBag = {
    roll: (countDFaces) => _rollEm(countDFaces)
}

const dice_bag = {
    DiceBag: _DiceBag,
    isValidDie: _isValidDie,
    isInt: _isInt,
    allDice: _allDice
}
