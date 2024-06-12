/*
Write a function reverb that accepts a word as an argument. The function should
return a new word where all letters that come after the last vowel (including
the vowel itself) are repeated at the end of the word. If the value passed in is
not a string, say someone passes in a number as an argument, then return null.

Vowels are the letters "a", "e", "i", "o", "u".
*/

function reverb(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let parse = str.length;
    if (typeof str !== "string") {
        return null;
    }

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            parse = i;
        }
    }
    return str + str.slice(parse, str.length);
}


// console.log(reverb('running')); // runninging
// console.log(reverb('FAMILY'));  // FAMILYILY
// console.log(reverb('trash'));   // trashash
// console.log(reverb('DISH'));    // DISHISH
// console.log(reverb('197393'));  // 197393
// console.log(reverb(197393));    // null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = reverb;
