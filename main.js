const elements = document.querySelectorAll(".box div");

const reset = document.querySelector(".reset");
const score = document.getElementById("score1");

let count1 = 0;
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
  });
}

document.addEventListener("DOMContentLoaded", () => {
  mySharedLogic();
});

reset.addEventListener("click", () => {
  count1 = 0;
  score.innerHTML = count1;
  mySharedLogic();
});

let first = "";
let second = "";
let counter = true;
let disable = false;

elements.forEach((element, i) =>
  element.addEventListener("click", () => {
    if (disable) return;

    if (counter) {
      first = element;
      element.style.backgroundImage = "none";
      counter = false;
    } else {
      second = element;
      element.style.backgroundImage = "none";
      counter = true;
      disable = true;

      checkWinner(first, second);
    }
  })
);

function checkWinner(first, second) {
  if (second.style.backgroundColor == first.style.backgroundColor) {
    disable = false;
    score.innerHTML = ++count1;
  } else {
    setTimeout(() => {
      first.style.backgroundImage = "url(./img/cardbg.png)";
      second.style.backgroundImage = "url(./img/cardbg.png)";
      disable = false;
    }, 1000);
  }
}
