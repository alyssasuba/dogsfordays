class dogStat{
    constructor(breed, number, days, avgDays, size, avgSize, disposal, rtos, euthanized, transferred, died, adoption, returned, healthy, manageable, rehab, unknown, untreatable){
        this.breed = breed;
        this.number = number;
        this.days = days;
        this.avgDays = avgDays;
        this.size = size;
        this.avgSize = avgSize;
        this.disposal = disposal;
        this.rtos = rtos;
        this.euthanized = euthanized;
        this.transferred = transferred;
        this.died = died;
        this.adoption = adoption;
        this.returned = returned;
        this.healthy = healthy;
        this.manageable = manageable;
        this.rehab = rehab;
        this.unknown = unknown;
        this.untreatable = untreatable;
    
    }
    drawDonut(){
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
            var wedgeSize1 = map(this.adoption, 0, this.number, 0, TAU);
            var wedgeSize2 = map(this.died, 0, this.number, 0, TAU);
            var wedgeSize3 = map(this.disposal, 0, this.number, 0, TAU);
            var wedgeSize4 = map(this.euthanized, 0, this.number, 0, TAU);
            var wedgeSize5 = map(this.returned, 0, this.number, 0, TAU);
            var wedgeSize6 = map(this.rtos, 0, this.number, 0, TAU);
            var wedgeSize7 = map(this.transferred, 0, this.number, 0, TAU);
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

        noStroke();
        ellipseMode(RADIUS);
        var angleStart1 = -HALF_PI;
        var angleStart2 = -HALF_PI;
        var angleStart3 = -HALF_PI;
        var angleStart4 = -HALF_PI;
        var angleStart5 = -HALF_PI;
    
        for (var c = 0; c < 5; c++) {
          fill(donutColors[c].colorPalette);
          var wedgeSize1 = map(this.healthy, 0, this.number, 0, TAU);
          var wedgeSize2 = map(this.manageable, 0, this.number, 0, TAU);
          var wedgeSize3 = map(this.rehab, 0, this.number, 0, TAU);
          var wedgeSize4 = map(this.unknown, 0, this.number, 0, TAU);
          var wedgeSize5 = map(this.untreatable, 0, this.number, 0, TAU);
    
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

        fill(53, 58, 52);
        textSize(16);
        textFont(centuryGothic);
        text(this.breed, 750, 420, 114, 80);
        text(this.breed, 750, 785, 114, 80);
        textFont(centuryGothicBold);
        textSize(40);
        textAlign(CENTER);
        text(this.breed + " vs. Shelter Average", 293, 212, 1143, 49);
    }

    drawBar(){
        if(dogNum>this.number){
            fill(232, 215, 205);
            rect(361, 893-(dogNum), 68, dogNum);
            fill(208, 164, 125);
            rect(361, 893-(this.number), 68, this.number);
        }
        else{
            fill(208, 164, 125);
            rect(361, 893-(this.number), 68, this.number);
            fill(232, 215, 205);
            rect(361, 893-(dogNum), 68, dogNum);
        }

        if(dogDaysAvg>this.avgDays){
            fill(232, 215, 205);
            rect(224, 893-(dogDaysAvg*10), 68, dogDaysAvg*10);
            fill(208, 164, 125);
            rect(224, 893-(this.avgDays*10), 68, this.avgDays*10);
        }
        else{
            fill(208, 164, 125);
            rect(224, 893-(this.avgDays*10), 68, this.avgDays*10);
            fill(232, 215, 205);
            rect(224, 893-(dogDaysAvg*10), 68, dogDaysAvg*10);

        }
        if(dogAvgSize>this.avgSize){
            fill(232, 215, 205);
            rect(496, 893-(dogAvgSize*30), 68, dogAvgSize*30);
            fill(208, 164, 125);
            rect(496, 893-(this.avgSize*30), 68, this.avgSize*30);

        }
        else{
            fill(208, 164, 125);
            rect(496, 893-(this.avgSize*30), 68, this.avgSize*30);
            fill(232, 215, 205);
            rect(496, 893-(dogAvgSize*30), 68, dogAvgSize*30);
        }
    }

    drawBonesPage(){
        textSize(40);
        textAlign(CENTER);
        fill(53, 58, 52);
        text("Click on a bone to learn more about a " + this.breed + "'s life", 472, 212, 784, 98);

    }

    dogInfo1(){
        textSize(32);
        textAlign(LEFT);
        textFont(centuryGothic);
        fill(53, 58, 52);
        if(!bone1.name){
            text("Hello! I do not have a name, and I'm a " + bone1.breed, 871, 546, 900, 80);
        }
        else{
            text("Hello! I am " +  bone1.name + ", and I'm a " + bone1.breed, 871, 546, 900, 39);
        }
        text("I have been in the animal shelter for " + bone1.days_in_shelter + " days", 871, 637, 766, 39);
        textSize(20);
        textAlign(CENTER);
        textFont(centuryGothicBold);
        text("Learn More", 1410, 830, 120, 25);
        image(arrow, 1544, 833, 57, 22);

        if(statPage == 'German Shepard'){
            image(germ, 204, 284, 650, 472);
        }
        else if(statPage == 'Alaskan Husky'){
            image(aHusky, 204, 284, 650, 526);
        }
        else if(statPage == 'Yorkie'){
            image(york, 204, 284, 650, 670);
        }
        else if(statPage == 'Border Collie'){
            image(borderCollie, 204, 284, 650, 492);
        }
        else if(statPage == 'Chihuahua'){
            image(chi, 204, 284, 650, 600);
        }
        else if(statPage == 'Labrador'){
            image(lab, 204, 284, 650, 524);
        }
        else if(statPage == 'Parson Russell Terrier'){
            image(parson, 204, 284, 650, 562);
        }
        else if(statPage == 'Pitbull'){
            image(pitbull, 204, 284, 650, 464);
        }
        else if(statPage == 'Poodle'){
            image(poodle, 204, 284, 650, 799);
        }
        else if(statPage == 'Shih Tzu'){
            image(shihTzu, 204, 284, 650, 543);
        }
        else if(statPage == 'Siberian Husky'){
            image(sib, 204, 284, 650, 526);
        }
        else if(statPage == 'Rottweiler'){
            image(rott, 204, 284, 650, 509);
        }
        else if(statPage == 'Great Pyrenesse'){
            image(greatP, 204, 284, 650, 536);
        }
        else if(statPage == 'Pomeranian'){
            image(pom, 204, 284, 650, 650);
        }
    }

    dogInfo2(){
        textSize(32);
        textAlign(LEFT);
        textFont(centuryGothic);
        fill(53, 58, 52);
        text("I am a " + bone1.size + " size dog", 871, 598, 653, 78);
        textSize(20);
        textAlign(CENTER);
        textFont(centuryGothicBold);
        text("Learn More", 1410, 830, 120, 25);
        image(arrow, 1544, 833, 57, 22);

        if(statPage == 'German Shepard'){
            image(germ, 204, 284, 650, 472);
        }
        else if(statPage == 'Alaskan Husky'){
            image(aHusky, 204, 284, 650, 526);
        }
        else if(statPage == 'Yorkie'){
            image(york, 204, 284, 650, 670);
        }
        else if(statPage == 'Border Collie'){
            image(borderCollie, 204, 284, 650, 492);
        }
        else if(statPage == 'Chihuahua'){
            image(chi, 204, 284, 650, 600);
        }
        else if(statPage == 'Labrador'){
            image(lab, 204, 284, 650, 524);
        }
        else if(statPage == 'Parson Russell Terrier'){
            image(parson, 204, 284, 650, 562);
        }
        else if(statPage == 'Pitbull'){
            image(pitbull, 204, 284, 650, 464);
        }
        else if(statPage == 'Poodle'){
            image(poodle, 204, 284, 650, 799);
        }
        else if(statPage == 'Shih Tzu'){
            image(shihTzu, 204, 284, 650, 543);
        }
        else if(statPage == 'Siberian Husky'){
            image(sib, 204, 284, 650, 526);
        }
        else if(statPage == 'Rottweiler'){
            image(rott, 204, 284, 650, 509);
        }
        else if(statPage == 'Great Pyrenesse'){
            image(greatP, 204, 284, 650, 536);
        }
        else if(statPage == 'Pomeranian'){
            image(pom, 204, 284, 650, 650);
        }
    }

    dogInfo3(){
        textSize(32);
        textAlign(LEFT);
        textFont(centuryGothic);
        fill(53, 58, 52);
        if(bone1.sex == 'Female'){
            text("I know we just met, but I'm not spayed", 871, 546, 650, 39);
        }
        else if(bone1.sex == 'Male'){
            text("I know we just met, but I'm not neutered", 871, 546, 650, 39);
        }
        else{
            text("I know we just met, but I'm " + bone1.sex, 871, 546, 585, 39);
        }
        text("When I came into the shelter, my condition was " + bone1.intake_condition, 871, 637, 766, 80);
        textSize(20);
        textAlign(CENTER);
        textFont(centuryGothicBold);
        text("Learn More", 1410, 830, 120, 25);
        image(arrow, 1544, 833, 57, 22);

        if(statPage == 'German Shepard'){
            image(germ, 204, 284, 650, 472);
        }
        else if(statPage == 'Alaskan Husky'){
            image(aHusky, 204, 284, 650, 526);
        }
        else if(statPage == 'Yorkie'){
            image(york, 204, 284, 650, 670);
        }
        else if(statPage == 'Border Collie'){
            image(borderCollie, 204, 284, 650, 492);
        }
        else if(statPage == 'Chihuahua'){
            image(chi, 204, 284, 650, 600);
        }
        else if(statPage == 'Labrador'){
            image(lab, 204, 284, 650, 524);
        }
        else if(statPage == 'Parson Russell Terrier'){
            image(parson, 204, 284, 650, 562);
        }
        else if(statPage == 'Pitbull'){
            image(pitbull, 204, 284, 650, 464);
        }
        else if(statPage == 'Poodle'){
            image(poodle, 204, 284, 650, 799);
        }
        else if(statPage == 'Shih Tzu'){
            image(shihTzu, 204, 284, 650, 543);
        }
        else if(statPage == 'Siberian Husky'){
            image(sib, 204, 284, 650, 526);
        }
        else if(statPage == 'Rottweiler'){
            image(rott, 204, 284, 650, 509);
        }
        else if(statPage == 'Great Pyrenesse'){
            image(greatP, 204, 284, 650, 536);
        }
        else if(statPage == 'Pomeranian'){
            image(pom, 204, 284, 650, 650);
        }
    }

    dogInfo4(){
        textSize(32);
        textAlign(LEFT);
        textFont(centuryGothic);
        fill(53, 58, 52);
        if(!bone1.outcome_type){
            text("I am still in the shelter", 871, 598, 653, 78);
        }
        else if(bone1.outcome_type == 'DISPOSAL'){
            text("I left because I was disposed", 871, 598, 653, 78);
        }
        else if(bone1.outcome_type == 'RETURN TO OWNER'){
            text("I left because I was returned to my owner", 871, 598, 653, 78);
        }
        else if(bone1.outcome_type == 'ADOPTION'){
            text("I left because I was adopted", 871, 598, 653, 78);
        }
        else if(bone1.outcome_type == 'DIED'){
            text("I left because I died", 871, 598, 653, 78);
        }
        else if(bone1.outcome_type == 'TRANSFER'){
            text("I left because I was transfered to another shelter", 871, 598, 653, 78);
        }
        else if(bone1.outcome_type == 'EUTHANIZE'){
            text("I left because I was euthanized", 871, 598, 653, 78);
        }
        else{
            text("I left because I was " + bone1.outcome_type, 871, 598, 653, 78);
        }
        textSize(20);
        textFont(centuryGothicBold);
        text("Learn More About Other " + bone1.breed + " In The Shelter", 1226, 820, 300, 50);
        image(arrow, 1544, 833, 57, 22);

        if(statPage == 'German Shepard'){
            image(germ, 204, 284, 650, 472);
        }
        else if(statPage == 'Alaskan Husky'){
            image(aHusky, 204, 284, 650, 526);
        }
        else if(statPage == 'Yorkie'){
            image(york, 204, 284, 650, 670);
        }
        else if(statPage == 'Border Collie'){
            image(borderCollie, 204, 284, 650, 492);
        }
        else if(statPage == 'Chihuahua'){
            image(chi, 204, 284, 650, 600);
        }
        else if(statPage == 'Labrador'){
            image(lab, 204, 284, 650, 524);
        }
        else if(statPage == 'Parson Russell Terrier'){
            image(parson, 204, 284, 650, 562);
        }
        else if(statPage == 'Pitbull'){
            image(pitbull, 204, 284, 650, 464);
        }
        else if(statPage == 'Poodle'){
            image(poodle, 204, 284, 650, 799);
        }
        else if(statPage == 'Shih Tzu'){
            image(shihTzu, 204, 284, 650, 543);
        }
        else if(statPage == 'Siberian Husky'){
            image(sib, 204, 284, 650, 526);
        }
        else if(statPage == 'Rottweiler'){
            image(rott, 204, 284, 650, 509);
        }
        else if(statPage == 'Great Pyrenesse'){
            image(greatP, 204, 284, 650, 536);
        }
        else if(statPage == 'Pomeranian'){
            image(pom, 204, 284, 650, 650);
        }
    }

}

var statPage = "";

var dogDict = {};

var dogInfoDict = {};

var logo, arrow, boneB, boneY, boneP, boneG, boneDG, boneBFill, boneGFill, boneDGFill, bonePFill, boneYFill;
var germ, aHusky, borderCollie, chi, greatP, parson, pitbull, pom, poodle, rott, shihTzu, sib, york, lab;
var centuryGothic, centuryGothicBold;
var stage = 2;
var dogData;

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

var bone1, bone2, bone3, bone4, bone5, bone6;

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
    boneBFill = loadImage("boneBFill.png");
    boneY = loadImage("boneYellow.png");
    boneP = loadImage("bonePink.png");
    boneG = loadImage("boneGreen.png");
    boneDG = loadImage("boneDGreen.png");
    boneYFill = loadImage("BoneYFill.png");
    bonePFill = loadImage("BonePFill.png");
    boneGFill = loadImage("BoneGFill.png");
    boneDGFill = loadImage("BoneDGFill.png");
    dogData = loadJSON("https://data.sonomacounty.ca.gov/resource/924a-vesw.json");

    germ = loadImage("germ.png");
    aHusky = loadImage("aHusky.png");
    borderCollie = loadImage("borderCollie.png");
    chi = loadImage("chi.png");
    greatP = loadImage("greatPyrenesse.png");
    parson = loadImage("parson.png");
    pitbull = loadImage("pitbull.png");
    pom = loadImage("pomeranian.png");
    poodle = loadImage("poodle.png");
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
    
    fill(53, 58, 52);
    textAlign(CENTER);
    if(mouseX>473 && mouseX<586 && mouseY>100 && mouseY<135){
        textFont(centuryGothicBold);
        textSize(16);
        fill(208, 164, 125);
        text("About", 473, 100, 113, 35);
    }
    else{
        textFont(centuryGothicBold);
        textSize(16);
        fill(53, 58, 52);
        text("About", 473, 100, 113, 35);
    }

    if(mouseX>1142 && mouseX<1262 && mouseY>100 && mouseY<135){
        textFont(centuryGothicBold);
        textSize(16);
        fill(208, 164, 125);
        text("Learn about a dog", 1142, 100, 150, 35);
    }
    else{
        textFont(centuryGothicBold);
        textSize(16);
        fill(53, 58, 52);
        text("Learn about a dog", 1142, 100, 150, 35);
    }
    
    


    if (stage == 1){
        fill(53, 58, 52);
        textSize(40);
        text("About Dogs For Days", 472, 254, 784, 49);
        textSize(24);
        text("The Dogs for Days project was created to highlight the importance of adopting animals instead of purchasing them from breeders or puppy mills. They use data visualization to show the top few dog breeds in the Sonoma County shelter, data about types of species compared to the average dogs in the shelter, and background stories about some of these dogs.", 472, 387, 784, 203);
        if(mouseX>740 && mouseX<988 && mouseY>700 && mouseY<948){
            image(boneBFill, 740, 588, 248, 248);
            textSize(16);
            fill(255);
            text("Learn about a dog", 791, 700, 150, 35);
        }
        else{
            textSize(16);
            fill(53, 58, 52);
            text("Learn about a dog", 791, 700, 150, 35);
            image(boneB, 740, 588, 248, 248);
        }
        
    }

    if (stage == 2){
        fill(53, 58, 52);
        drawChart();
        textSize(40);
        textAlign(CENTER);
        text("Dogs in Sonoma County Shelter", 560, 212, 620, 49);
        createHover();

        textSize(20);
        textFont(centuryGothic);
        stroke(53, 58, 52);
        strokeWeight(1);
        line(271, 927, 1457, 927);
        noStroke();
        text("Average Days in the Shelter", 1189, 945, 280, 25);

        stroke(53, 58, 52);
        strokeWeight(1);
        line(271, 279, 271, 927);
        translate(234,620);
        rotate(-HALF_PI);
        noStroke();
        text("Number of Dogs", 0, 0);




    }

    //Charts - Germ
    if (stage == 3){
        
        // Change this once we put the data in
        
        // Add bar graph of the two dogs we're comparing. Hover to see number
        stroke(53, 58, 52);
        strokeWeight(1);
        line(204, 904, 586, 904);
        textSize(20);
        noStroke();
        textAlign(CENTER);
        textFont(centuryGothicBold);
        fill(53, 58, 52);
        text("# of days in the shelter", 204, 918, 114, 80);
        text("# of dogs", 338, 918, 114, 80);
        text("Size", 472, 918, 114, 50);

        //Bar Chart
        dogDict[statPage].drawBar();

        // donutGermIC();
        dogDict[statPage].drawDonut();
        donutDogIC();
       
        //Outcome type
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

        //Learn more button
        textSize(20);
        textAlign(CENTER);
        text("Learn More", 1544, 576, 120, 25);
        image(arrow, 1572, 615, 57, 22);

    }

    //bones
    if (stage == 4){

        dogDict[statPage].drawBonesPage();

        if(stage == 4 && mouseX>473 && mouseX<721 && mouseY>364 && mouseY<612){
            image(bonePFill, 473, 364, 248, 248);
        }
        else{
            image(boneP, 473, 364, 248, 248);

        }
        if(stage == 4 && mouseX>740 && mouseX<988 && mouseY>364 && mouseY<612){
            image(boneBFill, 740, 364, 248, 248);
        }
        else{
            image(boneB, 740, 364, 248, 248);

        }
        if(stage == 4 && mouseX>1008 && mouseX<1256 && mouseY>364 && mouseY<612){
            image(boneGFill, 1008, 364, 248, 248);
        }
        else{
            image(boneG, 1008, 364, 248, 248);

        }
        if(stage == 4 && mouseX>473 && mouseX<721 && mouseY>612 && mouseY<860){
            image(boneDGFill, 473, 612, 248, 248);
        }
        else{
            image(boneDG, 473, 612, 248, 248);

        }
        if(stage == 4 && mouseX>740 && mouseX<988 && mouseY>612 && mouseY<860){
            image(boneYFill, 740, 612, 248, 248);
        }
        else{
            image(boneY, 740, 612, 248, 248);

        }
        if(stage == 4 && mouseX>1008 && mouseX<1256 && mouseY>612 && mouseY<860){
            image(bonePFill, 1008, 612, 248, 248);
        }
        else{
            image(boneP, 1008, 612, 248, 248);

        }


        
    }


    if (stage == 5){
        //change image depending on dog
        dogDict[statPage].dogInfo1();     
    }

    if (stage == 6){
        //change image depending on dog
        dogDict[statPage].dogInfo2();
    }

    if (stage == 7){
        //change image depending on dog
        dogDict[statPage].dogInfo3();
    }
    
    if (stage == 8){
        //change image depending on dog
        dogDict[statPage].dogInfo4();
    }
}

