const dataKey = [['Backquote', '`', '~', 'ё', 'Ё'], ['Digit1', '1', '!', '1', '!'],
  ['Digit2', '2', '@', '2', '"'], ['Digit3', '3', '#', '3', '№'], ['Digit4', '4', '$', '4', ';'],
  ['Digit5', '5', '%', '5', '%'], ['Digit6', '6', '^', '6', ':'], ['Digit7', '7', '&', '7', '?'],
  ['Digit8', '8', '*', '8', '*'], ['Digit9', '9', '(', '9', '('], ['Digit0', '0', ')', '0', ')'],
  ['Minus', '-', '_', '-', '_'], ['Equal', '=', '+', '=', '+'],
  ['Backspace', 'Backspace', 'Backspace', 'Backspace', 'Backspace'],
  ['Tab', 'Tab', 'Tab', 'Tab', 'Tab'], ['KeyQ', 'q', 'Q', 'й', 'Й'], ['KeyW', 'w', 'W', 'ц', 'Ц'],
  ['KeyE', 'e', 'E', 'у', 'У'], ['KeyR', 'r', 'R', 'к', 'К'], ['KeyT', 't', 'T', 'е', 'Е'],
  ['KeyY', 'y', 'Y', 'н', 'Н'], ['KeyU', 'u', 'U', 'г', 'Г'], ['KeyI', 'i', 'I', 'ш', 'Ш'],
  ['KeyO', 'o', 'O', 'щ', 'Щ'], ['KeyP', 'p', 'P', 'з', 'З'], ['BracketLeft', '[', '{', 'х', 'Х'],
  ['BracketRight', ']', '}', 'ъ', 'Ъ'], ['Backslash', '\\', '|', '\\', '/'],
  ['Delete', 'Delete', 'Delete', 'Delete', 'Delete'],
  ['CapsLock', 'CapsLock', 'CapsLock', 'CapsLock', 'CapsLock'], ['KeyA', 'a', 'A', 'ф', 'Ф'],
  ['KeyS', 's', 'S', 'ы', 'Ы'], ['KeyD', 'd', 'D', 'в', 'В'], ['KeyF', 'f', 'F', 'а', 'А'],
  ['KeyG', 'g', 'G', 'п', 'П'], ['KeyH', 'h', 'H', 'р', 'Р'], ['KeyJ', 'j', 'J', 'о', 'О'],
  ['KeyK', 'k', 'K', 'л', 'Л'], ['KeyL', 'l', 'L', 'д', 'Д'], ['Semicolon', ';', ':', 'ж', 'Ж'],
  ['Quote', "'", '"', 'э', 'Э'], ['Enter', 'Enter', 'Enter', 'Enter', 'Enter'],
  ['ShiftLeft', 'Shift', 'Shift', 'Shift', 'Shift'], ['KeyZ', 'z', 'Z', 'я', 'Я'],
  ['KeyX', 'x', 'X', 'ч', 'Ч'], ['KeyC', 'c', 'C', 'c', 'C'], ['KeyV', 'v', 'V', 'м', 'М'],
  ['KeyB', 'b', 'B', 'и', 'И'], ['KeyN', 'n', 'N', 'т', 'Т'], ['KeyM', 'm', 'M', 'ь', 'Ь'],
  ['Comma', ',', '<', 'б', 'Б'], ['Period', '.', '>', 'ю', 'Ю'], ['Slash', '/', '?', '.', ','],
  ['ArrowUp', '&uarr;', '&uarr;', '&uarr;', '&uarr;'], ['ShiftRight', 'Shift', 'Shift', 'Shift', 'Shift'],
  ['ControlLeft', 'Control', 'Control', 'Control', 'Control'], ['AltLeft', 'Alt', 'Alt', 'Alt', 'Alt'],
  ['Space', ' ', ' ', ' ', ' '], ['AltRight', 'Alt', 'Alt', 'Alt', 'Alt'],
  ['ArrowLeft', '&larr;', '&larr;', '&larr;', '&larr;'], ['ArrowDown', '&darr;', '&darr;', '&darr;', '&darr;'],
  ['ArrowRight', '&rarr;', '&rarr;', '&rarr;', '&rarr;'],
  ['ControlRight', 'Control', 'Control', 'Control', 'Control']];

