function Bird(x, y){
	this.x = x;
	this.y = y;
	this.velocity_x = 225;
	this.velocity_y = -150;

	var me = this;

	setInterval(function() {
		var poop = new Poop(me.x, me.y);
		entities.push(poop);
	}, 3000);

	window.addEventListener('click', function() {
		me.velocity_y = -250;

	});

}
Bird.prototype.update = function(dt) {

	this.x += this.velocity_x * dt;
	if (this.x < 20 || this.x > 495)
		this.velocity_x = -this.velocity_x;

	if ((this.y < 20) || (this.y > 665)) {
		this.velocity_y = -this.velocity_y;
	}
	this.y += this.velocity_y * dt;
	this.velocity_y += 400 * dt; //gravitas


};
Bird.prototype.draw = function(context) {
	context.fillStyle = "#99cc00";
	context.fillRect(this.x - 20, this.y - 20, 40, 40);

};
