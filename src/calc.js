function addition(x,y) {
    return x+y;
}

function multiplication(x,y) {
    return x*y;
}

function soustraction(x, y){
    return x-y;
}

function main() {
    let x = 5;
    let y = 10;
    let resultatAdd = addition(x, y);
    let resultatMult = multiplication(x, y);
    let resultatSous = soustraction(x, y);
    console.log(`Addition: ${resultatAdd}, Multiplication: ${resultatMult}, Soustraction: ${resultatSous}`);
}

main();