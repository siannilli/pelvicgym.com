<?php

$messaggio = $_POST['corpoMail'];
$destinatario = "info@pelvicgym.com";
$oggetto = "Richiesta informazioni da sito";
$intestazioni = "From: ".$_POST['nome']." <".$_POST['indirizzo'].">\r\n";
$intestazioni .= "Reply-To: ".$_POST['indirizzo']."\r\n";

$ret = mail($destinatario,$oggetto,$messaggio,$intestazioni);
if ($ret) {
	header('Location: mail.html');} else {	echo "mail non mandata!";}


?>