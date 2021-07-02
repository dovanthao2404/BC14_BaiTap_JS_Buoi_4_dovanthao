function xuLyDemSoChanVaLe() {
  var a = +document.getElementById('number-1').value;
  var b = +document.getElementById('number-2').value;
  var c = +document.getElementById('number-3').value;

  if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
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
      return demSoChan;
    }
  } else {
    xuatThongBaoLoi("Vui lòng nhập đúng giá trị.");
  }
}

document.getElementById('xuatKetQua').addEventListener('click', function () {
  var soChan = xuLyDemSoChanVaLe();

  if (soChan !== undefined) {
    var ketQua = document.getElementById('ketQua');
    ketQua.innerHTML = `Có ${soChan} số chẵn và ${3 - soChan} số lẻ`;
  }
})

function xuatThongBaoLoi(thongBao) {
  var ketQua = document.getElementById('ketQua');
  ketQua.innerHTML = thongBao;
}

function kiemTraDodai(a) {
  if (a.length === 0) {
    xuatThongBaoLoi("Vui lòng nhập")
  }
}