
var Calculadora = (function () {
										var operandos = [];
										var resultados = [] ;
										var	numero = new String();

										function cambiaTamanio (ide) {
																										var obj = document.getElementById(ide);
																									 	var alto = obj.style.width;
																										var ancho = obj.style.height;

																										obj.style.width = "20%";
																										obj.style.height = "20%";

																										var myVar = setTimeout(function () {
																																					obj.style.width = ancho;
																																					obj.style.height = alto;
																																												}, 100);
																								 };

										function ingresarNumero (num) {
																										var display = document.getElementById("display").innerHTML;

																										cambiaTamanio(num);

																										if ( display.length == 1 && display == "0")
																											{
																												numero = num ;
																												document.getElementById('display').innerHTML = numero;
																											}
																										else if (display.length < 8)
																											{
																												if ((display == "0" && num != "0") ||
																													(display != "0" && num == "0") ||
																														(display != "0" && num != "0"))
																														{
																															numero = numero + num.toString();
																															document.getElementById('display').innerHTML = numero;
																														}
																											}
																								 };




										function adicionarPunto () {
																									var display = document.getElementById("display").innerHTML;
																								 	var longR = resultados.length;

																								 	cambiaTamanio("punto");

																								 	if ( display == "" || numero == "" )
																								 		{ return; }

																								 	if ( display == 0)
																								 	  {
																								 	   	numero = "0."
																								 	    document.getElementById('display').innerHTML = numero;
																								 	  }
																								 	else if (display.indexOf(".") == -1)
																								 	  {
																								 	   	numero = numero +  ".";
																								 	  	document.getElementById('display').innerHTML = numero;
																								 	  }
																								};

										 function adicionarSigno () {
																									var display = document.getElementById("display").innerHTML;

																								 	cambiaTamanio("sign");

																								 	if ( numero == "" )
																								 		{ return; }

																								 	if ((display != 0) && (display.indexOf("-") == -1 ))
																								 	  {
																								 	  	numero = "-" + numero ;
																								 	  	document.getElementById('display').innerHTML = numero;
																								 	  }
																								 	else if ((display != 0) && (display.indexOf("-") != -1 ))
																								 	  {
																								 	    numero = display.replace("-","");
																								 	    document.getElementById('display').innerHTML = numero;
																								 	  }
																							  };

										 function	agregarOperandos (operacion) {
																								 	         	var long = operandos.length;
																								 	     			var display = document.getElementById("display").innerHTML;

																								 	 					cambiaTamanio(operacion);

																								 	 					if ( numero != "" )
																								 	 						{ operandos[long] = numero; }

																								 	 					if (( operandos[long-1] == "raiz" && operacion == "raiz") ||
																								 	 						( operandos[long-1] == "raiz" && operacion == "dividido") ||
																								 	 							( operandos[long-1] == "raiz" && operacion == "por") ||
																								 	 								( operandos[long-1] == "raiz" && operacion == "mas") ||
																								 	 									( operandos[long-1] == "raiz" && operacion == "menos"))
																								 	 										{	return; }

																								 	          switch (operacion)
																								 	          	{
																								 	            	case "dividido":
																								 	              	operandos[long+1] = "dividido";
																								 	              break;
																								 	              case "por":
																								 	              	operandos[long+1] = "por";
																								 	              break;
																								 	              case "menos":
																								 	              	operandos[long+1] = "menos";
																								 	              break;
																								 	              case "mas":
																								 	                operandos[long+1] = "mas";
																								 	              break;
																								 	              case "raiz":
																								 	                operandos[long+1] = "raiz";
																								 	              break;
																								 	            }

																								 	 				document.getElementById('display').innerHTML = "";
																								 	 				numero = "";
																												};

											 function aplicaOperacion (op1,operacion,op2)
																								 	 						{
																																switch (operacion)
																								 	 								{
																								 	 									case "dividido":
																								 	 										resultado = Number(op1) / Number(op2);
																								 	 										resultados[0] = resultado;
																								 	 										resultados[1] = "dividido";
																								 	 										resultados[2] = op2;
																								 	 									break;
																								 	 									case "por":
																								 	 										resultado = Number(op1) * Number(op2);
																								 	 										resultados[0] = resultado;
																								 	 										resultados[1] = "por";
																								 	 										resultados[2] = op2;
																								 	 									break;
																								 	 									case "menos":
																								 	 										resultado = Number(op1) - Number(op2);
																								 	 										resultados[0] = resultado;
																								 	 										resultados[1] = "menos";
																								 	 										resultados[2] = op2;
																								 	 									break;
																								 	 									case "mas":
																								 	 										resultado = Number(op1) + Number(op2);
																								 	 										resultados[0] = resultado;
																								 	 										resultados[1] = "mas";
																								 	 										resultados[2] = op2;
																								 	 									break;
																								 	 									case "raiz":
																								 	 										resultado = Math.sqrt(op1);
																								 	 										resultados[0] = resultado;
																								 	 										resultados[1] = "raiz";
																								 	 										resultados[2] = "";
																								 	 									break;
																								 	 								}
																								 	 							return resultado;
																								 	 						};

												  function calcular () {
																								var resultado = 0;
																								var i = 0;
																								var long = operandos.length;
																								var longR = resultados.length;

																								operandos[long] = numero;
																								long += 1;

																								if ( long == 1 && longR > 2 )
																									{
																								 		resultado = aplicaOperacion(resultados[0],resultados[1],resultados[2]);
																								 	}
																								else
																								 	{
																								 	 	if ( longR > 2)
																								 	 		{
																								 	 			resultado = aplicaOperacion(resultados[0],operandos[i+1],operandos[i+2]);
																								 	 		}
																								 	 	else
																								 	 		{
																								 	 			do
																								 	 				{
																								 	 					if ( i == 0)
																								 	 						{ resultado = aplicaOperacion(operandos[i],operandos[i+1],operandos[i+2]); }
																								 	 					else
																								 	 						{	resultado = aplicaOperacion(resultado,operandos[i+1],operandos[i+2]); }
																								 	 					i += 2;
																								 	 				}
																								 	 			while ( i+1 < long )
																								 	 		}
																									}

																								numero = "";
																								document.getElementById('display').innerHTML = resultado;
																								operandos = [];

																							};

										function limpiarCalculadora () {
																		 									cambiaTamanio("on");
																		 									numero = "";
																		 									operandos = [];
																		 									resultados = [];
																		  		            document.getElementById('display').innerHTML = "0";
																		  		         }


  									return {
    													ingresaNumero (num) { ingresarNumero(num); },
															limpiaCalculadora () {  limpiarCalculadora(); },
															adicionaSigno () { adicionarSigno(); },
															adicionaPunto () { adicionarPunto(); },
															agregaOperandos (operacion) { agregarOperandos(operacion); },
															calcula() { calcular();}
  			 									 }
}());


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

document.getElementById('on').addEventListener("click", function(){Calculadora.limpiaCalculadora();});

document.getElementById('sign').addEventListener("click", function(){Calculadora.adicionaSigno();});

document.getElementById('punto').addEventListener("click", function(){Calculadora.adicionaPunto();});

document.getElementById('dividido').addEventListener("click", function(){Calculadora.agregaOperandos("dividido");});
document.getElementById('por').addEventListener("click", function(){Calculadora.agregaOperandos("por");});
document.getElementById('menos').addEventListener("click", function(){Calculadora.agregaOperandos("menos");});
document.getElementById('mas').addEventListener("click", function(){Calculadora.agregaOperandos("mas");});
document.getElementById('igual').addEventListener("click", function(){Calculadora.calcula();});

document.getElementById('raiz').addEventListener("click", function(){Calculadora.agregaOperandos("raiz");});
