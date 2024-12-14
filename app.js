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

// SELECTIONS
const container = document.querySelector(".container");
const output = document.querySelector(".output");
const numbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");

// FUNCTIONALITY
numbers.forEach((number) => {
	number.addEventListener("click", (e) => {
		output.innerText = e.target.innerHTML;
		if (operator === undefined) {
			first_number = e.target.innerHTML;
			output.innerText = e.target.innerHTML;
			console.log(first_number);
		} else if (operator !== undefined) {
			second_number = e.target.innerHTML;
			output.innerText = e.target.innerHTML;
			console.log(second_number);
		}
	});
});

operators.forEach((operator) => {
	operator.addEventListener("click", (e) => {
		output.innerText = e.target.innerHTML;
		if (e.target.innerHTML === "CLR") {
			output.innerText = "";
		}
		if (first_number !== undefined) {
			operator = e.target.innerHTML;
			output.innerText = e.target.innerHTML;
			console.log(operator);
		}

		if (operator === "=") {
			console.log(first_number, second_number, operator);
		}
	});
});
