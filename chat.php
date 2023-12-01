<?php
$file = fopen('chat.txt', 'a+');

if (isset($_GET['message'])) {
    $message = strip_tags($_GET['message']);
    fputs($file, $message . "\n");
    echo "ok";
    die();
}

/*$messages = file_get_contents('chat.txt');
print($messages);
$messages_rev = array_reverse($messages);
echo $messages_rev;*/

/*
$content = file_get_contents('chat.txt');
$content1 = explode("\n", $content);
krsort($content1);
//var_dump($content1);
foreach ($content1 as $value) {
    if (!empty($value)) {
        echo $value . "</br>";
    }
}
*/
//------------------------------work---------------------------
?>
<ul style="list-style: none;">
<?php
	$file_text = file_get_contents( 'chat.txt');
	$text_list = explode( "\n", $file_text );
	krsort( $text_list );
	foreach ( $text_list as $text ) {
		if ( ! empty ( $text ) ) {
		?>
			<li> <?php echo $text; ?></li>
		<?php
		}

	}

?>
</ul>