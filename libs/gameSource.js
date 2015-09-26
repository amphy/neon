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
}