function send() {
    let message = document.getElementById('message').value;

    if (message == '') {
        document.getElementById('errors').innerText = 'Вы забыли ввести сообщение';
        return
    }
    document.getElementById('errors').innerText = '';
    document.getElementById('message').value = '';
    document.getElementById('messages').innerText = message;
}