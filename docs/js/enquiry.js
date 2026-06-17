console.log("JS is working");

const form = document.getElementById("contact-form");

if (form) {

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const fname = document.getElementById("fname").value.trim();
        const cell = document.getElementById("cell").value.trim();
        const email = document.getElementById("email").value.trim();

        const messageBox = document.getElementById("formMessage");

        // Safety check (in case element is missing)
        if (!messageBox) {
            console.error("formMessage element not found in HTML");
            return;
        }

        // Check empty fields
        if (fname === "" || cell === "" || email === "") {
            messageBox.textContent = "❌ Please fill in all fields.";
            messageBox.style.color = "red";
            return;
        }

        // Email validation (basic but better than before)
        if (!email.includes("@") || !email.includes(".")) {
            messageBox.textContent = "❌ Please enter a valid email address.";
            messageBox.style.color = "red";
            return;
        }

        // Success message
        messageBox.textContent = "✔ Your enquiry has been submitted successfully!";
        messageBox.style.color = "green";

        // Reset form
        form.reset();
    });

} else {
    console.error("Form with id 'contact-form' not found");
}