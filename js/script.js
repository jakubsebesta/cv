(function($){
    
    var loader = $('.loader');
    
    $(document).ajaxStart(function(){
        loader.fadeIn(100);
    });
    
    $(document).ajaxComplete(function(){

        loader.fadeOut(150);

        // animujem skill bars
        $('.bar').each(function(){
            let per = $(this).attr('per');

            $(this).css("width", per+'%');
            $({animatedValue: 0}).animate({animatedValue: per});

        });

        
    });

    
    

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