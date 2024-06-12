/*
Define a function called `validHexCode` that returns `true` if its string
parameter is a valid hex code.

A valid hex code must begin with a pound key `#` followed by 6 characters.
Each character must be a digit from 0-9 or an alphabetic character from A-F.
All alphabetic characters may be uppercase or lowercase.
*/

function validHexCode(str) {
  let hexCode = ['#', 'a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let check = false;
  let i = 0;
  str = str.toLowerCase();
  if (str[0] === '#' && str.length === 7) {
    check = true;
  }
  while (check === true && i < str.length) {
    if (hexCode.includes(str[i])) {
      check = true;
    } else if (hexCode.includes(str[i]) === false) {
      check = false;
    }
    i++;
  }

  return check;
}

// console.log(validHexCode("#123456"));  // true
// console.log(validHexCode("!123456"));  // false
// console.log(validHexCode("#123"));     // false
// console.log(validHexCode("#1234567")); // false
// console.log(validHexCode("1234567"));  // false
// console.log(validHexCode("123456"));   // false
// console.log(validHexCode("#ABCDEF"));  // true
// console.log(validHexCode("#abcDEF"));  // true
// console.log(validHexCode("#88ef29"));  // true
// console.log(validHexCode("#222!E4"));  // false


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
try {
  module.exports = validHexCode;
} catch { }
