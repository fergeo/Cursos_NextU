// Hemos omitido los acentos en los comentarios por compatibilidad
var parametros;
var id;
var peticion;
var datos;
var evento;
var eventoHTML;
var key;



$(document).ready(function () {

  //Esta es la instruccion para tomar el id del URL detalle.html?id=<identificador>
  parametros =  new URLSearchParams(window.location.search);
  id = parametros.get('id');

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  peticion = new XMLHttpRequest();
  peticion.open('GET','http://127.0.0.1:5500/info.json');

  peticion.onload = function(){

    if( peticion.status == 200 ){

      //Guarda el resultado en una variable
      datos = JSON.parse(peticion.response);  

      console.log(id+'---id')

      //Busca el elemento en el arreglo
      evento = datos.eventos.find( function(element){
        return element.id == id;  
      });   

      //Crea un string que contenga el HTML que describe el detalle del evento
      eventoHTML =  `<div  class="col-12 text-bg-light p-3" style="background:white;padding:10px;margin:5px;border-radius:5px">
                      <h5 class="card-title" style="color:blue;">${evento.nombre}</h5>
                      <p class="card-text">${evento.fecha} - ${evento.lugar}</p>
                      <p class="card-text" style="color:black;font-weight: bold;">${evento.descripcion}</p>
                      <p class="card-text" style="color:blue;">Costo: ${evento.precio}</p>
                      <p class="card-text" style="color:orange;">Invitados: ${evento.invitados}</p>
                    </div>`;

      //Modifica el DOM agregando el html generado dentro del div con id=evento
      proximos = document.getElementById('evento');
      proximos.innerHTML =  eventoHTML;                       

    }  

  }
peticion.send();

});
