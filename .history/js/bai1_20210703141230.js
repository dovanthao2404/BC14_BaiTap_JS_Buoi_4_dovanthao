function handlerSortIncrease() {
  var number1 = document.getElementById('number-1').value;
  var number2 = document.getElementById('number-2').value;
  var number3 = document.getElementById('number-3').value;

  var isHaveInput = checkLength(number1);
  var isHaveInput1 = checkLength(number2);
  var isHaveInput2 = checkLength(number3);

  // Kiểm tra người dùng có nhập không.
  if (isHaveInput && isHaveInput1 && isHaveInput2) {

    var a = +number1;
    var b = +number2;
    var c = +number3;

    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {

      if (a % 1 !== 0 || b % 1 !== 0 || c % 1 !== 0) {
        notificationFail('Vui lòng nhập số nguyên.');
      } else {
        sortIncrease(a, b, c);
      }
    } else {
      notificationFail("Vui lòng nhập đúng giá trị.");
    }
  }
}

// Sắp xếp các số theo thứ tự tăng dần
function sortIncrease(a, b, c) {

  if (a <= b && b <= c) {
    outputResult(a, b, c);
  } else if (a <= c && c <= b) {
    outputResult(a, c, b);
  } else if (b <= a && a <= c) {
    outputResult(b, a, c)
  } else if (b <= c && c <= a) {
    outputResult(b, c, a);
  } else if (c <= a && a <= b) {
    outputResult(c, a, b);
  } else {
    outputResult(c, b, a);
  }

}

document.getElementById('btnResult').addEventListener('click', function () {
  handlerSortIncrease();
})

// Xuất kể quả thành công
function outputResult(min, mid, max) {
  var result = document.getElementById('result');
  result.innerHTML = `Sắp xếp tăng dần ${min} ${mid} ${max}`
}

// Thông báo khi phát hiện lỗi.
function notificationFail(notification) {
  var result = document.getElementById('result');
  result.innerHTML = notification;
}

// Kiểm tra người dùng có nhập hay không
function checkLength(a) {
  if (a === '') {
    notificationFail("Vui lòng nhập giá trị.");
    return false;
  }
  return true;
}