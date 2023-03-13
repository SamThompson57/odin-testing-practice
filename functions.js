export function capitalise(string){
    const letters = string.split('')
    letters[0] = letters[0].toUpperCase()
    return letters.join('')
}

export function reverseString(string){
    return string.split('').reverse().join('')
}

export const calculator = {
    add: function(a, b) {return a + b},
    subtract: function(a, b) {return a - b},
    divide: function(a, b) {return a / b},
    multiply: function(a, b) {return a * b}
}

export function caesarCipher(string, shift){
    const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
    const adjShift = shift % 26
    let ans = []
    const letters = string.split('')
    letters.forEach(char => {
        if(char === char.toUpperCase()){ //elements True here will either be Uppercase or symbols.
            if(alphabet.includes(char)){
               ans.push(alphabet[(alphabet.indexOf(char) + adjShift) % 26 < 0 ? (alphabet.indexOf(char)) + adjShift % 26 + 26 : (alphabet.indexOf(char) + adjShift) % 26])
            } else ans.push(char)
        } else { 
            ans.push(alphabet[(alphabet.indexOf(char.toUpperCase()) + adjShift) % 26 < 0 ? (alphabet.indexOf(char.toUpperCase()) + adjShift) % 26 + 26 : (alphabet.indexOf(char.toUpperCase()) + adjShift) % 26].toLowerCase())
            //These letters will be the lowecase letters so will need to put them to uppercase and find them in the alphabed array
        }
    });
    return ans.join('')
}

export function analyzeArray(array) {
    array.sort(function(a, b){return a - b})
    
    let comulative = 0
    array.forEach(num => {
        comulative += num
    })
    
    return {
        average: comulative / array.length,
        min: array[0],
        max: array[array.length-1],
        length: array.length
    }
}
