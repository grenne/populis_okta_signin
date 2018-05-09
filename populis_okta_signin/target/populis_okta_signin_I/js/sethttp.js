
function sethttp(objJson){
	var result = false;
	$.ajax({
		type: "POST",
		url: sessionStorage.url_populis + 'rest/user/token',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: false,
        data : JSON.stringify(objJson)
	})
  	.done(function( data ) {
  		result = true;
  	})
	.fail(function(data){
		alert ('Problema na gravação do token.');
	})
	.always(function(data) {
   	});
	return result;
};
