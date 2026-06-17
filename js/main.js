// ===============================
// Peng's Football T-Shirts
// main.js
// ===============================

// Display message in browser console
console.log("Welcome to Peng's Football T-Shirts!");

// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // Mobile Navigation Menu
    // ===============================
    const menuBtn = document.getElementById("menu-btn");
    const navMenu = document.getElementById("nav-menu");

    if (menuBtn && navMenu) {
        menuBtn.addEventListener("click", function () {
            navMenu.classList.toggle("show");
        });
    }

    // ===============================
    // Enquiry Form Validation
    // ===============================
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (event) {

            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const message = document.getElementById("message");

            // Check if fields are empty
            if (
                !name.value.trim() ||
                !email.value.trim() ||
                !message.value.trim()
            ) {
                event.preventDefault();
                alert("Please complete all fields before submitting.");
                return;
            }

            // Email validation
            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email.value)) {
                event.preventDefault();
                alert("Please enter a valid email address.");
                return;
            }

            alert("Thank you! Your enquiry has been submitted.");
        });
    }

    // ===============================
    // Product Image Click Effect
    // ===============================
    const images = document.querySelectorAll(".product img");

    images.forEach(function (image) {
        image.addEventListener("click", function () {
            alert("You selected this football shirt!");
        });
    });

});
const subscribeBtn = document.getElementById("subscribeBtn");

if (subscribeBtn) {

    subscribeBtn.addEventListener("click", function () {

        const email = document.getElementById("newsletterEmail").value.trim();

        const message = document.getElementById("subscribeMessage");

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {

            message.textContent = "❌ Please enter your email.";

            message.style.color = "red";

            return;
        }

        if (!emailPattern.test(email)) {

            message.textContent = "❌ Please enter a valid email.";

            message.style.color = "red";

            return;
        }

        message.textContent = "✔ Thank you for subscribing!";

        message.style.color = "green";

        document.getElementById("newsletterEmail").value = "";

    });

}
