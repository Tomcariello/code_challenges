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

// Notes: I should spend some time on Regex if I want to stay on CodeWars

function incrementString (strng) {
    console.log(strng)
    // if the last element in the string is not a number
    if ( isNaN( parseInt(strng[strng.length - 1] ) ) ) {
        return strng + 1;
    } else {
        // Its a number, see how many digits back to go. 
        let digitCount = 1;
        
        //iterate through string from back to front. We can skip the first element since we already established it is a number
        for (i=strng.length - 2; i > 0; i--) {
            if ( !isNaN(parseInt(strng[i]))) {
                // Increment the count
                digitCount++;
            } else {
                // Stop Looping
                break;
            }
        }

        //Store the opening text string
        let answerText = strng.slice(0,[strng.length - digitCount]);;

        //Store the ending digits
        let answerNum = (parseInt(strng.slice([strng.length - digitCount])) + 1);

        //Add 0s as many times as it takes to get the total lengths of the pieces to match the strng.length
        while (answerText.length + answerNum.toString().length < strng.length) {
            answerText += 0;            
        }

        return answerText + answerNum;
    }  
}