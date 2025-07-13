document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Example credentials
    const validUsername = 'user';
    const validPassword = 'pass123';

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    const messageDiv = document.getElementById('message');

    if (username === validUsername && password === validPassword) {
        messageDiv.style.color = 'green';
        messageDiv.textContent = 'Login successful!';
    } else {
        messageDiv.style.color = 'red';
        messageDiv.textContent = 'Invalid username or password.';
    }
});