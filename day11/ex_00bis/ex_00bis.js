/*
** EPITECH PROJECT, 2021
** D-POO-100-Lyon_sasha-bieller
** File description:
** ex_00bis.js
*/

const fetch = require("isomorphic-fetch")

function check_route(url){
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.status)
                if (data.status === "success") {
                    console.log('all is good')
                } else {
                    console.log('shit happens')
                }
        }
        )
}

check_route('https://dog.ceo/api/breeds/list/all')