/*
** EPITECH PROJECT, 2021
** D-POO-100-Lyon_sasha-bieller
** File description:
** ex_08.js
*/

if (breadCount >= 2 && hamCount >= 1 && tunaCount >= 1) {
    displayThisText("I can make a royal sandwich!") }
        else if (breadCount >= 2 && hamCount >= 1 && tunaCount < 1) {
        displayThisText("I can make a ham sandwich!") }
            else if (breadCount >= 2 && hamCount < 1 && tunaCount >= 1) {
            displayThisText(" I can make a tuna sandwich!") }
                else {
                displayThisText("I'd rather be fasting tonight.")
}