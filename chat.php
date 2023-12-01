<?php
$file = fopen('chat.txt', 'a+');

if (isset($_GET['message'])) {
    $message = strip_tags($_GET['message']);
    fputs($file, $message . "\n");
    echo "ok";
    die();
}

$messages = file_get_contents('chat.txt');
echo $messages;