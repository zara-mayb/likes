var likes = document.querySelector(".likes");
var numCount = 0
function like() {
  numCount++;
  likes.innerText = numCount + " Like(s)";
}