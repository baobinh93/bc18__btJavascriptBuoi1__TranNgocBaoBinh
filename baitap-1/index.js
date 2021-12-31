// Input :
// - Số ngày làm của nhân viên
// - Lương theo ngày: 100.000

// Xử lý:
// - Nhân số ngày với số lương theo ngày

// Output:
// - Tiền lương phải trả

const firstInputEl = document.getElementById("first");
const resultEl = document.getElementById("result");
const submitBtn = document.getElementById("submitBtn");

function calculateSalary(n) {
  return n * 100000;
}

submitBtn.addEventListener("click", function () {
  let numberValue = firstInputEl.value;

  let result = calculateSalary(numberValue);
  resultEl.value = result;

  console.log("Tiền lương phải trả cho ", numberValue, " ngày là", result);
});
