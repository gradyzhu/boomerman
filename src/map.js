
class Map {
  constructor({canvas, ctx}) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.map = [
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ];
    this.drawObstacles();
  }

  draw(pos) {
    this.ctx.beginPath();
    this.ctx.fillStyle = "gray";
    this.ctx.fillRect(pos[0], pos[1], 50, 50);
    this.ctx.stroke();
  }  

  drawObstacles() {
    for (let i = 0; i < this.map.length; i++) {
      for (let j = 0; j < this.map[0].length; j++) {
        if (this.map[i][j] != 0) {
          this.draw([j * 50, i * 50]);
        }
      }
    }
  }
}

module.exports = Map;

