document.addEventListener("DOMContentLoaded", () => {
  const result = document.getElementById("result");
  const timeLeft = document.getElementById("time-left");

  const grid = document.getElementById("grid");

  const width = 15;
  const border = 3;
  const trapBorder = border + 1;

  var horGrid = [];
  var vertGrid = [];
  var randomVertHole = [];
  var randomHorHole = [];

  /* grid's creation */

  for (let i = 0; i < 225; i++) {
    const square = document.createElement("div");
    const divId = document.createAttribute("id");
    divId.value = i;
    square.setAttributeNode(divId);
    grid.appendChild(square);
  }

  /* board's creation */

  /* bring together all div */

  const square = document.querySelectorAll("#grid div");

  /* color the board in black */

  for (let j = 0; j < width - 2 * border; j++) {
    for ( let i = border + border * width; i <= border + border * width + width - 2 * border - 1; i++) {
      square[i + j * width].setAttribute("class", "board");
    }
  }

  /* color the trapBoard in green */

  for (let j = 0; j < width - 2 * trapBorder; j++) {
    for ( let i = trapBorder + trapBorder * width; i < trapBorder + trapBorder * width + width - 2 * trapBorder; i++ ) {
      square[i + j * width].setAttribute("class", "trapBoard");
    }
  }

  
  /* horGrid's creation */
  
  for (let j = 0; j < width - 2 * trapBorder; j++) {
    for ( let i = trapBorder + trapBorder * width; i < trapBorder + trapBorder * width + width - 2 * trapBorder; i++ ) {
      horGrid.push(i + j * width);
    }
  }

  for (let x = 0; x < (7 * 7) / 2; x++) {
    randomHorHole.push(horGrid[Math.floor(Math.random() * horGrid.length)]);
    square[randomHorHole[x]].classList.add("horHoles");
  }
  
  /* vertGrid's creation */
  
  for (let j = 0; j < width - 2 * trapBorder; j++) {
    for ( let i = trapBorder + trapBorder * width; i < trapBorder + trapBorder * width + width - 2 * trapBorder; i++ ) {
      vertGrid.push(i + j * width);
    }
  }
  
  for (let x = 0; x < (7 * 7) / 2; x++) {
    randomVertHole.push(vertGrid[Math.floor(Math.random() * vertGrid.length)]);
    square[randomVertHole[x]].classList.add("vertHoles");
  }

  /* add cover */
  
  const trapGrid = document.querySelectorAll(".trapBoard");
  
  for (let i = 0; i < trapGrid.length; i++) {
    trapGrid[i].classList.add("dot");
  }

  /* add controller */

  /* Horyzontal controller */

  

  
});

/* © copyright Michaël Mageot all right reserved */
