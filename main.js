
var canvas = document.createElement("canvas");

canvas.width = 420;
canvas.height = 690;

document.body.appendChild(canvas);

var context = canvas.getContext("2d");

context.fillStyle = "#00ffff";
context.fillRect(10, 10, 20, 20);