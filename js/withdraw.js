document.getElementById("withdraw-btn").addEventListener("click", function () {
  const oldWithdrawAmount = getTextElement("oldWithdrawAmount");
  const newWithdrawAmount = getInputField("withdraw-amount");
  const currentWithdrawAmount = newWithdrawAmount + oldWithdrawAmount;
  setTextElement("oldWithdrawAmount", currentWithdrawAmount);
  const oldTotal = getTextElement("oldTotal");
  const newTotal = oldTotal - newWithdrawAmount;
  setTextElement("oldTotal", newTotal);
});
