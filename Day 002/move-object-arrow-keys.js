let modifier = 10;
const element = document.getElementById("square");

window.addEventListener("keydown", (event) => {
  // Adjust top and left values based on which arrow key is being pressed
  switch (event.key) {
    case "ArrowUp":
      element.style.top = `${parseInt(element.style.top) - modifier}px`;
      break;
    case "ArrowDown":
      element.style.top = `${parseInt(element.style.top) + modifier}px`;
      break;
    case "ArrowLeft":
      element.style.left = `${parseInt(element.style.left) - modifier}px`;
      break;
    case "ArrowRight":
      element.style.left = `${parseInt(element.style.left) + modifier}px`;
      break;
  }
});

// APPROACH 1

// function leftArrow() {
//   var element = document.getElementById("square");
//   console.log(element);
//   element.style.left = parseInt(element.style.left) - 10 + "px";
// }

// function rightArrow() {
//   var element = document.getElementById("square");
//   element.style.left = parseInt(element.style.left) + 10 + "px";
// }

// function upArrow() {
//   var element = document.getElementById("square");
//   element.style.top = parseInt(element.style.top) - 10 + "px";
// }

// function downArrow() {
//   var element = document.getElementById("square");
//   element.style.top = parseInt(element.style.top) + 10 + "px";
// }

// function moveSelection(evt) {
//   switch (evt.keyCode) {
//     case 37:
//       leftArrow();
//       break;
//     case 39:
//       rightArrow();
//       break;
//     case 38:
//       upArrow();
//       break;
//     case 40:
//       downArrow();
//       break;
//   }
// }

// function docReady() {
//   window.addEventListener("keydown", moveSelection);
// }
