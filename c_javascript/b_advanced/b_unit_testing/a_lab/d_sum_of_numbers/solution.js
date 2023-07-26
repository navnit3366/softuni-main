function sum(arr) {

    if(!Array.isArray(arr))
        throw new Error('Invalid parameter type! Should be array!')

    if(arr.some(x => typeof x !== 'number'))
        throw new Error('Array elements should be numbers!');

    let sum = 0;
    for(num of arr)
        sum += num;

    return sum;
}

module.exports = sum;