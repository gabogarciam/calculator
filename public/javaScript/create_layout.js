class Layout {
  constructor(nameIdKeys) {
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

    for (let i = 0; i < Object.keys(this.nameIdKeys).length; i += 1) {
      const elem = document.createElement('button');
      elem.classList.add('btn');

      if (this.nameIdKeys[i] >= 0 && this.nameIdKeys[i] <= 9) {
        elem.classList.add(`key${this.nameIdKeys[i]}`);
        elem.setAttribute('value', this.nameIdKeys[i]);
        elem.innerText = this.nameIdKeys[i];
        upcell.appendChild(elem);
      } else if (
        this.nameIdKeys[i].action === 'divide' ||
        this.nameIdKeys[i].action === 'erase' ||
        this.nameIdKeys[i].action === 'multiply' ||
        this.nameIdKeys[i].action === 'subtract' ||
        this.nameIdKeys[i].action === 'add'
      ) {
        this.keys.appendChild(lastcell);
        elem.classList.add('key_operator');
        elem.setAttribute('data-action', this.nameIdKeys[i].action);
        elem.innerText = this.nameIdKeys[i].value;
        lastcell.appendChild(elem);
      } else {
        elem.classList.add('key_operator');
        elem.setAttribute('data-action', this.nameIdKeys[i].action);
        elem.innerText = this.nameIdKeys[i].value;
        upcell.appendChild(elem);
      }
    }
  }
}

module.exports = Layout;
