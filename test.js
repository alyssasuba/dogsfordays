
var dogData;
var germNum = 0;
var aHuskyNum = 0;
var yorksNum = 0;
var pugNum = 0;
var borderNum = 0;
var cairnNum = 0;
var chiNum = 0;
var labNum = 0;
var parNum = 0;
var pitNum = 0;
var poodNum = 0;
var shihNum = 0;
var sibNum = 0;
var rottNum = 0;
var greatNum = 0;
var pomNum = 0;


function preload(){
    dogData = loadJSON("https://data.sonomacounty.ca.gov/resource/924a-vesw.json");
}
function setup(){
    createCanvas(700, 700);
    fill(128);
 
}

function draw(){
    background(255);
    for(var i=0; i<dogData.length; i++){
        var german = dogData[i].breed.substring(0,4);
        if(german == "GERM"){
            germNum++;

            //Cause we don't have enough time, the average is about 16,7 days

        }
        var husky = dogData[i].breed.substring(0,7);
        if(husky == "ALASKAN"){
            aHuskyNum++;

            //Cause we don't have enough time, the average is about 7 days

        }
        var yorkshire = dogData[i].breed.substring(0,5);
        if(yorkshire == "YORKS"){
            yorksNum++;
        }
        var pug = dogData[i].breed.substring(0,3);
        if(pug == "PUG"){
            pugNum++;
        }
        var border = dogData[i].breed.substring(0,6);
        if(border == "BORDER"){
            borderNum++;
             //Cause we don't have enough time, the average is about 12.4 days
        }
        var cairn = dogData[i].breed.substring(0,5);
        if(cairn == "CAIRN"){
            cairnNum++;
        }
        var chi = dogData[i].breed.substring(0,3);
        if(chi == "CHI"){
            chiNum++;
             //Cause we don't have enough time, the average is about 14.1 days

        }
        var lab = dogData[i].breed.substring(0,3);
        if(lab == "LAB"){
            labNum++;

         //Cause we don't have enough time, the average is about 11.8 days

        }
        var par = dogData[i].breed.substring(0,3);
        if(par == "PAR"){
            parNum++;
        }
        var pit = dogData[i].breed.substring(0,3);
        if(pit == "PIT"){
            pitNum++;
        }
        var pood = dogData[i].breed.substring(0,4);
        if(pood == "POOD"){
            poodNum++;
        }
        var shih = dogData[i].breed.substring(0,4);
        if(shih == "SHIH"){
            shihNum++;
        }
        var sib = dogData[i].breed.substring(0,3);
        if(sib == "SIB"){
            sibNum++;
        }
        var rott = dogData[i].breed.substring(0,4);
        if(rott == "ROTT"){
            rottNum++;
        }
        var great = dogData[i].breed.substring(0,5);
        if(great == "GREAT"){
            greatNum++;
        }
        var pom = dogData[i].breed.substring(0,3);
        if(pom == "POM"){
            pomNum++;
        }
        
    }


    console.log("Number of German shepards is " + germNum);
    text("Number of German shepards is " + germNum, 100, 100);

    console.log("Number of Alaskan Husky is " + aHuskyNum);
    text("Number of Alaskan Husky is " + aHuskyNum, 100, 200);

    console.log("Number of Yorkshire Terrier is " + yorksNum);
    console.log("Number of pugs is " + pugNum);
    console.log("Number of Border Collie is " + borderNum);
    console.log("Number of Cairn is " + cairnNum);
    console.log("Number of Chihuahua is " + chiNum);
    console.log("Number of Labrador is " + labNum);
    console.log("Number of Parson Russ Ter is " + parNum);
    console.log("Number of Pit Bull is " + pitNum);
    console.log("Number of Poodle is " + poodNum);
    console.log("Number of Shih Tzu is " + shihNum);
    console.log("Number of Siberian Husky is " + sibNum);
    console.log("Number of Rottweiler is " + rottNum);
    console.log("Number of Great Pyrenesse is " + greatNum);
    console.log("Number of Pomeranians is " + pomNum);


    noLoop();

}
