function scrollToBooking() {
  document.getElementById("booking").scrollIntoView({
    behavior: "smooth"
  });
}

document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.querySelector('input[placeholder="Full Name"]').value;
  const address = document.querySelector('input[placeholder="Address"]').value;
  const date = document.querySelector('input[type="date"]').value;
  const time = document.querySelector('input[type="time"]').value;

  const message =
    `🧵 *New Booking - Perfect Tailor* %0A%0A` +
    `👤 Name: ${name} %0A` +
    `📍 Address: ${address} %0A` +
    `📅 Date: ${date} %0A` +
    `⏰ Time: ${time}`;

  const phoneNumber = "919019311084"; //

  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  window.open(url, "_blank");

  alert("Redirecting to WhatsApp to confirm your booking...");
});
