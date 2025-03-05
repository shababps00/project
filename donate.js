document.getElementById("donationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting normally

    // Display confirmation message
    const confirmationMessage = document.getElementById("confirmationMessage");
    confirmationMessage.style.display = "block";

    // Optionally, you can reset the form after a delay
    setTimeout(function() {
        document.getElementById("donationForm").reset(); // Reset the form fields
        confirmationMessage.style.display = "none"; // Hide confirmation message after a while
    }, 3000); // Wait for 3 seconds before hiding the message
});

