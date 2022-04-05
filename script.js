const currentOperand = document.querySelector('[data-current]');
const previousOperand = document.querySelector('[data-previous]');
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');

let expression = [];
let a = '';
let b = '';

deleteButton.addEventListener('click', deleteExpression);
allClearButton.addEventListener('click', allClearDipslay);

numberButtons.forEach(numberButton => {
  numberButton.addEventListener('click', () => {
    let value = numberButton.innerText;
    addExpression(value);
    console.log(expression);
  })
});


function addExpression(value) {
  expression.push(value);

  if(expression.length != 1) {
    a = ''
    currentOperand.innerText = a;
  }

  joinExpression();
 
}


function deleteExpression() {
  expression.pop();
  console.log(expression);

  a = ''

  joinExpression()

  currentOperand.innerText = a;
}

function joinExpression() {
 
  for(let i of expression) {
    a += i;
  }
  currentOperand.innerText = a;
}

function allClearDipslay() {
  a = '';
  b = '';
  expression = [];
  currentOperand.innerText = a;
  previousOperand.innerText = b;
}