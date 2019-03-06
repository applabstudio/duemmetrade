function valida_email(txt){
	var r = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;

	if(r.test(txt)) return true;
	else return false;
}

function controllaForm(form_tipo){
	var check = true;
	var output = '';
	
	switch(form_tipo) {

			case 'contatti':

				if(document.contatti.nome.value==''){
					check = false;
					output += 'Inserisci il nome'+"\n";
				}
				
				if(document.contatti.cognome.value==''){
					check = false;
					output += 'Inserisci il cognome'+"\n";
				}
				
				if(!valida_email(document.contatti.email.value)){
					check = false;
					output += 'Inserisci un indirizzo e-mail corretto'+"\n";
				}
				
				if(document.contatti.privacy.checked == false ){
					check = false;
					output += 'Acconsenti al trattamento dei dati'+"\n\n";
				}

			if(!check) alert(output);
			return check;
			
			break;

	}
}