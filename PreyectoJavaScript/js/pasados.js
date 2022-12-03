//Define las variables que necesites
var peticion;
var datos;
var fechaActual;
var eventosPasados = [];
var futurosEventos = [];
var pasadosEventos = [];
var eventoHTML;
var pasados;
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

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  peticion = new XMLHttpRequest();
  peticion.open('GET','http://127.0.0.1:5500/info.json');

  peticion.onload = function(){

    if( peticion.status == 200 ){

  //Guarda el resultado en variables
    datos = JSON.parse(peticion.response);

    fechaActual = datos.fechaActual

  //Selecciona los eventos que sean anteriores a la fecha actual del JSON
    datos.eventos.forEach(function(element){
      if (fechaActual < element.fecha ){
        eventosPasados.push(element);  
      }
    });

  //Ordena los eventos segun la fecha (los mas recientes primero)
    ordenaEventos(eventosPasados,-1);

  //Crea un string que contenga el HTML que describe el detalle del evento
    eventosPasados.forEach(function(element,index){
      pasadosEventos[index] =  `<div class="col-12 text-bg-light p-3" style="background:white;margin:10px;border-radius:5px">
                                  <h5 class="card-title"><a href="detalle.html?id=${element.id}" class="card-link">${element.nombre}</a></h5>
                                  <p class="card-text">${element.fecha} - ${element.lugar}</p>
                                  <p class="card-text" style="color:black;font-weight:bold;">${element.descripcion}</p>
                                  <p class="card-text">Invitados: ${element.invitados}</p>
                                </div>`;
    });

  //Recorre el arreglo y concatena el HTML para cada evento
    pasadosEventos.forEach(function(element,index){
      eventoHTML = eventoHTML + pasadosEventos[index];
    });

  //Modifica el DOM agregando el html generado
    pasados = document.getElementById('pasados');
    pasados.innerHTML =  eventoHTML;   

}  

};
peticion.send();  


});
