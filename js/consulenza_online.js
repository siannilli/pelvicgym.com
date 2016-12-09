$().ready(function(){
	$('#consulenza').dialog(
		{
			autoOpen: false,
			title: 'Consulenza on line',
			modal:true, 
			width: 'auto',
			height: 'auto',
			resizable: false,
			closeOnEscape: true,
			closeText : 'X',
			buttons : {'Invia consulenza': inviaConsulenza, 'Annulla': function(){$('#consulenza').dialog('close');}},
			overlay:
				{
					opacity:0.5,
					background:'black'
				}
		});
		
	$('#alert').dialog(
		{
			autoOpen: false,
			title: 'Avviso',
			modal:true, 
			width: 'auto',
			height: 'auto',
			resizable: false,
			closeOnEscape: true,
			closeText : 'X',
			buttons : {'OK': function(){$('#alert').html('');$('#alert').dialog('close');}},
			overlay:
				{
					opacity:0.5,
					background:'black'
				}
		});
	
});

function consulenza_online(){
	$('#consulenza').dialog('open');
}

function alertDialog(testo){
	$('#alert').html(testo);
	$('#alert').dialog('open');
}

function inviaConsulenza(){

	var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
	
	if (!re.test($('#email').val())){
		alertDialog('Inserire un indirizzo e-mail valido');
		return;
	}
	
	if ($('#testo-consulenza').val()==''){
		alertDialog('Inserire la richiesta della consulenza.');
		return;
	}
	
	$.post('lib/sendMail.php', {
			nome: $('#nominativo').val(), 
			indirizzo: $('#email').val(), 
			corpoMail: $('#testo-consulenza').val()
		}, function(data){
			$('#consulenza').dialog('close');
			alertDialog(data.msg);		
		}, "json");	

}