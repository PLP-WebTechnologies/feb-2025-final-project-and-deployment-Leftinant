document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    const modal = document.getElementById("booking-modal");

    // Get the button that opens the modal
    const btn = document.getElementById("booking-button");

    // Get the <span> element that closes the modal
    const span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Handle Form Submission (Example)
    const form = document.getElementById("booking-form");
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const formData = new FormData(form);
        const bookingData = {};
        formData.forEach((value, key) => {
            bookingData[key] = value;
        });

        console.log("Booking Data:", bookingData);

        // send this data to your backend
        // using fetch or AJAX.

        // Close the modal and show a confirmation
        modal.style.display = "none";
        alert("Booking submitted! (Check console for details)");

        // Reset the form
        form.reset();
    });
});