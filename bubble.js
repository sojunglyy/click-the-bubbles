class Bubble {
    constructor(x, y, r) {
      this.x = x;
      this.y = y;
      this.r = r;
      this.brightness = 0;
      this.bubbleOn = false;
    }
  
    clicked(x, y) {
      let d = dist(x, y, this.x, this.y);
      if (d < this.r) {
        this.bubbleOn = !this.bubbleOn;
      }
    }
  
    move() {
      this.x = this.x + random(-5, 5);
      this.y = this.y + random(-5, 5);
    }
  
    show() {
      if (this.bubbleOn) {
        this.brightness = 255;
      } else {
        this.brightness = 0;
      }
      fill(this.brightness);
      stroke(255);
      strokeWeight(1);
      ellipse(this.x, this.y, this.r * 2);
    }
  }