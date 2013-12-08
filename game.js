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

function Render(canvas, context) {
	this.beginScene = function beginScene() {
		context.fillStyle = Game.Constants.backgroundColor;
		context.fillRect(0, 0, canvas.width, canvas.height);
	}
	
	this.drawUnit = function drawUnit(unit) {
		context.fillStyle = unit.color;
		context.fillRect(unit.location.x,unit.location.y,unit.size.x,unit.size.y)
	}
}

var Game = {}
Game.Constants = {
	unitsDamage : 10,
	unitsHealth : 100,
	unitsSize: new Vector(10,10),

	motherHealth : 1000, //She's a beatuful lady.Don't sue her about her size.
	startMoney : 300,

	unitColor: "blue",
	backgroundColor: "white",
	player1UnitStarts: new Vector(5,5),
	player2UnitStarts: new Vector(74,54),

}
Game.render = new Render(canvas,ctx);

function Player(_mother,_unitStart){
	this.mother = _mother;
	this.units = [];
	this.unitStart = _unitStart;
	this.money = Game.Constants.startMoney;
}


function Mother(){
	//NIKI PISHESH TUK!!!!!!!!!!!!!!!!!!!!!!!!!
}

function Unit(_location,_player){
	this.location = _location;
	this.size = Game.Constants.unitsSize;
	this.dmg = Game.Constants.unitsDamage;
	this.health = Game.Constants.unitsHealth;
	this.leader = _player;
	this.move = function(_dir){
		this.location.add(_dir);
	}
	this.damage = function(_obj){
		_obj.health -= this.damage;
	}
	this.color = Game.Constants.unitColor;
}

Game.Player1 = new Player(new Mother(),Game.Constants.player1UnitStarts);
Game.Player2 = new Player(new Mother(),Game.Constants.player2UnitStarts);


Game.generateUnit = function generateUnit(player){
	var unit = new Unit(new Vector(player.unitStart.x,player.unitStart.y),player);
	player.units.push(unit);
}

window.addEventListener("keydown", function (args) {
}, false);
window.addEventListener("keyup", function (args) {
}, false);

window.addEventListener("mousemove", function (args) {
}, false);

function update() {
	setTimeout(update, 10);
}

function renderScene() {
		Game.render.beginScene();
		for(var i = 0;i < Game.Player1.units.length;i ++){
			Game.render.drawUnit(Game.Player1.units[i]);
		}
		for(var i = 0;i < Game.Player2.units.length;i ++){
			Game.render.drawUnit(Game.Player2.units[i]);
		}
	
		requestAnimationFrame(renderScene);
	}

update();
renderScene();

