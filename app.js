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

  function fillContPosition(ranContPosition){
    for(let i = 0; i < 7; i++){
      var contPosition = getRandomNumber(3);
      ranContPosition.push(contPosition)
    }
    return ranContPosition
  }

  randomHorContPosition = fillContPosition(randomHorContPosition);
  randomVertContPosition = fillContPosition(randomVertContPosition);

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
      vertCont[x + 2 * 7].setAttribute("class", "red");
      vertCont[x + 3 * 7].setAttribute("class", "red");
    }
    if(randomVertContPosition[x] == 1){
      vertCont[x + 7].setAttribute("class", "red");
      vertCont[x + 2 * 7].setAttribute("class", "red");
      vertCont[x + 3 * 7].setAttribute("class", "red");
      vertCont[x + 4 * 7].setAttribute("class", "red");
    }
    if(randomVertContPosition[x] == 2){
      vertCont[x + 2 * 7].setAttribute("class", "red");
      vertCont[x + 3 * 7].setAttribute("class", "red");
      vertCont[x + 4 * 7].setAttribute("class", "red");
      vertCont[x + 5 * 7].setAttribute("class", "red");
    }
  }

  /* horizontal controller */

  /* get horizontal controller */

  let horCont = []

  for(x = 0; x < border; x++){
    for(y = trapBorder * width; y < (width - trapBorder) * width; y += width){
      horCont.push(square[x + y]);
    }
  }

  for(x = width - trapBorder + 1; x < width; x++){
    for(y = trapBorder * width; y < (width - trapBorder) * width; y += width){
      horCont.push(square[x + y]);
    }
  }

  /* color vertical controler in yellow */

  for(let x = 0; x < 7; x++){
    if(randomHorContPosition[x] == 0){
      horCont[x].setAttribute("class", "yellow");
      horCont[x + 7].setAttribute("class", "yellow");
      horCont[x + 2 * 7].setAttribute("class", "yellow");
      horCont[x + 3 * 7].setAttribute("class", "yellow");
    }
    if(randomHorContPosition[x] == 1){

      horCont[x + 7].setAttribute("class", "yellow");
      horCont[x + 2 * 7].setAttribute("class", "yellow");
      horCont[x + 3 * 7].setAttribute("class", "yellow");
      horCont[x + 4 * 7].setAttribute("class", "yellow");
    }
    if(randomHorContPosition[x] == 2){
      horCont[x + 2 * 7].setAttribute("class", "yellow");
      horCont[x + 3 * 7].setAttribute("class", "yellow");
      horCont[x + 4 * 7].setAttribute("class", "yellow");
      horCont[x + 5 * 7].setAttribute("class", "yellow");
    }
  }
  
  /* add event on controller */
  
  /* vertical controller */
  
  for(let x = 0; x < vertCont.length; x++){
    if(randomVertContPosition[x] == 0){
      vertCont[x + 4 * 7].addEventListener('mousedown', () => {
        mouveVertCont(vertCont[x + 4 * 7])
    });
    }
    if(randomVertContPosition[x] == 1){
      vertCont[x].addEventListener('mousedown', () => {
        mouveVertCont(vertCont[x + 0 * 7])
      });
      vertCont[x + 5 * 7].addEventListener('mousedown', () => {
        mouveVertCont(vertCont[x + 5 * 7])
      });
    }
    if(randomVertContPosition[x] == 2){
      vertCont[x + 1 * 7].addEventListener('mousedown', () => {
        mouveVertCont(vertCont[x + 1 * 7])
    });
    }
  }

  // /* horizontal controller */
  
  for(let x = 0; x < horCont.length; x++){
    if(randomHorContPosition[x] == 0){
      horCont[x + 4 * 7].addEventListener('mousedown', () => {
        mouveHorCont(horCont[x + 4 * 7])
      });
    }
    if(randomHorContPosition[x] == 1){
      horCont[x].addEventListener('mousedown', () => {
        mouveHorCont(horCont[x + 0 * 7])
      });
      horCont[x + 5 * 7].addEventListener('mousedown', () => {
        mouveHorCont(horCont[x + 5 * 7])
      });
    }
    if(randomHorContPosition[x] == 2){
      horCont[x + 1 * 7].addEventListener('mousedown', () => {
        mouveHorCont(horCont[x + 1 * 7])
    });
    }
  }

  /* move line */

  /* vertical line */

  function mouveVertCont(div){

    /* up side */
    
    if(div.id < 112){
        mouvVertLineUp(div.id);
    }


    /* down side */
    if(div.id > 112){
      console.log("down");
    }
  }

  /* horyzontal line */

  
  function mouveHorCont(div){
    /* left side */
    if(div.id % width < width / 2){
      console.log("left");
    }
    /* right side */
    if(div.id % width > width / 2){
      console.log("right");
    }
  }

  function mouvVertLineUp(divid){
    if(divid - width > 0){
    square[divid].removeEventListener('mousedown', () => {
      mouveVertCont(square[divid]);
    });

    square[divid].classList.add("red");

    square[divid - width].addEventListener('mousedown', () => {
      mouveVertCont(square[divid - width]);
    });
    // square[divid + 4 * width].classList.remove("red");
    square[Number(divid) + 13 * width].classList.remove("red");

    square[Number(divid) + 13 * width].addEventListener('mousedown', () => {
      mouveVertCont(square[Number(divid) + 13 * width]);
    })

    for(let i = 4; i <= 9; i++){
      if(square[Number(divid) + i * width].classList.contains('vertHoles')){
        square[Number(divid) + i * width].classList.remove('vertHoles');
        square[Number(divid) + (i - 1) * width].classList.add('vertHoles');
      }

    }


    }

  }



});

