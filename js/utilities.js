function getInputField(inputID) {
  const inputField = document.getElementById(inputID);
  const inputFieldString = inputField.value;
  const inputFieldValue = parseFloat(inputFieldString);
  inputField.value = "";
  return inputFieldValue;
}

function getTextElement(textID) {
  const textElement = document.getElementById(textID);
  const textElementString = textElement.innerText;
  const textElementValue = parseFloat(textElementString);
  return textElementValue;
}

function setTextElement(textID, newValue) {
  const setAmount = document.getElementById(textID);
  setAmount.innerText = newValue;
}
