// VULNERABLE CODE (XSS Risk)
// This directly injects user input into the page.
const username = "<img src=x onerror=alert('Hacked!')>";
document.getElementById('display').innerHTML = "Welcome, " + username;

// SECURE CODE (The Fix)
// This treats the input as plain text, neutralising any scripts.
const safeUsername = "<img src=x onerror=alert('Hacked!')>";
document.getElementById('display').textContent = "Welcome, " + safeUsername;
