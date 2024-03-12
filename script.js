var wordList;

async function loadWordList() {
    try {
        const response = await fetch('words.json');
        wordList = await response.json();
    } catch{
        console.log("failure in finding word file");
    }
}

async function initialize() {
    await loadWordList();
    
}
var mode = "Base";

initialize();




function printTest(){
    console.log("working!");
    // document.getElementById("typeZoneID").style.backgroundColor = genRandomColor();
    mode = "HellDivers";
    // console.log(generate());
    // return generate();
    // console.log(wordList[13213]);
}

function apeTypeMenuB(){
    console.log("Mode switched to " + mode);
    mode = "Base";
}

function HellDiversMenuB(){
    console.log("Mode switched to " + mode);
    printTest();
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
    var words = new Array();
    for(var i = 0;i<45;i++){
        words.push(wordList[Math.floor(Math.random()*wordList.length-1)]);
    }


    var testZone = document.getElementById("typeZoneID").innerHTML = words;
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