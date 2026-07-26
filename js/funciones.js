$(document).ready(function(){ //espero a que se cargue el documento entero

    //Funcion scroll nav
    $(window).on("scroll",function(){
        const limit = 80;

        if($(window).scrollTop() >= limit){
            $("nav").addClass("nav-scrolled");
        }else{
            $("nav").removeClass("nav-scrolled");
        }

    });

    //funcion parar el modal de instlaciones
    function abrirModalInstalaciones(){
       const modal = bootstrap.Modal.getOrCreateInstance(document.getElementById("modal-instalaciones"));
       modal.show();
    }

    //mostrar cada instalacion
    $("#viviendas").click(function(){
        abrirModalInstalaciones();
        $("#titulo-instalaciones").text("Instalaciones Residenciales");
    });

    $("#industriales").on("click",function(){
        abrirModalInstalaciones();
        $("#titulo-instalaciones").text("Intalaciones Industriales");
    });

    $("#cargadores").on("click",function(){
        abrirModalInstalaciones();
        $("#titulo-instalaciones").text("Cargadores Eléctricos");
    });



});

