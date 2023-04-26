const fibonacci = function (n) {
    let fibo = [1, 1];
    if (n < 1) return 'OOPS';
    if (n < 3) return fibo[n - 1];
    for (let i = 2; i < n; i++) {
        fibo[i] = fibo[i - 2] + fibo[i - 1];
    }
    return fibo[n - 1];
};

// Do not edit below this line
module.exports = fibonacci;
