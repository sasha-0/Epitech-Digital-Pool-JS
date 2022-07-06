/*
** EPITECH PROJECT, 2021
** D-POO-100-Lyon_sasha-bieller
** File description:
** ex_00.js
*/

let funcTwo = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('I promise you to fly to the moon')
        }, 100);
    })
}

let PromiseMe = async () => {
    let value = await funcTwo()
    return value
}

PromiseMe("fly to the moon").then(value => console.log(value))