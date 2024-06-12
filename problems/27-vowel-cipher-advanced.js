/*
Write a function vowelCipher that takes in a string and returns a new string
where every vowel becomes the next vowel in the alphabet.

Vowels are the letters "a", "e", "i", "o", "u".
*/

function vowelCipher(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let cipherStr = '';
    let cipherLogic = 0;
    for (let i = 0; i < str.length; i++) {
        if (!vowels.includes(str[i])) {
            cipherStr += str[i];
        }
        else if (vowels.includes(str[i])) {
            cipherLogic = vowels.indexOf(str[i]) + 1;
            if (cipherLogic === vowels.length) {
                cipherLogic = 0;
            }
            cipherStr += vowels[cipherLogic];
        }
    }
    return cipherStr;
}

// console.log(vowelCipher("bootcamp")); // "buutcemp"
// console.log(vowelCipher("paper cup")); // "pepir cap"

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = vowelCipher;
