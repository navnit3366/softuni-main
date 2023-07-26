class CheckingAccount {

    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.products = [];
    }

    get clientId() {
        return this._clientId;
    }

    set clientId(value) {
        let validId = /^\d{6}$/;

        if (validId.test(value)) {
            this._clientId = value;
        }
        else {
            throw new TypeError('Client ID must be a 6-digit number');
        }
    }

    get email() {
        return this._email;
    }

    set email(value) {
        let validEmail = /^[a-zA-Z0-9]+@[a-zA-Z.]+$/;

        if(validEmail.test(value)) {
            this._email = value;
        }
        else {
            throw new TypeError('Invalid e-mail');
        }
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        let validateLength = /^.{3,20}$/;
        let validateLetters = /^[a-zA-Z]+$/;

        if (validateLength.test(value)) {
            if (validateLetters.test(value)) {
                this._firstName = value;
            }
            else {
                throw new TypeError('First name must contain only Latin characters');
            }
        }
        else {
            throw new TypeError('First name must be between 3 and 20 characters long');
        }
    }

    get lastName() {
        return this._firstName;
    }

    set lastName(value) {
        let validateLength = /^.{3,20}$/;
        let validateLetters = /^[a-zA-Z]+$/;

        if (validateLength.test(value)) {
            if (validateLetters.test(value)) {
                this._lastName = value;
            }
            else {
                throw new TypeError('Last name must contain only Latin characters');
            }
        }
        else {
            throw new TypeError('Last name must be between 3 and 20 characters long');
        }
    }
}

try {
    let acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov');
} catch (error) {
    console.log(error.message);
}

try {
    let acc = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov')
} catch (error) {
    console.log(error.message);
}

