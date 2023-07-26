function solve() {
	let buttons = document.querySelectorAll('button');
	let sendBtn = buttons[0];
	let decodeBtn = buttons[1];

	sendBtn.addEventListener('click', sendHandler);
	decodeBtn.addEventListener('click', decodeHandler);

	function sendHandler() {
		let textAreas = document.querySelectorAll('textarea');
		let sendArea = textAreas[0];
		let decodeArea = textAreas[1];

		let message = sendArea.value;

		if(message !== '') {
			encodedMessage = encodeMessage(message);
			sendArea.value = '';
			decodeArea.value = encodedMessage;
		}
	}

	function decodeHandler() {
		let decodeArea = document.querySelectorAll('textarea')[1];
		let message = decodeArea.value;

		if(message !== '') {
			decodedMessage = decodeMessage(message);
			decodeArea.value = decodedMessage;
		}
	}

	function encodeMessage(message) {
		let encodedMessage = '';
		for(let char of message) {
			let asciiCode = char.charCodeAt(0);
			let modifiedAsciiCode = asciiCode + 1;
			let modifiedChar = String.fromCharCode(modifiedAsciiCode);
			encodedMessage += modifiedChar;
		}
		return encodedMessage;
	}

	function decodeMessage(message) {
		let decodedMessage = '';
		for(let char of message) {
			let asciiCode = char.charCodeAt(0);
			let modifiedAsciiCode = asciiCode - 1;
			let modifiedChar = String.fromCharCode(modifiedAsciiCode);
			decodedMessage += modifiedChar;
		}
		return decodedMessage;
	}
}