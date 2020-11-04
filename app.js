import Layout from './public/javaScript/create_layout';
import './public/stylesheets/styles.scss';
import './favicon.ico';

const nameIdKeys = require('./public/json/nameIdKeys.json');

const ui = new Layout(nameIdKeys);
ui.calculatorLayout();

const keysEvent = document.querySelector('.keys_calculator');
const displayNumber = document.querySelector('.display_calculator .number');
// const displayResult = document.querySelector('.display_calculator .result');

keysEvent.addEventListener('click', (e) => {
  if (e.target.matches('button')) {
    const key = e.target;
    const { action } = key.dataset;
    const keyContent = key.textContent;
    const displayedNum = displayNumber.textContent;

    if (!action) {
      if (displayedNum === '0') {
        displayNumber.textContent = keyContent;
      } else {
        displayNumber.textContent = displayedNum + keyContent;
      }
      console.log(`${key.value} number key!`);
    } else if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
      console.log(`${action} operator key!`);
    } else if (action === 'decimal') {
      if (displayNumber.textContent.includes('.')) {
        displayNumber.textContent = `${displayedNum}`;
      } else {
        displayNumber.textContent = `${displayedNum}.`;
      }
      console.log(`${action} key!`);
    } else if (action === 'equal') {
      console.log(`${action} key!`);
    } else if (action === 'erase') {
      console.log(`${action} key!`);
      displayNumber.textContent = '0';
    }
  }
});
