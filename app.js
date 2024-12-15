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
		return "ERROR";
	}
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
	}
}

// VARIABLES
let current_number;
let last_number;
let operator;
let result = 0;
let calc_start = false;
let pressed_operator;
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
			if (calc_start) {
				display.textContent = keyContent;
				console.log;
				pressed_operator.classList.remove("is-pressed");
				calc_start = false;
			} else {
				if (displayedNum === "0") {
					display.textContent = keyContent;
				} else {
					display.textContent = displayedNum + keyContent;
				}
			}
		}

		if (
			action === "add" ||
			action === "subtract" ||
			action === "multiply" ||
			action === "divide"
		) {
			current_number = parseFloat(display.textContent);
			console.log("current_number: " + current_number);
			calc_start = true;
			pressed_operator = key;
			pressed_operator.classList.add("is-pressed");
			switch (action) {
				case "add":
					operator = "+";
					result = operate(current_number, result, operator);
					display.textContent = result;
					break;
				case "subtract":
					operator = "-";
					break;
				case "multiply":
					operator = "*";
					if (result === 0) {
						result = 1;
					}
					result = operate(current_number, result, operator);
					display.textContent = result;
					break;
				case "divide":
					operator = "/";
					break;
			}
		}

		if (action === "equal") {
			last_number = parseFloat(display.textContent);
			console.log("last_number " + last_number);
			display.textContent = operate(result, last_number, operator);
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
