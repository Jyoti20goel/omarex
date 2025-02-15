const inputField = document.getElementById("arrayInput");
const printButton = document.getElementById("printButton");
const resultDisplay = document.getElementById("result");

printButton.addEventListener("click", () => {
 
  const input = inputField.value;

  if (!input) {
    resultDisplay.textContent = "Result: Please enter some values.";
    return;
  }

  const array = input.split(",").map(item => item.trim());

  const uniqueValues = [...new Set(array)];

  resultDisplay.textContent = `Result: ${uniqueValues.join(", ")}`;
});
