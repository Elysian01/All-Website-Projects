$(document).ready(function () {
    $('.fa-bars').click(function () {
        $('.nav-links').slideToggle(1500);
    })
})

$(window).scroll(function () {
    let scroll = $(window).scrollTop();
    let width = $(window).width()

    if (scroll >= 70 && width >= 995) {
        $('nav').addClass("new-nav");
        $('nav ul li a').css({"color":"black"})
        $('.nav-heading span').css({"color":"black"})
        $('.nav-heading span>i').css({"color":"#F85A40"})
    }

    else if (scroll==0 && width >= 995){
        $('nav').removeClass("new-nav");
        $('nav ul li a').css({"color":"#fff"})
        $('.nav-heading span>i').css({"color":"#fff"})
        $('.nav-heading span').css({"color":"white"})
    }
    else if(scroll>=70 && width<995){
        $('.nav-heading span').css({"color":"black"})
        $('nav').addClass("new-nav");
        $('.nav-heading span').addClass("black")
        $('.nav-heading span>i').css({"color":"#F85A40"})
    }

    else if(scroll ==0 && width < 995 ){
        $('nav').removeClass("new-nav");
        $('.nav-heading span').css({"color":"white"})
        $('.nav-heading span').removeClass("black")
        $('.nav-links>span>i').css({"color":"#fff"})
    }
})