function mouseClicked(){
    //about
    if(mouseX>473 && mouseX<586 && mouseY>100 && mouseY<135){
        stage = 1;
    }
    //learn about dogs
    else if(mouseX>1142 && mouseX<1262 && mouseY>100 && mouseY<135){
        stage = 2;
    }
    else if(stage == 1 && mouseX>740 && mouseX<988 && mouseY>700 && mouseY<984){
        stage = 2;
    }
    //dog story 1
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
    else if(stage == 2 && mouseX>dogDict['Chihuahua'].avgDays*40 && mouseX<((dogDict['Chihuahua'].avgDays*40)+(11.6*dogDict['Chihuahua'].avgSize)) && mouseY>(750-(5*dogDict['Chihuahua'].number)) && mouseY<((750-(5*dogDict['Chihuahua'].number))+(10*dogDict['Chihuahua'].avgSize))){
        statPage = 'Chihuahua';
        stage = 3;
    }
    //German
    else if(stage == 2 && mouseX>dogDict['German Shepard'].avgDays*40 && mouseX<((dogDict['German Shepard'].avgDays*40)+(30.2*dogDict['German Shepard'].avgSize)) && mouseY>(750-(5*dogDict['German Shepard'].number)) && mouseY<((750-(5*dogDict['German Shepard'].number))+(20*dogDict['German Shepard'].avgSize))){
        statPage = 'German Shepard';
        stage = 3;
    }
    //Alaskan Husky
    else if(stage == 2 && mouseX>dogDict['Alaskan Husky'].avgDays*40 && mouseX<((dogDict['Alaskan Husky'].avgDays*40)+(24.8*dogDict['Alaskan Husky'].avgSize)) && mouseY>(750-(5*dogDict['Alaskan Husky'].number)) && mouseY<((750-(5*dogDict['Alaskan Husky'].number))+(20*dogDict['Alaskan Husky'].avgSize))){
        statPage = 'Alaskan Husky';
        stage = 3;
    }
    //GreatP
    else if(stage == 2 && mouseX>dogDict['Great Pyrenesse'].avgDays*40 && mouseX<((dogDict['Great Pyrenesse'].avgDays*40)+(24.2*dogDict['Great Pyrenesse'].avgSize)) && mouseY>(750-(5*dogDict['Great Pyrenesse'].number)) && mouseY<((750-(5*dogDict['Great Pyrenesse'].number))+(20*dogDict['Great Pyrenesse'].avgSize))){
        statPage = 'Great Pyrenesse';
        stage = 3;
    }
    //pitbull
    else if(stage == 2 && mouseX>dogDict['Pitbull'].avgDays*40 && mouseX<((dogDict['Pitbull'].avgDays*40)+(28*dogDict['Pitbull'].avgSize)) && mouseY>(750-(5*dogDict['Pitbull'].number)) && mouseY<((750-(5*dogDict['Pitbull'].number))+(20*dogDict['Pitbull'].avgSize))){
        statPage = 'Pitbull';
        stage = 3;
    }
    //Pom
    else if(stage == 2 && mouseX>dogDict['Pomeranian'].avgDays*40 && mouseX<((dogDict['Pomeranian'].avgDays*40)+(20*dogDict['Pomeranian'].avgSize)) && mouseY>(750-(5*dogDict['Pomeranian'].number)) && mouseY<((750-(5*dogDict['Pomeranian'].number))+(20*dogDict['Pomeranian'].avgSize))){
        statPage = 'Pomeranian';
        stage = 3;
    }
    //poodle
    else if(stage == 2 && mouseX>dogDict['Poodle'].avgDays*40 && mouseX<((dogDict['Poodle'].avgDays*40)+(16.2*dogDict['Poodle'].avgSize)) && mouseY>(750-(5*dogDict['Poodle'].number)) && mouseY<((750-(5*dogDict['Poodle'].number))+(20*dogDict['Poodle'].avgSize))){
        statPage = 'Poodle';
        stage = 3;
    }
    //Rott
    else if(stage == 2 && mouseX>dogDict['Rottweiler'].avgDays*40 && mouseX<((dogDict['Rottweiler'].avgDays*40)+(25.6*dogDict['Rottweiler'].avgSize)) && mouseY>(750-(5*dogDict['Rottweiler'].number)) && mouseY<((750-(5*dogDict['Rottweiler'].number))+(20*dogDict['Rottweiler'].avgSize))){
        statPage = 'Rottweiler';
        stage = 3;
    }
    //ShihTzu
    else if(stage == 2 && mouseX>dogDict['Shih Tzu'].avgDays*40 && mouseX<((dogDict['Shih Tzu'].avgDays*40)+(24*dogDict['Shih Tzu'].avgSize)) && mouseY>(750-(5*dogDict['Shih Tzu'].number)) && mouseY<((750-(5*dogDict['Shih Tzu'].number))+(20*dogDict['Shih Tzu'].avgSize))){
        statPage = 'Shih Tzu';
        stage = 3;
    }
    //Sib
    else if(stage == 2 && mouseX>dogDict['Siberian Husky'].avgDays*40 && mouseX<((dogDict['Siberian Husky'].avgDays*40)+(24.8*dogDict['Siberian Husky'].avgSize)) && mouseY>(750-(5*dogDict['Siberian Husky'].number)) && mouseY<((750-(5*dogDict['Siberian Husky'].number))+(20*dogDict['Siberian Husky'].avgSize))){
        statPage = 'Siberian Husky';
        stage = 3;
    }
    //York
    else if(stage == 2 && mouseX>dogDict['Yorkie'].avgDays*40 && mouseX<((dogDict['Yorkie'].avgDays*40)+(19.4*dogDict['Yorkie'].avgSize)) && mouseY>(750-(5*dogDict['Yorkie'].number)) && mouseY<((750-(5*dogDict['Yorkie'].number))+(20*dogDict['Yorkie'].avgSize))){
        statPage = 'Yorkie';
        stage = 3;
    }
    //Lab
    else if(stage == 2 && mouseX>dogDict['Labrador'].avgDays*40 && mouseX<((dogDict['Labrador'].avgDays*40)+(24.8*dogDict['Labrador'].avgSize)) && mouseY>(750-(5*dogDict['Labrador'].number)) && mouseY<((750-(5*dogDict['Labrador'].number))+(20*dogDict['Labrador'].avgSize))){
        statPage = 'Labrador';
        stage = 3;
    }
    //Collie
    else if(stage == 2 && mouseX>dogDict['Border Collie'].avgDays*40 && mouseX<((dogDict['Border Collie'].avgDays*40)+(26.4*dogDict['Border Collie'].avgSize)) && mouseY>(750-(5*dogDict['Border Collie'].number)) && mouseY<((750-(5*dogDict['Border Collie'].number))+(20*dogDict['Border Collie'].avgSize))){
        statPage = 'Border Collie';
        stage = 3;
    }
    //Parson
    else if(stage == 2 && mouseX>dogDict['Parson Russell Terrier'].avgDays*40 && mouseX<((dogDict['Parson Russell Terrier'].avgDays*40)+(23.2*dogDict['Parson Russell Terrier'].avgSize)) && mouseY>(750-(5*dogDict['Parson Russell Terrier'].number)) && mouseY<((750-(5*dogDict['Parson Russell Terrier'].number))+(20*dogDict['Parson Russell Terrier'].avgSize))){
        statPage = 'Parson Russell Terrier';
        stage = 3;
    }
    else if(stage == 3 && mouseX>1572 && mouseX<1629 && mouseY>615 && mouseY<637){
        stage = 4;
    }
    else if(stage == 4 && mouseX>473 && mouseX<721 && mouseY>364 && mouseY<612){
        bone1 = dogInfoDict[statPage][0];
        stage = 5;

    }
    else if(stage == 4 && mouseX>740 && mouseX<988 && mouseY>364 && mouseY<612){
        bone1 = dogInfoDict[statPage][1];
        stage = 5;

    }
    else if(stage == 4 && mouseX>1008 && mouseX<1256 && mouseY>364 && mouseY<612){
        bone1 = dogInfoDict[statPage][2];
        stage = 5;

    }
    else if(stage == 4 && mouseX>473 && mouseX<721 && mouseY>612 && mouseY<860){
        bone1 = dogInfoDict[statPage][3];
        stage = 5;

    }
    else if(stage == 4 && mouseX>740 && mouseX<988 && mouseY>612 && mouseY<860){
        bone1 = dogInfoDict[statPage][4];
        stage = 5;

    }
    else if(stage == 4 && mouseX>1008 && mouseX<1256 && mouseY>612 && mouseY<860){
        bone1 = dogInfoDict[statPage][5];
        stage = 5;

    }
    
 
}

