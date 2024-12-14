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

function getFirstNumber() {
	number.forEach((number) => {
		number.addEventListener("click", (e) => {
			first_number = parseInt(e.target.innerText);
			output.innerText = first_number;
			console.log("First number: " + first_number);
		});
	});
}

function getSecondNumber() {
	number.forEach((number) => {
		number.addEventListener("click", (e) => {
			second_number = parseInt(e.target.innerText);
			output.innerText = second_number;
			console.log("Second number: " + second_number);
		});
	});
}

function getOperator() {
	operators.forEach((operator) => {
		operator.addEventListener("click", (e) => {
			operator = e.target.innerText;
			output.innerText = operator;
			console.log("Operator: " + operator);
			operatorClicked = true;
		});
	});
}

function calculator() {
	first_number = getFirstNumber();
	getOperator();
	if (operatorClicked) {
		getSecondNumber();
	}
}
// VARIABLES
let first_number = undefined;
let second_number = undefined;
let operator = undefined;
let operatorClicked = false;
let result = 0;
let end = -1;

// SELECTIONS
const container = document.querySelector(".container");
const output = document.querySelector(".output");
const number = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");

// FUNCTIONALITY
calculator();
//getOperator();
