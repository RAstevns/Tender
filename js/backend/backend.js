
// https://www.w3schools.com/html/html5_geolocation.asp
// code snippet from w3schools.com

function getLocation() {
  alert("Getting your location...");
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function success(position) {
  // filler alert function
  alert("Latitude: " + position.coords.latitude + "Longitude: " + position.coords.longitude);
  searchNearby(position.coords.latitude, position.coords.longitude);
}

function error() {
  alert("Sorry, no position available.");
}
// end of code snippet

//data=" + encodeURIComponent(node(around:500, 70, 2);out body;

//xml version
/*
`<osm-script><query type="node">
  <has-kv k="name" v="Bristol"/>
</query>
<around radius="10" />
<print/></osm-script>`
*/
//42.6558344, -71.320074
//[out:json];node(around:100.0,42.6558344,-71.320074);out body;
async function searchNearby(latitude, longitude) {
  let query = `[out:json];node['amenity'='restaurant'](around:5000.0,${latitude},${longitude});
out geom;`;

  $.ajax({
//  dataType: 'text/html',
//  contentType: 'application/json',
    type: 'POST',
    url: "https://overpass-api.de/api/interpreter",
    data: { data: query },
    /*headers: {
      'Access-Control-Allow-Origin' : 'https://overpass-api.de/'
    },*/
    success: function (result) {
      console.log(JSON.stringify(result, null, 2));
    },
  });

}



