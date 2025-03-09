// Select all the buttons and the screen element
const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.buttons button');

// Initialize an empty string to hold the current value
let currentInput = '';

// Function to update the screen with the current input
function updateScreen() {
  screen.textContent = currentInput;
}

// Event listener for all buttons
buttons.forEach(button => {
  button.addEventListener('click', (event) => {
    const value = event.target.textContent;
    
    // If the clicked button is "AC" (clear), reset the screen
    if (value === 'AC') {
      currentInput = '';
      updateScreen();
    }
    // If the clicked button is "=" (equal), calculate the result
    else if (value === '=') {
      try {
        currentInput = eval(currentInput);  // Using eval to calculate the input expression
        updateScreen();
      } catch (error) {
        currentInput = 'Error';  // Display error if something goes wrong
        updateScreen();
      }
    }
    // If the clicked button is a number or operator, append it to the current input
    else {
      currentInput += value;
      updateScreen();
    }
  });
});

// Function for handling the square root operation
document.querySelector('.root').addEventListener('click', () => {
  if (currentInput) {
    currentInput = Math.sqrt(parseFloat(currentInput)).toString();
    updateScreen();
  }
});

// Function for handling percentage calculation
document.querySelector('.percentage').addEventListener('click', () => {
  if (currentInput) {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateScreen();
  }
});

// Function for handling plus/minus operation (toggle sign)
document.querySelector('.plus-or-minus').addEventListener('click', () => {
  if (currentInput) {
    if (currentInput.startsWith('-')) {
      currentInput = currentInput.substring(1);  // Remove minus sign
    } else {
      currentInput = '-' + currentInput;  // Add minus sign
    }
    updateScreen();
  }
});

// Function to handle decimal points
document.querySelector('.decimal').addEventListener('click', () => {
  if (!currentInput.includes('.')) {  // Prevent adding more than one decimal
    currentInput += '.';
    updateScreen();
  }
});
