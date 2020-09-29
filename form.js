function form() {
        title = createElement("h2");
        title.html("Dueling Game");
        title.position(300,0);

        input = createInput("Name");
        input.position(300,160);

        button = createButton("Play");
        button.position(365,200);

        if(playerCount < 2){
            button.mousePressed(chooseName);
        } else{
            button.mousePressed(sorry);
        }
}

function chooseName(){
    input.hide();
    button.hide();

    greeting = createElement("h3");
    greeting1 = createElement("h3");

    player.name = input.value();

    playerCount++;
    player.index = playerCount;
    player.update();
    player.updateCount(playerCount);

    greeting.html("Hello "+player.name);
    greeting.position(330,80);
    
    greeting1.html("Choose Your House");
    greeting1.position(300, 140);

    gryfbutton = createButton("Gryffindor");
    gryfbutton.position(210,350);
    gryfbutton.mousePressed(gryffindor);

    slybutton = createButton("Slytherin")
    slybutton.position(300, 350);
    slybutton.mousePressed(slytherin);

    ravbutton = createButton("Ravenclaw");
    ravbutton.position(390, 350);
    ravbutton.mousePressed(ravenclaw);

    hufbutton = createButton("Hufflepuff");
    hufbutton.position(490, 350);
    hufbutton.mousePressed(hufflepuff);
}

function sorry(){
        title.hide();
        input.hide();
        button.hide();
  
        error = createElement("h2");
        error.html("Sorry, there is no more room");
        error.position(230,200);
  }