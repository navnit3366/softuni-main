function validate() {
    let generateBtn = document.querySelector('button');
    generateBtn.addEventListener('click', eventListener);
}

function eventListener() {
    let year = document.querySelector('#year').value;
    let month = document.querySelector('#month').value;
    let date = document.querySelector('#date').value;
    let gender = document.querySelector(`input[name='gender']:checked`).value;
    let region = document.querySelector('#region').value;

    let isValid = validateInput(year, gender, region);

    if(isValid) {
        let egn = generateEGN(year, month, date, gender, region);
        clearInput();
        document.querySelector('#egn').innerText = egn;
    }
}

function generateEGN(year, month, date, gender, region) {
    let formattedYear = getYear(year);
    let formattedMonth = getMonth(month);
    let formattedDate = getDate(date);
    let formattedGender = getGender(gender);
    let formattedRegion = getRegion(region);
    let egn = `${formattedYear}${formattedMonth}${formattedDate}${formattedRegion}${formattedGender}`;
    let lastDigit = getLastDigit(egn);
    egn += lastDigit;
    return egn;
}

function validateInput(year, gender, region) {
    if(!validateYear(year)) {
        console.log('Year not valid!')
        return false;
    }
    
    if(!validateGender(gender)) {
        console.log('Gender not valid!')
        return false;
    }

    if(!validateRegion(region)) {
        console.log('Region not valid!')
        return false;
    }

    return true;
}

function validateYear(year) {
    year = parseInt(year);
    if(!isNaN(year)) {
        if(year >= 1900 && year <= 2100) {
            return true;
        }
    }
    return false;
}

function validateGender(gender) {
    switch(gender) {
        case 'Male':
        case 'Female':
            return true;
        default:
            return false;
    }
}

function validateRegion(code) {
    code = parseInt(code); 
    if(!isNaN(code)) {
        if(code >= 43 && code <= 999) {
            return true;
        }
    }
    return false;
}


function getYear(year) {
    return year[year.length-2] + year[year.length-1];
}

function getMonth(month) {
    let date = new Date(month + '1, 2000');
    let monthNumber = date.getMonth() + 1;
    return (monthNumber < 10) ? ('0' + monthNumber) : monthNumber;    
}

function getDate(date) {
    return (date < 10) ? ('0' + date) : date;
}

function getRegion(code) {
    return code.slice(0, 2);
}

function getGender(gender) {
    if(gender == 'Male') {
        return 2;
    }
    return 1;
}

function getLastDigit(digits) {
    let weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];
    let sum = 0;
    for(let i = 0; i < digits.length; i++) {
        sum += digits[i] * weights[i];
    }
    let reminder = sum % 11;
    return reminder == 10 ? 0 : reminder;
}

function clearInput() {
    document.querySelector('#year').value = '';
    document.querySelector('#month').value = 'January';
    document.querySelector('#date').value = '';
    document.querySelector(`input[name='gender']:checked`).checked = false;
    document.querySelector('#region').value = '';
}
