function Bird(x, y){
	this.x = x;
	this.y = y;
	this.velocity_x = 75;
	this.velocity_y = 0;

	var me = this;

	window.addEventListener('click', function() {
		me.velocity_y -= 150;

	});

}
Bird.prototype.update = function(dt) {

	this.x += this.velocity_x * dt;
	if (this.x < 20 || this.x > 495)
		this.velocity_x = -this.velocity_x;
	this.y += this.velocity_y * dt;
	if (this.y < 20 || this.y > 665)
		this.velocity_y = 0;

	this.velocity_y += 100* dt; //gravitas
};
Bird.prototype.draw = function(context) {
	context.fillStyle = "#99cc00";
	context.fillRect(this.x - 20, this.y - 20, 40, 40);

};
