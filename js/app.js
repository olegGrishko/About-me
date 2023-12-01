function send() {
    let userName = document.getElementById('userName').value;

    if (userName == '') {
        //document.getElementById('errors').innerText = 'Вы забыли ввести свое имя';
        userName = 'Гость';
        //return
    }

    let message = userName + ": " + document.getElementById('message').value;

    let historyMes = document.getElementById('messages').innerHTML;



    if (message == '') {
        document.getElementById('errors').innerText = 'Вы забыли ввести сообщение';
        return
    }

    (async () => {
        const response = await fetch('chat.php?message=' + message);
        const answer = await response.text();
        document.getElementById('errors').innerText = '';
        document.getElementById('message').value = '';
    }
    )();



    //document.getElementById('messages').innerHTML = userName + ': ' + message + ' <BR> ' + historyMes;
}

/*
get();
setInterval(get, 2000);

function get() {
    (async () => {
        const response = await fetch('chat.php');
        const answer = await response.text();
        document.getElementById('messages').innerText = answer;
        console.log("222");
    }
    )();
}*/
