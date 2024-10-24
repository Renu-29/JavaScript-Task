// Function for addition
function add(a, b) {
    return a + b;
}

// Function for subtraction
function subtract(a, b) {
    return a - b;
}

// Function for multiplication
function multiply(a, b) {
    return a * b;
}

// Function for division
function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Error: Division by zero";
    }
}

// Function for modulus
function modulus(a, b) {
    if (b !== 0) {
        return a % b;
    } else {
        return "Error: Modulus by zero";
    }
}

// Example usage
let num1 = 10;
let num2 = 5;

console.log("Addition: " + add(num1, num2));
console.log("Subtraction: " + subtract(num1, num2));
console.log("Multiplication: " + multiply(num1, num2));
console.log("Division: " + divide(num1, num2));
console.log("Modulus: " + modulus(num1, num2));
