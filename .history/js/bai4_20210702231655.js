function handlerValueTriangle() {
  var edge1 = document.getElementById('edge-1').value;
  var edge2 = document.getElementById('edge-2').value;
  var edge3 = document.getElementById('edge-3').value;

  var isHaveInput = checkLength(edge1);
  var isHaveInput1 = checkLength(edge2);
  var isHaveInput2 = checkLength(edge3);

  if (isHaveInput && isHaveInput1 && isHaveInput2) {

    var a = +edge1;
    var b = +edge2;
    var c = +edge3;

    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {

      if (a <= 0 || b <= 0 || c <= 0) {
        notificationFail('Vui lòng nhập số lớn hơn 0.');
      } else {

        if ((a + b <= c) || (a + c <= b) || (b + c <= a)) {
          notificationFail('Không tồn tại tam giác có các cạnh như vậy.')
        } else {
          if (a === b && b === c && c === a) {
            return 'Tam giác cân';
          }
          if ((a === b && c !== a) ||
               (a === c&& c !== b) ||
                b === c) {
            return 'Tam giác đều';
          }
          if (a ^ 2 + b ^ 2 === c ^ 2 ||
            a ^ 2 + c ^ 2 === b ^ 2 ||
            c ^ 2 + b ^ 2 === a ^ 2
          ) {
            return 'Tam giác vuông';
          }
        }


      }
    } else {
      notificationFail("Vui lòng nhập đúng giá trị.");
    }
  }
}

document.getElementById('btnResult').addEventListener('click', function () {
  var triangleType = handlerValueTriangle();
  if (triangleType) {
    var result = document.getElementById('result');
    result.innerHTML = triangleType;
  }
})

function notificationFail(notification) {
  var result = document.getElementById('result');
  result.innerHTML = notification;
}

function checkLength(a) {
  if (a === '') {
    notificationFail("Vui lòng nhập giá trị.");
    return false;
  }
  return true;
}