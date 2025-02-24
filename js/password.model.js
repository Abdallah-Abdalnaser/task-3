export class Password {
    constructor() {}

    showPassword() {
        if (iconeyepassword.classList.contains('fa-eye')) {
            iconeyepassword.classList.remove('fa-eye');
            iconeyepassword.classList.add('fa-eye-slash');
            password.setAttribute('type','text');
        } else {
            iconeyepassword.classList.remove('fa-eye-slash');
            iconeyepassword.classList.add('fa-eye');
            password.setAttribute('type','password');
            
        }
    }

    showConfirmPassword() {
        if (iconeyeconfirmpassword.classList.contains('fa-eye')) {
            iconeyeconfirmpassword.classList.remove('fa-eye');
            iconeyeconfirmpassword.classList.add('fa-eye-slash');
            confirmPassword.setAttribute('type','text');
        } else {
            iconeyeconfirmpassword.classList.remove('fa-eye-slash');
            iconeyeconfirmpassword.classList.add('fa-eye');
            confirmPassword.setAttribute('type','password');
        }
    }
}
