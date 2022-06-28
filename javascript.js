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
    else if (operator == "divide") {
        return divide(a, b);
    }
}

const display = document.querySelector(".display");
display.textContent = "0";


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener("click", () => {
    if (button.className == "numberButton") {
        if (display.textContent == "0") {
            display.textContent = `${button.value}`;
        }
        else {
            if (display.textContent.includes("×") || display.textContent.includes("+") ||
            display.textContent.includes("÷") || display.textContent.includes("-")) {
                display.textContent += `${button.value}`;
            }
            else {
                display.textContent += `${button.value}`;
            }
        }
    }
    else if (button.className == "functionButton") {
        if (display.textContent.includes("×") || display.textContent.includes("+") ||
        display.textContent.includes("÷") || display.textContent.includes("-")) {
            let fullEquation = display.textContent.split(" ");
            let num1 = parseFloat(fullEquation[0]);
            let num2 = parseFloat(fullEquation[2]);
            let op = "";
            if (fullEquation[1] == "×") {
                op = "multiply";
            }
            else if (fullEquation[1] == "+") {
                op = "add";
            }
            else if (fullEquation[1] == "÷") {
                op = "divide";
            }
            else if (fullEquation[1] == "-") {
                op = "subtract";
            }
            display.textContent = operate(num1, op, num2).toFixed(2);
            display.textContent += ` ${button.textContent} `;
        }
        else {
            display.textContent += ` ${button.textContent} `;
        }
    }
    else if (button.id == "equal") {
        let fullEquation = display.textContent.split(" ");
        let num1 = parseFloat(fullEquation[0]);
        let num2 = parseFloat(fullEquation[2]);
        let op = "";
        if (fullEquation[1] == "×") {
            op = "multiply";
        }
        else if (fullEquation[1] == "+") {
            op = "add";
        }
        else if (fullEquation[1] == "÷") {
            op = "divide";
        }
        else if (fullEquation[1] == "-") {
            op = "subtract";
        }
        display.textContent = operate(num1, op, num2).toFixed(2);
    }
    else if (button.id == "allClear") {
        display.textContent = "0";
    }
    else if (button.id == "clear") {
        let fullEquation = display.textContent.split("");
        fullEquation.pop();
        let clearFunction = fullEquation.join("");
        display.textContent = clearFunction;
    }
    else if (button.id == "decimal") {
        let fullEquation = display.textContent.split(" ");
        if (fullEquation[0].includes(".") && fullEquation.length == 1) {
            disabled = true;
        }
        else if (fullEquation.length == 2) {
            disabled = false;
        }
        else if (fullEquation.length == 3) {
            if (fullEquation[2].includes(".")) {
                disabled = true;
            }
            else {
                disabled = false;
                display.textContent += ".";
            }
        }
        else {
            display.textContent += ".";
        }
    }

});
  });