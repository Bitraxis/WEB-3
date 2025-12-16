// ===================================
// 1. VYTVOR PREMENNÉ
// ===================================
// Vytvor premenné s tvojimi údajmi:
// meno, vek, mesto, konicek

let idMeno = document.getElementById("meno").value;
let idVek = document.getElementById("vek").value;
let idMesto = document.getElementById("mesto").value;
let idKonicek = document.getElementById("konicek").value;

const meno = "Dominik Nagy";
const vek = 18;
const mesto = "Tužina";
const konicek = "programovanie";

// ===================================
// 2. VÝPOČTY
// ===================================
// Vypočítaj rok narodenia (aktuálny rok 2025 - vek)
let rokNarodenia = 2025 - vek;
// Vypočítaj koľko rokov ti chýba do 18 (18 - vek)
let doDospelosti = 18 - vek;


// ===================================
// 3. ZOBRAZ ZÁKLADNÉ ÚDAJE
// ===================================
// Použi querySelector a textContent na zobrazenie:
// - meno do elementu #meno
// - vek do elementu #vek
// - mesto do elementu #mesto
// - konicek do elementu #konicek

document.querySelector("#meno").textContent = meno;
document.querySelector("#vek").textContent = vek;
document.querySelector("#mesto").textContent = mesto;
document.querySelector("#konicek").textContent = konicek;




// ===================================
// 4. ZOBRAZ VÝPOČTY
// ===================================
// Zobraz vypočítané hodnoty:
// - rok narodenia do #rok-narodenia
// - rokov do dospelosti do #do-dospelosti

document.querySelector("#rok-narodenia").textContent = rokNarodenia;
document.querySelector("#do-dospelosti").textContent = doDospelosti;



// ===================================
// 5. VYTVOR BIO TEXT
// ===================================
// Použi template literals na vytvorenie vety:
// "Ahoj! Volám sa [meno], mám [vek] rokov a pochádzam z [mesto]. Vo voľnom čase rád/-a [konicek]."
// Zobraz text do elementu #o-mne

let bioText = `Ahoj! Volám sa ${meno}, mám ${vek} rokov a pochádzam z ${mesto}. Vo voľnom čase rád/-a ${konicek}.`;
document.querySelector("#o-mne").textContent = bioText;


// ===================================
// 6. UPRAV ŠTÝLY CEZ JAVASCRIPT
// ===================================
// Najdi element #status a:
// - Zmeň text na "Profil načítaný!"
// - Odstráň triedu "nacitavam"
// - Pridaj triedu "uspech"
// - Zmeň farbu textu na #4CAF50
//
let statusElement = document.querySelector("#status");
statusElement.textContent = "Profil načítaný!";
statusElement.classList.remove("nacitavam");
statusElement.classList.add("uspech");
statusElement.style.color = "#4CAF50";