function drawChart(){
    image(germ, dogDict['German Shepard'].avgDays*40, 750-(5*(dogDict['German Shepard'].number)), 30.2*dogDict['German Shepard'].avgSize, 20*dogDict['German Shepard'].avgSize);
    image(aHusky, dogDict['Alaskan Husky'].avgDays*40,750-(5*(dogDict['Alaskan Husky'].number)), 24.8*dogDict['Alaskan Husky'].avgSize, 20*dogDict['Alaskan Husky'].avgSize);
    image(chi, dogDict['Chihuahua'].avgDays*40,750-(5*(dogDict['Chihuahua'].number)), 11.6*dogDict['Chihuahua'].avgSize, 10*dogDict['Chihuahua'].avgSize);
    image(greatP, dogDict['Great Pyrenesse'].avgDays*40, 750-(5*(dogDict['Great Pyrenesse'].number)), 24.2*dogDict['Great Pyrenesse'].avgSize, 20*dogDict['Great Pyrenesse'].avgSize);
    image(pitbull, dogDict['Pitbull'].avgDays*40,  750-(5*(dogDict['Pitbull'].number)), 28*dogDict['Pitbull'].avgSize, 20*dogDict['Pitbull'].avgSize);
    image(pom, dogDict['Pomeranian'].avgDays*40,  750-(5*(dogDict['Pomeranian'].number)), 20*dogDict['Pomeranian'].avgSize, 20*dogDict['Pomeranian'].avgSize);
    image(poodle, dogDict['Poodle'].avgDays*40,  750-(5*(dogDict['Poodle'].number)), 16.2*dogDict['Poodle'].avgSize, 20*dogDict['Poodle'].avgSize);
    image(rott, dogDict['Rottweiler'].avgDays*40,  750-(5*(dogDict['Rottweiler'].number)), 25.6*dogDict['Rottweiler'].avgSize, 20*dogDict['Rottweiler'].avgSize);
    image(shihTzu, dogDict['Shih Tzu'].avgDays*40, 750-(5*(dogDict['Shih Tzu'].number)), 24*dogDict['Shih Tzu'].avgSize, 20*dogDict['Shih Tzu'].avgSize);
    image(sib, dogDict['Siberian Husky'].avgDays*40,  750-(5*(dogDict['Siberian Husky'].number)), 24.8*dogDict['Siberian Husky'].avgSize, 20*dogDict['Siberian Husky'].avgSize);
    image(york, dogDict['Yorkie'].avgDays*40,  750-(5*(dogDict['Yorkie'].number)), 19.4*dogDict['Yorkie'].avgSize, 20*dogDict['Yorkie'].avgSize);
    image(lab, dogDict['Labrador'].avgDays*40,  750-(5*(dogDict['Labrador'].number)), 24.8*dogDict['Labrador'].avgSize, 20*dogDict['Labrador'].avgSize);
    image(borderCollie, dogDict['Border Collie'].avgDays*40,  750-(5*(dogDict['Border Collie'].number)), 26.4*dogDict['Border Collie'].avgSize, 20*dogDict['Border Collie'].avgSize);
    image(parson, dogDict['Parson Russell Terrier'].avgDays*40,  750-(5*(dogDict['Parson Russell Terrier'].number)), 23.2*dogDict['Parson Russell Terrier'].avgSize, 20*dogDict['Parson Russell Terrier'].avgSize);

}





