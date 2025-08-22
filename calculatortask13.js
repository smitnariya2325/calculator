function hello(value) {
  document.getElementById('text').value += value;
}

function clearDisplay() {
  document.getElementById('text').value = '';
}
function calculateResult() {
  try {
    const result = eval(document.getElementById('text').value);
    document.getElementById('text').value = result;
  } catch (e) {
    document.getElementById('text').value = 'Error';
  }
}
