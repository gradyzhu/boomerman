const Player = require("./player.js");
const AIPlayer = require("./ai_player.js");
const Map = require("./map.js");

class Game {
  constructor({ctx, canvas}) {
    this.ctx = ctx;
    this.canvas = canvas;
    this.map = new Map({canvas: canvas, ctx: this.ctx});
    this.start();
  }

  start() {
    let player = new Player({ 
      height: 50,  
      canvas: canvas,
      ctx: this.ctx, 
      map: this.map
    });

    document.addEventListener('keydown', function(e) {
      player.move(e);
    });
  }

  
}

module.exports = Game;