let display = document.getElementById('display');

function clearDisplay() {
  display.innerText = '0';
}

function appendValue(value) {
  if (display.innerText === '0') {
    display.innerText = value;
  } else {
    display.innerText += value;
  }
}

function backspace() {
  display.innerText = display.innerText.slice(0, -1) || '0';
}

function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch {
    display.innerText = 'Error';
  }
}
