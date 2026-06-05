// Welcome message when page loads
window.onload = function () {
    console.log("Welcome to Samukelo Ngubane's Portfolio Website!");
};


// Contact form validation
document.querySelector("#contact .form").addEventListener("submit", function (event) {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let github = document.getElementById("Github ").value;

    if (name === "" || email === "" || github === "") {
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
