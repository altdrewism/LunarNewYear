var video_index = 1;
var counter = 0;
var num_vids = 26;
let list = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

document.getElementById("click").onclick = function() {
  //document.getElementById("container").innerHTML += '<video class="between" autoplay> <source src="videos/1.mp4" type="video/mp4"> </video>';
  var video = document.getElementById("video");


  if (video.childElementCount >= 1) {
    console.log("has video");
    video.pause();
    source = document.getElementById("source");
    video.removeChild(source);
    video.style.visibility = "hidden";
    video.load();
    return;
  }

  var source = document.createElement("source");
  
  source.setAttribute("src", `videos/${video_index}`);
  
  source.setAttribute("type", "video/mp4");
  source.setAttribute("id", "source");
  
  if (counter == 4) {
    video_index = 0;
  } else {
    if (list.length <= 0) {
      list = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
      video_index = 1;
    } else {
      var random_index = getRandomInt(list.length);
      video_index = list[random_index];
      let pos = list.indexOf(video_index);
      list.splice(pos, 1);
    }
  }
  
  counter += 1;
  
  
  console.log(`${video_index}`);
  console.log(document.getElementById("video"));
  video.appendChild(source);
  video.onended = function() {
    source = document.getElementById("source");
    video.removeChild(source);
    video.style.visibility = "hidden";
  }
  
  video.load();
  video.play();
  video.style.visibility = "visible";
}