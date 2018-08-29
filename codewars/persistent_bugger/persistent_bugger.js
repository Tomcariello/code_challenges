// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
// which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit

//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2

//  persistence(4) === 0 // because 4 is already a one-digit number

function persistence(num) {
    // Keep count of the number of times the num is persisted (I have no idea if that's the right verbiage)
    var count = 0; 
    
    // Continue as long as num is more than 2 digits
    while (num > 9) {
        // Split the number into individual digits. **These will be strings**
        let digits = num.toString().split('');

        // Set our total to 1 to begin with so we don't ruin the multiplication
        let product = 1;
        
        // Iterate through the individual digits and multiple them by the product
        for (i=0; i < digits.length; i++) {
            product = parseInt(digits[i]) * product;
        }
        // Increment count var
        count++;

        // Set num to the product and begin the next loop
        num = product
    }

    return count;
 }

