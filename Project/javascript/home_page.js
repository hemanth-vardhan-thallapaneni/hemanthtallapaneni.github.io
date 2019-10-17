/*function scrollToBottom(element){   
var ele = document.getElementById("aboutus");   
window.scrollTo(ele.offsetLeft,ele.offsetTop); }*/


//$("#aboutus").click(function() {
//    $('html, body').animate({
//        scrollTop: $("#aboutus").offset().top
//    }, 2000);
//});

$('.scroll').click(function() {
    $('body').animate({
        scrollTop: eval($('#' + $(this).attr('target')).offset().top - 70)
    }, 1000);
});