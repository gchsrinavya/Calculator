let inputField = document.querySelector('#display');
let string = "";

document.querySelectorAll('.button').forEach((button) => {
  button.addEventListener('click', (e) => {
    const buttonText = e.target.innerHTML;

    if (buttonText === '=') {
      try {
        // Replace '^' with '**' for exponentiation before evaluating
        string = string.replace(/\^/g, '**');
        string = eval(string);
        inputField.value = string;
      } catch (error) {
        // Handle any evaluation errors (e.g., division by zero)
        inputField.value = 'Error';
      }
    } else if (buttonText === 'AC') {
      string = "";
      inputField.value = string;
    } else {
      string += buttonText;
      inputField.value = string;
    }
  });
});
