// Largest prime factor
// Problem 3 
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?
// 600,851,475,143 - 600 Billion
const lookupValue = 600851475143;

let findLargestPrime = (val) => {

    var largestprime = 1;

    // Set the limit on the numbers to check up to
    let limit = Math.sqrt(lookupValue);

    //Loop through the odd numbers 
    for (var i=3; i < limit; i+=2) {
        //If this number is evenly divisible by i
        if (val % i == 0) {
            //check if i is prime
            if (isPrime(i) == true) {
                console.log(`The largest prime divisor for ${val} so far is ${i}`)
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
    if (num % 2 == 0) {
        return false;
   }

    for (var i=3; i <= num / 2 -1; i += 2) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

findLargestPrime(lookupValue);
