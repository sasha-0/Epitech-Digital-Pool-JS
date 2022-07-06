/*
** EPITECH PROJECT, 2021
** D-POO-100-Lyon_sasha-bieller
** File description:
** ex_05.js
*/

// Write your function here ...
var fruits = ["strawberry","strawberry","strawberry", "apple","apple", "lime", "lime", "peach", "pear", "pear"];

function getBasketContent() {
		return fruits;
}
console.log(fruits.length + " fruit(s) selected");

// DO NOT TOUCH, this will do the call your function for you and display the fruits if you've done it well
if (typeof getBasketContent === "function") {
	const fruits = getBasketContent()
	showMyBasket(fruits)
}