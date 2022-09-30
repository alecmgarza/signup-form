function matchPassword() {
    let password = document.getElementById("password").value;
    let passwordConfirm = document.getElementById("password-confirm").value;

    if (password != passwordConfirm) {
        passwordConfirm.setCustomValidity("passwords must be matching");
    } else return "";
}