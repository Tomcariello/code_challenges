// Your job is to write a function which increments a string, to create a new string.
// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number the number 1 should be appended to the new string.

// Examples:

// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString (strng) {

    // if not a number, append "1'"
    if ( isNaN( parseInt(strng[strng.length - 1] ) ) ) {
        strng = strng + 1;
    } else {
        console.log("ends with a digit");
        // If number, see how many digits back to go   
        // iterate through string from back to front
        let digitCount = 1;
        
        for (i=strng.length - 2; i > 0; i--) {
            console.log("digitCount is " + digitCount);
            if ( !isNaN(parseInt(strng[i]))) {
                // Increment the count
                digitCount++;
            } else {
                // Stop Looping
                // break;
            }
        }

        // slice digitCount numbers off
        let endDigits = strng.slice([strng.length - digitCount - 1, digitCount]);
        console.log(endDigits);
        // increment by 1
        // Append the result 
    }  

    return strng
  }