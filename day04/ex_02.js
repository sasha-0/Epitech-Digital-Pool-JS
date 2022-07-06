/*
** EPITECH PROJECT, 2021
** D-POO-100-Lyon_sasha-bieller
** File description:
** ex_02.js
*/


function findHousing(housingToFind, housingList){
    let index = 0;
    let result = []
    while (index < housingList.length){
        if (housingToFind.toLowerCase() === housingList[index].toLowerCase()){
            result = [index+1,housingList[i]]
        }
        index++
    }
    if(result.length == 0){
        result =  null;
    }
    return result
}