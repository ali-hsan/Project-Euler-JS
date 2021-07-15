// 10001st prime
console.time('Time Taken')
function checkPrime(n) {
    //All the primes numbers of a number is always <= its square root
    for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
        if (n % i === 0) {
            return false;
        }
    }
}

function nthPrime(n) {
    let prime = 0
    let i = 2

    while (i <= n){
        if (checkPrime(i) !== false) {
            prime = i
        } else n += 1 // adding 1 to to iteration if not prime
        i++
    }
    return prime
}

console.log(nthPrime(10));
console.timeEnd('Time Taken')