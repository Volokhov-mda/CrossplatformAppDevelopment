const MAX_NUM = Math.pow(10, MAX_NUM_AVAILABLE);

// Hook variables.
let savedNumEntered = "";
let numOperand = "0";
let currOperation = "";
let isNumEntering = true;

const numbers = [num0, num1, num2, num3, num4, num5, num6, num7, num8, num9];

function handleNumberPress(num) {
    if (!isNumEntering) {
        numOperand = "0";
        isNumEntering = true;
    }

    const isNegative = numOperand.includes("-");
    const isDecimal = numOperand.includes(".");

    switch (num) {
        case ".":
            if (numOperand.length === 0) {
                numOperand = "0";
            }

            if (!isDecimal) {
                numOperand += ".";
            }

            break;
    
        default:
            if (numOperand === "0") {
                if (num === 0) {
                    break;
                }

                numOperand = "";
            }

            if (numOperand === "Infinity" || numOperand === "NaN") {
                numOperand = "";
            }

            numOperand += num;

            if (numOperand.length - isNegative - isDecimal > MAX_NUM_AVAILABLE) {
                numOperand = numOperand.slice(1);
            }

            if (num === 0 && (new RegExp("^[0]*$")).test(numOperand)) {
                numOperand = "0";
                break;
            }


            if (numOperand.indexOf(".") === 0) {
                numOperand = numOperand.replace(".", "");
            }
        
            break;
    }

    while (numOperand[0] == 0 && numOperand[1] != "." && numOperand.length > 1) {
        numOperand = numOperand.slice(1);
    }

    numsEntered.innerHTML = numOperand;
}

function disableActionButtons() {
    divide.classList.remove(hoverClass);
    mult.classList.remove(hoverClass);
    minus.classList.remove(hoverClass);
    plus.classList.remove(hoverClass);
}

function enableActionButton(button, operation) {
    disableActionButtons();
    button.classList.add(hoverClass);

    savedNumEntered = numOperand;
    numOperand = "0";
    currOperation = operation;
}

function equalsHandler() {
    isNumEntering = false;
    console.log("savedNumEntered1", savedNumEntered);
    console.log("numEntered1", numOperand);

    switch (currOperation) {
        case DIVIDE_OP:
            savedNumEntered = parseFloat(savedNumEntered) / parseFloat(numOperand);
            break;
    
        case MULTIPLY_OP:
            savedNumEntered = parseFloat(savedNumEntered) * parseFloat(numOperand);
            break;

        case MINUS_OP:
            savedNumEntered = parseFloat(savedNumEntered) - parseFloat(numOperand);
            break;

        case PLUS_OP:
            savedNumEntered = parseFloat(savedNumEntered) + parseFloat(numOperand);
            break;
        default:
            break;
    }

    savedNumEntered %= MAX_NUM;
    
    lenOfIntegerPart = parseInt(savedNumEntered).toString().length;
    savedNumEntered = (Math.round(savedNumEntered * Math.pow(10, MAX_NUM_AVAILABLE - lenOfIntegerPart)) / Math.pow(10, MAX_NUM_AVAILABLE - lenOfIntegerPart)).toString();

    savedNumEntered = savedNumEntered.toString();
    
    numsEntered.innerText = savedNumEntered;

    disableActionButtons();
}

// Listeners.
numbers.forEach((button, i) => {
    button.addEventListener("click", () => {
        handleNumberPress(i);
    });
});


dot.addEventListener("click", () => {
    handleNumberPress(".");
});

divide.addEventListener("click", () => {
    enableActionButton(divide, DIVIDE_OP);
});

mult.addEventListener("click", () => {
    enableActionButton(mult, MULTIPLY_OP);
});

minus.addEventListener("click", () => {
    enableActionButton(minus, MINUS_OP);
});

plus.addEventListener("click", () => {
    enableActionButton(plus, PLUS_OP);
});

equals.addEventListener("click", equalsHandler);

document.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
        equalsHandler();
    }
});

clear.addEventListener("click", () => {
    numsEntered.innerHTML = numOperand = "0";
    savedNumEntered = "";
    currOperation = "";

    disableActionButtons();
});
