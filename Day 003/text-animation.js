const text = document.querySelector(".fade");
const stringText = text.textContent;

// Split sentence into array of each letter
const splitText = stringText.split("");
text.textContent = "";

// Loop over the Array
for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += "<span>" + splitText[i] + "</span";
}

let character = 0;

// Create a timer
let timer = setInterval(onTick, 50);

// Function that adds class to each span, and adds it to each character
function onTick() {
  const span = text.querySelectorAll("span")[character];
  span.classList.add("fade");
  // Increase character to loop over it
  character++;

  //   stop loop once it reached last character
  if (character === splitText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}
