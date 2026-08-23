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

    //slider de reseñas 
    let reviewContainer = $(".review-container");

    function getPasoReview(){ //calcula el salto para que aparezca la siguiente review
        const tamañoReview = reviewContainer.children(".review").first().outerWidth();
        const gap = parseFloat(
            reviewContainer.css("gap")
        ) || 0;

        return tamañoReview + gap;
    }

    //flecha next
    $(".review-next").on("click", function(){
        salto = getPasoReview();

        reviewContainer.css({ //hago el salto con el css del container
            "transition": "transform 0.4s ease-in-out",
            "transform": `translateX(-${salto}px)`
        });

        setTimeout(function(){
            reviewContainer.children(".review").first().appendTo(reviewContainer);
            reviewContainer.css({
                "transition": "none",
                "transform": "translateX(0)"
            });
            reviewContainer[0].offsetHeight;
        },400); //la animacion dura 0.4s-400ms
    });

    //fecla prev
    $(".review-prev").on("click", function(){
        salto = getPasoReview();
    //al ir hacia atrás lo hago al revés y no tengo que esperar a la animacion 
        reviewContainer.children(".review").last().prependTo(reviewContainer);
        reviewContainer.css({
            "transition": "none",
            "transform": `translateX(-${salto}px)`
        });
        reviewContainer[0].offsetHeight;


        reviewContainer.css({ //hago el salto con el css del container
            "transition": "transform 0.4s ease-in-out",
            "transform": `translateX(0)`
        });
    });

    //para que vayan cambiando automaticamente
    setInterval(function(){
        $(".review-next").click(); //hago click cada 4 segundo a la fecha derecha automaticamente
    }, 4000);

}); //fin de la carga del document

