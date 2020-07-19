function initialize() {
  const propertiPeta = {
    center:new google.maps.LatLng(-6.244284, 106.798235), 
    zoom:15,
    mapTypeId:google.maps.MapTypeId.ROADMAP
};
const peta = new google.maps.Map(document.getElementById("googleMap"), propertiPeta);
}
google.maps.event.addDomListener(window, 'load', initialize);


window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("myNav").style.backgroundColor = "#545a80";
    document.getElementById("myNav").style.fontColor = "black";
  } else {
    document.getElementById("myNav").style.backgroundColor = "transparent";
    document.getElementById("myNav").style.fontColor = "white";
  }
} 

function navFunction() {
  var x = document.getElementById("myNav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

