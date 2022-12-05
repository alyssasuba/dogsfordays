var logo, arrow, boneB, boneY, boneP, boneG, boneDG
var germ, aHusky, borderCollie, cairn, chi, greatP, parson, pitbull, pom, poodle, pug, rott, shihTzu, sib, york, lab;
var centuryGothic, centuryGothicBold;
var stage = 1;
var dogData;
var germNum = 0;
var germDays = 0;
var aHuskyNum = 0;
var aHuskyDays = 0;
var yorkNum = 0;
var yorkDays = 0;
var pugNum = 0;
var pugDays = 0;
var borderNum = 0;
var borderDays = 0;
var cairnNum = 0;
var cairnDays = 0;
var chiNum = 0;
var chiDays = 0;
var labNum = 0;
var labDays = 0;
var parNum = 0;
var parDays = 0;
var pitNum = 0;
var pitDays = 0;
var poodNum = 0;
var poodDays = 0;
var shihNum = 0;
var shihDays = 0;
var sibNum = 0;
var sibDays = 0;
var rottNum = 0;
var rottDays = 0;
var greatNum = 0;
var greatDays = 0;
var pomNum = 0;
var pomDays = 0;
var germAvg, aHuskyAvg, yorkAvg, pugAvg, borderAvg, cairnAvg, chiAvg, labAvg, parAvg, pitAvg, poodAvg, shihAvg, sibAvg, greatAvg, pomAvg, rottAvg;
var germSizeToy = 0;
var germSizePup = 0;
var germSizeS = 0;
var germSizeM = 0;
var germSizeL = 0;
var aHuskySizeToy = 0;
var aHuskySizePup = 0;
var aHuskySizeS = 0;
var aHuskySizeM = 0;
var aHuskySizeL = 0;
var borderSizeToy = 0;
var borderSizePup = 0;
var borderSizeS = 0;
var borderSizeM = 0;
var borderSizeL = 0;
var cairnSizeToy = 0;
var cairnSizePup = 0;
var cairnSizeS = 0;
var cairnSizeM = 0;
var cairnSizeL = 0;
var chiSizeToy = 0;
var chiSizePup = 0;
var chiSizeS = 0;
var chiSizeM = 0;
var chiSizeL = 0;
var labSizeToy = 0;
var labSizePup = 0;
var labSizeS = 0;
var labSizeM = 0;
var labSizeL = 0;
var greatSizeToy = 0;
var greatSizePup = 0;
var greatSizeS = 0;
var greatSizeM = 0;
var greatSizeL = 0;
var parSizeToy = 0;
var parSizePup = 0;
var parSizeS = 0;
var parSizeM = 0;
var parSizeL = 0;
var pitSizeToy = 0;
var pitSizePup = 0;
var pitSizeS = 0;
var pitSizeM = 0;
var pitSizeL = 0;
var pomSizeToy = 0;
var pomSizePup = 0;
var pomSizeS = 0;
var pomSizeM = 0;
var pomSizeL = 0;
var poodSizeToy = 0;
var poodSizePup = 0;
var poodSizeS = 0;
var poodSizeM = 0;
var poodSizeL = 0;
var pugSizeToy = 0;
var pugSizePup = 0;
var pugSizeS = 0;
var pugSizeM = 0;
var pugSizeL = 0;
var rottSizeToy = 0;
var rottSizePup = 0;
var rottSizeS = 0;
var rottSizeM = 0;
var rottSizeL = 0;
var shihSizeToy = 0;
var shihSizePup = 0;
var shihSizeS = 0;
var shihSizeM = 0;
var shihSizeL = 0;
var sibSizeToy = 0;
var sibSizePup = 0;
var sibSizeS = 0;
var sibSizeM = 0;
var sibSizeL = 0;
var yorkSizeToy = 0;
var yorkSizePup = 0;
var yorkSizeS = 0;
var yorkSizeM = 0;
var yorkSizeL = 0;
var germAvgSize, aHuskyAvgSize, yorkAvgSize, pugAvgSize, borderAvgSize, cairnAvgSize, chiAvgSize, labAvgSize, parAvgSize, pitAvgSize, poodAvgSize, shihAvgSize, sibAvgSize, sibAvgSize, greatAvgSize, pomAvgSize;
var aHuskySizeToy = 0;
var germAvgAge, aHuskyAvgAge, yorkAvgAge, pugAvgAge, borderAvgAge, cairnAvgAge, chiAvgAge, labAvgAge, parAvgAge, pitAvgAge, poodAvgAge, shihAvgAge, sibAvgAge, greatAvgAge, pomAvgAge, rottAvgAge;
var germAge, aHuskyAge, borderCollieAge, cairnAge, chiAge, greatPAge, parsonAge, pitbullAge, pomAge, poodleAge, pugAge, rottAge, shihTzuAge, sibAge, yorkAge, labAge;
var dogDaysAvg;
var dogDays = 0;
var dogNum = 0;
var dogSizeToy = 0;
var dogSizePup = 0;
var dogSizeS = 0;
var dogSizeM = 0;
var dogSizeL = 0;
var dogAvgSize;

var adoption = 0;
var died = 0;
var disposal = 0;
var euthanized = 0;
var returned = 0;
var rtos = 0;
var transferred = 0;

var healthy = 0;
var manageable = 0;
var rehab = 0;
var unknown = 0;
var untreatable = 0;


var adoptionDog = 0;
var diedDog = 0;
var disposalDog = 0;
var euthanizedDog = 0;
var returnedDog = 0;
var rtosDog = 0;
var transferredDog = 0;

var healthyDog = 0;
var manageableDog = 0;
var rehabDog = 0;
var unknownDog = 0;
var untreatableDog = 0;

const outerRadius = 95;
const innerRadius = 55;

const centerX = 804;
const centerY = 439;

const centerXDog = 1341;
const centerYDog = 439;

const centerXIC = 804;
const centerYIC = 803;

const centerXDogIC = 1341;
const centerYDogIC = 803;

var donutColors = [
    {'colorPalette' : '#a3a598'},
    {'colorPalette' : '#353a34'},
    {'colorPalette' : '#b0b0b0'},
    {'colorPalette' : '#e8d7cd'},
    {'colorPalette' : '#CDDDDC'},
    {'colorPalette' : '#d0a47d'},
    {'colorPalette' : '#b4c1b8'}
]



