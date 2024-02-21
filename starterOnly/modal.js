function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

const closeModal = document.querySelector(".close")
const modalBody = document.querySelector(".modal-body")

// close modal 

modalbg.addEventListener("click", function(event) {
  if (event.target != modalBody && !modalBody.contains(event.target)|| event.target === closeModal ) {
    modalbg.style.display = "none";
  }
})

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// function submit

var modal = document.getElementById('successModal');

function validate(event) {

  event.preventDefault();

  var firstName = document.getElementById('first').value.trim();
  var lastName = document.getElementById('last').value.trim();
  var email = document.getElementById('email').value.trim();
  var birthdate = document.getElementById('birthdate').value.trim();
  var quantity = document.getElementById('quantity').value.trim();

  var firstNameError = document.getElementById('firstError');
  var lastNameError = document.getElementById('lastError');
  var emailError = document.getElementById('emailError');
  var birthdateError = document.getElementById('birthdateError');
  var quantityError = document.getElementById('quantityError');
  var locationError = document.getElementById('locationError');
  var checkboxError = document.getElementById('checkboxError');

  var isValid = true;

  // Validation rules
  if (firstName.length < 2) {
    firstNameError.textContent = 'Le prénom doit avoir au moins 2 caractères.';
    isValid = false;
  } else {
    firstNameError.textContent = '';
  }

  if (lastName.length < 2) {
    lastNameError.textContent = 'Le nom doit avoir au moins 2 caractères.';
    isValid = false;
  } else {
    lastNameError.textContent = '';
  }

  // Basic email validation
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = 'Veuillez entrer une adresse e-mail valide.';
    isValid = false;
  } else {
    emailError.textContent = '';
  }

  // Birthdate validation
  if (birthdate === '') {
    birthdateError.textContent = 'Veuillez entrer votre date de naissance.';
    isValid = false;
  } else {
    birthdateError.textContent = '';
  }

  // Quantity validation
  if (quantity === '') {
    quantityError.textContent = 'Veuillez mettre une quantité.';
    isValid = false;
  } else {
    quantityError.textContent = '';
  }

  // Location validation
  var locationChecked = document.querySelector('input[name="location"]:checked');
  if (!locationChecked) {
    locationError.textContent = 'Vous devez choisir une option.';
    isValid = false;
  } else {
    locationError.textContent = '';
  }

  // Checkbox validation
  var checkbox1Checked = document.getElementById('checkbox1').checked;
  if (!checkbox1Checked) {
    checkboxError.textContent = 'Vous devez vérifier que vous acceptez les termes et conditions.';
    isValid = false;
  } else {
    checkboxError.textContent = '';
  }

   // successful submission
   if (isValid) {
     modal.style.display = "block";
     setTimeout(function() {
       modal.style.display = "none";
     }, 3000);
     modalbg.style.display = "none";
   }

  return isValid;
}