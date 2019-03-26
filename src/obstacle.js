class Obstacle {
  constructor(map, ctx) {
    this.map = map;
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = "/Users/grady/Desktop/boomerman/images/bm_sprites.png";
  }

   draw(pos) {
    this.ctx.drawImage(this.image, 0, 0, 50, 70, pos[0], pos[1], 50, 70);
  }  

  drawAll() {
    for (let i = 0; i < this.map.length; i++) {
      for (let j = 0; j < this.map[0].length; j++) {
        if (this.map[i][j] != 0) {
          this.draw([j * 50, i * 50]);
        }
      }
    }
  }
}

module.exports = Obstacle;