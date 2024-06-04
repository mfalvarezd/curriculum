document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");
    const formInputs = form.querySelectorAll("[data-form-input]");
    const formBtn = form.querySelector("[data-form-btn]");

    function validateForm() {
      let allValid = true;
      formInputs.forEach((input) => {
        if (!input.value.trim()) {
          allValid = false;
        }
      });
      formBtn.disabled = !allValid;
    }

    formInputs.forEach((input) => {
      input.addEventListener("input", validateForm);
    });

    validateForm(); // Initial validation check
  });