//Question no:1
for (let i = 1; i <= 10; i++) { //// for loop syntax: for(initialization; condition; increment)
    console.log(i);
}

//Question no:2
// Initialize a variable to start from 1
let i = 1;
// Use while loop to print even numbers from 1 to 20
while (i <= 20) {
    // Check if the current number is even
    if (i % 2 === 0) {
        console.log(i); 
    }
    i++; // Increment the number by 1
}

//Question no:3
let sum = 0;
// Use a for loop to iterate numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    sum += i; // Add the current number to sum
}
console.log("The sum of numbers from 1 to 100 is:", sum);

//Question no:4
for (let i = 1; i <= 10; i++) {
    // Multiply 5 by the current number i and print the result
    console.log("5 x " + i + " = " + (5 * i));
}

//Question no:5
let numbers = [34, 3, 64, 92, 30, 26];
// Assume the first number is the largest initially
let largest = numbers[0];
// Use a for loop to check each number
for (let i = 1; i < numbers.length; i++) {
    // If current number is greater than largest, update largest
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log("The largest number in the array is:", largest);

