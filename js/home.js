let firstName= document.getElementById('firstName');
let lastName= document.getElementById('lastName');
let Email= document.getElementById('Email');
let btn = document.getElementById('btn');


firstName.innerText = JSON.parse(localStorage.getItem('user')).firstName;
lastName.innerText = JSON.parse(localStorage.getItem('user')).lastName;
Email.innerText = JSON.parse(localStorage.getItem('user')).email;

btn.addEventListener('click',function() {
    window.location.href='../index.html';
})