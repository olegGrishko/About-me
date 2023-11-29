function send() {
    let message = document.getElementById('message').value;
    let userName = document.getElementById('userName').value;
    let historyMes = '';

    if (userName == '') {
        document.getElementById('errors').innerText = 'Вы забыли ввести свое имя';
        return
    }

    if (message == '') {
        document.getElementById('errors').innerText = 'Вы забыли ввести сообщение';
        historyMes = '';
        return
    }
    if (message !== '') {
        historyMes = document.getElementById('messages').value;
        console.log(historyMes);
    }

    document.getElementById('errors').innerText = '';
    document.getElementById('message').value = '';
    document.getElementById('messages').innerHTML = userName + ': ' + message + ' <BR> ' + historyMes;
}

