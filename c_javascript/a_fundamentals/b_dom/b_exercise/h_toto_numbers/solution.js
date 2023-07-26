function solve() {
	let btn = document.querySelector('button');
	btn.addEventListener('click', eventListener);
}

function eventListener() {
	let input = document.querySelector('input');

	if(validateInput(input.value)) {
		addNumbers();
	}
}

function addNumbers() {
	let input = document.querySelector('input');
	let validNumbers = getValidNumbers(input.value);
	let allNumbers = document.querySelector('#allNumbers');
	for(let i = 1; i <= 49; i++) {
		let div = document.createElement('div');
		div.className = 'numbers';
		div.innerText = i;
		if(validNumbers.includes(i)) {
			div.style.backgroundColor = 'orange';
		}
		allNumbers.appendChild(div);
	}
}

function validateInput(input) {
	let numbers = input.split(' ');

	if(numbers.length !== 6) {
		return false;
	}

	let validNumbers = [];
	for(let n of numbers) {
		let number = parseInt(n);

		if(isNaN(number)) {
			return false;
		}

		if(number < 1 || number > 49) {
			return false;
		}

		if(validNumbers.includes(number)) {
			return false;
		}

		validNumbers.push(number);
	}

	return true;
}

function getValidNumbers(input) {
	let numbers = input.split(' ');
	let validNumbers = [];
	for(let n of numbers) {
		let number = parseInt(n);
		validNumbers.push(number);
	}
	return validNumbers;
}