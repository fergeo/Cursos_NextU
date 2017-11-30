//JSON correspondiente a los alumnos.
var estudiante;

//Declaración de los Listener
document.getElementById("btnRegistrar").addEventListener("click",registraAlumno);
document.getElementById("btnPromedio").addEventListener("click",mostrarPromedio);
document.getElementById("btnMayor").addEventListener("click",mostrarMayor);
document.getElementById("btnMenor").addEventListener("click",mostrarMenor);

//Función que va insertando las celdas de la tabla
function insertaCelda(elemento,vfila)
{
  var hilera; 
  var celda; 
  var textoCelda; 
  var tblBody; //Variable para situarse en el cuerpo de la tabla para luego ir adicionando las filas y sus respectivas celdas
  
  try
   {   
     celda = document.createElement("td");   
     texto = document.getElementById(elemento).value;
     textoCelda = document.createTextNode(texto);
     celda.appendChild(textoCelda);
     vfila.appendChild(celda);   
   }
  catch (error)
   {
     alert("Función insertaCelda, Error:\n" + error.message);
   }
}


//Función para verificar que la nota sea entre 0 y 10
function verificaNota() 
{
  try
   {
     var x;
     x = document.getElementById("nota").value;

     if (isNaN(x) || x < 0 || x > 10) 
      {
        alert("La nota debe ser entre cero y diez");
        return false;
      }
     else
      {
        return true;
      }

    }
  catch (error)
    {
      alert("Función verificaNota, Error:\n" + error.message);
    }
}


//Función que va insertando los alumnos
function cargarJSON(json)
{
  var alumno;
  var fila; 
  var tblBody; //Variable para situarse en el cuerpo de la tabla para luego ir adicionando las filas y sus respectivas celdas
  
  try
   {
     if ( ( document.getElementById("codigo").value != "" ) &&
            ( document.getElementById("nombre").value != "" ) &&
              ( document.getElementById("nota").value != "" ) &&
                 verificaNota() ) 
      {
        if (!json) 
         {
           var alumnos = [];
           alumno = {codigo:document.getElementById("codigo").value , nombre:document.getElementById("nombre").value, nota:document.getElementById("nota").value};     
           alumnos.push(alumno);
           json = JSON.stringify(alumnos);   
         }
        else
         {
           var registros = JSON.parse(json);
           alumno = {codigo:document.getElementById("codigo").value , nombre:document.getElementById("nombre").value, nota:document.getElementById("nota").value};
           registros.push(alumno);
           json = JSON.stringify(registros); 
         }

        tblBody = document.getElementById("tEstudiantes");
        fila = document.createElement("tr");
    
        insertaCelda("codigo",fila);
        insertaCelda("nombre",fila);
        insertaCelda("nota",fila);

        tblBody.appendChild(fila);

        document.getElementById("codigo").value = "";
        document.getElementById("nombre").value = "";
        document.getElementById("nota").value = "";
      
        return json 
      } 
     else 
      {
        alert("Verifique que todos los datos esten ingresado correctamente.");
      }
   }
  catch (error)
   {
     alert("Función cargarJSON, Error:\n" + error.message);
   }
}


function registraAlumno()
{
  estudiante = cargarJSON(estudiante);
}


//Desarollo de la funcion que calcula el promedio de los alumnos de un aula.
function calcularPromedio(json)
{
  var prom = 0; //Variable donde se va a guardar el promedio.
  var acum = 0; //Variable donde se va a guardar la sumatoria de las notas de los alumnos.
  var tblBody;  //Variable para situarse en el cuerpo de la tabla para luego ir adicionando las filas y sus respectivas celdas
  var i; //Variable de iteracion
  var registros; //Vuelco el contenido del JSON
  
  try
   {
     tblBody = document.getElementById("tEstudiantes");

     if ( tblBody.outerHTML.includes('tr') ) //Para que no se muestre el promedio sin que se haya mostrado los datos de los alumnos.
      {
        registros = JSON.parse(json);
        for(i = 0; i < registros.length; i++) 
         {
          acum+=Number(registros[i].nota);
         } 

        prom = acum / i ; // Se divide por diez como ya se sabe de un principio que son 10 estudiantes.

        document.getElementById("promedio").innerHTML = prom ;
        alert("El promedio de todos los alumnos es: "+ prom);
      }
     else
      {
        alert("Debe solicitar primero los datos de los alumnos");
      } 
     
   }
  catch (error)
   {
     alert("Función calcularPromedio, Error:\n" + error.message);
   }
}


