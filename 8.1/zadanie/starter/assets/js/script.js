// ===================================
// ÚLOHA 1: Základné údaje 
// ===================================
// Vytvor 4 premenné podľa toho, kde v akom elemente sa majú vypísať
// Daj si do premenných aj elementy, s ktorými budeš pracovaťm vytiahni si ich podľa ID
// 

let meno = "Dominik";
let vek = 18;
let skola = "Piaristická Stredná Odborná Škola Františka Hanáka v Prievidzi";
let konicek = "spanie";


const pMeno = document.getElementById("meno");
const pVek = document.getElementById("vek");
const pSkola = document.getElementById("skola");
const pKonicek = document.getElementById("konicek");
const pRokNarodenia = document.getElementById("rok-narodenia");



// ===================================
// ÚLOHA 2: Zobrazenie údajov 
// ===================================
// Použi textContent na zobrazenie všetkých 4 údajov v jednotlivých elementoch
//

pMeno.textContent = meno;
pVek.textContent = vek;
pSkola.textContent = skola;
pKonicek.textContent = konicek;



// ===================================
// ÚLOHA 3: Zmena farieb (6 bodov)
// ===================================
// 1. Najdi id tlačidla tak aby si s ním mohol pracovať, a tiež element, ktorých ich všetky obaľuje, aby si mu mohol zmeniť farbu orámovania
// 2. Pridaj mu event listener nech reaguje na udalosť 'click'
// 3. Pri kliknutí prepni triedu 'zmenene-farby' na elemente s triedou .container 
//    Použiješ: classList.toggle("zmenene-farby");

const btn = document.getElementById("btn-zmena");
const vizitka = document.getElementById("vizitka");
let zmenene = false;

btn.addEventListener("click", function() {
    vizitka.classList.toggle("zmenene-farby");
    if (zmenene == true) {
        zmenene = false;
        btn.textContent = "Zmeniť farby";
    } else {
        zmenene = true;
        btn.textContent = "Pôvodné farby";
    }
});


// ===================================
// ÚLOHA 4: Výpočet roku narodenia
// ===================================
// Vypočítaj rok narodenia,u lož do premennej, zobraz do elementu 

let rok = new Date().getFullYear(); // Nasiel som na stackoverflow https://stackoverflow.com/questions/6002254/get-the-current-year-in-javascript
let rokNarodenia = rok - vek;

pRokNarodenia.textContent = rokNarodenia;

// ===================================
// BONUS: Zmena textu tlačidla (4 body)
// ===================================
// Voliteľné 
// Zmeň text tlačidla z "Zmeniť farby" na "Pôvodné farby" a naspäť




