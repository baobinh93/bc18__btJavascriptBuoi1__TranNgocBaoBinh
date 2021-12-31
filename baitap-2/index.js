// Input :
// - Nhập vào 5 số nguyên bất kì

// Xử lý:
// - Tình tổng 5 số và chia cho 5

// Output:
// - Giá trị trung bình của 5 sô vừa nhập

const firstNumInputEl = document.getElementById("firstNum");
const secondNumInputEl = document.getElementById("secondNum");
const thirdNumInputEl = document.getElementById("thirdNum");
const fourthNumInputEl = document.getElementById("fourthNum");
const fifthNumInputEl = document.getElementById("fifthNum");

const resultEl = document.getElementById("result");

const submitBtn = document.getElementById("submitBtn");

function calculateAverage(...rest) {
  let sum = 0;
  rest.forEach((num) => (sum += parseInt(num)));

  let result = sum / rest.length;

  return result;
}

submitBtn.addEventListener("click", function () {
  let firstNum = firstNumInputEl.value;
  let secondNum = secondNumInputEl.value;
  let thirdNum = thirdNumInputEl.value;
  let fourthNum = fourthNumInputEl.value;
  let fifthNum = fifthNumInputEl.value;

  let result = calculateAverage(
    firstNum,
    secondNum,
    thirdNum,
    fourthNum,
    fifthNum
  );

  if (result) {
    console.log("Kết quả là:", result);
    return (resultEl.value = result);
  } else {
    console.log("Kết quả là:", result);
    return (resultEl.value = "Nhap thieu du lieu");
  }
});
