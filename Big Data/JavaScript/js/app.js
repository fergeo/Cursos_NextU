var Calculadora = {
	                  operandos : [] ,
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
								      if ((display == "0" && num != "0") || (display != "0" && num == "0") || (display != "0" && num != "0"))
    	                          	   {
    	                                 this.numero = this.numero + num.toString();
 								                       document.getElementById('display').innerHTML = this.numero;
    	                               }
								    }

 							     },

    adicionaPunto: function() {
    							var display = document.getElementById("display").innerHTML;

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

                                            this.operandos[long] = this.numero;
                                            console.log(long + "long");

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
                                                    this.operandos[long] = Math.sqrt(this.operandos[long]);
                                               break;
                                             }

for (var i = 0; i < this.operandos.length; i++) {
  console.log(this.operandos[i]);
}


 	                                      },

  calcular: function(){},

 	limpiarCalculadora: function() {
 		                               this.numero = "0";
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

document.getElementById('igual').addEventListener("click", function(){Calculadora.calcular("igual");});

document.getElementById('raiz').addEventListener("click", function(){Calculadora.agregaOperandos("raiz");});
