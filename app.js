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
	return Math.round((a / b) * 100) / 100;
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
let current_number = 0;
let last_number = 0;
let operator = "";
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
				current_number = parseFloat(display.textContent);
				pressed_operator.classList.remove("is-pressed");
				calc_start = false;
			} else {
				if (displayedNum === "0") {
					display.textContent = keyContent;
				} else {
					display.textContent = displayedNum + keyContent;
				}

				current_number = parseFloat(display.textContent);
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

			if (operator) {
				result = operate(last_number, current_number, operator);
				display.textContent = result;
			} else {
				result = current_number;
			}
			last_number = result;
			console.log("last number: " + last_number);
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
		}
		if (action === "minus") {
			if (display.textContent !== "0") {
				if (!display.textContent.includes("-")) {
					display.textContent = "-" + displayedNum;
					console.log("minus");
				} else {
					let temp = display.textContent.split("-");
					display.textContent = temp[1];
				}
			}
			current_number = parseFloat(display.textContent);
		}
		if (action === "equal") {
			if (!display.textContent) {
				current_number = 0;
				console.log(current_number);
				console.log(last_number);
			}
			result = operate(last_number, current_number, operator);
			display.textContent = result;
		}
		if (action === "erase") {
			if (display.textContent !== "0" && display.textContent.length > 1) {
				display.textContent = display.textContent.slice(0, -1);
			} else {
				display.textContent = "0";
			}
			current_number = parseFloat(display.textContent);
		}
		if (action === "decimal") {
			if (!display.textContent.includes(".")) {
				display.textContent = displayedNum + keyContent;
			}
		}
		if (action === "clear") {
			display.textContent = "0";
			operator = "";
			currentNumber = 0;
			last_number = 0;
			result = 0;
		}
	}
});

document.addEventListener("keydown", (e) => {
	const displayedNum = display.textContent;
	if (
		e.key === "1" ||
		e.key === "2" ||
		e.key === "3" ||
		e.key === "4" ||
		e.key === "5" ||
		e.key === "6" ||
		e.key === "7" ||
		e.key === "8" ||
		e.key === "9" ||
		e.key == "0"
	) {
		if (calc_start) {
			display.textContent = e.key;
			calc_start = false;
		} else {
			if (displayedNum === "0") {
				display.textContent = e.key;
			} else {
				display.textContent = displayedNum + e.key;
			}
		}
		current_number = parseFloat(display.textContent);
	}

	if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
		calc_start = true;
		if (operator) {
			result = operate(last_number, current_number, operator);
			display.textContent = result;
		} else {
			result = current_number;
		}
		last_number = result;
		operator = e.key;
	}

	if (e.key === ".") {
		if (!display.textContent.includes(".")) {
			display.textContent = displayedNum + ".";
		}
	}

	if (e.key === "=" || e.key === "Enter") {
		if (!display.textContent) {
			console.log(current_number);
		}
		result = operate(last_number, current_number, operator);
		display.textContent = result;
	}

	if (e.key == "Backspace") {
		if (displayedNum !== "0" && display.textContent.length > 1) {
			display.textContent = display.textContent.slice(0, -1);
		} else {
			display.textContent = "0";
		}

		current_number = parseFloat(display.textContent);
	}

	if (e.key.toLowerCase() === "c") {
		result = 0;
		current_number = 0;
		last_number = 0;
		operator = "";
		calc_start = false;
		display.textContent = "0";
	}

	if (e.key.toLowerCase() === "n") {
		if (!display.textContent.includes("-")) {
			display.textContent = "-" + displayedNum;
		} else {
			let temp = display.textContent.split("-");
			display.textContent = temp[1];
		}
		current_number = parseFloat(display.textContent);
	}
});
/*
TODO:
- KEYBOARD SUPPORT
*/
