// Input :
// - Nhập vào 1 số nguyên N có 2 ký số

// Xử lý:
// - Phân tích số nguyên N thành : XY;
// - X là phần nguyên của N/10;
// - Y là phần dư của N%10

// Output:
// - Tổng 2 ký số X + Y

const firstNumInputEl = document.getElementById("firstNum");

const resultEl = document.getElementById("result");

const submitBtn = document.getElementById("submitBtn");

function calculate(n) {
  let x = Math.floor(n / 10);
  let y = n % 10;
  return x + y;
}

submitBtn.addEventListener("click", function () {
  let firstNum = firstNumInputEl.value;
  if (firstNum < 100 && firstNum > 9) {
    let result = calculate(firstNum);
    resultEl.value = result;
    console.log("Kết quả là:", result);
  } else {
    resultEl.value = " Nhap sai rồi";
  }
});
