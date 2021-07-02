function handlerCountEvenAndOdd() {
  var a = document.getElementById('number-1').value;
  var b = document.getElementById('number-2').value;
  var c = document.getElementById('number-3').value;
  var coNhap = kiemTraDodai(a);
  var coNhap1 = kiemTraDodai(b);
  var coNhap2 = kiemTraDodai(c);
  console.log(coNhap);
  if (coNhap && coNhap1 && coNhap2) {
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