//Question no:1
let name = "Aditi";
let age = 20;
let isStudent = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);

//Question no:2
let num = 5;
console.log("Initial value of num:", num);
num = 10;
console.log("Updated value of num:", num);

//Question no:3
let a = 5;
let b = 10;
console.log("Before swapping:");
console.log("a =", a);
console.log("b =", b);
a = a + b; // Step 1: Add a and b, store the result in a
b = a - b; // Step 2: Subtract new value of a from b to get original value of a
a = a - b; // Step 3: Subtract new value of b from a to get original value of b
console.log("After swapping:");
console.log("a =", a);
console.log("b =", b);

//Question no:4
const PI = 3.14;
console.log("Value of PI:", PI);
//const PI=3.5;
//console.log ("Value of PI:", PI);
//If we try to reassign the value of PI again it causes an error because constants cannot be reassigned.

//Question no:5
let favoriteColor = "Blue";
console.log("My favorite color is " , favoriteColor);
