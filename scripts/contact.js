const form = document.querySelector("#form");

const firstName = document.getElementById("firstName");
const firstNameError = document.getElementById("firstNameError");

const subject = document.getElementById("subject");
const subjectError = document.getElementById("subjectError");

const email = document.getElementById("email");
const emailError = document.getElementById("emailError");

const address = document.getElementById("address");
const addressError = document.getElementById("addressError");

const submitButton = document.querySelector(".submitButton");

const success = document.querySelector(".success");


function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
  }

function validateForm(event) {
    event.preventDefault();
    let formError = false;

    if(checkLength(firstName.value, 0) ) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display = "block";
        formError = true;
    }

    if(checkLength(subject.value, 10) ) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
        formError = true;
    }

    if(checkLength(address.value, 25 ) ) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
        formError = true;
    }

    if(validateEmail(email.value) ) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
        formError = true;
    }

    if (formError) {
        success.style.display = "none";
    } else {
        success.style.display = "block";
    }
}

form.addEventListener("submit", validateForm)

function checkLength(value, len) {
    if (value.trim().length > len) {
        return true;
    } else {
        return false;
    }
}

form.onsubmit = function (event) {
    event.preventDefault();
}