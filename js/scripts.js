$(document).ready(function() {
  $("button#black").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
  });
  
  $("button#cyan").click(function() {
    $("body").removeClass();
    $("body").addClass("cyan-background");
  });
});
