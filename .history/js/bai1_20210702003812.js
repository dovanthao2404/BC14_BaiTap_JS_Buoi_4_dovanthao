var number1 = +document.getElementById('number-1').value;
var number2 = +document.getElementById('number-2').value;
var number3 = +document.getElementById('number-3').value;

var min = number1;
var max;
if (number2 < min) {
  min = number2;
  max = number1;
} else {

}