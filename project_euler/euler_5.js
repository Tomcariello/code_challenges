// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

//These are the divisors that I need to check. The other numbers are divisors of these so I can assume they will be fine
let divisors = [11,12,13,14,15,16,17,18,19,20];

let numToCheck = 20; //starting number
let foundAnswer = false;

while (foundAnswer == false) {
    // evenDivisors will count the number of divisors. To be used in the second if statement
    let evenDivisors = 0;
    for (i=0; i < divisors.length; i++) {
        if (numToCheck % divisors[i] != 0) {
            numToCheck = numToCheck + 20; // Add the lowest divisor to save some cycles
            break;
        } else {
            console.log( numToCheck.toLocaleString() + " is divisible by " + divisors[i])
            evenDivisors++;
        }
    }

    if (evenDivisors == divisors.length) {
        foundAnswer = true;
    }
}
console.log( "**********************************" );
console.log( numToCheck.toLocaleString() );
console.log( "**********************************" );
