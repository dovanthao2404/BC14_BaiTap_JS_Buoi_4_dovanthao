function xuLyDemSoChanVaLe() {
  var a = +document.getElementById('number-1').value;
  var b = +document.getElementById('number-2').value;
  var c = +document.getElementById('number-3').value;
  if (a && b && c && !isNaN(a) && !isNaN(b) && !isNaN(c)) {
    console.log("a");
    if (a % 1 !== 0 || b % 1 !== 0 || c % 1 !== 0) {
      xuatThongBaoLoi('Vui lòng nhập số nguyên.');
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
    }
  } else {
    xuatThongBaoLoi("Vui lòng nhập đúng giá trị.");
  }
}

document.getElementById('xuatKetQua').addEventListener('click', function () {
  xuLyDemSoChanVaLe();
})

function xuatKetQua(min, mid, max) {
  var ketQua = document.getElementById('ketQua');
  ketQua.innerHTML = `Sắp xếp tăng dần ${min} ${mid} ${max}`
}
function xuatThongBaoLoi(thongBao) {
  var ketQua = document.getElementById('ketQua');
  ketQua.innerHTML = thongBao;
}