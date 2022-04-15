var randomNumber1;
randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomSourceOfImg = "images/" + randomDiceImage;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomSourceOfImg);

var randomNumber2;
randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomSourceOfImg2 = "images/" + randomDiceImage2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomSourceOfImg2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player1 wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player2 wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