function countDog(){
    for(var i=0; i<999; i++){
        var breed =  dogData[i].breed;
        var size = dogData[i].size;
        var type = dogData[i].type;
        var outcomeType = dogData[i].outcome_type;
        var intakeCondition = dogData[i].intake_condition;
        
        var singledogDaysAvg;
        var singledogDays = 0;
        var singledogNum = 0;
        var singledogSize = 0;
        var singledogAvgSize;

        var singleadoptionDog = 0;
        var singlediedDog = 0;
        var singledisposalDog = 0;
        var singleeuthanizedDog = 0;
        var singlereturnedDog = 0;
        var singlertosDog = 0;
        var singletransferredDog = 0;
        
        var singlehealthyDog = 0;
        var singlemanageableDog = 0;
        var singlerehabDog = 0;
        var singleunknownDog = 0;
        var singleuntreatableDog = 0;

        if(String(type)=="DOG"){
            dogDays += int(dogData[i].days_in_shelter);
            singledogDays = int(dogData[i].days_in_shelter);
            
            if(size == "TOY"){
                dogSizeToy++;
                singledogSize = 1;
            }
            if(size == "PUPPY"){
                dogSizePup += 2;
                singledogSize = 2;
            }
            if(size == "SMALL"){
                dogSizeS += 3;
                singledogSize = 3;
            }
            if(size == "MED"){
                dogSizeM += 4;
                singledogSize = 4;
            }
            if(size == "LARGE"){
                dogSizeL += 5;
                singledogSize = 5;
            }
            
            if(outcomeType == "ADOPTION"){
                adoptionDog++;
                singleadoptionDog++;
            }
            if(outcomeType == "DIED"){
                diedDog++;
                singlediedDog++;
            }
            if(outcomeType == "DISPOSAL"){
                disposalDog++;
                singledisposalDog++;
            }
            if(outcomeType == "EUTHANIZE"){
                euthanizedDog++;
                singleeuthanizedDog++;
            }
            if(outcomeType == "RETURN TO OWNER"){
                returnedDog++;
                singlereturnedDog++;
            }
            if(outcomeType == "RTOS"){
                rtosDog++;
                singlertosDog++;
            }
            if(outcomeType == "TRANSFER"){
                transferredDog++;
                singletransferredDog++;
            } 

            if(intakeCondition == "HEALTHY"){
                healthyDog++;
                singlehealthyDog++;
            }
            if(intakeCondition == "TREATABLE/MANAGEABLE"){
                manageableDog++;
                singlemanageableDog++;
            }
            if(intakeCondition == "TREATABLE/REHAB"){
                rehabDog++;
                singlerehabDog++;
            }
            if(intakeCondition == "UNKNOWN"){
                unknownDog++;
                singleunknownDog++;
            }
            if(intakeCondition == "UNTREATABLE"){
                untreatableDog++;
                singleuntreatableDog++;
            }

            dogNum = adoptionDog + diedDog + disposalDog + euthanizedDog + returnedDog + rtosDog + transferredDog;
            dogAvgSize = (dogSizeToy + dogSizePup + dogSizeS + dogSizeM + dogSizeL) / dogNum;
            dogDaysAvg = dogDays / dogNum;
        }

        if(String(breed).includes("GERM")){
            
            if(!dogInfoDict['German Shepard']){
                dogInfoDict['German Shepard'] = [];
            }
                dogInfoDict['German Shepard'].push(dogData[i]);
            

            if ('German Shepard' in dogDict){
                
                dogDict['German Shepard'].days += singledogDays;
                dogDict['German Shepard'].avgDays = dogDict['German Shepard'].days / dogDict['German Shepard'].number;
                dogDict['German Shepard'].size += singledogSize;
                dogDict['German Shepard'].avgSize = dogDict['German Shepard'].size / dogDict['German Shepard'].number;
                dogDict['German Shepard'].disposal += singledisposalDog;
                dogDict['German Shepard'].rtos += singlertosDog;
                dogDict['German Shepard'].euthanized += singleeuthanizedDog;
                dogDict['German Shepard'].transferred += singletransferredDog;
                dogDict['German Shepard'].died += singlediedDog;
                dogDict['German Shepard'].adoption += singleadoptionDog;
                dogDict['German Shepard'].returned += singlereturnedDog;
                dogDict['German Shepard'].healthy += singlehealthyDog;
                dogDict['German Shepard'].manageable += singlemanageableDog;
                dogDict['German Shepard'].rehab += singlerehabDog;
                dogDict['German Shepard'].unknown += singleunknownDog;
                dogDict['German Shepard'].untreatable += singleuntreatableDog;
                dogDict['German Shepard'].number = dogDict['German Shepard'].disposal + dogDict['German Shepard'].rtos + dogDict['German Shepard'].euthanized + dogDict['German Shepard'].transferred + dogDict['German Shepard'].died + dogDict['German Shepard'].adoption + dogDict['German Shepard'].returned;

                

            }
            else{
                let myDog = new dogStat("German Shepard", 1, singledogDays, singledogDays, singledogSize, singledogSize, singledisposalDog, singlertosDog, singleeuthanizedDog, singletransferredDog, singlediedDog, singleadoptionDog, singlereturnedDog, singlehealthyDog, singlemanageableDog, singlerehabDog, singleunknownDog, singleuntreatableDog);
                dogDict['German Shepard'] = myDog;

            } 
                
                
            
        }


       
        if(String(breed).includes("ALASKAN")){

            if(!dogInfoDict['Alaskan Husky']){
                dogInfoDict['Alaskan Husky'] = [];
            }
                dogInfoDict['Alaskan Husky'].push(dogData[i]);

            if ('Alaskan Husky' in dogDict){
                
                dogDict['Alaskan Husky'].days += singledogDays;
                dogDict['Alaskan Husky'].avgDays = dogDict['Alaskan Husky'].days / dogDict['Alaskan Husky'].number;
                dogDict['Alaskan Husky'].size += singledogSize;
                dogDict['Alaskan Husky'].avgSize = dogDict['Alaskan Husky'].size / dogDict['Alaskan Husky'].number;
                dogDict['Alaskan Husky'].disposal += singledisposalDog;
                dogDict['Alaskan Husky'].rtos += singlertosDog;
                dogDict['Alaskan Husky'].euthanized += singleeuthanizedDog;
                dogDict['Alaskan Husky'].transferred += singletransferredDog;
                dogDict['Alaskan Husky'].died += singlediedDog;
                dogDict['Alaskan Husky'].adoption += singleadoptionDog;
                dogDict['Alaskan Husky'].returned += singlereturnedDog;
                dogDict['Alaskan Husky'].healthy += singlehealthyDog;
                dogDict['Alaskan Husky'].manageable += singlemanageableDog;
                dogDict['Alaskan Husky'].rehab += singlerehabDog;
                dogDict['Alaskan Husky'].unknown += singleunknownDog;
                dogDict['Alaskan Husky'].untreatable += singleuntreatableDog;
                dogDict['Alaskan Husky'].number = dogDict['Alaskan Husky'].disposal + dogDict['Alaskan Husky'].rtos + dogDict['Alaskan Husky'].euthanized + dogDict['Alaskan Husky'].transferred + dogDict['Alaskan Husky'].died + dogDict['Alaskan Husky'].adoption + dogDict['Alaskan Husky'].returned;
            }
            else{
                let myDog = new dogStat("Alaskan Husky", 1, singledogDays, singledogDays, singledogSize, singledogSize, singledisposalDog, singlertosDog, singleeuthanizedDog, singletransferredDog, singlediedDog, singleadoptionDog, singlereturnedDog, singlehealthyDog, singlemanageableDog, singlerehabDog, singleunknownDog, singleuntreatableDog);
                dogDict['Alaskan Husky'] = myDog;
            }
        }
       
        if(String(breed).includes("YORK")){
            if(!dogInfoDict['Yorkie']){
                dogInfoDict['Yorkie'] = [];
            }
                dogInfoDict['Yorkie'].push(dogData[i]);
            if ('Yorkie' in dogDict){
                
                dogDict['Yorkie'].days += singledogDays;
                dogDict['Yorkie'].avgDays = dogDict['Yorkie'].days / dogDict['Yorkie'].number;
                dogDict['Yorkie'].size += singledogSize;
                dogDict['Yorkie'].avgSize = dogDict['Yorkie'].size / dogDict['Yorkie'].number;
                dogDict['Yorkie'].disposal += singledisposalDog;
                dogDict['Yorkie'].rtos += singlertosDog;
                dogDict['Yorkie'].euthanized += singleeuthanizedDog;
                dogDict['Yorkie'].transferred += singletransferredDog;
                dogDict['Yorkie'].died += singlediedDog;
                dogDict['Yorkie'].adoption += singleadoptionDog;
                dogDict['Yorkie'].returned += singlereturnedDog;
                dogDict['Yorkie'].healthy += singlehealthyDog;
                dogDict['Yorkie'].manageable += singlemanageableDog;
                dogDict['Yorkie'].rehab += singlerehabDog;
                dogDict['Yorkie'].unknown += singleunknownDog;
                dogDict['Yorkie'].untreatable += singleuntreatableDog;
                dogDict['Yorkie'].number = dogDict['Yorkie'].disposal + dogDict['Yorkie'].rtos + dogDict['Yorkie'].euthanized + dogDict['Yorkie'].transferred + dogDict['Yorkie'].died + dogDict['Yorkie'].adoption + dogDict['Yorkie'].returned;
            }
            else{
                let myDog = new dogStat("Yorkie", 1, singledogDays, singledogDays, singledogSize, singledogSize, singledisposalDog, singlertosDog, singleeuthanizedDog, singletransferredDog, singlediedDog, singleadoptionDog, singlereturnedDog, singlehealthyDog, singlemanageableDog, singlerehabDog, singleunknownDog, singleuntreatableDog);
                dogDict['Yorkie'] = myDog;
            }
        }
       
        if(String(breed).includes("BORDER")){

            if(!dogInfoDict['Border Collie']){
                dogInfoDict['Border Collie'] = [];
            }
                dogInfoDict['Border Collie'].push(dogData[i]);

            if ('Border Collie' in dogDict){
                
                dogDict['Border Collie'].days += singledogDays;
                dogDict['Border Collie'].avgDays = dogDict['Border Collie'].days / dogDict['Border Collie'].number;
                dogDict['Border Collie'].size += singledogSize;
                dogDict['Border Collie'].avgSize = dogDict['Border Collie'].size / dogDict['Border Collie'].number;
                dogDict['Border Collie'].disposal += singledisposalDog;
                dogDict['Border Collie'].rtos += singlertosDog;
                dogDict['Border Collie'].euthanized += singleeuthanizedDog;
                dogDict['Border Collie'].transferred += singletransferredDog;
                dogDict['Border Collie'].died += singlediedDog;
                dogDict['Border Collie'].adoption += singleadoptionDog;
                dogDict['Border Collie'].returned += singlereturnedDog;
                dogDict['Border Collie'].healthy += singlehealthyDog;
                dogDict['Border Collie'].manageable += singlemanageableDog;
                dogDict['Border Collie'].rehab += singlerehabDog;
                dogDict['Border Collie'].unknown += singleunknownDog;
                dogDict['Border Collie'].untreatable += singleuntreatableDog;
                dogDict['Border Collie'].number = dogDict['Border Collie'].disposal + dogDict['Border Collie'].rtos + dogDict['Border Collie'].euthanized + dogDict['Border Collie'].transferred + dogDict['Border Collie'].died + dogDict['Border Collie'].adoption + dogDict['Border Collie'].returned;
            }
            else{
                let myDog = new dogStat("Border Collie", 1, singledogDays, singledogDays, singledogSize, singledogSize, singledisposalDog, singlertosDog, singleeuthanizedDog, singletransferredDog, singlediedDog, singleadoptionDog, singlereturnedDog, singlehealthyDog, singlemanageableDog, singlerehabDog, singleunknownDog, singleuntreatableDog);
                dogDict['Border Collie'] = myDog;
            }
        }
       
        if(String(breed).includes("CHI")){

            if(!dogInfoDict['Chihuahua']){
                dogInfoDict['Chihuahua'] = [];
            }
                dogInfoDict['Chihuahua'].push(dogData[i]);

            if ('Chihuahua' in dogDict){
                
                dogDict['Chihuahua'].days += singledogDays;
                dogDict['Chihuahua'].avgDays = dogDict['Chihuahua'].days / dogDict['Chihuahua'].number;
                dogDict['Chihuahua'].size += singledogSize;
                dogDict['Chihuahua'].avgSize = dogDict['Chihuahua'].size / dogDict['Chihuahua'].number;
                dogDict['Chihuahua'].disposal += singledisposalDog;
                dogDict['Chihuahua'].rtos += singlertosDog;
                dogDict['Chihuahua'].euthanized += singleeuthanizedDog;
                dogDict['Chihuahua'].transferred += singletransferredDog;
                dogDict['Chihuahua'].died += singlediedDog;
                dogDict['Chihuahua'].adoption += singleadoptionDog;
                dogDict['Chihuahua'].returned += singlereturnedDog;
                dogDict['Chihuahua'].healthy += singlehealthyDog;
                dogDict['Chihuahua'].manageable += singlemanageableDog;
                dogDict['Chihuahua'].rehab += singlerehabDog;
                dogDict['Chihuahua'].unknown += singleunknownDog;
                dogDict['Chihuahua'].untreatable += singleuntreatableDog;
                dogDict['Chihuahua'].number = dogDict['Chihuahua'].disposal + dogDict['Chihuahua'].rtos + dogDict['Chihuahua'].euthanized + dogDict['Chihuahua'].transferred + dogDict['Chihuahua'].died + dogDict['Chihuahua'].adoption + dogDict['Chihuahua'].returned;
            }
            else{
                let myDog = new dogStat("Chihuahua", 1, singledogDays, singledogDays, singledogSize, singledogSize, singledisposalDog, singlertosDog, singleeuthanizedDog, singletransferredDog, singlediedDog, singleadoptionDog, singlereturnedDog, singlehealthyDog, singlemanageableDog, singlerehabDog, singleunknownDog, singleuntreatableDog);
                dogDict['Chihuahua'] = myDog;
            }
            
        }
       
        if(String(breed).includes( "LAB")){

            if(!dogInfoDict['Labrador']){
                dogInfoDict['Labrador'] = [];
            }
                dogInfoDict['Labrador'].push(dogData[i]);

            if ('Labrador' in dogDict){
                
                dogDict['Labrador'].days += singledogDays;
                dogDict['Labrador'].avgDays = dogDict['Labrador'].days / dogDict['Labrador'].number;
                dogDict['Labrador'].size += singledogSize;
                dogDict['Labrador'].avgSize = dogDict['Labrador'].size / dogDict['Labrador'].number;
                dogDict['Labrador'].disposal += singledisposalDog;
                dogDict['Labrador'].rtos += singlertosDog;
                dogDict['Labrador'].euthanized += singleeuthanizedDog;
                dogDict['Labrador'].transferred += singletransferredDog;
                dogDict['Labrador'].died += singlediedDog;
                dogDict['Labrador'].adoption += singleadoptionDog;
                dogDict['Labrador'].returned += singlereturnedDog;
                dogDict['Labrador'].healthy += singlehealthyDog;
                dogDict['Labrador'].manageable += singlemanageableDog;
                dogDict['Labrador'].rehab += singlerehabDog;
                dogDict['Labrador'].unknown += singleunknownDog;
                dogDict['Labrador'].untreatable += singleuntreatableDog;
                dogDict['Labrador'].number = dogDict['Labrador'].disposal + dogDict['Labrador'].rtos + dogDict['Labrador'].euthanized + dogDict['Labrador'].transferred + dogDict['Labrador'].died + dogDict['Labrador'].adoption + dogDict['Labrador'].returned;
            }
            else{
                let myDog = new dogStat("Labrador", 1, singledogDays, singledogDays, singledogSize, singledogSize, singledisposalDog, singlertosDog, singleeuthanizedDog, singletransferredDog, singlediedDog, singleadoptionDog, singlereturnedDog, singlehealthyDog, singlemanageableDog, singlerehabDog, singleunknownDog, singleuntreatableDog);
                dogDict['Labrador'] = myDog;
            }
        }
       
        if(String(breed).includes( "PAR")){

            if(!dogInfoDict['Parson Russell Terrier']){
                dogInfoDict['Parson Russell Terrier'] = [];
            }
                dogInfoDict['Parson Russell Terrier'].push(dogData[i]);

            if ('Parson Russell Terrier' in dogDict){
                
                dogDict['Parson Russell Terrier'].days += singledogDays;
                dogDict['Parson Russell Terrier'].avgDays = dogDict['Parson Russell Terrier'].days / dogDict['Parson Russell Terrier'].number;
                dogDict['Parson Russell Terrier'].size += singledogSize;
                dogDict['Parson Russell Terrier'].avgSize = dogDict['Parson Russell Terrier'].size / dogDict['Parson Russell Terrier'].number;
                dogDict['Parson Russell Terrier'].disposal += singledisposalDog;
                dogDict['Parson Russell Terrier'].rtos += singlertosDog;
                dogDict['Parson Russell Terrier'].euthanized += singleeuthanizedDog;
                dogDict['Parson Russell Terrier'].transferred += singletransferredDog;
                dogDict['Parson Russell Terrier'].died += singlediedDog;
                dogDict['Parson Russell Terrier'].adoption += singleadoptionDog;
                dogDict['Parson Russell Terrier'].returned += singlereturnedDog;
                dogDict['Parson Russell Terrier'].healthy += singlehealthyDog;
                dogDict['Parson Russell Terrier'].manageable += singlemanageableDog;
                dogDict['Parson Russell Terrier'].rehab += singlerehabDog;
                dogDict['Parson Russell Terrier'].unknown += singleunknownDog;
                dogDict['Parson Russell Terrier'].untreatable += singleuntreatableDog;
                dogDict['Parson Russell Terrier'].number = dogDict['Parson Russell Terrier'].disposal + dogDict['Parson Russell Terrier'].rtos + dogDict['Parson Russell Terrier'].euthanized + dogDict['Parson Russell Terrier'].transferred + dogDict['Parson Russell Terrier'].died + dogDict['Parson Russell Terrier'].adoption + dogDict['Parson Russell Terrier'].returned;
            }
            else{
                let myDog = new dogStat("Parson Russell Terrier", 1, singledogDays, singledogDays, singledogSize, singledogSize, singledisposalDog, singlertosDog, singleeuthanizedDog, singletransferredDog, singlediedDog, singleadoptionDog, singlereturnedDog, singlehealthyDog, singlemanageableDog, singlerehabDog, singleunknownDog, singleuntreatableDog);
                dogDict['Parson Russell Terrier'] = myDog;
            }
        }
       
        if(String(breed).includes("PIT")){

            if(!dogInfoDict['Pitbull']){
                dogInfoDict['Pitbull'] = [];
            }
                dogInfoDict['Pitbull'].push(dogData[i]);

            if ('Pitbull' in dogDict){
                
                dogDict['Pitbull'].days += singledogDays;
                dogDict['Pitbull'].avgDays = dogDict['Pitbull'].days / dogDict['Pitbull'].number;
                dogDict['Pitbull'].size += singledogSize;
                dogDict['Pitbull'].avgSize = dogDict['Pitbull'].size / dogDict['Pitbull'].number;
                dogDict['Pitbull'].disposal += singledisposalDog;
                dogDict['Pitbull'].rtos += singlertosDog;
                dogDict['Pitbull'].euthanized += singleeuthanizedDog;
                dogDict['Pitbull'].transferred += singletransferredDog;
                dogDict['Pitbull'].died += singlediedDog;
                dogDict['Pitbull'].adoption += singleadoptionDog;
                dogDict['Pitbull'].returned += singlereturnedDog;
                dogDict['Pitbull'].healthy += singlehealthyDog;
                dogDict['Pitbull'].manageable += singlemanageableDog;
                dogDict['Pitbull'].rehab += singlerehabDog;
                dogDict['Pitbull'].unknown += singleunknownDog;
                dogDict['Pitbull'].untreatable += singleuntreatableDog;
                dogDict['Pitbull'].number = dogDict['Pitbull'].disposal + dogDict['Pitbull'].rtos + dogDict['Pitbull'].euthanized + dogDict['Pitbull'].transferred + dogDict['Pitbull'].died + dogDict['Pitbull'].adoption + dogDict['Pitbull'].returned;
            }
            else{
                let myDog = new dogStat("Pitbull", 1, singledogDays, singledogDays, singledogSize, singledogSize, singledisposalDog, singlertosDog, singleeuthanizedDog, singletransferredDog, singlediedDog, singleadoptionDog, singlereturnedDog, singlehealthyDog, singlemanageableDog, singlerehabDog, singleunknownDog, singleuntreatableDog);
                dogDict['Pitbull'] = myDog;
            }
        }
        
        if(String(breed).includes( "POOD")){

            if(!dogInfoDict['Poodle']){
                dogInfoDict['Poodle'] = [];
            }
                dogInfoDict['Poodle'].push(dogData[i]);

            if ('Poodle' in dogDict){
                
                dogDict['Poodle'].days += singledogDays;
                dogDict['Poodle'].avgDays = dogDict['Poodle'].days / dogDict['Poodle'].number;
                dogDict['Poodle'].size += singledogSize;
                dogDict['Poodle'].avgSize = dogDict['Poodle'].size / dogDict['Poodle'].number;
                dogDict['Poodle'].disposal += singledisposalDog;
                dogDict['Poodle'].rtos += singlertosDog;
                dogDict['Poodle'].euthanized += singleeuthanizedDog;
                dogDict['Poodle'].transferred += singletransferredDog;
                dogDict['Poodle'].died += singlediedDog;
                dogDict['Poodle'].adoption += singleadoptionDog;
                dogDict['Poodle'].returned += singlereturnedDog;
                dogDict['Poodle'].healthy += singlehealthyDog;
                dogDict['Poodle'].manageable += singlemanageableDog;
                dogDict['Poodle'].rehab += singlerehabDog;
                dogDict['Poodle'].unknown += singleunknownDog;
                dogDict['Poodle'].untreatable += singleuntreatableDog;
                dogDict['Poodle'].number = dogDict['Poodle'].disposal + dogDict['Poodle'].rtos + dogDict['Poodle'].euthanized + dogDict['Poodle'].transferred + dogDict['Poodle'].died + dogDict['Poodle'].adoption + dogDict['Poodle'].returned;
            }
            else{
                let myDog = new dogStat("Poodle", 1, singledogDays, singledogDays, singledogSize, singledogSize, singledisposalDog, singlertosDog, singleeuthanizedDog, singletransferredDog, singlediedDog, singleadoptionDog, singlereturnedDog, singlehealthyDog, singlemanageableDog, singlerehabDog, singleunknownDog, singleuntreatableDog);
                dogDict['Poodle'] = myDog;
            }
        }
       
        if(String(breed).includes("SHIH")){

            if(!dogInfoDict['Shih Tzu']){
                dogInfoDict['Shih Tzu'] = [];
            }
                dogInfoDict['Shih Tzu'].push(dogData[i]);

            if ('Shih Tzu' in dogDict){
                
                dogDict['Shih Tzu'].days += singledogDays;
                dogDict['Shih Tzu'].avgDays = dogDict['Shih Tzu'].days / dogDict['Shih Tzu'].number;
                dogDict['Shih Tzu'].size += singledogSize;
                dogDict['Shih Tzu'].avgSize = dogDict['Shih Tzu'].size / dogDict['Shih Tzu'].number;
                dogDict['Shih Tzu'].disposal += singledisposalDog;
                dogDict['Shih Tzu'].rtos += singlertosDog;
                dogDict['Shih Tzu'].euthanized += singleeuthanizedDog;
                dogDict['Shih Tzu'].transferred += singletransferredDog;
                dogDict['Shih Tzu'].died += singlediedDog;
                dogDict['Shih Tzu'].adoption += singleadoptionDog;
                dogDict['Shih Tzu'].returned += singlereturnedDog;
                dogDict['Shih Tzu'].healthy += singlehealthyDog;
                dogDict['Shih Tzu'].manageable += singlemanageableDog;
                dogDict['Shih Tzu'].rehab += singlerehabDog;
                dogDict['Shih Tzu'].unknown += singleunknownDog;
                dogDict['Shih Tzu'].untreatable += singleuntreatableDog;
                dogDict['Shih Tzu'].number = dogDict['Shih Tzu'].disposal + dogDict['Shih Tzu'].rtos + dogDict['Shih Tzu'].euthanized + dogDict['Shih Tzu'].transferred + dogDict['Shih Tzu'].died + dogDict['Shih Tzu'].adoption + dogDict['Shih Tzu'].returned;
            }
            else{
                let myDog = new dogStat("Shih Tzu", 1, singledogDays, singledogDays, singledogSize, singledogSize, singledisposalDog, singlertosDog, singleeuthanizedDog, singletransferredDog, singlediedDog, singleadoptionDog, singlereturnedDog, singlehealthyDog, singlemanageableDog, singlerehabDog, singleunknownDog, singleuntreatableDog);
                dogDict['Shih Tzu'] = myDog;
            }
        }
        if(String(breed).includes( "SIB")){

            if(!dogInfoDict['Siberian Husky']){
                dogInfoDict['Siberian Husky'] = [];
            }
                dogInfoDict['Siberian Husky'].push(dogData[i]);

            if ('Siberian Husky' in dogDict){
                
                dogDict['Siberian Husky'].days += singledogDays;
                dogDict['Siberian Husky'].avgDays = dogDict['Siberian Husky'].days / dogDict['Siberian Husky'].number;
                dogDict['Siberian Husky'].size += singledogSize;
                dogDict['Siberian Husky'].avgSize = dogDict['Siberian Husky'].size / dogDict['Siberian Husky'].number;
                dogDict['Siberian Husky'].disposal += singledisposalDog;
                dogDict['Siberian Husky'].rtos += singlertosDog;
                dogDict['Siberian Husky'].euthanized += singleeuthanizedDog;
                dogDict['Siberian Husky'].transferred += singletransferredDog;
                dogDict['Siberian Husky'].died += singlediedDog;
                dogDict['Siberian Husky'].adoption += singleadoptionDog;
                dogDict['Siberian Husky'].returned += singlereturnedDog;
                dogDict['Siberian Husky'].healthy += singlehealthyDog;
                dogDict['Siberian Husky'].manageable += singlemanageableDog;
                dogDict['Siberian Husky'].rehab += singlerehabDog;
                dogDict['Siberian Husky'].unknown += singleunknownDog;
                dogDict['Siberian Husky'].untreatable += singleuntreatableDog;
                dogDict['Siberian Husky'].number = dogDict['Siberian Husky'].disposal + dogDict['Siberian Husky'].rtos + dogDict['Siberian Husky'].euthanized + dogDict['Siberian Husky'].transferred + dogDict['Siberian Husky'].died + dogDict['Siberian Husky'].adoption + dogDict['Siberian Husky'].returned;
            }
            else{
                let myDog = new dogStat("Siberian Husky", 1, singledogDays, singledogDays, singledogSize, singledogSize, singledisposalDog, singlertosDog, singleeuthanizedDog, singletransferredDog, singlediedDog, singleadoptionDog, singlereturnedDog, singlehealthyDog, singlemanageableDog, singlerehabDog, singleunknownDog, singleuntreatableDog);
                dogDict['Siberian Husky'] = myDog;
            }
        }
        if(String(breed).includes("ROTT")){

            if(!dogInfoDict['Rottweiler']){
                dogInfoDict['Rottweiler'] = [];
            }
                dogInfoDict['Rottweiler'].push(dogData[i]);

            if ('Rottweiler' in dogDict){
                
                dogDict['Rottweiler'].days += singledogDays;
                dogDict['Rottweiler'].avgDays = dogDict['Rottweiler'].days / dogDict['Rottweiler'].number;
                dogDict['Rottweiler'].size += singledogSize;
                dogDict['Rottweiler'].avgSize = dogDict['Rottweiler'].size / dogDict['Rottweiler'].number;
                dogDict['Rottweiler'].disposal += singledisposalDog;
                dogDict['Rottweiler'].rtos += singlertosDog;
                dogDict['Rottweiler'].euthanized += singleeuthanizedDog;
                dogDict['Rottweiler'].transferred += singletransferredDog;
                dogDict['Rottweiler'].died += singlediedDog;
                dogDict['Rottweiler'].adoption += singleadoptionDog;
                dogDict['Rottweiler'].returned += singlereturnedDog;
                dogDict['Rottweiler'].healthy += singlehealthyDog;
                dogDict['Rottweiler'].manageable += singlemanageableDog;
                dogDict['Rottweiler'].rehab += singlerehabDog;
                dogDict['Rottweiler'].unknown += singleunknownDog;
                dogDict['Rottweiler'].untreatable += singleuntreatableDog;
                dogDict['Rottweiler'].number = dogDict['Rottweiler'].disposal + dogDict['Rottweiler'].rtos + dogDict['Rottweiler'].euthanized + dogDict['Rottweiler'].transferred + dogDict['Rottweiler'].died + dogDict['Rottweiler'].adoption + dogDict['Rottweiler'].returned;
            }
            else{
                let myDog = new dogStat("Rottweiler", 1, singledogDays, singledogDays, singledogSize, singledogSize, singledisposalDog, singlertosDog, singleeuthanizedDog, singletransferredDog, singlediedDog, singleadoptionDog, singlereturnedDog, singlehealthyDog, singlemanageableDog, singlerehabDog, singleunknownDog, singleuntreatableDog);
                dogDict['Rottweiler'] = myDog;
            }
        }
        if(String(breed).includes("GREAT")){

            if(!dogInfoDict['Great Pyrenesse']){
                dogInfoDict['Great Pyrenesse'] = [];
            }
                dogInfoDict['Great Pyrenesse'].push(dogData[i]);

            if ('Great Pyrenesse' in dogDict){
                
                dogDict['Great Pyrenesse'].days += singledogDays;
                dogDict['Great Pyrenesse'].avgDays = dogDict['Great Pyrenesse'].days / dogDict['Great Pyrenesse'].number;
                dogDict['Great Pyrenesse'].size += singledogSize;
                dogDict['Great Pyrenesse'].avgSize = dogDict['Great Pyrenesse'].size / dogDict['Great Pyrenesse'].number;
                dogDict['Great Pyrenesse'].disposal += singledisposalDog;
                dogDict['Great Pyrenesse'].rtos += singlertosDog;
                dogDict['Great Pyrenesse'].euthanized += singleeuthanizedDog;
                dogDict['Great Pyrenesse'].transferred += singletransferredDog;
                dogDict['Great Pyrenesse'].died += singlediedDog;
                dogDict['Great Pyrenesse'].adoption += singleadoptionDog;
                dogDict['Great Pyrenesse'].returned += singlereturnedDog;
                dogDict['Great Pyrenesse'].healthy += singlehealthyDog;
                dogDict['Great Pyrenesse'].manageable += singlemanageableDog;
                dogDict['Great Pyrenesse'].rehab += singlerehabDog;
                dogDict['Great Pyrenesse'].unknown += singleunknownDog;
                dogDict['Great Pyrenesse'].untreatable += singleuntreatableDog;
                dogDict['Great Pyrenesse'].number = dogDict['Great Pyrenesse'].disposal + dogDict['Great Pyrenesse'].rtos + dogDict['Great Pyrenesse'].euthanized + dogDict['Great Pyrenesse'].transferred + dogDict['Great Pyrenesse'].died + dogDict['Great Pyrenesse'].adoption + dogDict['Great Pyrenesse'].returned;
            }
            else{
                let myDog = new dogStat("Great Pyrenesse", 1, singledogDays, singledogDays, singledogSize, singledogSize, singledisposalDog, singlertosDog, singleeuthanizedDog, singletransferredDog, singlediedDog, singleadoptionDog, singlereturnedDog, singlehealthyDog, singlemanageableDog, singlerehabDog, singleunknownDog, singleuntreatableDog);
                dogDict['Great Pyrenesse'] = myDog;
            }
        }
        if(String(breed).includes("POM")){

            if(!dogInfoDict['Pomeranian']){
                dogInfoDict['Pomeranian'] = [];
            }
                dogInfoDict['Pomeranian'].push(dogData[i]);

            if ('Pomeranian' in dogDict){
                
                dogDict['Pomeranian'].days += singledogDays;
                dogDict['Pomeranian'].avgDays = dogDict['Pomeranian'].days / dogDict['Pomeranian'].number;
                dogDict['Pomeranian'].size += singledogSize;
                dogDict['Pomeranian'].avgSize = dogDict['Pomeranian'].size / dogDict['Pomeranian'].number;
                dogDict['Pomeranian'].disposal += singledisposalDog;
                dogDict['Pomeranian'].rtos += singlertosDog;
                dogDict['Pomeranian'].euthanized += singleeuthanizedDog;
                dogDict['Pomeranian'].transferred += singletransferredDog;
                dogDict['Pomeranian'].died += singlediedDog;
                dogDict['Pomeranian'].adoption += singleadoptionDog;
                dogDict['Pomeranian'].returned += singlereturnedDog;
                dogDict['Pomeranian'].healthy += singlehealthyDog;
                dogDict['Pomeranian'].manageable += singlemanageableDog;
                dogDict['Pomeranian'].rehab += singlerehabDog;
                dogDict['Pomeranian'].unknown += singleunknownDog;
                dogDict['Pomeranian'].untreatable += singleuntreatableDog;
                dogDict['Pomeranian'].number = dogDict['Pomeranian'].disposal + dogDict['Pomeranian'].rtos + dogDict['Pomeranian'].euthanized + dogDict['Pomeranian'].transferred + dogDict['Pomeranian'].died + dogDict['Pomeranian'].adoption + dogDict['Pomeranian'].returned;
            }
            else{
                let myDog = new dogStat("Pomeranian", 1, singledogDays, singledogDays, singledogSize, singledogSize, singledisposalDog, singlertosDog, singleeuthanizedDog, singletransferredDog, singlediedDog, singleadoptionDog, singlereturnedDog, singlehealthyDog, singlemanageableDog, singlerehabDog, singleunknownDog, singleuntreatableDog);
                dogDict['Pomeranian'] = myDog;
            }
        } 
           
}



    console.log("Number of German shepards is " + dogDict['German Shepard'].number);
    console.log(dogDict['German Shepard'].size);
    console.log(dogDict['German Shepard'].avgSize);
    console.log(dogDict['German Shepard'].avgDays);
    console.log(dogDict['German Shepard'].days);
    
    console.log("Average number of days dogs are in the shelter is " + dogDaysAvg);
    console.log("Number of total dogs is " + dogNum);
    console.log("Average size of dog is " + dogAvgSize);

    console.log("Number of germ adopted" + dogDict['German Shepard'].adoption);
    console.log("Number of germ died" + dogDict['German Shepard'].died);
    console.log("Number of germ disposed" + dogDict['German Shepard'].disposal);
    console.log("Number of germ euthanized" + dogDict['German Shepard'].euthanized);
    console.log("Number of germ returned" + dogDict['German Shepard'].returned);
    console.log("Number of germ rtos" + dogDict['German Shepard'].rtos);
    console.log("Number of germ transferred" + dogDict['German Shepard'].transferred);   
    
    console.log("Number of dogs adopted " + adoptionDog);
    console.log("Number of dogs died" + diedDog);
    console.log("Number of dogs disposed" + disposalDog);
    console.log("Number of dogs euthanized" + euthanizedDog);
    console.log("Number of dogs returned" + returnedDog);
    console.log("Number of dogs rtos" + rtosDog);
    console.log("Number of dogs transferred" + transferredDog); 

    console.log(dogDict['German Shepard'].number);
    console.log(dogDict['Alaskan Husky'].number);
    console.log(dogDict['Chihuahua'].number);
    console.log(dogDict['Great Pyrenesse'].number);
    console.log(dogDict['Pitbull'].number);
    console.log(dogDict['Pomeranian'].number);
    console.log(dogDict['Poodle'].number);
    console.log(dogDict['Rottweiler'].number);
    console.log(dogDict['Shih Tzu'].number);
    console.log(dogDict['Siberian Husky'].number);
    console.log(dogDict['Yorkie'].number);
    console.log(dogDict['Labrador'].number);
    console.log(dogDict['Border Collie'].number);
    console.log(dogDict['Parson Russell Terrier'].number);



    
    

}

