/**
 * Calculates how long it takes a student to get to the university.
 * 
 * @param {number} steps - The number of steps the student makes to get to the university.
 * @param {number} stepLength - The length of one step in meters.
 * @param {number} speed - The students speed in km/h.
 */
function calculateTime(steps, stepLength, speed) {
    let seconds = 0;

    distanceToUniversity = steps * stepLength; // meters

    let breaks = Math.floor(distanceToUniversity / 500);
    seconds += breaks * 60; // 60 sec break every 500m.

    // Speed = Distance / Time
    // Time = Distance / Speed
    seconds += (distanceToUniversity * 3600) / (speed * 1000);

    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let remainingSeconds = Math.round(seconds % 60);

    console.log(`${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`);

    /**
     * Adds leading zero to single digit numbers.
     */
    function pad(number) {
        return (number < 10) ? (`0${number}`) : number;
    }
}

calculateTime(2564, 0.7, 5.5);
