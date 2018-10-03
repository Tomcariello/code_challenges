// Problem 9 
// A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

// a^2 + b^2 = c^2
// For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

// Iterate from 1 for the lowest integer. 334 is the cap for a because a < b < c and a + b + c = 1000
for (let a=1; a < 334; a++) {
    // Iterate from 2 for the middle integer. 668 is the cap for a + b for the same reason as above
    for (let b=2; a + b < 668; b++) {
        // set c to the only value that meets the criteria of totalling to 1000
        c = 1000 - a - b; 
        
        // Compare the squares for pythagorean-ness
        if ( parseInt(Math.pow(a,2) + Math.pow(b,2) ) == Math.pow(c,2) ) {
            // Print the result
            console.log(a * b * c);
        }
    }
}