// displayValue
let displayValue = "";
function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue
}

// clearDisplay
function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value ="";

}

// calculateResult
function calculateResult() {
    const result = eval(displayValue);
    document.getElementById("display").value = result;
    displayValue = result.toString();
}