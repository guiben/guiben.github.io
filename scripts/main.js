function loaded(){
  var homebutton = document.getElementById("gotohome");
  var cvbutton   = document.getElementById("gotocv");

  var homecontent = document.getElementById("home");
  var cvcontent   = document.getElementById("cv");

  var toggle = function(enable, disable){
    enable.map(function(e){ e.style.visibility = "visible"; e.style.display = ""; });
    disable.map(function(e){ e.style.display = "none" });
  };

  cvbutton.addEventListener("click", function(){ toggle([cvcontent], [homecontent]); }); 
  homebutton.addEventListener("click", function(){ toggle([homecontent], [cvcontent]); });
  cvcontent.style.display = "none";
}

document.addEventListener('DOMContentLoaded', loaded, false);
