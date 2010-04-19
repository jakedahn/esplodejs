void setup() {
  size( 500, 500 );
  strokeWeight( 1 );
  colorMode(RGB)
  frameRate( 30 );
}

void draw(){ 
  fill(0, 25)
  rect( 0, 0, 500, 500 )
}
void mouseMoved() {
  string color = "" + getColor();

  console.log(color);
  smooth();
  fill(color);
  ellipse(Math.random()*1000, Math.random()*1000, 50, 50)
  
}

function getColor() {
  bits = {"0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"};
  string[] randomColor = new string[6];
  for (i=0;i<6;i++) {
    randomColor[i] = bits[Math.round(Math.random()*14)].toUpperCase();
  }
  fillColor = "#"+randomColor[0] + randomColor[1] + randomColor[2] + randomColor[3] + randomColor[4] + randomColor[5];
  return fillColor;
}