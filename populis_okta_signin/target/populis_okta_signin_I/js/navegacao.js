
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
			if (data[i].atrIdPerfil == 5){
				result=true;
			};
		};
   	});
	return result;
};