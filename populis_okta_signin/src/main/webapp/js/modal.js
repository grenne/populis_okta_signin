/**
 * 
 */

function modal(session){

	
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
		window.location.href = 'https://flex.populisservicos.com.br/populis/seguranca/login-default-form-submit.do?token=' + session.id;
		$('#mask, .window').hide();
	});
	$('#btn_portal').click(function (e) {
		window.location.href = 'https://flex.populisservicos.com.br/populisII-web/rest/user?token=' + session.id;
		$('#mask, .window').hide();
	});
	$('#mask').click(function () {
		$(this).hide();
		$('.window').hide();
	});
};
