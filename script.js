// Welcome message when page loads
window.onload = function () {
    console.log("Welcome to Samukelo Ngubane's Portfolio Website!");
};

// Registration form validation
document.querySelector("#registration .form").addEventListener("submit", function (event) {

    let name = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill in all registration fields.");
        event.preventDefault();
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        event.preventDefault();
    } else {
        alert("Registration successful!");
    }
});


// Contact form validation
document.querySelector("#contact .form").addEventListener("submit", function (event) {

    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;

    if (name === "" || message === "") {
        alert("Please complete the contact form.");
        event.preventDefault();
    } else {
        alert("Message sent successfully!");
    }
});


// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
