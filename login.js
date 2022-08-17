// step 1: add click handler with the submit button
document.getElementById('submit-btn').addEventListener('click', function() {
    // step 2: get the email address inside the email adress inside the email input field
    // always remember to use .value to get the text from an input

    let emaiField = document.getElementById('email-field');
    let getEmail = emaiField.value;
        console.log(getEmail);

    // step 3: get password
    // 3.a: set id on the html element
    // 3.b: get the element
    // 3.c: get the value from the element
    let passwordField = document.getElementById('password-feld');
    let getPassword = passwordField.value;
        console.log(getEmail,getPassword);


    // Do not verify email password on the client side
    // step 4: Verify email & password
    if (getEmail === 'momin@gmail.com' && getPassword === '1234') {
        window.location.href = 'bank.html';
    }else{
        alert('Invalid Email & Password')
    }
})