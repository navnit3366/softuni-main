function initializeTable() {

    $('#createLink').on('click', createCountry);

    addCountryToTable('Bulgaria', 'Sofia');
    addCountryToTable('Germany', 'Berlin');
    addCountryToTable('Turkey', 'Ankara');
    fixRowLinks();
}

function addCountryToTable(country, capital) {

    let row = $('<tr>')
        .append($('<td>').text(`${country}`))
        .append($('<td>').text(`${capital}`))
        .append($('<td>')
            .append($('<a href="#">[Up]</a>').on('click', moveRowUp))
            .append($('<a href="#">[Down]</a>').on('click', moveRowDown))
            .append($('<a href="#">[Delete]</a>').on('click', deleteRow)));

    $('#countriesTable').append(row);
}

function fixRowLinks() {

    // Show all links in the table 
    $('#countriesTable a').css('display', 'inline');

    // Hide [Up] link in first table data row
    let tableRows = $('#countriesTable tr');
    $(tableRows[2]).find('a:contains("Up")').css('display', 'none');

    // Hide [Down] link in last table data row
    $(tableRows[tableRows.length-1]).find('a:contains("Down")')
        .css('display', 'none');
}

function createCountry() {

    let country = $('#newCountryText').val();
    let capital = $('#newCapitalText').val();
    addCountryToTable(country, capital);
    fixRowLinks();

    $('#newCountryText').val('');
    $('#newCapitalText').val('');
}

function moveRowUp() {

    let row = $(this).parent().parent();

    row.insertBefore(row.prev());

    fixRowLinks();
}

function moveRowDown() {

    let row = $(this).parent().parent();

    row.insertAfter(row.next());

    fixRowLinks();
}

function deleteRow() {

    let row = $(this).parent().parent();

    row.remove();

    fixRowLinks();
}