const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
});

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});

document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    sessionStorage.setItem("register", "true");

    window.location.href = "home.html";
});

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    sessionStorage.setItem("loggedIn", "true");

    window.location.href = "home.html";
});