function preload(){
    logo = loadImage("dogsForDaysLogo.png");
    centuryGothic = loadFont("GOTHIC.TTF");
    centuryGothicBold = loadFont("GOTHICB.TTF");
    arrow = loadImage("arrow.png");
    boneB = loadImage("boneBlue.png");
    boneY = loadImage("boneYellow.png");
    boneP = loadImage("bonePink.png");
    boneG = loadImage("boneGreen.png");
    boneDG = loadImage("boneDGreen.png");
    dogData = loadJSON("https://data.sonomacounty.ca.gov/resource/924a-vesw.json");

    germ = loadImage("germ.png");
    aHusky = loadImage("aHusky.png");
    borderCollie = loadImage("borderCollie.png");
    cairn = loadImage("cairn.png");
    chi = loadImage("chi.png");
    greatP = loadImage("greatPyrenesse.png");
    parson = loadImage("parson.png");
    pitbull = loadImage("pitbull.png");
    pom = loadImage("pomeranian.png");
    poodle = loadImage("poodle.png");
    pug = loadImage("pug.png");
    rott = loadImage("rott.png");
    shihTzu = loadImage("shihTzu.png");
    sib = loadImage("sib.png");
    york = loadImage("yorkshire.png");
    lab = loadImage("lab.png");
}

function setup(){
    createCanvas(1728, 1000);
    countDog();
}

function draw(){
    background(252, 249, 244);
    image(logo, 780, 38, 168, 160);
    noStroke();
    textFont(centuryGothicBold);
    textSize(16);
    fill(53, 58, 52);
    textAlign(CENTER);
    text("About", 473, 100, 113, 35);
    text("Learn about a dog", 1142, 100, 150, 35);
    


    if (stage == 1){
        textSize(40);
        text("About Dogs For Days", 472, 254, 784, 49);
        textSize(24);
        text("Coming soon", 606, 387, 516, 29);
    }

    if (stage == 2){
        textSize(40);
        textAlign(CENTER);
        text("Dogs in Sonoma County Shelter", 560, 212, 620, 49);
        stroke(53, 58, 52);
        strokeWeight(1);
        line(865, 279, 865, 927);
        line(271, 642, 1457, 642);
        textSize(20);
        textFont(centuryGothic);
        text("Size of dog", 794, 950, 150, 25);
        textSize(20);
        text("Days in shelter", 1350, 660, 150, 25);
        
        // Include image and data of dogs

        dogChart();

    }

    //Charts - Germ
    if (stage == 3){
        textSize(40);
        textAlign(CENTER);
        // Change this once we put the data in
        text("German Shepard Average vs. Shelter Average", 293, 212, 1143, 49);
        // Add bar graph of the two dogs we're comparing. Hover to see number
        stroke(53, 58, 52);
        strokeWeight(1);
        line(204, 904, 586, 904);
        textSize(20);
        noStroke();
        textAlign(CENTER);
        textFont(centuryGothicBold);
        text("# of days in the shelter", 204, 918, 114, 80);
        text("# of dogs", 338, 918, 114, 80);
        text("Size", 472, 918, 114, 50);

        //Bar Chart
        fill(208, 164, 125);
        rect(224, 893-(germAvg*10), 68, germAvg*10);
        rect(496, 893-(germAvgSize*30), 68, germAvgSize*30);

        fill(232, 215, 205);
        rect(224, 893-(dogDaysAvg*10), 68, dogDaysAvg*10);
        rect(361, 893-(dogNum), 68, dogNum);
        rect(496, 893-(dogAvgSize*30), 68, dogAvgSize*30);

        fill(208, 164, 125);
        rect(361, 893-(germNum), 68, germNum);

        donutGermIC();
        donutDogIC();
       
        //Outcome type
        //Dog we're comparing (change this)
        donutGerm();
        fill(53, 58, 52);
        textSize(16);
        textFont(centuryGothic);
        text("German Shepard", 750, 420, 114, 80);
        text("German Shepard", 750, 785, 114, 80);
        

        //Shelter dogs
        donutDogs();
        fill(53, 58, 52);
        textSize(16);
        textFont(centuryGothic);
        text("Shelter dogs", 1305, 420, 80, 40);
        text("Shelter dogs", 1305, 785, 80, 40);

        //outcome type text
        textAlign(LEFT);
        textSize(12);
        text("Disposed", 1070, 400, 100, 20);
        text("RTOS", 1070, 420, 100, 20);
        text("Euthanized", 1070, 440, 100, 20);
        text("Transfered", 1070, 460, 100, 20);
        text("Died", 1070, 480, 100, 20);
        text("Adopted", 1070, 500, 100, 20);
        text("Returned", 1070, 520, 100, 20);

        //income condition text
        textAlign(LEFT);
        textSize(12);
        text("Healthy", 1070, 800, 100, 20);
        text("Manageable", 1070, 820, 100, 20);
        text("Rehab", 1070, 840, 100, 20);
        text("Unknown", 1070, 860, 100, 20);
        text("Untreatable", 1070, 880, 100, 20);
        
        // outcome type legend
        fill(donutColors[0].colorPalette);
        rect(1050, 400, 15, 15);
        fill(donutColors[1].colorPalette);
        rect(1050, 420, 15, 15);
        fill(donutColors[2].colorPalette);
        rect(1050, 440, 15, 15);
        fill(donutColors[3].colorPalette);
        rect(1050, 460, 15, 15);
        fill(donutColors[4].colorPalette);
        rect(1050, 480, 15, 15);
        fill(donutColors[5].colorPalette);
        rect(1050, 500, 15, 15);
        fill(donutColors[6].colorPalette);
        rect(1050, 520, 15, 15);

         // intake condition legend
         fill(donutColors[0].colorPalette);
         rect(1050, 800, 15, 15);
         fill(donutColors[1].colorPalette);
         rect(1050, 820, 15, 15);
         fill(donutColors[2].colorPalette);
         rect(1050, 840, 15, 15);
         fill(donutColors[3].colorPalette);
         rect(1050, 860, 15, 15);
         fill(donutColors[4].colorPalette);
         rect(1050, 880, 15, 15);

        textAlign(CENTER);
        textSize(16);
        fill(53, 58, 52);
        textFont(centuryGothicBold);
        text("Outcome Type", 1000, 350, 150, 20);
        text("Intake Condition", 1000, 750, 150, 20);
       
        
        // fill(0);
        // textAlign(CENTER);
        // text("June 2016", width/2, 225);
        // text("Cambridge, Massachusetts", width/2, 355);

        // //Shelter dogs
        // fill(180, 193, 184);
        // ellipse(1341, 439, 300, 300);
        // textSize(16);
        // textFont(centuryGothic);
        // text("Shelter Dogs", 1283, 429, 114, 20);

        // textSize(20);
        // fill(53, 58, 52);
        // noStroke();
        

        // //Intake Condition
        //  //Dog we're comparing (change this)
        // fill(205, 221, 220);
        // ellipse(804, 803, 300, 300);
        // textSize(16);
        // textFont(centuryGothic);
        // text("(this breed)", 1283, 793, 114, 20);

        // //Shelter dogs
        // fill(180, 193, 184);
        // ellipse(1341, 803, 300, 300);
        // textSize(16);
        // textFont(centuryGothic);
        // text("Shelter Dogs", 1283, 793, 114, 20);

        // textSize(20);
        // fill(53, 58, 52);
        // noStroke();
        // textAlign(CENTER);
        // textFont(centuryGothicBold);
        // text("Intake Condition", 1008, 758, 114, 50);

        //Learn more button
        textSize(20);
        textAlign(CENTER);
        text("Learn More", 1544, 576, 120, 25);
        image(arrow, 1572, 615, 57, 22);

    }

    if (stage == 4){
        textSize(40);
        textAlign(CENTER);
        text("Click on a bone to learn more about (this breed)", 472, 212, 784, 98);

        //bones
        image(boneB, 204, 364, 248, 248);
        image(boneY, 473, 364, 248, 248);
        image(boneP, 740, 364, 248, 248);
        image(boneG, 1008, 364, 248, 248);
        image(boneDG, 1276, 364, 248, 248);

        image(boneDG, 204, 612, 248, 248);
        image(boneG, 473, 612, 248, 248);
        image(boneP, 740, 612, 248, 248);
        image(boneY, 1008, 612, 248, 248);
        image(boneB, 1276, 612, 248, 248);
    }


    if (stage == 5){
        //change image depending on dog
        fill(208, 164, 125);
        rect(204, 284, 650, 650);
        textSize(32);
        textAlign(LEFT);
        textFont(centuryGothic);
        fill(53, 58, 52);
        text("Hello! I am (name), and I'm a (breed)", 871, 546, 585, 39);
        text("I have been in the animal shelter for (days)", 871, 637, 766, 39);
        textSize(20);
        textAlign(CENTER);
        textFont(centuryGothicBold);
        text("Learn More", 1410, 830, 120, 25);
        image(arrow, 1544, 833, 57, 22);
    }

    if (stage == 6){
        //change image depending on dog
        fill(208, 164, 125);
        rect(204, 284, 650, 650);
        textSize(32);
        textAlign(LEFT);
        textFont(centuryGothic);
        fill(53, 58, 52);
        text("I am (age) years old, and I am a (size) size dog", 871, 598, 653, 78);
        textSize(20);
        textAlign(CENTER);
        textFont(centuryGothicBold);
        text("Learn More", 1410, 830, 120, 25);
        image(arrow, 1544, 833, 57, 22);
    }

    if (stage == 7){
        //change image depending on dog
        fill(208, 164, 125);
        rect(204, 284, 650, 650);
        textSize(32);
        textAlign(LEFT);
        textFont(centuryGothic);
        fill(53, 58, 52);
        text("I know we just met, but I'm (neutered / not neutered).", 871, 546, 585, 39);
        text("I am here because (reason for intake)", 871, 637, 766, 39);
        textSize(20);
        textAlign(CENTER);
        textFont(centuryGothicBold);
        text("Learn More", 1410, 830, 120, 25);
        image(arrow, 1544, 833, 57, 22);
    }
    
    if (stage == 8){
        //change image depending on dog
        fill(208, 164, 125);
        rect(204, 284, 650, 650);
        textSize(32);
        textAlign(LEFT);
        textFont(centuryGothic);
        fill(53, 58, 52);
        text("I left because (outcome type)", 871, 598, 653, 78);
        textSize(20);
        textFont(centuryGothicBold);
        text("Learn More About Other (this breed) In The Shelter", 1276, 820, 250, 50);
        image(arrow, 1544, 833, 57, 22);
    }
}

