var stage = new PIXI.Container();

function init(){
	var canvas = document.getElementById("gameCanvas");
	var renderer = PIXI.autoDetectRenderer(800, 600,{transparent: true, view: canvas});
	document.body.appendChild(renderer.view);
	
	animate();
	function animate() 
	{
	requestAnimationFrame(animate);
	renderer.render(stage);
	TWEEN.update();
	}
	
	//setUpStartScreen(stage);
	
	//setUpGameScreen(stage);
	//setUpCharacterScreen(stage);
	//setUpStartScreen(stage);
	setUpGameScreen(stage);
	//setUpGameScreen(stage);
}

function setUpStartScreen(stage){
  var graphics = new PIXI.Graphics();
  graphics.lineStyle(2, 0xFF00FF, 1);
  graphics.beginFill(0xFF00BB, 0.25);
  graphics.drawRoundedRect(150, 450, 300, 100, 15);
  graphics.endFill();	

  graphics.interactive = true;
  graphics.hitArea = new PIXI.Rectangle(150, 450, 300, 100);
  graphics.on('mousedown', startGame);
  stage.addChild(graphics);
}

function startGame (eventData) {
  setUpCharacterScreen(stage);
}

function setUpCharacterScreen(stage){
	var alienPartBank = new PIXI.Graphics();
	
	alienPartBank.beginFill(0xD3D3D3, 0.25);
	alienPartBank.drawRoundedRect(600,0,200,600);
	alienPartBank.endFill();
	
	stage.addChild(alienPartBank);
	
	var alienPartBlock = new PIXI.Graphics();
	
	alienPartBlock.beginFill(0xff0000, 0.1);
	alienPartBlock.drawRoundedRect(600,0,25,25);
	alienPartBlock.endFill();
	
	stage.addChild(alienPartBlock);
}

function setUpGameScreen(stage)
{
	var texture = PIXI.Texture.fromImage('./assets/alien.png');
	var alien = new PIXI.Sprite(texture);
	alien.position.x = 50;
	alien.position.y = 100;
	stage.addChild(alien);
	
	
	var tween = new TWEEN.Tween(alien).to({x: 100}, 2000)
	tween.onUpdate = function()
	{
		alert("lol");
	}
	tween.start()
}
