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
let first_number;
let second_number;
let operator;

// SELECTIONS
const container = document.querySelector(".container");
const output = document.querySelector(".output");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");

// FUNCTIONALITY
numbers.forEach((number) => {
	number.addEventListener("click", (e) => {
		output.innerText = e.target.innerHTML;
	});
});

operators.forEach((operator) => {
	operator.addEventListener("click", (e) => {
		output.innerText = e.target.innerHTML;
	});
});
