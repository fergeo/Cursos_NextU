//JSON correspondiente a los alumnos.
var estudiantes = [{ "codigo" : "01" , "alumno": "Ramon Rodriguez" , "nota" : "5"   }, 
                   { "codigo" : "02" , "alumno": "Valeria Peralta" , "nota" : "2"   }, 
                   { "codigo" : "03" , "alumno": "Gabriela Perez"  , "nota" : "9"   }, 
                   { "codigo" : "04" , "alumno": "Carlos Mercado"  , "nota" : "7.5" }, 
                   { "codigo" : "05" , "alumno": "Ruben Majul"     , "nota" : "2"   }, 
                   { "codigo" : "06" , "alumno": "Maria Castagna"  , "nota" : "6"   }, 
                   { "codigo" : "07" , "alumno": "Adrian Zunino"   , "nota" : "8.5" }, 
                   { "codigo" : "08" , "alumno": "Renata Marquez"  , "nota" : "5.5" }, 
                   { "codigo" : "09" , "alumno": "Rodrigo Urtusa"  , "nota" : "2"   }, 
                   { "codigo" : "10" , "alumno": "Juan Lucas"      , "nota" : "7"   }]; 


//Desarollo de la funcion que mostrara los datos de todos los alumnos.
function leerJSON(json) 
{
  var i,j; // Contador para la cantidad de alumnos i, j para recorrer los 3 datos proveido de cada estudiante.
  var hilera = "<tr></tr>"; // Variable que se ira guardando las filas.
  var celda; // Variable para guardar las celdas de la tabla.
  var textoCelda; // Variable que se usara para poner el contenido de cada celda.
  var tblBody; //Variable para situarse en el cuerpo de la tabla para luego ir adicionando las filas y sus respectivas celdas
  
  try
    {

      tblBody = document.getElementById("tEstudiantes");

      //Para que si el usuario apreta mas de una vez el boton de mostrar no se repitan los datos.
      if ( !tblBody.outerHTML.includes('tr') )
       {

         tblBody = document.getElementsByTagName("tbody")[0];
 
         for(i = 0; i < json.length; i++) 
          {

            var hilera = document.createElement("tr");
          
            for(j = 0; j < 3; j++) 
             {
               celda = document.createElement("td");
        
               if ( j == 0 )
                {
                  textoCelda = document.createTextNode(json[i].codigo);
                  celda.appendChild(textoCelda);
                }
               else if ( j == 1 )
                {
                  textoCelda = document.createTextNode(json[i].alumno); 
                  celda.appendChild(textoCelda);
                }
               else if ( j == 2 )
                {
                  textoCelda = document.createTextNode(json[i].nota); 
                  celda.appendChild(textoCelda);
                }
             
               hilera.appendChild(celda);
             
             }//Cierra el for para las celdas de la fila.

            tblBody.appendChild(hilera);

          }//Cierra el for correspondiente al que genera todas las filas.

       }//Cierra el if para verificar que si se mostro ya los datos. Para que no se muestren repetidos.

    }//Cierra la llave del try.

    catch (error)
    {
      alert(error.message);
    }

}


function mostrarAlumnos() 
{
  leerJSON(estudiantes);    
}


//Desarollo de la funcion que calcula el promedio de los alumnos de un aula.
function calcularPromedio(json)
{
  var prom = 0; //Variable donde se va a guardar el promedio.
  var acum = 0; //Variable donde se va a guardar la sumatoria de las notas de los alumnos.
  var tblBody;  //Variable para situarse en el cuerpo de la tabla para luego ir adicionando las filas y sus respectivas celdas
  var i; //Variable de iteracion
  
  try
   {

     tblBody = document.getElementById("tEstudiantes");

     if ( tblBody.outerHTML.includes('tr') ) //Para que no se muestre el promedio sin que se haya mostrado los datos de los alumnos.
      {
        for(i = 0; i < json.length; i++) 
         {
          acum+=Number(json[i].nota);
         } 

        prom = acum / i ; // Se divide por diez como ya se sabe de un principio que son 10 estudiantes.

        document.getElementById("promedio").innerHTML = prom ;
      }
    else
     {
      alert("Debe solicitar primero los datos de los alumnos");
     } 
     
   }

  catch (error)
    {
      alert(error.message);
    }

}


function mostrarPromedio()
{
  calcularPromedio(estudiantes);
}


//Desarollo de la funcion que busca las mayores notas de los alumnos de haber mas de uno con mayor nota marca todos los alumnos con la mayor nota.
function mayorNota(json)
{
  //Definicion de variables.
	var i; //Variable de iteracion
  var tblBody;  //Variable para situarse en el cuerpo de la tabla para luego ir adicionando las filas y sus respectivas celdas.
  var mayor; // Guarda el valor de la mayor nota.
  var fila; //Variable para guardar la fila a la que se le debe cambiar el formato para resaltar el dato a mostrar.

  try
   {

     tblBody = document.getElementById("tEstudiantes");

     if ( tblBody.outerHTML.includes('tr') ) //Para que no se muestre el promedio sin que se haya mostrado los datos de los alumnos.
      {
        for(i = 0; i < json.length; i++) 
         {
           if ( i == 0 )
            { mayor = json[i].nota; }
           else if ( json[i].nota > mayor )
            { mayor = json[i].nota; }

         } 

        for(i = 0; i < json.length; i++) 
         {

           fila = document.getElementsByTagName("tr")[i+1];

           if ( mayor == json[i].nota )
            { fila.outerHTML = fila.outerHTML.replace("<tr>",'<tr style="background-color:#73E3C7">'); }
           else if (fila.outerHTML.includes('red'))
            { fila.outerHTML = fila.outerHTML.replace('<tr style="background-color:red">','<tr>');}
         }

      }
    else
     {
      alert("Debe solicitar primero los datos de los alumnos");
     } 

   }

  catch (error)
   {
      alert(error.message);    
   }

}


function mostrarMayor()
{
  mayorNota(estudiantes);
}


//Desarollo de la funcion que busca las menores notas de los alumnos de haber mas de uno con menor nota marca todos los alumnos con la menor nota.
function menorNota(json)
{
  //Definicion de variables
  var i; //Variable de iteracion
  var tblBody;  //Variable para situarse en el cuerpo de la tabla para luego ir adicionando las filas y sus respectivas celdas.
  var menor; // Guarda el valor de la menor nota.
  var fila;  //Variable para guardar la fila a la que se le debe cambiar el formato para resaltar el dato a mostrar.

  try
   {

     tblBody = document.getElementById("tEstudiantes");

     if ( tblBody.outerHTML.includes('tr') ) //Para que no se muestre el promedio sin que se haya mostrado los datos de los alumnos.
      {

        for(i = 0; i < json.length; i++) 
         {
           if ( i == 0 )
            { menor = json[i].nota; }
           else if ( json[i].nota < menor )
            { menor = json[i].nota; }

         } 

        for(i = 0; i < json.length; i++) 
         {
           
           fila = document.getElementsByTagName("tr")[i+1];

           if ( menor == json[i].nota )
            { fila.outerHTML = fila.outerHTML.replace("<tr>",'<tr style="background-color:red">'); }
           else if (fila.outerHTML.includes('73E3C7'))
            { fila.outerHTML = fila.outerHTML.replace('<tr style="background-color:#73E3C7">','<tr>');}
         }

      }
     else
      {
        alert("Debe solicitar primero los datos de los alumnos");
      } 

  }

  catch (error)
   {
      alert(error.message);    
   }
	
}


function mostrarMenor()
{
  menorNota(estudiantes);
}