// Bob is preparing to pass IQ test. 
// The most frequent task in this test is to find out which one of the given numbers differs from the others.
// Bob observed that one number usually differs from the others in evenness. 
// Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness,
// and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

// ##Examples :

// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd
// FUNDAMENTALSLOGIC

var numbers = "2 4 6 7 8 10";
iqTest(numbers);

function iqTest(numbers){

    //Count the instance of odd & even. Once either reaches 2, the first instance of the other will be the unique element
    var oddCount = 0;
    var evenCount = 0;

    //Track the last of each type.
    lastOdd = 0;
    lastEven = 0;

    //Split the array
    var numArray = numbers.split(" ");

    //Iterate through the array
    for (i=0; i < numArray.length; i++) {
        //If the number is evenly divisable by zero
        if (parseInt(numArray[i]) % 2 == 0) {
            lastEven = numArray[i]; //set LastEven to this number
            evenCount++; //Increment evenCount
        } else {
            lastOdd = numArray[i];//set LastOdd to this number
            oddCount++;//Increment oddCount
        }
    }

    //If 2+ evens identified and  1 odd number found
    if (evenCount > 1 && lastOdd != 0) {
        //Return the lastOdd identified + 1 to meet the "index at 1" requirement
        return numArray.indexOf(lastOdd) + 1
    //If 2+ odds identified and 1 even number found
    } else if (oddCount > 1 && lastEven != 0) {
        //Return the lasteven identified + 1 to meet the "index at 1" requirement
        return numArray.indexOf(lastEven) + 1
    }
  }