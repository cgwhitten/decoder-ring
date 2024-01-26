// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const grid = {a:11, b:21, c:31, d:41, e:51, f:12, g:22, h:32, i:42, j: 42, k:52, l:13, m:23, n:33, o:43, p:53, q:14, r:24, s:34, t:44, u:54, v:15, w:25, x:35, y:45, z:55}
  const decodeGrid = {11:'a', 21: 'b', 31:'c', 41:'d', 51:'e', 12:'f', 22:'g', 32:'h', 42:'(i/j)', 52:'k', 13:'l', 23:'m', 33:'n', 43:'o', 53:'p', 14:'q', 24:'r', 34:'s', 44:'t', 54:'u', 15:'v', 25:'w', 35:'x', 45:'y', 55:'z'}
  function polybius(input, encode = true) {
    let encodeArray = []
    let decodeArray = []
    // ignore uppercase
    let lowerCaseInput = input.toLowerCase()
    // encode
    if (encode === true) { 
      for (let i = 0; i < lowerCaseInput.length; i++) {
        if (lowerCaseInput[i] in grid) {
          let encodeNumber = grid[lowerCaseInput[i]]
          encodeArray.push(encodeNumber)
        } else {
          // for spaces and punctuation
          encodeArray.push(lowerCaseInput[i])
        }
        
      }
      let result = encodeArray.join('')
      return result
      //decode 
    } else if (encode === false) {
      //check if (without spaces) the length of the input is even
      let stringArray = lowerCaseInput.split('')
      let evenOrOdd = stringArray.filter((char) => char != ' ')
      function isEven(evenOrOdd) {
        return evenOrOdd.length % 2 == 0
      }
      if (isEven(evenOrOdd) === false) {
        return false
      }
      //loop by two, check if index i a number (spaces)
      for (let i = 0; i < stringArray.length; i += 2) {
        if (stringArray[i] === ' ') {
          decodeArray.push(stringArray[i])
          i++
        }
        let decodeNumber = stringArray[i] + stringArray[i+1]
        let decodeLetter = decodeGrid[decodeNumber]
        decodeArray.push(decodeLetter)
      }
      let result = decodeArray.join('')
      return result
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
