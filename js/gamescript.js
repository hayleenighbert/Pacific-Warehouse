$(document).ready(function(){
    console.log('Hello World');


var count = 0;
$('.item').on('click', function () {
    console.log(count); //
    // do things to add item to inventory.
    count++;
    if (count == 3) {
        alert('You win! You have collected all the necessary clues to find out more about your warehouse adventure. Continue on to the next slide for your fate..');
    }


//hide button after click
// $('#button').click(function() {
//     $(this).hide();
// });

});

    $('#ci').chooseIt();
    $(".bg").interactive_bg(); // function call
    $('.bg').hide().fadeIn('slow');


});

// document.querySelector('button#test-4').onclick = function(){
//     swal("Oops...", "Something went wrong!", "error");
// };


  // change background size on window resize
$(window).resize(function() {
    $(".bg > .ibg-bg").css({
        width: $(window).outerWidth(),
        height: $(window).outerHeight()
      });
    });





// Future draggable option for inventory    
    // $( "#draggable" ).draggable({ snap: true });
    // $( "#draggable2" ).draggable({ snap: ".ui-widget-header" });
    // $( "#draggable3" ).draggable({ snap: ".ui-widget-header", snapMode: "outer" });
    // $( "#draggable4" ).draggable({ grid: [ 20, 20 ] });
    // $( "#draggable5" ).draggable({ grid: [ 80, 80 ] });

