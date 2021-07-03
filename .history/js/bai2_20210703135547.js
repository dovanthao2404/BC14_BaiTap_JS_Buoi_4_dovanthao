
var greeting = ["Vui lòng chọn!",
  {
    greeting: "Con chào bố",
    src: "../ audio / conchaobo.mp3"
  }, {
    greeting: "Con chào mẹ",
    src: "../ audio / conchaobo.mp3"
  }, {
    greeting: "Con chào mẹ",
    src: "../ audio / conchaobo.mp3"
  },
  "Con chào mẹ",
  "Em chào anh!",
  "Anh chào em gái!"
]

document.getElementById("user").addEventListener("change", function () {
  audioSayHi();
})

function audioSayHi() {
  var user = document.getElementById("user").selectedIndex;
  if (user === 0) {
    returnNotification("Vui lòng chọn!");
  } else if (user === 1) {
    handlerResult("../audio/conchaobo.mp3", "Con chào bố!")
  } else if (user === 2) {
    handlerResult("../audio/conchaome.mp3", "Con chào mẹ!")
  } else if (user === 3) {
    handlerResult("../audio/emchaoanh.mp3", "Em chào anh!")
  } else {
    handlerResult("../audio/emgai.mp3", "Anh chào em gái!")
  }
}

function handlerResult(src, notification) {
  var audio = document.getElementById("audio");
  audio.src = src;
  audio.play();
  returnNotification(notification);
}

function returnNotification(indexGreeting) {
  var result = document.getElementById("result");
  result.innerHTML = greeting[indexGreeting];
}
