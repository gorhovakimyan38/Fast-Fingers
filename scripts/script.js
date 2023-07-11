let play = document.getElementById("startbutton");
let center = document.getElementById("center");
let choose = document.getElementById("choose");
let openKeyboard = document.getElementById("button1");
let normal = document.getElementById("button2");
let hard = document.getElementById("button3");
let countDown = document.getElementById("count-down");
let startCount = document.getElementById("start-count");
let raketa = document.getElementById("figure-jumping");
let keyboard = document.getElementById("keyboard");
let game = document.getElementById("game");
let gameCount = document.getElementById("game-count");
let highScore = document.getElementById("high-score");
let randomWord = document.getElementById("random-word");
let input = document.getElementById("input");
let yourScore = document.getElementById("your-score");
let end = document.getElementById("end");
let endButton = document.getElementById("end-button");
let endScore = document.getElementById("end-score");
let endHScore = document.getElementById("endH-score");
let menuK = document.getElementById("menu-k");


var lEl;


play.addEventListener("click", startGame);
openKeyboard.addEventListener("click", openKeyB);
normal.addEventListener("click", normalGame);
hard.addEventListener("click", hardGame);
endButton.addEventListener("click", backMenu);
menuK.addEventListener("click", backMenu2);



function startGame() {
  center.style.display = "none";
  choose.style.display = "block";
  end.style.display = "none";
}

function normalGame() {
  gameCount.innerHTML = 10;
  choose.style.display = "none";
  raketa.style.display = "none";
  countDown.style.display = "block";
  highScore.innerHTML = localStorage.score;
  countDownInt();


}

function openKeyB() {
  choose.style.display = "none";
  raketa.style.display = "none";
  keyboard.style.display = "block";
  //  console.log(letters);
  let oneLetter = randomLetters()
  lEl = document.getElementById(oneLetter)
  lEl.classList.add('selected')
  let falseEl;
  document.addEventListener("keyup", function (e) {
    if (falseEl) {
      setTimeout(() => falseEl.classList.remove("hit"), 100)
    }

    if (e.code == oneLetter) {
      lEl.classList.remove("selected")
      oneLetter = randomLetters()
      lEl = document.getElementById(oneLetter)
      lEl.classList.add('selected')
    }
    else {
      falseEl = document.getElementById(e.code)
      falseEl.classList.add("hit")
    }
  })

}


function randomLetters() {
  let l = Math.floor(Math.random() * letters.length);
  return letters[l];


}

function countDownInt() {
  let id = setInterval(function () {
    if (startCount.innerHTML > 0) {
      startCount.innerHTML = +startCount.innerHTML - 1;
    } else {
      clearInterval(id);
      gameF();
      startCount.innerHTML = 3;
    }
  }, 1000);
}

function gameF() {
  countDown.style.display = "none";
  game.style.display = "block";
  generalGame();
}
function randomWords() {
  let a = Math.floor(Math.random() * words.length);
  return words[a];
}

function timer() {
  let id = setInterval(function () {
    if (gameCount.innerHTML > 0) {
      gameCount.innerHTML = +gameCount.innerHTML - 1;
    } else {
      clearInterval(id);
      game.style.display = "none";
      end.style.display = "block";
      endScore.innerHTML = yourScore.innerHTML;
      endHScore.innerHTML = localStorage.score;
      gameCount.innerHTML = 10;
    }
  }, 1000);
}

function generalGame() {
  timer();
  let score = 0;
  let oneWord;
  let high;

  if (!localStorage.score) {
    localStorage.score = 0;

  }
  high = localStorage.score;
  highScore.innerHTML = high;
  randomWords();
  oneWord = randomWords();
  randomWord.innerHTML = oneWord;

  input.onchange = function () {
    if (oneWord == input.value) {
      gameCount.innerHTML = +gameCount.innerHTML + 3;
      score++;

      yourScore.innerHTML = score;

      if (localStorage.score < score) {
        localStorage.score = score;
        highScore.innerHTML = localStorage.score;
      }

      oneWord = randomWords();
      input.value = "";
      randomWord.innerHTML = oneWord;
    } else {
      input.value = "";
      gameCount.innerHTML = +gameCount.innerHTML - 1;
    }
  };
}



function backMenu() {
  end.style.display = "none";
  center.style.display = "block";
  raketa.style.display = "block";
  yourScore.innerHTML = 0;
}

function backMenu2() {
  keyboard.style.display = "none";
  choose.style.display = "block";
  raketa.style.display = "block";
  lEl.classList.remove("selected")
  yourScore.innerHTML = 0;
}











//hard

function hardGame() {
  gameCount.innerHTML = 60;
  choose.style.display = "none";
  raketa.style.display = "none";
  countDown.style.display = "block";
  highScore.innerHTML = localStorage.scoreH
  countDownH();
}

function countDownH() {
  let id = setInterval(function () {
    if (startCount.innerHTML > 0) {
      startCount.innerHTML = +startCount.innerHTML - 1;
    } else {
      clearInterval(id);
      gameFH();
      startCount.innerHTML = 3;
    }
  }, 1000);
}
console.log(localStorage)
function gameFH() {
  countDown.style.display = "none";
  game.style.display = "block";
  generalGameH();
}

function randomWordsH() {
  let a = Math.floor(Math.random() * words.length);
  return words[a];
}

function timerH() {
  let id = setInterval(function () {
    if (gameCount.innerHTML > 0) {
      gameCount.innerHTML = +gameCount.innerHTML - 1;
    } else {
      clearInterval(id);
      game.style.display = "none";
      end.style.display = "block";
      endScore.innerHTML = yourScore.innerHTML;
      endHScore.innerHTML = localStorage.hardScore;
      gameCount.innerHTML = 60;
    }
  }, 1000);
}

function generalGameH() {
  timerH();
  let score = 0;
  let oneWord;
  if (localStorage.hardScore || localStorage.hardScore == 0) {
    highScore.innerHTML = localStorage.hardScore;
  } else {
    localStorage.hardScore = 0;
    highScore.innerHTML = localStorage.hardScore;
  }

  randomWordsH();
  oneWord = randomWordsH();
  randomWord.innerHTML = oneWord;

  input.onchange = function () {
    if (oneWord == input.value) {
      score++;

      yourScore.innerHTML = score;

      if (localStorage.hardScore < score) {
        localStorage.hardScore = score;
        highScore.innerHTML = localStorage.hardScore;
      }

      oneWord = randomWordsH();
      input.value = "";
      randomWord.innerHTML = oneWord;
    } else {

      input.value = "";
    }
  };
}

