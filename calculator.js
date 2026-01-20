// Function to add numbers
function add(num1, num2) {
    return num1 + num2;
}

// Function to subtract numbers
function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}


function divide(num1, num2) {
    return num1 / num2;
}

const num1 = 5;
const num2 = 0;
let operation = "/";

function operate(num1, num2, operation) {
    switch (operation) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            if (num2 === 0) {
                return "Can't divide by 0";
            } else {
                return divide(num1, num2);
            }

        default:
            return "Invalid operation";
    }
}

const addition = operate(num1, num2, operation);

console.log(addition);