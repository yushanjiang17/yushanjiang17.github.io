function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
  }
  
  function draw() {
    // Calculate distance from the mouse to the center of the screen
    let d = dist(mouseX, mouseY, width / 2, height / 2);
    let maxDist = dist(0, 0, width / 2, height / 2);
    
    // Normalize distance
    let norm = map(d, 0, maxDist, 1, 0);
    
    // Determine color based on distance
    let red = map(norm, 0, 1, 255, 0);
    let green = map(norm, 0, 1, 0, 255);
    let blue = map(norm, 0, 1, 0, 0);
  
    // Background changes color based on mouse position
    background(red, green, blue);
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
  