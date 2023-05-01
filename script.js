let dataKey = [['Backquote','`','~','ё','Ё'],['Digit1','1','!','1','!'],
['Digit2','2','@','2','"'],['Digit3','3','#','3','№'],['Digit4','4','$','4',';'],
['Digit5','5','%','5','%'],['Digit6','6','^','6',':'],['Digit7','7','&','7','?'],
['Digit8','8','*','8','*'],['Digit9','9','(','9','('],['Digit0','0',')','0',')'],
['Minus','-','_','-','_'],['Equal','=','+','=','+'],
['Backspace','Backspace','Backspace','Backspace','Backspace'],
['Tab','Tab','Tab','Tab','Tab'],['KeyQ','q','Q','й','Й'],['KeyW','w','W','ц','Ц'],
['KeyE','e','E','у','У'],['KeyR','r','R','к','К'],['KeyT','t','T','е','Е'],
['KeyY','y','Y','н','Н'],['KeyU','u','U','г','Г'],['KeyI','i','I','ш','Ш'],
['KeyO','o','O','щ','Щ'],['KeyP','p','P','з','З'],['BracketLeft','[','{','х','Х'],
['BracketRight',']','}','ъ','Ъ'],['Backslash','\\','|','\\','/'],
['Delete','Delete','Delete','Delete','Delete'],
['CapsLock','CapsLock','CapsLock','CapsLock','CapsLock'],['KeyA','a','A','ф','Ф'],
['KeyS','s','S','ы','Ы'],['KeyD','d','D','в','В'],['KeyF','f','F','а','А'],
['KeyG','g','G','п','П'],['KeyH','h','H','р','Р'],['KeyJ','j','J','о','О'],
['KeyK','k','K','л','Л'],['KeyL','l','L','д','Д'],['Semicolon',';',':','ж','Ж'],
['Quote',"'",'"',"э","Э"],['Enter','Enter','Enter','Enter','Enter'],
['ShiftLeft','Shift','Shift','Shift','Shift'],['KeyZ','z','Z','я','Я'],
['KeyX','x','X','ч','Ч'],['KeyC','c','C','c','C'],['KeyV','v','V','м','М'],
['KeyB','b','B','и','И'],['KeyN','n','N','т','Т'],['KeyM','m','M','ь','Ь'],
['Comma',',','<','б','Б'],['Period','.','>','ю','Ю'],['Slash','/','?','.',','],
['ArrowUp','&uarr;','&uarr;','&uarr;','&uarr;'],['ShiftRight','Shift','Shift','Shift','Shift'],
['ControlLeft','Control','Control','Control','Control'],['AltLeft','Alt','Alt','Alt','Alt'],
['Space',' ',' ',' ',' '], ['AltRight','Alt','Alt','Alt','Alt'],
['ArrowLeft','&larr;','&larr;','&larr;','&larr;'],['ArrowDown','&darr;','&darr;','&darr;','&darr;'],
['ArrowRight','&rarr;','&rarr;','&rarr;','&rarr;'],
['ControlRight','Control','Control','Control','Control']]


let keyNode = ''
keyNode = '<h1>Виртуальная клавиатура</h1>'
keyNode += '<textarea class="display" id="story" rows="5" cols="30"></textarea><div class="keyboardModel"></div>';
keyNode += '<h4>Клавиатура создана в операционной системе Windows</h4>'
keyNode += '<h4>Для переключения языка комбинация: левыe ctrl + alt</h4>'
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
    // localStorage.removeItem('switchKey');
    if (localStorage.getItem('switchKey') != null) {
            switchKey = parseInt(localStorage.getItem('switchKey'), 10);
    }
    function setLocalStorage() {
      localStorage.setItem('switchKey', switchKey);
    }
    window.addEventListener('beforeunload', setLocalStorage)
    document.querySelectorAll('.keyboardModel .keyModel').forEach((n, i) => {
      n.innerHTML = dataKey[i][switchKey]
    });
