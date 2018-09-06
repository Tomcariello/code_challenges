// Find The Parity Outlier

// You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a 
// single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

function findOutlier(integers){
    
    // Create vars to contain the numbers
    let even = [];
    let odds = [];

    // Loop through the array
    for (i=0; i < integers.length; i++) {
        // Push odd numbers to the odd array & even numbers to the even array
        integers[i] % 2 == 0 ? even.push(integers[i]) : odds.push(integers[i]);
    }

    // Return the number in the first index of the array with a length of 1
    return even.length == 1 ? even[0] : odds[0];
}
