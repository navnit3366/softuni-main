function solve() {
	var answers = ['2013', 'Pesho', 'Nakov'];
	var correctAnswersCount = 0;

	let buttons = document.querySelectorAll('button');
	for(let btn of buttons) {
		btn.addEventListener('click', eventHandler);
	}

	function eventHandler(event) {
		let section = event.target.parentNode;

		let input = getInput(section);

		if(input) {
			if(answers.includes(input)) {
				correctAnswersCount++;
			}

			let hiddenSection = document.querySelector('section.hidden');
			if (hiddenSection) {
				hiddenSection.className = '';
				hiddenSection.style.display = 'inline';
			}
			else {
				let resultElement = document.querySelector('#result');

				if(resultElement.innerText == '') {
					if(correctAnswersCount == 3) {
						resultElement.innerText = 'You are recognized as top SoftUni fan!';
					}
					else {
						resultElement.innerText = `You have ${correctAnswersCount} right answers.`;
					}
				}
			}
		}
	}

	function getInput(section) {
		let radios = section.querySelectorAll('input');
		for(let r of radios) {
			if(r.checked) {
				return r.value;
			}
		}
	}
}