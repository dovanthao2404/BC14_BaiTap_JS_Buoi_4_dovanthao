function handlerValueTriangle() {
  var edge1 = document.getElementById('edge-1').value;
  var edge2 = document.getElementById('edge-2').value;
  var edge3 = document.getElementById('edge-3').value;

  var isHaveInput = checkLength(edge1);
  var isHaveInput1 = checkLength(edge2);
  var isHaveInput2 = checkLength(edge3);

  // Kiểm tra người dùng có nhập hay không
  if (isHaveInput && isHaveInput1 && isHaveInput2) {

    var a = +edge1;
    var b = +edge2;
    var c = +edge3;
    // Kiểm tra người dùng nhập có phải là số không
    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {

      // kiểm tra người dùng nhập vào có phải là số lớn hơn 0 không
      if (a <= 0 || b <= 0 || c <= 0) {
        notificationFail('Vui lòng nhập số lớn hơn 0.');
      } else {
        // Kiểm tra tam giác có tồn tại không.
        if ((a + b <= c) || (a + c <= b) || (b + c <= a)) {
          notificationFail('Không tồn tại tam giác có các cạnh như vậy.')
        } else {
          return checkTriangleType(a, b, c);
        }

      }
    } else {
      notificationFail("Vui lòng nhập đúng giá trị.");
    }
  }
}

// Xác định loại tam giác
function checkTriangleType(a, b, c) {
  if ((a === b && c !== a) ||
    (a === c && c !== b) ||
    (b === c && c !== a)) {
    return 'Tam giác cân';
  }
  if (a === b && b === c && c === a) {
    return 'Tam giác đều';
  }
  if (a * a === b * b + c * c ||
    b * b === a * a + c * c ||
    c * c === a * a + b * b) {
    return 'Tam giác vuông';
  }
  if (a * a > b * b + c * c ||
    b * b > a * a + c * c ||
    c * c > a * a + b * b) {
    return 'Tam giác tù';
  }
  return 'Tam giác nhọn';
}


document.getElementById('btnResult').addEventListener('click', function () {
  var triangleType = handlerValueTriangle();
  if (triangleType) {
    var result = document.getElementById('result');
    result.innerHTML = triangleType;
  }
})

// Xuất thông báo
function notificationFail(notification) {
  var result = document.getElementById('result');
  result.innerHTML = notification;
}

// Kiểm tra độ dài
function checkLength(a) {
  if (a === '') {
    notificationFail("Vui lòng nhập giá trị.");
    return false;
  }
  return true;
}