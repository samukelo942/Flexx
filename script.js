document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

    if (initialTheme === "dark") {
        document.body.classList.add("dark-mode");
    }

    function updateThemeButton() {
        if (!themeToggle) return;
        const isDark = document.body.classList.contains("dark-mode");
        themeToggle.textContent = isDark ? "☀️ Light" : "🌙 Dark";
        themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
    }

    if (themeToggle) {
        themeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            const theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
            localStorage.setItem("theme", theme);
            updateThemeButton();
        });
    }

    updateThemeButton();

    const contactForm = document.querySelector("#contact .form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
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
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
