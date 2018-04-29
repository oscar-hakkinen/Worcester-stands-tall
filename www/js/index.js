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
    loc2 = new google.maps.LatLng(52.196020, -2.225454);
    
    path.push(loc);
    path.push(loc2);
    map = new google.maps.Map(document.getElementById('map'), {
        center: loc,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    
    
     var mapPath = new google.maps.Polyline({
          path: path,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
        
    var marker = new google.maps.Marker({
          map: map,
          draggable: false,
          animation: google.maps.Animation.DROP,
          position: {lat: 52.191085, lng: -2.225975}
        });
    
     var marker2 = new google.maps.Marker({
          map: map,
          draggable: false,
          animation: google.maps.Animation.DROP,
          position: {lat: 52.196020, lng:-2.225454}
        });
    
    mapPath.setMap(map);
}

function onLocationFail(error) {
    console.log("Error: " + error.message);
}