function printTickets(tickets, sortingCriteria) {

    class Ticket {

        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }

        toString() {
            return `${this.destination}|$${this.price.toFixed(2)}|${this.status}`
        }
    }

    let ticketsArray = [];
    for (t of tickets) {
        tArgs = t.split('|');
        ticketsArray.push(new Ticket(tArgs[0], +tArgs[1], tArgs[2]));
    }

    switch(sortingCriteria) {
        case 'destination':
            ticketsArray.sort((a, b) => a.destination.localeCompare(b.destination));
            break;
        case 'price':
            ticketsArray.sort((a, b) => a.price - b.price);
            break;
        case 'status':
            ticketsArray.sort((a, b) => a.status.localeCompare(b.status));
            break;
    }

    console.log(ticketsArray.join('\n'))
}

printTickets(
    ['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination');

console.log();

printTickets(
    ['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'status');