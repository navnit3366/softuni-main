function isSymmetric(arr) {

    if(!Array.isArray(arr)) return false;

    let reverse = arr.slice(0).reverse() // Clone and reverse

    return JSON.stringify(arr) == JSON.stringify(reverse);
}

module.exports = isSymmetric;