document.addEventListener('keydown', function(e) {
  if (e.repeat) return;
  let switchAltLeft = document.querySelector('.keyboardModel .keyModel[data="AltLeft"]').classList.contains('activ')
  let switchAltRight = document.querySelector('.keyboardModel .keyModel[data="AltRight"]').classList.contains('activ')
  let switchControlLeft = document.querySelector('.keyboardModel .keyModel[data="ControlLeft"]').classList.contains('activ')
  let switchControlRight = document.querySelector('.keyboardModel .keyModel[data="ControlRight"]').classList.contains('activ')
  // console.log(document.querySelector('.keyboardModel .keyModel[data="AltLeft"]').classList.contains('activ'))
  if (('AltRight' == e.code && switchControlRight) || ('AltLeft' == e.code && switchControlLeft) || ('ControlRight' == e.code && switchAltRight) || ('ControlLeft' == e.code && switchAltLeft)) {
    if (switchKey < 3) {
      console.log(switchKey)
          switchKey = switchKey + 2
    } else {
      switchKey = switchKey - 2
    }
    document.querySelectorAll('.keyboardModel .keyModel').forEach((n, i) => {
      n.innerHTML = dataKey[i][switchKey]
  });
  }
   if ('CapsLock' == e.code) {
    if (switchKey == 1 || switchKey == 3) {
      console.log(switchKey)
          switchKey = switchKey + 1
    } else {
      switchKey = switchKey - 1
    }
    console.log(e.code)
    // if ('Tab' == e.code) {

    //     console.log(e.code)
    //     e.stopPropagation()
    // }
    document.querySelectorAll('.keyboardModel .keyModel').forEach((n, i) => {
      if (n.getAttribute('data') == e.code) {
        numKey = i
      }
        n.innerHTML = dataKey[i][switchKey]
    });
  }
  if ('AltLeft' == e.code) {
      e.preventDefault()
      console.log(e.code)
  }
  if ('Tab' == e.code) {
    getCursorPosition(getText)
    let sub1 = getText.value.substr(0, cursorPosition.start);
    let sub2 = getText.value.substr(cursorPosition.start);
    document.querySelector('.display').value = sub1 + '  ' + sub2
    getText.setSelectionRange(cursorPosition.start + 2, cursorPosition.end + 2);  
      e.preventDefault()
      console.log(e.code)
  }
if (!(document.activeElement === getText )) {
  if ('Enter' == e.code) {
    getCursorPosition(getText)
    let sub1 = getText.value.substr(0, cursorPosition.start);
    let sub2 = getText.value.substr(cursorPosition.start);
    document.querySelector('.display').value = sub1 + '\n' + sub2
    getText.setSelectionRange(cursorPosition.start + 1, cursorPosition.end + 1);  
    console.log(e.code)
  }
  if ('Delete' == e.code) {
    getCursorPosition(getText)
    if (cursorPosition.start < getText.value.length) {
      let sub1 = getText.value.substr(0, cursorPosition.start);
      let sub2 = getText.value.substr(cursorPosition.start + 1);
      document.querySelector('.display').value = sub1 + sub2
      getText.setSelectionRange(cursorPosition.start, cursorPosition.end);  
      console.log(e.code)   
  }
}
  if ('Backspace' == e.code) {
    getCursorPosition(getText)
    if (cursorPosition.start != 0) {
    let sub1 = getText.value.substr(0, cursorPosition.start - 1);
    let sub2 = getText.value.substr(cursorPosition.start);
    document.querySelector('.display').value = sub1 + sub2
    getText.setSelectionRange(cursorPosition.start - 1, cursorPosition.end - 1);  
    console.log(e.code)      
  }
}
if ('ArrowUp' == e.code || 'ArrowLeft' == e.code || 'ArrowRight' == e.code || 'ArrowDown' == e.code) {
  getCursorPosition(getText)
  let sub1 = getText.value.substr(0, cursorPosition.start);
  let sub2 = getText.value.substr(cursorPosition.start);
  document.querySelector('.display').value = sub1 + document.querySelector('.keyboardModel .keyModel[data="' + e.code + '"]').textContent + sub2
  getText.setSelectionRange(cursorPosition.start + 1, cursorPosition.end + 1); 
}
}
  if ('ShiftLeft' == e.code || 'ShiftRight' == e.code) {
    if (switchKey == 1 || switchKey == 3) {
          switchKey = switchKey + 1
    } else {
      switchKey = switchKey - 1
    }
      document.querySelectorAll('.keyboardModel .keyModel').forEach((n, i) => {
        if (n.getAttribute('data') == e.code) {
          numKey = i
        }
          n.innerHTML = dataKey[i][switchKey]
      });
  } else {
    document.querySelectorAll('.keyboardModel .keyModel').forEach((n, i) => {
      if (n.getAttribute('data') == e.code) {
        numKey = i
      }
    });
  }

  document.querySelector('.keyboardModel .keyModel[data="' + dataKey[numKey][0] + '"]').classList.add('activ')
  numKey = 0
})
document.addEventListener('keyup', function(e) {

  if ('ShiftLeft' == e.code || 'ShiftRight' == e.code) {
    if (switchKey == 1 || switchKey == 3) {
      switchKey = switchKey + 1
} else {
  switchKey = switchKey - 1
}
    document.querySelectorAll('.keyboardModel .keyModel').forEach((n, i) => {
  if (i != 29) {
         n.classList.remove('activ') 
  } else {
        if (switchKey == 1 || switchKey == 3) {
        n.classList.remove('activ') 
    }
  }
        n.innerHTML = dataKey[i][switchKey]
    });
  } else {
    document.querySelectorAll('.keyboardModel .keyModel').forEach((n, i) => {
  if (i != 29) {
         n.classList.remove('activ') 
  } else {
    if (switchKey == 1 || switchKey == 3) {
        n.classList.remove('activ') 
    }
  }
    });
  }
  numKey = 0
})
  // ==================ввод с текст ари==================
