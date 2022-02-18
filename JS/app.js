$(document).ready(function(){
  //using jQuery to toggle between the icons and the text to be displayed

 $(".design").click(function() {
  $(".design-toggle").toggle();
  $(".hidden-design").toggle();
 });

 $(".dev").click(function() {
  $(".dev-toggle").toggle();
  $(".hidden-dev").toggle();
 });

 $(".product").click(function() {
  $(".product-toggle").toggle();
  $(".hidden-product").toggle();
 });






});
