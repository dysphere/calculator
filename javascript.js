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
    if (b == 0) {
        return "OOPS";
    }
    else {
        return a / b;
    }
}

function operate(a, operator, b) {
    if (operator == "add") {
        return add(a, b);
    }
    else if (operator == "subtract") {
        return subtract(a, b);
    }
    else if (operator == "multiply") {
        return multiply(a, b);
    }
    else {
        return divide(a, b);
    }
}

const display = document.querySelector(".display");
display.textContent = "0";