document.onkeypress = function (params) {
   numKey = 0
    kkk = params.key
    document.querySelectorAll('.keyboardModel .keyModel').forEach((n, i) => {
      // console.log(n.getAttribute('data'))
      if ('ShiftLeft' != n.getAttribute('data') && 'ShiftRight' != n.getAttribute('data') && i != 29) {

        n.classList.remove('activ')
      }
      if (n.getAttribute('data') == params.code) {
        // console.log(7777777)
        numKey = i
      }
    });

    document.querySelector('.keyboardModel .keyModel[data="' + dataKey[numKey][0] + '"]').classList.add('activ')
            getCursorPosition(getText)
            let sub1 = getText.value.substr(0, cursorPosition.start);
            let sub2 = getText.value.substr(cursorPosition.start);
            if (41 == numKey) {
              return true
            } else {
            document.querySelector('.display').value = sub1 + dataKey[numKey][switchKey] + sub2
            getText.setSelectionRange(cursorPosition.start + 1, cursorPosition.end + 1);                
            }
           return false
};

  document.addEventListener('keyup', function(e) {
    
  // console.log(7777777)
  document.querySelectorAll('.keyboardModel .keyModel').forEach((n,i) => {
    if ('ShiftLeft' != n.getAttribute('data') && 'ShiftRight' != n.getAttribute('data') && i != 29) {
      // console.log(i)
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
document.querySelectorAll('.keyboardModel .keyModel').forEach((n,i) => {
  // n.onclick = function (params) {
  n.addEventListener("mousedown", function() {
    document.querySelectorAll('.keyboardModel .keyModel').forEach((n,i) => {
      if ('ShiftLeft' != n.getAttribute('data') && 'ShiftRight' != n.getAttribute('data') && i != 29) {
        n.classList.remove('activ')
        }
    });
    console.log(i)
    let mouseClik = this.textContent
    this.classList.add('activ')
    if (i != 42 && i != 62 && i != 58 && i != 56 && i != 55 && i != 54 && i != 41 && i != 29 && i != 28 && i != 14 && i != 13) {
    getCursorPosition(getText)
    let sub1 = getText.value.substr(0, cursorPosition.start);
    let sub2 = getText.value.substr(cursorPosition.start);
document.querySelector('.display').value = sub1 + mouseClik + sub2
getText.setSelectionRange(cursorPosition.start + 1, cursorPosition.end + 1);
     
    } else {
      if (29 == i) {
        if (switchKey == 1 || switchKey == 3) {
          console.log(switchKey)
              switchKey = switchKey + 1
        } else {
          switchKey = switchKey - 1
        }
        document.querySelectorAll('.keyboardModel .keyModel').forEach((n, i) => {
            n.innerHTML = dataKey[i][switchKey]
        });
      }
      if (42 == i || 54 == i) {
        if (switchKey == 1 || switchKey == 3) {
              switchKey = switchKey + 1
        } else {
          switchKey = switchKey - 1
        }
          document.querySelectorAll('.keyboardModel .keyModel').forEach((n, i) => {
              n.innerHTML = dataKey[i][switchKey]
          });
      }
      if (41 == i) {
        getCursorPosition(getText)
        let sub1 = getText.value.substr(0, cursorPosition.start);
        let sub2 = getText.value.substr(cursorPosition.start);
        document.querySelector('.display').value = sub1 + '\n' + sub2
        getText.setSelectionRange(cursorPosition.start + 1, cursorPosition.end + 1);
      }
      if (28 == i) {
        getCursorPosition(getText)
        if (cursorPosition.start < getText.value.length) {
          let sub1 = getText.value.substr(0, cursorPosition.start);
          let sub2 = getText.value.substr(cursorPosition.start + 1);
          document.querySelector('.display').value = sub1 + sub2
          getText.setSelectionRange(cursorPosition.start, cursorPosition.end);  
      }
    }
      if (13 == i) {
        getCursorPosition(getText)
        if (cursorPosition.start != 0) {
        let sub1 = getText.value.substr(0, cursorPosition.start - 1);
        let sub2 = getText.value.substr(cursorPosition.start);
        document.querySelector('.display').value = sub1 + sub2
        getText.setSelectionRange(cursorPosition.start - 1, cursorPosition.end - 1);  
      }
    }
    if (14 == i) {
      getCursorPosition(getText)
      let sub1 = getText.value.substr(0, cursorPosition.start);
      let sub2 = getText.value.substr(cursorPosition.start);
      document.querySelector('.display').value = sub1 + '  ' + sub2
      getText.setSelectionRange(cursorPosition.start + 2, cursorPosition.end + 2);  
    }
    }
  });
  n.addEventListener("mouseup", function() {
    if (42 == i || 54 == i) {
      if (switchKey == 1 || switchKey == 3) {
            switchKey = switchKey + 1
      } else {
        switchKey = switchKey - 1
      }
        document.querySelectorAll('.keyboardModel .keyModel').forEach((n, i) => {
            n.innerHTML = dataKey[i][switchKey]
        });
    }
    if (i != 29) {
    this.classList.remove('activ')   
} else {
 if (switchKey == 1 || switchKey == 3) {
    this.classList.remove('activ')   
 }
}

  });
});