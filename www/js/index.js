$(document).ready(function() {

});

var watchID;
var map;
var loc;
var loc2;
var path = [];


       

$(document).on( "pageinit", "#pagethree", function() {
    
    
    watchID = navigator.geolocation.watchPosition(onLocationSuccess, onLocationFail)
    
});


function onLocationSuccess(position) {
    
    loc = new google.maps.LatLng(52.191085, -2.225975);
    loc2 = new google.maps.LatLng(51.191085, -3.225975);
    
    position.coords.latitude, position.coords.longitude
    
    path.push(loc);
    path.push(loc2);
    map = new google.maps.Map(document.getElementById('map'), {
        center: loc,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    
    
     var mapPath = new google.maps.Polyline({
          path: path,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
    
    mapPath.setMap(map);
}

function onLocationFail(error) {
    console.log("Error: " + error.message);
}