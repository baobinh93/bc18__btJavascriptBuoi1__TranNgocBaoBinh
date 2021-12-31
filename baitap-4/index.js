// Input :
// - Giá trị 2 cạnh của hình chữ nhật

// Xử lý:
// - Áp dụng công thức tính diện tích và chu vi của hình chữ nhật

// Output:
// - Giá trị Chu Vi và Diện Tích hình chữ nhật

const firstNumInputEl = document.getElementById("firstNum");
const secondNumInputEl = document.getElementById("secondNum");

const resultPerimeterEl = document.getElementById("resultPerimeter");
const resultAcreageEl = document.getElementById("resultAcreage");

const submitBtn = document.getElementById("submitBtn");

function calculatePerimeter(x, y) {
  return x * 2 + y * 2;
}
function calculateAcreage(x, y) {
  return x * y;
}

submitBtn.addEventListener("click", function () {
  let firstNum = firstNumInputEl.value;
  let secondNum = secondNumInputEl.value;

  let resultPerimeter = calculatePerimeter(firstNum, secondNum);
  resultPerimeterEl.value = resultPerimeter;
  console.log("Chu vi hình chữ nhật : ", resultPerimeter);

  let resultAcreage = calculateAcreage(firstNum, secondNum);
  resultAcreageEl.value = resultAcreage;
  console.log("Diện tích hình chữ nhật : ", resultAcreage);
});
