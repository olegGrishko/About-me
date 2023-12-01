getMessage();
setInterval(getMessage, 2000);
//------work
function getMessage() {
    (async () => {
        const response = await fetch('chat.php');
        const answer = await response.text();
        document.getElementById('messages').innerHTML = answer;
        //console.log("222");
    }
    )();
}
//----
/*function getMessage() {
    let arr = [];
    let rev_arr = [];
    (async () => {
        const response = await fetch('chat.php');
        const answer = await response.text();
        arr.push(answer);
        rev_arr = arr.reverse();
        //  document.getElementById('messages').innerText = answer;
        console.log(rev_arr);
    }
    )();
}*/