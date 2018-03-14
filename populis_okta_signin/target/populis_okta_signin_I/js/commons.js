/**
 * 
 */

function criaHash (string){
		var date = new Date();
		var time = date.getTime() +  string;
		var token = $.md5(time);
		return token;
};