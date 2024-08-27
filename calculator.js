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

      display.textContent = firstOperand + ' ' + currentOperator + ' ' + secondOperand;
    } else {
      firstOperand += number;
      display.textContent = firstOperand;
    }
  });
});

operatorsButton.forEach(button => {
  button.addEventListener('click', function() {
    const newOperator = button.value;

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