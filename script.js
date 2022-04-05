const currentOperand = document.querySelector('[data-current]');
const previousOperand = document.querySelector('[data-previous]');
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');

let expression = [];
let a = '';

numberButtons.forEach(numberButton => {
  numberButton.addEventListener('click', () => {
    let value = numberButton.innerText;
    addExpression(value);
  })
});


function addExpression(value) {
  expression.push(value);

  if(expression.length != 1) {
    a = ''
    currentOperand.innerText = a;
  }

  for(let i of expression) {
    a += i;
  }

  currentOperand.innerText = a;
  console.log(expression);
}

