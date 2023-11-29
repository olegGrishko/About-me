function send() {
    let message = document.getElementById('message').value;
    let userName = document.getElementById('userName').value;
    let historyMes = document.getElementById('messages').innerHTML;

    if (userName == '') {
        //document.getElementById('errors').innerText = 'Вы забыли ввести свое имя';
        userName = 'Гость';
        //return
    }

    if (message == '') {
        document.getElementById('errors').innerText = 'Вы забыли ввести сообщение';
        return
    }


    document.getElementById('errors').innerText = '';
    document.getElementById('message').value = '';
    document.getElementById('messages').innerHTML = userName + ': ' + message + ' <BR> ' + historyMes;
}

