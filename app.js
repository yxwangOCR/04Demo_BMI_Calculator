const BMIData = [
  { name: "Skinny", color: "midnightblue", range: [0, 18.5] },
  { name: "Good health", color: "green", range: [18.5, 25] },
  { name: "Overweight", color: "lightcoral", range: [25, 30] },
  { name: "Moderate obesity", color: "orange", range: [30, 35] },
  { name: "Severe obesity", color: "crimson", range: [35, 40] },
  { name: "Morbid obesity", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m
const form = document.querySelector("form");
const inputs = document.querySelectorAll("input"); // 选择两个inputs是为了在下面获得用户输入的值
const displayBMI = document.querySelector(".bmi-value");
const displayResult = document.querySelector(".result");
const resetButton = document.querySelector(".reset-btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  calculateBMI();
});

resetButton.addEventListener("click", (e) => {
  e.preventDefault();
  inputs.forEach((input) => (input.value = ""));
  displayBMI.textContent = "0";
  displayResult.textContent = "Waiting for the result ...";
  displayBMI.style.color = "inherit";
  displayResult.style.color = "inherit";
});

function calculateBMI() {
  const height = inputs[0].value;
  const weight = inputs[1].value;
  if (!weight || !height || weight <= 0 || height <= 0) {
    handleError();
    return;
  }
  const BMI = (weight / Math.pow(height / 100, 2)).toFixed(1);
  console.log(BMI);
  showResult(BMI);
}

function handleError() {
  displayBMI.textContent = "Oops, there is a mistake!";
  displayBMI.style.color = "inherit";
  displayResult.textContent = "Please enter a valid weight and height value";
}

function showResult(BMI) {
  const result = BMIData.find((data) => {
    if (BMI >= data.range[0] && BMI < data.range[1]) {
      return data;
    } else if (typeof data.range === "number" && BMI >= data.range) {
      // 这里是为了处理最后一个range是40的情况，最后一个range是40，不是[40, 40]，所以要单独处理：
      // 意思是，最后一个range是数字，且BMI大于等于这个数字的时候
      // 也可以把最后一个range改成[40, 40]，这样就不用单独处理了
      return data;
    }
  });
  displayBMI.textContent = BMI;
  displayBMI.style.color = `${result.color}`;
  displayResult.textContent = result.name;
  displayResult.style.color = `${result.color}`;
}
