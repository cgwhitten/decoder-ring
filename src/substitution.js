// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const alphabetLegend = 'abcdefghijklmnopqrstuvwxyz'
  const specialCharacters = `/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;~`
  function substitution(input, alphabet, encode = true) {
    // your solution code here

    //error checks for no alphabet, incorrect alphabet length and duplicate characters
    if (alphabet === undefined) {return false}
    if (alphabet.length !=26) {return false}
    function duplicate(alphabet) {
      for (let i = 0; i < alphabet.length; i++) {
         if(alphabet.lastIndexOf(alphabet[i]) !== i){
            return false
         }
      }
    }
    if (duplicate(alphabet) === false) {return false}
    
    //dealing with capital letters
    let lowerCaseInput = input.toLowerCase()
    
    //encode
    if (encode === true) {
      let encodeArray = []
      for (let i = 0; i < lowerCaseInput.length; i++) {
        if (lowerCaseInput[i] === ' ') {
          encodeArray.push(lowerCaseInput[i])
        } else {
          let letterIndex = alphabetLegend.indexOf(lowerCaseInput[i])
          let encodeLetter = alphabet[letterIndex]
          encodeArray.push(encodeLetter)
        }
      }
      let result = encodeArray.join('')
      return result
    } else if (encode === false) {
      //decode
      let decodeArray = []
      for (let i = 0; i < lowerCaseInput.length; i++) {
        if (lowerCaseInput[i] === ' ') {
          decodeArray.push(lowerCaseInput[i])
        } else {
          let letterIndex = alphabet.indexOf(lowerCaseInput[i])
          let decodeLetter = alphabetLegend[letterIndex]
          decodeArray.push(decodeLetter)
        }
      }
      let result = decodeArray.join('')
      return result
    }
  }  
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
