document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger-menu");
    const navLinks = document.getElementById("nav-links");
    const contactForm = document.getElementById("travel-agent-form");
    const contactModal = document.getElementById("contact-modal");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("show");
    });

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            contactModal.style.display = "block";
            
            setTimeout(function () {
                window.location.href = "index.html";
            }, 2000); // Redirect after 2 seconds
        });
    }
});