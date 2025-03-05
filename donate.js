document.getElementById("donationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from refreshing the page

    const confirmationMessage = document.getElementById("confirmationMessage");
    
    // Simulate form submission process
    setTimeout(function() {
        confirmationMessage.style.display = "block"; // Show confirmation message
    }, 500);
    
    // Reset the form after a short delay
    setTimeout(function() {
        document.getElementById("donationForm").reset();
        confirmationMessage.style.display = "none"; // Hide confirmation message
    }, 2000);
});

