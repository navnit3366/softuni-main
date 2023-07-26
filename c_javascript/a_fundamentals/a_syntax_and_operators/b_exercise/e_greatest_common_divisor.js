// Calculates GCD using Euclidean algorithm.
function gcd(a, b) {
    let largerNumber = a;
    let smallerNumber = b;

    if(b > a) {
        largerNumber = b;
        smallerNumber = a;
    }

    let reminder = largerNumber % smallerNumber;

    // GCD is the smaller number.
    if (reminder == 0) {
        console.log(smallerNumber);
        return;
    }

    // GCD is the last non zero reminder.
    let lastNonZeroReminder = reminder;
    while(reminder !== 0) {
        lastNonZeroReminder = reminder;

        largerNumber = smallerNumber;
        smallerNumber = reminder;
        reminder = largerNumber % smallerNumber;
    }

    console.log(lastNonZeroReminder);
}

gcd(36, 48);