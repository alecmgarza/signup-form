function matchPassword() {
    let password = document.getElementById("password");
    let passwordConfirm = document.getElementById("password-confirm");

    if (password != passwordConfirm) {
        passwordConfirm.setCustomValidity("passwords must be matching");
    } else {
        return <div></div>
    }
}