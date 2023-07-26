function calculateTotal(day, service, time) {
    let weekend = ["Saturday", "Sunday"];
    let total = 0;

    if(weekend.includes(day)) {
        switch(service) {
            case 'Fitness': total = 8; break;
            case 'Sauna': total = 7; break;
            case 'Instructor': total = 15; break;
        }
    }
    else {
        if(time <= 15) {
            switch(service) {
                case 'Fitness': total = 5; break;
                case 'Sauna': total = 4; break;
                case 'Instructor': total = 10; break;
            }
        }
        else {
            switch(service) {
                case 'Fitness': total = 7.5; break;
                case 'Sauna': total = 6.5; break;
                case 'Instructor': total = 12.5; break;
            }
        }
    }

    console.log(total);
}

calculateTotal('Monday', 'Sauna', 15.30);