// Booking form alert
document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Booking Confirmed! We will visit your home.");
});

// Save measurements (stored in browser)
function saveMeasurements() {
  const chest = document.getElementById("chest").value;
  const waist = document.getElementById("waist").value;
  const length = document.getElementById("length").value;

  const data = `Chest: ${chest}, Waist: ${waist}, Length: ${length}`;
  
  localStorage.setItem("measurements", data);

  document.getElementById("savedData").innerText = data;
}

// Load saved data
window.onload = function() {
  const saved = localStorage.getItem("measurements");
  if (saved) {
    document.getElementById("savedData").innerText = saved;
  }
};
