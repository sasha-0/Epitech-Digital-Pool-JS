/*
** EPITECH PROJECT, 2021
** D-POO-100-Lyon_sasha-bieller
** File description:
** ex_03.js
*/

window.onload = function fixPrice() {
const paragraphs = document.createElement("p");
const node = document.createTextNode("Now featuring a headphone jack!");
paragraphs.appendChild(node);
const element = document.getElementById("description");
element.appendChild(paragraphs);
}