function handlerCountEvenAndOdd() {
  var number1 = document.getElementById('number-1').value;
  var number2 = document.getElementById('number-2').value;
  var number3 = document.getElementById('number-3').value;

  var isHaveInput = checkLength(number1);
  var isHaveInput1 = checkLength(number2);
  var isHaveInput2 = checkLength(number3);

  // Kiểm tra người dùng có nhập dữ liệu không
  if (isHaveInput && isHaveInput1 && isHaveInput2) {

    var a = +number1;
    var b = +number2;
    var c = +number3;
    // Kiểm tra người dùng có phải nhập số không.
    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
      // Kiểm tra người dùng có nhập số nguyên không.
      if (a % 1 !== 0 || b % 1 !== 0 || c % 1 !== 0) {
        notificationFail('Vui lòng nhập số nguyên.');
      } else {
        return countEven(a, b, c);
      }
    } else {
      notificationFail("Vui lòng nhập đúng giá trị.");
    }
  }
}

// Điểm số chẵn
function countEven(a, b, c) {
  var count = 0;
  if (a % 2 === 0) {
    count++;
  }
  if (b % 2 === 0) {
    count++;
  }
  if (c % 2 === 0) {
    count++;
  }
  return count;
}


document.getElementById('btnResult').addEventListener('click', function () {
  var even = handlerCountEvenAndOdd();
  if (even !== undefined) {
    var result = document.getElementById('result');
    result.innerHTML = `Có ${even} số chẵn và ${3 - even} số lẻ`;
  }
})

// Xuất thông báo ra màn hình
function notificationFail(notification) {
  var result = document.getElementById('result');
  result.innerHTML = notification;
}

// Kiểm tra độ dài của đầu vào
function checkLength(a) {
  if (a === '') {
    notificationFail("Vui lòng nhập giá trị.");
    return false;
  }
  return true;
}