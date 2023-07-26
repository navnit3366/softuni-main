
 function register() {
    let username = document.querySelector('#username').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    let validUsername = !isNullOrEmpty(username);
    let validPassword = !isNullOrEmpty(password);
    let regexPattern = /(.+)@(.+).(com|bg)/gm;
    let validEmail = regexPattern.test(email);

    if(validUsername && validPassword && validEmail) {
        setTimeout(printMessage, 5000);
    }

    function isNullOrEmpty(input) {
        return input == null || input == '';
    }

    function printMessage() {
        let output = `<h1>Successful Registration!</h1>`
        + `Username: ${username} <br>`
        + `Email: ${email} <br>`
        + `Password: ${'*'.repeat(password.length)}`

        document.querySelector('#result').innerHTML = output;
    }
}
