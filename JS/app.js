$(document).ready(function () {
  //using jQuery to toggle between the icons and the text to be displayed

  $(".design").click(function () {
    $(".design-toggle").toggle();
    $(".hidden-design").toggle();
  });

  $(".dev").click(function () {
    $(".dev-toggle").toggle();
    $(".hidden-dev").toggle();
  });

  $(".product").click(function () {
    $(".product-toggle").toggle();
    $(".hidden-product").toggle();
  });

 

  $("#blackie").hover(function() {    
    $("#blackie-text").css({"visibility": "visible"}); 
    $(this).css("opacity", "0.6");  
  }, function() {
    $(this).css("opacity", "1")
    $("#blackie-text").css("visibility", "hidden");
  });

  $("#ontario").hover(function() {    
    $("#ontario-text").css({"visibility": "visible"}); 
    $(this).css("opacity", "0.6");  
  }, function() {
    $(this).css("opacity", "1")
    $("#ontario-text").css("visibility", "hidden");
  });

  $("#orange").hover(function() {    
    $("#orange-text").css({"visibility": "visible"}); 
    $(this).css("opacity", "0.6");  
  }, function() {
    $(this).css("opacity", "1")
    $("#orange-text").css("visibility", "hidden");
  });

  $("#carrey").hover(function() {    
    $("#carrey-text").css({"visibility": "visible"}); 
    $(this).css("opacity", "0.6");  
  }, function() {
    $(this).css("opacity", "1")
    $("#carrey-text").css("visibility", "hidden");
  });


  $("#elena").hover(function() {    
    $("#elena-text").css({"visibility": "visible"}); 
    $(this).css("opacity", "0.6");  
  }, function() {
    $(this).css("opacity", "1")
    $("#elena-text").css("visibility", "hidden");
  });
  
  $("#wordpress").hover(function() {    
    $("#wordpress-text").css({"visibility": "visible"}); 
    $(this).css("opacity", "0.6");  
  }, function() {
    $(this).css("opacity", "1")
    $("#wordpress-text").css("visibility", "hidden");
  });

  $("#burned").hover(function() {    
    $("#burned-text").css({"visibility": "visible"}); 
    $(this).css("opacity", "0.6");  
  }, function() {
    $(this).css("opacity", "1")
    $("#burned-text").css("visibility", "hidden");
  });

  $("#giraffe").hover(function() {    
    $("#giraffe-text").css({"visibility": "visible"}); 
    $(this).css("opacity", "0.6");  
  }, function() {
    $(this).css("opacity", "1")
    $("#giraffe-text").css("visibility", "hidden");
  });


  let projects = ["#carrey", "#orange", "#ontario", "#blackie", "#elena", "#wordpress", "#burned", "#giraffe"];
  //This for loop did not work
  // for (let i = 0; i < projects.length; i++) {
  //   $("projects[i]").hover(function() {
  //     $("projects[i]+'-text'").css({
  //       "visibility": "visible"
  //     });
  //     $("projects[i]").css("opacity", "0.6");
  //   }, function () {
  //     $("projects[i]").css("opacity", "1");
  //     $("projects[i]+'-text'").css({
  //       "visibility": "hidden"
  //     });
  //   });
  // }

  // Media queries

  





});
