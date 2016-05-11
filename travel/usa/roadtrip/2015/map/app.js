var mymap = L.map('mapid').setView([41, -118], 5);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

function onEachFeature(feature, layer) {
	if(feature.properties && feature.properties.name) {
		layer.bindPopup(feature.properties.popupContent);
	}
}

var geojsonMarkerOptions = {
	radius: 4,
	fillColor: "#ff7800",
	color: "#ff7f00",
	weight: 1,
	opacity: 1,
	fillOpacity: 0.8
};

L.geoJson(geojsonData, {
	onEachFeature: onEachFeature,
	pointToLayer: function (feature, latlng) {
		return L.circleMarker(latlng, geojsonMarkerOptions);
	}
}).addTo(mymap);

var myStyle = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.65
};

L.geoJson(myLines, {
	style: myStyle
}).addTo(mymap);
