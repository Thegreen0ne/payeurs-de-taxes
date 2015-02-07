// Display the button when on Desktop
$("#col-left").scroll(function() {
    if($(this).scrollTop() > 500){
        $("#returnTop").fadeIn();
    }
    else{
        $("#returnTop").fadeOut();
    }
});

// Display the button when on Mobile
$(window).scroll(function() {
    if($("#col-left").scrollTop() != 0) {
        return true;
    }
    else if($(this).scrollTop() > 300){
        $("#returnTop").fadeIn();
    }
    else{
        $("#returnTop").fadeOut();
    }
});

// Click return top
$("#backToTop").click(function(e){
    e.preventDefault();
    if($("#col-left").scrollTop() > 0){
        $("#col-left").animate({scrollTop : 0}, 800);
    }else{
        $("html, body").animate({scrollTop : 0}, 800);
    }
});