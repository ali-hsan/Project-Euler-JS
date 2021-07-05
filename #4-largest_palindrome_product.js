// Largest palindrome product

console.time('Time Taken')
function largestPalindromeProduct(n) {
    // Get the max number by multiply 9 by n times
    const maxNum = parseInt('9'.repeat(n))
    const minNum = maxNum / 2


    let palindromeNumList = []
    for (let i = maxNum; i >= minNum; i--) {
        for (let j = maxNum; j >= minNum; j--) {
            let multipliedNum = i * j
            let revMultipliedNum = parseInt([...String(multipliedNum)].reverse().join(''))

            if (multipliedNum === revMultipliedNum) {
                palindromeNumList.push(multipliedNum)
            }
        }
    }
    return Math.max(...palindromeNumList)
}

console.log(largestPalindromeProduct(3));
console.timeEnd('Time Taken')