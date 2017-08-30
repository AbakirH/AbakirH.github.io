var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
var gamescreen = 0;

function preload() {
    img1 = loadImage("charizard.png"); //charisard
    img2 = loadImage("charizard (1).png"); //charisard front 
    img3 = loadImage("blastoise.png"); //blastoise
    img4 = loadImage("blastoise (1).png"); //blastoise front
    img5 = loadImage("venusaur.png");//venusaur
    img6 = loadImage("venusaur (1).png"); //venusaur front
    img7 = loadImage("alakazam.png"); //alakasm
    img8 = loadImage("arcanine.png"); //Arcanine
    img9 = loadImage("machamp.png"); //machamp
}

function Pokemon(Name, Type, color, maxHP, HP, def, atk, move1, power1, move2, power2, move3, power3, move4, power4, legend) {
    this.Name = Name;
    this.Type = Type;
    this.color = color;
    this.maxHP = maxHP;
    this.HP = HP;
    this.def = def;
    this.atk = atk;
    this.move1 = move1;
    this.power1 = power1;
    this.move2 = move2;
    this.power2 = power2;
    this.move3 = move3;
    this.power3 = power3;
    this.move4 = move4;
    this.power4 = power4
    this.legend = legend;
}
var firstPokemon = new Pokemon("Charizard", "Dragon/Fire", "red",
    360, 360, 78, 84, "Flare Blitz", 120, "Heat Wave",
    95, "Shadow Claw", 70, "Solar Beam", 120, false);

var secondPokemon = new Pokemon("Blastoise", "water", "blue",
    362, 362, 100, 83, "Flash Cannon", 80, "Ice Beam",
    90, "Skull Bash", 130, "Hydro Pump", 120, false);

var thirdPokemon = new Pokemon("Venusaur", "Grass", "green",
    364, 364, 82, 83, "Petal Dance",
    120, "Petal Blizzard", 90, "Solar Beam", 120,
    "Take Down", 90, false);

var fourthPokemon = new Pokemon("Alakazam", "Psychic", "yellow",
    314, 314, 45, 50, "Future Sight", 120, "Psychic",
    90, "Psyshock", 80, "Shadow Ball", 80, false);

var fifthPokemon = new Pokemon("Arcanine", "Fire", "red",
    384, 384, 80, 110, "Giga Impact", 150,
    "Flamethrower", 90, "Wild Charge", 80, "Extreme Speed",
    80, false);

var sixthPokemon = new Pokemon("Machamp", "Fighting", "#C0C0C0",
    384, 384, 80, 130, "Cross Chop", 100, "Dynamic Punch",
    100, "Earthquake", 100, "Fire Blast", 110, false);

var pokeRoster = [firstPokemon, secondPokemon, thirdPokemon];

var pokeRoster2 = [fourthPokemon, fifthPokemon, sixthPokemon];

var rand = pokeRoster2[Math.floor(Math.random() * pokeRoster2.length)];

var switch1;
var switch2;

var pokesimulator1;
var pokesimulator2;

var a = 100;
var b = 100;
var c;
var d;




var move1;
var move2;
var move3;
var move4;

function setup() {
    createCanvas(500, 500);
    background("grey");
    preload();

}
function draw() {
    initscreen();
    pokebattle();
    check();
}

function initscreen() {
    if (gamescreen == 0) {
        background("white");
        rect(2, 2, 497, 148);
        rect(2, 152, 497, 148);
        rect(2, 302, 497, 148);
        image(img2, 10, 20);
        image(img4, 10, 175);
        image(img6, 10, 325);

        //charizard
        fill("white");
        rect(113, 50, 100, 25);
        fill("green");
        rect(113, 50, a, 25);

        //blastoise
        fill("white");
        rect(113, 210, 100, 25);
        fill("green");
        rect(113, 210, a, 25);

        //Venusaur
        fill("white");
        rect(113, 350, 100, 25);
        fill("green");
        rect(113, 350, a, 25);
        noFill();

        fill("black");
        textSize(30);
        text("HP: " + firstPokemon.HP, 305, 100);
        text(firstPokemon.Name, 110, 49);

        fill("black");
        textSize(30);
        text("HP: " + secondPokemon.HP, 305, 260);
        text(secondPokemon.Name, 110, 209);

        fill("black");
        textSize(30);
        text("HP: " + thirdPokemon.HP, 305, 400);
        text(thirdPokemon.Name, 110, 349);
        noFill();

        if (firstPokemon.HP == 0 && secondPokemon.HP == 0 && thirdPokemon.HP == 0) {
            background("black");
            fill("white");
            rect(0, 0, 499, 499);
            fill("black");
            textAlign(CENTER);
            textSize(30);
            text("All your pokemon have fainted", 250, 250);
        }

    }
}

