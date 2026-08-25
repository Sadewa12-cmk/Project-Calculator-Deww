const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    // Mengganti semua simbol persen agar bisa dihitung
    let expression = display.value.replace(/%/g, "/100");
    display.value = eval(expression);
  } catch (error) {
    display.value = "Error";
  }
}

function calculateSquare() {
  try {
    display.value = Math.pow(eval(display.value), 2);
  } catch (error) {
    display.value = "Error";
  }
}

function calculateSqrt() {
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch (error) {
    display.value = "Error";
  }
}
