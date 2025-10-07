'use strict';
const userInput=document.getElementById('calculation');
const btn=document.getElementById('start');
const resultParagraph=document.getElementById('result');

btn.addEventListener('click',()=>{
    const expression=userInput.value.trim();
    let result;
    let num1, num2;

    if (expression.includes('+')) {
        const parts = expression.split('+');
        num1 = parseInt(parts[0]);
        num2 = parseInt(parts[1]);
        result = num1 + num2;

    } else if (expression.includes('-')) {
        const parts = expression.split('-');
        num1 = parseInt(parts[0]);
        num2 = parseInt(parts[1]);
        result = num1 - num2;

    } else if (expression.includes('*')) {
        const parts = expression.split('*');
        num1 = parseInt(parts[0]);
        num2 = parseInt(parts[1]);
        result = num1 * num2;

    } else if (expression.includes('/')) {
        const parts = expression.split('/');
        num1 = parseInt(parts[0]);
        num2 = parseInt(parts[1]);
        if (num2 === 0) {
        resultParagraph.textContent = 'Cannot divide by zero.';
        return;
        }
        result = num1 / num2;

    } else {
        resultParagraph.textContent = 'Invalid expression only use +, -, *, or /.';
        return;
    }
    if (isNaN(num1) || isNaN(num2)) {
    resultParagraph.textContent = 'Please enter the integers.';
    return;
  }

  resultParagraph.textContent = `Result: ${result}`;

});