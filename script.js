const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let expression = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      expression = '';
      display.value = '';
    } else if (value === '=') {
      try {
        display.value = eval(expression);
        expression = display.value;
      } catch {
        display.value = 'Error';
        expression = '';
      }
    } else {
      expression += value;
      display.value = expression;
    }
  });
});
