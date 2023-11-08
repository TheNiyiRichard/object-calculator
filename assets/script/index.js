const output = document.getElementById('output');
const buttons = document.querySelectorAll('button');

let currentOperand = '';
let previousOperand = '';
let currentOperator = null;

function clear() {
    currentOperand = '';
    previousOperand = '';
    currentOperator = null;
}

function appendNumber(number) {
    if (number === '.' && currentOperand.includes('.')) return;
    currentOperand += number;
}

function chooseOperator(operator) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        compute();
    }
    currentOperator = operator;
    previousOperand = currentOperand;
    currentOperand = '';
}

function compute() {
    let result;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(current)) return;
    switch (currentOperator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentOperand = result.toString();
    currentOperator = null;
    previousOperand = '';
}

function updateDisplay() {
    output.innerText = currentOperand;
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === 'clear') {
            clear();
            updateDisplay();
        } else if (button.id === 'reset') {
            clear();
            updateDisplay();
        } else if (button.id === 'delete') {
            currentOperand = currentOperand.slice(0, -1);
            updateDisplay();
        } else if (button.classList.contains('operator')) {
            chooseOperator(button.innerText);
        } else if (button.id === 'equals') {
            compute();
            updateDisplay();
        } else {
            appendNumber(button.innerText);
            updateDisplay();
        }
    });
});

clear();
updateDisplay();