function mouseClicked(){
    if(mouseX>473 && mouseX<586 && mouseY>100 && mouseY<135){
        stage = 1;
    }
    else if(mouseX>1142 && mouseX<1262 && mouseY>100 && mouseY<135){
        stage = 2;
    }

    else if(stage == 5 && mouseX>1544 && mouseX<1601 && mouseY>833 && mouseY<855){
        stage = 6;
    } 
    else if(stage == 6 && mouseX>1544 && mouseX<1601 && mouseY>833 && mouseY<855){
        stage = 7;
    } 
    else if(stage == 7 && mouseX>1544 && mouseX<1601 && mouseY>833 && mouseY<855){
        stage = 8;
    } 
    else if(stage == 8 && mouseX>1544 && mouseX<1601 && mouseY>833 && mouseY<855){
        stage = 4;
    }
    //Chihuahua
    else if(stage == 2 && mouseX>chiAvg*45 && mouseX<((chiAvg*45)+(1.16*chiNum)) && mouseY>(1000-(125*chiAvgSize)) && mouseY<((1000-(125*chiAvgSize))+(1*chiNum))){
        stage = 3;
    }
    //German
    else if(stage == 2 && mouseX>germAvg*45 && mouseX<((germAvg*45)+(3.02*germNum)) && mouseY>(1000-(125*germAvgSize)) && mouseY<((1000-(125*germAvgSize))+(2*germNum))){
        stage = 3;
    }
    //Alaskan Husky
    else if(stage == 2 && mouseX>aHuskyAvg*45 && mouseX<((aHuskyAvg*45)+(2.48*aHuskyNum)) && mouseY>(1000-(125*aHuskyAvgSize)) && mouseY<((1000-(125*aHuskyAvgSize))+(2*aHuskyNum))){
        stage = 3;
    }
    //GreatP
    else if(stage == 2 && mouseX>greatAvg*45 && mouseX<((greatAvg*45)+(2.42*greatNum)) && mouseY>(1000-(125*greatAvgSize)) && mouseY<((1000-(125*greatAvgSize))+(2*greatNum))){
        stage = 3;
    }
    //pitbull
    else if(stage == 2 && mouseX>pitAvg*45 && mouseX<((pitAvg*45)+(2.80*pitNum)) && mouseY>(1000-(125*pitAvgSize)) && mouseY<((1000-(125*pitAvgSize))+(2*pitNum))){
        stage = 3;
    }
    //Pom
    else if(stage == 2 && mouseX>pomAvg*45 && mouseX<((pomAvg*45)+(2.00*pomNum)) && mouseY>(1000-(125*pomAvgSize)) && mouseY<((1000-(125*pomAvgSize))+(2*pomNum))){
        stage = 3;
    }
    //poodle
    else if(stage == 2 && mouseX>poodAvg*45 && mouseX<((poodAvg*45)+(1.62*poodNum)) && mouseY>(1000-(125*poodAvgSize)) && mouseY<((1000-(125*poodAvgSize))+(2*poodNum))){
        stage = 3;
    }
    //Pug
    else if(stage == 2 && mouseX>pugAvg*45 && mouseX<((pugAvg*45)+(2.06*pugNum)) && mouseY>(1000-(125*pugAvgSize)) && mouseY<((1000-(125*pugAvgSize))+(2*pugNum))){
        stage = 3;
    }
    //Rott
    else if(stage == 2 && mouseX>rottAvg*45 && mouseX<((rottAvg*45)+(2.56*rottNum)) && mouseY>(1000-(125*rottAvgSize)) && mouseY<((1000-(125*rottAvgSize))+(2*rottNum))){
        stage = 3;
    }
    //ShihTzu
    else if(stage == 2 && mouseX>shihAvg*45 && mouseX<((shihAvg*45)+(2.4*shihNum)) && mouseY>(1000-(125*shihAvgSize)) && mouseY<((1000-(125*shihAvgSize))+(2*shihNum))){
        stage = 3;
    }
    //Sib
    else if(stage == 2 && mouseX>sibAvg*45 && mouseX<((sibAvg*45)+(2.48*sibNum)) && mouseY>(1000-(125*sibAvgSize)) && mouseY<((1000-(125*sibAvgSize))+(2*sibNum))){
        stage = 3;
    }
    //York
    else if(stage == 2 && mouseX>yorkAvg*45 && mouseX<((yorkAvg*45)+(1.94*yorkNum)) && mouseY>(1000-(125*yorkAvgSize)) && mouseY<((1000-(125*yorkAvgSize))+(2*yorkNum))){
        stage = 3;
    }
    //Lab
    else if(stage == 2 && mouseX>labAvg*45 && mouseX<((labAvg*45)+(2.48*labNum)) && mouseY>(1000-(125*labAvgSize)) && mouseY<((1000-(125*labAvgSize))+(2*labNum))){
        stage = 3;
    }
    //Collie
    else if(stage == 2 && mouseX>borderAvg*45 && mouseX<((borderAvg*45)+(2.64*borderNum)) && mouseY>(1000-(125*borderAvgSize)) && mouseY<((1000-(125*borderAvgSize))+(2*borderNum))){
        stage = 3;
    }
    //Cairn
    else if(stage == 2 && mouseX>cairnAvg*45 && mouseX<((cairnAvg*45)+(2.32*cairnNum)) && mouseY>(1000-(125*cairnAvgSize)) && mouseY<((1000-(125*cairnAvgSize))+(2*cairnNum))){
        stage = 3;
    }
    //Parson
    else if(stage == 2 && mouseX>parAvg*45 && mouseX<((parAvg*45)+(2.32*parNum)) && mouseY>(1000-(125*parAvgSize)) && mouseY<((1000-(125*parAvgSize))+(2*parNum))){
        stage = 3;
    }
    else if(stage == 3 && mouseX>1572 && mouseX<1629 && mouseY>615 && mouseY<637){
        stage = 4;
    }
    else if(stage == 4 && mouseX>204 && mouseX<452 && mouseY>364 && mouseY<612){
        stage = 5;
    }
    
 
}

