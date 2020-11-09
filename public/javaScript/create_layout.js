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

    this.display = document.querySelector('.display_calculator');

    ['result', 'number'].forEach((elem) => {
      const div = document.createElement('div');
      div.classList.add(elem);
      this.display.appendChild(div);
    });

    this.display.querySelector('.number').innerText = '0';
    this.display.querySelector('.result').innerText = 'Ans = 0';

    this.keys = document.querySelector('.keys_calculator');

    const div = document.createElement('div');
    div.classList.add('numbersCells');
    this.keys.appendChild(div);

    this.numbersCells = document.querySelector('.numbersCells');

    for (let i = 0; i < Object.keys(this.nameIdKeys).length; i += 1) {
      const elem = document.createElement('button');
      elem.classList.add('btn');

      if (this.nameIdKeys[i] >= 0 && this.nameIdKeys[i] <= 9) {
        elem.classList.add(`key${this.nameIdKeys[i]}`);
        elem.setAttribute('value', this.nameIdKeys[i]);
        elem.innerText = this.nameIdKeys[i];
        this.numbersCells.appendChild(elem);
      } else {
        elem.classList.add('key_operator');
        elem.setAttribute('data-action', this.nameIdKeys[i].action);
        elem.innerText = this.nameIdKeys[i].value;
        this.numbersCells.appendChild(elem);
      }
    }
  }
}

module.exports = Layout;
