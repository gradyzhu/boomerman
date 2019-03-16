class Crate {
  constructor(map, ctx) {
    this.map = map;
    this.ctx = ctx;
    this.drawAll();
  }

  draw(pos) {
    this.ctx.beginPath();
    this.ctx.fillStyle = "#9f6343";
    this.ctx.fillRect(pos[0], pos[1], 50, 50);
    this.ctx.stroke();
  }  

  drawAll() {
    let rowValues = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450];
    let colValues = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650]; 

    let crateCount = 0;
    while (crateCount < 25) {
      let row = Math.floor(Math.random() * rowValues.length);
      let col = Math.floor(Math.random() * colValues.length);
      if (this.map[row][col] == 0) {
        this.draw([colValues[col], rowValues[row]]);
        this.map[row][col] = 2;
        crateCount++;
      }
    }
  }
}

module.exports = Crate;