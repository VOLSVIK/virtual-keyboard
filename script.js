let dataKey = [['Backquote', '`', '`'],['Digit1', '1', '1'],['Digit2', '2', '2'],
['Digit3', '3', '3'],['Digit4', '4', '4'],['Digit5', '5', '5'],
['Digit6', '6', '6'],['Digit7', '7', '7'],['Digit8', '8', '8'],
['Digit9', '9', '9'],['Digit0', '0', '0'],['Minus', '-', '-'],
['Equal', '=', '='],['Backspace', 'Backspace', '', '', ''],
['Tab', 'Tab', 'TAB'],['KeyQ', 'q', 'Q'],['KeyW', 'w', 'W'],
['KeyE', 'e', 'E'],['KeyR', 'r', 'R'],['KeyT', 't', 'T'],
['KeyY', 'y', 'Y'],['KeyU', 'u', 'U'],['KeyI', 'i', 'I'],
['KeyO', 'o', 'O'],['KeyP', 'p', 'P'],['BracketLeft', '[', '['],
['BracketRight', ']', ']'],['Backslash', '\\', '\\'],['Delete', 'Delete', 'DELETE'],
['CapsLock', 'CapsLock', 'CAPSLOCK'],['KeyA', 'A', 'A'],['KeyS', 'S', 'S'],
['KeyD', 'D', 'D'],['KeyF', 'F', 'F'],['KeyG', 'G', 'G'],['KeyH', 'H', 'H'],
['KeyJ', 'J', 'J'],['KeyK', 'K', 'K'],['KeyL', 'L', 'L'],
['Semicolon', ';', ';'],['Quote', "'", "'"],['Enter', 'Enter', 'ENTER'],
['ShiftLeft', 'Shift', 'SHIFT'],['KeyZ', 'Z', 'Z'],['KeyX', 'X', 'X'],
['KeyC', 'C', 'C'],['KeyV', 'V', 'V'], ['KeyB', 'B', 'B'],
['KeyN', 'N', 'N'],['KeyM', 'M', 'M'],['Comma', ',', ','],['Period', '.', '.'],
['Slash', '/', '/'],['ArrowUp', 'ArrowUp', 'ARROWUP'],
['ShiftRight', 'Shift', 'SHIFT'],['ControlLeft', 'Control', 'CONTROL'],
['AltLeft', 'Alt', 'ALT'],['Space', ' ', ' '], ['AltRight', 'Alt', 'ALT'],
['ArrowLeft', 'ArrowLeft', 'ARROWLEFT'],['ArrowDown', 'ArrowDown', 'ARROWDOWN'],
['ArrowRight', 'ArrowRight', 'ARROWRIGHT'],['ControlRight', 'Control', 'Control']];

document.querySelector('body').innerHTML = '<textarea class="display" id="story" rows="5" cols="30"></textarea><div class="displ"></div>';
function start() {
let keyNode = ''
for (let i = 0; i < dataKey.length; i++) {
  console.log(dataKey[i][0])
  keyNode += '<div class="knop" data="' + dataKey[i][0] + '">' + dataKey[i][1] + '</div>';
}
document.querySelector('.displ').innerHTML = keyNode;
}
start()