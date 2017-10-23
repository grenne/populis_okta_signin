
function sethttp (objJson){
	var result = false;
	$.ajax({
		type: "POST",
		url: 'https://testeversao.populisservicos.com.br/populisII-web/rest/user/token',
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
/*	var obj = {
			atrUser: 'testeNovoII',
			atrToken: 'tokenTest'
		    }

		$.ajax({
		    url: 'https://testeversao.populisservicos.com.br/populisII-web/rest/user/token',
		    data: JSON.stringify(obj),
		    async: false,
		    type: 'POST',
		    dataType: 'json',
		    contentType: "application/json"})
		.done(function(retorno, texto){
		        console.log('OK');
		        console.log(retorno);
		    })
		.fail(function(e, texto){
		        console.log('ERROR');
		        console.log(e);
		    });
*/	return result;
};