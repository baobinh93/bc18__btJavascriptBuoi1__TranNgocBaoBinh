// Input :
// - Số tiền USD muốn qui đổi
// Xử lý:
// - VND = USD.23.500

// Output:
//- Số tiền VND có giá trị tương ứng

const firstNumInputEl = document.getElementById("firstNum");

const resultEl = document.getElementById("result");

const submitBtn = document.getElementById("submitBtn");

function calculateVND(usd) {
  return usd * 23500;
}
function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
submitBtn.addEventListener("click", function () {
  let firstNum = firstNumInputEl.value;

  let result = calculateVND(firstNum);
  resultEl.value = formatNumber(result);

  console.log("Kết quả là:", result);
});
