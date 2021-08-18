//si hay una key 'Nombre' en el Session se muestra el saludo usando su value
if (sessionStorage.getItem('Nombre')) {
       var nom = sessionStorage.getItem('Nombre')
       $('#textoInput').css("display", "none" );
        $('#nombre').css("display", "none" );
        $('#boton-guardar').css("display", "none" );
        $('#holaUser').append(
            '<p>' +
              '¡Hola ' + nom + '! Espero te guste mi obra...' + 
            '</p>'
          )
}   //sino, se muestra input y se guarda el value en Session
    else {
      $(document).ready(function(){    
        $("#nombre").keydown(function(){
          $("#nombre").css("background-color", "rgba(152, 186, 233, 0.512)");
      });
        $('#boton-guardar').click(function(){     
        var nom = $('#nombre').val();//asigno a nom el valor del input
        sessionStorage.setItem('Nombre', nom);//guardando en el SS
        $('#nombre').val('');//limpiar el input
        /*saco el input y agrego el saludo*/
        $('#textoInput').css("display", "none" );
        $('#nombre').css("display", "none" );
        $('#boton-guardar').css("display", "none" );
        $('#holaUser').append(
            '<p>'+
              '¡Hola ' + nom + '! Espero te guste mi obra...' + 
            '</p>'
          )
    });   
}); 







       




    }
