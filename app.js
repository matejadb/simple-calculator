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
				if (displayedNum !== "") {
					display.textContent = keyContent;
				} else {
					display.textContent = displayedNum + keyContent;
				}
				pressed_operator.classList.remove("is-pressed");
			} else {
				if (displayedNum === "0") {
					display.textContent = keyContent;
				} else {
					display.textContent = displayedNum + keyContent;
				}
				current_number = parseFloat(display.textContent);
				console.log("Current number: " + current_number);
			}
		}

		if (
			action === "add" ||
			action === "subtract" ||
			action === "multiply" ||
			action === "divide"
		) {
			calc_start = true;
			pressed_operator = key;
			pressed_operator.classList.add("is-pressed");
			switch (action) {
				case "add":
					operator = "+";
					break;
				case "subtract":
					operator = "-";
					break;
				case "multiply":
					operator = "*";
					if (result === 0) {
						result = 1;
					}
					break;
				case "divide":
					operator = "/";
					break;
			}
		}

		if (action === "equal") {
			last_number = parseFloat(display.textContent);
			console.log("result " + result);
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
