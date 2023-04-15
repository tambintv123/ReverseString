// 1. Receive a String (S) and a positive integer (N) as Inputs
// 2. Reverse N letters from S as Output
// 3. Return Output'

const reverseCharsByN = () => {
  let firstString = "";
  let secondString = "";
  let inputString = document.getElementById("inputString").value;
  let inputNumber = document.getElementById("inputNumber").value;
  let result = "";

  if (inputNumber < inputString.length + 1) {
    firstString = inputString
      .slice(0, inputNumber)
      .split("")
      .reverse()
      .join("");
    secondString = inputString.slice(inputNumber, inputString.length);
    result = firstString + secondString;
  } else {
    result = inputString.slice(0, inputNumber).split("").reverse().join("");
  }

  document.getElementById("result").innerHTML = `<h3>${result}</h3>`;
};
