/*
** EPITECH PROJECT, 2021
** D-POO-100-Lyon_sasha-bieller
** File description:
** ex_09.js
*/

function alpha(n) {
	return n % 1 == 0; }

if (input_var == "42") {
	displayThisText("The variable value is " + input_var + "\r Its type is " + typeof input_var + "It is the meaning of life.") }
        else if (typeof input_var == "number") {
  	        if(alpha(input_var)) {
            displayThisText("The variable value is " + input_var + "\r Its type is Integer") }
                else {
    			displayThisText("The variable value is " + input_var + "\r Its type is Float") }
        }
        else {
  		displayThisText("The variable value is " + input_var + "\r Its type is " + typeof input_var) 
}