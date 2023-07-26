/**
 * Prints all even numbers from 1 to n (inclusive).
 * 
 * @param {number} n - The end of the sequence.
 */
function printEvenNumbers(n) {
    for(let i = 1; i <= n; i++) {
        if(i % 2 == 0) {
            console.log(i);
        }
    }
}

printEvenNumbers(100000);