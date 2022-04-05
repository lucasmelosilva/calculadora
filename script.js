const currentOperandTextElement = document.querySelector('[data-current]');
const previousOperandTextElement = document.querySelector('[data-previous]');
const numberButtons = document.querySelectorAll('[data-number]');
const operatorButtons = document.querySelectorAll('[data-operator]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
class Calculator {
  constructor(currentOperandTextElement, previousOperandTextElement) {
    this.currentOperandTextElement = currentOperandTextElement;
    this.previousOperandTextElement = previousOperandTextElement;
    this.clear()
  }

  appendNumber(number) {
    if (this.currentOperand.includes('.') && number === '.') return;
    this.currentOperand += number.toString();
  }

  calculate() {
    let result;

    let _previousOperand = parseFloat(this.previousOperand);
    let _currentOperand = parseFloat(this.currentOperand);

    if (isNaN(_currentOperand) || isNaN(_previousOperand)) return;

    switch (this.operation) {
      case '+':
        result = _previousOperand + _currentOperand;
        break;
      case '-':
        result = _previousOperand - _currentOperand;
        break;
      case '÷':
        result = _previousOperand / _currentOperand;
        break;
      case 'x':
        result = _previousOperand * _currentOperand;
        break;
      default:
        return;
    }

    this.currentOperand = result.toString();
    this.operation = undefined;
    this.previousOperand = ''
  }

  chooseOperation(operation) {
    if (this.operation) {
      this.calculate()
    }

    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.slice(0, -1);
  }

  updateDisplay() {
    this.previousOperandTextElement.innerHTML = `${this.previousOperand}  ${this.operation || ''}`;
    this.currentOperandTextElement.innerHTML = this.currentOperand;
  }
}

const calculator = new Calculator(currentOperandTextElement, previousOperandTextElement);

allClearButton.addEventListener('click', () => {
  calculator.clear();
  calculator.updateDisplay();
})

deleteButton.addEventListener('click', () => {
  calculator.delete();
  calculator.updateDisplay();
})

equalsButton.addEventListener('click', () => {
  calculator.calculate();
  calculator.updateDisplay();
})

for (let buttonNumber of numberButtons) {
  buttonNumber.addEventListener('click', () => {
    calculator.appendNumber(buttonNumber.innerText);
    calculator.updateDisplay();
  })
}

for (let operatorButton of operatorButtons) {
  operatorButton.addEventListener('click', () => {
    calculator.chooseOperation(operatorButton.innerText);
    calculator.updateDisplay();
  });
}