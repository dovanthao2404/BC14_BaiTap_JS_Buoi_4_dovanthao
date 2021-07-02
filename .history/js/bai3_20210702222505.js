function handlerCountEvenAndOdd() {
  var number1 = document.getElementById('number-1').value;
  var number2 = document.getElementById('number-2').value;
  var number3 = document.getElementById('number-3').value;

  var coNhap = checkLength(number1);
  var coNhap1 = checkLength(number2);
  var coNhap2 = checkLength(number3);

  if (coNhap && coNhap1 && coNhap2) {

    var a = +number1;
    var b = +number2;
    var c = +number3;
    console.log(a);

    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {

      if (a % 1 !== 0 || b % 1 !== 0 || c % 1 !== 0) {
        notificationFail('Vui lòng nhập số nguyên.');
      } else {
        var demSoChan = 0;
        if (a % 2 === 0) {
          demSoChan++;
        }
        if (b % 2 === 0) {
          demSoChan++;
        }
        if (c % 2 === 0) {
          demSoChan++;
        }
        return demSoChan;

      }
    } else {
      notificationFail("Vui lòng nhập đúng giá trị.");
    }
  }
}

document.getElementById('btnResult').addEventListener('click', function () {
  var even = handlerCountEvenAndOdd();
  if (even !== undefined) {
    var result = document.getElementById('result');
    result.innerHTML = `Có ${even} số chẵn và ${3 - even} số lẻ`;
  }
})

function notificationFail(thongBao) {
  var result = document.getElementById('result');
  result.innerHTML = thongBao;
}

function checkLength(a) {
  if (a === '') {
    notificationFail("Vui lòng nhập giá trị.");
    return false;
  }
  return true;
}