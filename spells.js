function spells(){
    greet.hide();
    goToSpells.hide();

    attackButton = createButton("Go to attack spells");
    attackButton.position(100,200);
    attackButton.mousePressed(attack);

    blockButton = createButton("Go to blocking spells");
    blockButton.position(300,200);
    blockButton.mousePressed(block);

    defenseButton = createButton("Go to defense spells");
    defenseButton.position(500,200);
    defenseButton.mousePressed(defense);
}

function attack(){
    attackButton.hide();
    blockButton.hide();
    defenseButton.hide();

    a1 = createButton("Add Stupefy");
    a1.position(50,100);
    a1.mousePressed(addA1);

    a2 = createButton("Add Jelly-Leg Jinx");
    a2.position(50,200);
    a2.mousePressed(addA2);

    a3 = createButton("Add Expelliarmus");
    a3.position(50,300);
    a3.mousePressed(addA3);

    a4 = createButton("Add Oppugno");
    a4.position(50,400);
    a4.mousePressed(addA4);

    a5 = createButton("Add Petrificus Totalus");
    a5.position(50,500);
    a5.mousePressed(addA5);
}

function block(){
    attackButton.hide();
    blockButton.hide();
    defenseButton.hide();

    b1 = createButton("Add Protego");
    b1.position(50,100);
    b1.mousePressed(addB1);

    b2 = createButton("Add Flipendo");
    b2.position(50,200);
    b2.mousePressed(addB2);

    b3 = createButton("Add Langlock");
    b3.position(50,300);
    b3.mousePressed(addB3);

    b4 = createButton("Add Repello Inimicum");
    b4.position(50,400);
    b4.mousePressed(addB4);

    b5 = createButton("Add Impedimenta");
    b5.position(50,500);
    b5.mousePressed(addB5);
}

function defense(){
    attackButton.hide();
    blockButton.hide();
    defenseButton.hide();

    d1 = createButton("Add Episkey");
    d1.position(50,100);
    d1.mousePressed(addD1);

    d2 = createButton("Add Reparo");
    d2.position(50,200);
    d2.mousePressed(addD2);

    d3 = createButton("Add Rennervate");
    d3.position(50,300);
    d3.mousePressed(addD3);

    d4 = createButton("Add Skele-grow");
    d4.position(50,400);
    d4.mousePressed(addD4);

    d5 = createButton("Add Freeze Oppponent Spell");
    d5.position(50,500);
    d5.mousePressed(addD5);
}