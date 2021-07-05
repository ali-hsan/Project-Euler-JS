// Largest prime factor

const primeChecker = (number) => {
    for (let i = 2; i <= Math.ceil(Math.sqrt(number)); i++) {
        if (number === 2){return number}
        if (number % i === 0){return false}
    }
    return number
}

const largestPrimeFactor = (number) => {
    let all_factors = [1]

    for (let i = 2; i <= number / all_factors[all_factors.length - 1]; i++){
        if (number % i === 0){all_factors.push(i)}
    }
    console.log(all_factors)
    return Math.max(...all_factors.map(primeChecker))
}

console.log(largestPrimeFactor(8))