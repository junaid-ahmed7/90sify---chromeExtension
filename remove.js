document.title = "GeoCities!";
const body = document.querySelector("body");
const image = document.createElement("iframe");
image.setAttribute("id", "gif");
image.src = "https://giphy.com/embed/3rgXBumyEL9086dy48";
image.style = "width:200px;height:150px;frameBorder:0";
body.prepend(image);
const image2 = document.createElement("iframe");
image2.setAttribute("id", "gif");
image2.src = "https://giphy.com/embed/RxR1KghIie2iI";
image2.style = "width:200px;height:150px;frameBorder:0";
body.prepend(image2);

//audio wont work :(
// const audio = document.createElement("audio");
// audio.src = "dialup.mp3";
// audio.id = "music";
// audio.crossOrigin="anonymous"
// body.append(audio);
// const audioelem = document.querySelector("#music");
// body.addEventListener("click", () => {
//   audioelem.play();
// });
