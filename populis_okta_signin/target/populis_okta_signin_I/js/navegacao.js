
	localStorage.perfil = "portal";
	if (localStorage.login != null){
		localStorage.perfil = verificarPerfil(localStorage.login);
	};

	
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
		window.location.href = sessionStorage.dominio + 'populis/seguranca/login-default-form-submit.do?token=' + localStorage.code;
	});
	$('#btn_portal').click(function (e) {
		window.location.href = sessionStorage.dominio + 'populisII-web/rest/user?token=' + localStorage.code;
	});

	function operacional (usersso){
		var result = false;
		$.ajax({
			type: "POST",
			url: sessionStorage.dominio + 'populisII-web/rest/user?singleSignOnKey=' + usersso,
	        contentType: "application/json; charset=utf-8",
	        dataType: 'json',
	        async: false,
	        data : JSON.stringify(objJson)
		})
	  	.done(function( data ) {
	  	})
	    .fail(function(data) {
			result = false;
	    })
	   	.always(function(data) {
	    	if (data.atrToken == objJson.atrToken) {
	    		result = true;
	    	}else{
	    		result = false;
	    	};
	   	});
		return result;
	};


	function verificarPerfil(token){
		var result = portal;
		$.ajax({
			url: sessionStorage.dominio + 'populisII-web/rest/user/busca?singleSignOnKey=' + token,
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
	    		result = porta;;
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
