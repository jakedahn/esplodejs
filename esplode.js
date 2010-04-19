void setup() {
  size( 500, 500 );
  strokeWeight( 1 );
  colorMode(RGB)
  frameRate( 32 );
  background(0)
}

void draw(){ 
  fill(0, 5)
  rect( 0, 0, 500, 500 )
}

void mouseMoved() {
  for (var i=0; i < 2; i++) {
    smooth();
    noStroke()
    fill(getColor(), 80);
    ellipse(Math.random()*500, Math.random()*500, 100, 100)
  }
}

void getColor(){ return color(int(random(255)),int(random(255)),int(random(255))) };