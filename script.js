document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      window.location.href = "payment.html";
    });
  }

  const paidBtn = document.getElementById("paidBtn");
  if (paidBtn) {
    paidBtn.addEventListener("click", function() {
      window.location.href = "confirmation.html";
    });
  }
});
