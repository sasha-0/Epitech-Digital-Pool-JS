/*
** EPITECH PROJECT, 2021
** D-POO-100-Lyon_sasha-bieller
** File description:
** ex_10.js
*/

var numberOfHam;
var numberofTuna;
var numberOfVegatarian;

while (breadCount > 1) {
    if (hamCount >= 1) {
        numberOfHam++ }
        else if (tunaCount >= 1 && saladCount >= 2) {
        numberofTuna++ }
        else if (saladCount >= 1 && tomatoCount >= 2) {
        numberOfVegatarian++ }
        break; 
}

displayThisText("number of ham sandwich(es) : " + numberOfHam)
displayThisText("number of tuna sandwich(es) : " + numberofTuna)
displayThisText("number of Vegetarian sandwich(es) : " + numberOfVegatarian)