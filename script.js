// import { generate, count } from "random-words";

var mode = "Base";



function printTest(){
    console.log("working!");
    // document.getElementById("typeZoneID").style.backgroundColor = genRandomColor();
    mode = "HellDivers";
    // console.log(generate());
    // return generate();
}

function apeTypeMenuB(){
    console.log("Mode switched to " + mode);
    mode = "Base";
}

function HellDiversMenuB(){
    console.log("Mode switched to " + mode);
    mode = "HellDivers";
}

function genRandomColor(){
    console.log("reached");
    const arrayOfColorFunctions = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
    var result = "#";
    for(var i = 0;i<6;i++){
        result += arrayOfColorFunctions[Math.floor(Math.random()*arrayOfColorFunctions.length)];
    }
    console.log(result);
    return result;
}

function startTest(){
    switch(mode){
        case "Base":
            console.log("Base");
            runBaseTest();
            break;
        case "HellDivers":
            console.log("HellDivers");
            runHellDive();
            break;
    }
}

function runBaseTest(){
    var testZone = document.getElementById("typeZoneID").innerHTML = 
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu molestie tellus, non congue elit. In feugiat justo risus, vitae malesuada est ullamcorper nec. Etiam pellentesque fringilla ante in pharetra. Duis nec sapien at tortor sodales auctor. Proin pretium eleifend bibendum. Duis non magna fermentum, fermentum ex sed, lacinia dui. Praesent dolor mi, vehicula at purus ut, pretium posuere nisl. Morbi lobortis magna et lectus finibus lobortis. Mauris mattis dui interdum, sollicitudin odio sit amet, semper leo.";
}

function runHellDive(){
    var options = new Array("⇧", "⇩", "⇨", "⇦");

    var words = new Array();

    for(var i = 0; i<(Math.ceil(Math.random()*5))+3;i++){
        words.push(options[Math.floor(Math.random()*4)]);
    }

    console.log(words);


    var testZone = document.getElementById("typeZoneID").innerHTML = words;
}