let container = document.querySelector(".container");
let btnGenarator = document.querySelector(".generator");
let btnCircle = document.querySelector(".circle");
let btnSquare = document.querySelector(".square");
let block = document.querySelector(".block");

//Event Listener
btnGenarator.addEventListener("click", generate);
btnCircle.addEventListener("click", goCircle);
btnSquare.addEventListener("click", goSquare);

//Blocks Generator
for (let i = 0; i <= 100; i++) {
  let blocks = document.createElement("div");
  blocks.classList.add("block");
  container.appendChild(blocks);
}

//Random Position
function generate() {
  anime({
    targets: ".block",
    translateX: function () {
      return anime.random(-700, 700);
    },
    translateY: function () {
      return anime.random(-500, 800);
    },
    scale: function () {
      return anime.random(1, 9);
    },
  });
}

//Divs to Circle
function goCircle() {
  anime({
    targets: ".block",
    borderRadius: ["0%", "50%"],
    easing: "easeInOutQuad",
  });
}

//Divs to Square
function goSquare() {
  anime({
    targets: ".block",
    borderRadius: ["50%", "0%"],
    easing: "easeInOutQuad",
  });
}

//disabled Button
document.querySelectorAll("button").forEach((item) => {
  item.addEventListener("click", (event) => {
    if (event.target.className === "circle") {
      btnCircle.disabled = true;
      btnSquare.disabled = false;
    }
    if (event.target.className === "square") {
      btnSquare.disabled = true;
      btnCircle.disabled = false;
    }
  });
});
