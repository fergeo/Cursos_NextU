// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites
var peticion;
var datos;
var fechaActual;
var eventosPasados = [];
var eventosFuturos = [];
var futurosEventos = [];
var pasadosEventos = [];
var eventoHTML;
var proximos;
var pasados;
var eventos = [];
var datosAux;

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

//Clasifica los eventos segun la fecha actual del JSON  
      datos.eventos.forEach(function(element){
        fechaActual > element.fecha ? eventosPasados.push(element) : eventosFuturos.push(element);  
      });

//--------------Eventos Futuros-------------------------------
//Ordena los eventos segun la fecha (los mas cercanos primero)
      ordenaEventos(eventosFuturos,1);

//Extrae solo dos eventos      
      eventosFuturos = eventosFuturos.slice(0,2);     

      //--------------Eventos Pasados-------------------------------
//Ordena los eventos segun la fecha (los mas cercanos primero)
      ordenaEventos(eventosPasados,-1);

//Extrae solo dos eventos
      eventosPasados = eventosPasados.slice(0,2);   
      
//--------------Eventos Futuros-------------------------------    
//Crea un string que contenga el HTML que describe el detalle del evento
      eventosFuturos.forEach(function(element,index){
     
            if ( index == 0 ){
                  futurosEventos[0] =  `</div class="d-line">
                                          <div class="col-6">
                                             <div style="background:white;padding:10px;border-radius:5px;">
                                                <h5><a href="detalle.html?id=${element.id}" class="card-link">${element.nombre}</a></h5>
                                                <p>${element.fecha}</p>
                                                <p style="color:black;font-weight:bold;">${element.descripcion}</p>
                                             </div>
                                          </div>`;   
               }else {
                  futurosEventos[1] =  `<div class="col-6">
                                           <div style="background:white;padding:10px;border-radius:5px;">
                                             <h5><a href="detalle.html?id=${element.id}" class="card-link">${element.nombre}</a></h5>
                                             <p>${element.fecha}</p>
                                             <p style="color:black;font-weight:bold;">${element.descripcion}</p>
                                           </div>
                                        </div>
                                      </div>`;                                          
               }
                                          
      });

//Recorre el arreglo y concatena el HTML para cada evento
      eventoHTML = futurosEventos[0] + futurosEventos[1];

      console.log(eventoHTML+'-----HTML')

      


//Modifica el DOM agregando el html generado
      proximos = document.getElementById('proximos');

      proximos.innerHTML =  eventoHTML;   


//--------------Eventos Pasados-------------------------------    
//Crea un string que contenga el HTML que describe el detalle del evento
      eventosPasados.forEach(function(element,index){

            if ( index == 0 ){
                  pasadosEventos[0] =  `</div class="d-line">
                                          <div class="col-6">
                                             <div style="background:white;padding:10px;border-radius:5px;">
                                                <h5><a href="detalle.html?id=${element.id}" class="card-link">${element.nombre}</a></h5>
                                                <p>${element.fecha}</p>
                                                <p style="color:black;font-weight:bold;">${element.descripcion}</p>
                                             </div>
                                          </div>`;   
               }else {
                  pasadosEventos[1] =  `<div class="col-6">
                                           <div style="background:white;padding:10px;border-radius:5px;">
                                             <h5><a href="detalle.html?id=${element.id}" class="card-link">${element.nombre}</a></h5>
                                             <p>${element.fecha}</p>
                                             <p style="color:black;font-weight:bold;">${element.descripcion}</p>
                                           </div>
                                        </div>
                                      </div>`;                                          
               }
                             
      });

//Recorre el arreglo y concatena el HTML para cada evento
      eventoHTML = pasadosEventos[0] + pasadosEventos[1];

//Modifica el DOM agregando el html generado
      pasados = document.getElementById('pasados');
      pasados.innerHTML =  eventoHTML;   

    }  

  };
  peticion.send();  
  
});
