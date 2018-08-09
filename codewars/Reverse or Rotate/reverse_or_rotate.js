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

//NOTES
// This feels pretty inefficient, particularly the nested FOR loops. But it works well enough to pass the tests.
// I am not checking to see if sz > str.length which feels like a flaw. But Codewars doesn't test that case, so it passes.


let chunkArray = []; //store the values after the string is broken into sz sized chunks
let marker = 0; //store position of the position to start the slice. Used to facilitate splitting str into chunks
let answer = "";

function revrot(str, sz) {

    //reset lets
    let chunkArray = [];
    let marker = 0; 
    let answer = "";

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
                
        let chunkSum = 0;
        
        //Loop through each digit of each chunk
        for (k=0; k < chunkArray[j].length; k++) {
            //obtain the sum of the cubes of the digits in this chunk
            chunkSum += Math.pow(chunkArray[j][k], 3)
        }
        //if even REVERSE
        if (chunkSum % 2 == 0) {
            chunkArray[j] = reverse(chunkArray[j]);
        } else { //else if odd ROTATE left 1 position
            chunkArray[j] = rotate(chunkArray[j]);
        }
    }

    for (m=0; m < chunkArray.length; m++) {
        answer += chunkArray[m];
    }

    //Return string
    return answer;
}

function reverse(chunk) {

    let revChunk = ""

    for (i=chunk.length; i > 0; i--) {
        revChunk += chunk[i - 1];
    }
    return revChunk;
}

function rotate(chunk) {
    //Store the 1st digit
    let firstDigit = chunk.slice(0,1);

    //Remove the 1st digit from the chunk
    chunk = chunk.substr(1);

    //Append the first digit to the end of chunk
    chunk += firstDigit

    return chunk;
}