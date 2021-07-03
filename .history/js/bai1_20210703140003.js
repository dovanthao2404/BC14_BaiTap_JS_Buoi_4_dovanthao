function handlerSortIncrease() {
  var number1 = document.getElementById('number-1').value;
  var number2 = document.getElementById('number-2').value;
  var number3 = document.getElementById('number-3').value;

  var isHaveInput = checkLength(number1);
  var isHaveInput1 = checkLength(number2);
  var isHaveInput2 = checkLength(number3);

  if (isHaveInput && isHaveInput1 && isHaveInput2) {

    var a = +number1;
    var b = +number2;
    var c = +number3;

    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {

      if (a % 1 !== 0 || b % 1 !== 0 || c % 1 !== 0) {
        notificationFail('Vui lòng nhập số nguyên.');
      } else {
      }
    } else {
      notificationFail("Vui lòng nhập đúng giá trị.");
    }
  }
}

document.getElementById('btnResult').addEventListener('click', function () {
  handlerSortIncrease();
})

function outputResult(min, mid, max) {
  var result = document.getElementById('result');
  result.innerHTML = `Sắp xếp tăng dần ${min} ${mid} ${max}`
}
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