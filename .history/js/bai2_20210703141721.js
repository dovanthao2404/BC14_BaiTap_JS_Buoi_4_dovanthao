// Mảng chứa các thông báo
var greeting = ["Vui lòng chọn!",
  "Con chào bố",
  "Con chào mẹ",
  "Em chào anh!",
  "Anh chào em gái!"
]

document.getElementById("user").addEventListener("change", function () {
  audioAndGreeting();
})

// Âm thanh và lời chào
function audioAndGreeting() {
  var user = document.getElementById("user").selectedIndex;
  if (user === 0) {
    returnNotification(0);
  } else if (user === 1) {
    handlerResult("../audio/conchaobo.mp3", 1)
  } else if (user === 2) {
    handlerResult("../audio/conchaome.mp3", 2)
  } else if (user === 3) {
    handlerResult("../audio/emchaoanh.mp3", 3)
  } else {
    handlerResult("../audio/emgai.mp3", 4)
  }
}

// Xuất lời chào và âm thanh
function handlerResult(src, indexGreeting) {
  var audio = document.getElementById("audio");
  audio.src = src;
  audio.play();
  returnNotification(indexGreeting);
}

// xuất thông báo
function returnNotification(indexGreeting) {
  var result = document.getElementById("result");
  result.innerHTML = greeting[indexGreeting];
}
