<?php
$destinatari .= "info@duemmetrade.com ";
// $destinatari .= "silvio.viscuso@webit.it";

/* intestazioni addizionali per errori, campo CC, BCC, etc */
/*$intestazioni .= "From: ".$_REQUEST['nome']." ".$_REQUEST['cognome']."<".$_REQUEST['email'].">\n";*/

$intestazioni .= "From: <servizi@infotel.it>\n";
$intestazioni .= "Reply-To: <".$_REQUEST['email'].">\n";

/*$intestazioni .= "X-Sender: <".$_REQUEST['email'].">\n";*/
$intestazioni .= "X-Mailer: PHP\n"; // mailer
//$intestazioni .= "X-Priority: 1\n"; // Messaggio urgente!
$intestazioni .= "Return-PATH: <".$_REQUEST['email'].">\n";  // Indirizzo di ritorno per errori
$intestazioni .= 'MIME-Version: 1.0' . "\r\n";
/*$intestazioni .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";*/
$intestazioni .= 'Content-Type: text/plain; charset=iso-8859-1' . "\r\n";


/* Se si vuole inviare una mail in formato html, togliere il commento alla seguente linea */
//$intestazioni .= "Content-Type: text/html; charset=iso-8859-1\n"; // Tipo Mime
/*if (!empty($destinatari_cc)) {
    $intestazioni .= "cc:".$destinatari_cc."\n"; // CC in copia a
}*/

//oggetto
$oggetto=$_REQUEST['gestione_form_oggetto'];

// messaggio
$messaggio ="";
/*$messaggio.="<!DOCTYPE HTML PUBLIC '-//W3C//DTD HTML 4.0 Transitional//EN'><html><body><style>body{background: #ffffff ;font-family: Tahoma, Verdana, sans-serif;color: #000000; font-size: 0.84em; letter-spacing: 0.01em; text-align: left;	margin: 20px;	padding: 0;}</style>";
*/

$messaggio.="Richiesta informazioni\n\n
Nome: ".$_POST[nome]."\n
Cognome: ".$_POST[cognome]."\n
E-mail: ".$_POST[email]."\n
Telefono: ".$_POST[telefono]."\n
Messaggio: ".$_POST[note]."\n
Consenso al trattamento dei dati inviati: si\n";

/* ed infine l'invio */
mail($destinatari, $oggetto, $messaggio, $intestazioni);

//trova l'url parlante della thankyoupage
$redirect = $_REQUEST['gestione_form_ritorno'];

if($redirect!=""){
	header('Location: '.$redirect);
	exit;
}

?>