// The sum of the squares of the first ten natural numbers is,
// 1^2 + 2^2 + ... + 10^2 = 385

// The square of the sum of the first ten natural numbers is,
// (1 + 2 + ... + 10)^2 = 55^2 = 3,025

// Hence the difference between the sum of the squares of the first ten natural numbers and 
// the square of the sum is 3025 − 385 = 2640.

// Find the difference between the sum of the squares of the first one hundred natural numbers
// and the square of the sum.

// Obtain the Sum of the Squares
let sumOfSquares = 0;
let sum = 0;

for (i=1; i < 101; i++) {
    // Increment the square of each
    sumOfSquares += Math.pow(i, 2)

    // Total the sum of 1-100
    sum += i;
}

let squareOfSum = Math.pow(sum, 2);

// Return the difference
console.log(squareOfSum - sumOfSquares);