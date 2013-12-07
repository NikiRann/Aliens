var requestAnimationFrame = window.requestAnimationFrame ||
		window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function (callback) { setTimeout (callback, 1000 / 30); };
var canvas = document.getElementById("canvas-id");
canvas.width = 800;
canvas.height = 600;
var ctx = canvas.getContext("2d");

window.addEventListener("keydown", function (args) {
}, false);
var Game = {}
Game.Constants = {
	unitsDamage : 10,
	unitsHealth : 100,
	motherHealth : 1000, //It's a beatuful lady.Don't sue her about her size.
	startMoney = 300
}

function Player(_mother){
	this.mother = _mother;
	this.units = [];
	this.money = Game.Constants.startMoney;
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