requirejs.config({
    'baseUrl': 'js',
    'paths': {
      'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min',
      'okta-widget': 'https://ok1static.oktacdn.com/assets/js/sdk/okta-signin-widget/1.8.0/js/okta-sign-in.min',
      'okta-config': 'config'
    }
});

var orgUrl = sessionStorage.url_okta;
var oktaSignIn = new OktaSignIn({baseUrl: orgUrl});

define(['jquery', 'okta-widget', 'okta-config'], function($, OktaSignIn, OktaConfig) {

  // Set initial config options for widget
  var oktaSignIn = new OktaSignIn({
    baseUrl: OktaConfig.orgUrl,
    clientId: OktaConfig.clientId,
    features: {
      securityImage: false,
      rememberMe: true,
      smsRecovery: true,
      selfServiceUnlock: true,
      multiOptionalFactorEnroll: true
    },

    helpLinks: {
    },
    authParams: {
      scopes: OktaConfig.scopes,
      responseType: 'id_token'
    }
  });
  oktaSignIn.session.get(function(session) {
    //console.log(session);
    if (session.status === 'ACTIVE') {
      var token = criaHash (session.id);
      var objJson = {
			atrUser: session.login,
			atrToken: token
			};
      sethttp (objJson, autenticado, naoAutenticado, objJson.atrToken, session.login);
    } else {
    	msg();
    }
  });
});

function autenticado(token, login){
	  if (operacional(login)){
		  modal(token);
	  }else{
		  window.location.href = sessionStorage.url_populis + 'populisII-web/rest/user?token=' + token;
	  };
};


function naoAutenticado(){
	$('#msg').html('Problemas na autenticação do Populis, tente mais tarde, se persistir entre contato conosco');
	msg();
};