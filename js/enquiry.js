console.log("JS is working");

const form = document.getElementById("contact-form");

if (form) {

    form.addEventListener("submit", function(event) {

        event.preventDefault();

        const fname = document.getElementById("fname").value.trim();

        const cell = document.getElementById("cell").value.trim();

        const email = document.getElementById("email").value.trim();

        const address = document.getElementById("address").value.trim();

        const messageBox = document.getElementById("formMessage");


        // Check empty fields
        if (
            fname === "" ||
            cell === "" ||
            email === "" ||
            address === ""
        ) {

            messageBox.textContent =
                "❌ Please fill in all fields.";

            messageBox.style.color = "red";

            return;
        }


        // Cell number validation
        const phonePattern = /^[0-9]{10}$/;

        if (!phonePattern.test(cell)) {

            messageBox.textContent =
                "❌ Please enter a valid 10-digit cell number.";

            messageBox.style.color = "red";

            return;
        }


        // Email validation
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            messageBox.textContent =
                "❌ Please enter a valid email address.";

            messageBox.style.color = "red";

            return;
        }


        // Success message
        messageBox.textContent =
            "✔ Your enquiry has been submitted successfully!";

        messageBox.style.color = "green";


        // Reset form
        form.reset();

    });

} else {

    console.error(
        "Form with id 'contact-form' not found"
    );

}