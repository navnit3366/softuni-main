function getCar(requirements) {

    let engines = [ 
        {power: 90, volume: 1800},
        {power: 120, volume: 2400},
        {power: 200, volume: 3500}
    ];

    let car = {};
    car.model = requirements.model;
    car.engine = engines.find(x => x.power >= requirements.power);
    car.carriage = {type: requirements.carriage, color: requirements.color};

    if (requirements.wheelsize % 2 == 0)
        requirements.wheelsize -= 1;

    car.wheels = [
        requirements.wheelsize,
        requirements.wheelsize,
        requirements.wheelsize,
        requirements.wheelsize,
    ];

    return car;
}

let car = getCar({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
});

let car2 = getCar({
    model: 'VW Golf II',
    power: 90, color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});

console.log(car);
console.log(car2);