/*
Write a function sillyString that accepts a word as an argument. The functions
should return a new word where every vowel of the original word is followed by
'b' and that same vowel. For example, 'siren' would turn into 'sibireben'.

Vowels are the letters "a", "e", "i", "o", "u".
*/
function sillyString(word) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let silString = '';
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            silString += word[i] + 'b' + word[i];
        } else {
            silString += word[i];
        }
    }
    return silString;
}

// console.log(sillyString('stop'));       // stobop
// console.log(sillyString('that'));       // thabat
// console.log(sillyString('can'));        // caban
// console.log(sillyString('cats'));       // cabats
// console.log(sillyString('italy'));      // ibitabaly
// console.log(sillyString('scooter'));    // scobooboteber

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = sillyString;
