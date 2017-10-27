// //check off specific todos by clicking the li
// $("ul").on("click", "li" ,function(){
//     $(this).toggleClass("completed");
// });

// //click on X to delete
// $("ul").on("click", "span", function(event){
//     $(this).parent().fadeOut(500,function(){
//         $(this).remove();
//     });
//     event.stopPropagation();
// });

// $("input[type='text']").keypress(function(event){
//     if(event.which === 13){
//         var todoText = $(this).val();
//         $(this).val("")
//         $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
//     }
// });

// $(".fa-plus").click(function(){
//     $("input[type='text']").fadeToggle();
// })


// $(document).ready(function() {
//   $("input[type='text']").fadeOut(0)
// });

// $(".fa-plus").click(function() {
//   $("input[type='text']").fadeToggle();
//   $("input").focus();
// });




//Check off specific todos by clicking (short hand with jquery)
$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
  if ($(this).hasClass('completed')) {
    $(this).parent('ul').append($(this));
  } else {
    $(this).parent('ul').prepend($(this));
  }
});

//Click on X to delet Todo
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

//input text and enter into list
$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    //grabbing new todo text from input
    var todoText = $(this).val();
    $(this).val("");
    //creat a new li and add to ul
    $("ul").prepend("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");

  }
})

$(document).ready(function() {
  $("input[type='text']").fadeOut(0)
});

$(".fa-plus").click(function() {
  $("input[type='text']").fadeToggle();
  $("input").focus();
});

//move items on list
var list = document.getElementById("list");
var sortable = Sortable.create(list);

//close input when click out
$("input").focus(function() {}).blur(function() {
 $("input[type='text']").fadeToggle();
});