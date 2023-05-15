// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: 5
// b) Verify and explain: .push() adds the element to the end and returns the  new value of the array

// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: 9 
// b) Verify and explain: It will log the length of the string, starting from 0 index.

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: l
// b) Verify and explain: Now i see what i did wrong. Previous question was a string, so count started at 1. Since we used bracket notation here, count started from 0.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain: we assigned the variable index the value of 1. When we console.log(languages[index]), we were asking for the element in that position. In 0 index there is "Javascript" and in index 1 there is "Ruby"

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer:"Saturday" and "Sunday"
// b) Verify and explain: TypeError: weekendDays.toUpperCase is not a function, was the messade received, and i have no idea why.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
// console.log(typeof dataTypes.length)

// a) Your answer: 4
// b) Verify and explain: I got back number. And i have no clue why, im going to research, but would love some detailed explanation. 
