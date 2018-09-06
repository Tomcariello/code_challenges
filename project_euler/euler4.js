// Largest palindrome product
// Problem 4 
// A palindromic number reads the same both ways. 
// The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

var findPalindrome = function() {

    // Store the palindromes here
    var results = [];
    // Start high and work down
    for (i=999; i > 99; i -= 1) {
        for (j=999; j > 99; j -= 1) {
            // Compute the product
            var product = i * j;

            // Split the number into an array
            var productArray = product.toString().split('');

            Loop1:
            while (productArray.length > 1) {
                // console.log (productArray);
                //If the first and last numbers match, remove them and continue the loop
                if (productArray[0] == productArray[productArray.length - 1]) {
                    //Remove the last digit
                    productArray = productArray.slice(0, -1)
                    //Remove the first digit
                    productArray = productArray.slice(1, productArray.length)

                    if (productArray.length < 2) {
                        // Push the palindrome to the results array
                        results.push(product);
                    }
                } else { // They did not match. Move on the next.
                    // break out of the while loop
                    break Loop1
                }
            }
        }        
    }

    // Identify the highest value in the results array

    //Create a reducer template. This will iterate through and take the highest value at each comparison
    const reducer = (accumulator, currentValue) => Math.max(accumulator, currentValue);

    // Execute the reducer 
    let highestPalindrome = results.reduce(reducer);

    console.log("The highest palindrome is " + highestPalindrome);
}
findPalindrome();