	
	document.getElementById('toggleProfile').addEventListener('click', function () {
	  [].map.call(document.querySelectorAll('.profile'), function(el) {
	    el.classList.toggle('profile--open');
	  });
	});

	$( "#toggleProfile" ).trigger( "click" );
	//armazena a largura e a altura da janela
	var winH = $(window).height();	
	var winW = $(window).width();
	//centraliza na tela a janela popup
	$('#navegacao').css('top',  winH/2-$('#dialog').height()/2);
	$('#navegacao').css('left', winW/2-$('#dialog').width()/2);
	
	//Define largura e altura do div#mask iguais ás dimensões da tela
	$('#mask').css({'width':winW,'height':winH});
	
	$('#btn_operacional').click(function (e) {
		window.location.href = sessionStorage.dominio + 'populis/seguranca/login-default-form-submit.do?token=' + localStorage.token;
	});
	$('#btn_portal').click(function (e) {
		window.location.href = sessionStorage.dominio + 'populisII-web/rest/user?token=' + localStorage.token;
	});
