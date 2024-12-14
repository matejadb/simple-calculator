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
	if (b === 0) {
		display.textContent = "ERROR";
	}
	let result = a / b;
	display.textContent = result;
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
let number_count = 0;
let first_number;
let second_number;
let result = 0;
let operator;
// SELECTIONS
const calculator = document.querySelector(".container");
const keys = calculator.querySelector(".buttons");
const display = document.querySelector(".display");

// FUNCTIONALITY
keys.addEventListener("click", (e) => {
	if (e.target.matches("button")) {
		const key = e.target;
		const action = key.dataset.action;
		const keyContent = key.textContent;
		const displayedNum = display.textContent;

		if (!action) {
			if (displayedNum === "0") {
				display.textContent = keyContent;
			} else {
				display.textContent = displayedNum + keyContent;
			}
		}
		if (
			action === "add" ||
			action === "subtract" ||
			action === "multiply" ||
			action === "divide"
		) {
			first_number = parseFloat(display.textContent);
			switch (action) {
				case "add":
					operator = "+";
					break;
				case "subtract":
					operator = "-";
					break;
				case "multiply":
					operator = "*";
					break;
				case "divide":
					operator = "/";
					break;
			}
			display.textContent = "";
		}

		if (action === "equal") {
			second_number = parseFloat(display.textContent);
			switch (operator) {
				case "+":
					display.textContent = operate(first_number, second_number, operator);
					break;
				case "-":
					console.log(operate(first_number, second_number, operator));
					break;
				case "*":
					console.log(operate(first_number, second_number, operator));
					break;
				case "/":
					operate(first_number, second_number, operator);
					break;
			}
			display.textContent = result;
		}
		if (action === "decimal") {
			display.textContent = displayedNum + keyContent;
		}
		if (action === "clear") {
			result = 0;
			display.textContent = 0;
			currentNumber = 0;
		}
	}
});
