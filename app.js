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

  const Board = [];
  const TrapBoard = [];

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

  const squares = document.querySelectorAll("#grid div");

  /* color the board in black */

  for (let j = 0; j < width - 2 * border; j++) {
    for (let i = border + border * width; i <= border + border * width + width - 2 * border - 1; i++) {

      squares[i + j * width].setAttribute("class", "board");
      Board.push(squares[i + j * width]);


    }
  }

  /* color the trapBoard in green */

  for (let j = 0; j < width - 2 * trapBoard; j++) {
    for (let i = trapBoard + trapBoard * width; i < trapBoard + trapBoard * width + width - 2 * trapBoard; i++) {

      squares[i + j * width].setAttribute("class", "trapBoard");
      TrapBoard.push(squares[i + j * width]);

    }
  }

  /* horGrid's creation */

  for (let j = 0; j < width - 2 * trapBoard; j++) {
    for (let i = trapBoard + trapBoard * width; i < trapBoard + trapBoard * width + width - 2 * trapBoard; i++) {

      horGrid.push(i + j * width);

    }
  }

  for (let x = 0; x < (board * board) / 2; x++) {

    randomHorHole.push(horGrid[getRandomNumber(horGrid.length)]);
    squares[randomHorHole[x]].classList.add("horHoles");

  }

  /* vertGrid's creation */

  for (let j = 0; j < width - 2 * trapBoard; j++) {
    for (let i = trapBoard + trapBoard * width; i < trapBoard + trapBoard * width + width - 2 * trapBoard; i++) {

      vertGrid.push(i + j * width);

    }
  }

  for (let x = 0; x < (board * board) / 2; x++) {

    randomVertHole.push(vertGrid[getRandomNumber(vertGrid.length)]);
    squares[randomVertHole[x]].classList.add("vertHoles");

  }

  /* add cover */

  // const trapGrid = document.querySelectorAll(".trapBoard");

  for (let i = 0; i < TrapBoard.length; i++) {

    TrapBoard[i].classList.add("dot");

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

      vertCont.push(squares[i + j * width]);

    }
  }

  for (let j = width - border; j < width; j++) {
    for (let i = trapBoard; i < width - trapBoard; i++) {

      vertCont.push(squares[i + j * width]);

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

      horCont.push(squares[x + y]);

    }
  }

  for (x = width - trapBoard + 1; x < width; x++) {
    for (y = trapBoard * width; y < (width - trapBoard) * width; y += width) {

      horCont.push(squares[x + y]);

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
      vertCont[x + 4 * board].addEventListener("mousedown", () => {
        mouveVertCont(vertCont[x + 4 * board]);
      }, { once: true });
    }
    if (randomVertContPosition[x] == 1) {
      vertCont[x].addEventListener("mousedown", () => {
        mouveVertCont(vertCont[x + 0 * board]);
      }, { once: true });
      vertCont[x + 5 * board].addEventListener("mousedown", () => {
        mouveVertCont(vertCont[x + 5 * board]);
      }, { once: true });
    }
    if (randomVertContPosition[x] == 2) {
      vertCont[x + 1 * board].addEventListener("mousedown", () => {
        mouveVertCont(vertCont[x + 1 * board]);
      }, { once: true });
    }
  }

  // /* horizontal controller */

  for (let x = 0; x < horCont.length; x++) {
    if (randomHorContPosition[x] == 0) {
      horCont[x + 4 * board].addEventListener("mousedown", () => {
        mouveHorCont(horCont[x + 4 * board]);
      }, { once: true });
    }
    if (randomHorContPosition[x] == 1) {
      horCont[x].addEventListener("mousedown", () => {
        mouveHorCont(horCont[x + 0 * board]);
      }, { once: true });
      horCont[x + 5 * board].addEventListener("mousedown", () => {
        mouveHorCont(horCont[x + 5 * board]);
      }, { once: true });
    }
    if (randomHorContPosition[x] == 2) {
      horCont[x + 1 * board].addEventListener("mousedown", () => {
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
      mouvHorLineLeft(Number(div.id));
    }
    /* right side */
    if (div.id % width > width / 2) {
      moveHorLineRight(Number(div.id));
    }
  }

  /* mouvVertLineUp */
  function mouvVertLineUp(divid) {
    if (divid - width > 0) {

      squares[divid].classList.add("red");

      squares[divid - width].addEventListener("mousedown", () => {
        mouveVertCont(squares[divid - width]);
      }, { once: true });

      squares[divid + 13 * width].classList.remove("red");

      squares[divid + 13 * width].addEventListener("mousedown", () => {
        mouveVertCont(squares[divid + 13 * width]);
      }, { once: true });

      for (let i = 2; i <= 12; i++) {
        if (squares[divid + i * width].classList.contains("vertHoles")) {
          squares[divid + i * width].classList.remove("vertHoles");
          squares[divid + (i - 1) * width].classList.add("vertHoles");
        }
      }
    } else {
      squares[divid].classList.add("red");
      squares[divid + 13 * width].classList.remove("red");
      squares[divid + 13 * width].addEventListener("mousedown", () => {
        mouveVertCont(squares[divid + 13 * width]);
      }, { once: true });

      for (let i = 2; i <= 12; i++) {
        if (squares[divid + i * width].classList.contains("vertHoles")) {
          squares[divid + i * width].classList.remove("vertHoles");
          squares[divid + (i - 1) * width].classList.add("vertHoles");
        }
      }
    }
  }

  /* mouvVertLineDown */

  function mouvVertLineDown(divid) {
    if (divid + width < 224) {
      squares[divid].classList.add("red");

      squares[divid + width].addEventListener("mousedown", () => {
        mouveVertCont(squares[divid + width]);
      }, { once: true });

      squares[divid - 13 * width].classList.remove("red");

      squares[divid - 13 * width].addEventListener("mousedown", () => {
        mouveVertCont(squares[divid - 13 * width]);
      }, { once: true });

      for (let i = 1; i <= 12; i++) {
        if (squares[divid - i * width].classList.contains("vertHoles")) {
          squares[divid - i * width].classList.remove("vertHoles");
          squares[divid - (i - 1) * width].classList.add("vertHoles");
        }
      }
    } else {
      squares[divid].classList.add("red");
      squares[divid - 13 * width].classList.remove("red");
      squares[divid - 13 * width].addEventListener("mousedown", () => {
        mouveVertCont(squares[divid - 13 * width]);
      }, { once: true });

      for (let i = 1; i <= 12; i++) {
        if (squares[divid - i * width].classList.contains("vertHoles")) {
          squares[divid - i * width].classList.remove("vertHoles");
          squares[divid - (i - 1) * width].classList.add("vertHoles");
        }
      }
    }
  }

  /* mouvHorLineRight */

  function moveHorLineRight(divid) {
    if (divid % width == 13) {
      squares[divid].classList.add("yellow");
      squares[divid + 1].addEventListener("mousedown", () => {
        mouveHorCont(squares[divid + 1]);
      }, { once: true });
      squares[divid - 13].classList.remove("yellow");
      squares[divid - 13].addEventListener("mousedown", () => {
        mouveHorCont(squares[divid - 13]);
      }, { once: true });

      for (let i = 1; i <= 12; i++) {
        if (squares[divid - i].classList.contains("horHoles")) {
          squares[divid - i].classList.remove("horHoles");
          squares[divid - (i - 1)].classList.add("horHoles");
        }
      }

    }
    else {
      squares[divid].classList.add("yellow");
      squares[divid - 13].classList.remove("yellow");
      squares[divid - 13].addEventListener("mousedown", () => {
        mouveHorCont(squares[divid - 13]);
      }, { once: true });

      for (let i = 1; i <= 12; i++) {
        if (squares[divid - i].classList.contains("horHoles")) {
          squares[divid - i].classList.remove("horHoles");
          squares[divid - (i - 1)].classList.add("horHoles");
        }
      }
    }
  }

  /* mouvHorLineLeft */

  function mouvHorLineLeft(divid) {
    if (divid % width == 1) {

      squares[divid].classList.add("yellow");
      squares[divid - 1].addEventListener("mousedown", () => {
        mouveHorCont(squares[divid - 1]);
      }, { once: true });
      squares[divid + 13].classList.remove("yellow");
      squares[divid + 13].addEventListener("mousedown", () => {
        mouveHorCont(squares[divid + 13]);
      }, { once: true });

      for (let i = 1; i <= 12; i++) {
        if (squares[divid + i].classList.contains("horHoles")) {
          squares[divid + i].classList.remove("horHoles");
          squares[divid + (i - 1)].classList.add("horHoles");
        }
      }
    } else {
      squares[divid].classList.add("yellow");
      squares[divid + 13].classList.remove("yellow");
      squares[divid + 13].addEventListener("mousedown", () => {
        mouveHorCont(squares[divid + 13]);
      }, { once: true });

      for (let i = 1; i <= 12; i++) {
        if (squares[divid + i].classList.contains("horHoles")) {
          squares[divid + i].classList.remove("horHoles");
          squares[divid + (i - 1)].classList.add("horHoles");
        }
      }
    }
  }

  /* add marble to the board */

  function addMarble(squareNumb, color) {
    const Marble = document.createElement("canvas");
    Marble.innerHTML = "Canvas is not supported";
    Marble.setAttribute("class", "canvas " + color);
    Marble.setAttribute("width", "20");
    Marble.setAttribute("height", "20");


    const marbleCtx = Marble.getContext("2d");
    marbleCtx.fillStyle = color;
    marbleCtx.beginPath();
    marbleCtx.arc(10, 10, 4, 0, Math.PI * 2, true);
    marbleCtx.fill();

    squares[squareNumb].appendChild(Marble);
  }

  let randomNumber1
  let randomNumber2


  for (let j = 0; j < 5; j++) {
    randomNumber1 = getRandomNumber(49)
    randomNumber2 = getRandomNumber(49)

    while (randomNumber1 == randomNumber2) {
      randomNumber2 = getRandomNumber(49);
    }

    console.log(randomNumber1);
    console.log(randomNumber2);

    addMarble(TrapBoard[randomNumber1].id, "rgb(255, 237, 80)");
    addMarble(TrapBoard[randomNumber2].id, "rgb(31, 236, 243)");
  }


});
