const signBtn = document.getElementById("sign-button");

signBtn.addEventListener("click", () => {
  const inputs = document.querySelectorAll(".sign-input");
  let inputValues = [];
  for (let i = 0; i < inputs.length; i++) {
    inputValues.push(inputs[i].value);
  }
  if (inputValues[0].length === 0 && inputValues[1].length === 0) {
    alert("Input Values First!");
  } else {
    alert("Username: " + inputValues[0] + "; " + "Password: " + inputValues[1]);
  }
});
