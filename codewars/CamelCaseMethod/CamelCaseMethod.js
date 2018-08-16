// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings.
//  All words must have their first letter capitalized without spaces.

// For instance:

// "hello case".camelCase() => HelloCase
// "camel case word".camelCase() => CamelCaseWord

// This function can be called on any string as a constructor
// var sample = "this is a string"
// sample.camelCase()

String.prototype.camelCase=function(){
    //Split the string, use map to iterate through the words
    return this.split(" ").map(function(el) {
        //Isolate the first character, capitalize it, then combine it with the rest of the word
        return el.charAt(0).toUpperCase() + el.slice(1);
    }).join(''); // Join all returned elements without a delimiter
}