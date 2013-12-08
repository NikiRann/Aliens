var requestAnimationFrame = window.requestAnimationFrame ||
		window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function (callback) { setTimeout (callback, 1000 / 30); };
var canvas = document.getElementById("canvas-id");
canvas.width = 800;
canvas.height = 600;
var ctx = canvas.getContext("2d");

function Vector(_x,_y){
	this.x=_x;
	this.y=_y;

	this.add = function(vec2){
		this.x+=vec2.x;
		this.y+=vec2.y;
	}
}

var Game = {}
Game.Constants = {
	unitsDamage : 10,
	unitsHealth : 100,
	unitsSize: new Vector(1,1),
	motherHealth : 1000, //She's a beatuful lady.Don't sue her about her size.
	startMoney = 300
}

function Player(_mother){
	this.mother = _mother;
	this.units = [];
	this.money = Game.Constants.startMoney;
}
function Mother()
function Unit(_location,_player){
	this.location = _location;
	this.size = Game.Constants.unitsSize;
	this.damage = Game.Constants.unitsDamage;
	this.health = Game.Constants.unitsHealth;
	this.leader = _player;
	this.move = function(_dir){
		this.location.add(_dir);
	}
	this.damage = function(_obj){
		_obj.health -= this.damage;
	}
}
window.addEventListener("keyup", function (args) {
}, false);

window.addEventListener("mousemove", function (args) {
}, false);

function update() {
	setTimeout(update, 10);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 1;
    requestAnimationFrame(draw);
}

update();
draw()
;