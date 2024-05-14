// exe1
function add(a,b) {
    return a + b;
}

function subtract(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function divide(a,b) {
    return a / b;
}

console.log(add(1,2),subtract(1,2),multiply(1,2),divide(1,2));


// exe2

function information(firstName,location,hobby){
    console.log("Hi, my name is " + firstName + " I live in " + location + " and enjoy "+hobby);
}

let firstName = "Mai";
let location = "BKK";
let hobby = "Reading";
information(firstName,location,hobby);