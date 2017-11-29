/**
 * 
 */

function modal(token, email){

	var perfil = "portal";
	if (email != null){
		perfil = verificarPerfil(email);
	};
	
	//armazena a largura e a altura da janela
	var winH = $(window).height();	
	var winW = $(window).width();
	//centraliza na tela a janela popup
	$('#dialog').css('top',  winH/2-$('#dialog').height()/2);
	$('#dialog').css('left', winW/2-$('#dialog').width()/2);
	
	$('#dialog').show();

	//armazena a largura e a altura da tela
	var maskHeight = $(document).height();
	var maskWidth = $(window).width();
	
	//Define largura e altura do div#mask iguais ás dimensões da tela
	$('#mask').css({'width':maskWidth,'height':maskHeight});
	
	//efeito de transição
	$('#mask').fadeIn(1000);
	$('#mask').fadeTo("slow",0.8);
	
	$('#btn_operacional').click(function (e) {
		window.location.href = 'https://flex.populisservicos.com.br/populis/seguranca/login-default-form-submit.do?token=' + token;
		$('#mask, .window').hide();
	});
	$('#btn_portal').click(function (e) {
		window.location.href = 'https://flex.populisservicos.com.br/populisII-web/rest/user?token=' + token;
		$('#mask, .window').hide();
	});
	$('#mask').click(function () {
		$(this).hide();
		$('.window').hide();
	});
};

function msg(){

	var perfil = "portal";
	
	//armazena a largura e a altura da janela
	var winH = $(window).height();	
	var winW = $(window).width();
	//centraliza na tela a janela popup
	$('#msg').css('top',  winH/2-$('#dialog').height()/2);
	$('#msg').css('left', winW/2-$('#dialog').width()/2);
	
	$('#msg').show();

	//armazena a largura e a altura da tela
	var maskHeight = $(document).height();
	var maskWidth = $(window).width();
	
	//Define largura e altura do div#mask iguais ás dimensões da tela
	$('#mask').css({'width':maskWidth,'height':maskHeight});
	
	//efeito de transição
	$('#mask').fadeIn(1000);
	$('#mask').fadeTo("slow",0.8);
};

function verificarPerfil(email){
	var result = portal;
	$.ajax({
		url: 'https://flex.populisservicos.com.br/populisII-web/rest/user/busca?singleSignOnKey=' + email,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: false,
	})
  	.done(function( data ) {
  	})
    .fail(function(data) {
    })
   	.always(function(data) {
    	if (data.status == 200) {
    		result = testaPerfil(data);
    	}else{
    		result = porat;
    	};
   	});
	return result;	
};

function testaPerfil (perfis){
	var result = portal;
	for (var i = 0; i < perfis.length; i++) {
		if (perfis[i].atrIdPerfil == 1){
			result = operacional;
		};
	};	
};
