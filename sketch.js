var starImg, fairyImg, bgImg;
var fairy, fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png", "images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying", fairyImg);
	fairy.scale = 0.25;

	star = createSprite(650, 30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650, 30, 5, { restitution: 0.5, isStatic: true });
	World.add(world, starBody);

	Engine.run(engine);
}


function draw() {
	background(bgImg);
	createEdgeSprites();

	if (keyDown(LEFT_ARROW)) {
		fairy.velocityX = -2.5;
	}

	if (keyDown(RIGHT_ARROW)) {
		fairy.velocityX = 2.5;
	}

	if (keyDown(DOWN_ARROW)) {
		star.velocityY = 3;
	}

	if (keyDown(UP_ARROW)) {
		star.velocityY = -3;
	}


	text(mouseX + ',' + mouseY, mouseX, mouseY);

	onKeyPressed();
	drawSprites();
}

function onKeyPressed() {
	//starBody.position.Y = star.y;
	//if (starBody.position.Y > 470) {


	if (star.y > 470) {
		star.velocityX = 0;
		star.velocityY = 0;
		fairy.velocityX = 0;
		fairy.velocityY = 0;

		// Qustions for teacher**************** Plese let me know why this is not working below
		// Matter.Body.setStatic(starBody, true);
	}
}
