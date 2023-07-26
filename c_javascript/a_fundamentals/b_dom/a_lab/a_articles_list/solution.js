function solve() {
	let title = document.querySelector('#createTitle').value;
	let content = document.querySelector('#createContent').value;

	let article = document.createElement('article');
	article.innerHTML += `<h3>${title}</h3>`;
	article.innerHTML += `<p>${content}</p>`;

	document.querySelector('#articles').appendChild(article);
}