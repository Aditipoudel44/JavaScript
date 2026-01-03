//Question no:1
let name = "Aditi";
let age = 20;
let isStudent = true;
let address; // not assigned any value
// Print values and their types
console.log("Value of name:", name, " | Type:", typeof name);
console.log("Value of age:", age, " | Type:", typeof age);
console.log("Value of isStudent:", isStudent, " | Type:", typeof isStudent);
console.log("Value of address:", address, " | Type:", typeof address);

//Question no:2
let num = 22;
let str = "3";
// Add number and string
let result = num + str;
console.log("Result:", result);
console.log("Type of result:", typeof result);

//Question no:3
let fruits = ["Orange", "Kiwi", "Grapes", "Apple", "Blueberry"];
// Print the first element (index 0)
console.log("First fruit:", fruits[0]);
// Print the last element (index length - 1)
console.log("Last fruit:", fruits[fruits.length - 1]);

//Question no:4
let student = {
    name: "Aditi",
    age: 20,
    grade: "A"
};
console.log("Student Name:", student.name);
console.log("Student Age:", student.age);
console.log("Student Grade:", student.grade);

//Question no:5
let fruit = ["Kiwi", "Mango", "Orange"];
let number = 26;
// Check if 'fruits' is an array
console.log("Is 'fruits' an array?", Array.isArray(fruits)); // true
// Check if 'number' is an array
console.log("Is 'number' an array?", Array.isArray(number)); // false

