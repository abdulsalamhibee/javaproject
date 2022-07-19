$(function() {
    $('#Toggle').click(function() {
        $('#sub-menu').slideToggle(300);
    }); 

    $('#Cancel').click(function(){
        $('#sub-menu').hide(400);
    })
});