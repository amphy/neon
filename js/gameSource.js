function init(){
	var canvas = document.getElementById("gameCanvas");
	var renderer = PIXI.autoDetectRenderer(1900, 900,{backgroundColor : 0x1099bb, view: canvas});
	document.body.appendChild(renderer.view);
	var stage = new PIXI.Container();
	
	animate();
	function animate() 
	{
	requestAnimationFrame(animate);
	renderer.render(stage);
	}
	
	//setUpStartScreen(stage);
	setUpGameScreen(stage);
}

function setUpStartScreen(){
	
}

function setUpCharacterScreen(stage){
	var alienPartBank = new PIXI.Rectangle;
	stage.addChild(alienPartBank);
}

function setUpGameScreen(stage)
{
	var texture = PIXI.Texture.fromImage('./assets/alien.png');
	var alien = new PIXI.Sprite(texture);
	alien.position.x = 50;
	alien.position.y = 100;
	stage.addChild(alien);
}
