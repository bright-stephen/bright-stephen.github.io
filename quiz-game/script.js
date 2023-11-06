function storeData() {
    const fullName = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const gender = document.getElementById('gender').value;
    

    const userData = {
        fullName: fullName,
        email: email,
        gender: gender
    };

    // Store the data in localStorage
    localStorage.setItem('userData', JSON.stringify(userData));
}



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

localStorage.clear();