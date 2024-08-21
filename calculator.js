
const display = document.querySelector('#display');
const userInputScreen = document.querySelector('#user-input');
const answerScreen = document.querySelector('#answer');
let numbersButton = document.querySelectorAll('.numbers');


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
  switch(operator) {
    case '+':
      add(num1, num2);
      break;
    case '-':
      subtract(num1, num2);
      break;
    case '*':
      multiply(num1, num2);
      break;
    case '/':
      divide(num1, num2);
      break;
  }
}
