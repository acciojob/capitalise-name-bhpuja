//your JS code here. If required.
// Get the input field by its ID
const fnameInput = document.getElementById('fname');

// Function to convert input to uppercase when it loses focus
function capitalizeName() {
  // Convert the value of the input to uppercase
  fnameInput.value = fnameInput.value.toUpperCase();
}

// Add the 'onblur' event listener to the input field
fnameInput.addEventListener('blur', capitalizeName);
