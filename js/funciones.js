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

});