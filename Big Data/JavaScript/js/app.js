var Calculadora = {
	                  operandos : [] ,
										resultados : [] ,
	                  numero : new String(),

	ingresaNumero: function(num) {
								   								var display = document.getElementById("display").innerHTML;

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
 							     							},

    adicionaPunto: function() {
    														var display = document.getElementById("display").innerHTML;

																if ( display == "" || this.numero == "")
																	{ return; }

																if ( display.length == 1 && display == 0)
                                  {
                                  	this.numero = "0."
                                  	document.getElementById('display').innerHTML = this.numero;
                                  }
    	                        	else if (display.indexOf(".") == -1)
    	                          	{
    	                            	this.numero = this.numero +  ".";
 								    								document.getElementById('display').innerHTML = this.numero;
    	                          	}
 							   						  },

 	adicionaSigno: function() {
 															var display = document.getElementById("display").innerHTML;

															if ( this.numero == "" )
																{ return; }

 															if ((display != 0) && (display.indexOf("-") == -1 ))
    	                          {
    	                            this.numero = "-" + this.numero ;
 								    							document.getElementById('display').innerHTML = this.numero;
    	                          }
    	                        else if ((display != 0) && (display.indexOf("-") != -1 ))
    	                          {
    	                          	this.numero = display.replace("-","");
    	                          	document.getElementById('display').innerHTML = this.numero;
    	                          }
 							  					  },

 	agregaOperandos : function(operacion) {
                                          var long = this.operandos.length;

																					if ( this.numero != "" )
																						{ this.operandos[long] = this.numero; }

																					if (( this.operandos[long-1] == "raiz" && operacion == "raiz") ||
																					     	( this.operandos[long-1] == "raiz" && operacion == "dividido") ||
																							 		( this.operandos[long-1] == "raiz" && operacion == "por") ||
																							 			( this.operandos[long-1] == "raiz" && operacion == "mas") ||
																							 				( this.operandos[long-1] == "raiz" && operacion == "menos"))
																						{
																							return;
																						}

                                          switch (operacion)
                                            {
                                              case "dividido":
                                                  this.operandos[long+1] = "dividido";
                                              break;
                                              case "por":
                                                  this.operandos[long+1] = "por";
                                              break;
                                              case "menos":
                                                  this.operandos[long+1] = "menos";
                                              break;
                                              case "mas":
                                                  this.operandos[long+1] = "mas";
                                              break;
                                              case "raiz":
                                                  this.operandos[long+1] = "raiz";
                                              break;
                                        		}

																					document.getElementById('display').innerHTML = "";
																					this.numero = "";

 	                                      },

 aplicaOperacion: function(op1,operacion,op2)
											{
												switch (operacion)
													{
														case "dividido":
																resultado = parseInt(op1) / parseInt(op2);
																this.resultados[0] = resultado;
																this.resultados[1] = "dividido";
																this.resultados[2] = op2;
														break;
														case "por":
																resultado = parseInt(op1) * parseInt(op2);
																this.resultados[0] = resultado;
															  this.resultados[1] = "por";
																this.resultados[2] = op2;
														break;
													  case "menos":
																resultado = parseInt(op1) - parseInt(op2);
																this.resultados[0] = resultado;
																this.resultados[1] = "menos";
															  this.resultados[2] = op2;
														break;
														case "mas":
																resultado = parseInt(op1) + parseInt(op2);
																this.resultados[0] = resultado;
																this.resultados[1] = "mas";
															  this.resultados[2] = op2;
														break;
														case "raiz":
																resultado = Math.sqrt(op1);
																this.resultados[0] = resultado;
																this.resultados[1] = "raiz";
																this.resultados[2] = "";
																break;
												  }
												return resultado;
										  },

  calcular: function(){
												var resultado = 0;
												var i = 0;
												var long = this.operandos.length;

												this.operandos[long] = this.numero;
												long += 1;

 												if ( long == 0 )
													{
 														resultado = this.aplicaOperacion(this.resultados[0],this.resultados[1],this.resultados[2]);
 													}
												else
													{
														do
														  {
																if ( i == 0)
																	{ resultado = this.aplicaOperacion(this.operandos[i],this.operandos[i+1],this.operandos[i+2]); }
																else
																	{	resultado = this.aplicaOperacion(resultado,this.operandos[i+1],this.operandos[i+2]); }
																i += 2;
				 											}
														while ( i+1 < long )
														this.operandos = [];
												  }

												this.numero = "";
												document.getElementById('display').innerHTML = resultado;

	                    },

 	limpiarCalculadora: function() {
 		                               this.numero = "0";
																	 this.operandos = [];
																	 this.resultados = [];
 		                               document.getElementById('display').innerHTML = "0";
 		                             }
}



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

document.getElementById('sign').addEventListener("click", function(){Calculadora.adicionaSigno();});

document.getElementById('punto').addEventListener("click", function(){Calculadora.adicionaPunto();});

document.getElementById('on').addEventListener("click", function(){Calculadora.limpiarCalculadora();});

document.getElementById('dividido').addEventListener("click", function(){Calculadora.agregaOperandos("dividido");});
document.getElementById('por').addEventListener("click", function(){Calculadora.agregaOperandos("por");});
document.getElementById('menos').addEventListener("click", function(){Calculadora.agregaOperandos("menos");});
document.getElementById('mas').addEventListener("click", function(){Calculadora.agregaOperandos("mas");});

document.getElementById('igual').addEventListener("click", function(){Calculadora.calcular();});

document.getElementById('raiz').addEventListener("click", function(){Calculadora.agregaOperandos("raiz");});