function countDog(){
    for(var i=0; i<999; i++){
        var breed =  dogData[i].breed;
        var size = dogData[i].size;
        var type = dogData[i].type;
        var outcomeType = dogData[i].outcome_type;
        var intakeCondition = dogData[i].intake_condition;

        if(String(type)=="DOG"){
            dogDays += int(dogData[i].days_in_shelter);
            
            if(size == "TOY"){
                dogSizeToy++;
            }
            if(size == "PUPPY"){
                dogSizePup += 2;
            }
            if(size == "SMALL"){
                dogSizeS += 3;
            }
            if(size == "MED"){
                dogSizeM += 4;
            }
            if(size == "LARGE"){
                dogSizeL += 5;
            }
            
            if(outcomeType == "ADOPTION"){
                adoptionDog++;
            }
            if(outcomeType == "DIED"){
                diedDog++;
            }
            if(outcomeType == "DISPOSAL"){
                disposalDog++;
            }
            if(outcomeType == "EUTHANIZE"){
                euthanizedDog++;
            }
            if(outcomeType == "RETURN TO OWNER"){
                returnedDog++;
            }
            if(outcomeType == "RTOS"){
                rtosDog++;
            }
            if(outcomeType == "TRANSFER"){
                transferredDog++;
            } 

            if(intakeCondition == "HEALTHY"){
                healthyDog++;
            }
            if(intakeCondition == "TREATABLE/MANAGEABLE"){
                manageableDog++;
            }
            if(intakeCondition == "TREATABLE/REHAB"){
                rehabDog++;
            }
            if(intakeCondition == "UNKNOWN"){
                unknownDog++;
            }
            if(intakeCondition == "UNTREATABLE"){
                untreatableDog++;
            }


            dogAvgSize = (dogSizeToy + dogSizePup + dogSizeS + dogSizeM + dogSizeL) / dogNum;

            dogNum = adoptionDog + diedDog + disposalDog + euthanizedDog + returnedDog + rtosDog + transferredDog;
            dogDaysAvg = dogDays / dogNum;
        }

        if(String(breed).includes("GERM")){
            
            if(size == "TOY"){
                germSizeToy++;
            }
            if(size == "PUPPY"){
                germSizePup += 2;
            }
            if(size == "SMALL"){
                germSizeS += 3;
            }
            if(size == "MED"){
                germSizeM += 4;
            }
            if(size == "LARGE"){
                germSizeL += 5;
            }
            germAvgSize = (germSizeToy + germSizePup + germSizeS + germSizeM + germSizeL) / germNum;

            if(outcomeType == "ADOPTION"){
                adoption++;
            }
            if(outcomeType == "DIED"){
                died++;
            }
            if(outcomeType == "DISPOSAL"){
                disposal++;
            }
            if(outcomeType == "EUTHANIZE"){
                euthanized++;
            }
            if(outcomeType == "RETURN TO OWNER"){
                returned++;
            }
            if(outcomeType == "RTOS"){
                rtos++;
            }
            if(outcomeType == "TRANSFER"){
                transferred++;
            } 

            if(intakeCondition == "HEALTHY"){
                healthy++;
            }
            if(intakeCondition == "TREATABLE/MANAGEABLE"){
                manageable++;
            }
            if(intakeCondition == "TREATABLE/REHAB"){
                rehab++;
            }
            if(intakeCondition == "UNKNOWN"){
                unknown++;
            }
            if(intakeCondition == "UNTREATABLE"){
                untreatable++;
            }


            germNum = adoption + died + disposal + euthanized + returned + rtos + transferred;
            germDays += int(dogData[i].days_in_shelter);
            germAvg = germDays / germNum;
        }
       
        if(String(breed).includes("ALASKAN")){
            aHuskyNum++;
            aHuskyDays += int(dogData[i].days_in_shelter);
            aHuskyAvg = aHuskyDays / aHuskyNum;
            if(size == "TOY"){
                aHuskySizeToy++;
            }
            if(size == "PUPPY"){
                aHuskySizePup += 2;
            }
            if(size == "SMALL"){
                aHuskySizeS += 3;
            }
            if(size == "MED"){
                aHuskySizeM += 4;
            }
            if(size == "LARGE"){
                aHuskySizeL += 5;
            }
            aHuskyAvgSize = (aHuskySizeToy + aHuskySizePup + aHuskySizeS + aHuskySizeM + aHuskySizeL) / aHuskyNum;
        }
       
        if(String(breed).includes("YORKS")){
            yorkNum++;
            yorkDays += int(dogData[i].days_in_shelter);
            yorkAvg = yorkDays / yorkNum;
            if(size == "TOY"){
                yorkSizeToy++;
            }
            if(size == "PUPPY"){
                yorkSizePup += 2;
            }
            if(size == "SMALL"){
                yorkSizeS += 3;
            }
            if(size == "MED"){
                yorkSizeM += 4;
            }
            if(size == "LARGE"){
                yorkSizeL += 5;
            }
            yorkAvgSize = (yorkSizeToy + yorkSizePup + yorkSizeS + yorkSizeM + yorkSizeL) / yorkNum;
        }
       
        if(String(breed).includes("PUG")){
            pugNum++;
            pugDays += int(dogData[i].days_in_shelter);
            pugAvg = pugDays / pugNum;
            if(size == "TOY"){
                pugSizeToy++;
            }
            if(size == "PUPPY"){
                pugSizePup += 2;
            }
            if(size == "SMALL"){
                pugSizeS += 3;
            }
            if(size == "MED"){
                pugSizeM += 4;
            }
            if(size == "LARGE"){
                pugSizeL += 5;
            }
            pugAvgSize = (pugSizeToy + pugSizePup + pugSizeS + pugSizeM + pugSizeL) / pugNum;
        }
       
        if(String(breed).includes("BORDER")){
            borderNum++;
            borderDays += int(dogData[i].days_in_shelter);
            borderAvg = borderDays / borderNum;
            if(size == "TOY"){
                borderSizeToy++;
            }
            if(size == "PUPPY"){
                borderSizePup += 2;
            }
            if(size == "SMALL"){
                borderSizeS += 3;
            }
            if(size == "MED"){
                borderSizeM += 4;
            }
            if(size == "LARGE"){
                borderSizeL += 5;
            }
            borderAvgSize = (borderSizeToy + borderSizePup + borderSizeS + borderSizeM + borderSizeL) / borderNum;
        }
       
        if(String(breed).includes("CAIRN")){
            cairnNum++;
            cairnDays += int(dogData[i].days_in_shelter);
            cairnAvg = cairnDays / cairnNum;
            if(size == "TOY"){
                cairnSizeToy++;
            }
            if(size == "PUPPY"){
                cairnSizePup += 2;
            }
            if(size == "SMALL"){
                cairnSizeS += 3;
            }
            if(size == "MED"){
                cairnSizeM += 4;
            }
            if(size == "LARGE"){
                cairnSizeL += 5;
            }
            cairnAvgSize = (cairnSizeToy +cairnSizePup + cairnSizeS +cairnSizeM +cairnSizeL) / cairnNum;
        }
       
        if(String(breed).includes("CHI")){
            chiNum++;
            chiDays += int(dogData[i].days_in_shelter);
            chiAvg = chiDays / chiNum;
            if(size == "TOY"){
                chiSizeToy++;
            }
            if(size == "PUPPY"){
                chiSizePup += 2;
            }
            if(size == "SMALL"){
                chiSizeS += 3;
            }
            if(size == "MED"){
                chiSizeM += 4;
            }
            if(size == "LARGE"){
                chiSizeL += 5;
            }
            chiAvgSize = (chiSizeToy + chiSizePup + chiSizeS + chiSizeM + chiSizeL) / chiNum;
            
        }
       
        if(String(breed).includes( "LAB")){
            labNum++;
            labDays += int(dogData[i].days_in_shelter);
            labAvg = labDays / labNum;
            if(size == "TOY"){
                labSizeToy++;
            }
            if(size == "PUPPY"){
                labSizePup += 2;
            }
            if(size == "SMALL"){
                labSizeS += 3;
            }
            if(size == "MED"){
                labSizeM += 4;
            }
            if(size == "LARGE"){
                labSizeL += 5;
            }
            labAvgSize = (labSizeToy + labSizePup + labSizeS + labSizeM + labSizeL) / labNum;
        }
       
        if(String(breed).includes( "PAR")){
            parNum++;
            parDays += int(dogData[i].days_in_shelter);
            parAvg = parDays / parNum;
            if(size == "TOY"){
                parSizeToy++;
            }
            if(size == "PUPPY"){
                parSizePup += 2;
            }
            if(size == "SMALL"){
                parSizeS += 3;
            }
            if(size == "MED"){
                parSizeM += 4;
            }
            if(size == "LARGE"){
                parSizeL += 5;
            }
            parAvgSize = (parSizeToy + parSizePup + parSizeS + parSizeM + parSizeL) / parNum;
        }
       
        if(String(breed).includes("PIT")){
            pitNum++;
            pitDays += int(dogData[i].days_in_shelter);
            pitAvg = pitDays / pitNum;
            if(size == "TOY"){
                pitSizeToy++;
            }
            if(size == "PUPPY"){
                pitSizePup += 2;
            }
            if(size == "SMALL"){
                pitSizeS += 3;
            }
            if(size == "MED"){
                pitSizeM += 4;
            }
            if(size == "LARGE"){
                pitSizeL += 5;
            }
            pitAvgSize = (pitSizeToy + pitSizePup + pitSizeS + pitSizeM + pitSizeL) / pitNum;
        }
        
        if(String(breed).includes( "POOD")){
            poodNum++;
            poodDays += int(dogData[i].days_in_shelter);
            poodAvg = pomDays / poodNum;
            if(size == "TOY"){
                poodSizeToy++;
            }
            if(size == "PUPPY"){
                poodSizePup += 2;
            }
            if(size == "SMALL"){
                poodSizeS += 3;
            }
            if(size == "MED"){
                poodSizeM += 4;
            }
            if(size == "LARGE"){
                poodSizeL += 5;
            }
            poodAvgSize = (poodSizeToy + poodSizePup + poodSizeS + poodSizeM + poodSizeL) / poodNum;
        }
       
        if(String(breed).includes("SHIH")){
            shihNum++;
            shihDays += int(dogData[i].days_in_shelter);
            shihAvg = shihDays / shihNum;
            if(size == "TOY"){
                shihSizeToy++;
            }
            if(size == "PUPPY"){
                shihSizePup += 2;
            }
            if(size == "SMALL"){
                shihSizeS += 3;
            }
            if(size == "MED"){
                shihSizeM += 4;
            }
            if(size == "LARGE"){
                shihSizeL += 5;
            }
            shihAvgSize = (shihSizeToy + shihSizePup + shihSizeS + shihSizeM + shihSizeL) / shihNum;
        }
        if(String(breed).includes( "SIB")){
            sibNum++;
            sibDays += int(dogData[i].days_in_shelter);
            sibAvg = sibDays / sibNum;
            if(size == "TOY"){
                sibSizeToy++;
            }
            if(size == "PUPPY"){
                sibSizePup += 2;
            }
            if(size == "SMALL"){
                sibSizeS += 3;
            }
            if(size == "MED"){
                sibSizeM += 4;
            }
            if(size == "LARGE"){
                sibSizeL += 5;
            }
            sibAvgSize = (sibSizeToy + sibSizePup + sibSizeS + sibSizeM + sibSizeL) / sibNum;
        }
        if(String(breed).includes("ROTT")){
            rottNum++;
            rottDays += int(dogData[i].days_in_shelter);
            rottAvg = rottDays / rottNum;
            if(size == "TOY"){
                rottSizeToy++;
            }
            if(size == "PUPPY"){
                rottSizePup += 2;
            }
            if(size == "SMALL"){
                rottSizeS += 3;
            }
            if(size == "MED"){
                rottSizeM += 4;
            }
            if(size == "LARGE"){
                rottSizeL += 5;
            }
            rottAvgSize = (rottSizeToy + rottSizePup + rottSizeS + rottSizeM + rottSizeL) / rottNum;
        }
        if(String(breed).includes("GREAT")){
            greatNum++;
            greatDays += int(dogData[i].days_in_shelter);
            greatAvg = greatDays / greatNum;
            if(size == "TOY"){
                greatSizeToy++;
            }
            if(size == "PUPPY"){
                greatSizePup += 2;
            }
            if(size == "SMALL"){
                greatSizeS += 3;
            }
            if(size == "MED"){
                greatSizeM += 4;
            }
            if(size == "LARGE"){
                greatSizeL += 5;
            }
            greatAvgSize = (greatSizeToy + greatSizePup +greatSizeS + greatSizeM + greatSizeL) / greatNum;
        }
        if(String(breed).includes("POM")){
            pomNum++;
            pomDays += int(dogData[i].days_in_shelter);
            pomAvg = pomDays / pomNum;
            if(size == "TOY"){
                pomSizeToy++;
            }
            if(size == "PUPPY"){
                pomSizePup += 2;
            }
            if(size == "SMALL"){
                pomSizeS += 3;
            }
            if(size == "MED"){
                pomSizeM += 4;
            }
            if(size == "LARGE"){
                pomSizeL += 5;
            }
            pomAvgSize = (pomSizeToy +  pomSizePup + pomSizeS +  pomSizeM +  pomSizeL) /  pomNum;
        }
        
    }



    //Hard coded the X and Y
    console.log("Number of German shepards is " + germNum);
    console.log(germAvg);
    console.log(germSizeToy);
    console.log(germSizePup);
    console.log(germSizeS);
    console.log(germSizeM);
    console.log(germSizeL);
    console.log(germAvgSize);
    console.log("Number of Alaskan Husky is " + aHuskyNum);
    console.log(aHuskyAvg);
    console.log(aHuskySizeToy);
    console.log(aHuskySizePup);
    console.log(aHuskySizeS);
    console.log(aHuskySizeM);
    console.log(aHuskySizeL);
    console.log(aHuskyAvgSize);
    console.log("Number of Yorkshire Terrier is " + yorkNum);
    console.log(yorkAvg);
    console.log(yorkSizeToy);
    console.log(yorkSizePup);
    console.log(yorkSizeS);
    console.log(yorkSizeM);
    console.log(yorkSizeL);
    console.log(yorkAvgSize);
    console.log("Number of pugs is " + pugNum);
    console.log(pugAvg);
    console.log(pugSizeToy);
    console.log(pugSizePup);
    console.log(pugSizeS);
    console.log(pugSizeM);
    console.log(pugSizeL);
    console.log(pugAvgSize);
    console.log("Number of Border Collie is " + borderNum);
    console.log(borderAvg);
    console.log(borderSizeToy);
    console.log(borderSizePup);
    console.log(borderSizeS);
    console.log(borderSizeM);
    console.log(borderSizeL);
    console.log(borderAvgSize);
    console.log("Number of Cairn is " + cairnNum);
    console.log(cairnAvg);
    console.log(cairnSizeToy);
    console.log(cairnSizePup);
    console.log(cairnSizeS);
    console.log(cairnSizeM);
    console.log(cairnSizeL);
    console.log(cairnAvgSize);
    console.log("Number of Chihuahua is " + chiNum);
    console.log(chiAvg);
    console.log(chiSizeToy);
    console.log(chiSizePup);
    console.log(chiSizeS);
    console.log(chiSizeM);
    console.log(chiSizeL);
    console.log(chiAvgSize);
    console.log("Number of Labrador is " + labNum);
    console.log(labAvg);
    console.log(labSizeToy);
    console.log(labSizePup);
    console.log(labSizeS);
    console.log(labSizeM);
    console.log(labSizeL);
    console.log(labAvgSize);
    console.log("Number of Parson Russ Ter is " + parNum);
    console.log(parAvg);
    console.log(parSizeToy);
    console.log(parSizePup);
    console.log(parSizeS);
    console.log(parSizeM);
    console.log(parSizeL);
    console.log(parAvgSize);
    console.log("Number of Pit Bull is " + pitNum);
    console.log(pitAvg);
    console.log(pitSizeToy);
    console.log(pitSizePup);
    console.log(pitSizeS);
    console.log(pitSizeM);
    console.log(pitSizeL);
    console.log(pitAvgSize);
    console.log("Number of Poodle is " + poodNum);
    console.log(poodAvg);
    console.log(poodSizeToy);
    console.log(poodSizePup);
    console.log(poodSizeS);
    console.log(poodSizeM);
    console.log(poodSizeL);
    console.log(poodAvgSize);
    console.log("Number of Shih Tzu is " + shihNum);
    console.log(shihAvg);
    console.log(shihSizeToy);
    console.log(shihSizePup);
    console.log(shihSizeS);
    console.log(shihSizeM);
    console.log(shihSizeL);
    console.log(shihAvgSize);
    console.log("Number of Siberian Husky is " + sibNum);
    console.log(sibAvg);
    console.log(sibSizeToy);
    console.log(sibSizePup);
    console.log(sibSizeS);
    console.log(sibSizeM);
    console.log(sibSizeL);
    console.log(sibAvgSize);
    console.log("Number of Rottweiler is " + rottNum);
    console.log(rottAvg);
    console.log(rottSizeToy);
    console.log(rottSizePup);
    console.log(rottSizeS);
    console.log(rottSizeM);
    console.log(rottSizeL);
    console.log(rottAvgSize);
    console.log("Number of Great Pyrenesse is " + greatNum);
    console.log(greatAvg);
    console.log(greatSizeToy);
    console.log(greatSizePup);
    console.log(greatSizeS);
    console.log(greatSizeM);
    console.log(greatSizeL);
    console.log(greatAvgSize);
    console.log("Number of Pomeranians is " + pomNum);
    console.log(pomAvg);
    console.log(pomSizeToy);
    console.log(pomSizePup);
    console.log(pomSizeS);
    console.log(pomSizeM);
    console.log(pomSizeL);
    console.log(pomAvgSize);
    console.log("Average number of days dogs are in the shelter is " + dogDaysAvg);
    console.log("Number of total dogs is " + dogNum);
    console.log("Average size of dog is " + dogAvgSize);

    console.log("Number of germ adopted" + adoption);
    console.log("Number of germ died" + died);
    console.log("Number of germ disposed" + disposal);
    console.log("Number of germ euthanized" + euthanized);
    console.log("Number of germ returned" + returned);
    console.log("Number of germ rtos" + rtos);
    console.log("Number of germ transferred" + transferred);   
    
    console.log("Number of dogs adopted " + adoptionDog);
    console.log("Number of dogs died" + diedDog);
    console.log("Number of dogs disposed" + disposalDog);
    console.log("Number of dogs euthanized" + euthanizedDog);
    console.log("Number of dogs returned" + returnedDog);
    console.log("Number of dogs rtos" + rtosDog);
    console.log("Number of dogs transferred" + transferredDog); 

    console.log("Number of healthy germ " + healthy);
}

