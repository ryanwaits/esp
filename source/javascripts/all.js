//= require jquery

$(function(){
    $('#who-we-are').on('click', function(e){
        e.preventDefault();
        $(this).addClass('active');
        $('#upcoming-events').removeClass('active');
        $('#past-events').removeClass('active');
        $('#get-in-touch').removeClass('active');
        $('div.who-we-are').show();
        $('div.upcoming-events').hide();
        $('div.past-events').hide();
        $('div.get-in-touch').hide();
    }); 

    $('#upcoming-events').on('click', function(e){
        e.preventDefault();
        $('#who-we-are').removeClass('active');
        $('#past-events').removeClass('active');
        $('#get-in-touch').removeClass('active');
        $('div.who-we-are').hide();
        $('div.upcoming-events').show();
        $('div.past-events').hide();
        $('div.get-in-touch').hide();
        $(this).addClass('active');
    });

    $('#past-events').on('click', function(e){
        e.preventDefault();
        $('#who-we-are').removeClass('active');
        $('#upcoming-events').removeClass('active');
        $('#get-in-touch').removeClass('active');
        $('div.who-we-are').hide();
        $('div.upcoming-events').hide();
        $('div.past-events').show();
        $('div.get-in-touch').hide();
        $(this).addClass('active');
    });

    $('#get-in-touch, #contact').on('click', function(e){
        e.preventDefault();
        $('#who-we-are').removeClass('active');
        $('#upcoming-events').removeClass('active');
        $('#past-events').removeClass('active');
        $('div.who-we-are').hide();
        $('div.upcoming-events').hide();
        $('div.past-events').hide();
        $('div.get-in-touch').show();
        $('#get-in-touch').addClass('active');
    });
})