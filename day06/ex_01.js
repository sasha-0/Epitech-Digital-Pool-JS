/*
** EPITECH PROJECT, 2021
** D-POO-100-Lyon_sasha-bieller
** File description:
** ex_01.js
*/

window.onload = function phrase() {
    let text = '{"Phrase":[' +
        '{"firstName":"James","lastName":"Bond" },' +
        '{"age":57,"code":"007" }]}';

    const obj = JSON.parse(text);
    document.getElementById("container")[0]
    document.getElementsByTagName('p')[0].innerHTML ="My name is Bond, " +
        obj.Phrase[0].firstName + " " + obj.Phrase[0].lastName + " ! I'm the agent " + obj.Phrase[1].code + " " + " and I'm " + obj.Phrase[1].age + " " + " years old.";
}