$(document).ready(function(){
  setlayout();
  $(window).resize(function() {
    setlayout();
  });
  function setlayout(){
    $("#yogo-header").height($(window).height());
  }
});
