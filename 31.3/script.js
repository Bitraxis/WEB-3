const cislo1 = document.getElementById("cislo1");
const cislo2 = document.getElementById("cislo2");
const cislo3 = document.getElementById("cislo3");
const out = document.getElementById("out");

function porovnaj(ev) {
  if (cislo1.value > cislo2.value && cislo1.value > cislo3.value) {
    out.innerHTML = "Najvačšie číslo je prvé : " + cislo1.value;
  } else if (cislo2.value > cislo1.value && cislo2.value > cislo3.value) {
    out.innerHTML = "Najvačšie číslo je druhé : " + cislo2.value;
  } else if (cislo3.value > cislo1.value && cislo3.value > cislo2.value) {
    out.innerHTML = "Najvačšie číslo je tretie : " + cislo3.value;
  } else {
    out.innerHTML = "Čísla sú rovnaké";
  }
}
