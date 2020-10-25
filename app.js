import Layout from './public/javaScript/create_layout';
import './public/stylesheets/styles.scss';

const ui = new Layout();

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
      } else {
        display.textContent = displayedNum + keyContent;
      }
      console.log(`${key.value} number key!`);
    } else if (action === 'add' || action === 'subtract' || action === 'multiply' || action === 'divide') {
      console.log(`${action} operator key!`);
    } else if (action === 'decimal') {
      display.textContent = `${displayedNum}.`;
      console.log(`${action} key!`);
    } else if (action === 'clear') {
      console.log(`${action} key!`);
    } else if (action === 'equal') {
      console.log(`${action} key!`);
    } else if (action === 'erase') {
      console.log(`${action} key!`);
    }
    // const val = e.path[0].getAttribute('value') ? e.path[0].value : e.path[0].getAttribute('data-action');
    // console.log(val);
  }
});
