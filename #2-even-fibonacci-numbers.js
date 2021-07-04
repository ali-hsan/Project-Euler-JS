// Even Fibonacci Numbers

function fibonacci(n) {

    let fibList = [];
    let [a, b] = [0, 1];

    while (a < n) {
        fibList.push(a);
        [a, b] = [b, a + b];
    }

    return fibList;
}



const fiboEvenSum = (n) => {
    // To Calculate Sum of Even Fibonacci Numbers
    const fibNumbers = fibonacci(n)
    let evenSum = 0

    for (let i = 0; i <= n; i++) {
        if (fibNumbers[i] % 2 === 0) {
            evenSum += fibNumbers[i]
        }
    }
    return evenSum
}

console.log(fiboEvenSum(10))