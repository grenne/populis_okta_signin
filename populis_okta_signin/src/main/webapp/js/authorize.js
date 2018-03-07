/*
https://dev-319186.oktapreview.com/oauth2/default/v1/authorize?client_id=0oadyu8f4hOtUcyY00h7&redirect_uri=http://localhost:8083/populis_okta_signin_I/&response_type=code&state=request-token-populis&scope=openid&nonce=populis_request
	
https://dev-319186.oktapreview.com/oauth2/default/v1/token?code=pLlgcJs2ludHjgJRgHFT&client_id=0oadyu8f4hOtUcyY00h7&client_secret=V7X5dmT7X0cqvaHs5fhfVgys2mcnMHjJjRkUGZmT&redirect_uri=http://localhost:8083/populis_okta_signin_I/&grant_type=authorization_code

#access_token=eyJraWQiOiI3SWZzQUJfUVgxaWtZNHYxblkyMWtUZmFOQ05ucEp1X0lLZEdYczVGSHNrIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULjR1Nm5OVk1Mdnpfbi1WZ0UtdmVSOFpwbll0MkI1ZGtBVUlKMXp2YmZ0U2ciLCJpc3MiOiJodHRwczovL2Rldi0zMTkxODYub2t0YXByZXZpZXcuY29tL29hdXRoMi9kZWZhdWx0IiwiYXVkIjoiYXBpOi8vZGVmYXVsdCIsImlhdCI6MTUxODc0MDU1MywiZXhwIjoxNTE4NzQ0MTUzLCJjaWQiOiIwb2FkeXU4ZjRoT3RVY3lZMDBoNyIsInVpZCI6IjAwdWQybDR3MW1pRVl4eVhYMGg3Iiwic2NwIjpbIm9wZW5pZCJdLCJzdWIiOiJncmVubmVAcG9wdWxpc3JoLmNvbSJ9.eHpY0_vq5azGDp0BcIvqr9dd-eOyIbGamhqpy88mlh19GrA5ezoGkbxOXthhCFl1MjyqYf5ys8r38rmsQjFw7YdvzhLtdAhb4NyXvVvEoVaA6lQjxge9ubsAK5bwYQ4-OPye8kFPRZHN9Omp0n7LnEms0tjKMfMKJQp6FY22d5vsOp7Z44qIPCVgv-PPNyzF0uUQHkW1VB3kMGuu0CnugwxPHijwT53EGw4Rk0SwVEqi7RVs6vtnc-9z4fJJR-2LGYEsrV7ivcPwUBjN7-BYAUVprFROnOgn6PfO45PviYPsZdVwU6VcN_wsk9lU3YBiloo_JyiN4rFGInWk82Hnhw
&token_type=Bearer&expires_in=3600&scope=openid&state=request-token-populis
 * 
 */

// 
//**    carrega dados url
//
var url   = window.location.search.replace();
var parametrosDaUrl = url.split("?")[1];

if (parametrosDaUrl){
	var n = parametrosDaUrl.search("&");
	if (n != "-1"){
		var parametros = parametrosDaUrl.split("&");
		if (parametros){
			for (var i = 0; i < parametros.length; i++) {
				var variaveis = parametros[i].split("=");
				switch (variaveis[0]) {
				case "code": alert ("code:" + variaveis[1]);
//					window.location.href = 'https://dev-319186.oktapreview.com/oauth2/default/v1/authorize?client_id=0oadyu8f4hOtUcyY00h7&redirect_uri=http://localhost:8083/populis_okta_signin_I/&state=request-token-populis&grant_type=authorization_code&]code=' + variaveis[1];
					window.location.href = 'https://flexdev.oktapreview.com/oauth2/default/v1/authorize?client_id=0oabg7g2qxKzFnAOT0h7&redirect_uri=https://testeversao.populisservicos.com.br/populis_okta_signin_I/&state=request-token-populis&grant_type=authorization_code&]code=' + variaveis[1];
					break;
				case "state": alert ("state:" + variaveis[1]);
					break;
				default: alert ("outros:" + variaveis[1]);
					break;
				}			
			}
		};
	}else{
		alert ("problemas na autenticação do Okta, url " + window.location.href );
	};
}else{
	var url   = window.location.href;
	var parametrosDaUrl = url.split("#")[1];
	if (parametrosDaUrl){
		var parametros = parametrosDaUrl.split("&");
		for (var i = 0; i < parametros.length; i++) {
			var variaveis = parametros[i].split("=");
			switch (variaveis[0]) {
			case "access_token": alert ("access-token:" + variaveis[1]);
				getUserInfo(variaveis[1]);
				break;
			default: alert (variaveis[0] + " : "  + variaveis[1]);
				break;
			}			
		}
	}else{
//		window.location.href = 'https://dev-319186.oktapreview.com/oauth2/default/v1/authorize?client_id=0oadyu8f4hOtUcyY00h7&redirect_uri=http://localhost:8083/populis_okta_signin_I/&response_type=code token&state=request-populis&scope=openid&nonce=request-nonce-populis';
		window.location.href = 'https://flexdev.oktapreview.com/oauth2/default/v1/authorize?client_id=0oabg7g2qxKzFnAOT0h7&redirect_uri=https://testeversao.populisservicos.com.br/populis_okta_signin_I/&response_type=code token&state=request-populis&scope=openid&nonce=request-nonce-populis';
	}
}

function getUserInfo (accessToken){
	$.ajax({
		type: "POST",
//	    url: 'http://localhost:8083/populis_okta_signin_I/rest/authorize/userinfo?dominio=https://dev-319186.oktapreview.com/&access-token=' + accessToken,
	    url: 'https://testeversao.populisservicos.com.br/populis_okta_signin_I/rest/authorize/userinfo?dominio=https://flexdev.oktapreview.com/&access-token=' + accessToken,
	    contentType: "application/json; charset=utf-8",
	    dataType: 'json',
		async : "false"
	})
	.done(function( data) {
		for (var i = 0; i < data.length; i++) {
			alert ("success:" + data[i])	
		};
	})
	.fail(function(data) {
		alert ("fail:" + data.statusText)
	})
	.always(function(data) {
	});		
/*
$.ajax({
    url: 'http://localhost:8083/populis_okta_signin_I/rest/authorize/teste?dominio=https://dev-319186.oktapreview.com/&access-token=' + accessToken,
    contentType: "application/json; charset=utf-8",
    dataType: 'json',
	async : "false"
})
.done(function( data) {
	alert ("done:" + data.statusText)
})
.fail(function(data) {
	alert ("fail:" + data.statusText)
})
.always(function(data) {
	alert ("always:" + data.statusText)
});		
*/
}
