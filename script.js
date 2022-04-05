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

deleteButton.addEventListener('click', deleteExpression); // Delete number

allClearButton.addEventListener('click', allClearDipslay); // All clear

equalsButton.addEventListener('click', calculate); // Equals

operatorButtons.forEach(button => {
  button.addEventListener('click', () => {
    addExpression(button.innerText);
    addExpressionPrevious()    
  })
})

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
    showValue();
  }

  joinExpression();
  showValue();
 
}

function addExpressionPrevious() {
  b = a;
  a = '';
  showValue();
}

function deleteExpression() {
  expression.pop();

  a = ''

  joinExpression()

}

function joinExpression() {
 
  for(let i of expression) {
    a += i;
  }

  showValue();
}

function allClearDipslay() {
  a = '';
  b = '';
  expression = [];
  ans = expression;
  showValue();
}

function showValue() {
  currentOperand.innerText = a;
  previousOperand.innerText = b;
}

function calculate() {
  let result = eval(expression.join(''));
  result;
  expression = [];
  expression.push(result);
  currentOperand.innerHTML = result;
}