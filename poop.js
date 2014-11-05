function Poop(x, y){
  this.x = x;
  this.y = y;

}
Poop.prototype.update = function(dt) {

};
Poop.prototype.draw = function(context) {
  context.fillStyle = "#80cc00";
  context.beginPath();
  context.arc(this.x, this.y, 10, 0, Math.PI * 2);

  context.fill();
};
