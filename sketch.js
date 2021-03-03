function setup() {
  createCanvas(700, 500);
}

function draw() {
  background("orange");
  rect(360,150,100,2000);
  fill("black");
  rect(470,200,100,1500);
  fill("black");
  rect(580,250,100,1000);
  fill("black");
  rect(260,150,100,2000);
  fill("black");
  rect(140,200,100,1500);
  fill("black");
  rect(30,250,100,1000);
  fill("black");
  triangle(30,250,80,200,130,250);
  fill("black");
  triangle(140,200,190,150,240,200);
  fill("black");
  triangle(260,150,360,50,460,150);
  fill("black");
  triangle(570,200,520,150,470,200);
  fill("black");  
  triangle(680,250,630,200,580,250);
  fill("black");  
  line(360,50,360,0);
  stroke("black");
  strokeWeight(4);
}