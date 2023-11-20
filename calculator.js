let number = "";
let firstOperand = "";
let secondOperand = "";
let operator = undefined;
let expressionEvaluated = false;


function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

function calculate(operator, a, b){
    if(operator == '+') return add(a,b);
    if(operator == '-') return subtract(a,b);
    if(operator == '*') return multiply(a,b);
    if(operator == '/') return divide(a,b);  
}

function updateOperand(number){
    if(!operator){
        firstOperand = firstOperand + number;
        updateDisplay(firstOperand);
    }
    else{
        secondOperand = secondOperand + number;
        updateDisplay(secondOperand);
    } 
}

function updateOperator(currentOperator){
    if(!firstOperand){
        return;
    }
    if(operator && secondOperand)
    {
        evaluateExpression();
    }
    operator = currentOperator;
    updateDisplay(operator);   
}

function evaluateExpression(){
   result = calculate(operator,Number(firstOperand),Number(secondOperand));
   firstOperand = "";
   secondOperand = "";
   operator = undefined;
   expressionEvaluated = true;
   updateOperand(result);
   expressionEvaluated = false;
}

function updateDisplay(value){
    let currentElement = undefined;
    /// TODO See if there is popruse to this if statment
    if(secondOperand){
        currentElement = document.querySelector('#second-operand');
    }
////// TODO I need way to make sure display is cleaned once result is passed after epxression evauluation 
    if(value == '+' || value == '-' || value == '*'  || value == '/')
    {
        currentElement = document.querySelector('#operator');
        if(currentElement.innerText)
        {
            currentElement.innerText = "";
        }
    }
    // its only necessary to check if there is first operand because first if statement makes sure that it cant be operator
    else if (operator){
        currentElement = document.querySelector('#second-operand');
    }
    else{
        /// make sure operator is cleaned too correctly
        if(expressionEvaluated == true)
        {
            currentElement = document.querySelector('#first-operand');
            currentElement.innerText = "";
            currentElement = document.querySelector('#operator');
            currentElement.innerText = "";
            currentElement = document.querySelector('#second-operand');
            currentElement.innerText = "";
        }
        currentElement = document.querySelector('#first-operand');
    }
    currentElement.innerText = value; 
}

            
let numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(numberButton => { numberButton.addEventListener('click', () => updateOperand(numberButton.innerText))
});

let operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(operatorButton => { operatorButton.addEventListener('click', () => updateOperator(operatorButton.innerText))
});

let equalButton = document.querySelector('#equal');
equalButton.addEventListener('click',() => evaluateExpression());




