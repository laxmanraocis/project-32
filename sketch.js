const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
    backgroundImg = loadImage("sunrise1.png","sunrise2.png","sunrise3.png","sunrise4.png","sunrise5.png","sunrise6.png",
                               "sunset7.png","sunset8.png","sunset9.png","sunset10.png","sunset11.png","sunset12.png");
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(bg)
    backgroundImg(bg);


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var data = await fetch("https://worldtimeapi.org/api/timezone/Asia/Tokyo");
    var response = await data.json();
    var taarik = response.datetime;
    var hour = taarik.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if(hour>=05 && hour<=07){
        bg = "sunrise1.png";

    }
    else if(hour>=07 && hour<=10){
        bg = "sunrise2.png";
        
    }
    else if(hour>=10 && hour<=13){
        bg = "sunrise5.png";

    }
    else if(hour>=13 && hour<=16){
        bg = "sunrise6.png";

    }
    else if(hour>=16 && hour<=19){
        bg = "sunset7.png";

    }
    else if(hour>=19 && hour<=22){
        bg = "sunset10.png";

    }
    else if(hour>=22 && hour<=24){
        bg = "sunset11.png";

    }
    else if(hour>=24 && hour<=05){
        bg = "sunset12.png";

    }
    //load the image in backgroundImg variable here

}
