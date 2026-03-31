const celePole = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const celeHtml = document.getElementById("celePole");
const parneHtml = document.getElementById("parneCisla");
const neparneHtml = document.getElementById("neparneCisla");

for (cisla in celePole) {
  celeHtml.innerHTML += celePole[cisla] + ",";
  if (celePole[cisla] % 2 === 0) {
    parneHtml.innerHTML += celePole[cisla] + ",";
  } else {
    neparneHtml.innerHTML += celePole[cisla] + ",";
  }
}
