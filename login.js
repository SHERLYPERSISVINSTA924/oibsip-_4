// In-memory user storage (replace with a database in a real-world scenario)
const users = { 'user1': 'password1', 'user2': 'password2' };

function authenticate() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');

    const username = usernameInput.value;
    const password = passwordInput.value;

    if (users[username] && users[username] === password) {
        // Successful login
        errorMessage.textContent = '';
        alert(`Hello, ${username}! You are logged in.`);
    } else {
        // Failed login
        errorMessage.textContent = 'Invalid credentials. Please try again.';
    }
}
