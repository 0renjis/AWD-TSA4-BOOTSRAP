function handleSignUpButtonClick() {
    alert("Sign Up button clicked!");
}

function handleFreeSignUpButtonClick() {
    alert("Sign up for Free button clicked!");
}

document.addEventListener("DOMContentLoaded", function() {
    const signUpButton = document.querySelector(".navbar-nav .nav-item button");
    if (signUpButton) {
        signUpButton.addEventListener("click", handleSignUpButtonClick);
    }

    const freeSignUpButton = document.querySelector(".free-btn");
    if (freeSignUpButton) {
        freeSignUpButton.addEventListener("click", handleFreeSignUpButtonClick);
    }
});
