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
      e.className = "enabled_button";
    });
    disable.map(function(e){
      e.className = "disabled_button";
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
  if(document.body.offsetWidth >= 640){
    cvcontent.style.display = "none";
  }
  homebutton.className = "enabled_button";
}

document.addEventListener('DOMContentLoaded', loaded, false);
