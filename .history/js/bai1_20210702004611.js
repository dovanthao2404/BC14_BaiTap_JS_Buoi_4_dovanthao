function xapXepTangDan() {
  var number1 = +document.getElementById('number-1').value;
  var number2 = +document.getElementById('number-2').value;
  var number3 = +document.getElementById('number-3').value;

  var min = number1;
  var mid = number2
  var max = number3;
  if (number2 < min) {
    max = min;
    min = number2;
  } else {
    max = number2;
  }
  if (number3 < min) {
    if (min > max) {
      max = min;
    }
    min = number3;
  } else {
    if (number3 > max) {
      max = number3;
    }
  }

  console.log(min, max);
}

document.getElementById('xuatKetQua').addEventListener('click', function () {
  xapXepTangDan();
})