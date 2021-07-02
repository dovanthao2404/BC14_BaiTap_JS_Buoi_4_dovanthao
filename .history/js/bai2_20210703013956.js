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
    audio.src = "../audio/conchaome.mp3";
    handlerResult("../audio/conchaome.mp3", "Con chào mẹ!")
    returnNotification("Con chào mẹ!");
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

function returnNotification(notification) {
  var result = document.getElementById("result");
  result.innerHTML = notification;
}

setTimeout(function () {
  document.getElementById("audioIntro").innerHTML = `
  <audio class="d-none" controls autoplay src="../audio/moichon.mp3">
  <iframe src="" class="d-none" allow="autoplay" style="display:none" id="iframeAudio">
</iframe> `
}, 1000)