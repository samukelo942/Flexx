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

    const quoteText = document.getElementById("api-text");
    const quoteAuthor = document.getElementById("api-author");
    const quoteButton = document.getElementById("api-refresh");

    function fetchQuote() {
        if (!quoteText) return;
        quoteText.textContent = "Loading an inspiring quote...";
        quoteAuthor.textContent = "";

        fetch("https://api.quotable.io/random")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Quote API returned ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                quoteText.textContent = data.content || "Sorry, no quote is available right now.";
                quoteAuthor.textContent = data.author ? `— ${data.author}` : "";
            })
            .catch(error => {
                console.error("Quote fetch failed:", error);
                const localQuotes = [
                    { content: "Small steps every day add up to big results.", author: "Unknown" },
                    { content: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
                    { content: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
                    { content: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
                    { content: "Dream big and dare to fail.", author: "Norman Vaughan" },
                    { content: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs" },
                    { content: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
                    { content: "The secret of getting ahead is getting started.", author: "Mark Twain" },
                    { content: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
                    { content: "Strength does not come from physical capacity. It comes from an indomitable will.", author: "Mahatma Gandhi" },
                    { content: "Believe you can and you’re halfway there.", author: "Theodore Roosevelt" },
                    { content: "Everything you can imagine is real.", author: "Pablo Picasso" }
                ];
                const fallback = localQuotes[Math.floor(Math.random() * localQuotes.length)];
                quoteText.textContent = fallback.content;
                quoteAuthor.textContent = `— ${fallback.author}`;
            });
    }

    if (quoteButton) {
        quoteButton.addEventListener("click", fetchQuote);
    }

    fetchQuote();

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
