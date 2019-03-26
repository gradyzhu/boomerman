
class Player {
  constructor({height, ctx, canvas, map}) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = 50;
    this.y = 50;
    this.dx = 10;
    this.dy = 10;
    this.height = height;
    this.color = "yellow";
    this.map = map;
    this.draw();
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.height, this.height);
    this.ctx.stroke();
  }

  move(e) {
    this.ctx.clearRect(this.x, this.y, this.height, this.height); 
    if (e.keyCode==39 && !(this.collision())) {
      this.x += this.dx;
    }
    if (e.keyCode==37 && !(this.collision())) { 
      this.x -= this.dx;
    } 
    if (e.keyCode==40 && !(this.collision())) {
      this.y += this.dy;
    } 
    if (e.keyCode==38 && !(this.collision())) {
      this.y -= this.dy;
    }
    this.draw();
  }

  collision() {
    let objs = this.map.mapObjects;
    for (let i = 0; i < objs.length; i++) {
      if (
        this.x < objs[i].x + objs[i].width &&
        this.x + this.height > objs[i].x &&
        this.y < objs[i].y + objs[i].height &&
        this.y + this.height > objs[i].y) {
          return true;
      }
    }
  }
  // drop() {
  //   bomb = newBomb();
  // }
}

module.exports = Player;


