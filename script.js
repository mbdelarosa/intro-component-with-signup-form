function checkEmailValidity(emailField) {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (!emailField.value.match(regex)) {
    return true;
  } return false;
}

function validateForm(event) {
  const inputFields = document.querySelectorAll("input.signup-form__input:required");

  inputFields.forEach(inputField => {
    const fieldName = inputField.placeholder;
    const inputValidity = inputField.validity;
    const errorField = document.getElementById(inputField.attributes["aria-describedby"].value);
    if (inputValidity.valueMissing) {
      inputField.setAttribute("aria-invalid", "true");
      errorField.textContent = fieldName + " cannot be empty";
      event.preventDefault();
    } else if (inputField.type == "email" && checkEmailValidity(inputField)) {
      inputField.classList.add("error-input");
      inputField.setAttribute("aria-invalid", "true");
      errorField.textContent = "Looks like this is not an email";
      event.preventDefault();
    } else {
      inputField.classList.remove("error-input");
      inputField.setAttribute("aria-invalid", "false");
      errorField.textContent = "";
    }
  });
}

const form = document.getElementById("form");
form.addEventListener("submit", validateForm);