let keyNode = '';
keyNode = '<h1>Виртуальная клавиатура</h1>';
keyNode += '<textarea class="display" id="story" rows="5" cols="30"></textarea><div class="keyboardModel"></div>';
keyNode += '<h4>Клавиатура создана в операционной системе Windows</h4>';
keyNode += '<h4>Для переключения языка комбинация: левыe ctrl + alt</h4>';
document.querySelector('body').innerHTML = keyNode;
keyNode = '<div class="keyboardRow01"></div><div class="keyboardRow02"></div><div class="keyboardRow03"></div><div class="keyboardRow04"></div><div class="keyboardRow05"></div>';
document.querySelector('.keyboardModel').innerHTML = keyNode;
keyNode = '';
for (let i = 0; i < 14; i += 1) {
  keyNode += `<div class="keyModel" data="${dataKey[i][0]}">${dataKey[i][1]}</div>`;
}
document.querySelector('.keyboardRow01').innerHTML = keyNode;
keyNode = '';
for (let i = 14; i < 29; i += 1) {
  keyNode += `<div class="keyModel" data="${dataKey[i][0]}">${dataKey[i][1]}</div>`;
}
document.querySelector('.keyboardRow02').innerHTML = keyNode;
keyNode = '';
for (let i = 29; i < 42; i += 1) {
  keyNode += `<div class="keyModel" data="${dataKey[i][0]}">${dataKey[i][1]}</div>`;
}
document.querySelector('.keyboardRow03').innerHTML = keyNode;
keyNode = '';
for (let i = 42; i < 55; i += 1) {
  keyNode += `<div class="keyModel" data="${dataKey[i][0]}">${dataKey[i][1]}</div>`;
}
document.querySelector('.keyboardRow04').innerHTML = keyNode;
keyNode = '';
for (let i = 55; i < 63; i += 1) {
  keyNode += `<div class="keyModel" data="${dataKey[i][0]}">${dataKey[i][1]}</div>`;
}
document.querySelector('.keyboardRow05').innerHTML = keyNode;

const cursorPosition = {
  start: 0,
  end: 0,
};
function getCursorPosition(a) {
  cursorPosition.start = a.selectionStart;
  cursorPosition.end = a.selectionEnd;
  return cursorPosition;
}

