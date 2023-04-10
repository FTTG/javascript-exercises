const reverseString = function (sentence) {
    let reversed = sentence.split('');
    reversed = reversed.reverse();
    return reversed.join('');
    // return toString(reversed(sentence.split('')))
};

// Do not edit below this line
module.exports = reverseString;
