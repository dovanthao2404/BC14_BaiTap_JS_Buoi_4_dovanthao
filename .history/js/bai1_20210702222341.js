function xuLySapXepTangDan() {
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

    if (a && b && c && !isNaN(a) && !isNaN(b) && !isNaN(c)) {

      if (a % 1 !== 0 || b % 1 !== 0 || c % 1 !== 0) {
        xuatThongBaoLoi('Vui lòng nhập số nguyên.');
      } else {
        if (a <= b && b <= c) {
          xuatKetQua(a, b, c);
        } else if (a <= c && c <= b) {
          xuatKetQua(a, c, b);
        } else if (b <= a && a <= c) {
          xuatKetQua(b, a, c)
        } else if (b <= c && c <= a) {
          xuatKetQua(b, c, a);
        } else if (c <= a && a <= b) {
          xuatKetQua(c, a, b);
        } else {
          xuatKetQua(c, b, a);
        }
      }
    } else {
      xuatThongBaoLoi("Vui lòng nhập đúng giá trị.");
    }
  }
}

document.getElementById('xuatKetQua').addEventListener('click', function () {
  xuLySapXepTangDan();
})

function xuatKetQua(min, mid, max) {
  var ketQua = document.getElementById('ketQua');
  ketQua.innerHTML = `Sắp xếp tăng dần ${min} ${mid} ${max}`
}
function xuatThongBaoLoi(thongBao) {
  var ketQua = document.getElementById('ketQua');
  ketQua.innerHTML = thongBao;
}


function checkLength(a) {
  if (a === '') {
    notificationFail("Vui lòng nhập giá trị.");
    return false;
  }
  return true;
}