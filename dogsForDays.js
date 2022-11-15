//test

var logo, arrow, boneB, boneY, boneP, boneG, boneDG
var germ, aHusky, borderCollie, cairn, chi, greatP, parson, pitbull, pom, poodle, pug, rott, shihTzu, sib, york, lab;
var centuryGothic, centuryGothicBold;
var stage = 7;
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

    if (stage == 3){
        textSize(40);
        textAlign(CENTER);
        // Change this once we put the data in
        text("Chihuahua Average vs. Shelter Average", 293, 212, 1143, 49);
        // Add bar graph of the two dogs we're comparing. Hover to see number
        stroke(53, 58, 52);
        strokeWeight(1);
        line(204, 904, 586, 904);
        textSize(20);
        noStroke();
        textAlign(CENTER);
        textFont(centuryGothicBold);
        text("# of days in the shelter", 204, 918, 114, 50);
        text("Age", 338, 918, 114, 50);
        text("Size", 472, 918, 114, 50);
        
        //donut chart
        //Outcome type

        //Dog we're comparing (change this)
        noStroke();
        fill(205, 221, 220);
        ellipse(804, 439, 300, 300);
        textSize(16);
        textFont(centuryGothic);
        text("Chihuahua", 746, 429, 114, 20);

        //Shelter dogs
        fill(180, 193, 184);
        ellipse(1341, 439, 300, 300);
        textSize(16);
        textFont(centuryGothic);
        text("Shelter Dogs", 1283, 429, 114, 20);

        textSize(20);
        fill(53, 58, 52);
        noStroke();
        textAlign(CENTER);
        textFont(centuryGothicBold);
        text("Outcome Type", 1008, 395, 114, 50);

        //Intake Condition
         //Dog we're comparing (change this)
        fill(205, 221, 220);
        ellipse(804, 803, 300, 300);
        textSize(16);
        textFont(centuryGothic);
        text("Chihuahua", 1283, 793, 114, 20);

        //Shelter dogs
        fill(180, 193, 184);
        ellipse(1341, 803, 300, 300);
        textSize(16);
        textFont(centuryGothic);
        text("Shelter Dogs", 1283, 793, 114, 20);

        textSize(20);
        fill(53, 58, 52);
        noStroke();
        textAlign(CENTER);
        textFont(centuryGothicBold);
        text("Intake Condition", 1008, 758, 114, 50);

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
    else if(stage == 2 && mouseX>870 && mouseX<970 && mouseY>660 && mouseY<760){
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
        

        if(String(breed).includes("GERM")){
            germNum++;
            germDays += int(dogData[i].days_in_shelter);
            germAvg = germDays / germNum;
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
       
        if(String(breed).includes( "PUG")){
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
       
        if(String(breed).includes( "BORDER")){
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

