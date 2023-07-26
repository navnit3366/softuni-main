function solve() {
    let strArr = getInput();
    let cars = getCars(strArr);
    printResult(cars);
}

function getInput() {
    let input = document.querySelector('#arr').value;
    let strArr = JSON.parse(input);
    return strArr;
}

function printResult(cars) {
    let result = '';
    for(let key in cars) {
        result += `<p>${key} -> ${cars[key]}</p>`;
    }
    document.querySelector('#result').innerHTML = result;
}

function getCars(strArr) {
    let cars = {
        'BulgarianArmy': 0,
        'CivilProtection': 0,
        'Diplomatic': 0,
        'Foreigners': 0,
        'Transient': 0,
        'Sofia': 0,
        'Province': 0,
        'Other': 0
    };

    for(let str of strArr) {
        if(isBulgarianArmy(str)) {
            cars['BulgarianArmy']++;
        }
        else if(isCivilProtection(str)) {
            cars['CivilProtection']++;
        }
        else if(isDiplomaticNumber(str)) {
            cars['Diplomatic']++;
        }
        else if(isForeignersNumber(str)) {
            cars['Foreigners']++;
        }
        else if(isTransientNumber(str)) {
            cars['Transient']++;
        }
        else if(isSofiaNumber(str)) {
            cars['Sofia']++;
        }
        else if(isProvinceNumber(str)) {
            cars['Province']++;
        }
        else {
            cars['Other']++;
        }
    }

    return cars;
}

function isBulgarianArmy(str) {
    let regex = /^BA +\d{3} +\d{3}$/;
    return regex.test(str);
}

function isCivilProtection(str) {
    let regex = /^CP +\d{2} +\d{3}$/;
    return regex.test(str);
}

function isDiplomaticNumber(str) {
    let regex = /^(C|CT) +\d{4}$/;
    return regex.test(str);
}

function isForeignersNumber(str) {
    let regex = /^XX +\d{4}$/;
    return regex.test(str);
}

function isTransientNumber(str) {
    let regex = /^\d{3} +[A-Za-z] +\d{3}$/;
    return regex.test(str);
}

function isSofiaNumber(str) {
    let regex = /^(C|CA|CB) +\d{4} +[a-zA-Z]{1,2}$/;
    return regex.test(str);
}

function isProvinceNumber(str) {
    let regex = /^[a-zA-Z]{1,2} +\d{4} +[a-zA-Z]{1,2}/;
    return regex.test(str);
}
