$(function(){

    $('.box-1 > .button').on('click', function(){
        var color = $('.box-1 .text').val();
        $('.box-1 .black, .box-1 .white, .1').css('backgroundColor', color);
    })

    $('.box-2 > .button').on('click', function(){
        var color = $('.box-2 .text').val();
        $('.box-2 .black, .box-2 .white, .2').css('backgroundColor', color);
    })

    $('.box-3 > .button').on('click', function(){
        var color = $('.box-3 .text').val();
        $('.box-3 .black, .box-3 .white, .3').css('backgroundColor', color);
    })

    $('.box-1 .reset').on('click', function(){
        $('.box-1 .text').val("");
    })

    $('.box-2 .reset').on('click', function(){
        $('.box-2 .text').val("");
    })

    $('.box-3 .reset').on('click', function(){
        $('.box-3 .text').val("");
    });

});