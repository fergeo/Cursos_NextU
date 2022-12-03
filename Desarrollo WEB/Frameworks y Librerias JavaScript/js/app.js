var tablero = [[0,0,0,0,0,0,0] , [0,0,0,0,0,0,0] , [0,0,0,0,0,0,0] , [0,0,0,0,0,0,0] , [0,0,0,0,0,0,0] , [0,0,0,0,0,0,0] , [0,0,0,0,0,0,0]] ;
var aBorrar = [];
var puntuacion = [180,160,140,120];


function animateTittle(){
    $(".main-titulo").animate({
        color:"white"
    }, 2000, function(){
        $(".main-titulo").animate({
            color:"yellow"
        }, 2000);
    });
}


function animaBorrar(item){
    $(item).animate({
        opacity: '0'
        }, 500, function(){
            $(item).animate({
                opacity: '1'
            }, 500);
        });
}


function animacionBorrar(){
    for(i = 0; i < aBorrar.length ; i++){
        animaBorrar(aBorrar[i]);
    }
}


function agregaCeros(num){
    return ('00'+num).slice(-2);
}


function countDown(){
    timer = $('#timer').text();
    min = parseInt(timer.substr(0,2));
    sec = parseInt(timer.substr(3,2));
    
    if(sec !== 0){
        sec--;
        $('#timer').html(agregaCeros(min)+':'+agregaCeros(sec));            
    } else{
        if(min !== 0){
            min--;
            $('#timer').html(agregaCeros(min)+':59');
        }
    }
}


function getRandomInt(){
    min = Math.ceil(1);
    max = Math.floor(4);
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function cargaInicial(){
    for(i = 0 ; i < 7 ; i++)
        for(j = 0 ; j < 7 ; j++){
            imagen = getRandomInt();
            tablero [i][j] = imagen;
            url = './image/' + imagen + '.png';
            clase = '.col-' + (j+1);
            $(clase).append($(`<img id='${j+1}${i+1}'src='${url}'>`));
        }
} 


function moverPiesas(){
    $( ".col-1" ).sortable();
    $( ".col-2" ).sortable();
    $( ".col-3" ).sortable();
    $( ".col-4" ).sortable();
    $( ".col-5" ).sortable();
    $( ".col-6" ).sortable();
    $( ".col-7" ).sortable();
}


function agregaItem(item){
    imagen = getRandomInt();
    url = './image/' + imagen + '.png';
    clase = '.col-' + item.substr(1,1);
        
    $(clase).append($(`<img id='${item.substr(1,1)}1'src='${url}'>`));    
}


function borraItems(){
    for(i = 0; i < aBorrar.length ; i++){
        $(aBorrar[i]).remove();
        agregaItem(aBorrar[i]);
    }

    clearInterval(borrado);
}


function borraRepetidos(){
    borrado = setInterval(animacionBorrar, 1000);
    setTimeout(borraItems, 3000);
}


function armaRepetidosFila(i, j, cantRepetida){
    for( k = 0 ; k < cantRepetida ; k++ ){
        aBorrar.push('#' + (j-k) + '' + (i+1));
    }

    $('#score-text').html( parseInt($('#score-text').text()) + puntuacion[6-cantRepetida] );
}

function armaRepetidosCol(j, i, cantRepetida){
    for( k = 0 ; k < cantRepetida ; k++ ){
        aBorrar.push('#' + (i+1) + '' + (j-k));
    }

    $('#score-text').html( parseInt($('#score-text').text()) + puntuacion[6-cantRepetida] );
}


function asignaTablero(){
    for(i = 0 ; i < 7 ; i++){
        for(j = 0 ; j < 7 ; j++){

            id = `'#${i+1}${j+1}'`;
            console.log(id)
            //tablero[i][j] = document.getElementById(id).src;
            console.log(document.getElementById(id))
        }
    }
}


function borraImagen(){
   tableroAux = tablero;
   imagenAnt = 0;
   cantRepetida = 1;

    //-------FILAS------------
    for(i = 0 ; i < 7 ; i++){
        for(j = 0 ; j < 7 ; j++){
            if( j == 0 ){
                imagenAnt = tablero [i][j];
            } else {
                if( imagenAnt == tablero [i][j] ){
                    cantRepetida++;   
                } else{
                    if ( cantRepetida >= 3 ){
                        armaRepetidosFila(i, j, cantRepetida);
                    }
                    cantRepetida = 1; 
                    imagenAnt = tablero [i][j];
                }  
            }  
        }

        if ( cantRepetida >= 3 ){
            armaRepetidosFila(i, j, cantRepetida);
        }
        cantRepetida = 1;
    }

    //----------------------------------------------------------------------------------------
    //--------COLUMNAS---------
    cantRepetida = 1;

    for(i = 0 ; i < 7 ; i++){
        for(j = 0 ; j < 7 ; j++){
            if( j == 0 ){
                imagenAnt = tablero [j][i];
            } else {
                if( imagenAnt == tablero [j][i] ){
                    cantRepetida++;   
                } else{
                    if ( cantRepetida >= 3 ){
                        armaRepetidosCol(j, i, cantRepetida);
                    }
                    cantRepetida = 1;          
                    imagenAnt = tablero [j][i];
                }
            }  
        }

        if ( cantRepetida >= 3 ){
            armaRepetidosCol(j, i, cantRepetida);
        }
        cantRepetida = 1;
    }

    if( aBorrar.length > 0){

        aBorrar = aBorrar.reduce((a,e) => {
            if(!a.find(d => d == e)){
                a.push(e)
            }
            return a;
        }, []);

        borraRepetidos();
    }
}

function reinicio(){
    $('#score-text').html('1');
    $('#movimientos-text').html('1');
    $('#timer').html('02:00');
}


function agregaSubtitulo(){
    $('.panel-score').prepend(`<div class="FinJuego">
                                    <h1 style="font-family:gameFont;font-size:2.5em;color:yellow;text-align:center">Juego Terminado</h1>
                                </div>`);
}

function finJuego(){
    $('.panel-tablero').animate({
        height: ['-=1000','linear'],
        width: ['-=1000','linear']
    });
    
    //$('.panel-tablero').remove();
    $('.panel-tablero').fadeTo(1000,0);

    $('.panel-score').animate({
        width: ['+=900','linear']
    });
    
    $('.time').fadeTo(1000,0);

    $('.timer').animate({
        height: ['-=200','linear'],
        width: ['-=200','linear']
    });

    $('.time').remove();

    setTimeout(agregaSubtitulo
        , 1000);
}


$(document).ready(function(){

    setInterval(animateTittle, 4000);
    moverPiesas();

    $('.btn-reinicio').click(function(){

        if( $('.btn-reinicio').text() === 'Iniciar' ){

            $('.btn-reinicio').text('Reiniciar');

            reloj = setInterval(countDown, 1000);

        } else{
            reinicio();
        } 
        
        cargaInicial();

        borraImagen();

        asignaTablero();

        if( $('#timer').text().substr(0,2) === '00' && $('#timer').text().substr(3,2) === '00' ){
            clearInterval(reloj);
        }

    });

    //finJuego();

});

  