// Sum square difference

const sumSquareDifference = (n) =>{
    let sum_of_squares = 0
    let square_of_sum = 0

    // To get the sum of sum_of_squares and square_of_sum
    for (let i = 0; i <= n; i++){
        sum_of_squares += i * i
        square_of_sum += i
    }
    square_of_sum *= square_of_sum

    return square_of_sum - sum_of_squares
}


console.log(sumSquareDifference(100))