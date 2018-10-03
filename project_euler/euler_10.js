// Summation of primes
// Problem 10 
// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.

// Variable to store the total of all primes
let primeSum = 0;

// Determine is a fiven number is prime
let isPrime = (num) => {
    // Handle 1 manually
    if ( num == 1) {
        return false;
   }
    if ( num == 2) {
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

// Iterate through all numbers up to (not including) 2M
for (let i = 1; i < 2000000; i++) {
    if (isPrime(i) == true) {
        primeSum += i;
    }
}
// Print the result
console.log(primeSum);