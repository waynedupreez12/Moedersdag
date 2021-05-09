// if (confirm("Press a button!")) {
//   var getAudio = document.querySelector("audio.audio1").play();
// } else {
//   txt = "You pressed Cancel!";
// }

alert("n Web Page net vir jou my LIEF DALEEN");

var vid = document.querySelector("audio.audio1");
vid.currentTime = 60;

document.querySelector(".carousel-control-n").addEventListener("click", handleNext);
$('#testimonial-carousel').on('slide.bs.carousel', function (event) {
    var test = event.to;
    if(test === 0){
      document.location.href = "#bottom";
    }
})
function handleNext(){


}

var lastImage = document.querySelector("img.foto-img-last");
var srcAttr = lastImage.getAttribute("src");
