// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
    let arr = numbers.split(" "); // split the array
    let high = arr[0]; // initialize high value
    let low = arr[0]; // initialize low value

    //iterate through array and identify the min & max
    for (i=1; i < arr.length; i++) {
        low = Math.min(arr[i], low)
        high = Math.max(arr[i], high)
    }

    return high + " " + low
}