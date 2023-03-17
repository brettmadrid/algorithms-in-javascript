// Recursive approach
function fib(n) {
    if (n <= 1) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
}

// Better dynamic approach
function fib2(n) {
    const fibArray = [0, 1];

    for (let i = 2; i <= n; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }

    return fibArray[n];
}

console.log(fib2(20))