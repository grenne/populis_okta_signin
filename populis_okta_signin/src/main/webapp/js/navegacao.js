
function operacional (usersso){
	var result = false;
	
	$.ajax({
		type: "GET",
		url: sessionStorage.url_populis + 'populisII-web/rest/user/busca?singleSignOnKey=' + usersso,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: false,
	})
  	.done(function( data ) {
  	})
    .fail(function(data) {
		result = false;
    })
   	.always(function(data) {
   		for (var i = 0; i < data.length; i++) {
   			console.log ("Perfil - " + data[i].atrIdPerfil);
   			console.log ("Usuario okta - " + usersso);
			if (data[i].atrIdPerfil == 5 | data[i].atrIdPerfil == 6 |data[i].atrIdPerfil == 7 |data[i].atrIdPerfil == 8){
				result=true;
			};
		};
   	});
	return result;
};