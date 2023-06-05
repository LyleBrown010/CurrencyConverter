
let amount = document.getElementById("currentCurrency").value;


// function for rand conversions 
function randToEuro(amount){
    amount = parseFloat(amount);
    let sum = (amount*0.048).toFixed(2);
    // return sum;
    // document.write(sum);
    console.log(sum);
}

function randToDollar(rand){
    rand = parsefloat(rand); 
    let sum = (rand*0.051).toFixed(2);
    // return sum;
    document.write(sum); 
}

function randToPound(rand){
    rand = parsefloat(rand);
    let sum = (rand*0.042).toFixed(2);
    // return sum;
    document.write(sum); 
}

function euroToRand(euro){
    euro = parseFloat(euro); 
    let sum = (euro*20.77).toFixed(2);
    // return sum;
    document.write(sum);
}
function euroToDollar(euro){
    euro = parseFloat(euro); 
    let sum = (euro*1.07).toFixed(2);
    // return sum;
    document.write(sum);
}
function euroToPound(euro){
    euro = parseFloat(euro); 
    let sum = (euro*0.86).toFixed(2);
    // return sum;
    document.write(sum);
}

function dollarToRand(dollar){
    dollar = parseFloat(dollar);
    let sum = (dollar*19.37).toFixed(2);
    // return sum;
    document.write(sum); 
}
function dollarToEuro(dollar){
    dollar = parseFloat(dollar);
    let sum = (dollar*0.93).toFixed(2);
    // return sum; 
}
function dollarToPound(dollar){
    dollar = parseFloat(dollar);
    let sum = (dollar*0.81).toFixed(2);
    // return sum;
    document.write(sum); 
}

function poundToRand(pound){
    pound = parseFloat(pound);
    let sum = (pound*24.03).toFixed(2);
    // return sum;
    document.write(sum);
}
function poundToDollar(pound){
    pound = parseFloat(pound);
    let sum = (pound*1.24).toFixed(2);
    // return sum;
    document.write(sum);
}
function poundToRand(pound){
    pound = parseFloat(pound);
    let sum = (pound*1.16).toFixed(2);
    // return sum;
    document.write(sum);
}

// amount and conversion type

// if (conversionType.toLowerCase() === "rand to euro"){
//     document.getElementById("display") = randToEuro(rand);
// }

// Rand to Euro? 
// Rand to Dollar? 
// Rand to Pound?
// Euro to Rand? 
// Euro to Dollar? 
// Euro to Pound? 
// Dollar to Rand? 
// Dollar to Euro ? 
// Dollar to Pound? 
// Pound to Rand? 
// Pound to Dollar? 
// Pound to Euro? 