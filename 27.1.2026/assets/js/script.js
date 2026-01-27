console.log("Hello");

let chlieb = 1.5;
let mlieko = 0.9;
let maslo = 2.30;

console.log("Chleby stoja " + chlieb*2 + "€");
console.log("Mlieka stoja " + mlieko*3 + "€");
console.log("Maslo sroji " + maslo + "€");

console.log ("Nakup stoji " + (chlieb*2 + mlieko*3 + maslo) + "€");

let kilometre = 5;

let mile = kilometre*0.621371;

console.log(kilometre + " km je: " + mile + " miles");

let gramy = 2500;
let kilogramy = gramy / 1000;

console.log(gramy + "g" + " je: " + kilogramy + "kg");

let celsia = 22;

let fahrenheit = (celsia * 9/5) + 32;

console.log(celsia + "°C" + " je: " + fahrenheit + "°F");

function showName(e) {
    let meno = document.getElementById("meno").value;
    let priezvisko = document.getElementById("priezvisko").value;
    let celeMeno = meno + " " + priezvisko; 
    let dlzkaMena = celeMeno.length;
    const prvePismenoMena = meno[0];
    const tretiePismenoMena = priezvisko[0];
    const email = meno.toLowerCase() + "." + priezvisko.toLowerCase() + "@" + "email.sk";
    console.log(email);
    console.log(dlzkaMena);
    console.log(prvePismenoMena + "." + tretiePismenoMena + ".");
    document.getElementById("out").innerText = celeMeno + " = dlzka mena je (aj z medzerou) " + dlzkaMena + " jeho inicialky su: " + prvePismenoMena + "." + tretiePismenoMena + "." + " email: " + email;
}

let prvaVeta = "JavaScript je super";
let druhaVeta = "Programovanie nás bavý";

if ( prvaVeta.length > druhaVeta.length ) {
    console.log(prvaVeta + " : je dlhsia");
} else {
    console.log(druhaVeta + " : je dlhsia");    
}