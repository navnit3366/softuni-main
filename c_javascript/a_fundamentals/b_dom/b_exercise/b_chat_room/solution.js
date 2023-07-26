function solve() {
    solution2();

    function solution1() {
        let myBtn = document.querySelector(`[name='myBtn']`);
        myBtn.addEventListener('click', appendMyMessage);
        let peshoBtn = document.querySelector(`[name='peshoBtn']`);
        peshoBtn.addEventListener('click', appendPeshoMessage);

        function appendMyMessage() {
            let myChatBox = document.querySelector('#myChatBox');
            if(myChatBox.value !== '') {
                let message = `<div><span>Me</span><p>${myChatBox.value}</p></div>`;
                let chronology = document.querySelector('#chatChronology');
                chronology.innerHTML += message;
                myChatBox.value = '';
            }
        }

        function appendPeshoMessage() {
            let peshoChatBox = document.querySelector('#peshoChatBox');
            let message = `<div><span>Pesho</span><p>${peshoChatBox.value}</p></div>`;
            let chronology = document.querySelector('#chatChronology');
            chronology.innerHTML += message;
            peshoChatBox.value = '';
        }
    }

    function solution2() {
        let sendBtnArray = document.querySelectorAll('button');
        for(let sendBtn of sendBtnArray) {
            sendBtn.addEventListener('click', appendMessage);
        }

        function appendMessage(event) {
            let btnType = event.target.name;
            console.log(btnType);
            let chatBox;
            let sender;

            switch(btnType) {
                case 'myBtn':
                    chatBox = document.querySelector('#myChatBox');
                    sender = 'Me';
                    break;
                case 'peshoBtn':
                    chatBox = document.querySelector('#peshoChatBox');
                    sender = 'Pesho';
                    break;
            }

            let message = `<div><span>${sender}</span><p>${chatBox.value}</p></div>`;
            let chronology = document.querySelector('#chatChronology');
            chronology.innerHTML += message;
            chatBox.value = '';
        }
    }
}