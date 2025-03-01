document.addEventListener("DOMContentLoaded", () => {
  const result = document.getElementById("result");
  const timeLeft = document.getElementById("time-left");

  const grid = document.getElementById("grid");

  const width = 15;
  const border = 3;
  const board = 7;
  const trapBorder = border + 1;

  var horGrid = [];
  var vertGrid = [];
  var randomVertHole = [];
  var randomHorHole = [];

  function getRandomNumber(number){
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
    randomHorHole.push(horGrid[getRandomNumber(horGrid.length)]);
    square[randomHorHole[x]].classList.add("horHoles");
  }
  
  /* vertGrid's creation */
  
  for (let j = 0; j < width - 2 * trapBorder; j++) {
    for ( let i = trapBorder + trapBorder * width; i < trapBorder + trapBorder * width + width - 2 * trapBorder; i++ ) {
      vertGrid.push(i + j * width);
    }
  }
  
  for (let x = 0; x < (7 * 7) / 2; x++) {
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

  for (let i = 0; i < 7; i++) {
    var contPosition = getRandomNumber(3);
    randomVertContPosition.push(contPosition);
  }

  for (let i = 0; i < 7; i++) {
    var contPosition = getRandomNumber(3);
    randomHorContPosition.push(contPosition);
  }

  /* verticale controller */

  /* get verticale controller */

  let vertCont = []

  for (let j = 0; j < border; j++) {
    for ( let i = trapBorder; i < (width - trapBorder); i++ ) {
      vertCont.push(square[i + j * width]);
    }
  }
  
  for (let j = width - border; j < width; j++) {
    for ( let i = trapBorder; i < width - trapBorder; i++ ) {
      vertCont.push(square[i + j * width]);
    }
  }

  /* color vertical controler in red */

  for(let x = 0; x < 7; x++){
    if(randomVertContPosition[x] == 0){
      vertCont[x].setAttribute("class", "red");
      vertCont[x + 7].setAttribute("class", "red");
      vertCont[x + 7 + 7].setAttribute("class", "red");
      vertCont[x + 7 + 7 + 7].setAttribute("class", "red");
    }
    if(randomVertContPosition[x] == 1){
      vertCont[x + 7].setAttribute("class", "red");
      vertCont[x + 7 + 7].setAttribute("class", "red");
      vertCont[x + 7 + 7 + 7].setAttribute("class", "red");
      vertCont[x + 7 + 7 + 7 + 7].setAttribute("class", "red");
    }
    if(randomVertContPosition[x] == 2){
      vertCont[x + 7 + 7].setAttribute("class", "red");
      vertCont[x + 7 + 7 + 7].setAttribute("class", "red");
      vertCont[x + 7 + 7 + 7 + 7].setAttribute("class", "red");
      vertCont[x + 7 + 7 + 7 + 7 + 7].setAttribute("class", "red");
    }
  }

  /* horizontal controller */

  /* get horizontal controller */

  let horCont = []

  for(let x = trapBorder * width; x < trapBorder * width + 3; x++){
    for(let y = 0; y < width - 2 * trapBorder; y++){
      horCont.push(square[x + y * width])
    }
  }
  
  for(let x = (width - border); x < (width - border) + 3; x++){
    for(let y = trapBorder; y < trapBorder + board; y++){
      horCont.push(square[x + y * width])
    }
  }

  /* color vertical controler in yellow */

  for(let x = 0; x < 7; x++){
    if(randomHorContPosition[x] == 0){
      horCont[x].setAttribute("class", "yellow");
      horCont[x + 7].setAttribute("class", "yellow");
      horCont[x + 7 + 7].setAttribute("class", "yellow");
      horCont[x + 7 + 7 + 7].setAttribute("class", "yellow");
    }
    if(randomHorContPosition[x] == 1){
      horCont[x + 7].setAttribute("class", "yellow");
      horCont[x + 7 + 7].setAttribute("class", "yellow");
      horCont[x + 7 + 7 + 7].setAttribute("class", "yellow");
      horCont[x + 7 + 7 + 7 + 7].setAttribute("class", "yellow");
    }
    if(randomHorContPosition[x] == 2){
      horCont[x + 7 + 7].setAttribute("class", "yellow");
      horCont[x + 7 + 7 + 7].setAttribute("class", "yellow");
      horCont[x + 7 + 7 + 7 + 7].setAttribute("class", "yellow");
      horCont[x + 7 + 7 + 7 + 7 + 7].setAttribute("class", "yellow");
    }
  }
  
  /* add event on controller */
  
  /* get vertical controller */


  




});

