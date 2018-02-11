
function sethttp (objJson, autenticado, naoAutenticado, token){
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
   			autenticado(token);
   		};
  	})
	.fail(function(data){
   		if (naoAutenticado){
   			naoAutenticado(token);
   		};
   		result = false;
	})
	.always(function(data) {
   	});
	return result;
};