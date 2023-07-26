function attachEvents() {

	$('#items').on('click', 'li', toggleSelect);
	$('#showTownsButton').on('click', showTowns);
}

function toggleSelect() {

	if ($(this).attr('data-selected')) {
		$(this).removeAttr('data-selected')
		$(this).css('background', 'none');
	} else {
		$(this).attr('data-selected', true);
		$(this).css('background', '#DDD');
	}
}

function showTowns() {

	let towns = $('[data-selected]').toArray().map(x => x.textContent);
	$('#selectedTowns').text(towns.join(', '));
}