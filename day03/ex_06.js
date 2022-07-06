/*
** EPITECH PROJECT, 2021
** D-POO-100-Lyon_sasha-bieller
** File description:
** ex_06.js
*/
fruits = ["Blackberries", "Apple", "Banana", "Mango", "Peaches", "Kiwi"];

function getIndexFromName(param) {
    if (fruits.indexOf(param) != null && fruits.indexOf(param) > -1) {
        return fruits.indexOf(param);
    } else {
      return null;
    }
}