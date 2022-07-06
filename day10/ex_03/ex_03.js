/*
** EPITECH PROJECT, 2021
** D-POO-100-Lyon_sasha-bieller
** File description:
** ex_03.js 
*/

function promise(promise) {
    let promisetext = new Promise((resolve) => {
        resolve("I promise you to " + promise);
    });
    return promisetext;
}

function checkStatus(machine) {
    machine.then((value) => {
        console.log(value);
    })
    .catch((value) => {
        console.log(value);
    })
    .finally(() => console.log("Checking status over"))
}

checkStatus(promise("fly to the moon"));



