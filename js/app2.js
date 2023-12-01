getMessage();
setInterval(getMessage, 2000);

function getMessage() {
    (async () => {
        const response = await fetch('chat.php');
        const answer = await response.text();
        document.getElementById('messages').innerText = answer;
        //console.log("222");
    }
    )();
}