/*
** EPITECH PROJECT, 2021
** D-POO-100-Lyon_sasha-bieller
** File description:
** ex_02.js
*/

var map = L.map('map').setView([47.232192999999995, 2.209666999999996], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var Icon = L.Icon.extend({
	options: {
		iconSize:     [50, 60],
		iconAnchor:   [22, 64],
		popupAnchor:  [-3, -76]
	}
});

var epitechlogo = new Icon({iconUrl: 'epitechlogo.png'});

L.marker([45.75, 4.85], {icon: epitechlogo}).addTo(map).bindPopup("Lyon");
L.marker([48.8588897, 2.320041], {icon: epitechlogo}).addTo(map).bindPopup("Paris");;
L.marker([47.2186371, -1.5541362], {icon: epitechlogo}).addTo(map).bindPopup("Nantes");
L.marker([44.841225, -0.5800364], {icon: epitechlogo}).addTo(map).bindPopup("Bordeaux");
L.marker([43.6044622, 1.4442469], {icon: epitechlogo}).addTo(map).bindPopup("Toulouse");

document.getElementsByClassName( 'leaflet-control-attribution' )[0].style.display = 'none';
