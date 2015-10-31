$(document).ready(function(){

  // 4x4 grid
  for(var i=0; i<4; i++){
    console.log("creating row...");
    $("#canvas").append('<div class="row rowgrid" id=""></div>');
  };

  $(".rowgrid").each(function(){
    for(var i=0; i<4; i++){
      console.log("creating block...");
      $(this).append('<div class="block col-xs-3"></div>');
    }
  });

});