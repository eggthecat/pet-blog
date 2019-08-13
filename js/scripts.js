$(document).ready(function() {
  $("button#black").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
    // $("body").addColor("white-font");
    // $("body").css("background-color","white")
  });
  $("button#cyan").click(function() {
    $("body").removeClass();
    $("body").addClass("cyan-background");
    // $("body").addColor("black-font");
    // $("body").css("background-color","black")
  });
});
