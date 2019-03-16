class Obstacle {
  constructor(map, ctx) {
    this.map = map;
    this.ctx = ctx;
    this.drawObstacles();
  }

  drawObstacle(pos) {
    this.ctx.beginPath();
    this.ctx.fillStyle = "#848685";
    this.ctx.fillRect(pos[0], pos[1], 50, 50);
    this.ctx.stroke();
  }  

  drawObstacles() {
    for (let i = 0; i < this.map.length; i++) {
      for (let j = 0; j < this.map[0].length; j++) {
        if (this.map[i][j] != 0) {
          this.drawObstacle([j * 50, i * 50]);
        }
      }
    }
  }
}

module.exports = Obstacle;