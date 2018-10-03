// 10 001st prime
// Problem 7

// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
// What is the 10 001st prime number?

// I'm baking "2" into the starting elements so I don't have deal with 2 or any other even numbers
let primeCount = 1; // first prime number is 2
let numtocheck = 3;

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

while (primeCount < 10001) {
    if (isPrime(numtocheck) == true) {
        primeCount++
    }
    if (primeCount < 10001) {
        numtocheck = numtocheck + 2;
    }    
}
console.log("The 10,001st prime number is..." + numtocheck);
