let usersDb = [];

function solve() {
    let submitBtn = document.querySelector('form button');
    submitBtn.addEventListener('click', register);

    let searchBtn = document.querySelector('#exercise > button');
    searchBtn.addEventListener('click', search);
}

function register(event) {
    event.preventDefault();
    let user = getUser();
    usersDb.push(user);
    updateTable(usersDb);
    clearInput();
}

function search() {
    let searchStr = document.querySelector('#exercise > input').value;
    let users = searchUsers(searchStr);
    updateTable(users);
}

function getUser() {
    let inputArgs = Array.from(document.querySelectorAll('form input'));
    let username = inputArgs.shift().value;
    let password = inputArgs.shift().value;
    let email = inputArgs.shift().value;
    let topics = [];
    for(let topic of inputArgs) {
        if (topic.checked) {
            topics.push(topic.value);
        }
    }

    return {
        'name': username,
        'password': password,
        'email': email,
        'topics': topics
    }
}

function updateTable(users) {
    let rows = '';
    for(let user of users) {
        let row = '';
        row += `<td>${user.name}</td>`;
        row += `<td>${user.email}</td>`;
        row += `<td>${user.topics.join(', ')}</td>`;
        rows += `<tr>${row}</tr>`;
    }

    document.querySelector('table tbody').innerHTML = rows;
}

function clearInput() {
    let inputArgs = Array.from(document.querySelectorAll('form input'));
    let username = inputArgs.shift();
    let password = inputArgs.shift();
    let email = inputArgs.shift();
    username.value = '';
    password.value = '';
    email.value = '';
    for(let topic of inputArgs) {
        topic.checked = false;
    }
}

function searchUsers(searchStr) {
    if(searchStr == '') {
        return usersDb;
    }

    let users = [];
    for(let user of usersDb) {
        console.log(user);
        if(user.name.includes(searchStr)
        || user.email.includes(searchStr)
        || user.topics.some(x => x.includes(searchStr))) {
            users.push(user);
        }
    }
    return users;
}
