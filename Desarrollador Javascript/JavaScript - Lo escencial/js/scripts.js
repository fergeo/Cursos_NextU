var estudiantes = [{ "codigo" : "01" , "alumno": "Ramon Rodriguez" , "nota" : "2"   }, 
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
  var i;
  var hilera; // Variable que se ira guardando las filas
  var celda; // Variable para guardar las celdas de la tabla
  var textoCelda; // Variable que se usara para poner el contenido de cada celda

  try
    {
alert("antes1");
     for(i = 0; i < json.length; i++) 
      {
        var hilera = document.createElement("tr");
          
        for(i = 0; i < 3; i++) 
          {
            celda = document.createElement("td");
        
            if ( i == 0 )
              {
                textoCelda = document.createTextNode(json[i].codigo);
              }
            else if ( i == 1 )
              {
                textoCelda = document.createTextNode(json[i].alumno); 
              }
              else if ( i == 2 )
               {
                 textoCelda = document.createTextNode(json[i].nota); 
               }
             celda.appendChild(textoCelda);
             hilera.appendChild(celda);
            }

            alert("Nombre:"+json[i].nombre);
            document.getElementById("tEstudiantes").appendChild(hilera);
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

  for(i = 0; i < json.length; i++) 
   {
     acum+=json[i].nota;
   } 

  prom = acum / i ; // Se divide por diez como ya se sabe de un principio que son 10 estudiantes.

  document.getElementById('promedio').innerHTML = prom ;
}

function mayorNota(json)
{
	
}

function menorNota(json)
{
	
}