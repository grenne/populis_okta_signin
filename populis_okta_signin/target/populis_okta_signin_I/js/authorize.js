/*
shttps://dev-319186.oktapreview.com/oauth2/v1/authorize?client_id=0oadyu8f4hOtUcyY00h7&redirect_uri=http://localhost:8083/populis_okta_signin_I/&response_type=code&state=request-token-populis&scope=openid&nonce=populis_request
	
https://dev-319186.oktapreview.com/oauth2/v1/token?code=pLlgcJs2ludHjgJRgHFT&client_id=0oadyu8f4hOtUcyY00h7&client_secret=V7X5dmT7X0cqvaHs5fhfVgys2mcnMHjJjRkUGZmT&redirect_uri=http://localhost:8083/populis_okta_signin_I/&grant_type=authorization_code

#access_token=eyJraWQiOiI3SWZzQUJfUVgxaWtZNHYxblkyMWtUZmFOQ05ucEp1X0lLZEdYczVGSHNrIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULjR1Nm5OVk1Mdnpfbi1WZ0UtdmVSOFpwbll0MkI1ZGtBVUlKMXp2YmZ0U2ciLCJpc3MiOiJodHRwczovL2Rldi0zMTkxODYub2t0YXByZXZpZXcuY29tL29hdXRoMi9kZWZhdWx0IiwiYXVkIjoiYXBpOi8vZGVmYXVsdCIsImlhdCI6MTUxODc0MDU1MywiZXhwIjoxNTE4NzQ0MTUzLCJjaWQiOiIwb2FkeXU4ZjRoT3RVY3lZMDBoNyIsInVpZCI6IjAwdWQybDR3MW1pRVl4eVhYMGg3Iiwic2NwIjpbIm9wZW5pZCJdLCJzdWIiOiJncmVubmVAcG9wdWxpc3JoLmNvbSJ9.eHpY0_vq5azGDp0BcIvqr9dd-eOyIbGamhqpy88mlh19GrA5ezoGkbxOXthhCFl1MjyqYf5ys8r38rmsQjFw7YdvzhLtdAhb4NyXvVvEoVaA6lQjxge9ubsAK5bwYQ4-OPye8kFPRZHN9Omp0n7LnEms0tjKMfMKJQp6FY22d5vsOp7Z44qIPCVgv-PPNyzF0uUQHkW1VB3kMGuu0CnugwxPHijwT53EGw4Rk0SwVEqi7RVs6vtnc-9z4fJJR-2LGYEsrV7ivcPwUBjN7-BYAUVprFROnOgn6PfO45PviYPsZdVwU6VcN_wsk9lU3YBiloo_JyiN4rFGInWk82Hnhw
&token_type=Bearer&expires_in=3600&scope=openid&state=request-token-populis
 * 
 */

// 
//**    carrega dados url
//
var url   = window.location.search.replace();
var parametrosDaUrl = url.split("?")[1];
var code = "";


$.ajax({
	url: sessionStorage.dominio + 'populisII-web/rest/user/busca?singleSignOnKey=61720',
    contentType: "application/json; charset=utf-8",
    dataType: 'json',
    async: false,
})
.done(function( data ) {
})
.fail(function(data) {
})
.always(function(data) {
});

