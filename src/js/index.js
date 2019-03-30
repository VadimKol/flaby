import "./import/blocks.js";

$(document).ready(function(){
    //no js
    $(".slidenav").show();
    //no js
    $('.slider').slick({
        prevArrow: $(".slidenav__btn").first(),
        nextArrow: $(".slidenav__btn").last(),
        draggable: false
    });
  });