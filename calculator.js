let firstOperand = '';
let secondOperand = '';
let currentOperator = null;
let waitingForSecondOperand = false;

const display = document.querySelector('#user-input');
const result = document.querySelector('#result');
const deleteButton = document.querySelector('#delete');
const clearScreenButton = document.querySelector('#clear');
const numbersButton = document.querySelectorAll('.numbers');
const operatorsButton = document.querySelectorAll('.operators');
const equalsButton = document.querySelector('#equals');
const point = document.querySelector('#point');

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
  if (num2 === 0) {
    return 'ERROR';
  } else {
    return num1 / num2;
  }
}

//function percentage(num1,)

function operate(num1, num2, operator) {
  firstOperand = parseFloat(num1);
  secondOperand = parseFloat(num2);

  switch(operator) {
    case '+':
      return add(firstOperand, secondOperand);
    case '-':
      return subtract(firstOperand, secondOperand);
    case '*':
      return multiply(firstOperand, secondOperand);
    case '/':
      return divide(firstOperand, secondOperand);
    default:
      return 'ERROR';
  }
}

function populateScreen(value) {
 if (!waitingForSecondOperand) {
  if (firstOperand === '0' || firstOperand == '') {
    firstOperand = value;
  } else {
    firstOperand += value;
  }
  display.textContent = firstOperand + ' ' + (currentOperator || ' ');
 } else {
  if (secondOperand === '0' || secondOperand === '') {
    secondOperand = value;
  } else {
    secondOperand += value;
  }
  display.textContent = firstOperand + ' ' + currentOperator + ' ' + secondOperand;
 }
}


numbersButton.forEach(button => {
  button.addEventListener('click',function () {
    populateScreen(button.value);
  });
});

operatorsButton.forEach(button => {
  button.addEventListener('click', function(value) {
    if (currentOperator && !waitingForSecondOperand) {
      currentOperator = button.value;
      display.textContent = firstOperand + ' ' + currentOperator;
    } else if (firstOperand !== '') {
      currentOperator = button.value;
      waitingForSecondOperand = true;
      display.textContent = firstOperand + ' ' + currentOperator;
    }
  });
})


equalsButton.addEventListener('click', () => {
  answer = operate(firstOperand, secondOperand, currentOperator);
  result.textContent = answer;
});


function deleteNumber() {
  if (waitingForSecondOperand && secondOperand !== '') {
    secondOperand = secondOperand.slice(0, -1);
    display.textContent = firstOperand + ' ' + currentOperator + ' ' + secondOperand;
  } else if (!waitingForSecondOperand && currentOperator !== '') {
   currentOperator = '';
   display.textContent = firstOperand;

  } else if (!waitingForSecondOperand && firstOperand !== '') {
    firstOperand = firstOperand.slice(0, -1);
    display.textContent = firstOperand;
  }
}

clearScreenButton.addEventListener('click', function() {
  location.reload();
});

deleteButton.addEventListener('click', deleteNumber);