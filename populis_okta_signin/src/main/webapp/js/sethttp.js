
function sethttp (objJson){
	var result = false;
	$.ajax({
		type: "POST",
		url: 'https://flex.populisservicos.com.br/populisII-web/rest/user/token',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: false,
        data : JSON.stringify(objJson)
	})
  	.done(function( data ) {
  	})
    .fail(function(data) {
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