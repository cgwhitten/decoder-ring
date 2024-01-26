// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabetLegend = 'abcdefghijklmnopqrstuvwxyz'
  function caesar(input, shift, encode = true) {
    // your solution code here    
    if (shift === 0 || shift < -25 || shift > 25) {
      return false
    }  
    let resultArray = []
    let lowerCaseInput = input.toLowerCase()
    for (let i = 0; i < lowerCaseInput.length; i++) {
      if (alphabetLegend.includes(lowerCaseInput[i]) === false) {
        resultArray.push(lowerCaseInput[i])
      } else {
        let letterValue = alphabetLegend.indexOf(lowerCaseInput[i])
          if (encode === true) {
            let newValue = letterValue + shift
            if (newValue < 0) { 
              let newLetter = alphabetLegend[newValue + 26]
              resultArray.push(newLetter)
            } else if (newValue > 25) { 
              let newLetter = alphabetLegend[newValue - 26]
              resultArray.push(newLetter)
            } else {
              let newLetter = alphabetLegend[newValue]
              resultArray.push(newLetter)
            }
          } else {
            let newValue = letterValue - shift
            if (newValue < 0) { 
              let newLetter = alphabetLegend[newValue + 26]
              resultArray.push(newLetter)
            } else if (newValue > 25) { 
              let newLetter = alphabetLegend[newValue - 26]
              resultArray.push(newLetter)
            } else {
              let newLetter = alphabetLegend[newValue]
              resultArray.push(newLetter)
            }
          }
        }
      }
    let result = resultArray.join('')
    return result
    }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
