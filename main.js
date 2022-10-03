/* Practice Assignment 4:

Complete this javascript file according to the individual instructions
given in the comments. 

*** DO NOT CHANGE any of the code that you are not instructed to. */

// 1) Create a function named helloWorld that returns the exact phrase:
// "Hello World!".

function helloWorld(){
    return "Hello World!";
}

// 2) Create a function named greeting that will accept a "name" parameter
// and return the string: "Hello, name." where "name" is replaced
// with whatever value we want to provide when calling the function.

function greeting(name){
    return `Hello, ${name}.`;
}

// 3) Create a function named divisibleByThree that accepts a "number" parameter
// and will return accurate boolean data depending on the value
// of the "number" parameter. Hint: Try the modulus operator.

function divisibleByThree(number){
    if(number % 3 === 0){
        return true;
    }
    return false;
}

// 4) Create a function named averageAge that accepts 3 parameters:
// num1, num2, and num3. The function should return the average of
// all three numbers, but the parameter num3 is missing, it should
// return the average of num1 and num2. Returned results should be
// rounded to the nearest integer. Hint: Use a Math method to round.

function averageAge(num1, num2, num3){
    if(num3 === undefined){
        num3 = 0;
    }
    let sum = num1 + num2 + num3;
    return Math.floor(sum / 3);
}

// 5) Create a function named leetSpeak that accepts a word
// as a parameter and returns the same word except all of the letter
// e occurances (lower case only) are replaced by the number 3.
// Replace any lower case a with the number 4, too.
// Hints: You will use a loop. You will use conditionals.
// Example: leet is returned as l33t. speak is returned as sp34k.

function leetSpeak(string){

    //first solution
    // let word = string;
    // let word2 = word.replace(/e/g, "3");
    // let word3 = word2.replace(/a/g, "4");
    // return word3;


    //intended solution
    let word = [];
    let newstring = "";

    for(i = 0; i < string.length; i++){
        word.push(string.slice(i, i + 1));
        if(word[i] === "e"){
            word[i] = "3";
        }else if(word[i] === "a"){
            word[i] = "4";
        }
        console.log(word);
        newstring = newstring + word[i];
    }
    return newstring;

}

console.log(leetSpeak("Endangered"));