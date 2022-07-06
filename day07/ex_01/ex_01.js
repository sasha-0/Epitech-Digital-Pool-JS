/*
** EPITECH PROJECT, 2021
** D-POO-100-Lyon_sasha-bieller
** File description:
** ex_01.js
*/

var square = document.getElementById("square");

square.addEventListener("mouseover", reduceOpacity);
square.addEventListener("mouseout", resetOpacity);


function reduceOpacity() {
    square.style.opacity = "0.5";
}

function resetOpacity() {
    square.style.opacity = "1";
}
