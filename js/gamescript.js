document.addEventListener('DOMContentLoaded', function() {
	console.log('Voila!')
});


//jquery select cursor
// $( ".selector" ).draggable({
//   cursorAt: { left: 5 }
//   cursor: "crosshair"s
// });

// // Getter
// var cursorAt = $( ".selector" ).draggable( "option", "cursorAt", "cursor" );
 
// // Setter
// $( ".selector" ).draggable( "option", "cursorAt", "crosshair", { left: 5 } );

// });

// $(document).ready(function () {
//     addElements();
//     $(function () {
//         $("#list1, #list2").sortable({
//             connectWith: ".lists",
//             cursor: "move"
//         }).disableSelection();
//     });
// })

// function addElements() {
//     $("#list1").empty().append(
//         "<li id='item1' class='list1Items'>Item 1</li>" +
//         "<li id='item2' class='list1Items'>Item 2</li>" +
//         "<li id='item3' class='list1Items'>Item 3</li>");
// 	});
// })

//interactive bg 

$(".bg").interactive_bg({
   strength: 25,
   scale: 1.05,
   animationSpeed: "100ms",
   contain: true,
   wrapContent: false

    });
});

$(document).ready(function(){

    $(".bg").interactive_bg(); // function call
    });

  // change background size on window resize
  $(window).resize(function() {
      $(".bg > .ibg-bg").css({
        width: $(window).outerWidth(),
        height: $(window).outerHeight()
});
  });



//click and change images
// function changeImage() {

//         if (document.getElementById("imgClickAndChange").src == "images/gp-17") 
//         {
//             document.getElementById("imgClickAndChange").src = "images/gp-27";
//         }
//         else 
//         {
//             document.getElementById("imgClickAndChange").src = "";
//         }
//     }


//   });
//create click "zones" here


//*create a function to change image on click//
// $(function() {
//  $('.menulink').click(function(){
//    $("#bg").attr('src',"images/gp-1");
//    return false;
//  });
// });


//Code in progress:

//Change color on hover
// $("document").ready(function(){
//     $("a").hover(function(){
//         $('i').toggleClass('icon-red');
//     });
// });​

//Invisible div to click on for event to happen

// $('.js-input').click(function() {
//     $('.toggleBox').css({
//         top : 22 + 'px',
//         left : 91 + 'px'
//     });
// });

// Setter

//variables**

//interactions

// var door1 = document.getElementById('').value;
// var door2 = document.getElementById('').value;


// Transition function**
// function changeRoom1(element, event){

// 	if(window.door1 === true){
// 		window.door1 = false;
// 	}else{
// 		window.door1 = true;
// 	}
// }
// function changeRoom2(element, event){

// 	if(window.door2 === true){
// 		window.door2 = false;
// 	}else{
// 		window.door2 = true;
// 	}
// }