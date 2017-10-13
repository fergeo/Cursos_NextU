var estudiantes = [{ "codigo" : "01" , "alumno": "Ramon Rodriguez" , "nota" : "1"   }, 
                   { "codigo" : "02" , "alumno": "Valeria Peralta" , "nota" : "2"   }, 
                   { "codigo" : "03" , "alumno": "Gabriela Perez"  , "nota" : "9"   }, 
                   { "codigo" : "04" , "alumno": "Carlos Mercado"  , "nota" : "7.5" }, 
                   { "codigo" : "05" , "alumno": "Ruben Majul"     , "nota" : "2"   }, 
                   { "codigo" : "06" , "alumno": "Maria Castagna"  , "nota" : "6"   }, 
                   { "codigo" : "07" , "alumno": "Adrian Zunino"   , "nota" : "8.5" }, 
                   { "codigo" : "08" , "alumno": "Renata Marquez"  , "nota" : "5.5" }, 
                   { "codigo" : "09" , "alumno": "Rodrigo Urtusa"  , "nota" : "2"   }, 
                   { "codigo" : "10" , "alumno": "Juan Lucas"      , "nota" : "7"   }]; 



function leerJSON(json) 
{
  var i,j; // Contador para la cantidad de alumnos i, j para recorrer los 3 datos proveido de cada estudiante.
  var hilera = "<tr></tr>"; // Variable que se ira guardando las filas.
  var celda; // Variable para guardar las celdas de la tabla.
  var textoCelda; // Variable que se usara para poner el contenido de cada celda.
  var tblBody;
  

  try
    {

     tblBody = document.getElementById("tEstudiantes");

     //Para que si el usuario apreta mas de una vez el boton de mostrar no se repitan los datos
     if ( tblBody.outerHTML.includes('tr') )
      {
        tblBody.outerHTML = '<tbody id="tEstudiantes"></tbody>';
      }


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
             
          }

          tblBody.appendChild(hilera);

       }

    }

    catch (error)
    {
      alert(error.message);
    }

}

function mostrarAlumnos() 
{
  leerJSON(estudiantes);    
}

function calcularPromedio(json)
{
  var prom = 0; //Variable donde se va a guardar el promedio.
  var acum = 0; //Variable donde se va a guardar la sumatoria de las notas de los alumnos.
  var i;
  
  try
   {
     
     for(i = 0; i < json.length; i++) 
      {
        acum+=Number(json[i].nota);
      } 

     prom = acum / i ; // Se divide por diez como ya se sabe de un principio que son 10 estudiantes.

     document.getElementById("promedio").innerHTML = prom ;
     
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

function mayorNota(json)
{
  //Definicion de variables
	var i;
  var menor; // Guarda el valor de la mayor nota

  try
   {

     for(i = 0; i < json.length; i++) 
      {
        if ( i == 0 )
         {
           menor = json[i].nota;
         }
        else if ( json[i].nota < menor )
         {
           menor = json[i].nota;
         }

      } 

      console.log(menor);

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

function menorNota(json)
{
  //Definicion de variables
  var i;
  var mayor; // Guarda el valor de la mayor nota

  try
   {

     for(i = 0; i < json.length; i++) 
      {
        if ( i == 0 )
         {
           mayor = json[i].nota;
         }
        else if ( json[i].nota > mayor )
         {
           mayor = json[i].nota;
         }

      } 

      console.log(mayor);

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