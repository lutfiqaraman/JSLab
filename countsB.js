/*
    calculate how many times a character occurs in a word
 */

function countChar(theString, character) {
    let charSum = 0;

    for (let i = 0; i < theString.length; i++)
    {
        if (theString.charAt(i) === character) {
            charSum += 1;
        }
    }

    return charSum;
}

const theString = 'banana';
console.log(countChar(theString, 'a'));
