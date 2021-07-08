// Smallest multiple
const getLCM = (a, b) => {
    return (a * b) / getGCD(a, b);
}

// GCD using Euclid's Algorithm
const getGCD = (a, b) => {
    if (b === 0) return a;
    return getGCD(b, a % b);
}


const smallestMultiple = (n) => {
    let maxLCM = 1;
    for (let i = 2; i <= n; i++) {
        maxLCM = getLCM(maxLCM, i);
    }
    return maxLCM;
}

console.log(smallestMultiple(20));