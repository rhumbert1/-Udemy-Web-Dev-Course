/* Variables */

var randomNumber1 = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber1);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber2);

/* Dice 1 */

for (i = 1; i < 7; i++) {
  if (randomNumber1 == i) {
    document.querySelector(".img1").src = "images/dice" + i + ".png";
  }
}

/* Dice 2 */

for (i = 1; i < 7; i++) {
  if (randomNumber2 == i) {
    document.querySelector(".img2").src = "images/dice" + i + ".png";
  }
}

/* Winner display */

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins!"
}

if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins! 🚩"
}

if (randomNumber1 == randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!"
}