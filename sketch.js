function setup() {
    createCanvas(400, 400);
    background("purple");
  } 
  function draw() {
   
  
    stroke("green");
    fill("black");
  
    // console.log(mouseIsPressed)
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 30, 30);
    }
  }
  