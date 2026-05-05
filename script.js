function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// Form submission (frontend only)
function submitForm(e) {
    e.preventDefault();
    document.getElementById("formMsg").innerText = "Message sent successfully!";
}

// Scroll animation
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const pos = section.getBoundingClientRect().top;
        const screen = window.innerHeight / 1.3;

        if (pos < screen) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "0.5s";
});