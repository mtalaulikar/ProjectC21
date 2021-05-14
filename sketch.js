var canvas;
var music;
var surfaceBlue, surfacePink, surfaceRed, surfaceGreen;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(840,500);

    //create 4 different surfaces
    surfaceBlue = createSprite(100,480,200,20);
    surfaceBlue.shapeColor = "blue";
    surfacePink = createSprite(310,480,200,20);
    surfacePink.shapeColor = "pink";
    surfaceRed = createSprite(520,480,200,20);
    surfaceRed.shapeColor = "red";
    surfaceGreen = createSprite(730,480,200,20);
    surfaceGreen.shapeColor = "green";


    //create box sprite and give velocity
    box = createSprite(Math.round(random(20,750)), 40, 20,20);
    box.shapeColor = "gold";
    box.velocityX = 5;
    box.velocityY = -5;
    edges = createEdgeSprites();
    


}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    box.bounceOff(edges[0]);
    box.bounceOff(edges[1]);
    box.bounceOff(edges[2]);
    box.bounceOff(edges[3]);
    

    /*if(box.isTouching(surfaceBlue) && box.bounceOff(surfaceBlue)){
        box.shapeColor = "blue";
    }
    if(box.isTouching(surfacePink) && box.bounceOff(surfacePink)){
        box.shapeColor = "pink";
    }
    if(box.isTouching(surfaceRed) && box.bounceOff(surfaceRed)){
        box.shapeColor = "red";
    }
    if(box.isTouching(surfaceGreen) && box.bounceOff(surfaceGreen)){
        box.shapeColor = "green";
    }*/

    if(box.isTouching(surfaceBlue)){
        box.shapeColor = "blue";
        music.play();
    }
    if(box.isTouching(surfacePink)){
        box.shapeColor = "pink";
        music.play();
    }
    if(box.isTouching(surfaceRed)){
        box.shapeColor = "red";
        music.play();
    }
    if(box.isTouching(surfaceGreen)){
        box.shapeColor = "green";
        music.play();
    }


    box.bounceOff(surfaceBlue);
    box.bounceOff(surfacePink);
    box.bounceOff(surfaceRed);
    box.bounceOff(surfaceGreen);

    //add condition to check if box touching surface and make it box
    drawSprites();
}
