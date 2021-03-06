// Even Fibonacci numbers
// Problem 2 
// Each new term in the Fibonacci sequence is generated by adding the previous two terms. 
// By starting with 1 and 2, the first 10 terms will be:

// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

// By considering the terms in the Fibonacci sequence whose values do not exceed four million, 
// find the sum of the even-valued terms.

let totalEvens = 2;
let firstTerm = 1;
let secondTerm = 2;

while (secondTerm < 4000000) {
    let temp = secondTerm;
    secondTerm += firstTerm;
    firstTerm = temp;

    if (secondTerm % 2 == 0) {
        totalEvens += secondTerm;
    }
}

console.log(totalEvens);