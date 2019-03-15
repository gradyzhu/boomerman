
class Player {
  constructor({pos, vel, length, color, ctx, canvas}) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = pos[0];
    this.y = pos[1];
    this.dx = vel[0];
    this.dy = vel[1];
    this.length = length;
    this.color = color;
    this.draw();
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.length, this.length);
    this.ctx.stroke();
  }

  move(e) {
    this.ctx.clearRect(this.x, this.y, this.length, this.length);

    if (e.keyCode==39) this.x += this.dx;
    if (e.keyCode==37) this.x -= this.dx;
    if (e.keyCode==40) this.y += this.dy;
    if (e.keyCode==38) this.y -= this.dy;
    
    this.draw();
    // if (this.x < 0) this.x += this.dx;
    // if (this.x > canvas.width - this.length) {
    //   this.x -= this.dx;
    // }
    // if (this.y < 0) this.y = this.y + this.dy;
    // if (this.y > canvas.height - this.length) {
    //   this.y -= this.dy;
    // }
  }

  // drop() {
  //   bomb = newBomb();
  // }
}

module.exports = Player;


