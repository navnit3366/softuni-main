function getData(name, age, weight, height) {

    function calculateBMI(weight, height) { return weight / (height / 100) ** 2; }

    function getStatus(bmi) {
        if(bmi < 18.5) return 'underweight';
        if(bmi < 25) return 'normal';
        if(bmi < 30) return 'overweight';
        return 'obese';
    }

    let obj = {};
    obj.name = name;
    obj.personalInfo = {
        age: age,
        weight: weight,
        height: height
    };
    obj.BMI = calculateBMI(weight, height);
    obj.status = getStatus(obj.BMI);

    if(obj.status == 'obese') {
        obj.recommendation = 'admission required';
    }

    return obj;
}

console.log(getData('Peter', 29, 75, 182));