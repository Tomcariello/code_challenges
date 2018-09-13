// https://www.hackerrank.com/challenges/diagonal-difference/problem

// Given a square matrix, calculate the absolute difference between the sums of its diagonals.
// For example, the square matrix is shown below:

// 1 2 3
// 4 5 6
// 9 8 9 

// The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

// Function description

// Complete the function in the editor below. It must return an integer representing the absolute diagonal difference.

// diagonalDifference takes the following parameter:

// arr: an array of integers .
// Input Format

// The first line contains a single integer, , the number of rows and columns in the matrix . 
// Each of the next lines describes a row, , and consists of space-separated integers .

// Constraints

// Output Format

// Print the absolute difference between the sums of the matrix's two diagonals as a single integer.

// Sample Input

// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output

// 15
// Explanation

// The primary diagonal is:

// 11
// 5
// -12
// Sum across the primary diagonal: 11 + 5 - 12 = 4

// The secondary diagonal is:

// 4
// 5
// 10
// Sum across the secondary diagonal: 4 + 5 + 10 = 19 
// Difference: |4 - 19| = 15

// Note: |x| is the absolute value of x

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the diagonalDifference function below.
function diagonalDifference(arr) {
    // arr is an array of arrays

    let leftToRightTotal = 0;
    let rightToLeftTotal = 0;

    // Get the left to right diagonal total
    for (let i=0; i < arr.length; i++) {
        leftToRightTotal += arr[i][i];
        rightToLeftTotal += arr[i].reverse()[i];
    }

    return Math.abs(leftToRightTotal - rightToLeftTotal);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
