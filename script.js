
// Order button functionality

const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const foodName = button.dataset.food;

        alert("You selected: " + foodName);

    });

});


// Reservation form functionality

const reservationForm =
    document.getElementById("reservationForm");

reservationForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("customerName").value;

    const date =
        document.getElementById("bookingDate").value;

    const guests =
        document.getElementById("guests").value;

    const message =
        document.getElementById("message");

    message.textContent =
        "Thank you " + name +
        "! Your reservation request for " +
        guests + " guests on " + date +
        " has been received.";

    message.className = "text-center mt-3 text-success";

    reservationForm.reset();

});
