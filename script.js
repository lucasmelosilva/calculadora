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

  delete() {
    this.currentOperand = this.currentOperand.slice(0, -1)

  }

  clear() {
    this.currentOperand = '54321';
    this.previousOperand = '';
    this.operation = undefined;
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
  calculator.delete()
  calculator.updateDisplay()
})