// Get the login form element and attach a submit event listener
const loginForm = document.querySelector('form');
loginForm.addEventListener('submit', submitLoginForm);

// Function to handle the login form submission
function submitLoginForm(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the input values
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  // Make the login request
  // Replace the URL with the actual URL of your login endpoint
  fetch('https://example.com/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  .then(response => response.json())
  .then(data => {
    // Check the response data to determine if the login was successful
    if (data.success) {
      // Redirect to the home page
      window.location.href = 'home.html';
    } else {
      // Display an error message
      alert('Invalid username or password. Please try again.');
    }
  })
  .catch(error => {
    console.error('Login error:', error);
    // Display an error message
    alert('An error occurred during login. Please try again later.');
  });
}

// Get the register link element and attach a click event listener
const registerLink = document.querySelector('a');
registerLink.addEventListener('click', goToRegister);

// Function to handle the register link click
function goToRegister(event) {
  event.preventDefault(); // Prevent the default link behavior

  // Redirect to the sign up page
  window.location.href = 'signup.html';
}