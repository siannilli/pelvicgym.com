<?php

$messaggio = $_POST['corpoMail'];
$destinatario = "info@pelvicgym.com";
$oggetto = "Richiesta informazioni da sito";
$intestazioni = "From: ".$_POST['nome']." <".$_POST['indirizzo'].">\r\n";
$intestazioni .= "Reply-To: ".$_POST['indirizzo']."\r\n";

$ret = mail($destinatario,$oggetto,$messaggio,$intestazioni);
header('Content-type: application/json; charset=iso-8859-1');

if ($ret) {
	echo "{msg: 'La richiesta è stata inviata correttamente.'}";
} else {
	echo "{msg: '<h2>ATTENZIONE!</h2>Si è verificato un errore. Riprova in un secondo momento.'}";
}

?>