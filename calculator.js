

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 !== 0) {
    return num1/num2;
  }else {
    return "Error"
  }
}


function operate(num1, num2, operator) {

}

// Testing my functions

let num1 = 7;
let num2 = 4;
let operator;

console.log(add(num1, num2));
console.log(subtract(num1, num2));
console.log(multiply(num1, num2));
console.log(divide(num1, num2));