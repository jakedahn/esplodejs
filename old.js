// Global variables
float radius = 50.0;
int X, Y;
int nX, nY;
int delay = 16;

// Setup the Processing Canvas
void setup(){
  size( 500, 500 );
  strokeWeight( 10 );
  frameRate( 15 );
  X = width / 2;
  Y = width / 2;
  nX = X;
  nY = Y;  
}

// Main draw loop
void draw(){

  radius = radius + sin( frameCount / 4 );

  // Track circle to new destination
  X+=(nX-X)/delay;
  Y+=(nY-Y)/delay;

  // Fill canvas grey
  background( 100 );

  // Set fill-color to blue
  fill( 0, 121, 184 );

  // Set stroke-color white
  stroke(255); 

  // Draw circle
  ellipse( X, Y, radius, radius );                  
}


// Set circle's next destination
void mouseMoved(){
  nX = mouseX;
  nY = mouseY;  
}

void createEllipse(){
  
  
  Arra colorArray = [0xFFFF33, 0xFFFFFF, 0x79DCF4, 0xFF3333, 0xFFCC33, 0x99CC33];
  var randomColor = Math.floor(Math.random()*colorArray.length);
  
  var ellipse:Sprite = new Sprite();

  ellipse.graphics.beginFill(colorArray[randomColor]);
  ellipse.graphics.drawCircle(Math.random()*1000, Math.random()*1000, 100);    

  ellipse.alpha = 1;
  ellipse.scaleX = 0;
  ellipse.scaleY = 0;
  
  fill(colorArray[randomColor])
  ellipse( X, Y, radius, radius )
}