const getText = document.getElementById('story');
let numKey = 0;
let switchKey = 1;
if (localStorage.getItem('switchKey') != null) {
  switchKey = parseInt(localStorage.getItem('switchKey'), 10);
}
function setLocalStorage() {
  localStorage.setItem('switchKey', switchKey);
}
window.addEventListener('beforeunload', setLocalStorage);
document.querySelectorAll('.keyboardModel .keyModel').forEach((n, i) => {
  n.innerHTML = dataKey[i][switchKey];
});
document.addEventListener('keydown', (e) => {
  if (e.repeat) return;
  const switchAltLeft = document.querySelector('.keyboardModel .keyModel[data="AltLeft"]').classList.contains('activ');
  const switchAltRight = document.querySelector('.keyboardModel .keyModel[data="AltRight"]').classList.contains('activ');
  const switchControlLeft = document.querySelector('.keyboardModel .keyModel[data="ControlLeft"]').classList.contains('activ');
  const switchControlRight = document.querySelector('.keyboardModel .keyModel[data="ControlRight"]').classList.contains('activ');
  if ((e.code === 'AltRight' && switchControlRight) || (e.code === 'AltLeft' && switchControlLeft) || (e.code === 'ControlRight' && switchAltRight) || (e.code === 'ControlLeft' && switchAltLeft)) {
    if (switchKey < 3) {
      switchKey += 2;
    } else {
      switchKey -= 2;
    }
    document.querySelectorAll('.keyboardModel .keyModel').forEach((n, i) => {
      n.innerHTML = dataKey[i][switchKey];
    });
  }
  if (e.code === 'CapsLock') {
    if (switchKey === 1 || switchKey === 3) {
      switchKey += 1;
    } else {
      switchKey -= 1;
    }
    document.querySelectorAll('.keyboardModel .keyModel').forEach((n, i) => {
      if (n.getAttribute('data') === e.code) {
        numKey = i;
      }
      n.innerHTML = dataKey[i][switchKey];
    });
  }
  if (e.code === 'AltLeft') {
    e.preventDefault();
  }
  if (e.code === 'Tab') {
    getCursorPosition(getText);
    const sub1 = getText.value.substr(0, cursorPosition.start);
    const sub2 = getText.value.substr(cursorPosition.start);
    document.querySelector('.display').value = `${sub1}  ${sub2}`;
    getText.setSelectionRange(cursorPosition.start + 2, cursorPosition.end + 2);
    e.preventDefault();
  }
  if (!(document.activeElement === getText)) {
    if (e.code === 'Enter') {
      getCursorPosition(getText);
      const sub1 = getText.value.substr(0, cursorPosition.start);
      const sub2 = getText.value.substr(cursorPosition.start);
      document.querySelector('.display').value = `${sub1}\n${sub2}`;
      getText.setSelectionRange(cursorPosition.start + 1, cursorPosition.end + 1);
    }
    if (e.code === 'Delete') {
      getCursorPosition(getText);
      if (cursorPosition.start < getText.value.length) {
        const sub1 = getText.value.substr(0, cursorPosition.start);
        const sub2 = getText.value.substr(cursorPosition.start + 1);
        document.querySelector('.display').value = sub1 + sub2;
        getText.setSelectionRange(cursorPosition.start, cursorPosition.end);
      }
    }
    if (e.code === 'Backspace') {
      getCursorPosition(getText);
      if (cursorPosition.start !== 0) {
        const sub1 = getText.value.substr(0, cursorPosition.start - 1);
        const sub2 = getText.value.substr(cursorPosition.start);
        document.querySelector('.display').value = sub1 + sub2;
        getText.setSelectionRange(cursorPosition.start - 1, cursorPosition.end - 1);
      }
    }
    if (e.code === 'ArrowUp' || e.code === 'ArrowLeft' || e.code === 'ArrowRight' || e.code === 'ArrowDown') {
      getCursorPosition(getText);
      const sub1 = getText.value.substr(0, cursorPosition.start);
      const sub2 = getText.value.substr(cursorPosition.start);
      document.querySelector('.display').value = sub1 + document.querySelector(`.keyboardModel .keyModel[data="${e.code}"]`).textContent + sub2;
      getText.setSelectionRange(cursorPosition.start + 1, cursorPosition.end + 1);
    }
  }
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    if (switchKey === 1 || switchKey === 3) {
      switchKey += 1;
    } else {
      switchKey -= 1;
    }
    document.querySelectorAll('.keyboardModel .keyModel').forEach((n, i) => {
      if (n.getAttribute('data') === e.code) {
        numKey = i;
      }
      n.innerHTML = dataKey[i][switchKey];
    });
  } else {
    document.querySelectorAll('.keyboardModel .keyModel').forEach((n, i) => {
      if (n.getAttribute('data') === e.code) {
        numKey = i;
      }
    });
  }

  document.querySelector(`.keyboardModel .keyModel[data="${dataKey[numKey][0]}"]`).classList.add('activ');
  numKey = 0;
});
document.addEventListener('keyup', (e) => {
  if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
    if (switchKey === 1 || switchKey === 3) {
      switchKey += 1;
    } else {
      switchKey -= 1;
    }
    document.querySelectorAll('.keyboardModel .keyModel').forEach((n, i) => {
      if (i !== 29) {
        n.classList.remove('activ');
      } else if (switchKey === 1 || switchKey === 3) {
        n.classList.remove('activ');
      }
      n.innerHTML = dataKey[i][switchKey];
    });
  } else {
    document.querySelectorAll('.keyboardModel .keyModel').forEach((n, i) => {
      if (i !== 29) {
        n.classList.remove('activ');
      } else if (switchKey === 1 || switchKey === 3) {
        n.classList.remove('activ');
      }
    });
  }
  numKey = 0;
});

