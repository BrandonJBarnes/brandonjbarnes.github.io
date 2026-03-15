
const toggle = document.getElementById("theme-toggle");
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");


    toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});


document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thanks! Your message has been recorded (demo mode).");
});