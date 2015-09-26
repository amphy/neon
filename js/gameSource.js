var stage = new PIXI.Container();
var graphics = new PIXI.Graphics();

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
<<<<<<< HEAD
	setUpCharacterScreen(stage);
	//setUpStartScreen(stage);
=======
	//setUpCharacterScreen(stage);
	//setUpStartScreen(stage);
	setUpGameScreen(stage);
>>>>>>> origin/master
	//setUpGameScreen(stage);
}

function setUpStartScreen(stage){
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
  stage.removeChild (graphics)
  setUpCharacterScreen(stage);
}

function setUpCharacterScreen(stage){
	
	var characterScreenContainer = new PIXI.Container();
	stage.addChild(characterScreenContainer);
	
	var alienPartBank = new PIXI.Graphics();
	alienPartBank.beginFill(0xD3D3D3, 0.25);
	alienPartBank.drawRoundedRect(600,0,200,600);
	alienPartBank.endFill();
	characterScreenContainer.addChild(alienPartBank);
	
	var submitButton = new PIXI.Graphics();
	submitButton.beginFill(0xff0000, 0.25);
	submitButton.drawRoundedRect(300,500,200,200);
	submitButton.endFill();
	submitButton.interactive = true;
	submitButton.hitArea = new PIXI.Rectangle(300,500,200,200);
	submitButton.on('mousedown', startGameScreen);
	characterScreenContainer.addChild(submitButton);
	
	var alienPartBlock;
	var x = 25;
	for (var i = 0; i < 8;i++){
		alienPartBlock = new PIXI.Graphics();
		
		alienPartBlock.beginFill(0xff0000, 0.25);
		if (i%2 == 0){
			alienPartBlock.drawRoundedRect(625,x,50,50);
		}else{
			alienPartBlock.drawRoundedRect(700,x,50,50);
			x = x + 100;
		}
		alienPartBlock.endFill();
		
		characterScreenContainer.addChild(alienPartBlock);
	}
}

function startGameScreen(eventData){
	setUpGameScreen(stage);
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
