function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  funShape("plum", "mediumorchid");
  
  }

function funShape(changeFill,changeStroke){
    
  if(mouseIsPressed){
   scale(.5);
  } else if (mouseX < 100){
    fill(changeFill);
    stroke(changeStroke);
  } else if (mouseX >=100 && mouseX < 300){
    fill("mediumaquamarine");
    stroke("seagreen");
  } else {
    fill("pink");
    stroke("palevioletred");
  }
    
  rect(50,50,170,100)
  ellipse(70,60,85,85)
  ellipse(250,100,100,100) 
  
}
