const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

// IMC = poids en kg / taille² en m
const form = document.querySelector("form");
const inputs = document.querySelectorAll("input"); // 选择两个inputs是为了在下面获得用户输入的值
form.addEventListener("submit", handleForm);

function handleForm(e) {
  e.preventDefault();
  calculateBMI();
}

function calculateBMI() {
  const weight = inputs[0].value;
  const height = inputs[1].value;
  console.log(weight, height);
}

