// Your code here...



function calculator(action, a, b) {
	if(action == "sub") {
  	substraction(a,b) }
    if (action == "add") {
    	addition (a,b) }    
}



function addiditon (a, b) {
	return a + b;
}

function substraction(a, b) {
	return a - b;
}


// DO NOT TOUCH - This line will call calculator and display the result for you
if (typeof calculator === "function" && typeof a === "number" &&
		typeof b === "number" && typeof action === "string") {
	displayResult(calculator, a, b, action);
}