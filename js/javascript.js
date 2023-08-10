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