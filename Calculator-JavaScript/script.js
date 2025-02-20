let expression = '';

// Function to update the display
function updateDisplay() {
    const display = document.getElementById('display');
    display.value = expression;
}

// Function to append characters to the display
function append(value) {
    if (value === 'π') {
        expression += Math.PI;
    } else if (value === 'e') {
        expression += Math.E;
    } else {
        expression += value;
    }
    updateDisplay();
}

// Function to calculate the result
function calculateResult() {
    try {
        // Replace advanced functions with Math equivalents
        expression = expression.replace(/sin\(/g, 'Math.sin(');
        expression = expression.replace(/cos\(/g, 'Math.cos(');
        expression = expression.replace(/tan\(/g, 'Math.tan(');
        expression = expression.replace(/sqrt\(/g, 'Math.sqrt(');
        expression = expression.replace(/log\(/g, 'Math.log10(');
        expression = expression.replace(/ln\(/g, 'Math.log(');
        expression = expression.replace(/\^/g, '**');

        // Evaluate the expression
        expression = eval(expression).toString();
    } catch (error) {
        expression = 'Error';
    }
    updateDisplay();
}

// Function to clear the display
function clearDisplay() {
    expression = '';
    updateDisplay();
}

// Function to delete the last character
function deleteLast() {
    expression = expression.slice(0, -1);
    updateDisplay();
}