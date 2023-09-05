let operation = { numA: "", operator: "", numB: "", cache: null };
let numToSet = "numA";
let operations = 0;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) return "OMEGALUL";
  return a / b;
};

const operate = (numA, operator, numB) => {
  if (operator === "+") return add(numA, numB);
  if (operator === "-") return subtract(numA, numB);
  if (operator === "x") return multiply(numA, numB);
  if (operator === "/") return divide(numA, numB);
  return "Invalid Operator";
};

const updateScreen = (str) => {
  str = str.toString().slice(0, 10);
  return (document.querySelector(".screen h3").textContent = str);
};

const clearCalculator = (shouldUpdateTheScreen = true) => {
  operation = { numA: "", operator: "", numB: "", cache: null };
  numToSet = "numA";
  operations = 0;
  if (!shouldUpdateTheScreen) return;
  return updateScreen("0");
};

const handleBtnClick = (ev) => {
  const operators = ["x", "+", "-", "/", "=", "AC"];
  const item = ev.target.textContent;
  if (operators.includes(item)) {
    if (item === "AC") return clearCalculator();
    if (item === "=") {
      let { numA, operator, numB, cache } = operation;
      //if a previous operation happened and no new number has been set
      //(when a new number is set before a new operator the calculator soft resets)
      if (cache != null && numA == "") {
        numA = cache;
      }
      const result = operate(+numA, operator, +numB);
      //clear without updating screen, setting cache after
      clearCalculator(false);
      operation.cache = result;
      operations++;
      return updateScreen(result);
    }
    if (operations === 0) {
      numToSet === "numA" ? (numToSet = "numB") : (numToSet = "numA");
    } else {
      numToSet = "numB";
    }
    return (operation.operator = item);
  }
  if (item === "." && operation[numToSet].includes(".")) return;
  if (item === "DEL") {
    operation[numToSet] = operation[numToSet].slice(0, -1);
  } else if (item === "+/-") {
    operation[numToSet] *= -1;
  } else {
    operation[numToSet] += item;
  }

  updateScreen(operation[numToSet]);
};

const buttons = document.querySelectorAll(".btn");
buttons.forEach((e) => e.addEventListener("click", handleBtnClick));
