/**
 * 
 */

function modal(token, email){

	var perfil = "portal";
	if (email != null){
		perfil = verificarPerfil(email);
	};
	
	//armazena a largura e a altura da janela
	var winH = $(window).height();	
	var winW = $(window).width();
	//centraliza na tela a janela popup
	$('#dialog').css('top',  winH/2-$('#dialog').height()/2);
	$('#dialog').css('left', winW/2-$('#dialog').width()/2);
	
	$('#dialog').show();

	//armazena a largura e a altura da tela
//	var maskHeight = $(document).height();
//	var maskWidth = $(window).width();
	
	//Define largura e altura do div#mask iguais ás dimensões da tela
//	$('#mask').css({'width':maskWidth,'height':maskHeight});
	
	//efeito de transição
	$('#mask').fadeIn(1000);
	$('#mask').fadeTo("slow",0.8);
	
	$('#btn_operacional').click(function (e) {
		window.location.href = sessionStorage.url_populis + 'populis/seguranca/login-default-form-submit.do?token=' + token;
		$('#mask, .window').hide();
	});
	$('#btn_portal').click(function (e) {
		window.location.href = sessionStorage.url_populis + 'populisII-web/rest/user?token=' + token;
		$('#mask, .window').hide();
	});
	$('#mask').click(function () {
		$(this).hide();
		$('.window').hide();
	});

    var target = $( this ),
    brand = target.find( "h2" ).html(),
    model = target.find( "p" ).html(),
    short = target.attr( "id" ),
    closebtn = '<a href="#" data-rel="back" class="ui-btn ui-corner-all ui-btn-a ui-icon-delete ui-btn-icon-notext ui-btn-right">Close</a>',
    header = '<div data-role="header"><h2>' + brand + ' ' + model + '</h2></div>',
    img = '<img src="../images/dark_bg.png" alt="' + brand + '" class="photo">',
    popup = '<div data-role="popup" id="popup-' + short + '" data-short="' + short +'" data-theme="none" data-overlay-theme="a" data-corners="false" data-tolerance="15"></div>';
	// Create the popup.
	$( header )
	    .appendTo( $( popup )
	        .appendTo( $.mobile.activePage )
	        .popup() )
	    .toolbar()
	    .before( closebtn )
	    .after( img );
	// Wait with opening the popup until the popup image has been loaded in the DOM.
	// This ensures the popup gets the correct size and position
	$( ".photo", "#popup-" + short ).load(function() {
	    // Open the popup
	    $( "#popup-" + short ).popup( "open" );
	    // Clear the fallback
	    clearTimeout( fallback );
	});
	// Fallback in case the browser doesn't fire a load event
	var fallback = setTimeout(function() {
	    $( "#popup-" + short ).popup( "open" );
	}, 2000);
};

function msg(){

	var perfil = "portal";
	
	//armazena a largura e a altura da janela
	var winH = $(window).height();	
	var winW = $(window).width();
	//centraliza na tela a janela popup
	$('#msg').css('top',  winH/2-$('#dialog').height()/2);
	$('#msg').css('left', winW/2-$('#dialog').width()/2);
	
	$('#msg').show();

	//armazena a largura e a altura da tela
	var maskHeight = $(document).height();
	var maskWidth = $(window).width();
	
	//Define largura e altura do div#mask iguais ás dimensões da tela
	$('#mask').css({'width':maskWidth,'height':maskHeight});
	
	//efeito de transição
	$('#mask').fadeIn(1000);
	$('#mask').fadeTo("slow",0.8);
};

function verificarPerfil(email){
	var result = portal;
	$.ajax({
		url: sessionStorage.url_populis + 'populisII-web/rest/user/busca?singleSignOnKey=' + email,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: false,
	})
  	.done(function( data ) {
  	})
    .fail(function(data) {
    })
   	.always(function(data) {
    	if (data.status == 200) {
    		result = testaPerfil(data);
    	}else{
    		result = porta;;
    	};
   	});
	return result;	
};

function testaPerfil (perfis){
	var result = portal;
	for (var i = 0; i < perfis.length; i++) {
		if (perfis[i].atrIdPerfil == 1){
			result = operacional;
		};
	};	
};
