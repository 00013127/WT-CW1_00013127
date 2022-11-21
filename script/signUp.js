const signBtn = document.getElementById("sign-button");

// when submit button got clicked functions get values from inputs,
// checks if they are not empty and if not alerts user data.

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