function pokebattle() {
    if (gamescreen == 1) {
        background("gray");
        fill("#C0C0C0");
        ellipse(100, 375, 150, 50);//shadow
        noFill();
        image(switch1, 50, 295);

        if (rand.Name == fourthPokemon.Name) {
            switch2 = img7;
        } else if (rand.Name == fifthPokemon.Name) {
            switch2 = img8;
        } else if (rand.Name == sixthPokemon.Name) {
            switch2 = img9;
        }

        fill("#C0C0C0");
        ellipse(410, 150, 150, 50);//shadow
        noFill();
        image(switch2, 360, 75);

        fill("red");
        rect(width - width, height - 90, 500, 100);
        fill("black");
        textSize(20);
        text(move1, 3, 450);
        text(move2, 135, 450);
        text(move3, 265, 450);
        text(move4, 395, 450);
        noFill();
        rect(3, 430, 125, 35);
        rect(135, 430, 125, 35);
        rect(265, 430, 125, 35);
        rect(395, 430, 125, 35);
        if (switch1 == img1) {
            fill("black");
            textSize(30);
            text("HP: " + firstPokemon.HP, 345, 360);
            text(firstPokemon.Name, 150, 309);

            //charizard
            fill("white");
            rect(150, 310, 100, 25);
            fill("green");
            rect(150, 310, a, 25);
        } else if (switch1 == img3) {
            fill("black");
            textSize(30);
            text("HP: " + secondPokemon.HP, 345, 360);
            text(secondPokemon.Name, 150, 309);

            //blastoise
            fill("white");
            rect(150, 310, 100, 25);
            fill("green");
            rect(150, 310, a, 25);
        } else if (switch1 == img5) {
            fill("black");
            textSize(30);
            text("HP: " + thirdPokemon.HP, 345, 360);
            text(thirdPokemon.Name, 150, 309);
            noFill();

            //Venusaur
            fill("white");
            rect(150, 310, 100, 25);
            fill("green");
            rect(150, 310, a, 25);
            noFill();
        }
        if (switch2 == img7) {
            fill("black");
            textSize(30);
            text("HP: " + fourthPokemon.HP, 235, 135);
            text(fourthPokemon.Name, 40, 80);

            //Alakasm
            fill("white");
            rect(40, 85, 100, 25);
            fill("green");
            rect(40, 85, b, 25);
        } else if (switch2 == img8) {
            fill("black");
            textSize(30);
            text("HP: " + fifthPokemon.HP, 235, 135);
            text(fifthPokemon.Name, 40, 80);

            //Arcanine
            fill("white");
            rect(40, 85, 100, 25);
            fill("green");
            rect(40, 85, b, 25);
        } else if (switch2 == img9) {
            fill("black");
            textSize(30);
            text("HP: " + sixthPokemon.HP, 235, 135);
            text(sixthPokemon.Name, 40, 80);
            noFill();

            //Machamp
            fill("white");
            rect(40, 85, 100, 25);
            fill("green");
            rect(40, 85, b, 25);
            noFill();
        }
    }
}
function check() {
    for (var i = 0; i < pokeRoster.length; i++) {
        if (pokeRoster[i].HP <= 0) {
            pokeRoster[i].HP = 0;
            pokeRoster.splice(i, 1);
            a = 100;
            gamescreen = 0;
        }
    }
    for (var i = 0; i < pokeRoster2.length; i++) {
        if (pokeRoster2[i].HP <= 0) {
            pokeRoster2[i].HP = 0;
            pokeRoster2.slice(i, 1);
            if (fourthPokemon.HP == 0 && fifthPokemon.HP == 0 && sixthPokemon.HP == 0) {
                fill("white");
                rect(0, 0, 499, 499);
                fill("black");
                textAlign(CENTER);
                textSize(20);
                text("All your Opponents's pokemon have fainted", 250, 250);
            }
        }
    }
    if (rand.HP <= 0) {
        b = 100;
        rand = pokeRoster2[Math.floor(Math.random() * pokeRoster2.length)];
        switch2 = img8;

    }
}
function mousePressed() {
    if (gamescreen == 0) {
        if (firstPokemon.HP > 0) {
            if (mouseX >= 2 && mouseX <= 499 && mouseY >= 2 && mouseY <= 150) {
                switch1 = img1;
                pokesimulator1 = firstPokemon;
                move1 = firstPokemon.move1;
                move2 = firstPokemon.move2;
                move3 = firstPokemon.move3;
                move4 = firstPokemon.move4;
                gamescreen = 1;
            }
        }
        if (secondPokemon.HP > 0) {
            if (mouseX >= 2 && mouseX <= 499 && mouseY >= 150 && mouseY <= 300) {
                switch1 = img3;
                pokesimulator1 = secondPokemon;
                move1 = secondPokemon.move1;
                move2 = secondPokemon.move2;
                move3 = secondPokemon.move3;
                move4 = secondPokemon.move4;
                gamescreen = 1;
            }
        }
        if (thirdPokemon.HP > 0) {
            if (mouseX >= 2 && mouseX <= 499 && mouseY >= 300 && mouseY <= 450) {
                switch1 = img5;
                pokesimulator1 = thirdPokemon;
                move1 = thirdPokemon.move1;
                move2 = thirdPokemon.move2;
                move3 = thirdPokemon.move3;
                move4 = thirdPokemon.move4;
                gamescreen = 1;
            }
        }
    }
    if (gamescreen == 1) {
        if (mouseY >= 430 && mouseY <= 465 && mouseX >= 3 && mouseX <= 128) {
            pokesimulator1.HP = pokesimulator1.HP - Math.floor(random(0, rand.power1)); //attack for first pokemon
            a = ((((pokesimulator1.HP) / pokesimulator1.maxHP) * 100));


            rand.HP = rand.HP - Math.floor(random(0, pokesimulator1.power1)); //attack for the second pokemon
            b = ((((rand.HP) / rand.maxHP) * 100));
        }
        if (mouseY >= 430 && mouseY <= 465 && mouseX >= 135 && mouseX <= 260) {
            pokesimulator1.HP = pokesimulator1.HP - Math.floor(random(0, rand.power2)); //attack for first pokemon
            a = ((((pokesimulator1.HP) / pokesimulator1.maxHP) * 100));

            rand.HP = rand.HP - Math.floor(random(0, pokesimulator1.power2)); //attack for the second pokemon
            b = ((((rand.HP) / rand.maxHP) * 100));
        }
        if (mouseY >= 430 && mouseY <= 465 && mouseX >= 265 && mouseX <= 390) {
            pokesimulator1.HP = pokesimulator1.HP - Math.floor(random(0, rand.power3)); //attack for first pokemon
            a = ((((pokesimulator1.HP) / pokesimulator1.maxHP) * 100));

            rand.HP = rand.HP - Math.floor(random(0, pokesimulator1.power3)); //attack for the second pokemon
            b = ((((rand.HP) / rand.maxHP) * 100));
        }
        if (mouseY >= 430 && mouseY <= 465 && mouseX >= 395 && mouseX < 500) {
            pokesimulator1.HP = pokesimulator1.HP - Math.floor(random(0, rand.power4)); //attack for first pokemon
            a = ((((pokesimulator1.HP) / pokesimulator1.maxHP) * 100));

            rand.HP = rand.HP - Math.floor(random(0, pokesimulator1.power4)); //attack for the second pokemon
            b = ((((rand.HP) / rand.maxHP) * 100));

        }
    }
}
