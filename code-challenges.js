// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:
        //I am going to create a function that takes in two parameter, which will be strings
        //Will determine which string has more characters by using the .length method
        //Will use conditionals to run through each argument and check the length from one and compare to the other
        //going to return the longest string

      
// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

const fruitLength = (string1, string2) => {
    if(string1.length > string2.length){
        return string1
    } else if (string2.length > string1.length){
        return string2
    }
}
    console.log(fruitLength(fruit1,fruit2))// I got banana
    console.log(fruitLength(fruit3,fruit4))// I got cherry


    // --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:

        //Going to create a function that takes in one parameter, a number
        //Going to create a few conditional statements to match with their respective output
        //Going to use strictly equals to compare the num parameter to the arguments provided
        //Going to use console.log three times to log each output

const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"

const boilingPoint = (num) => {
    if(num === 42 ){
        return `${num} is below boiling point`
    } else if(num === 350){
        return `${num} is above boiling point`
    } else if (num === 212){
        return `${num} is at boiling point`
    }
}
console.log(boilingPoint(42))// 42 is below boiling point
console.log(boilingPoint(350))//350 is above boiling point
console.log(boilingPoint(212))//212 is at boiling point


// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
            //Going to create a third variable in order to combine the first two const
            //Going to use the .concat() method into the first provided variable, in order to combine the second into it
            //Place the second variable into the argument of .concat()
            //Use the .length at the end of the parenthesis to measure the length of the new array.


const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

const third = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns).length
console.log(third)// Output is 9


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code:

        //create new variable to implement methods, that can only be used in arrays
        //will use .split('') to turn string into array, including "" to access individual letter
        //will use .reverse to reverse array
        //will use . join('') to turn array into string

const currentCohort = "Delta 2023"
// Expected output: "3202 atleD"

const newStr = currentCohort.split('').reverse().join('')
console.log(newStr)// Output is 3202 atleD 


// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:

        //Since we are checking certain indexes, i will implement method .lastIndexOf()
        //To check the output, will console.log and pass the given value for 


const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

console.log(numberOfConnections.lastIndexOf(42))//Output 7
console.log(numberOfConnections.lastIndexOf(10))//Output 8


// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:

        //I had do do some reasearch, and figured that if i used the method .sort() alone, javascript thinks that i am trying to sort strings, and for numbers, it will sort them in the actual order of the numbers
        //By using (a,b => b - a) i am telling it to compare functions in descending order which i believe is considered a comparison function


const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]


sanDiegoSummerTemperatures.sort((a,b) => b - a)
sanDiegoWinterTemperatures.sort((a,b) => b - a)

console.log(sanDiegoSummerTemperatures)// 82, 80, 79, 77, 76, 73, 72
console.log(sanDiegoWinterTemperatures)//68, 67, 66, 66, 62, 59, 59



