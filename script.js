var email = document.getElementById('email');
var password = document.getElementById('password');
var email_error = document.getElementById('email_error');
var password_error = document.getElementById('password_error');

email.addEventListener('textInput', email_verify);
password.addEventListener('textInput', password_verify);

function validateForm() 
{
    if (email.value !== 'abdalrahmank2000@gmail.com' || password.value !== 'boudy2002K') {
        if (email.value.length < 9) {
            email.style.border = "1px solid red";
            email_error.style.display = "block";
            email.focus();
        } 
        else {
            email.style.border = "1px solid silver";
            email_error.style.display = "none";
        }

        if (password.value.length < 9) {
            password.style.border = "1px solid red";
            password_error.style.display = "block";
            password.focus();
        } 
        else 
        {
            password.style.border = "1px solid silver";
            password_error.style.display = "none";
        }
        alert('Invalid username or password!');
        return false;
    }

    return true; // Allow form submission if credentials are correct
}

function email_verify() 
{
    if (email.value.length >= 9) {
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
    }
}

function password_verify() {
    if (password.value.length >= 9) {
        password.style.border = "1px solid silver";
        password_error.style.display = "none";
    }
}

function validateFormSignUp() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var genderOptions = document.querySelectorAll('input[name="gender"]:checked');
    var termsChecked = document.getElementById('terms').checked;

    // Email validation
    if (email === ''||email.length<9) {
        document.getElementById('email_error').style.display = 'block';
        return false;
    } else {
        document.getElementById('email_error').style.display = 'none';
    }

    // Password validation
    if (password === ''||password.length<9) {
        document.getElementById('password_error').style.display = 'block';
        return false;
    } else {
        document.getElementById('password_error').style.display = 'none';
    }

    // Gender validation
    if (genderOptions.length === 0) {
        alert('Please select your gender');
        return false;
    }

    // Terms checkbox validation
    if (!termsChecked) {
        alert('Please agree to the terms and conditions');
        return false;
    }

    // If all validations pass, form submission is allowed
    return true;
}


function homeKitjuve (){
    var imageElement = document.getElementById('ronaldoShirt');
    imageElement.src = "pics/homepic-removebg-preview.png";

    imageElement.style.width="400px" 
    imageElement.style.height="auto"

}

function awayKitjuve (){
    var imageElement = document.getElementById('ronaldoShirt');
    imageElement.src = "pics/awaypic-removebg-preview.png";
    imageElement.style.height="400px"
    imageElement.style.width="auto"


}

function thirdKitjuve (){
    var imageElement = document.getElementById('ronaldoShirt');
    imageElement.src = "pics/thirdpic-removebg-preview.png";
    imageElement.style.width="400px";
    imageElement.style.height="auto";

}

function buy(){
    alert("Purchase done succssefully");
}

function back_from_contact(){
    alert("Thank you for contacting us");
}



