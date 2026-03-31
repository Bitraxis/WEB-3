const a = document.getElementById("a").value;
const b = document.getElementById("b").value;
const c = document.getElementById("c").value;

const out = document.getElementById("out");

function vypocitat() {
  if (a === "" || b === "" || c === "") {
    out.innerHTML = "Zadajte všetky čísla";
  } else if (a === b || b === c || a === c) ) {
    out.innerHTML = "Trojuholník je rovnorammený";
  } else if (b === c) {
    out.innerHTML = "Trojuholník je rovnostranný";
  } else if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2)) {
    out.innerHTML = "Trojuholník je pravouhlý";
  } else {
    out.innerHTML = "Trojuholník je rôznostranný";
  }
}
