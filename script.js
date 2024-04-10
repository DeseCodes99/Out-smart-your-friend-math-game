// ! Steps to succesfuly creating the math game
// ^ 1.Create the starter menu
// ^ 2.Create the game that will apear
// ^ 3. toggle the starter menu and game apperance on buttons
// ^ 4. Create the logic behind the maths and points of the game
// ^ 5. Make an option to say how much points to reach.
// TODO Future ideas:
// TODO a) Make an option to choose dificulty before you start

// ~ getting interactive variables ill be using
// getting all the necceseary variables i will be using
const finilizedScore = document.querySelector("#numberInput");
// getting the start and quit btn and the reset btn
const toggleGameBtn = document.querySelectorAll(".game-toggler");
const reset = document.querySelector("#reset-game");
// Getting the starter web and actual game
const startContainer = document.querySelector(".before-start-container");
const gameContainer = document.querySelector(".game-container");
// player 1 contantes ill be using
const pointsP1 = document.querySelector(".points-p1");
const problemP1 = document.querySelector(".problem-p1");
const inputP1 = document.querySelector(".input-p1");
const btnP1 = document.querySelector(".sub-p1");
const solutionP1 = document.querySelector(".input-p1");
// player 2 constantes ill be using
const pointsP2 = document.querySelector(".points-p2");
const problemP2 = document.querySelector(".problem-p2");
const inputP2 = document.querySelector(".input-p2");
const btnP2 = document.querySelector(".sub-p2");
const solutionP2 = document.querySelector(".input-p2");

// getting both players variables i need at the same time
const submitBtns = document.querySelectorAll(".submit-btns");
const players = document.querySelectorAll(".players");
// Creating my own lets that change
let numOne;
let numTwo;
let valueCorrect;
let valueSubmited;
let scoreP1 = 0;
let scoreP2 = 0;
let winAmount = 10;
let gameOngoing = true;
const finalNum = document.querySelector("#finalNum");
// p1 is 1 / p2 is 2
let playerActive = 1;
toggleGameBtn.forEach((el) => {
  el.addEventListener("click", () => {
    let winAmountChecker = finilizedScore.value;

    console.log(winAmountChecker.value);
    if (winAmountChecker == 0) {
      winAmount = 10;
      console.log(winAmount, winAmountChecker);
      console.log(winAmountChecker);
    } else {
      winAmount = winAmountChecker;
      console.log(winAmount, winAmountChecker, 3);
      console.log(winAmountChecker);
      numberInput.value = " ";
    }
    startContainer.classList.toggle("hidden");
    gameContainer.classList.toggle("hidden");
    finalNum.textContent = winAmount;
    resetValues();
  });
});

// submit points
// active class changers

btnP1.addEventListener("click", () => {
  console.log("p1 clciked");
  // getting the submited value
  valueSubmited = Number(solutionP1.value);

  activePerson();
  btnP1.toggleAttribute("disabled");
  btnP2.removeAttribute("disabled");
  // checking if the submited value is true or not
  if (valueCorrect === valueSubmited) {
    problemP1.textContent = "+1";
    scoreP1++;
  } else {
    problemP1.textContent = "-1";
    scoreP1--;
  }
  // Updating the score
  pointsP1.textContent = scoreP1;
  // generating the random number
  randomNum();
  // setting the content to the numbers you need to combine and combining
  // them to check if its true
  problemP2.textContent = `${numOne} + ${numTwo}`;
  valueCorrect = numOne + numTwo;
  console.log(valueCorrect);
  // reseting the input section to blank
  inputP1.value = "";
  console.log(winAmount, winAmount === scoreP1, scoreP1, "p1");
  if (winAmount == scoreP1) {
    alert("p1 wins");
    resetValues();
  }
});

//
btnP2.addEventListener("click", () => {
  console.log("P2 clciked");
  // getting the submited value
  valueSubmited = Number(solutionP2.value);

  activePerson();
  btnP2.toggleAttribute("disabled");
  btnP1.removeAttribute("disabled");
  // checking if the submited value is true or not
  if (valueCorrect === valueSubmited) {
    problemP2.textContent = "+1";
    scoreP2++;
  } else {
    problemP2.textContent = "-1";
    scoreP2--;
  }
  // Updating the score
  pointsP2.textContent = scoreP2;
  // generating the random number
  setTimeout(() => (problemP2.textContent = "X + X"), 1000);
  randomNum();
  problemP1.textContent = `${numOne} + ${numTwo}`;
  valueCorrect = numOne + numTwo;
  inputP2.value = "";
  if (winAmount == scoreP2) {
    alert("p2 wins");
    resetValues();
  }
});
reset.addEventListener("click", resetValues);
function activePerson() {
  players.forEach((p) => p.classList.toggle("active-player"));
}
function randomNum() {
  numOne = Math.floor(Math.random() * 4 + 1);
  numTwo = Math.floor(Math.random() * 4 + 1);
}
function resetValues() {
  valueCorrect = 0;
  scoreP1 = 0;
  scoreP2 = 0;
  problemP2.textContent = "X + X";
  inputP1.value = "";
  inputP2.value = "";
  pointsP1.textContent = scoreP1;
  pointsP2.textContent = scoreP2;
  randomNum();
  console.log(numOne, numTwo);
  problemP1.textContent = `${numOne} + ${numTwo}`;
  valueCorrect = numOne + numTwo;
  console.log(valueCorrect);
  console.log(players[0]);
  players[0].classList.add("active-player");
  players[1].classList.remove("active-player");

  // btnP1.removeAttribute("disabled");
  btnP1.removeAttribute("disabled");
  btnP2.setAttribute("disabled", false);
}
