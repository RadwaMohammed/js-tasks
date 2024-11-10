const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const email = document.getElementById("email");

// Error containers
const usernameErr = document.querySelector("#username ~ em");
const passwordErr = document.querySelector("#password ~ em");
const emailErr = document.querySelector("#email ~ em");

// Show/Hide Error messages
const setError = (el, msg) => (el.innerText = msg);
const resetError = (el) => (el.innerText = "");

const isNotValid = () => {
  // Inputs values
  const usernameVal = username.value.trim();
  const passwordVal = password.value.trim();
  const emailVal = email.value.trim();
  
  let isError = false;
  // Username validation
  if (!usernameVal) {
    setError(usernameErr, "Username is required.");
    isError = true;
  } else if (usernameVal.length < 4) {
    setError(usernameErr, "Username must be at least 4 characters long.");
    isError = true;
  } else if (usernameVal.length > 20) {
    setError(usernameErr, "Username must be less than 20 characters long.");
    isError = true;
  } else {
    resetError(usernameErr);
  }

  // Password validation
  if (!passwordVal) {
    setError(passwordErr, "Password is required.");
    isError = true;
  } else if (passwordVal.length < 8) {
    setError(passwordErr, "Password must be at least 8 characters long.");
    isError = true;
  } else {
    resetError(passwordErr);
  }

  // Email validation
  if (!emailVal) {
    setError(emailErr, "Email is required.");
    isError = true;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
    setError(emailErr, "Email is not valid.");
    isError = true;
  } else {
    resetError(emailErr);
  }

  return isError;
};

form.addEventListener("submit", (e) => {
  if (isNotValid()) {
    e.preventDefault(); 
  }
});
