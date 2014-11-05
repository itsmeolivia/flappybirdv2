
var canvas = document.createElement("canvas");

canvas.width = 515;
canvas.height = 685;

document.body.appendChild(canvas);

var context = canvas.getContext("2d");
var entities = [];
entities.push(new Bird(canvas.width/2, canvas.height/2));

var prev_t = 0;

function tik(t) {

	var dt = (t - prev_t) / 1000;
	prev_t = t;
	context.clearRect(0, 0, canvas.width, canvas.height);
	for (var i = 0; i < entities.length; i++) {
		entities[i].update(dt, entities);
		entities[i].draw(context);
	}
	requestAnimationFrame(tik);
}

requestAnimationFrame(tik);
//xywh
