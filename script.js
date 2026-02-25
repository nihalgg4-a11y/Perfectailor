function scrollToBooking() {
  document.getElementById("booking").scrollIntoView({
    behavior: "smooth"
  });
}

function sendToWhatsApp(event) {
  event.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let address = document.getElementById("address").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;

  let message = `New Booking - Perfect Tailor
Name: ${name}
Phone: ${phone}
Address: ${address}
Date: ${date}
Time: ${time}`;

  let whatsappNumber = "919019311084";

  let url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}
