$(document).ready(function(){
  $("button#black").click(function(){
    $("body").addClass("black-background");
    $("body").addColor("white-font");
    $("body").css("background-color","white")
  })
  $("button#white").click(function(){
    $("body").addClass("white-background");
    $("body").addColor("black-font");
    $("body").css("background-color","black")
  })
});
