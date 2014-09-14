function onLoaded(){
  var data = {
    home: {
      height: 0
    },
    cv: {
      height: 0
    }
  };

  var homebutton = document.getElementById("gotohome");
  var cvbutton   = document.getElementById("gotocv");

  var homecontent = document.getElementById("home");
  var cvcontent   = document.getElementById("cv");

  data.home.height = document.getElementById("home").scrollHeight;
  data.cv.height = document.getElementById("cv").scrollHeight;

  var updatebuttons = function(enable, disable){
    enable.map(function(e){
      e.className = "enabled_button";
    });
    disable.map(function(e){
      e.className = "disabled_button";
    });
  };

  homebutton.className = "enabled_button";

  function onScroll(evt){
    var pos = document.documentElement.scrollTop || document.body.scrollTop;
    if(pos >= 0 && pos < data.home.height){
      updatebuttons([homebutton], [cvbutton]);
    }else{
      updatebuttons([cvbutton], [homebutton]);
    }
  }

  window.addEventListener('scroll', onScroll, true);
};

document.addEventListener('DOMContentLoaded', onLoaded, false);
