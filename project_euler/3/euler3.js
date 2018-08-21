// Largest prime factor
// Problem 3 
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

const lookupValue = 600851475143;

let findLargestPrime = (val) => {

    var largestprime = 1;

    // Eliminate as many items as we can to improve performance
    // Things we can eliminate:
    // Eliminate even numbers
    // Eliminate numbers greater than 1/2 of val + 1
    
    // Eliminate multiples of 5 if val doesn't end in 5 or 0. 
    // Determine the last digit of the number
    let lastDigit = lookupValue.toString().charAt(lookupValue.toString().length-1);

    if (lastDigit != 0 && lastDigit != 5) {
        //eliminate 5 from the mix
    }

    // Eliminate multiples of 3 if the sum of the numbers is not divisible by 3
    let sumOfDigits = lookupValue.toString().split('').reduce(function(accumulator, currentValue, currentIndex, array) {
        return parseInt(accumulator) + parseInt(currentValue);
      });

    //Loop through the odd numbers 
    for (var i=3; i < val / 2 + 1; i+=2) {
        console.log(`checking if ${val} is divisible by ${i}`);
        //If this number is evenly divisible by i
        if (val % i == 0) {
            console.log(`checking if ${i} is prime...`);
            //check if i is prime
            if (isPrime(i) == true) {
                console.log(`It is! The largest prime divisor for ${val} so far is ${i}`)
                // If i is prime save that number
                largestprime = i;
            }
        }
    }
    return largestprime;
}

let isPrime = (num) => {
    // Handle 1 manually
    if (num == 1) {
         return true;
    }
    
    for (var i=2; i <= num-1; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
