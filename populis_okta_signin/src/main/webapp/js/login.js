/* Simple VanillaJS to toggle class */

document.getElementById('toggleProfile').addEventListener('click', function () {
  [].map.call(document.querySelectorAll('.profile'), function(el) {
    el.classList.toggle('profile--open');
  });
});

$('msgErro').show();

$( "#confirm" ).click(function() {
	$('#msgErr').html("");
	if (login($('#fieldUser').val(),$('#fieldPassword').val() )){
		var token = criaHash ($('#fieldUser').val());
		$('#msgErr').html("");
		var objJson = {
	  			atrUser: sessionStorage.emailLogin,
	  			atrToken: token
	  		};
		if (sethttp (objJson)) {
			window.location.href = sessionStorage.dominio + 'populis/seguranca/login-default-form-submit.do?token=' + objJson.atrToken;
	    }else{
	    	$('#msgErr').html("Problemas na autenticação do Populis, entre em contato conosco");
	    };
	}else{
		$('#msgErr').html("Usuário ou senha inválidos");
	};
});

function login (user, password){
	var result = false;
	var pass = encodeURIComponent(password);
	$.ajax({
		url: sessionStorage.dominio + 'populisII-web/rest/user/email?login=' + user + '&pass=' + pass,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: false,
	})
  	.done(function( data ) {
  	})
    .fail(function(data) {
    })
   	.always(function(data) {
   		if (data.status == 200){
   			sessionStorage.emailLogin = data.responseText;
   			result = true;
   		};
   	});
	return result;
};