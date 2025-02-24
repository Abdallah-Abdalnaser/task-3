import { Localstorage} from './localstorage.modle.js';
import { Validator  } from './validator.modle.js';
import { Password } from './password.model.js';

// instance from class 
let LS = new Localstorage();
let validator = new Validator();
let pass = new Password();


// html Element
let form = document.querySelector('form')
let firstName = document.getElementById('firstname');
let lastName = document.getElementById('lastname');
let email = document.getElementById('Email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');
let register = document.getElementById('btn');
let iconeyepassword = document.getElementById('iconeyepassword');
let iconeyeconfirmpassword = document.getElementById('iconeyeconfirmpassword');


// Event Listeners for input fields
firstName.addEventListener('blur', validator.firstNameValidator);
lastName.addEventListener('blur', validator.lastNameValidator)
email.addEventListener('blur', validator.emailValidator);
password.addEventListener('blur', validator.passwordValidator);
confirmPassword.addEventListener('blur', validator.confirmPasswordValidator);

//show or hidden password
iconeyepassword.addEventListener('click',pass.showPassword)
iconeyeconfirmpassword.addEventListener('click',pass.showConfirmPassword)


// register Event
register.addEventListener('click',function() {
    let data = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value
    }
    LS.saveDataInLocalStorage(data);
    window.location.href='../login.html';
})


// check Register button
register.disabled=true;
form.addEventListener("input", function() {
    let validator = new Validator();
    validator.checkRegisterButton();
});
