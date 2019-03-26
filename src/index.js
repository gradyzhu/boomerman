const Game = require("./game.js");

document.addEventListener("DOMContentLoaded", function(event) {
  var canvas = document.getElementById("canvas");
  var c = canvas.getContext("2d");
  
  new Game({ctx: c, canvas: canvas});
});

console.log("webpack is working!");

