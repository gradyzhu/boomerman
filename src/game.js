const Player = require("./player.js");
const Map = require("./map.js");

class Game {
  constructor({ctx, canvas}) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.start();
  }

  start() {
    let player = new Player({ 
      pos: [50, 50], 
      vel: [10, 10], 
      length: 50, 
      color: "blue", 
      canvas: canvas,
      ctx: this.ctx, 
    });

    document.addEventListener('keydown', function(e) {
      player.move(e);
    });

    let map = new Map({canvas: canvas, ctx: this.ctx});
    // let obs = new Obstacle({canvas: canvas, ctx: this.ctx});
  }
}

module.exports = Game;