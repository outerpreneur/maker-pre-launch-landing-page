function validateEmail(email) {
  // Regular expression pattern for email validation
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the email matches the pattern
  return emailPattern.test(email);
}

// Example usage
const emailInput = document.getElementById("email"); // Assuming your email input field has an id of "email"
const form = document.querySelector("form");
const error1 = document.querySelector(".error-1");
const error2 = document.querySelector(".error-2");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailValue = emailInput.value;
  const characterCount = emailValue.length;

  if (validateEmail(emailInput.value)) {
    // Email is valid
    console.log("Email is valid");
    emailInput.classList.remove("border");
    emailInput.classList.remove("border-bordererror");
    error1.classList.add("hidden");
  } else {
    // Email is invalid
    console.log("Email is invalid");
    emailInput.classList.add("border");
    emailInput.classList.add("border-bordererror");
    error1.classList.remove("hidden");
  }
});

emailInput.addEventListener("keyup", (event) => {
  const emailValue = emailInput.value;
  const characterCount = emailValue.length;
  if (characterCount === 0) {
    emailInput.classList.add("border");
    emailInput.classList.add("border-bordererror");
    error2.classList.remove("hidden");
    emailInput.classList.add("border");
    emailInput.classList.add("border-bordererror");
  } else {
    emailInput.classList.remove("border");
    emailInput.classList.remove("border-bordererror");
    error2.classList.add("hidden");
    emailInput.classList.remove("border");
    emailInput.classList.remove("border-bordererror");
  }
});
