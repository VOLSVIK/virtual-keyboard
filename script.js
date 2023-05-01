let dataKey = [['Backquote', '`', '`'],['Digit1', '1', '1'],['Digit2', '2', '2'],
['Digit3', '3', '3'],['Digit4', '4', '4'],['Digit5', '5', '5'],
['Digit6', '6', '6'],['Digit7', '7', '7'],['Digit8', '8', '8'],
['Digit9', '9', '9'],['Digit0', '0', '0'],['Minus', '-', '-'],
['Equal', '=', '='],['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],
['Tab', 'Tab', 'Tab'],['KeyQ', 'q', 'Q'],['KeyW', 'w', 'W'],
['KeyE', 'e', 'E'],['KeyR', 'r', 'R'],['KeyT', 't', 'T'],
['KeyY', 'y', 'Y'],['KeyU', 'u', 'U'],['KeyI', 'i', 'I'],
['KeyO', 'o', 'O'],['KeyP', 'p', 'P'],['BracketLeft', '[', '['],
['BracketRight', ']', ']'],['Backslash', '\\', '\\'],['Delete', 'Delete', 'Delete'],
['CapsLock', 'CapsLock', 'CapsLock'],['KeyA', 'a', 'A'],['KeyS', 's', 'S'],
['KeyD', 'd', 'D'],['KeyF', 'f', 'F'],['KeyG', 'g', 'G'],['KeyH', 'h', 'H'],
['KeyJ', 'j', 'J'],['KeyK', 'k', 'K'],['KeyL', 'l', 'L'],
['Semicolon', ';', ';'],['Quote', "'", "'"],['Enter', 'Enter', 'Enter'],
['ShiftLeft', 'Shift', 'Shift'],['KeyZ', 'z', 'Z'],['KeyX', 'x', 'X'],
['KeyC', 'c', 'C'],['KeyV', 'v', 'V'], ['KeyB', 'b', 'B'],
['KeyN', 'n', 'N'],['KeyM', 'm', 'M'],['Comma', ',', ','],['Period', '.', '.'],
['Slash', '/', '/'],['ArrowUp', '&uarr;', '&uarr;'],
['ShiftRight', 'Shift', 'Shift'],['ControlLeft', 'Control', 'Control'],
['AltLeft', 'Alt', 'Alt'],['Space', ' ', ' '], ['AltRight', 'Alt', 'Alt'],
['ArrowLeft', '&larr;', '&larr;'],['ArrowDown', '&darr;', '&darr;'],
['ArrowRight', '&rarr;', '&rarr;'],['ControlRight', 'Control', 'Control']]

let keyNode = ''
keyNode = '<textarea class="display" id="story" rows="5" cols="30"></textarea><div class="keyboardModel"></div>';
document.querySelector('body').innerHTML = keyNode
keyNode = '<div class="keyboardRow01"></div><div class="keyboardRow02"></div><div class="keyboardRow03"></div><div class="keyboardRow04"></div><div class="keyboardRow05"></div>'
document.querySelector('.keyboardModel').innerHTML = keyNode
keyNode = ''
for (let i = 0; i < 14; i++) {
  keyNode += '<div class="keyModel" data="' + dataKey[i][0] + '">' + dataKey[i][1] + '</div>';
}
document.querySelector('.keyboardRow01').innerHTML = keyNode;
keyNode = ''
for (let i = 14; i < 29; i++) {
  keyNode += '<div class="keyModel" data="' + dataKey[i][0] + '">' + dataKey[i][1] + '</div>';
}
document.querySelector('.keyboardRow02').innerHTML = keyNode;
keyNode = ''
for (let i = 29; i < 42; i++) {
  keyNode += '<div class="keyModel" data="' + dataKey[i][0] + '">' + dataKey[i][1] + '</div>';
}
document.querySelector('.keyboardRow03').innerHTML = keyNode;
keyNode = ''
for (let i = 42; i < 55; i++) {
  keyNode += '<div class="keyModel" data="' + dataKey[i][0] + '">' + dataKey[i][1] + '</div>';
}
document.querySelector('.keyboardRow04').innerHTML = keyNode;
keyNode = ''
for (let i = 55; i < 63; i++) {
  keyNode += '<div class="keyModel" data="' + dataKey[i][0] + '">' + dataKey[i][1] + '</div>';
}
document.querySelector('.keyboardRow05').innerHTML = keyNode;

let cursorPosition =  {
  'start': 0,
  'end': 0
};
var getText = document.getElementById("story");
    let kkk = ''
    let numKey = 0
    let switchKey = 1

document.addEventListener('keydown', function(e) {
  if ('ShiftLeft' == e.code || 'ShiftRight' == e.code) {
    switchKey = 2
    document.querySelectorAll('.keyboardModel .keyModel').forEach((n, i) => {
      // n.classList.remove('activ')
      if (n.getAttribute('data') == e.code) {
        numKey = i
      }
        n.innerHTML = dataKey[i][2]
    });
  } else {
    // switchKey = 1
  }
  document.querySelector('.keyboardModel .keyModel[data="' + dataKey[numKey][0] + '"]').classList.add('activ')
  numKey = 0
})
document.addEventListener('keyup', function(e) {
  if ('ShiftLeft' == e.code || 'ShiftRight' == e.code) {
    switchKey = 1
    document.querySelectorAll('.keyboardModel .keyModel').forEach((n, i) => {
      // console.log(7777777)
      n.classList.remove('activ')
      // if (n.getAttribute('data') == e.code) {
      //   numKey = i
      // }
        n.innerHTML = dataKey[i][switchKey]
        // n.textContent = dataKey[i][1]
    });
  } else {
    // switchKey = 2
  }
  // document.querySelector('.displ .knop[data="' + dataKey[numKey][0] + '"]').classList.add('activ')
  numKey = 0
})
  // document.addEventListener("keypress", function (params) {
document.onkeypress = function (params) {
   numKey = 0
    kkk = params.key
    document.querySelectorAll('.keyboardModel .keyModel').forEach((n, i) => {
      // console.log(n.getAttribute('data'))
      if ('ShiftLeft' != n.getAttribute('data') || 'ShiftRight' != n.getAttribute('data')) {
      n.classList.remove('activ')
      }
      if (n.getAttribute('data') == params.code) {
        numKey = i
      }
    });

    document.querySelector('.keyboardModel .keyModel[data="' + dataKey[numKey][0] + '"]').classList.add('activ')
            getCursorPosition(getText)
            let sub1 = getText.value.substr(0, cursorPosition.start);
            let sub2 = getText.value.substr(cursorPosition.start);
            if (41 == numKey || 28 == numKey) {
              return true
            } else {
            document.querySelector('.display').value = sub1 + dataKey[numKey][switchKey] + sub2
            getText.setSelectionRange(cursorPosition.start + 1, cursorPosition.end + 1);
            }
           return false
};

  document.addEventListener('keyup', function(e) {
    
  // console.log(7777777)
  document.querySelectorAll('.keyboardModel .keyModel').forEach(n => {
    if ('ShiftLeft' != n.getAttribute('data') || 'ShiftRight' != n.getAttribute('data')) {
      // console.log(n.getAttribute('data'))
          n.classList.remove('activ')
    }

  });
})

function getCursorPosition(ctrl) {
  cursorPosition.start = ctrl.selectionStart
  cursorPosition.end = ctrl.selectionEnd
  // console.log(cursorPosition)
  // console.log(getText.value)
  // console.log(getText.value.length)
    return cursorPosition
}



// ввод с эрана==========================
document.querySelectorAll('.keyboardModel .keyModel').forEach(n => {
  n.onclick = function (params) {
    document.querySelectorAll('.keyboardModel .keyModel').forEach((n,i) => {
      if ('ShiftLeft' != n.getAttribute('data') || 'ShiftRight' != n.getAttribute('data')) {
        // console.log(n.getAttribute('data'))
                  // proba.push([n.getAttribute('data'),i])
        n.classList.remove('activ')
        }
      if (n.getAttribute('data') == params.code) {
        numKey = i
        // console.log(n.getAttribute('data'))
      }
    });
  // console.log(proba)
    let clikLit = this.textContent
    this.classList.add('activ')
    getCursorPosition(getText)
    let sub1 = getText.value.substr(0, cursorPosition.start);
    let sub2 = getText.value.substr(cursorPosition.start);
document.querySelector('.display').value = sub1 + clikLit + sub2
getText.setSelectionRange(cursorPosition.start + 1, cursorPosition.end + 1);
          numKey = 0
 setTimeout(() => {
  this.classList.remove('activ')   
      }, 50); 
  }
});