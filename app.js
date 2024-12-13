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

const container = document.querySelector(".calculator-container");
const numberButtons = document.querySelector(".number-seven");
const result = document.querySelector(".result");

numberButtons.addEventListener("click", function () {
	result.innerText = "7";
});
