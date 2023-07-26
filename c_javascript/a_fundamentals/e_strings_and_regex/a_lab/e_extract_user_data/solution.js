function solve() {
    let userArr = JSON.parse(document.querySelector('#arr').value);

    let regex = /^([A-Z][a-z]* [A-Z][a-z]*) (\+359(?:[ -]\d{1,3}){3}) ([a-z0-9]+@[a-z]+\.([a-z]{2,3}))$/

    let output = '';
    for(let userData of userArr) {
        let match = regex.exec(userData);
        if(match !== null) {
            let name = match[1];
            let phone = match[2];
            let email = match[3];
            output += `<p>Name: ${name}</p>`;
            output += `<p>Phone Number: ${phone}</p>`;
            output += `<p>Email: ${email}</p>`;
        }
        else {
            output += '<p>Ivalid data</p>'
        }
        output += '<p>- - -</p>';
    }

    document.querySelector('#result').innerHTML = output;
}