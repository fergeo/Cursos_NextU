
var Calculadora = (function () {
	var operandos = [];
	var resultados = [] ;
	var	numero = new String();

	function ingresoNumero (num) {
																			var display = document.getElementById("display").innerHTML;

																			//this.cambiaTamanio(num);

																			if ( display.length == 1 && display == "0")
																				{
																					this.numero = num ;
																					document.getElementById('display').innerHTML = this.numero;
																				}
																			else if (display.length < 8)
																				{
																					if ((display == "0" && num != "0") ||
																								(display != "0" && num == "0") ||
																									(display != "0" && num != "0"))
																						{
																							this.numero = this.numero + num.toString();
																								document.getElementById('display').innerHTML = this.numero;
																						}
																				}
																			}

  // Public API
  return {
    ingresaNumero: function (num) {
			          ingresoNumero(num);
    },

    anotherPublicMethod () {
    }
  }
}());


/*
var Calculadora = ( function(){


/*
											cambiaTamanio: function(ide) {

																var obj = document.getElementById(ide);
																var alto = obj.style.width;
																var ancho = obj.style.height;

																obj.style.width = "20%";
																obj.style.height = "20%";

																var myVar = setTimeout(function () {
																	obj.style.width = ancho;
																	obj.style.height = alto;
																}, 100);

															},
															*/



document.getElementById('0').addEventListener("click", function(){Calculadora.ingresaNumero(0);});
document.getElementById('1').addEventListener("click", function(){Calculadora.ingresaNumero(1);});
document.getElementById('2').addEventListener("click", function(){Calculadora.ingresaNumero(2);});
document.getElementById('3').addEventListener("click", function(){Calculadora.ingresaNumero(3);});
document.getElementById('4').addEventListener("click", function(){Calculadora.ingresaNumero(4);});
document.getElementById('5').addEventListener("click", function(){Calculadora.ingresaNumero(5);});
document.getElementById('6').addEventListener("click", function(){Calculadora.ingresaNumero(6);});
document.getElementById('7').addEventListener("click", function(){Calculadora.ingresaNumero(7);});
document.getElementById('8').addEventListener("click", function(){Calculadora.ingresaNumero(8);});
document.getElementById('9').addEventListener("click", function(){Calculadora.ingresaNumero(9);});
/*
document.getElementById('sign').addEventListener("click", function(){Calculadora.adicionaSigno();});

document.getElementById('punto').addEventListener("click", function(){Calculadora.adicionaPunto();});

document.getElementById('on').addEventListener("click", function(){Calculadora.limpiarCalculadora();});

document.getElementById('dividido').addEventListener("click", function(){Calculadora.agregaOperandos("dividido");});
document.getElementById('por').addEventListener("click", function(){Calculadora.agregaOperandos("por");});
document.getElementById('menos').addEventListener("click", function(){Calculadora.agregaOperandos("menos");});
document.getElementById('mas').addEventListener("click", function(){Calculadora.agregaOperandos("mas");});

document.getElementById('igual').addEventListener("click", function(){Calculadora.calcular();});

document.getElementById('raiz').addEventListener("click", function(){Calculadora.agregaOperandos("raiz");});
*/
