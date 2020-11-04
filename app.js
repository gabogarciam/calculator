import Layout from './public/javaScript/create_layout';

import './public/stylesheets/styles.scss';

const nameIdKeys = require('./public/json/nameIdKeys.json');

const ui = new Layout(nameIdKeys);

ui.calculatorLayout();

const keysEvent = document.querySelector('.keys_calculator');
const display = document.querySelector('.display_calculator');

keysEvent.addEventListener('click', (e) => {
  if (e.target.matches('button')) {
    const key = e.target;
    const { action } = key.dataset;
    const keyContent = key.textContent;
    const displayedNum = display.textContent;

    if (!action) {
      if (displayedNum === '0') {
        display.textContent = keyContent;
      } else if (display.textContent.length < 20) {
        display.textContent = displayedNum + keyContent;

        if (display.textContent.length === 8) {
          display.classList.add('-long');
        } else if (display.textContent.length === 13) {
          display.classList.remove('-long');
          display.classList.add('-medium');
        } else if (display.textContent.length === 17) {
          display.classList.remove('-medium');
          display.classList.add('-small');
        }
      }
      console.log(`${key.value} number key!`);
    } else if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
      console.log(`${action} operator key!`);
    } else if (action === 'decimal') {
      if (display.textContent.includes('.')) {
        display.textContent = `${displayedNum}`;
      } else {
        display.textContent = `${displayedNum}.`;
      }
      console.log(`${action} key!`);
    } else if (action === 'equal') {
      console.log(`${action} key!`);
    } else if (action === 'erase') {
      console.log(`${action} key!`);
      display.classList.remove('-long', '-medium', '-small');
      display.textContent = '0';
    }
  }
});
