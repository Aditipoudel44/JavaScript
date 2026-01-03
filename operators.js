//Question no:1
let num1 = 3;
let num2 = 26;
console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);

//Question no:2
let num= 8;
console.log(num % 2 === 0? "even":"odd");

//Question no:3
// Check if 10 is greater than 5
console.log("Is 10 greater than 5?", 10 > 5);
// Check if 7 is equal to 8
console.log("Is 7 equal to 8?", 7 == 8);
// Check if 15 is less than or equal to 20
console.log("Is 15 less than or equal to 20?", 15 <= 20);

//Question no:4
let age = 20;
let marks = 65;
// A person is eligible to vote if age is greater than or equal to 18
if (age >= 18) {
    console.log("Person is eligible to vote");
} else {
    console.log("Person is not eligible to vote");
}
// Check if a student passed
// A student passes if marks are greater than or equal to 40
if (marks >= 40) {
    console.log("Student has passed");
} else {
    console.log("Student has failed");
}

//Question no:5
let numCheck= -3;
// Syntax: condition ? valueIfTrue : valueIfFalse
let result = (num >= 0) ? "Positive" : "Negative";
console.log(num + " is " + result);


