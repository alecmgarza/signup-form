let password = document.getElementById("password");
let passwordConfirm = document.getElementById("password-confirm");

passwordConfirm.addEventListener("keydown", matchPasswords) 

function matchPasswords() {
    if (password != passwordConfirm) {
        passwordConfirm.setCustomValidity("passwords must be matching");
    }
}

// trying to have red border as passwordConfirm is typed until it matches password