document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Hardcoded credentials for demonstration purposes
    const validUsername = 'user';
    const validPassword = 'pass';
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    if (username === validUsername && password === validPassword) {
    alert('Login successful!');
    errorMessage.style.display = 'none';
    // Redirect to a new page or perform other actions upon successful login
    // window.location.href = 'dashboard.html';
} else {
    errorMessage.textContent = 'Invalid username or password';
    errorMessage.style.display = 'block';
    }
   });