/*
Define a function hasVowel that takes in a string parameter. The function should
return a boolean, true if the string contains at least one vowel, false
otherwise.

Vowels are the letters "a", "e", "i", "o", "u".
*/

function hasVowel(str) {
    str = str.toLowerCase();
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let has = false;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            has = true;
        }
    }
    return has;
}

// console.log(hasVowel('dog'));          // => true
// console.log(hasVowel('conventional')); // => true
// console.log(hasVowel('rhythm'));       // => false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = hasVowel;
