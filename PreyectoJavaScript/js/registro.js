// Hemos omitido los acentos en los comentarios por compatibilidad

var exprecionReg;
var valido;
var contrasena;
var mensaje = 'Debe ingresar';

function validar(formulario) {

//Validacion del nombre
  if( !formulario.nombres.value ){
    mensaje = mensaje + 'un nombre, ';
  }


//Validacion de la correo
  if( formulario.email.value ){

  //Expresion regular del correo
    exprecionReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    valido = exprecionReg.test(formulario.email.value);
    if(valido==false){
      alert('Correo invalido. Ingrese correctamente el correo electronico');
    }
  
  }else{
    mensaje = mensaje + ' un correo electronico,'
}


//Validacion de la contraseña
  if( formulario.contrasena.value ){
  
    if( formulario.contrasena.value.length < 8){
      alert('Ingrese una contraseña con por lo menos 8 caracteres');  
    }
 
  } else{
    mensaje = mensaje + ' una contraseña, ';
  }

//Validacion de la confirmacion
  if( formulario.confirmacion.value ){
    
    if( formulario.confirmacion.value == formulario.contrasena.value ){
      alert('La confirmacion debe coincidir con la contraseña');  
    }
  } else{
    mensaje = mensaje + 'la confirmacion de la contraseña, ';
  }

//Validacion de los terminos
  if( formulario.acepto.value ){
    mensaje = mensaje + ' los terminos.';
  }
  else{
    mensaje = mensaje.substring(0,mensaje.length-2) + '.';
  }

  alert(mensaje);

}
