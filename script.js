
const button = document.getElementById("launch");
const status = document.getElementById("status");

button.addEventListener("click", function () {
  status.textContent = "System initialized successfully!";
  button.textContent = "SYSTEM READY";
});

