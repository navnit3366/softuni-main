let mathEnforcer = {

    addFive: function (num) {
        return typeof (num) !== 'number' ? undefined : num + 5;
    },
    subtractTen: function (num) {
        return typeof (num) !== 'number' ? undefined : num - 10;
    },
    sum: function (num1, num2) {
        return typeof (num1) !== 'number' || typeof (num2) !== 'number'
            ? undefined
            : num1 + num2;
    }
};

module.exports = mathEnforcer;