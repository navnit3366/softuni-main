function attachEvents() {
    $('a').on('click', handleClick);
}

function handleClick() {

    $('a').removeClass('selected');
    $(this).addClass('selected');
}