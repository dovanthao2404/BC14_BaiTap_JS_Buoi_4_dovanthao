function xapXepTangDan() {
  var a = +document.getElementById('number-1').value;
  var b = +document.getElementById('number-2').value;
  var c = +document.getElementById('number-3').value;

  if (a <= b <= c) {
    xuatKetQua(a, b, c);
  }

}

document.getElementById('xuatKetQua').addEventListener('click', function () {
  xapXepTangDan();
})

function xuatKetQua(min, mid, max) {
  var ketQua = document.getElementById('ketQua');
  ketQua.innerHTML = `Xắp xếp tăng dần ${min} ${mid} ${max}`
}