// back to top button display
$(window).scroll(function(){
    var scrolling = $(this).scrollTop();

    if(scrolling > 600){
        $("#back-top").fadeIn();
    }else{
        $("#back-top").fadeOut();
    }

    if(scrolling > 500){
        $("nav").addClass("nav-fix");
    }else{
        $("nav").removeClass("nav-fix");
    }
});

// working setting
$("#back-top").click(function(){
    $("html,body").animate({
        scrollTop: "0px" ,
    },1500);
});

// preloader
$(document).ready(function(){
    $(".preloader").delay(2000).fadeOut();
});