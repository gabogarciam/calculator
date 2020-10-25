const nameIdKeys = require('./nameIdKeys.json');

class Layout {
  constructor() {
    this.main = document.querySelector('#root-calculator');
    this.nameIdKeys = nameIdKeys;
  }

  calculatorLayout() {
    ['display_calculator', 'keys_calculator'].forEach((elem) => {
      const div = document.createElement('div');
      div.classList.add(elem);
      this.main.appendChild(div);
    });

    document.querySelector('.display_calculator').innerText = '0';
    this.keys = document.querySelector('.keys_calculator');

    const upcell = document.createElement('div');
    upcell.classList.add('up_grid');
    this.keys.appendChild(upcell);

    const lastcell = document.createElement('div');
    lastcell.classList.add('last_grid');

    for (let i = 0; i < Object.keys(nameIdKeys).length; i += 1) {
      const elem = document.createElement('button');
      elem.classList.add('btn');

      if (nameIdKeys[i] >= 0 && nameIdKeys[i] <= 9) {
        elem.classList.add(`key${nameIdKeys[i]}`);
        elem.setAttribute('value', nameIdKeys[i]);
        elem.innerText = nameIdKeys[i];
        upcell.appendChild(elem);
      } else if (
        nameIdKeys[i].action === 'erase' ||
        nameIdKeys[i].action === 'divide' ||
        nameIdKeys[i].action === 'multiply' ||
        nameIdKeys[i].action === 'subtract' ||
        nameIdKeys[i].action === 'add'
      ) {
        this.keys.appendChild(lastcell);
        elem.classList.add('key_operator');
        elem.setAttribute('data-action', nameIdKeys[i].action);
        elem.innerText = nameIdKeys[i].value;
        lastcell.appendChild(elem);
      } else {
        elem.classList.add('key_operator');
        elem.setAttribute('data-action', nameIdKeys[i].action);
        elem.innerText = nameIdKeys[i].value;
        upcell.appendChild(elem);
      }
    }
  }
}

module.exports = Layout;
