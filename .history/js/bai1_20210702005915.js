function xapXepTangDan() {
  var a = +document.getElementById('number-1').value;
  var b = +document.getElementById('number-2').value;
  var c = +document.getElementById('number-3').value;

  if (a <= b <= c) {
    xuatKetQua(a, b, c);
  } else if (a <= c <= b) {
    xuatKetQua(a, c, b);
  } else if (b <= a <= c) {
    xuatKetQua(b, a, c)
  } else if (b <= c <= a) {
    xuatKetQua(b, c, a);
  } else if (c <= a <= b) {
    xuatKetQua(c, a, b);
  }

}

document.getElementById('xuatKetQua').addEventListener('click', function () {
  xapXepTangDan();
})

function xuatKetQua(min, mid, max) {
  var ketQua = document.getElementById('ketQua');
  ketQua.innerHTML = `Xắp xếp tăng dần ${min} ${mid} ${max}`
}