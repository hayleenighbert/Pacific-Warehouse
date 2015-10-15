// document.addEventListener('DOMContentLoaded', function() {
// 	console.log('Voila!')
// });

$(document).ready(function(){


    $('#ci').chooseIt();;


    $(".bg").interactive_bg(); // function call
    $('.bg').hide().fadeIn('slow');


    // $('p').typewriter({speed:50});
    
    $( "#draggable" ).draggable({ snap: true });
    $( "#draggable2" ).draggable({ snap: ".ui-widget-header" });
    $( "#draggable3" ).draggable({ snap: ".ui-widget-header", snapMode: "outer" });
    $( "#draggable4" ).draggable({ grid: [ 20, 20 ] });
    $( "#draggable5" ).draggable({ grid: [ 80, 80 ] });



});


  // change background size on window resize
$(window).resize(function() {
    $(".bg > .ibg-bg").css({
        width: $(window).outerWidth(),
        height: $(window).outerHeight()
      })
    })