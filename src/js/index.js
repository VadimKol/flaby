import "./import/blocks.js";

$(document).ready(function(){
    //no js
    if (window.matchMedia('screen and (max-width: 948px)').matches) {
        $(".page-main").find(".nav-list").hide();
        $(".nav__btn-mobile").show().css("display", "block");
        $(".nav__logo").css("margin","0");
    }
    $(window).resize(function() { //when resizing browser
        if (window.matchMedia('screen and (max-width: 948px)').matches) {
            $(".page-main").find(".nav-list").hide();
            $(".nav__btn-mobile").show().css("display", "block");
            $(".nav__logo").css("margin","0");
        }
        else {
            $(".page-main").find(".nav-list").show();
            $(".nav__btn-mobile").hide();
        }
    });
    //no js
    $(".nav__btn-mobile").click(function(){
        $(".nav-list-mobile").show();
    });
    $(".nav-list-mobile__btn-close").click(function(){
        $(".nav-list-mobile").hide();
    });
    if ($(".nav__logo").css("background-image").indexOf("logo.svg") !== -1) { //for safari
        $(".slidenav").show();
        $('.slider').slick({
            prevArrow: $(".slidenav__btn").first(),
            nextArrow: $(".slidenav__btn").last()
        });
    }
  });