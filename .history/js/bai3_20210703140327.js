function handlerCountEvenAndOdd() {
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
        countEven();
      }
    } else {
      notificationFail("Vui lòng nhập đúng giá trị.");
    }
  }
}

function coutEven() {
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