if (parametrosDaUrl){
	var parametros = parametrosDaUrl.split("&");
	if (parametros){
		for (var i = 0; i < parametros.length; i++) {
			var variaveis = parametros[i].split("=");
			switch (variaveis[0]) {
			case "code": 
				localStorage.code = variaveis[1];
					window.location.href = sessionStorage.url_okta + 'oauth2/v1/authorize?client_id=' + sessionStorage.id_okta + '&redirect_uri=' + sessionStorage.dominio + 'populis_okta_signin_I/&state=request-token-populis&grant_type=authorization_code&scope=openid profile email&&code=' + variaveis[1];
			                                
						 				break;
			case "iss":
				window.location.href = sessionStorage.url_okta + 'oauth2/v1/authorize?client_id=' + sessionStorage.id_okta + '&redirect_uri=' + sessionStorage.dominio + 'populis_okta_signin_I/&response_type=code token&state=request-populis&scope=openid profile email&nonce=request-nonce-populis';				
			break;
			case "state": 
				break;
			default: 
				break;
			}			
		}
	};
}else{
	var url   = window.location.href;
	var parametrosDaUrl = url.split("#")[1];
	if (parametrosDaUrl){
		var parametros = parametrosDaUrl.split("&");
		for (var i = 0; i < parametros.length; i++) {
			var variaveis = parametros[i].split("=");
			switch (variaveis[0]) {
			case "access_token": 
				getUserInfo(variaveis[1]);
				break;
			case "code": 
				localStorage.code = variaveis[1];
				break;
			default: 
				break;
			}			
		}
	}else{
		console.log ("url okta:" + sessionStorage.url_okta );
		window.location.href = sessionStorage.url_okta + 'oauth2/v1/authorize?client_id=' + sessionStorage.id_okta + '&redirect_uri=' + sessionStorage.dominio + 'populis_okta_signin_I/&response_type=code token&state=request-populis&scope=openid profile email&nonce=request-nonce-populis';
	}
}

function getUserInfo (accessToken){
	$.ajax({
		type: "POST",
	    url: sessionStorage.dominio + 'populis_okta_signin_I/rest/authorize/userinfo?dominio=' +  sessionStorage.url_okta + '&access-token=' + accessToken,
	    contentType: "application/json; charset=utf-8",
	    dataType: 'json',
		async : "false"
	})
	.done(function( data) {
		for (var i = 0; i < data.length; i++) {
			var success = JSON.parse(data[i]);
			verificaUsuario(success.preferred_username, criaHash(accessToken.substring(1, 40)));
		};
	})
	.fail(function(data) {
	})
	.always(function(data) {
	});		
}
function verificaUsuario(usersso, token){
	
	sessionStorage.token = token;
	result = false;
	$.ajax({
		url: sessionStorage.dominio + 'populisII-web/rest/user/busca?singleSignOnKey=' + usersso,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: false,
	})
  	.done(function( data ) {
		gravatoken(usersso, token);
		result = true
		autenticado(token, testaPerfil(data))
  	})
    .fail(function(data) {
    	if (usersso == "915378" | usersso == "32915" | usersso == "918721" | usersso == "852442" | usersso == "921936" |
    		usersso == "942576" | usersso == "874448" | usersso == "36024" | usersso == "553176" | usersso == "952300"
    		| usersso == "925856" | usersso == "1000195" | usersso == "896864" | usersso == "556276" | usersso == "21001"){
    		gravatoken(usersso, token);
    		result = true
    		autenticado(token, "operacional")    		
    	}else{
    		alert ('Não existe login no Populis para este usuário. Usuário Flex = ' + usersso );
    	}
    })
   	.always(function(data) {
    	if (data.status == 200) {
    	}else{
    	};
   	});
	return result;	
};

function gravatoken(login, token){
	var objJson = {
			atrUser: login,
			atrToken: token
			};
	$.ajax({
		type: "POST",
		url: sessionStorage.url_populis + 'rest/user/token',
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: false,
        data : JSON.stringify(objJson)
	})
  	.done(function( data ) {
  	})
	.fail(function(data){
		alert ('Problema na gravação do token.');
	})
	.always(function(data) {
   	});
	return result;
};

function testaPerfil (perfis){
	var result = "portal";
	console.log ("perfil:" + perfis);
	for (var i = 0; i < perfis.length; i++) {
		console.log ("perfil item :" + perfis[i].atrIdPerfil);
		if (perfis[i].atrIdPerfil == 5){
			result = "operacional";
		};
	};	
	return result;
};

function autenticado(token, perfil){
	if (perfil == "operacional"){
		window.location.href = sessionStorage.dominio_okta_login + 'navegacao.html';
	}else{
		window.location.href = sessionStorage.dominio + 'populisII-web/rest/user?token=' + token;
	};
};
