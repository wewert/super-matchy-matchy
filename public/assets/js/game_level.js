var imgSource = [
  "assets/img/five-fingers.jpg",
  "assets/img/four-fingers.jpg",
  "assets/img/one-finger.jpg",
  "assets/img/three-Fingers.jpg",
  "assets/img/two-fingers.jpg",
  "assets/img/6.jpg",
  "assets/img/7.jpg",
  "assets/img/8.jpg",
  "assets/img/9.jpg",
  "assets/img/10.jpg"
];

var easy = words.slice(0, 4);
var moderate = words.slice(0, 8);
var hard = words.slice(words.length < 1);

console.log(easy);
console.log("***************");
console.log(moderate);
console.log("***************");
console.log(hard);

function checkLevel() {
  var text;
  var players = document.getElementById("difficulty").value;

  switch(level) {
    case "Easy":
      imgSource = easy = words.slice(0, 4);
      // break;
    case "Medium":
      imgSource = moderate = words.slice(0, 8);
      // break;
    case "Hard":
      imgSource = words.slice(words.length < 1);
      // break;
  }
}
