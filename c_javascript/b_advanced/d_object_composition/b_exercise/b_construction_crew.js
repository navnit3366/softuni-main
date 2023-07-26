function modifyWorker(worker) {

    if (worker.handsShaking) {
        let intake = 0.1 * worker.weight * worker.experience;
        worker.bloodAlcoholLevel += intake;
        worker.handsShaking = false;
    }

    return worker;
}

let worker = modifyWorker({
    weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true
});

console.log(worker);