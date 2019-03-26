const Obstacle = require("./obstacle.js");
const Crate = require("./crate.js");

class Map {
  constructor({canvas, ctx}) {
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

    this.ctx = ctx;
    this.canvas = canvas;
    this.mapObjects = [];

    let obs = new Obstacle(this.map, this.ctx);
    let crates = new Crate(this.map, this.ctx);
    obs.image.onload = () => obs.drawAll();
    crates.image.onload = () => crates.drawAll();
    this.filterMapObjects();
    console.log(this.mapObjects);
  }

  filterMapObjects() {
    for (let i = 0; i < this.map.length; i++) {
      for (let j = 0; j < this.map[0].length; j++) {
        if (this.map[i][j] !== 0) {
          this.mapObjects.push({x: j * 50, y: i * 50, width: 50, height: 50});
        }
      }
    }
  }
  
}

module.exports = Map;

