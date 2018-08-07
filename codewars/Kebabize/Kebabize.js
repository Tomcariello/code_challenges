// Codewars Kebabize
// Modify the kebabize function so that it converts a camel case string into a kebab case.

// kebabize('camelsHaveThreeHumps') // camels-have-three-humps
// kebabize('camelsHave3Humps') // camels-have-humps
// Notes:

// the returned string should only contain lowercase letters

// My notes:
// The best solution to this almost certainly involves Regex

function kebabize(str) {
    //View the test word
    console.log(str)
    
    //Track if the first letter has been processed. 
    //This is used to prevent a dash from showing in the first position
    var processedFirstLetter = false; 

    //The var to store the converted text (the answer)
    var result = "";

    //Iterate through the str
    for (i=0; i < str.length; i++) {
        
        //Continue if current point is NOT a number
        if (isNaN( parseInt(str[i] ) ) ) {

            //If the char is lowercase already
            if (str[i] == str[i].toLowerCase()) {
                //Add the letter to the result
                result += str[i];
                //Indicate that the first letter has been processed
                processedFirstLetter = true;
            } else { //if the char is capital
                //If this is the first letter
                if (processedFirstLetter == false) {
                    //Add the lowercase letter to the result without the dash
                    result += str[i].toLowerCase();
                    //Indicate that the first letter has been processed
                    processedFirstLetter = true;
                } else {
                    //Add the lowercase letter to the result with the dash
                    result += "-" + str[i].toLowerCase();
                }
            }
        }
    }
    // return the answer
    return result;
}