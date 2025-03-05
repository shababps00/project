document.getElementById("requestForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from refreshing the page

    const requestConfirmationMessage = document.getElementById("requestConfirmationMessage");

    // Simulate form submission process
    setTimeout(function() {
        requestConfirmationMessage.style.display = "block"; // Show confirmation message
    }, 500);
    
    // Reset the form after a short delay
    setTimeout(function() {
        document.getElementById("requestForm").reset();
        requestConfirmationMessage.style.display = "none"; // Hide confirmation message
    }, 2000);
});