document.onkeypress = function fff3(params) {
  numKey = 0;
  document.querySelectorAll('.keyboardModel .keyModel').forEach((n, i) => {
    if (n.getAttribute('data') !== 'ShiftLeft' && n.getAttribute('data') !== 'ShiftRight' && i !== 29) {
      n.classList.remove('activ');
    }
    if (n.getAttribute('data') === params.code) {
      numKey = i;
    }
  });

  document.querySelector(`.keyboardModel .keyModel[data="${dataKey[numKey][0]}"]`).classList.add('activ');
  getCursorPosition(getText);
  const sub1 = getText.value.substr(0, cursorPosition.start);
  const sub2 = getText.value.substr(cursorPosition.start);
  if (numKey === 41) {
    return true;
  }
  document.querySelector('.display').value = sub1 + dataKey[numKey][switchKey] + sub2;
  getText.setSelectionRange(cursorPosition.start + 1, cursorPosition.end + 1);
  return false;
};
document.addEventListener('keyup', () => {
  document.querySelectorAll('.keyboardModel .keyModel').forEach((n, i) => {
    if (n.getAttribute('data') !== 'ShiftLeft' && n.getAttribute('data') !== 'ShiftRight' && i !== 29) {
      n.classList.remove('activ');
    }
  });
});
document.querySelectorAll('.keyboardModel .keyModel').forEach((n, i) => {
  n.addEventListener('mousedown', function fff2() {
    const mouseClik = this.textContent;
    this.classList.add('activ');
    if (i !== 42 && i !== 62 && i !== 58 && i !== 56 && i !== 55 && i !== 54
      && i !== 41 && i !== 29 && i !== 28 && i !== 14 && i !== 13) {
      getCursorPosition(getText);
      const sub1 = getText.value.substr(0, cursorPosition.start);
      const sub2 = getText.value.substr(cursorPosition.start);
      document.querySelector('.display').value = sub1 + mouseClik + sub2;
      getText.setSelectionRange(cursorPosition.start + 1, cursorPosition.end + 1);
    } else {
      if (i === 29) {
        if (switchKey === 1 || switchKey === 3) {
          switchKey += 1;
        } else {
          switchKey -= 1;
        }
        document.querySelectorAll('.keyboardModel .keyModel').forEach((n1, i1) => {
          n1.innerHTML = dataKey[i1][switchKey];
        });
      }
      if (i === 42 || i === 54) {
        if (switchKey === 1 || switchKey === 3) {
          switchKey += 1;
        } else {
          switchKey -= 1;
        }
        document.querySelectorAll('.keyboardModel .keyModel').forEach((n1, i1) => {
          n1.innerHTML = dataKey[i1][switchKey];
        });
      }
      if (i === 41) {
        getCursorPosition(getText);
        const sub1 = getText.value.substr(0, cursorPosition.start);
        const sub2 = getText.value.substr(cursorPosition.start);
        document.querySelector('.display').value = `${sub1}\n${sub2}`;
        getText.setSelectionRange(cursorPosition.start + 1, cursorPosition.end + 1);
      }
      if (i === 28) {
        getCursorPosition(getText);
        if (cursorPosition.start < getText.value.length) {
          const sub1 = getText.value.substr(0, cursorPosition.start);
          const sub2 = getText.value.substr(cursorPosition.start + 1);
          document.querySelector('.display').value = sub1 + sub2;
          getText.setSelectionRange(cursorPosition.start, cursorPosition.end);
        }
      }
      if (i === 13) {
        getCursorPosition(getText);
        if (cursorPosition.start !== 0) {
          const sub1 = getText.value.substr(0, cursorPosition.start - 1);
          const sub2 = getText.value.substr(cursorPosition.start);
          document.querySelector('.display').value = sub1 + sub2;
          getText.setSelectionRange(cursorPosition.start - 1, cursorPosition.end - 1);
        }
      }
      if (i === 14) {
        getCursorPosition(getText);
        const sub1 = getText.value.substr(0, cursorPosition.start);
        const sub2 = getText.value.substr(cursorPosition.start);
        document.querySelector('.display').value = `${sub1}  ${sub2}`;
        getText.setSelectionRange(cursorPosition.start + 2, cursorPosition.end + 2);
      }
    }
  });
  n.addEventListener('mouseup', function fff1() {
    if (i === 42 || i === 54) {
      if (switchKey === 1 || switchKey === 3) {
        switchKey += 1;
      } else {
        switchKey -= 1;
      }
      document.querySelectorAll('.keyboardModel .keyModel').forEach((n1, i1) => {
        n1.innerHTML = dataKey[i1][switchKey];
      });
    }
    if (i !== 29) {
      this.classList.remove('activ');
    } else if (switchKey === 1 || switchKey === 3) {
      this.classList.remove('activ');
    }
  });
});
