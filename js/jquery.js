$(function(){
    $('#tabs a').click(function(e) {
         e.preventDefault();                
         $('#tabs li').removeClass("current").removeClass("hoverItem");
         $(this).parent().addClass("current");
         $("#content1 div").removeClass("show");
         $('#' + $(this).attr('title')).addClass('show');
     });

    $('#tabs a').hover(function(){
       if(!$(this).parent().hasClass("current")){
         $(this).parent().addClass("hoverItem");
       }
    }, function(){
       $(this).parent().removeClass("hoverItem");
    });
 });


 $(function(){
   $(".logo").click(function(){
      $(".ul_show").toggle(1000);
   })
 })



/*json文件插入*/ 
//  $(function(){
//    $("#about").click(function(){
//       $.getJSON("./js/json1.json",function(date){
//         var $json_text = $(".json_text")
//         var strHTML = "";
//         $json_text.empty();
//         $.each(date,function(infoIndex,info){
//           strHTML = info["type6"];
//         })
//         $json_text.html(strHTML);
//       })
//    });
//  });