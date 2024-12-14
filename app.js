// FUNCTIONS
function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function operate(first_number, second_number, operator) {
	switch (operator) {
		case "+":
			return add(first_number, second_number);
		case "-":
			return subtract(first_number, second_number);
		case "*":
			return multiply(first_number, second_number);
		case "/":
			return divide(first_number, second_number);
		default:
			console.log("Invalid operator!");
	}
}

// VARIABLES
let first_number = undefined;
let second_number = undefined;
let operator = undefined;
let result = 0;
let end = -1;
// SELECTIONS
const container = document.querySelector(".container");
const output = document.querySelector(".output");
const number = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");

// FUNCTIONALITY
number.forEach((number) => {
	number.addEventListener("click", (e) => {});
});

/*
if (first_number === undefined) {
			first_number = e.target.innerText;
			output.innerText = e.target.innerText;
			first_number = parseInt(first_number);
			console.log(typeof first_number);
		} else if (operator === undefined && first_number != undefined) {
			operator = e.target.innerText;
			console.log(first_number + " " + operator);
		} else if (
			second_number === undefined &&
			operator !== undefined &&
			first_number !== undefined
		) {
			second_number = e.target.innerText;
			output.innerText = e.target.innerText;
			second_number = parseInt(second_number);
			console.log(first_number + " " + operator + " " + second_number);
		}
*/
