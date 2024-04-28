const display = document.querySelector("#screen");

function showInDisplay(input) {
    display.value += input;
}
function clearDisp() {
    display.value = "";
}
function calculate() {
    try {
        const result = eval(display.value);
        const resultString = result.toString();

        if (resultString.length > 14) {
            display.value = resultString.slice(0, 14);
        } else {
            display.value = resultString;
        }
    } catch (error) {
        display.value = "Invalid input (AC)";
    }
}