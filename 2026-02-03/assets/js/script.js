let istina = document.getElementById('istina').value;
let urok = document.getElementById('urok').value;
let roky = document.getElementById('roky').value;
const btnSubmit = document.getElementById('btnSubmit');
const btnDelete = document.getElementById('btnDelete');
const resultP = document.getElementById('result');

btnSubmit.addEventListener('click', function() {
    istina = parseFloat(document.getElementById('istina').value);
    urok = parseFloat(document.getElementById('urok').value) / 100;
    roky = parseInt(document.getElementById('roky').value);
    
    let result = istina * Math.pow((1 + urok), roky);
    resultP.textContent = `Výsledná suma po ${roky} rokoch je ${result.toFixed(2)}.`;
});

btnDelete.addEventListener('click', function() {
    document.getElementById('istina').value = '';
    document.getElementById('urok').value = '';
    document.getElementById('roky').value = '';
    resultP.textContent = '';
}
);

