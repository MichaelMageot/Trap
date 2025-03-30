document.addEventListener("DOMContentLoaded", () => {
  const result = document.getElementById("result");
  const timeLeft = document.getElementById("time-left");

  const grid = document.getElementById("grid");

  const width = 15;
  const border = 3;
  const board = 7;
  const trapBoard = border + 1;

  var horGrid = [];
  var vertGrid = [];
  var randomVertHole = [];
  var randomHorHole = [];

  function getRandomNumber(number) {
    return Math.floor(Math.random() * number);
  }

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
    for (
      let i = border + border * width;
      i <= border + border * width + width - 2 * border - 1;
      i++
    ) {
      square[i + j * width].setAttribute("class", "board");
    }
  }

  /* color the trapBoard in green */

  for (let j = 0; j < width - 2 * trapBoard; j++) {
    for (
      let i = trapBoard + trapBoard * width;
      i < trapBoard + trapBoard * width + width - 2 * trapBoard;
      i++
    ) {
      square[i + j * width].setAttribute("class", "trapBoard");
    }
  }

  /* horGrid's creation */

  for (let j = 0; j < width - 2 * trapBoard; j++) {
    for (
      let i = trapBoard + trapBoard * width;
      i < trapBoard + trapBoard * width + width - 2 * trapBoard;
      i++
    ) {
      horGrid.push(i + j * width);
    }
  }

  for (let x = 0; x < (board * board) / 2; x++) {
    randomHorHole.push(horGrid[getRandomNumber(horGrid.length)]);
    square[randomHorHole[x]].classList.add("horHoles");
  }

  /* vertGrid's creation */

  for (let j = 0; j < width - 2 * trapBoard; j++) {
    for (
      let i = trapBoard + trapBoard * width;
      i < trapBoard + trapBoard * width + width - 2 * trapBoard;
      i++
    ) {
      vertGrid.push(i + j * width);
    }
  }

  for (let x = 0; x < (board * board) / 2; x++) {
    randomVertHole.push(vertGrid[getRandomNumber(vertGrid.length)]);
    square[randomVertHole[x]].classList.add("vertHoles");
  }

  /* add cover */

  const trapGrid = document.querySelectorAll(".trapBoard");

  for (let i = 0; i < trapGrid.length; i++) {
    trapGrid[i].classList.add("dot");
  }

  /* add controller */

  var randomVertContPosition = [];
  var randomHorContPosition = [];

  function fillContPosition(ranContPosition) {
    for (let i = 0; i < board; i++) {
      var contPosition = getRandomNumber(3);
      ranContPosition.push(contPosition);
    }
    return ranContPosition;
  }

  randomHorContPosition = fillContPosition(randomHorContPosition);
  randomVertContPosition = fillContPosition(randomVertContPosition);

  /* verticale controller */

  /* get verticale controller */

  let vertCont = [];

  for (let j = 0; j < border; j++) {
    for (let i = trapBoard; i < width - trapBoard; i++) {
      vertCont.push(square[i + j * width]);
    }
  }

  for (let j = width - border; j < width; j++) {
    for (let i = trapBoard; i < width - trapBoard; i++) {
      vertCont.push(square[i + j * width]);
    }
  }

  /* color vertical controler in red */

  for (let x = 0; x < board; x++) {
    if (randomVertContPosition[x] == 0) {
      vertCont[x].setAttribute("class", "red");
      vertCont[x + board].setAttribute("class", "red");
      vertCont[x + 2 * board].setAttribute("class", "red");
      vertCont[x + 3 * board].setAttribute("class", "red");
    }
    if (randomVertContPosition[x] == 1) {
      vertCont[x + board].setAttribute("class", "red");
      vertCont[x + 2 * board].setAttribute("class", "red");
      vertCont[x + 3 * board].setAttribute("class", "red");
      vertCont[x + 4 * board].setAttribute("class", "red");
    }
    if (randomVertContPosition[x] == 2) {
      vertCont[x + 2 * board].setAttribute("class", "red");
      vertCont[x + 3 * board].setAttribute("class", "red");
      vertCont[x + 4 * board].setAttribute("class", "red");
      vertCont[x + 5 * board].setAttribute("class", "red");
    }
  }

  /* horizontal controller */

  /* get horizontal controller */

  let horCont = [];

  for (x = 0; x < border; x++) {
    for (y = trapBoard * width; y < (width - trapBoard) * width; y += width) {
      horCont.push(square[x + y]);
    }
  }

  for (x = width - trapBoard + 1; x < width; x++) {
    for (y = trapBoard * width; y < (width - trapBoard) * width; y += width) {
      horCont.push(square[x + y]);
    }
  }

  /* color vertical controler in yellow */

  for (let x = 0; x < board; x++) {
    if (randomHorContPosition[x] == 0) {
      horCont[x].setAttribute("class", "yellow");
      horCont[x + board].setAttribute("class", "yellow");
      horCont[x + 2 * board].setAttribute("class", "yellow");
      horCont[x + 3 * board].setAttribute("class", "yellow");
    }
    if (randomHorContPosition[x] == 1) {
      horCont[x + board].setAttribute("class", "yellow");
      horCont[x + 2 * board].setAttribute("class", "yellow");
      horCont[x + 3 * board].setAttribute("class", "yellow");
      horCont[x + 4 * board].setAttribute("class", "yellow");
    }
    if (randomHorContPosition[x] == 2) {
      horCont[x + 2 * board].setAttribute("class", "yellow");
      horCont[x + 3 * board].setAttribute("class", "yellow");
      horCont[x + 4 * board].setAttribute("class", "yellow");
      horCont[x + 5 * board].setAttribute("class", "yellow");
    }
  }

  /* add event on controller */

  /* vertical controller */

  for (let x = 0; x < vertCont.length; x++) {
    if (randomVertContPosition[x] == 0) {
      vertCont[x + 4 * board].addEventListener("mousedown", moveVertHandler1 = () => {
        mouveVertCont(vertCont[x + 4 * board]);
      }, { once: true });
    }
    if (randomVertContPosition[x] == 1) {
      vertCont[x].addEventListener("mousedown", moveVertHandler2 = () => {
        mouveVertCont(vertCont[x + 0 * board]);
      }, { once: true });
      vertCont[x + 5 * board].addEventListener("mousedown", moveVertHandler3 = () => {
        mouveVertCont(vertCont[x + 5 * board]);
      }, { once: true });
    }
    if (randomVertContPosition[x] == 2) {
      vertCont[x + 1 * board].addEventListener("mousedown", moveVertHandler4 = () => {
        mouveVertCont(vertCont[x + 1 * board]);
      }, { once: true });
    }
  }

  // /* horizontal controller */

  for (let x = 0; x < horCont.length; x++) {
    if (randomHorContPosition[x] == 0) {
      horCont[x + 4 * board].addEventListener("mousedown", moveHorHandler1 = () => {
        mouveHorCont(horCont[x + 4 * board]);
      }, { once: true });
    }
    if (randomHorContPosition[x] == 1) {
      horCont[x].addEventListener("mousedown", moveHorHandler2 = () => {
        mouveHorCont(horCont[x + 0 * board]);
      }, { once: true });
      horCont[x + 5 * board].addEventListener("mousedown", moveHorHandler3 = () => {
        mouveHorCont(horCont[x + 5 * board]);
      }, { once: true });
    }
    if (randomHorContPosition[x] == 2) {
      horCont[x + 1 * board].addEventListener("mousedown", moveHorHandler4 = () => {
        mouveHorCont(horCont[x + 1 * board]);
      }, { once: true });
    }
  }

  /* move line */

  /* vertical line */

  function mouveVertCont(div) {
    /* up side */

    if (div.id < 112) {
      mouvVertLineUp(Number(div.id));
    }

    /* down side */
    if (div.id > 112) {
      mouvVertLineDown(Number(div.id));
    }
  }

  /* horyzontal line */

  function mouveHorCont(div) {
    /* left side */
    if (div.id % width < width / 2) {
      console.log("left");
    }
    /* right side */
    if (div.id % width > width / 2) {
      console.log("right");
    }
  }
  
  /* mouvVertLineUp */
  function mouvVertLineUp(divid) {
    if (divid - width > 0) {

      square[divid].classList.add("red");

      square[divid - width].addEventListener("mousedown", () => {
        mouveVertCont(square[divid - width]);
      }, { once: true });

      square[divid + 13 * width].classList.remove("red");

      square[divid + 13 * width].addEventListener("mousedown", () => {
        mouveVertCont(square[divid + 13 * width]);
      }, { once: true });

      for (let i = 2; i <= 12; i++) {
        if (square[divid + i * width].classList.contains("vertHoles")) {
          console.log("ok");
          square[divid + i * width].classList.remove("vertHoles");
          square[divid + (i - 1) * width].classList.add("vertHoles");
        }
      }
    }else{
      square[divid].classList.add("red");
      square[divid + 13 * width].classList.remove("red");
      square[divid + 13 * width].addEventListener("mousedown", () => {
        mouveVertCont(square[divid + 13 * width]);
      }, { once: true });
      
      for (let i = 2; i <= 12; i++) {
        if (square[divid + i * width].classList.contains("vertHoles")) {
          square[divid + i * width].classList.remove("vertHoles");
          square[divid + (i - 1) * width].classList.add("vertHoles");
        }
      }
    }
  }
  
  /* mouvVertLineDown */

  function mouvVertLineDown(divid) {
    if (divid + width < 224) {
      square[divid].classList.add("red");

      square[divid + width].addEventListener("mousedown", () => {
        mouveVertCont(square[divid + width]);
      }, { once: true });

      square[divid - 13 * width].classList.remove("red");

      square[divid - 13 * width].addEventListener("mousedown", () => {
        mouveVertCont(square[divid - 13 * width]);
      }, { once: true });

      for (let i = 1; i <= 12; i++) {
        if(square[divid - i * width].classList.contains("vertHoles")){
          square[divid - i * width].classList.remove("vertHoles");
          square[divid - (i - 1) * width].classList.add("vertHoles");
        }
      }
    }else{
      square[divid].classList.add("red");
      square[divid - 13 * width].classList.remove("red");
      square[divid - 13 * width].addEventListener("mousedown", () => {
        mouveVertCont(square[divid - 13 * width]);
      }, { once: true });
      
      for (let i = 1; i <= 12; i++) {
        if(square[divid - i * width].classList.contains("vertHoles")){
          square[divid - i * width].classList.remove("vertHoles");
          square[divid - (i - 1) * width].classList.add("vertHoles");
        }
      }
    }
  }
  


});
