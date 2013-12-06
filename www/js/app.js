function getLocation() {
  var suc = function(p) {
	  document.getElementById("textinputlat").value = p.coords.latitude;
	  document.getElementById("textinputlon").value = p.coords.longitude;
    angular.element(document.getElementById("policeStationList")).scope().updateDistances();
    angular.element(document.getElementById("policeStationList")).scope().$apply();
    var closestStation = angular.element(document.getElementById("policeStationList")).scope().closestStationUsingGPS();
    var closestStationHTML = '<a href="#displayonmap" class="theme theme-none locationafter" id="aflink">' + closestStation[0].station + '<br/>' + closestStation[0].address + '<br/>Approx Distance: ' + closestStation[0].distance + ' KM</a><br/>';
    var closestStationMapHTML = '<u>Closest Police Station:</u> ' + closestStation[0].station + '<br/>' + closestStation[0].address + '<br/>Approx Distance: ' + closestStation[0].distance + ' KM<br/>';
    var closestStationTelephoneHTML = '<a href="tel:' + closestStation[0].telephone + '" class="icon phone" data-transition="none">Call ' +  closestStation[0].telephone + '</a>';
    if (closestStation[0].telephone != '') { 
      closestStationHTML += closestStationTelephoneHTML; 
      closestStationMapHTML += closestStationTelephoneHTML;
    }
    document.getElementById("closestpolicestationdata").innerHTML = closestStationHTML;
    document.getElementById("closestpolicestationdataformap").innerHTML = closestStationMapHTML;
    
    var stationPosition = new OpenLayers.LonLat(closestStation[0].txtlon,closestStation[0].txtlat).transform('EPSG:4326', 'EPSG:900913');
      
    markers = new OpenLayers.Layer.Markers( "Markers" );
    map.addLayer(markers);
 
    markers.addMarker(new OpenLayers.Marker(stationPosition));
 
    map.setCenter (stationPosition, 15);
      
  };
  var locFail = function() {
	  document.getElementById("textinputlat").value = 'Unable to get latitude';
	  document.getElementById("textinputlon").value = 'Unable to get longitude';
      document.getElementById("closestpolicestationdata").innerHTML = '<a class="theme theme-none" id="aflink" href="#displayonmap">No GPS detected</a>';
      document.getElementById("closestpolicestationdataformap").innerHTML = "No station identified";
  }; 
  navigator.geolocation.getCurrentPosition(suc, locFail);
};

function init() {
  $("#map").width($(window).width()-20);
  $("#map").height($(window).height()/2);
    
  document.addEventListener("backbutton", function () { 
    navigator.notification.confirm(
      'Do you want to quit', 
      onConfirmQuit, 
      'Exit TT Police Service', 
      'OK,Cancel');
    }, true);     


  Hammer(document.getElementById('main')).on("swipeleft", function(event) { $.ui.loadContent("#stations"); });
  Hammer(document.getElementById('main')).on("swiperight", function(event) { $.ui.loadContent("#about",false,true,"slide"); });
    
  Hammer(document.getElementById('stations')).on("swipeleft", function(event) { $.ui.loadContent("#about"); });
  Hammer(document.getElementById('stations')).on("swiperight", function(event) { $.ui.loadContent("#main",false,true,"slide"); });

  Hammer(document.getElementById('about')).on("swipeleft", function(event) { $.ui.loadContent("#main"); });
  Hammer(document.getElementById('about')).on("swiperight", function(event) { $.ui.loadContent("#stations",false,true,"slide"); });
    
  map = new OpenLayers.Map("map");
  var mapnik         = new OpenLayers.Layer.OSM();
  var fromProjection = new OpenLayers.Projection("EPSG:4326");   // Transform from WGS 1984
  var toProjection   = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection
  var position       = new OpenLayers.LonLat(-61.5133,10.6632).transform( fromProjection, toProjection);
  var zoom           = 15; 
 
  map.addLayer(mapnik);
  map.setCenter(position, zoom );

  getLocation();
  setInterval(function() { getLocation(); }, 10000);
}

function onConfirmQuit(button){
  if (button == "1") {
    navigator.app.exitApp(); 
  }
};

function exitApp() {
  navigator.notification.confirm(
    'Do you want to quit?', 
    onConfirmQuit, 
    'Exit TT Police Service', 
    'Yes,No'  
  );  
}
