import { Password } from "./password.model.js";
import {Localstorage} from "./localstorage.modle.js"

let pass= new Password();
let LS= new Localstorage();

//html ELement
let email = document.getElementById('Email');
let form = document.querySelector('form');
let password = document.getElementById('password');
let iconeyepassword = document.getElementById('iconeyepassword');
let login = document.getElementById('btn');
let emailrequired = document.getElementById('emailrequired');
let wrongPassword = document.getElementById('wrongPassword');


// show password
iconeyepassword.addEventListener('click',pass.showPassword)

// Login button
login.disabled=true;
login.addEventListener('click',function() {
    if (LS.searchEmailExists(email.value)) {
        emailrequired.style.display = 'none';
        pass.checkIfPasswordIsCorrect();
    }else {
        emailrequired.style.display = 'block';
        emailrequired.innerText = 'Email is not Exsist'
    }
})

form.addEventListener('input',function(){   
    if (email.value !== '' && password.value !=='') {
        login.disabled=false;
        login.classList.add('valid')
    } else {
        login.disabled=true;
        login.classList.remove('valid')
    }
})