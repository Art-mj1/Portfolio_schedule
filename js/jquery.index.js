$(document).ready(function() {
 //Lightslider Plugin Code
 $(".intro").lightSlider({
   item:1,
   pager:false,
   slideMargin: 0,
   loop:true,
   speed: 400, //ms'
   auto: true,
   pause: 7000,
   mode:'fade',
   adaptiveHeight:true,
 });
});