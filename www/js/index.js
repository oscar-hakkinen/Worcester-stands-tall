$(document).ready(function() {

});

var watchID;
var map;
var loc;
var path = [];


       

$(document).on( "pageinit", "#pagethree", function() {
    
    
    watchID = navigator.geolocation.watchPosition(onLocationSuccess, onLocationFail)
    
});


function onLocationSuccess(position) {
    
    loc = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    
    position.coords.latitude, position.coords.longitude
    
    path.push(loc);
    map = new google.maps.Map(document.getElementById('map'), {
        center: loc,
        zoom: 12,
        disableDefaultUI: true
    });
    
    //sets a path that shows the location the users has travelled 
     var mapPath = new google.maps.Polyline({
          path: path,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });
        //creates a custom map marker
    var marker = new google.maps.Marker({
          map: map,
          draggable: false,
          animation: google.maps.Animation.DROP,
        
          position: {lat: 52.191085, lng: -2.225975}
        });
        //creates another custom map marker
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