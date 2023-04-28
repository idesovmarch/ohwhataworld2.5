function setup() {
   let myCanvas = createCanvas(400, 400);
   myCanvas.parent('triangle')
  }
  
  function draw() {
    background(220);
    triangle(30, 300, 190, 20, 370, 300);
  }