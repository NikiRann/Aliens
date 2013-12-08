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

function Renderer(canvas, context) {
	this.beginScene = function beginScene() {
		context.fillStyle = Game.Constants.backgroundColor;
		context.fillRect(0, 0, canvas.width, canvas.height);
	}
	
	this.drawUnit = function drawUnit(unit) {
		context.fillStyle = unit.color;
		context.fillRect(unit.location.x*Game.Constants.partoffieldSize.x,
		unit.location.y*Game.Constants.partoffieldSize.y,
		 unit.size.x*Game.Constants.partoffieldSize.x,
		  unit.size.y*Game.Constants.partoffieldSize.y)
	}
}

var Game = {}
Game.Constants = {
	partoffieldSize: new Vector(10,10),
	unitsDamage : 10,
	unitsHealth : 100,
	unitsSize: new Vector(1,1),
	unitColor: "#f00",
	motherHealth : 1000, //It's a beatuful lady.Don't sue her about her size.
	backgroundColor: "#000",
	player1UnitStarts: new Vector(5,5),
	player2UnitStarts: new Vector(74,54),
	startMoney: 300
}
Game.renderer = new Renderer(canvas,ctx);

function Player(_mother,_unitStart){
	this.mother = _mother;
	this.units = [];
	this.unitStart = _unitStart;
	this.money = Game.Constants.startMoney;
}

function Mother(){
	//NIKI PISHESH TUK!!!!!!!!!!!!!!!!!!!!!!!!!
}

function Unit(_location){
	this.location = _location;
	this.size = Game.Constants.unitsSize;
	this.dmg = Game.Constants.unitsDamage;
	this.health = Game.Constants.unitsHealth;
	this.color = Game.Constants.unitColor;

	this.move = function(_dir){
		this.location.add(_dir);
	}
	this.damage = function(_unit2){
		_unit2.health-=this.dmg;
	}
}
Game.Player1 = new Player(new Mother,Game.Constants.player1UnitStarts);
Game.Player2 = new Player(new Mother,Game.Constants.player2UnitStarts);
Game.generateUnit = function generateUnit(player){
	var unit = new Unit(new Vector(player.unitStart.x,player.unitStart.y));

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
		Game.renderer.beginScene();
		for(var i=0;i<Game.Player1.units.length;i++){
			Game.renderer.drawUnit(Game.Player1.units[i]);
		}
		for(var i=0;i<Game.Player2.units.length;i++){
			Game.renderer.drawUnit(Game.Player2.units[i]);
		}
	
		requestAnimationFrame(renderScene);
	}

update();
renderScene();
// TOVA E NAPISANO ZA DA MOJESH DA VIDISH UNITITE MAHNI KOMENTARITE ILI PISHI V CONSOLATA
/*Game.generateUnit(Game.Player2);
Game.generateUnit(Game.Player1);*/