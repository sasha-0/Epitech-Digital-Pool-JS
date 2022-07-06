/*
** EPITECH PROJECT, 2021
** D-POO-100-Lyon_sasha-bieller
** File description:
** ex_02.js
*/

function checkFuel(fuel) {
    return new Promise(
        (resolve, reject) => {
            if (fuel >= 9) {
                resolve('Ready to launch')
                }
                else{
                    reject('Please refill fuel')
            }
        }
    )
}
// checkFuel(11).then(value=>console.log(value)).catch(value => console.log(value))
// checkFuel(8).then(value=>console.log(value)).catch(value => console.log(value))