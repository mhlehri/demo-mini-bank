document.getElementById("deposit-btn").addEventListener("click", function () {
  const oldDepositAmount = getTextElement("oldDepositAmount");
  const newDepositAmount = getInputField("deposit-amount");
  const currentDepositAmount = newDepositAmount + oldDepositAmount;
  setTextElement("oldDepositAmount", currentDepositAmount);
  const oldTotal = getTextElement("oldTotal");
  const newTotal = oldTotal + newDepositAmount;
  setTextElement("oldTotal", newTotal);
});
