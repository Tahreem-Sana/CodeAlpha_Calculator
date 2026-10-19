const display = document.getElementById('display');

const numberbuttons = document.querySelectorAll("[data-number]");

const clearbutton = document.querySelector("[data-action='clear']");

const deletebutton = document.querySelector("[data-action='delete']");

const alphabetsbutton = document.querySelector("[data-action='Alpabets']");

const decimalbutton = document.querySelector("[data-action='decimal']");

const opertorbuttons = document.querySelectorAll("[data-operator]");

const calculatebutton = document.querySelector("[data-action='calculate']")

const percentbutton = document.querySelector("[data-action='percent']")

let firstnumber = null;
let operatorselected = null;
let WFSN = false;


numberbuttons.forEach(function (button) {
    button.addEventListener("click", function () {

        const number = button.dataset.number;

        if (WFSN) {
            display.value = number;
            WFSN = false;
        }

        else if (display.value === "0") {
            display.value = number;
        }

        else {
            display.value += number;
        }
    });
});


clearbutton.addEventListener("click", function () {
    display.value = "0";
    firstnumber = null;
    operatorselected = null;
    WFSN = false;
});


deletebutton.addEventListener("click", function () {
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = "0";
    }
});

alphabetsbutton.addEventListener("click", function () {
    display.value = "TS";
});

decimalbutton.addEventListener("click", function () {
    if (!display.value.includes(".")) {
        display.value += ".";
    }
});

opertorbuttons.forEach(function (button) {
    button.addEventListener("click", function () {
        firstnumber = Number(display.value);
        operatorselected = button.dataset.operator;
        WFSN = true;
    });
});

percentbutton.addEventListener("click",function(){
    const currentNumber = Number(display.value);
    display.value = String(currentNumber / 100);
});

calculatebutton.addEventListener("click", function () {
    if (firstnumber === null || operatorselected === null) {
        return;
    }

    const secondnumber = Number(display.value);
    let result;

    if (operatorselected === "+") {
        result = firstnumber + secondnumber;
    } else if (operatorselected === "-") {
        result = firstnumber - secondnumber;
    } else if (operatorselected === "*") {
        result = firstnumber * secondnumber;
    } else if (operatorselected === "/") {
        if (secondnumber === 0) {
            display.value = "Error";
            firstnumber = null;
            operatorselected = null;
            WFSN = true;
            return;
        }

        result = firstnumber / secondnumber;
    } else {
        return;
    }

    display.value = String(Number(result.toFixed(8)));

    firstnumber = null;
    operatorselected = null;
    WFSN = true;
});
