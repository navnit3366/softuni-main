function solve() {
    addEventListeners();

    function toggleInfo(event) {
        let btn = event.target;
        let profile = btn.parentNode;

        let radioBtn = profile.querySelector(`[value='lock']`);

        if(!radioBtn.checked) {
            let hiddenFields = profile.querySelectorAll('div')[1];
            if(hiddenFields.style.display == 'none') {
                hiddenFields.style.display = 'inline';
                btn.textContent = 'Hide info';
            }
            else {
                hiddenFields.style.display = 'none';
                btn.textContent = 'Show more';
            }
        }
    }

    function addEventListeners() {
        let buttons = document.querySelectorAll('button');
        for(let btn of buttons) {
            btn.addEventListener('click', toggleInfo);
        }
    }
} 