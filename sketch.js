var canvas, database, gameState = 0, playerCount, form, game, player, allPlayers;
var greeting, greeting1, gryfbutton, slybutton, ravbutton, hufbutton, input, button, title;
var greet, greet1, greetings, greeting1, error;
var goToSpells, attackButton, blockButton, defenseButton;
var attackArray = [], blockArray = [], defenseArray = [];
var a1, A1, a2, A2, a3, A3, a4, A4, a5, A5;
var b1, B1, b2, B2, b3, B3, b4, B4, b5, B5;
var d1, D1, d2, D2, d3, D3, d4, D4, d5, D5;
function setup(){
    canvas = createCanvas(800,600);

    database = firebase.database();

    game = new Game();
    game.getState();
    game.start();
    
}

function draw(){
    background(100,100,100);
    if(playerCount === 2){
        game.update(1);
    }

    if(attackArray.length > 0){
        var x = 350;
        var y = 50;
        for(var i in attackArray){
            y+=50;
            fill("white");
            textSize(15);
            text(attackArray[i],x,y);
        }
    }

    if(blockArray.length > 0){
        var x = 350;
        var y = 50;
        for(var i in blockArray){
            y+=50;
            fill("white");
            textSize(15);
            text(blockArray[i],x,y);
        }
    }

    if(defenseArray.length > 0){
        var x = 350;
        var y = 50;
        for(var i in defenseArray){
            y+=50;
            fill("white");
            textSize(15);
            text(defenseArray[i],x,y);
        }
    }
}