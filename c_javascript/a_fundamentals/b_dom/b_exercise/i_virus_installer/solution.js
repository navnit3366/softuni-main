function solve() {
    var currentStep = 0;

    addEvents();

    function addEvents() {
        let buttonsArray = document.querySelectorAll('button');
        let nextBtn = buttonsArray[0];
        let cancelBtn = buttonsArray[1];

        nextBtn.addEventListener('click', handleNext);
        cancelBtn.addEventListener('click', handleCancelAndFinish);
    }

    function handleNext() {
        switch(currentStep) {
            case 0:
                hideBackgroundImage();
                displayFirstStep();
                currentStep++;
                break;
            case 1:
                let agreeLicense = document.querySelector('#agree').checked;
                if(agreeLicense) {
                    hideFirstStep();
                    displaySecondStep();
                    hideNextButton();
                    setTimeout(showNextButton, 3000);
                    currentStep++;
                }
                break;
            case 2:
                hideSecondStep();
                displayThirdStep();
                hideNextButton();
                changeCancelToFinishButton();
                break;

        }
    }

    function handleCancelAndFinish() {
        hideExercise();
    }

    function hideBackgroundImage() {
        let content = document.querySelector('#content');
        content.style.backgroundImage = 'none';
    }

    function displayFirstStep() {
        let firstStep = document.querySelector('#firstStep');
        firstStep.style.display = 'inline';
    }

    function hideFirstStep () {
        let firstStep = document.querySelector('#firstStep');
        firstStep.style.display = 'none';
    }

    function displaySecondStep() {
        let secondStep = document.querySelector('#secondStep');
        secondStep.style.display = 'inline';
    }
    
    function hideSecondStep () {
        let secondStep = document.querySelector('#secondStep');
        secondStep.style.display = 'none';
    }

    function displayThirdStep() {
        let thirdStep = document.querySelector('#thirdStep');
        thirdStep.style.display = 'inline';
    }

    function hideExercise() {
        let exercise = document.querySelector('#exercise section');
        exercise.style.display = 'none';
    }

    function showNextButton() {
        let nextBtn = document.querySelectorAll('button')[0];
        nextBtn.style.display = 'inline';
    }

    function hideNextButton() {
        let nextBtn = document.querySelectorAll('button')[0];
        nextBtn.style.display = 'none';
    }

    function changeCancelToFinishButton() {
        let cancelBtn = document.querySelectorAll('button')[1];
        cancelBtn.innerText = 'Finish';
    }
}