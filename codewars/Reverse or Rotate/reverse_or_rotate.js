// The input is a string str of digits. 
// Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; 
// otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If:

//      sz is <= 0 or if str is empty return ""
//      sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
//      Examples:
//      revrot("123456987654", 6) --> "234561876549"
//      revrot("123456987653", 6) --> "234561356789"
//      revrot("66443875", 4) --> "44668753"
//      revrot("66443875", 8) --> "64438756"
//      revrot("664438769", 8) --> "67834466"
//      revrot("123456779", 8) --> "23456771"
//      revrot("", 8) --> ""
//      revrot("123456779", 0) --> "" 
//      revrot("563000655734469485", 4) --> "0365065073456944"

function revrot(str, sz) {

    //declars vars
    let chunkArray = [];
    let marker = 0; 

    if (sz <= 0 || str == "") {
        return "";
    } else {
        // break into chunks and store in an array
        for (i=1; i <= str.length / sz; i++) {
            chunkArray.push(str.slice(marker,marker + sz));
            marker += sz;
        }
    }
    
    //Loop through chunks
    for (j=0; j < chunkArray.length; j++) {
    
        //Split the array into individual digits .then
        //Use reduce to iterator through the new array of digits and cube each digit
        let chunkSum = chunkArray[j].split('').reduce( (accumulater, digit) => accumulater + Math.pow(digit, 3),0 );

        //if even REVERSE
        if (chunkSum % 2 == 0) {
            chunkArray[j] = reverse(chunkArray[j]);
        } else { //else if odd ROTATE left 1 position
            chunkArray[j] = rotate(chunkArray[j]);
        }
    }

    //Return joined chunkArray
    return chunkArray.join('');
}

function reverse(chunk) {
    //split chunk .then reverse the elements .then join the elements back into 1 string of digits without a delimitr
    return chunk.split('').reverse().join('');
}

function rotate(chunk) {
    //array without the first digit + the first digit to rotate the first position to the end of the array
    return chunk.slice(1) + chunk.slice(0,1);
}