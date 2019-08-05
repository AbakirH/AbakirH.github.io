let img1;
function preload() {
  img1 = loadImage("naklejka-space-invaders.jpg");
}

function Aliens(xpos,ypos,width,height){
this.xpos = xpos;
this.ypos = ypos;
this.width = width;
this.height = height;
}

let alien = [];

function Shot(xpos,ypos,width,height){
this.xpos = xpos;
this.ypos = ypos;
this.width = width;
this.height = height;
}

let gameScreen = 0;
let shots = [];
let a = 0;
let x =0;
let y = 10;
let speed = 5;
let level = 1;
let score = 0;

let xspeed = 3;
let yspeed = 15;

function setup(){
    createCanvas(600, 600);
    background("grey");
}

function draw(){
    if (gameScreen == 0) {
        initScreen();
    }
    if (gameScreen == 1){
        background("grey");
        addshot();
        drawShip();
        move();
        disappear();
        drawAlien();
        drawScore();
        if (alien.length == 0){
            levels();
        }
    }
}
function initScreen(){
    image(img1, 0, 0);
    fill("black");
    textSize(50);
    textAlign(CENTER);
    text("Click Here To Start!   ", 300, 325);

}
    
 function drawShip(){
    fill('green');
    let shipXpos = (((width/2) - 50) + x); 
    rect(shipXpos, 550, 100, 30);
    rect(((width/2) - 15) + x, 530, 30, 20);
        if (shipXpos >= 600 ){
            x = -x +100 ;
        }else if(shipXpos  <= -75){
            x = -x;
        }
 }

function move(){
    if (keyIsDown(LEFT_ARROW)){
        x -= 5;
    }
        if (keyIsDown(RIGHT_ARROW)){
            x += 5;
        }
}


function drawAlien(){
    for (let s =0; s < alien.length; s++){
        fill("green");
        rect(alien[s].xpos,alien[s].ypos,alien[s].width,alien[s].height);
        alien[s].xpos = alien[s].xpos + xspeed;
        
        if(alien[s].xpos < 0 || alien[s].xpos > (600 - (alien[s].width)) ){
            xspeed = -xspeed;
            for (let d =0; d < alien.length; d++){
                alien[d].ypos = alien[d].ypos + yspeed;
            }
        }
       if(alien[s].ypos >= 490){
           background("black");
           fill("white");
           textSize(50);
           textAlign(CENTER);
           text("YOU LOSE", 305,260);
       }
        
    }
}

function keyPressed(){
    if (keyCode == 32){
             shots.push(new Shot((((width/2) - 15) + x), 530, 30, 20));
        }
    }

function addshot(){
    for(let a = 0; a < shots.length; a++){
        fill("white");
        rect(shots[a].xpos, shots[a].ypos, shots[a].width, shots[a].height);
        shots[a].ypos = shots[a].ypos - y;
    }
}




function disappear(){
    let check = false;
    for (let j = 0; j < shots.length; j++){
        for(let i = 0; i < alien.length; i++){
            if ((shots[j].xpos > (alien[i].xpos - alien[i].width) && shots[j].xpos < (alien[i].xpos + alien[i].width))
            && (shots[j].ypos > (alien[i].ypos - alien[i].height) && shots[j].ypos < (alien[i].ypos + alien[i].height))) 
            {
                alien.splice(i, 1);  
                score = score + 10;
                check = true;
            }
            
        }
    }
    for (let j = 0; j < shots.length; j++){
        if(check == true || shots[j].ypos <= 0 ){
            shots.shift();
            check = false;
        }
    }
    if (score >= 1080){
        background("black");
        fill("white");
        textSize(50);
        textAlign(CENTER);
        text("YOU HAVE WON", 305,260);
        noLoop();
    }
}
function mousePressed(){
    if (gameScreen == 0) {
        if (mouseX >= 0 && mouseX <= 600 && mouseY >= 0 && mouseY <=600) {
            gameScreen ++;
        }
    }
}
function levels(){
    if (gameScreen == 1){
        for (let n =0; n<6; n++){
            alien.push(new Aliens(30 + (n*90),50,50,50));
            if (score >= 60 && alien.length >= 6) {
                for (let z =0; z<6; z++){
                    alien.push(new Aliens(30 + (z*90),125,50,50));
                    if (score >= 180 && alien.length >= 12){
                        y ++;
                        for (let x=0; x<6; x++){
                            alien.push(new Aliens(30 + (x*90),200,50,50));
                            if (score >= 360 && alien.length >= 18){
                                y ++;
                                for (let c =0; c<6; c++){
                                    alien.push(new Aliens(30 +(c*90),275,50,50));
                                }
                            }
                        }
                    }
                }
            }  
        }
    }
}

function drawScore(){
    fill('black');
    textSize(30);
    text("Score: " + score, 20, 500, 100, 100);
}
