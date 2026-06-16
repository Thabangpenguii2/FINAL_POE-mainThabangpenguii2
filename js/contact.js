// Contact form validation

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const fname = document.getElementById("fname").value.trim();
    const cell = document.getElementById("cell").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const formMessage = document.getElementById("formMessage");

    // Check empty fields
    if (fname === "" || cell === "" || email === "") {

        formMessage.textContent = "Please fill in all required fields.";
        formMessage.style.color = "red";
        return;
    }

    // Validate phone number
    const phonePattern = /^[+0-9\s]+$/;

    if (!phonePattern.test(cell)) {

        formMessage.textContent = "Invalid cell number.";
        formMessage.style.color = "red";
        return;
    }

    // Validate email
    if (!email.includes("@")) {

        formMessage.textContent = "Invalid email address.";
        formMessage.style.color = "red";
        return;
    }

    // Success
    formMessage.textContent = "Message sent successfully!";
    formMessage.style.color = "green";

    form.reset();

});