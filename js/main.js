import { Localstorage} from './localstorage.module.js';
let LS = new Localstorage();
let register = document.getElementById('btn');

let firstName = document.getElementById('firstname');
let lastName = document.getElementById('lastname');
let email = document.getElementById('Email');
let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirmPassword');


let passwordrequired = document.getElementById('passwordrequired');
let ConfermpasswordReauired = document.getElementById('ConfermpasswordReauired');


firstName.addEventListener('blur', function() {
    let firstnamerequired = document.getElementById('firstnamerequired');
    if(firstName.value === ''){
        firstnamerequired.style.display = 'block';
    } else {
        firstnamerequired.style.display = 'none';
    }
})

lastName.addEventListener('blur', function() {
    let lastnamerequired = document.getElementById('lastnamerequired');
    if(lastName.value === ''){
        lastnamerequired.style.display = 'block';
    } else {
        lastnamerequired.style.display = 'none';
    }
})

email.addEventListener('blur', function() {
    let emailrequired = document.getElementById('emailrequired');
    if(email.value === ''){
        emailrequired.style.display = 'block';
    } else {
        emailrequired.style.display = 'none';
    }
})





register.addEventListener('click',function() {
    let firstNameValue = document.getElementById('firstname').value;
    let lastNameValue = document.getElementById('lastname').value;
    let emailValue = document.getElementById('Email').value;
    let passwordValue = document.getElementById('password').value;

    let data = {
        firstName: firstNameValue,
        lastName: lastNameValue,
        email: emailValue,
        password: passwordValue
    }

    if (LS.searchEmailExists(email)) {
        console.log("Email already exists");
    } else {
        LS.saveDataInLocalStorage(data);
    }
})

