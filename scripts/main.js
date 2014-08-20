function loaded(){
  var homebutton = document.getElementById("gotohome");
  var cvbutton   = document.getElementById("gotocv");

  var homecontent = document.getElementById("home");
  var cvcontent   = document.getElementById("cv");

  var toggle = function(enable, disable){
    enable.map(function(e){
      e.style.visibility = "visible";
      e.style.display = ""; 
    });
    disable.map(function(e){
      e.style.display = "none" 
    });
  };

  var updatebuttons = function(enable, disable){
    enable.map(function(e){
      e.style.borderBottom = "solid 1px rgb(207, 58, 140)";
    });
    disable.map(function(e){
      e.style.borderBottom = "";
    });
  };

  cvbutton.addEventListener("click", function(){ 
    toggle([cvcontent], [homecontent]);
    updatebuttons([cvbutton], [homebutton]);
  }); 

  homebutton.addEventListener("click", function(){
    toggle([homecontent], [cvcontent]);
    updatebuttons([homebutton], [cvbutton]);
  });
  cvcontent.style.display = "none";
  homebutton.style.borderBottom = "solid 1px rgb(207, 58, 140)";
}

document.addEventListener('DOMContentLoaded', loaded, false);
