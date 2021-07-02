var number1 = +document.getElementById('number-1').value;
var number2 = +document.getElementById('number-2').value;
var number3 = +document.getElementById('number-3').value;

var min = number1;
var max;
if (number2 < min) {
  max = min;
  min = number2;
} else {
  max = number2;
}