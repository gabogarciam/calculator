import Layout from './public/javaScript/create_layout';
import './public/stylesheets/styles.scss';
import './favicon.ico';

const nameIdKeys = require('./public/json/nameIdKeys.json');

const ui = new Layout(nameIdKeys);
ui.calculatorLayout();

const keysEvent = document.querySelector('.keys_calculator');
const displayNumber = document.querySelector('.display_calculator .number');
const displayResult = document.querySelector('.display_calculator .result');

keysEvent.addEventListener('click', (e) => {
  if (e.target.matches('button')) {
    const key = e.target;
    const { action } = key.dataset;
    const keyContent = key.textContent;
    const displayedNum = displayNumber.textContent;
    const arrayNumber = displayedNum.split(' ');

    if (!action) {
      if (displayedNum === '0') {
        displayNumber.textContent = keyContent;
      } else {
        displayNumber.textContent = displayedNum + keyContent;
      }
    } else if (
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide' ||
      action === 'decimal'
    ) {
      if (arrayNumber[arrayNumber.length - 1] === '') arrayNumber.pop();
      if (
        arrayNumber[arrayNumber.length - 1] !== '+' &&
        arrayNumber[arrayNumber.length - 1] !== '-' &&
        arrayNumber[arrayNumber.length - 1] !== 'x' &&
        arrayNumber[arrayNumber.length - 1] !== '÷'
      ) {
        if (action === 'add') {
          displayNumber.textContent = `${displayedNum} + `;
        } else if (action === 'subtract') {
          displayNumber.textContent = `${displayedNum} - `;
        } else if (action === 'multiply') {
          displayNumber.textContent = `${displayedNum} x `;
        } else if (action === 'divide') {
          displayNumber.textContent = `${displayedNum} ÷ `;
        } else if (action === 'decimal') {
          if (arrayNumber[arrayNumber.length - 1].includes('.')) {
            displayNumber.textContent = `${displayedNum}`;
          } else {
            displayNumber.textContent = `${displayedNum}.`;
          }
        }
      }
    } else if (action === 'opening_parenthesis') {
      console.log(`${action} key!`);
    } else if (action === 'closing_parenthesis') {
      console.log(`${action} key!`);
    } else if (action === 'percentage') {
      displayNumber.textContent = `${displayedNum}%`;
    } else if (action === 'equal') {
      let exp = displayedNum;
      exp = exp.replaceAll('÷', '/');
      exp = exp.replaceAll('x', '*');
      exp = exp.replace(/[^0-9%^x/()\-+.*]/g, '');
      const sum = eval(exp);
      displayResult.textContent = `Ans = ${sum}`;
    } else if (action === 'erase') {
      displayNumber.textContent = '0';
    }
  }
});
