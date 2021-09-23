(function($){
 
    
    $(document).ajaxStart(function(){
        console.log('zacinam nacitavat');
        $('.loader').fadeIn(100);
    });
    
    $(document).ajaxComplete(function(){
        console.log('nacital som obsah');
        $('.loader').fadeOut(150);
        $('#html').animate({width:'78%'}, 1500);
        $('#css').animate({width:'72%'}, 1500);
        $('#scss').animate({width:'66%'}, 1500);
        $('#bootstrap').animate({width:'45%'}, 1500);
        $('#jquery').animate({width:'41%'}, 1500);
        $('#git').animate({width:'68%'}, 1500);

    });

    $('.percentage').animate({width:'70%'}, 1500);
    

    $('.container').hide();
    
var navigation = $('.desktop-navigation a, .mobile-navigation a'),
    selected = $('.desktop-navigation').find('.selected'),
    container = $('.container');
    

navigation.on('click', function(event){

    event.preventDefault();

    

     var a = $(this),
         li = a.parent(),
         href = a.attr('href');   
        // ak má li class selected tak nerob nič
         //if (selected.is( li )) return;

        // selected = li;

     li.siblings().removeClass('selected');
     li.addClass('selected');

     
    
     $('.container').fadeOut(700, function(){

        $.ajax({
            url:href,
            type:'GET',
            dataType:'html'
        }).done(function(data){
            container.html($(data).find('.window'));
    
            container.fadeIn(700);
            
        });

     });

});



function loadContent(){

    $.ajax({
        url:'about.html',
        type:'GET',
        dataType:'html'
        
    }).done(function(data){
        $('body').html(data);
    });

};


$('.entrance').on('click', function(event){

    event.preventDefault();

    loadContent();
});


$('body').on('click','.close',  function(event){

    event.preventDefault();
    container.fadeOut();
    $('li').removeClass('selected');

});

//hamburger menu

var  menu = $('.mobile-navigation'),
     hamburger = $('.hamburger');
    

    

    $('body').on('click', '.hamburger', function(event){

        
        event.preventDefault();

        if(menu.css('display') == 'none'){
            hamburger.animate({opacity: 0.8});
        } else{
            hamburger.animate({opacity: 1});
        }

        menu.slideToggle();
  
    }); 

    

})(jQuery);