/*
** EPITECH PROJECT, 2021
** D-POO-100-Lyon_sasha-bieller
** File description:
** ex_02.js
*/

let rotadd90 = document.getElementById('rotate-add-90');
let rotadd45 = document.getElementById('rotate-add-45');
let rotsub45 = document.getElementById('rotate-sub-45');
let rotsub90 = document.getElementById('rotate-sub-90');
let rotReset = document.getElementById('rotate-reset');
let Circle = document.getElementById('circle');

function turn(step) {
    Circle.style.transform = `rotate(${step})`;
}

rotadd90.addEventListener("click", function(){turn("90deg")});
rotadd45.addEventListener("click", function(){turn("45deg")});
rotsub45.addEventListener("click", function(){turn("45deg")});
rotsub90.addEventListener("click", function(){turn("90deg")});
rotReset.addEventListener("click", function(){turn("reset")});