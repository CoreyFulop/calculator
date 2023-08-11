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

let numberOne = null;
let operator = null;
let numberTwo = null;

function operate(a, b, operation) {
    return window[operation](+a, +b);
}

let displayValue = 0;

let clearDisplay = false;

let display = document.querySelector(".display");

const numberButtons = Array.from(document.querySelectorAll(".number"));
numberButtons.forEach(button => button.addEventListener("click", updateDisplayValue));

function updateDisplayValue(e) {
    if (clearDisplay == true) {
        displayValue = "";
        clearDisplay = false;
    }
    let targetValue = e.target.id;
    displayValue += targetValue;
    if (displayValue[0] == "0" && displayValue[1] != ".") {
        displayValue = displayValue.slice(1);
    }
    display.textContent = displayValue;
}

const primaryOperations = Array.from(document.querySelectorAll(".primary"));
primaryOperations.forEach(operation => operation.addEventListener("click", primaryLogic));

function primaryLogic(e) {
    if (numberOne == null) {
        numberOne = displayValue;
        operator = e.target.id;
        clearDisplay = true;
    } else {
        numberTwo = displayValue;
        displayValue = operate(numberOne, numberTwo, operator);
        display.textContent = displayValue;
        numberOne = displayValue;
        operator = e.target.id;
        clearDisplay = true;
    }
}