function dogChart(){

    image(germ, germAvg*45, 1000-(125*germAvgSize), 3.02*germNum, 2*germNum);
    image(aHusky, aHuskyAvg*45,1000-(125*aHuskyAvgSize), 2.48*aHuskyNum, 2*aHuskyNum);
    image(chi, chiAvg*45,1000-(125*chiAvgSize), 1.16*chiNum, 1*chiNum);
    image(greatP, greatAvg*45, 1000-(125*greatAvgSize), 2.42*greatNum, 2*greatNum);
    image(pitbull, pitAvg*45,  1000-(125*pitAvgSize), 2.80*pitNum, 2*pitNum);
    image(pom, pomAvg*45,  1000-(125*pomAvgSize), 2.00*pomNum, 2*pomNum);
    image(poodle, poodAvg*45,  1000-(125*poodAvgSize), 1.62*poodNum, 2*poodNum);
    image(pug, pugAvg*45,  1000-(125*pugAvgSize), 2.06*pugNum, 2*pugNum);
    image(rott, rottAvg*45,  1000-(125*rottAvgSize), 2.56*rottNum, 2*rottNum);
    image(shihTzu, shihAvg*45, 1000-(125*shihAvgSize), 2.4*shihNum, 2*shihNum);
    image(sib, sibAvg*45,  1000-(125*sibAvgSize), 2.48*sibNum, 2*sibNum);
    image(york, yorkAvg*45,  1000-(125*yorkAvgSize), 1.94*yorkNum, 2*yorkNum);
    image(lab, labAvg*45,  1000-(125*labAvgSize), 2.48*labNum, 2*labNum);
    image(borderCollie, borderAvg*45,  1000-(125*borderAvgSize), 2.64*borderNum, 2*borderNum);
    image(cairn, cairnAvg*45, 1000-(125*cairnAvgSize), 2.32*cairnNum, 2*cairnNum);
    image(parson, parAvg*45,  1000-(125*parAvgSize), 2.32*parNum, 2*parNum);
}

