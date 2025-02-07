/**
 * Program: Basic math programming
 * Description: A program that performs basic math operations
 *              (addition, subtraction, multiplication, division).
 *              The program demonstrates the use of conditional 
 *              statements, loops (while and for), jumping statements, and 
 *              error handling.
 * Author: [RattanakVichboth, HENG]
 * Date: [07.02.2025]
 * To run: node script.js
*/

import { createInterface } from 'readline';

// Create a readline interface for command-line input/output.
const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

// Utility function to ask a question and return a promise.
function userInput(query) {
  return new Promise(resolve => {
    rl.question(query, answer => {
      resolve(answer);
    });
  });
}

// Function to perform addition on an array of numbers using a for loop.
function mathAddition(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Function to perform subtraction on an array of numbers using a for loop.
function mathSubtraction(numbers) {
  let result = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    result -= numbers[i];
  }
  return result;
}

// Function to perform multiplication on an array of numbers using a for loop.
function mathMultiplication(numbers) {
  let result = 1;
  for (let i = 0; i < numbers.length; i++) {
    result *= numbers[i];
  }
  return result;
}

// Function to perform division on an array of numbers using a for loop.
function mathDivision(numbers) {
  let result = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    result /= numbers[i];
  }
  return result;
}

// Main asynchronous function to manage the interactive menu.
async function main() {
  console.log("Your basic math calculation start here!");

  // Main loop (while loop) to continuously display the menu until exit.
  while (true) {
    console.log("\nPlease select an operation:");
    console.log("1. Addition (+)");
    console.log("2. Subtraction (-)");
    console.log("3. Multiplication (*)");
    console.log("4. Division (/)");
    console.log("5. Exit");

    let Math;
    try {
      const input = await userInput("Enter your choice (1-5): ");
      Math = parseInt(input);
      if (isNaN(Math)) {
        throw new Error("Input is not a valid number.");
      }
    } catch (error) {
      console.log("Error:", error.message);
      continue; // Jumping statement: continue to the next iteration of the while loop.
    }

    // Exit if the user chooses option 5.
    if (Math === 5) {
      console.log("Exiting the program. Goodbye!");
      break; // Jumping statement: break out of the while loop.
    }

    // Check if a valid operation is selected.
    if (Math < 1 || Math > 5) {
      console.log("Invalid choice. Please select a valid option (1-5).");
      continue;
    }

    // Ask the user how many numbers to operate on.
    let count;
    try {
      const countInput = await userInput("How many numbers do you want to use? (minimum 2): ");
      count = parseInt(countInput);
      if (isNaN(count) || count < 2) {
        throw new Error("Please enter a valid number greater than or equal to 2.");
      }
    } catch (error) {
      console.log("Error:", error.message);
      continue;
    }

    // Use a for loop to collect the numbers.
    let numbers = [];
    for (let i = 0; i < count; i++) {
      try {
        const numInput = await userInput(`Enter number ${i + 1}: `);
        const num = parseFloat(numInput);
        if (isNaN(num)) {
          throw new Error("Invalid number entered.");
        }
        numbers.push(num);
      } catch (error) {
        console.log("Error:", error.message);
        i--; // Jumping statement: decrement i to retry the current input.
        continue;
      }
    }

    // Compute the result based on the chosen operation.
    try {
      let result;
      switch (Math) { // Conditional statement: switch-case.
        case 1:
          result = mathAddition(numbers);
          console.log(`Result: ${numbers.join(" + ")} = ${result}`);
          break;
        case 2:
          result = mathSubtraction(numbers);
          console.log(`Result: ${numbers.join(" - ")} = ${result}`);
          break;
        case 3:
          result = mathMultiplication(numbers);
          console.log(`Result: ${numbers.join(" * ")} = ${result}`);
          break;
        case 4:
          result = mathDivision(numbers);
          console.log(`Result: ${numbers.join(" / ")} = ${result}`);
          break;
        default:
          console.log("Invalid input choice.");
          break;
      }
    } catch (error) {
      console.log("Error during calculation:", error.message);
      continue;
    }
  }
  rl.close();
}

main();
