const url = 'https://api.wheretheiss.at/v1/satellites/25544'

var mymap = L.map('mapid');

var start = false;

const attribution = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileURL, {attribution});
tiles.addTo(mymap);

var myIcon = L.icon({
    iconUrl: 'marker.png',
    iconSize: [25, 16],
    iconAnchor: [25, 16],
});
var marker = L.marker([0,0], {icon: myIcon}).addTo(mymap);

async function getLocation() {
    const res = await fetch(url);
    const data = await res.json();
    const {latitude, longitude} = data;
    console.log(latitude+ "\n" +longitude);
    marker.setLatLng([latitude, longitude]);
    if (!start) {
        mymap.setView([latitude, longitude], 4);
        start = true;
   }
    $('#lat').text(latitude.toFixed(2));
    $("#lon").text(longitude.toFixed(2));
    
}
$('#btn').click(function butt() {
    start = false;
     getLocation();
});
getLocation();

setInterval(getLocation, 1000);
