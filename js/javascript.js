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
let operator = "add";
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
        saveNewValue(e);
    } else {
        calculateNewValue(e);
        saveNewValue(e);
    }
}

function saveNewValue(e) {
    numberOne = displayValue;
    operator = e.target.id;
    clearDisplay = true;
    continueCalc = true;
}

let continueCalc = true;

function calculateNewValue(e) {
    if (e.target.id != "equals") {
        continueCalc = true;
    }
    if (continueCalc) {
        numberTwo = displayValue;
        displayValue = operate(numberOne, numberTwo, operator);
        display.textContent = displayValue;
        if (e.target.id == "equals") {
            continueCalc = false;
            numberOne = null;
            clearDisplay = true;
        }
    }    
}

const equals = document.querySelector("#equals");
equals.addEventListener("click", calculateNewValue);