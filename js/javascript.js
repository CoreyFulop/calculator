"use strict";

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

let numberOne = 0;
let operator = null;
let numberTwo = 0;

function operate(a, b, operation) {
    return operation(a, b);
}

let displayValue = 0;

let display = document.querySelector(".display");

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(button => button.addEventListener("click", updateDisplayValue));

function updateDisplayValue(e) {
    let targetValue = e.target.id;
    displayValue += targetValue;
    if (displayValue[0] == "0") {
        displayValue = displayValue.slice(1);
    }
    display.textContent = displayValue;
}
