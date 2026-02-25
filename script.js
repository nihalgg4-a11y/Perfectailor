function scrollToBooking() {
  document.getElementById("booking").scrollIntoView({
    behavior: "smooth"
  });
}

document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Booking Confirmed! Our tailor will visit you soon.");
});