//http://alpha.editor.p5js.org/fry/sketches/rJ9VJmaYx
function donutGerm(){
    //donut chart
    //outcome

    noStroke();
  ellipseMode(RADIUS);
  var angleStart1 = -HALF_PI;
  var angleStart2 = -HALF_PI;
  var angleStart3 = -HALF_PI;
  var angleStart4 = -HALF_PI;
  var angleStart5 = -HALF_PI;
  var angleStart6 = -HALF_PI;
  var angleStart7 = -HALF_PI;
  for (var c = 0; c < 7; c++) {
    fill(donutColors[c].colorPalette);
    var wedgeSize1 = map(adoption, 0, germNum, 0, TAU);
    var wedgeSize2 = map(died, 0, germNum, 0, TAU);
    var wedgeSize3 = map(disposal, 0, germNum, 0, TAU);
    var wedgeSize4 = map(euthanized, 0, germNum, 0, TAU);
    var wedgeSize5 = map(returned, 0, germNum, 0, TAU);
    var wedgeSize6 = map(rtos, 0, germNum, 0, TAU);
    var wedgeSize7 = map(transferred, 0, germNum, 0, TAU);
    var angleStop1 = angleStart1 + wedgeSize1;
    var angleStop2 = angleStart2 + wedgeSize2;
    var angleStop3 = angleStart3 + wedgeSize3;
    var angleStop4 = angleStart4 + wedgeSize4;
    var angleStop5 = angleStart5 + wedgeSize5;
    var angleStop6 = angleStart6 + wedgeSize6;
    var angleStop7 = angleStart7 + wedgeSize7;
    arc(centerX, centerY, outerRadius, outerRadius, angleStart1, angleStop1);
    arc(centerX, centerY, outerRadius, outerRadius, angleStart2, angleStop2);
    arc(centerX, centerY, outerRadius, outerRadius, angleStart3, angleStop3);
    arc(centerX, centerY, outerRadius, outerRadius, angleStart4, angleStop4);
    arc(centerX, centerY, outerRadius, outerRadius, angleStart5, angleStop5);
    arc(centerX, centerY, outerRadius, outerRadius, angleStart6, angleStop6);
    arc(centerX, centerY, outerRadius, outerRadius, angleStart7, angleStop7);
    angleStart1 = angleStop7;
    angleStart2 = angleStop1;
    angleStart3 = angleStop2;
    angleStart4 = angleStop3;
    angleStart5 = angleStop4;
    angleStart6 = angleStop5;
    angleStart7 = angleStop6;
  }
  // knock a hole out of the middle
  fill(252, 249, 244);
  ellipse(centerX, centerY, innerRadius, innerRadius);
}

