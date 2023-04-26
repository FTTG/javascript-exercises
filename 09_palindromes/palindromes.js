const palindromes = function (string) {
    let alphanum = string.replace(/[^a-z0-9]/gi, '');
    alphanum = alphanum.toLowerCase();
    let arrayString = alphanum.split('');
    let reverseArray = arrayString.reverse();
    let reverseString = reverseArray.join('');
    return alphanum == reverseString ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
