var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

var heading = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
  heading.innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) heading.innerHTML = "Player 2 Wins!";
else if (randomNumber1 == randomNumber2) heading.innerHTML = "Tie";
