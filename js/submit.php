<?php


$email = $_POST["email"];
$name =  $_POST["name"];
$message = $_POST["message"];

function submit($email,$name,$message) {
	if ($email != '' && $name!='' && $message!=''){
		mail( "weizhen167@gmail.com", "Subject: $name", $message, "From: $email" );
		echo "Thank you! I'll be in touch with you soon";
	}
	else {
		echo "please double check your info??";
	}
}


//submit($email0,$name0,$message0);

?>
