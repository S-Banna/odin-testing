function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverse(string) {
  return string.split("").reverse().join("");
}

let calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  },
};

let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let alphabetCap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function caesarCipher(string, factor) {
  let returner = [];
  for (let i = 0; i < string.length; i++) {
    let now = string.charAt(i);
    if (alphabet.includes(now)) {
        if (alphabet.indexOf(now) + factor < alphabet.length) {
            returner.push(alphabet[alphabet.indexOf(now) + factor])
        } else {
            returner.push(alphabet[alphabet.indexOf(now) - alphabet.length + factor])
        }
    }
    else if (alphabetCap.includes(now)) {
        if (alphabetCap.indexOf(now) + factor < alphabetCap.length) {
            returner.push(alphabetCap[alphabetCap.indexOf(now) + factor])
        } else {
            returner.push(alphabetCap[alphabetCap.indexOf(now) - alphabetCap.length + factor])
        }
    } else {
        returner.push(now)
    }
  }
  return returner.join("")
}

function analyzeArray(array) {
    let object = {
        average: 0,
        min: 0,
        max: 0,
        length: 0
    }
    let sorted = array.sort((a,b) => a-b)
    object.length = sorted.length
    object.min = sorted[0]
    object.max = sorted[sorted.length-1]
    object.average = sorted.reduce((sum, item) => sum+item, 0)/sorted.length
    return object
}

module.exports = { capitalize, reverse, calculator, caesarCipher, analyzeArray };