//http://alpha.editor.p5js.org/fry/sketches/rJ9VJmaYx
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

function createHover(){
   
    //Chihuahua
    if(stage == 2 && mouseX>dogDict['Chihuahua'].avgDays*40 && mouseX<((dogDict['Chihuahua'].avgDays*40)+(11.6*dogDict['Chihuahua'].avgSize)) && mouseY>(750-(5*dogDict['Chihuahua'].number)) && mouseY<((750-(5*dogDict['Chihuahua'].number))+(10*dogDict['Chihuahua'].avgSize))){
        fill(255);
        rect(dogDict['Chihuahua'].avgDays*40, (750-(5*dogDict['Chihuahua'].number)-100), 200, 100);
        fill(0,0,0);
        textSize(12);
        if(dogDict['Chihuahua'].avgSize>1 && dogDict['Chihuahua'].avgSize<2){
            var averageSize = String("Toy - Puppy");
        }
        else if(dogDict['Chihuahua'].avgSize>2 && dogDict['Chihuahua'].avgSize<3){
            var averageSize = String("Puppy - Small");
        }
        if(dogDict['Chihuahua'].avgSize>3 && dogDict['Chihuahua'].avgSize<4){
            var averageSize = String("Small - Medium");
        }
        if(dogDict['Chihuahua'].avgSize>4 && dogDict['Chihuahua'].avgSize<5){
            var averageSize = String("Medium - Large");
        }
        text("Breed: Chihuahua", dogDict['Chihuahua'].avgDays*40, (750-(5*dogDict['Chihuahua'].number)-90), 200, 20)
        text("Size of dog: " + averageSize, dogDict['Chihuahua'].avgDays*40, (750-(5*dogDict['Chihuahua'].number)-70), 200, 20);
        text("Days in shelter: " + round(dogDict['Chihuahua'].avgDays), dogDict['Chihuahua'].avgDays*40, (750-(5*dogDict['Chihuahua'].number)-50), 200, 20);
        text("Quantity of dog: " + dogDict['Chihuahua'].number, dogDict['Chihuahua'].avgDays*40, (750-(5*dogDict['Chihuahua'].number)- 30), 200, 20);
    }
    //German
    else if(stage == 2 && mouseX>dogDict['German Shepard'].avgDays*40 && mouseX<((dogDict['German Shepard'].avgDays*40)+(30.2*dogDict['German Shepard'].avgSize)) && mouseY>(750-(5*dogDict['German Shepard'].number)) && mouseY<((750-(5*dogDict['German Shepard'].number))+(20*dogDict['German Shepard'].avgSize))){
        fill(255);
        rect(dogDict['German Shepard'].avgDays*40, (750-(5*dogDict['German Shepard'].number)-100), 200, 100);
        fill(0,0,0);
        textSize(12);
        if(dogDict['German Shepard'].avgSize>1 && dogDict['German Shepard'].avgSize<2){
            var averageSize = String("Toy - Puppy");
        }
        else if(dogDict['German Shepard'].avgSize>2 && dogDict['German Shepard'].avgSize<3){
            var averageSize = String("Puppy - Small");
        }
        if(dogDict['German Shepard'].avgSize>3 && dogDict['German Shepard'].avgSize<4){
            var averageSize = String("Small - Medium");
        }
        if(dogDict['German Shepard'].avgSize>4 && dogDict['German Shepard'].avgSize<5){
            var averageSize = String("Medium - Large");
        }
        text("Breed: German Shepard", dogDict['German Shepard'].avgDays*40, (750-(5*dogDict['German Shepard'].number)-90), 200, 20)
        text("Size of dog: " + averageSize, dogDict['German Shepard'].avgDays*40, (750-(5*dogDict['German Shepard'].number)-70), 200, 20);
        text("Days in shelter: " + round(dogDict['German Shepard'].avgDays), dogDict['German Shepard'].avgDays*40, (750-(5*dogDict['German Shepard'].number)-50), 200, 20);
        text("Quantity of dog: " + dogDict['German Shepard'].number, dogDict['German Shepard'].avgDays*40, (750-(5*dogDict['German Shepard'].number)- 30), 200, 20);
    }
    //Alaskan Husky
    else if(stage == 2 && mouseX>dogDict['Alaskan Husky'].avgDays*40 && mouseX<((dogDict['Alaskan Husky'].avgDays*40)+(24.8*dogDict['Alaskan Husky'].avgSize)) && mouseY>(750-(5*dogDict['Alaskan Husky'].number)) && mouseY<((750-(5*dogDict['Alaskan Husky'].number))+(20*dogDict['Alaskan Husky'].avgSize))){
        fill(255);
        rect(dogDict['Alaskan Husky'].avgDays*40, (750-(5*dogDict['Alaskan Husky'].number)-100), 200, 100);
        fill(0,0,0);
        textSize(12);
        if(dogDict['Alaskan Husky'].avgSize>1 && dogDict['Alaskan Husky'].avgSize<2){
            var averageSize = String("Toy - Puppy");
        }
        else if(dogDict['Alaskan Husky'].avgSize>2 && dogDict['Alaskan Husky'].avgSize<3){
            var averageSize = String("Puppy - Small");
        }
        if(dogDict['Alaskan Husky'].avgSize>3 && dogDict['Alaskan Husky'].avgSize<4){
            var averageSize = String("Small - Medium");
        }
        if(dogDict['Alaskan Husky'].avgSize>4 && dogDict['Alaskan Husky'].avgSize<5){
            var averageSize = String("Medium - Large");
        }
        text("Breed: Alaskan Husky", dogDict['Alaskan Husky'].avgDays*40, (750-(5*dogDict['Alaskan Husky'].number)-90), 200, 20)
        text("Size of dog: " + averageSize, dogDict['Alaskan Husky'].avgDays*40, (750-(5*dogDict['Alaskan Husky'].number)-70), 200, 20);
        text("Days in shelter: " + round(dogDict['Alaskan Husky'].avgDays), dogDict['Alaskan Husky'].avgDays*40, (750-(5*dogDict['Alaskan Husky'].number)-50), 200, 20);
        text("Quantity of dog: " + dogDict['Alaskan Husky'].number, dogDict['Alaskan Husky'].avgDays*40, (750-(5*dogDict['Alaskan Husky'].number)- 30), 200, 20);
    }
     //Great P
     else if(stage == 2 && mouseX>dogDict['Great Pyrenesse'].avgDays*40 && mouseX<((dogDict['Great Pyrenesse'].avgDays*40)+(24.2*dogDict['Great Pyrenesse'].avgSize)) && mouseY>(750-(5*dogDict['Great Pyrenesse'].number)) && mouseY<((750-(5*dogDict['Great Pyrenesse'].number))+(20*dogDict['Great Pyrenesse'].avgSize))){
        fill(255);
        rect(dogDict['Great Pyrenesse'].avgDays*40, (750-(5*dogDict['Great Pyrenesse'].number)-100), 200, 100);
        fill(0,0,0);
        textSize(12);
        if(dogDict['Great Pyrenesse'].avgSize>1 && dogDict['Great Pyrenesse'].avgSize<2){
            var averageSize = String("Toy - Puppy");
        }
        else if(dogDict['Great Pyrenesse'].avgSize>2 && dogDict['Great Pyrenesse'].avgSize<3){
            var averageSize = String("Puppy - Small");
        }
        if(dogDict['Great Pyrenesse'].avgSize>3 && dogDict['Great Pyrenesse'].avgSize<4){
            var averageSize = String("Small - Medium");
        }
        if(dogDict['Great Pyrenesse'].avgSize>4 && dogDict['Great Pyrenesse'].avgSize<5){
            var averageSize = String("Medium - Large");
        }
        text("Breed: Great Pyrenesse", dogDict['Great Pyrenesse'].avgDays*40, (750-(5*dogDict['Great Pyrenesse'].number)-90), 200, 20)
        text("Size of dog: " + averageSize, dogDict['Great Pyrenesse'].avgDays*40, (750-(5*dogDict['Great Pyrenesse'].number)-70), 200, 20);
        text("Days in shelter: " + round(dogDict['Great Pyrenesse'].avgDays), dogDict['Great Pyrenesse'].avgDays*40, (750-(5*dogDict['Great Pyrenesse'].number)-50), 200, 20);
        text("Quantity of dog: " + dogDict['Great Pyrenesse'].number, dogDict['Great Pyrenesse'].avgDays*40, (750-(5*dogDict['Great Pyrenesse'].number)- 30), 200, 20);
    }
     //Pitbull
     else if(stage == 2 && mouseX>dogDict['Pitbull'].avgDays*40 && mouseX<((dogDict['Pitbull'].avgDays*40)+(28*dogDict['Pitbull'].avgSize)) && mouseY>(750-(5*dogDict['Pitbull'].number)) && mouseY<((750-(5*dogDict['Pitbull'].number))+(20*dogDict['Pitbull'].avgSize))){
        fill(255);
        rect(dogDict['Pitbull'].avgDays*40, (750-(5*dogDict['Pitbull'].number)-100), 200, 100);
        fill(0,0,0);
        textSize(12);
        if(dogDict['Pitbull'].avgSize>1 && dogDict['Pitbull'].avgSize<2){
            var averageSize = String("Toy - Puppy");
        }
        else if(dogDict['Pitbull'].avgSize>2 && dogDict['Pitbull'].avgSize<3){
            var averageSize = String("Puppy - Small");
        }
        if(dogDict['Pitbull'].avgSize>3 && dogDict['Pitbull'].avgSize<4){
            var averageSize = String("Small - Medium");
        }
        if(dogDict['Pitbull'].avgSize>4 && dogDict['Pitbull'].avgSize<5){
            var averageSize = String("Medium - Large");
        }
        text("Breed: Pitbull", dogDict['Pitbull'].avgDays*40, (750-(5*dogDict['Pitbull'].number)-90), 200, 20)
        text("Size of dog: " + averageSize, dogDict['Pitbull'].avgDays*40, (750-(5*dogDict['Pitbull'].number)-70), 200, 20);
        text("Days in shelter: " + round(dogDict['Pitbull'].avgDays), dogDict['Pitbull'].avgDays*40, (750-(5*dogDict['Pitbull'].number)-50), 200, 20);
        text("Quantity of dog: " + dogDict['Pitbull'].number, dogDict['Pitbull'].avgDays*40, (750-(5*dogDict['Pitbull'].number)- 30), 200, 20);
    }
    //Pom
    else if(stage == 2 && mouseX>dogDict['Pomeranian'].avgDays*40 && mouseX<((dogDict['Pomeranian'].avgDays*40)+(20*dogDict['Pomeranian'].avgSize)) && mouseY>(750-(5*dogDict['Pomeranian'].number)) && mouseY<((750-(5*dogDict['Pomeranian'].number))+(20*dogDict['Pomeranian'].avgSize))){
        fill(255);
        rect(dogDict['Pomeranian'].avgDays*40, (750-(5*dogDict['Pomeranian'].number)-100), 200, 100);
        fill(0,0,0);
        textSize(12);
        if(dogDict['Pomeranian'].avgSize>1 && dogDict['Pomeranian'].avgSize<2){
            var averageSize = String("Toy - Puppy");
        }
        else if(dogDict['Pomeranian'].avgSize>2 && dogDict['Pomeranian'].avgSize<3){
            var averageSize = String("Puppy - Small");
        }
        if(dogDict['Pomeranian'].avgSize>3 && dogDict['Pomeranian'].avgSize<4){
            var averageSize = String("Small - Medium");
        }
        if(dogDict['Pomeranian'].avgSize>4 && dogDict['Pomeranian'].avgSize<5){
            var averageSize = String("Medium - Large");
        }
        text("Breed: Pomeranian", dogDict['Pomeranian'].avgDays*40, (750-(5*dogDict['Pomeranian'].number)-90), 200, 20)
        text("Size of dog: " + averageSize, dogDict['Pomeranian'].avgDays*40, (750-(5*dogDict['Pomeranian'].number)-70), 200, 20);
        text("Days in shelter: " + round(dogDict['Pomeranian'].avgDays), dogDict['Pomeranian'].avgDays*40, (750-(5*dogDict['Pomeranian'].number)-50), 200, 20);
        text("Quantity of dog: " + dogDict['Pomeranian'].number, dogDict['Pomeranian'].avgDays*40, (750-(5*dogDict['Pomeranian'].number)- 30), 200, 20);
    }
     //Poodle
     else if(stage == 2 && mouseX>dogDict['Poodle'].avgDays*40 && mouseX<((dogDict['Poodle'].avgDays*40)+(16.2*dogDict['Poodle'].avgSize)) && mouseY>(750-(5*dogDict['Poodle'].number)) && mouseY<((750-(5*dogDict['Poodle'].number))+(20*dogDict['Poodle'].avgSize))){
        fill(255);
        rect(dogDict['Poodle'].avgDays*40, (750-(5*dogDict['Poodle'].number)-100), 200, 100);
        fill(0,0,0);
        textSize(12);
        if(dogDict['Poodle'].avgSize>1 && dogDict['Poodle'].avgSize<2){
            var averageSize = String("Toy - Puppy");
        }
        else if(dogDict['Poodle'].avgSize>2 && dogDict['Poodle'].avgSize<3){
            var averageSize = String("Puppy - Small");
        }
        if(dogDict['Poodle'].avgSize>3 && dogDict['Poodle'].avgSize<4){
            var averageSize = String("Small - Medium");
        }
        if(dogDict['Poodle'].avgSize>4 && dogDict['Poodle'].avgSize<5){
            var averageSize = String("Medium - Large");
        }
        text("Breed: Poodle", dogDict['Poodle'].avgDays*40, (750-(5*dogDict['Poodle'].number)-90), 200, 20)
        text("Size of dog: " + averageSize, dogDict['Poodle'].avgDays*40, (750-(5*dogDict['Poodle'].number)-70), 200, 20);
        text("Days in shelter: " + round(dogDict['Poodle'].avgDays), dogDict['Poodle'].avgDays*40, (750-(5*dogDict['Poodle'].number)-50), 200, 20);
        text("Quantity of dog: " + dogDict['Poodle'].number, dogDict['Poodle'].avgDays*40, (750-(5*dogDict['Poodle'].number)- 30), 200, 20);
    }
    //Rott
    else if(stage == 2 && mouseX>dogDict['Rottweiler'].avgDays*40 && mouseX<((dogDict['Rottweiler'].avgDays*40)+(25.6*dogDict['Rottweiler'].avgSize)) && mouseY>(750-(5*dogDict['Rottweiler'].number)) && mouseY<((750-(5*dogDict['Rottweiler'].number))+(20*dogDict['Rottweiler'].avgSize))){
        fill(255);
        rect(dogDict['Rottweiler'].avgDays*40, (750-(5*dogDict['Rottweiler'].number)-100), 200, 100);
        fill(0,0,0);
        textSize(12);
        if(dogDict['Rottweiler'].avgSize>1 && dogDict['Rottweiler'].avgSize<2){
            var averageSize = String("Toy - Puppy");
        }
        else if(dogDict['Rottweiler'].avgSize>2 && dogDict['Rottweiler'].avgSize<3){
            var averageSize = String("Puppy - Small");
        }
        if(dogDict['Rottweiler'].avgSize>3 && dogDict['Rottweiler'].avgSize<4){
            var averageSize = String("Small - Medium");
        }
        if(dogDict['Rottweiler'].avgSize>4 && dogDict['Rottweiler'].avgSize<5){
            var averageSize = String("Medium - Large");
        }
        text("Breed: Rottweiler", dogDict['Rottweiler'].avgDays*40, (750-(5*dogDict['Rottweiler'].number)-90), 200, 20)
        text("Size of dog: " + averageSize, dogDict['Rottweiler'].avgDays*40, (750-(5*dogDict['Rottweiler'].number)-70), 200, 20);
        text("Days in shelter: " + round(dogDict['Rottweiler'].avgDays), dogDict['Rottweiler'].avgDays*40, (750-(5*dogDict['Rottweiler'].number)-50), 200, 20);
        text("Quantity of dog: " + dogDict['Rottweiler'].number, dogDict['Rottweiler'].avgDays*40, (750-(5*dogDict['Rottweiler'].number)- 30), 200, 20);
    }
     //ShihTzu
     else if(stage == 2 && mouseX>dogDict['Shih Tzu'].avgDays*40 && mouseX<((dogDict['Shih Tzu'].avgDays*40)+(24*dogDict['Shih Tzu'].avgSize)) && mouseY>(750-(5*dogDict['Shih Tzu'].number)) && mouseY<((750-(5*dogDict['Shih Tzu'].number))+(20*dogDict['Shih Tzu'].avgSize))){
        fill(255);
        rect(dogDict['Shih Tzu'].avgDays*40, (750-(5*dogDict['Shih Tzu'].number)-100), 200, 100);
        fill(0,0,0);
        textSize(12);
        if(dogDict['Shih Tzu'].avgSize>1 && dogDict['Shih Tzu'].avgSize<2){
            var averageSize = String("Toy - Puppy");
        }
        else if(dogDict['Shih Tzu'].avgSize>2 && dogDict['Shih Tzu'].avgSize<3){
            var averageSize = String("Puppy - Small");
        }
        if(dogDict['Shih Tzu'].avgSize>3 && dogDict['Shih Tzu'].avgSize<4){
            var averageSize = String("Small - Medium");
        }
        if(dogDict['Shih Tzu'].avgSize>4 && dogDict['Shih Tzu'].avgSize<5){
            var averageSize = String("Medium - Large");
        }
        text("Breed: Shih Tzu", dogDict['Shih Tzu'].avgDays*40, (750-(5*dogDict['Shih Tzu'].number)-90), 200, 20)
        text("Size of dog: " + averageSize, dogDict['Shih Tzu'].avgDays*40, (750-(5*dogDict['Shih Tzu'].number)-70), 200, 20);
        text("Days in shelter: " + round(dogDict['Shih Tzu'].avgDays), dogDict['Shih Tzu'].avgDays*40, (750-(5*dogDict['Shih Tzu'].number)-50), 200, 20);
        text("Quantity of dog: " + dogDict['Shih Tzu'].number, dogDict['Shih Tzu'].avgDays*40, (750-(5*dogDict['Shih Tzu'].number)- 30), 200, 20);
    }
     //Sib
     else if(stage == 2 && mouseX>dogDict['Siberian Husky'].avgDays*40 && mouseX<((dogDict['Siberian Husky'].avgDays*40)+(24.8*dogDict['Siberian Husky'].avgSize)) && mouseY>(750-(5*dogDict['Siberian Husky'].number)) && mouseY<((750-(5*dogDict['Siberian Husky'].number))+(20*dogDict['Siberian Husky'].avgSize))){
        fill(255);
        rect(dogDict['Siberian Husky'].avgDays*40, (750-(5*dogDict['Siberian Husky'].number)-100), 200, 100);
        fill(0,0,0);
        textSize(12);
        if(dogDict['Siberian Husky'].avgSize>1 && dogDict['Siberian Husky'].avgSize<2){
            var averageSize = String("Toy - Puppy");
        }
        else if(dogDict['Siberian Husky'].avgSize>2 && dogDict['Siberian Husky'].avgSize<3){
            var averageSize = String("Puppy - Small");
        }
        if(dogDict['Siberian Husky'].avgSize>3 && dogDict['Siberian Husky'].avgSize<4){
            var averageSize = String("Small - Medium");
        }
        if(dogDict['Siberian Husky'].avgSize>4 && dogDict['Siberian Husky'].avgSize<5){
            var averageSize = String("Medium - Large");
        }
        text("Breed: Siberian Husky", dogDict['Siberian Husky'].avgDays*40, (750-(5*dogDict['Siberian Husky'].number)-90), 200, 20)
        text("Size of dog: " + averageSize, dogDict['Siberian Husky'].avgDays*40, (750-(5*dogDict['Siberian Husky'].number)-70), 200, 20);
        text("Days in shelter: " + round(dogDict['Siberian Husky'].avgDays), dogDict['Siberian Husky'].avgDays*40, (750-(5*dogDict['Siberian Husky'].number)-50), 200, 20);
        text("Quantity of dog: " + dogDict['Siberian Husky'].number, dogDict['Siberian Husky'].avgDays*40, (750-(5*dogDict['Siberian Husky'].number)- 30), 200, 20);
    }
    //Yorkie
    else if(stage == 2 && mouseX>dogDict['Yorkie'].avgDays*40 && mouseX<((dogDict['Yorkie'].avgDays*40)+(19.4*dogDict['Yorkie'].avgSize)) && mouseY>(750-(5*dogDict['Yorkie'].number)) && mouseY<((750-(5*dogDict['Yorkie'].number))+(20*dogDict['Yorkie'].avgSize))){
        fill(255);
        rect(dogDict['Yorkie'].avgDays*40, (750-(5*dogDict['Yorkie'].number)-100), 200, 100);
        fill(0,0,0);
        textSize(12);
        if(dogDict['Yorkie'].avgSize>1 && dogDict['Yorkie'].avgSize<2){
            var averageSize = String("Toy - Puppy");
        }
        else if(dogDict['Yorkie'].avgSize>2 && dogDict['Yorkie'].avgSize<3){
            var averageSize = String("Puppy - Small");
        }
        if(dogDict['Yorkie'].avgSize>3 && dogDict['Yorkie'].avgSize<4){
            var averageSize = String("Small - Medium");
        }
        if(dogDict['Yorkie'].avgSize>4 && dogDict['Yorkie'].avgSize<5){
            var averageSize = String("Medium - Large");
        }
        text("Breed: Yorkie", dogDict['Yorkie'].avgDays*40, (750-(5*dogDict['Yorkie'].number)-90), 200, 20)
        text("Size of dog: " + averageSize, dogDict['Yorkie'].avgDays*40, (750-(5*dogDict['Yorkie'].number)-70), 200, 20);
        text("Days in shelter: " + round(dogDict['Yorkie'].avgDays), dogDict['Yorkie'].avgDays*40, (750-(5*dogDict['Yorkie'].number)-50), 200, 20);
        text("Quantity of dog: " + dogDict['Yorkie'].number, dogDict['Yorkie'].avgDays*40, (750-(5*dogDict['Yorkie'].number)- 30), 200, 20);
    }
     //Lab
     else if(stage == 2 && mouseX>dogDict['Labrador'].avgDays*40 && mouseX<((dogDict['Labrador'].avgDays*40)+(24.8*dogDict['Labrador'].avgSize)) && mouseY>(750-(5*dogDict['Labrador'].number)) && mouseY<((750-(5*dogDict['Labrador'].number))+(20*dogDict['Labrador'].avgSize))){
        fill(255);
        rect(dogDict['Labrador'].avgDays*40, (750-(5*dogDict['Labrador'].number)-100), 200, 100);
        fill(0,0,0);
        textSize(12);
        if(dogDict['Labrador'].avgSize>1 && dogDict['Labrador'].avgSize<2){
            var averageSize = String("Toy - Puppy");
        }
        else if(dogDict['Labrador'].avgSize>2 && dogDict['Labrador'].avgSize<3){
            var averageSize = String("Puppy - Small");
        }
        if(dogDict['Labrador'].avgSize>3 && dogDict['Labrador'].avgSize<4){
            var averageSize = String("Small - Medium");
        }
        if(dogDict['Labrador'].avgSize>4 && dogDict['Labrador'].avgSize<5){
            var averageSize = String("Medium - Large");
        }
        text("Breed: Labrador", dogDict['Labrador'].avgDays*40, (750-(5*dogDict['Labrador'].number)-90), 200, 20)
        text("Size of dog: " + averageSize, dogDict['Labrador'].avgDays*40, (750-(5*dogDict['Labrador'].number)-70), 200, 20);
        text("Days in shelter: " + round(dogDict['Labrador'].avgDays), dogDict['Labrador'].avgDays*40, (750-(5*dogDict['Labrador'].number)-50), 200, 20);
        text("Quantity of dog: " + dogDict['Labrador'].number, dogDict['Labrador'].avgDays*40, (750-(5*dogDict['Labrador'].number)- 30), 200, 20);
    }
    //Collie
    else if(stage == 2 && mouseX>dogDict['Border Collie'].avgDays*40 && mouseX<((dogDict['Border Collie'].avgDays*40)+(26.4*dogDict['Border Collie'].avgSize)) && mouseY>(750-(5*dogDict['Border Collie'].number)) && mouseY<((750-(5*dogDict['Border Collie'].number))+(20*dogDict['Border Collie'].avgSize))){
        fill(255);
        rect(dogDict['Border Collie'].avgDays*40, (750-(5*dogDict['Border Collie'].number)-100), 200, 100);
        fill(0,0,0);
        textSize(12);
        if(dogDict['Border Collie'].avgSize>1 && dogDict['Border Collie'].avgSize<2){
            var averageSize = String("Toy - Puppy");
        }
        else if(dogDict['Border Collie'].avgSize>2 && dogDict['Border Collie'].avgSize<3){
            var averageSize = String("Puppy - Small");
        }
        if(dogDict['Border Collie'].avgSize>3 && dogDict['Border Collie'].avgSize<4){
            var averageSize = String("Small - Medium");
        }
        if(dogDict['Border Collie'].avgSize>4 && dogDict['Border Collie'].avgSize<5){
            var averageSize = String("Medium - Large");
        }
        text("Breed: Border Collie", dogDict['Border Collie'].avgDays*40, (750-(5*dogDict['Border Collie'].number)-90), 200, 20)
        text("Size of dog: " + averageSize, dogDict['Border Collie'].avgDays*40, (750-(5*dogDict['Border Collie'].number)-70), 200, 20);
        text("Days in shelter: " + round(dogDict['Border Collie'].avgDays), dogDict['Border Collie'].avgDays*40, (750-(5*dogDict['Border Collie'].number)-50), 200, 20);
        text("Quantity of dog: " + dogDict['Border Collie'].number, dogDict['Border Collie'].avgDays*40, (750-(5*dogDict['Border Collie'].number)- 30), 200, 20);
    }
     //Parson
     else if(stage == 2 && mouseX>dogDict['Parson Russell Terrier'].avgDays*40 && mouseX<((dogDict['Parson Russell Terrier'].avgDays*40)+(23.2*dogDict['Parson Russell Terrier'].avgSize)) && mouseY>(750-(5*dogDict['Parson Russell Terrier'].number)) && mouseY<((750-(5*dogDict['Parson Russell Terrier'].number))+(20*dogDict['Parson Russell Terrier'].avgSize))){
        fill(255);
        rect(dogDict['Parson Russell Terrier'].avgDays*40, (750-(5*dogDict['Parson Russell Terrier'].number)-100), 200, 100);
        fill(0,0,0);
        textSize(12);
        if(dogDict['Parson Russell Terrier'].avgSize>1 && dogDict['Parson Russell Terrier'].avgSize<2){
            var averageSize = String("Toy - Puppy");
        }
        else if(dogDict['Parson Russell Terrier'].avgSize>2 && dogDict['Parson Russell Terrier'].avgSize<3){
            var averageSize = String("Puppy - Small");
        }
        if(dogDict['Parson Russell Terrier'].avgSize>3 && dogDict['Parson Russell Terrier'].avgSize<4){
            var averageSize = String("Small - Medium");
        }
        if(dogDict['Parson Russell Terrier'].avgSize>4 && dogDict['Parson Russell Terrier'].avgSize<5){
            var averageSize = String("Medium - Large");
        }
        text("Breed: Parson Russell Terrier", dogDict['Parson Russell Terrier'].avgDays*40, (750-(5*dogDict['Parson Russell Terrier'].number)-90), 200, 20)
        text("Size of dog: " + averageSize, dogDict['Parson Russell Terrier'].avgDays*40, (750-(5*dogDict['Parson Russell Terrier'].number)-70), 200, 20);
        text("Days in shelter: " + round(dogDict['Parson Russell Terrier'].avgDays), dogDict['Parson Russell Terrier'].avgDays*40, (750-(5*dogDict['Parson Russell Terrier'].number)-50), 200, 20);
        text("Quantity of dog: " + dogDict['Parson Russell Terrier'].number, dogDict['Parson Russell Terrier'].avgDays*40, (750-(5*dogDict['Parson Russell Terrier'].number)- 30), 200, 20);
    }
    
    

    
}



