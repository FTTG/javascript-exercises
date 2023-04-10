const sumAll = function (num1, num2) {
    // Validates that arguments are non negative numbers.
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return 'ERROR';
    }
    let start = 0;
    let end = 0;
    // Sets smallest number to start to use on loop.
    if (num1 < num2) {
        start = num1;
        end = num2;
    }
    else {
        start = num2;
        end = num1;
    }
    // Loop over all numbers between the 2 arguments given and add them
    let sum = 0;
    for (i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
