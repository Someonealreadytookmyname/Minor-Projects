let display = document.getElementById('display');
function clearDisplay() {
 display.textContent = '0';
}
function appendCharacter(character) {
 if (display.textContent === '0') {
 display.textContent = character;
 } else {
 display.textContent += character;
 }
}
function deleteLast() {
 display.textContent = display.textContent.slice(0, -1);
 if (display.textContent === '') {
 display.textContent = '0';
 }
}
function calculateResult() {
 try {
 display.textContent = eval(display.textContent);
 } catch {
 display.textContent = 'Error';
 }
}