document.getElementById("user").addEventListener("change", function () {
  audioSayHi();
})

function audioSayHi() {
  var user = document.getElementById("user").selectedIndex;
  if (user === 0) {
    returnNotification("Vui lòng chọn!");
  } else if (user === 1) {
    var audio = document.getElementById("audio");
    audio.src = "../audio/conchaobo.mp3";
    audio.play();
    returnNotification("Con chào bố!");
  } else if (user === 2) {
    var audio = document.getElementById("audio");
    audio.src = "../audio/conchaome.mp3";
    audio.play();
    returnNotification("Con chào mẹ!");
  } else if (user === 3) {
    var audio = document.getElementById("audio");
    audio.src = "../audio/emchaoanh.mp3";
    audio.play();
    returnNotification("Em chào anh!");
  } else {
    var audio = document.getElementById("audio");
    audio.src = "../audio/emgai.mp3";
    audio.play();
    returnNotification("Anh chào em gái!");
  }
}

function returnNotification(notification) {
  var result = document.getElementById("result");
  result.innerHTML = notification;
}