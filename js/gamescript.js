$(document).ready(function(){

var item = new Audio();
item.src = 'item.mp3';
function loadSound(num) {
    item.play(); // play the sound
    var divItem = document.getElementById("divItem");
    divItem.innerHTML = "You have picked up a "+string;
}

var count = 0;
$('.item').on('click', function () {
    console.log(count); //
    // do things to add item to inventory.
    count++;
    if (count == 3) {
        alert('You win! You have collected all the necessary clues');
    }

});

//make button disappear on click depending on class
$('.item').click(function() {
    $(this).hide();

});

    $('#ci').chooseIt();
    $(".bg").interactive_bg(); // function call
    $('.bg').hide().fadeIn('slow');


});

  // change background size on window resize
$(window).resize(function() {
    $(".bg > .ibg-bg").css({
        width: $(window).outerWidth(),
        height: $(window).outerHeight()
      });
    });
