const elements = document.querySelectorAll(".box div");

const reset = document.querySelector(".reset");
const score = document.getElementById("score");
const click = document.getElementById("click");
const over = document.getElementById("over");
const overBox = document.querySelector(".over");

let first = "";
let second = "";
let key = true;
let disable = false;
let counter = 0;

let result = 0;
const cardArr = [
  "#FF204E",
  "#00FF9C",
  "#FAEA48",
  "#E48900",
  "#00D7FF",
  "#FF204E",
  "#892CDC",
  "#00FF9C",
  "#FAEA48",
  "#00D7FF",
  "#E48900",
  "#892CDC",
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function mySharedLogic() {
  const shuffled = shuffleArray(cardArr);

  elements.forEach((element, i) => {
    element.style.backgroundColor = shuffled[i];
    element.style.backgroundImage = "url(./img/cardbg.png)";
    element.classList.remove("disabled");
  });
}

function sharedReset() {
  result = 0;
  score.innerHTML = result;
  mySharedLogic();
  second = "";
  first = "";
  disable = false;
  counter = 0;
  click.innerHTML = counter;
  key = true;
}

document.addEventListener("DOMContentLoaded", () => {
  mySharedLogic();
});

over.addEventListener("click", () => {
  sharedReset();
  overBox.style.display = "none";
});

reset.addEventListener("click", () => {
  sharedReset();
});


elements.forEach((element, i) =>
  element.addEventListener("click", () => {
    if (disable || element.classList.contains("disabled")) return;

    element.classList.add("disabled");
    element.style.backgroundImage = "none";
    click.innerHTML = ++counter;

    if (key) {
      first = element;
      key = false;
    } else {
      second = element;
      key = true;
      disable = true;
      checkWinner(first, second);
    }
  })
);

function checkWinner(first, second) {
  if (second.style.backgroundColor == first.style.backgroundColor) {
    disable = false;
    score.innerHTML = ++result;

    if (result == 6) {
      overBox.style.display = "flex";
    }
  } else {
    setTimeout(() => {
      first.style.backgroundImage = "url(./img/cardbg.png)";
      second.style.backgroundImage = "url(./img/cardbg.png)";
      first.classList.remove("disabled");
      second.classList.remove("disabled");
      disable = false;
    }, 1000);
  }
}
