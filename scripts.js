$(document).ready(function(){
  var width = 960;
  var height = width;

  var setCellSize = function(rows, cols){
    $(".cell").width(width/cols);
    $(".cell").height(height/rows);
  };

  var createCells = function(rows, cols){
    $("#canvas").append('<div id="q2dm1"></div>');

    for(var i=0; i<rows; i++){
      console.log("appending row div to q2dm1...");
      $("#q2dm1").append('<div class="row"></div>');
    };

    $(".row").each(function(){
      for(var i=0; i<cols; i++){
        console.log("appending cell to row...");
        $(this).append('<div class="cell"></div>');
      }
    });

    setCellSize(rows, cols);
  }

  createCells(32,32);
});