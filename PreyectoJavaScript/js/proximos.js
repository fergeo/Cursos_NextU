// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites
var peticion;
var datos;
var fechaActual;
var eventosProximos = [];
var proximosEventos = [];
var proximos = [];
var eventoHTML = '';

function ordenaEventos(eventos,x){
  eventos.sort((a,b) =>{
    if(a.fecha < b.fecha){
      return -1*x;
    }
  
    if(a.fecha > b.fecha){
      return 1*x;
    }
    
    return 0;
  });
}


$(document).ready(function () {

  //Carga los datos que estan en el JSON (info.json) usando AJAX  peticion = new XMLHttpRequest();
  peticion = new XMLHttpRequest();
  peticion.open('GET','http://127.0.0.1:5500/info.json');

  peticion.onload = function(){

    if( peticion.status == 200 ){

  //Guarda el resultado en variables
      datos = JSON.parse(peticion.response);

      fechaActual = datos.fechaActual

  //Selecciona los eventos que sean posteriores a la fecha actual del JSON
      datos.eventos.forEach(function(element){
        if (fechaActual > element.fecha ){
          eventosProximos.push(element);  
        }
      });

  //Ordena los eventos segun la fecha (los mas cercanos primero)
      ordenaEventos(eventosProximos,-1);

  //Crea un string que contenga el HTML que describe el detalle del evento
      eventosProximos.forEach(function(element,index){
        proximosEventos[index] =  `<div class="col-12 text-bg-light p-3" style="background:white;margin:10px;border-radius:5px">
                                    <h5 class="card-title"><a href="detalle.html?id=${element.id}" class="card-link">${element.nombre}</a></h5>
                                    <p class="card-text">${element.fecha} - ${element.lugar}</p>
                                    <p class="card-text" style="color:black;font-weight: bold;">${element.descripcion}</p>
                                    <p class="card-text">Costo: ${element.precio}</p>
                                  </div>`;
      });

  //Recorre el arreglo y concatena el HTML para cada evento
      proximosEventos.forEach(function(element,index){
        eventoHTML = eventoHTML + proximosEventos[index];
      });
      
  //Modifica el DOM agregando el html generado dentro del div con id=evento
      proximos = document.getElementById('proximos'); // No se encontro el id=evento. Se cree que pudo quedar como copia de otro html. Por eso se utilizo proximos, que era el que correspondia al html de eventos proximos.
      proximos.innerHTML =  eventoHTML;   

    }  

  };
  peticion.send();  

});
