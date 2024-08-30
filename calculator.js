let firstOperand = '';
let secondOperand = '';
let currentOperator = null;
let waitingForSecondOperand = false;
let hasDecimal = false;
let hasDecimalForFirstOperand = false;
let hasDecimalForSecondOperand = false;

const display = document.querySelector('#user-input');
const result = document.querySelector('#result');
const deleteButton = document.querySelector('#delete');
const clearScreenButton = document.querySelector('#clear');
const numbersButton = document.querySelectorAll('.numbers');
const operatorsButton = document.querySelectorAll('.operators');
const equalsButton = document.querySelector('#equals');
const pointButton = document.querySelector('#point');


function operate(first, second, operator) {
  const num1 = parseFloat(first);
  const num2 = parseFloat(second);

  switch(operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 = 0){
        return 'ERROR';
      }else {
        return num1 / num2;
      }
      case '%':
        return num1 / 100;
    default:
      return 'ERROR';
  }
}


numbersButton.forEach(button => {
  button.addEventListener('click',function () {
    const number = button.value;

    if (waitingForSecondOperand) {
      secondOperand += number;

      // When the user has entered the first operand, second operand, and the operator
      display.textContent = firstOperand + ' ' + currentOperator + ' ' + secondOperand;
    } else {
      // If the user is now entering the first operand
      firstOperand += number;
      display.textContent = firstOperand;
    }
  });
});

operatorsButton.forEach(button => {
  button.addEventListener('click', function() {
    const newOperator = button.value;

    pointButton.disabled = false;
    if (firstOperand !== '' && secondOperand !== '' && currentOperator) {
      //Perform the calculation using the first operand, second operand, and the current operator
      const answer = operate(firstOperand, secondOperand, currentOperator);
      result.textContent = answer;

      display.textContent = answer + ' ' + newOperator;
      firstOperand = answer;
      // Clear the second operand
      secondOperand = '';

      currentOperator = newOperator;
    } else if (firstOperand !== '') {
      currentOperator = newOperator;
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

pointButton.addEventListener('click', function () {
  const point = pointButton.value;

  if (!waitingForSecondOperand) {
    if (!hasDecimalForFirstOperand) {
      firstOperand += point;
      display.textContent = firstOperand;
      hasDecimalForFirstOperand = true;
      //pointButton.disabled = true;
    }
  } else {
    if (!hasDecimalForSecondOperand) {
      secondOperand += point;
      display.textContent = firstOperand + ' ' + currentOperator + ' ' + secondOperand;
      hasDecimalForSecondOperand = true;
      //pointButton.disabled = true;
    }
  }
  pointButton.disabled = true;
});


document.addEventListener('keydown', function(event) {
  const key = event.key;
  if (key === 'Enter') {
    operate(firstOperand, secondOperand, currentOperator);
  } else if (key === 'Escape') {
    this.location.reload();
  }
});