function donutGermIC(){
    noStroke();
    ellipseMode(RADIUS);
    var angleStart1 = -HALF_PI;
    var angleStart2 = -HALF_PI;
    var angleStart3 = -HALF_PI;
    var angleStart4 = -HALF_PI;
    var angleStart5 = -HALF_PI;

    for (var c = 0; c < 5; c++) {
      fill(donutColors[c].colorPalette);
      var wedgeSize1 = map(healthy, 0, germNum, 0, TAU);
      var wedgeSize2 = map(manageable, 0, germNum, 0, TAU);
      var wedgeSize3 = map(rehab, 0, germNum, 0, TAU);
      var wedgeSize4 = map(unknown, 0, germNum, 0, TAU);
      var wedgeSize5 = map(untreatable, 0, germNum, 0, TAU);

      var angleStop1 = angleStart1 + wedgeSize1;
      var angleStop2 = angleStart2 + wedgeSize2;
      var angleStop3 = angleStart3 + wedgeSize3;
      var angleStop4 = angleStart4 + wedgeSize4;
      var angleStop5 = angleStart5 + wedgeSize5;

      arc(centerXIC, centerYIC, outerRadius, outerRadius, angleStart1, angleStop1);
      arc(centerXIC, centerYIC, outerRadius, outerRadius, angleStart2, angleStop2);
      arc(centerXIC, centerYIC, outerRadius, outerRadius, angleStart3, angleStop3);
      arc(centerXIC, centerYIC, outerRadius, outerRadius, angleStart4, angleStop4);
      arc(centerXIC, centerYIC, outerRadius, outerRadius, angleStart5, angleStop5);

      angleStart1 = angleStop5;
      angleStart2 = angleStop1;
      angleStart3 = angleStop2;
      angleStart4 = angleStop3;
      angleStart5 = angleStop4;
    }

    fill(252, 249, 244);
  ellipse(centerXIC, centerYIC, innerRadius, innerRadius);

}

