import { Localstorage} from './localstorage.modle.js';

export class Validator {
    constructor() {}
    
    firstNameValidator() {
        // debugger;
        let firstName = document.getElementById('firstname');
        let firstnamerequired = document.getElementById('firstnamerequired');
        if(firstName.value === ''){
            firstnamerequired.style.display = 'block';
            firstnamerequired.innerText = 'Required Field';
            return false;
        } else {
            firstnamerequired.style.display = 'none';
            return true;
        }
    }
    
    lastNameValidator() {
        // debugger;
        let lastName = document.getElementById('lastname');
        let lastnamerequired = document.getElementById('lastnamerequired');
        if(lastName.value === ''){
            lastnamerequired.style.display = 'block';
            lastnamerequired.innerText = 'Required Field';
            return false;
        } else {
            lastnamerequired.style.display = 'none';
            return true;
        }
    }

    emailValidator() {
        // debugger;
        let email = document.getElementById('Email');
        let emailrequired = document.getElementById('emailrequired');
        let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let LS = new Localstorage();
        if(email.value === ''){
            emailrequired.style.display = 'block';
            emailrequired.innerText = 'Required Field';
            return false;
        } else if (!emailRegex.test(email.value)) {
            emailrequired.style.display = 'block';
            emailrequired.innerText = 'it should contain @ and (.com/.in/.org)';
            return false;
        } else if (LS.searchEmailExists(email.value)){
            emailrequired.style.display = 'block';
            emailrequired.innerText = 'This Email is Exist';
        }else{
            emailrequired.style.display = 'none';
            return true;
        }
    }

    passwordValidator() {
        // debugger;
        let password = document.getElementById('password');
        let passwordrequired = document.getElementById('passwordrequired');
        let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if(password.value === ''){
            passwordrequired.style.display = 'block';
            passwordrequired.innerText = 'Required Field';
            return false;
        } else if (!passwordRegex.test(password.value)) {
            passwordrequired.style.display = 'block';
            passwordrequired.innerText = 'it special character, number, uppercase and lowercase letter';
            return false;
        } else {
            passwordrequired.style.display = 'none';
            return true;
        }
    }

    confirmPasswordValidator() {
        // debugger;
        let password = document.getElementById('password');
        let confirmPassword = document.getElementById('confirmPassword');
        let ConfermpasswordReauired = document.getElementById('ConfermpasswordReauired');
        if(confirmPassword.value === ''){
            ConfermpasswordReauired.style.display = 'block';
            ConfermpasswordReauired.innerText = 'Required Field';
            return false;
        } else if (password.value !== confirmPassword.value) {
            ConfermpasswordReauired.style.display = 'block';
            ConfermpasswordReauired.innerText = 'Password does not match';
            return false;
        } else {
            ConfermpasswordReauired.style.display = 'none';
            return true;
        }
    }

    checkAllValidationDone() {
        // debugger;
        if (this.firstNameValidator() && this.lastNameValidator() && this.emailValidator() && this.passwordValidator() && this.confirmPasswordValidator()) {
            return true;
        } else {
            return false;
        }
    }

    checkRegisterButton() {
        // debugger;
        let register = document.getElementById('btn');
        if (this.checkAllValidationDone()) {
            register.disabled = false;
            register.classList.add('valid');
        } else {
            register.disabled = true;
            register.classList.remove('valid');
        }
    }
}