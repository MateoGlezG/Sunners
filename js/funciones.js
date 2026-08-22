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

    $(window).on("scroll",function(){ //tambien sirve para cerrarlo si se clica dentro porque se mueve la pantalla
        const dispMovil = window.innerWidth < 992; //devuelve true si se cumple
        const menuOpen = $("#menuPrincipal").hasClass("show");

        if(dispMovil && menuOpen){
            $("#menuPrincipal").collapse("hide");
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
        $("#modal-residenciales").removeClass("d-none");

        $("#modal-cargadores").addClass("d-none");
        $("#modal-industriales").addClass("d-none");
    });

    $("#industriales").on("click",function(){
        abrirModalInstalaciones();
        $("#titulo-instalaciones").text("Intalaciones Industriales");
        $("#modal-industriales").removeClass("d-none");

        $("#modal-residenciales").addClass("d-none");
        $("#modal-cargadores").addClass("d-none");
    });

    $("#cargadores").on("click",function(){
        abrirModalInstalaciones();
        $("#titulo-instalaciones").text("Cargadores Eléctricos");
        $("#modal-cargadores").removeClass("d-none");

        $("#modal-residenciales").addClass("d-none");
        $("#modal-industriales").addClass("d-none");
    });

    //cargar formulario de Notion
    $(".contactButton").on("click", function () {
    iframe=$("iframe");

    if (!iframe.attr("src")) {
        iframe.attr("src", iframe.data("src")); //cambia el data-src por src para cargar el form de notion solo cuando se toque el boton
    }
    });
}); //fin de la carga del document

