require('./public/stylesheets/styles.scss');

const nameIdKeys = {
    0: '7',
    1: '8',
    2: '9',
    3: {
        action: 'erase',
        value: 'AC'
    },
    4: '4',
    5: '5',
    6: '6',
    7: {
        action: 'divide',
        value: '/'
    },
    8: '1',
    9: '2',
    10: '3',
    11: {
        action: 'multiply',
        value: '*'
    },
    12: '0',
    13: {
        action: 'decimal',
        value: '.'
    },
    14: {
        action: 'equal',
        value: '='
    },
    15: {
        action: 'sustract',
        value: '-'
    },
    16: {
        action: 'add',
        value: '+'
    }
}

const main = document.querySelector('#root-calculator');

['display_calculator', 'keys_calculator'].forEach(elem => {
    const div = document.createElement('div');
    div.classList.add(elem);
    main.appendChild(div);
});

document.querySelector('.display_calculator').innerText = '0';
const keys = document.querySelector('.keys_calculator');
const lastcell = document.createElement('div');
lastcell.classList.add('last_grid');



for (let i = 0; i < Object.keys(nameIdKeys).length; i++) {
    const elem = document.createElement('button');
    elem.classList.add('btn');
    
    if (nameIdKeys[i] >= 0 && nameIdKeys[i] <= 9) {
        elem.classList.add('key' + nameIdKeys[i]);
        elem.setAttribute('value', nameIdKeys[i])
        elem.innerText = nameIdKeys[i];
        keys.appendChild(elem);
    } else if (nameIdKeys[i].action == 'sustract' || nameIdKeys[i].action == 'add') {
        if (nameIdKeys[i].action == 'sustract') {
            // elem.classList.add('fas');
            // elem.classList.add('fa-minus');
        } else {
            // elem.classList.add('fas');
            // elem.classList.add('fa-plus');
        }
        keys.appendChild(lastcell);
        elem.classList.add('key_operator');
        elem.setAttribute('data-action', nameIdKeys[i].action);
        elem.innerText = nameIdKeys[i].value;
        lastcell.appendChild(elem);
    }  else {
        elem.classList.add('key_operator');
        elem.setAttribute('data-action', nameIdKeys[i].action);
        elem.innerText = nameIdKeys[i].value;
        keys.appendChild(elem);
    }
}

const keysEvent =  document.querySelector('.keys_calculator');

keysEvent.addEventListener('click', (e) => {
    if (e.target.matches('button')) {
        let val = e.path[0].getAttribute('value') ? e.path[0].value : e.path[0].getAttribute('data-action');
        console.log(val);
    }
});

addEventListener('keydown', (e) => {
    console.log(e);
});
