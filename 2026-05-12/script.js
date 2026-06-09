let pocet = 0;
let zmenma = document.getElementById("zmenma");
let fontsize = 1;
let cislo = document.getElementById("cislo");

function pozdrav() {
  let vysledok = document.getElementById("pozdrav");
  vysledok.innerText = "👍 Mal som ťa pozdraviť, tak ťa zdravím";
  vysledok.style.color = "green";
  vysledok.style.fontWeight = "bold";
  console.log(vysledok);
}

function zmenFarbuPozadia() {
  let meniFarbu = document.getElementById("meniFarbu");
  const farby = ["red", "green", "blue", "yellow"];
  const nahodneCislo = Math.floor(Math.random() * farby.length);
  meniFarbu.style.backgroundColor = farby[nahodneCislo];
  meniFarbu.innerText = "Pozadie: " + farby[nahodneCislo];
}

function plus() {
  pocet++;
  let spocitane = document.getElementById("spocitane");
  spocitane.innerText = pocet;
}

function minus() {
  pocet--;
  let spocitane = document.getElementById("spocitane");
  spocitane.innerText = pocet;
}

function reset() {
  pocet = 0;
  let spocitane = document.getElementById("spocitane");
  spocitane.innerText = pocet;
}

function vacsie() {
  fontsize++;
  zmenma.style.fontSize = fontsize + "rem";
}

function mensie() {
  fontsize--;
  zmenma.style.fontSize = fontsize + "rem";
}

function zmenfont() {
  let zmenfont = document.getElementById("zmenfont");
  fonts = [
    "Arial, sans-serif",
    "Times New Roman, serif",
    "Courier New, monospace",
    "Georgia, serif",
  ];
  const nahodneCislo = Math.floor(Math.random() * fonts.length);
  zmenma.style.fontFamily = fonts[nahodneCislo];
}

function reset2() {
  let zmenma = document.getElementById("zmenma");
  zmenma.style.fontFamily = "inherit";
  zmenma.style.fontSize = "1rem";
}

function generuj() {
  let nahodneCislo = Math.floor(Math.random() * 100) + 1;
  cislo.innerText = nahodneCislo;
}

function farba() {
  let farby = [
    "red",
    "green",
    "blue",
    "yellow",
    "orange",
    "purple",
    "pink",
    "brown",
    "gray",
    "black",
  ];
  let nahodneCislo = Math.floor(Math.random() * farby.length);
  let nahodneCislo2 = Math.floor(Math.random() * farby.length - 3);
  cislo.style.color = farby[nahodneCislo];
  cislo.style.backgroundColor = farby[nahodneCislo2];
}
