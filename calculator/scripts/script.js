let screen = document.getElementById("screen");

const clearScreen = () => {
  screen.textContent = "0";
};

const appendCharacter = (character) => {
  if (screen.textContent === "0" && character !== ".") {
    screen.textContent = character;
  } else {
    screen.textContent += character;
  }
};

const calculateResult = () => {
  try {
    screen.textContent = eval(screen.textContent);
  } catch (error) {
    screen.textContent = "Error";
  }
};