function donutDogIC(){
    noStroke();
    ellipseMode(RADIUS);
    var angleStart1 = -HALF_PI;
    var angleStart2 = -HALF_PI;
    var angleStart3 = -HALF_PI;
    var angleStart4 = -HALF_PI;
    var angleStart5 = -HALF_PI;

    for (var c = 0; c < 5; c++) {
      fill(donutColors[c].colorPalette);
      var wedgeSize1 = map(healthyDog, 0, dogNum, 0, TAU);
      var wedgeSize2 = map(manageableDog, 0, dogNum, 0, TAU);
      var wedgeSize3 = map(rehabDog, 0, dogNum, 0, TAU);
      var wedgeSize4 = map(unknownDog, 0, dogNum, 0, TAU);
      var wedgeSize5 = map(untreatableDog, 0, dogNum, 0, TAU);

      var angleStop1 = angleStart1 + wedgeSize1;
      var angleStop2 = angleStart2 + wedgeSize2;
      var angleStop3 = angleStart3 + wedgeSize3;
      var angleStop4 = angleStart4 + wedgeSize4;
      var angleStop5 = angleStart5 + wedgeSize5;

      arc(centerXDogIC, centerYDogIC, outerRadius, outerRadius, angleStart1, angleStop1);
      arc(centerXDogIC, centerYDogIC, outerRadius, outerRadius, angleStart2, angleStop2);
      arc(centerXDogIC, centerYDogIC, outerRadius, outerRadius, angleStart3, angleStop3);
      arc(centerXDogIC, centerYDogIC, outerRadius, outerRadius, angleStart4, angleStop4);
      arc(centerXDogIC, centerYDogIC, outerRadius, outerRadius, angleStart5, angleStop5);

      angleStart1 = angleStop5;
      angleStart2 = angleStop1;
      angleStart3 = angleStop2;
      angleStart4 = angleStop3;
      angleStart5 = angleStop4;
    }

    fill(252, 249, 244);
  ellipse(centerXDogIC, centerYIC, innerRadius, innerRadius);

}

function donutDogs(){
    //donut chart
    //outcome

    noStroke();
  ellipseMode(RADIUS);
  var angleStart1 = -HALF_PI;
  var angleStart2 = -HALF_PI;
  var angleStart3 = -HALF_PI;
  var angleStart4 = -HALF_PI;
  var angleStart5 = -HALF_PI;
  var angleStart6 = -HALF_PI;
  var angleStart7 = -HALF_PI;
  for (var c = 0; c < 7; c++) {
    fill(donutColors[c].colorPalette);
    var wedgeSize1 = map(adoptionDog, 0, dogNum, 0, TAU);
    var wedgeSize2 = map(diedDog, 0, dogNum, 0, TAU);
    var wedgeSize3 = map(disposalDog, 0, dogNum, 0, TAU);
    var wedgeSize4 = map(euthanizedDog, 0, dogNum, 0, TAU);
    var wedgeSize5 = map(returnedDog, 0, dogNum, 0, TAU);
    var wedgeSize6 = map(rtosDog, 0, dogNum, 0, TAU);
    var wedgeSize7 = map(transferredDog, 0, dogNum, 0, TAU);
    var angleStop1 = angleStart1 + wedgeSize1;
    var angleStop2 = angleStart2 + wedgeSize2;
    var angleStop3 = angleStart3 + wedgeSize3;
    var angleStop4 = angleStart4 + wedgeSize4;
    var angleStop5 = angleStart5 + wedgeSize5;
    var angleStop6 = angleStart6 + wedgeSize6;
    var angleStop7 = angleStart7 + wedgeSize7;
    arc(centerXDog, centerYDog, outerRadius, outerRadius, angleStart1, angleStop1);
    arc(centerXDog, centerYDog, outerRadius, outerRadius, angleStart2, angleStop2);
    arc(centerXDog, centerYDog, outerRadius, outerRadius, angleStart3, angleStop3);
    arc(centerXDog, centerYDog, outerRadius, outerRadius, angleStart4, angleStop4);
    arc(centerXDog, centerYDog, outerRadius, outerRadius, angleStart5, angleStop5);
    arc(centerXDog, centerYDog, outerRadius, outerRadius, angleStart6, angleStop6);
    arc(centerXDog, centerYDog, outerRadius, outerRadius, angleStart7, angleStop7);
    angleStart1 = angleStop7;
    angleStart2 = angleStop1;
    angleStart3 = angleStop2;
    angleStart4 = angleStop3;
    angleStart5 = angleStop4;
    angleStart6 = angleStop5;
    angleStart7 = angleStop6;

  }
  // knock a hole out of the middle
  fill(252, 249, 244);
  ellipse(centerXDog, centerYDog, innerRadius, innerRadius);
}



