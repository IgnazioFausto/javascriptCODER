
if (sessionStorage.getItem('Nombre')) {

       var nom = sessionStorage.getItem('Nombre')
       $('#textoInput').css("display", "none" );
        $('#nombre').css("display", "none" );
        $('#boton-guardar').css("display", "none" );
        $('#holaUser').append(
            '<p>'+
              '¡Hola ' + sessionStorage.getItem('Nombre') + '! Espero te guste mi obra...' + 
            '</p>'
          )



}
    else {
      $(document).ready(function(){    
        $('#boton-guardar').click(function(){     
        /*Captura de datos escrito en los inputs*/        
        var nom = document.getElementById('nombre').value;
        /*Guardando los datos en el LocalStorage*/
        sessionStorage.setItem('Nombre', nom);
        /*Limpiando los campos o inputs*/
        document.getElementById('nombre').value = '';
        
        $('#textoInput').css("display", "none" );
        $('#nombre').css("display", "none" );
        $('#boton-guardar').css("display", "none" );
        $('#holaUser').append(
            '<p>'+
              '¡Hola ' + sessionStorage.getItem('Nombre') + '! Espero te guste mi obra...' + 
            '</p>'
          )
    });   
}); 







       




    }
