$( document ).ready(function() {

    var ver = false
    
    $( "#menuAyuda" ).click(function() {
        console.log(ver)

        if (ver == false) {
            ver = true
            $('.btnF').addClass('animacionVer');
        } else {
            ver = false
            $('.btnF').removeClass('animacionVer');
        }  
    });

    $( "#btn_whatsapp" ).click(function() {
        window.open("https://wa.me/525628049165", '_blank')  
    });

    $( "#btn_facebook" ).click(function() {
        console.log("hola")
        window.open("https://www.facebook.com/PetxoticsMX", '_blank')  
    });

    $( "#btn_instagram" ).click(function() {
        console.log("hola")
        window.open("https://www.instagram.com/petxotics_mx/", '_blank')  
    });

    $('.botonF1').hover(function(){
        $('.btnF').addClass('animacionVer');
    })
    $('.contenedor').mouseleave(function(){
        $('.btnF').removeClass('animacionVer');
    })

    $('.carousel').carousel({
        interval: 3000
    })

});

