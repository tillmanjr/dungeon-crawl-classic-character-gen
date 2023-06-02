
/**
 * This code is an abomination unto YHWH
 *
 * @param {*} character
 * @return {*} 
 */
function formatCharacterAsHtml(character) {
    const resultArray = []
    resultArray.push('<div class="characterContainer">')
      resultArray.push('<div class="characterHeader">')
    resultArray.push(`<span class="nameLabel">Name:</span> <span class="nameValue">${character.Name}</span><span class="raceLabel">Race:</span><span class="raceValue">${character.Race}</span>`)
      resultArray.push('</div>') // end characterHeader

      resultArray.push('<div class="characterGeneralInfo">')
        resultArray.push('<div class="achpImageDiv">')
    resultArray.push(`<div class="shieldDiv"><div class="shield"><div class="acDiv">${character.AC}</div></div></div>`)
    resultArray.push(`<div class="heart" style="width:70px"><div class="hpDiv">${character.HP}</div></div>`)
    resultArray.push('<div class="shieldHeartLabelsDiv"><div class="left50">AC</div><div class="right50">HP</div></div>')
    resultArray.push('</div>') // end achpImageDiv

    resultArray.push('<div class="occupationAlignmentDiv">')
      resultArray.push('<div class="occupationDiv">')
    resultArray.push(`<span class="occupationLabel">Occupation:</span><span class="occupationValue">${character.Occupation}</span>`)
    resultArray.push('</div>') // end occupationDiv

    resultArray.push('<div class="alignmentDiv">')
      resultArray.push('<span class="alignmentLabel">Alignment:</span>')
      resultArray.push('<span class="lawBox">...</span>')
      resultArray.push('<span class="neutralBox">...</span>')
      resultArray.push('<span class="chaosBox">...</span>')
      resultArray.push('<br />')
      resultArray.push('<span class="lawLabel">Law</span>')
      resultArray.push('<span class="neutralLabel">Neutral</span>')
      resultArray.push('<span class="chaosLabel">Chaos</span>')
      resultArray.push('</div>') // end alignmentDiv

      resultArray.push('</div>') // end occupationAlignmentDiv


      resultArray.push('</div>') // end characterGeneralInfo
    // Now this is seriously ugly
    resultArray.push('<div class="characterDetailsDiv">')

    resultArray.push('<div class="detailsLeftDiv">')
    resultArray.push('<div class="attrDiv">')
    resultArray.push('<table class="attrtable"><tbody>')
    resultArray.push(`<thead><th></th><th></th><th>mod</th></thead>`)
    resultArray.push(
      `<tr><td>Strength</td><td class="brdr">${character.Attributes.Strength.Value}</td><td class="brdr">${character.Attributes.Strength.Modifier}</td></tr>`
      )
    resultArray.push(
      `<tr><td>Agility</td><td class="brdr">${character.Attributes.Agility.Value}</td><td class="brdr">${character.Attributes.Agility.Modifier}</td></tr>`
      )
    resultArray.push(
      `<tr><td>Stanima</td><td class="brdr">${character.Attributes.Stanima.Value}</td><td class="brdr">${character.Attributes.Stanima.Modifier}</td></tr>`
      )
    resultArray.push(
      `<tr><td>Personality</td><td class="brdr">${character.Attributes.Personality.Value}</td><td class="brdr">${character.Attributes.Personality.Modifier}</td></tr>`
      )
    resultArray.push(
      `<tr><td>Intelligence</td><td class="brdr">${character.Attributes.Strength.Value}</td><td class="brdr">${character.Attributes.Intelligence.Modifier}</td></tr>`
      )
    resultArray.push(
      `<tr><td>Luck</td><td class="brdr">${character.Attributes.Luck.Value}</td><td class="brdr">${character.Attributes.Luck.Modifier}</td></tr>`
      )
    resultArray.push('</tbody></table></div>')
    resultArray.push('</div>')  // end detailsLeftDiv

    resultArray.push('<div class="detailsMidDiv">')
    resultArray.push('<div class="savesDiv">')
    resultArray.push('<div><b>Saves</b></div>')
    resultArray.push('<div class="savesInnerDiv">')
    resultArray.push('<table class="savestable"><tbody>')
    resultArray.push(`<tr><td colspan="2"></td></tr>`)
    resultArray.push(`<tr><td>Reflex</td><td class="brdr">${character.Saves.Reflex}</td></tr>`)
    resultArray.push(`<tr><td>Fortitude</td><td class="brdr">${character.Saves.Fortitude}</td></tr>`)
    resultArray.push(`<tr><td>Will</td><td class="brdr">${character.Saves.Will}</td></tr>`)
    resultArray.push('</tbody></table></div></div>')

    resultArray.push('<div class="weaponsDiv">')
    resultArray.push('<div><b>Weapons</b></div>')
    resultArray.push('<table class="weaponsTable"><tbody>')
    resultArray.push(`<tr><td>${character.TrainedWeapon}</td></tr><tr><td>&nbsp;</td></tr><tr><td>&nbsp;</td></tr>`)
    resultArray.push('</tbody></table>')
      resultArray.push('</div>')  // end weaponsDiv
    resultArray.push('</div>')  // end detailsMidDiv

    resultArray.push('<div class="detailsRightDiv">')
      resultArray.push('<div class="speedinitDiv">')
      resultArray.push(`<span class="speedLabel">Speed</span><span class="speedValue">${character.Speed}</span><span class="initLabel">Init</span><span class="initValue">${character.Init}</span>`)

      resultArray.push('</div>') // end speedinitDiv

      resultArray.push('<div class="equipmentDiv">')
        resultArray.push('<div><b>Equipment</b></div>')
        resultArray.push('<div class="equipmentInnerDiv">')
          resultArray.push(`<span class="equipmentValue">${character.TradeGoods}</span>`)
          resultArray.push('</div>') // end equipmentInnerDiv
        resultArray.push('</div>') // end equipmentDiv

      resultArray.push('</div>')  // end detailsRightDiv

    resultArray.push('</div>')  // characterDetailsDiv

    resultArray.push('<div class="characterFooter">')


    resultArray.push('<div class="characterFooterNotes">')
    resultArray.push(`<b>Lucky Sign:</b> ${character.LuckySign}<br />`)
    resultArray.push(`<b>Lucky Roll Modifier:</b> ${character.LuckyRollModifier}<br />`)
    resultArray.push('</div>') // end characterFooterNotes

    resultArray.push('<div class="characterFooterExp">')
      resultArray.push('<div><b>Exp</b></div>')
      resultArray.push('</div>')  // closing characterFooterExp
    resultArray.push('</div>')
    resultArray.push('</div>')  // closing character container

    return resultArray.join(' ')
  }