function solve() {
	setInterval(setRandomPosition, 2000);
	function randomNumber(min, max) {
		return Math.random() * (max - min) + min;
	}

	function setRandomPosition() {
		let noSignal = document.querySelector('#exercise div');
		noSignal.style.margin = `${randomNumber(1, 81)}% ${randomNumber(1, 45)}vh`;
	}
}