/*
** EPITECH PROJECT, 2021
** D-POO-100-Lyon_sasha-bieller
** File description:
** ex_00.js
*/

const fetch = require("isomorphic-fetch")

fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12528`)
    .then(res => res.json())
    .then(posts => console.log(posts))