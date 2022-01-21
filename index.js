dices = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png",
];
randNumber1 = Math.floor(Math.random() * 6);
randomDiceImage1 = dices[randNumber1];

randNumber2 = Math.floor(Math.random() * 6);
randomDiceImage2 = dices[randNumber2];

document.querySelector(".img1").setAttribute("src", randomDiceImage1);
document.querySelector(".img2").setAttribute("src", randomDiceImage2);

if (randNumber1 > randNumber2) {
  document.querySelector(".container h1").innerText = "🚩Player1 wins!";
} else if (randNumber1 < randNumber2) {
  document.querySelector(".container h1").innerText = "Player2 wins!🚩";
} else {
  document.querySelector(".container h1").innerText = "It's a draw!";
}
