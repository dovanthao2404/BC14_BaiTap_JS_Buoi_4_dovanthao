function xapXepTangDan() {
  var number1 = +document.getElementById('number-1').value;
  var number2 = +document.getElementById('number-2').value;
  var number3 = +document.getElementById('number-3').value;

  var min = number1;
  var mid;
  var max;
  if (number2 < min) {
    if (min > number3) {
      max = min;//tim ra max
      mid = min;
    } else if (min <= number3) {

    }
    min = number2;
  } else {
    max = number2;
  }

  console.log(min, max);
}

document.getElementById('xuatKetQua').addEventListener('click', function () {
  xapXepTangDan();
})