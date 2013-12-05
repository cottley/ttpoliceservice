var myApp = angular.module('myApp', []);
    
var controllers = {};
      
controllers.myAppController = function ($scope) {

  $scope.policeStations = [
{ division:'PORT OF SPAIN', station:'Divisional Headquarters', address:'Serpentine Road, St. Clair', telephone:'18686224565', telephone2:'', txtlat:'10.6721255', txtlon:'-61.5233773', distance:''},
{ division:'PORT OF SPAIN', station:'Belmont', address:'Belmont Circular Road, Belmont', telephone:'18686241848', telephone2:'', txtlat:'10.6702943', txtlon:'-61.5088774', distance:''},
{ division:'PORT OF SPAIN', station:'Besson Street', address:'Multi Producer Building, No.2 Picadilly Street, Port of Spain', telephone:'18686231395', telephone2:'', txtlat:'10.6513841', txtlon:'-61.5043437', distance:''},
{ division:'PORT OF SPAIN', station:'Central Police Station', address:'St. Vincent Street, Port of Spain', telephone:'18686251261', telephone2:'', txtlat:'10.6525341', txtlon:'-61.5122099', distance:''},
{ division:'PORT OF SPAIN', station:'St. Clair', address:'#1 Lamey Street, St. Clair (opposite Kapok Hotel)', telephone:'18686221343', telephone2:'', txtlat:'', txtlon:'', distance:''},
{ division:'PORT OF SPAIN', station:'Woodbrook', address:'Cor. Fitt and Baden Powell Streets, Woodbrook', telephone:'18686289171', telephone2:'', txtlat:10.66188, txtlon:-61.52137, distance:''},
{ division:'PORT OF SPAIN', station:'St. Barbs Police Post', address:'Upper St. Barbs Road, Laventille', telephone:'18686230929', telephone2:'', txtlat:'', txtlon:'', distance:''},
{ division:'PORT OF SPAIN', station:'Port of Spain Special Unit', address:'Multi Producer Building, No.2 Picadilly Street, Port of Spain', telephone:'18686258008', telephone2:'', txtlat:'10.6513841', txtlon:'-61.5043437', distance:''},
{ division:'WESTERN', station:'Divisional Headquarters', address:'Cor. Lazare Street and Western Main Road, St. James', telephone:'18686288377', telephone2:'', txtlat:'10.6721497', txtlon:'-61.5357724', distance:''},
{ division:'WESTERN', station:'St. James', address:'Cor. Lazare Street and Western Main Road, St. James', telephone:'18686223695', telephone2:'', txtlat:'10.6721497', txtlon:'-61.5357724', distance:''},
{ division:'WESTERN', station:'Maraval', address:'Cor. Morne Coco and Saddle Roads, Maraval', telephone:'18686292001', telephone2:'', txtlat:'10.7079078', txtlon:'-61.5111222', distance:''},
{ division:'WESTERN', station:'Carenage', address:'Constabulary Street, Carenage', telephone:'18686373123', telephone2:'', txtlat:'10.6861829', txtlon:'-61.5918195', distance:''},
{ division:'WESTERN', station:'West End', address:'Cor. Diamond Boulevard and Diego Martin Main Road, Diego Martin', telephone:'18686374226', telephone2:'', txtlat:'10.7180812', txtlon:'-61.5622116', distance:''},
{ division:'WESTERN', station:'Four Roads', address:'LP# 24 Four Roads and Diego Martin Main Road, Diego Martin', telephone:'18686373860', telephone2:'', txtlat:'10.6871427', txtlon:'-61.5535156', distance:''},
{ division:'WESTERN', station:'Patna Police Post', address:'Cor. St. Lucien Road and Diego Martin Main Road, Diego Martin', telephone:'18686320486', telephone2:'', txtlat:'', txtlon:'', distance:''},
{ division:'CENTRAL', station:'Divisional Headquarters', address:'Railway Road, Chaguanas', telephone:'18686654294', telephone2:'', txtlat:'', txtlon:'', distance:''},
{ division:'CENTRAL', station:'Couva', address:'Southern Main Road, Couva (opposite the Telephone Exchange)', telephone:'18686362333', telephone2:'', txtlat:'10.4216096', txtlon:'-61.4598782', distance:''},
{ division:'CENTRAL', station:'Chaguanas', address:'Railway Road, Chaguanas (opposite the Roman Catholic Church)', telephone:'18686655271', telephone2:'', txtlat:'10.5175682', txtlon:'-61.4145871', distance:''},
{ division:'CENTRAL', station:'Caroni', address:'Southern Main Road, Caroni (near Young Singh Factory)', telephone:'18686624291', telephone2:'', txtlat:'', txtlon:'', distance:''},
{ division:'CENTRAL', station:'Cunupia', address:'113.5km Southern Main Road, Cunupia (opposite Low Cost Supermarket)', telephone:'18686653080', telephone2:'', txtlat:'', txtlon:'', distance:''},
{ division:'CENTRAL', station:'Brasso', address:'Corner, Marshall Street & Mammoral Road Flanagin Town', telephone:'18686362735', telephone2:'', txtlat:'', txtlon:'', distance:''},
{ division:'CENTRAL', station:'Freeport', address:'LP # 142 Mission Road, Freeport', telephone:'18686730026', telephone2:'', txtlat:'', txtlon:'', distance:''},
{ division:'CENTRAL', station:'Las Lomas', address:'Las Lomas No.1 Chin Chin Road Cunupia', telephone:'', telephone2:'', txtlat:'', txtlon:'', distance:''},
{ division:'CENTRAL', station:'Longdenville Police Post', address:'Longdenville Main Road, Longdenville', telephone:'18686651826', telephone2:'', txtlat:'', txtlon:'', distance:''},
{ division:'SOUTHERN', station:'Divisional Headquarters', address:'#3 Knox Street, Harris Promenade South, San Fernando', telephone:'18686522858', telephone2:'', txtlat:'', txtlon:'', distance:''},
{ division:'SOUTHERN', station:'San Fernando', address:'Court Street, San Fernando', telephone:'18686522561', telephone2:'', txtlat:'10.2798081', txtlon:'-61.4661128', distance:''},
{ division:'SOUTHERN', station:'Ste. Madeleine', address:'#120 Manahambre Road, Ste. Madeleine', telephone:'18686523348', telephone2:'', txtlat:'10.2684547', txtlon:'-61.4271166', distance:''},
{ division:'SOUTHERN', station:'Princes Town', address:'High Street, Princes Town', telephone:'18686552231', telephone2:'', txtlat:'10.2719732', txtlon:'-61.3757341', distance:''},
{ division:'SOUTHERN', station:'Tableland', address:'Corner Mc Sween Road and Naparima Mayaro Road, Tableland', telephone:'18686563430', telephone2:'', txtlat:'', txtlon:'', distance:''},
{ division:'SOUTHERN', station:'Barrackpore', address:'Junction of New Colonial and Papourie Roads, Barrackpore', telephone:'18686540609', telephone2:'', txtlat:'10.2073326', txtlon:'-61.3947692', distance:''},
{ division:'SOUTHERN', station:'Mon Repos', address:'Corner Smith and Naparima Mayaro Road, Mon Repos, San Fernando', telephone:'18686579769', telephone2:'', txtlat:'10.2799727', txtlon:'-61.4496182', distance:''},
{ division:'SOUTHERN', station:'Gasparillo', address:'Corner School Street and Bonne Aventure Main Road, Gasparillo', telephone:'18686502193', telephone2:'', txtlat:'10.3178466', txtlon:'-61.4256742', distance:''},
{ division:'SOUTHERN', station:'Moruga', address:'La Lune Junction, Moruga', telephone:'18686552030', telephone2:'', txtlat:'', txtlon:'', distance:''},
{ division:'SOUTHERN', station:'St. Margarets', address:'Southern Main Road, Claxton Bay', telephone:'18686592530', telephone2:'', txtlat:'10.3417169', txtlon:'-61.4567293', distance:''},
{ division:'SOUTHERN', station:'Marabella', address:'Southern Main Road, Marabella', telephone:'18686522830', telephone2:'', txtlat:'10.3006276', txtlon:'-61.4491009', distance:''},
{ division:'SOUTHERN', station:'St. Mary\'s Police Post', address:'St. Mary\'s Village, Moruga (near Gas Station)', telephone:'18686566606', telephone2:'', txtlat:'', txtlon:'', distance:''},
{ division:'SOUTHERN', station:'Debe Police Post', address:'Lallbeharry Trace Junction, Debe', telephone:'18686472124', telephone2:'', txtlat:'10.2059349', txtlon:'-61.4475038', distance:''},
{ division:'SOUTHERN', station:'Lengua Village Police Station', address:'Saint Croix Road', telephone:'', telephone2:'', txtlat:'10.2299131', txtlon:'-61.37802', distance:''},
{ division:'SOUTH WESTERN', station:'Divisional Headquarters', address:'Siparia Erin Road, Siparia', telephone:'18686492353', telephone2:'', txtlat:'10.1442737', txtlon:'-61.5054722', distance:''},
{ division:'SOUTH WESTERN', station:'Siparia', address:'Corner Lalla Street and Siparia Erin Road, Siparia', telephone:'18686492333', telephone2:'', txtlat:'10.1441782', txtlon:'-61.5071836', distance:''},
{ division:'SOUTH WESTERN', station:'Point Fortin', address:'Guapo Cap-De-Ville Main Road, Point Fortin (next to TRINMAR)', telephone:'18686482426', telephone2:'', txtlat:'10.1773823', txtlon:'-61.6835894', distance:''},
{ division:'SOUTH WESTERN', station:'Santa Flora', address:'16 and 3 quarters mm, Santa Flora', telephone:'18686495555', telephone2:'', txtlat:'10.1123432', txtlon:'-61.5588723', distance:''},
{ division:'SOUTH WESTERN', station:'Erin', address:'Corner Siparia Erin and Buenos Ayres Road, Erin', telephone:'18686495888', telephone2:'', txtlat:'10.073958', txtlon:'-61.657709', distance:''},
{ division:'SOUTH WESTERN', station:'Cedros', address:'Southern Main Road, Bonasse Village, Cedros', telephone:'18686482747', telephone2:'', txtlat:'10.0926811', txtlon:'-61.8649471', distance:''},
{ division:'SOUTH WESTERN', station:'Oropouche', address:'School Road, Oropouche (opposite RC Church)', telephone:'18686777544', telephone2:'', txtlat:'', txtlon:'', distance:''},
{ division:'SOUTH WESTERN', station:'Fyzabad', address:'#47 Fyzabad Guapo Road, Fyzabad', telephone:'18686777777', telephone2:'', txtlat:'10.1765866', txtlon:'-61.5469259', distance:''},
{ division:'SOUTH WESTERN', station:'La Brea', address:'La Brea Village Road, La Brea (near the Court House)', telephone:'18686487444', telephone2:'', txtlat:'', txtlon:'', distance:''},
{ division:'SOUTH WESTERN', station:'Penal', address:'Corner Rock Road and Siparia Erin Road, Siparia', telephone:'18686478888', telephone2:'', txtlat:'10.1678405', txtlon:'-61.4587472', distance:''},
{ division:'SOUTH WESTERN', station:'Guapo', address:'KPO Stretch, Guapo (near the NP Gas Station)', telephone:'18686482403', telephone2:'', txtlat:'', txtlon:'', distance:''},
{ division:'SOUTH WESTERN', station:'Cap-De-Ville Police Post', address:'Cap-De-Ville Main Road, Gun Hill , Cap-De-Ville', telephone:'18686480283', telephone2:'', txtlat:'', txtlon:'', distance:''},
{ division:'NORTHERN', station:'Divisional Headquarters', address:'Corner Eastern Main Road and Pasea Road, Tunapuna', telephone:'18686450424', telephone2:'', txtlat:'', txtlon:'', distance:''},
{ division:'NORTHERN', station:'Arima', address:'Broadway Arima (roughly 100 meters north of the Dial)', telephone:'18686673563', telephone2:'', txtlat:'10.6414683', txtlon:'-61.2819094', distance:''},
{ division:'NORTHERN', station:'Arouca', address:'Five Rivers Junction, Arouca', telephone:'18686424870', telephone2:'', txtlat:'', txtlon:'', distance:''},
{ division:'NORTHERN', station:'St. Joseph', address:'Abercromby & Market Street, St. Joseph', telephone:'18686624038', telephone2:'', txtlat:'10.6546876', txtlon:'-61.4143893', distance:''},
{ division:'NORTHERN', station:'Tunapuna', address:'Corner Eastern Main Road and Pasea Road, Tunapuna', telephone:'18686624978', telephone2:'', txtlat:'10.6450853', txtlon:'-61.3900094', distance:''},
{ division:'NORTHERN', station:'Cumuto', address:'LP #52 Tumpuna Road, Cumuto', telephone:'18686439357', telephone2:'', txtlat:'10.5900025', txtlon:'-61.2087548', distance:''},
{ division:'NORTHERN', station:'San Raphael', address:'San Raphael Junction, Tumpuna Road, Arima', telephone:'18686438373', telephone2:'', txtlat:'10.5760985', txtlon:'-61.2735909', distance:''},
{ division:'NORTHERN', station:'Maracas/St. Joseph', address:'LP #51 El Chorro Road, Maracas/St. Joseph', telephone:'18686631264', telephone2:'', txtlat:'', txtlon:'', distance:''},
{ division:'NORTHERN', station:'Piarco', address:'Golden Grove Road, Piarco', telephone:'18686644366', telephone2:'', txtlat:'10.599334', txtlon:'-61.3448434', distance:''},
{ division:'NORTHERN', station:'La Horquetta', address:'De Freitas Boulevard, Maloney Gardens, Arima', telephone:'18686433857', telephone2:'', txtlat:'10.5949623', txtlon:'-61.2759014', distance:''},
{ division:'NORTHERN', station:'Pinto Police Post', address:'#3 Pinto Road, Arima', telephone:'18686675217', telephone2:'', txtlat:'10.6195364', txtlon:'-61.2628788', distance:''},
{ division:'NORTHERN', station:'Malabar Police Post', address:'#10 Banyan Boulevard, Malabar', telephone:'18686432358', telephone2:'', txtlat:'', txtlon:'', distance:''},
{ division:'NORTHERN', station:'Maloney Police Post', address:'Jacana Boulevard, Maloney Gardens', telephone:'18686466504', telephone2:'', txtlat:'', txtlon:'', distance:''},
{ division:'EASTERN', station:'Divisional Headquarters', address:'29 mm Eastern Main Road, Sangre Grande', telephone:'18686682505', telephone2:'', txtlat:'10.5856655', txtlon:'-61.1278705', distance:''},
{ division:'EASTERN', station:'Sangre Grande', address:'29 mm Eastern Main Road, Sangre Grande', telephone:'18686682444', telephone2:'', txtlat:'10.5856655', txtlon:'-61.1278705', distance:''},
{ division:'EASTERN', station:'Matura', address:'10 and a half mm Toco Main Road, Matura', telephone:'18686684511', telephone2:'18686884582', txtlat:'', txtlon:'', distance:''},
{ division:'EASTERN', station:'Biche', address:'15 and a quarter mm Canque Village, Biche', telephone:'18686689044', telephone2:'', txtlat:'', txtlon:'', distance:''},
{ division:'EASTERN', station:'Manzanilla', address:'36 mm Naparima Mayaro Road, Manzanilla', telephone:'18686682062', telephone2:'', txtlat:'', txtlon:'', distance:''},
{ division:'EASTERN', station:'Mayaro', address:'40 mm Naparima Mayaro Road, Mayaro', telephone:'18686304333', telephone2:'', txtlat:'10.2949029', txtlon:'-61.0055755', distance:''},
{ division:'EASTERN', station:'Matelot', address:'46 mm Andrew Street, Matelot', telephone:'18686708220', telephone2:'', txtlat:'', txtlon:'', distance:''},
{ division:'EASTERN', station:'Toco', address:'28 and three quarters mm Paria Main Road, Toco', telephone:'18686708256', telephone2:'', txtlat:'', txtlon:'', distance:''},
{ division:'EASTERN', station:'Rio Claro', address:'Old Guayaguayare Rd, Rio Claro', telephone:'18686442332', telephone2:'', txtlat:'', txtlon:'', distance:''},
{ division:'EASTERN', station:'Valencia Police Post', address:'Eastern Main Road, Valencia', telephone:'18686679030', telephone2:'', txtlat:'10.6522192', txtlon:'-61.2023941', distance:''},
{ division:'NORTH EASTERN', station:'Divisional Headquarters', address:'Corner Lady Young Avenue and Busby Street, Morvant', telephone:'18686243066', telephone2:'', txtlat:'', txtlon:'', distance:''},
{ division:'NORTH EASTERN', station:'Morvant', address:'Lady Young Avenue and Busby Street, Morvant', telephone:'18686243737', telephone2:'', txtlat:'', txtlon:'', distance:''},
{ division:'NORTH EASTERN', station:'Barataria/El Socorro', address:'Corner 3rd Avenue and Bhagouti Trace, Barataria', telephone:'18686744724', telephone2:'', txtlat:'10.6381993', txtlon:'-61.4587533', distance:''},
{ division:'NORTH EASTERN', station:'San Juan', address:'Calvary Hill, San Juan', telephone:'18686383322', telephone2:'', txtlat:'10.6498877', txtlon:'-61.4500792', distance:''},
{ division:'NORTH EASTERN', station:'Santa Cruz', address:'Saddle Road, Santa Cruz (next to the RC School)', telephone:'18686768888', telephone2:'', txtlat:'10.7153053', txtlon:'-61.4691173', distance:''},
{ division:'NORTH EASTERN', station:'Maracas Bay', address:'Grand Fond Road, Maracas', telephone:'18686694136', telephone2:'', txtlat:'', txtlon:'', distance:''},
{ division:'NORTH EASTERN', station:'Blanchisseuse', address:'North Coast Road, Blanchiseuse', telephone:'18686693868', telephone2:'', txtlat:'10.798372', txtlon:'-61.3142869', distance:''},
{ division:'NORTH EASTERN', station:'San Juan Sub-Station', address:'Eastern Main Road, Croisee, San Juan', telephone:'18686753338', telephone2:'', txtlat:'', txtlon:'', distance:''},
{ division:'TOBAGO', station:'Divisional Headquarters', address:'Young Street, Scarborough', telephone:'18686392511', telephone2:'', txtlat:'11.1794097', txtlon:'-60.7331917', distance:''},
{ division:'TOBAGO', station:'Scarborough', address:'Young Street, Scarborough', telephone:'18686392512', telephone2:'', txtlat:'11.1794097', txtlon:'-60.7331917', distance:''},
{ division:'TOBAGO', station:'Crown Point', address:'Milford Road, Crown Point (next to the Airport)', telephone:'18686390020', telephone2:'', txtlat:'11.1536386', txtlon:'-60.8379221', distance:''},
{ division:'TOBAGO', station:'Old Grange', address:'LP #85 Bethel Hopeton Road, Old Grange (next to the Golf Course)', telephone:'18686398888', telephone2:'', txtlat:'11.1694509', txtlon:'-60.7813778', distance:''},
{ division:'TOBAGO', station:'Moriah', address:'35 mm Northside Road, Moriah', telephone:'18686600029', telephone2:'', txtlat:'11.2445074', txtlon:'-60.7171932', distance:''},
{ division:'TOBAGO', station:'Roxborough', address:'Station Street, Roxborough', telephone:'18686604333', telephone2:'', txtlat:'11.2489783', txtlon:'-60.5788462', distance:''},
{ division:'TOBAGO', station:'Charlotteville', address:'New Street, Charlotteville', telephone:'18686604388', telephone2:'', txtlat:'11.323289', txtlon:'-60.5474181', distance:''}
  ];

  $scope.policeStationByDivision = function(divisionin) {
    var result = [];
    for (var i=0; i<$scope.policeStations.length; i++) {
      if ($scope.policeStations[i].division == divisionin) {
        result.push($scope.policeStations[i]);
      }
    }
    return result;
  };
  
  $scope.closestStationUsingGPS = function() {
    var result = [];
    if ($scope.closestPoliceStation != -1) {
      result.push($scope.policeStations[$scope.closestPoliceStation]);
      console.log("Found closest police station");
    }
    return result;
  };
  
  $scope.closestPoliceStation = -1;
   
  $scope.updateDistances = function() {
    var currentLat = document.getElementById("textinputlat").value;
    var currentLon = document.getElementById("textinputlon").value;
    var smallestDistance = -1;
    var smallestDistanceLoc = -1;
    $scope.closestPoliceStation = -1;
    for (var i=0; i<$scope.policeStations.length; i++) {
      if (($scope.policeStations[i].txtlat != '') && 
          ($scope.policeStations[i].txtlon != '')) {
        if ((currentLat == 0) || (currentLon == 0)) {
          $scope.policeStations[i].distance = '';
        } else {
          $scope.policeStations[i].distance = parseFloat(new LatLon(currentLat, currentLon).distanceTo(new LatLon($scope.policeStations[i].txtlat, $scope.policeStations[i].txtlon)));
          if (smallestDistance == -1) {
            smallestDistance = $scope.policeStations[i].distance;
            smallestDistanceLoc = i;
          } else {
            if ($scope.policeStations[i].distance < smallestDistance) {
              smallestDistance = $scope.policeStations[i].distance;
              smallestDistanceLoc = i;
            }
          }
        }
      }
    }
    $scope.closestPoliceStation = smallestDistanceLoc;
  };


  
};
      
myApp.controller(controllers);