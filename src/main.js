import "./style.css";

const form = document.querySelector("#registrationForm");
const submitBtn = document.querySelector("#submitBtn");
const errorOutput = document.querySelector("#errorOutput");

// Enable submit button only when all fields are filled
form.addEventListener("input", () => {
  const inputs = Array.from(form.querySelectorAll("input"));
  const allFilled = inputs.every((input) => input.value.trim() !== "");
  submitBtn.disabled = !allFilled;
});

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const password = form.password.value;
  const confirmPassword = form.confirmPassword.value;

  if (password !== confirmPassword) {
    errorOutput.textContent = "Passwords do not match!";
  } else {
    errorOutput.textContent = "";
    alert("Registration successful!");
    form.reset();
    submitBtn.disabled = true;
  }
});