function mostrarPromedio()
{
  calcularPromedio(estudiante);
}


//Desarollo de la funcion que busca las mayores notas de los alumnos de haber mas de uno con mayor nota marca todos los alumnos con la mayor nota.
function mayorNota(json)
{
  //Definicion de variables.
  var i; //Variable de iteracion
  var tblBody;  //Variable para situarse en el cuerpo de la tabla para luego ir adicionando las filas y sus respectivas celdas.
  var mayor; // Guarda el valor de la mayor nota.
  var fila; //Variable para guardar la fila a la que se le debe cambiar el formato para resaltar el dato a mostrar.
  var registros; //Vuelco el contenido del JSON
  var texto;

  try
   {
     tblBody = document.getElementById("tEstudiantes");

     if ( tblBody.outerHTML.includes('tr') ) //Para que no se muestre el promedio sin que se haya mostrado los datos de los alumnos.
      {
        registros = JSON.parse(json);
        for(i = 0; i < registros.length; i++) 
         {
           if ( i == 0 )
            { mayor = registros[i].nota; }
           else if ( registros[i].nota > mayor )
            { mayor = registros[i].nota; }
         } 

         texto = "La mayor nota es: " + mayor + "\n";
         texto += "Los alumnos con mayor nota son:\n";

        for(i = 0; i < registros.length; i++) 
         {
           fila = document.getElementsByTagName("tr")[i+1];

           if ( mayor == registros[i].nota )
            { 
              fila.outerHTML = fila.outerHTML.replace("<tr>",'<tr style="background-color:#73E3C7">'); 
              texto += "Código: " + registros[i].codigo + "     Nombre: " + registros[i].nombre + "\n";
            }
           else if (fila.outerHTML.includes('red'))
            { fila.outerHTML = fila.outerHTML.replace('<tr style="background-color:red">','<tr>');}
         }        
        alert(texto); //Muestra en el alert los alumnos con mayor nota
      }
     else
      {
        alert("Debe solicitar primero los datos de los alumnos");
      } 
   }
  catch (error)
   {
     alert("Función mayorNota, Error:\n" + error.message);    
   }
}


function mostrarMayor()
{
  mayorNota(estudiante);
}


//Desarollo de la funcion que busca las menores notas de los alumnos de haber mas de uno con menor nota marca todos los alumnos con la menor nota.
function menorNota(json)
{
  //Definicion de variables
  var i; //Variable de iteracion
  var tblBody;  //Variable para situarse en el cuerpo de la tabla para luego ir adicionando las filas y sus respectivas celdas.
  var menor; // Guarda el valor de la menor nota.
  var fila;  //Variable para guardar la fila a la que se le debe cambiar el formato para resaltar el dato a mostrar.
  var registros;
  var texto;

  try
   {
     tblBody = document.getElementById("tEstudiantes");

     if ( tblBody.outerHTML.includes('tr') ) //Para que no se muestre el promedio sin que se haya mostrado los datos de los alumnos.
      {
        registros = JSON.parse(json);
        for(i = 0; i < registros.length; i++) 
         {
           if ( i == 0 )
            { menor = registros[i].nota; }
           else if ( registros[i].nota < menor )
            { menor = registros[i].nota; }
         } 

        texto = "La mayor menor es: " + menor + "\n";
        texto += "Los alumnos con menor nota son:\n";

        for(i = 0; i < registros.length; i++) 
         {
           
           fila = document.getElementsByTagName("tr")[i+1];

           if ( menor == registros[i].nota )
            { 
              fila.outerHTML = fila.outerHTML.replace("<tr>",'<tr style="background-color:red">'); 
              texto += "Código: " + registros[i].codigo + "     Nombre: " + registros[i].nombre + "\n";
            }
           else if (fila.outerHTML.includes('73E3C7'))
            { fila.outerHTML = fila.outerHTML.replace('<tr style="background-color:#73E3C7">','<tr>');}
         }
        alert(texto); //Muestra en el alert los alumnos con menor nota
      }
     else
      {
        alert("Debe solicitar primero los datos de los alumnos");
      } 
   }
  catch (error)
   {
     alert("Función menorNota, Error:\n" + error.message);    
   }
}


function mostrarMenor()
{
  menorNota(estudiante);
}