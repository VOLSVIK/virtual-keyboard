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