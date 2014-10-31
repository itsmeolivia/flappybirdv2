
var canvas = document.createElement("canvas");

canvas.width = 420;
canvas.height = 690;

document.body.appendChild(canvas);

var context = canvas.getContext("2d");

var bird = {
	x: canvas.width/2,
	y: canvas.height/2
};

function physics() {
	bird.y = 100 + 20 * Math.cos(new Date/100);
	if(bird.x >= 0)
		bird.x += 100;
}

function tik(t) {
	draw();
	physics();
	requestAnimationFrame(tik);
	console.log(t);
}

requestAnimationFrame(tik);

//xywh
function draw(){
 context.clearRect(0, 0, canvas.width, canvas.height);
 context.fillStyle = "#00ffff";
 context.fillRect(bird.x - 10, bird.y - 10, 20, 20);
}

draw();