/**
 * Displays flight information.
 * 
 * @param {Array} args - Array containing flight information arguments.
 */
function flightTimetable(args) {
    let flightStatus = args[0];
    let destination = args[1];
    let time = args[2];
    let flightNumber = args[3];
    let gateNumber = args[4];

    let output = `${flightStatus}: Destination - ${destination}, `
    + `Flight - ${flightNumber}, Time - ${time}, Gate - ${gateNumber}`;

    console.log(output);
}

flightTimetable(['Departures', 'London', '22:45', 'BR117', '42']);