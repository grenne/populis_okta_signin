
function sethttp (objJson, autenticado, naoAutenticado, token, login){
	var result = false;
	$.ajax({
		type: "POST",
		url: sessionStorage.url_populis + 'populisII-web/rest/user/token',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: false,
        data : JSON.stringify(objJson)
	})
  	.done(function( data ) {
   		result = true;
   		if (autenticado){
   			autenticado(token, login);
   			console.log ("userinicial-" + login + " retorno-" + data.atrUser);
   			console.log ("tokeninicial-" + token + " retorno-" + data.atrToken);
   		};
  	})
	.fail(function(data){
   		if (naoAutenticado){
   			naoAutenticado(token, login);
   		};
   		result = false;
   		console.log ("nao gravou token");
	})
	.always(function(data) {
   	});
	return result;
};