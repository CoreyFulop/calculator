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

let divByZero = false;

function divide(a, b) {
    if (+b == 0) {
        divByZero = true;
        return divByZero;
    } else {
        return a / b;
    }
}

let numberOne = null;
let operator = "add";
let numberTwo = null;

function operate(a, b, operation) {
    return window[operation](+a, +b);
}

let displayValue = "0";

let clearDisplay = false;

let display = document.querySelector(".display");

const numberButtons = Array.from(document.querySelectorAll(".number"));
numberButtons.forEach(button => button.addEventListener("click", updateDisplayValue));

function updateDisplayValue(e) {
    if (clearDisplay == true) {
        displayValue = "0";
        clearDisplay = false;
    }
    let targetValue = e.target.id;
    if (displayValue.includes(".") && targetValue == ".") {
        targetValue = "";
    }
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
        if (divByZero) {
            allClear();
            display.textContent = "DIV BY ZERO!";
        }
    }    
}

const equals = document.querySelector("#equals");
equals.addEventListener("click", calculateNewValue);

const plusMinus = document.querySelector("#plus-minus");
plusMinus.addEventListener("click", changeSign);

function changeSign() {
    if (displayValue > 0) {
        displayValue = `${-displayValue}`;
        display.textContent = displayValue;
    } else if (displayValue < 0) {
        displayValue = displayValue.slice(1);
        display.textContent = displayValue;
    }
}

const del = document.querySelector("#DEL");
del.addEventListener("click", deleteCharacter);

function deleteCharacter() {
    if (displayValue.length > 2) {
        displayValue = displayValue.slice(0,-1);
        display.textContent = displayValue;
    } else if (displayValue.length == 2 && displayValue[0] == "-") {
        displayValue = "0";
        display.textContent = displayValue;
    } else if (displayValue.length == 2) {
        displayValue = displayValue.slice(0,-1);
        display.textContent = displayValue; 
    } else {
        displayValue = "0";
        display.textContent = displayValue;
    }
}

const ac = document.querySelector("#AC");
ac.addEventListener("click", allClear);

function allClear() {
    numberOne = null;
    operator = "add";
    numberTwo = null;
    displayValue = "0";
    clearDisplay = false;
    continueCalc = true;
    display.textContent = displayValue;
    divByZero = false;
}